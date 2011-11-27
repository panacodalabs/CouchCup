// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: CouchCup
// Controller: ApplicationController
// ==========================================================================

CouchCup.ApplicationController = M.Controller.extend({

    step: 0,

    name: null,

    mode: 'ko',

    players: [],

    numberOfPlayers: 0,

    numberOfPlayersPerTeam: 1,

    playHereAndThere: YES,

    createTeamsAutomatically: YES,

    info: null,

    stepSelected: function(value, item) {

        var containerWidth = (M.Math.round(CouchCup.LayoutController.width * 0.7));
        var factor = Math.abs(this.step - value);
        var distance =  factor * containerWidth;
        var sign = value < this.step ? '+' : '-';
        var duration = 500;

        $('.newTournamentPage .containers').animate(
            {
                opacity: 0
            },
            duration/2
        );

        window.setTimeout(function() {
            $('.newTournamentPage .containers').animate(
                {
                    left: sign + '=' + distance
                },
                0
            );
            $('.newTournamentPage .containers').animate(
                {
                    opacity: 1
                },
                duration/2,
                function() {
                    CouchCup.LayoutController.resizePlayersContainer();
                }
            );
        }, duration/2)

        this.set('step', value);
        
    },

    setMode: function(id) {

        var image = M.ViewManager.getViewById(id);
        if(image && image.value) {

            if(image.value.lastIndexOf('mode_ko') > 0) {

                this.set('mode', 'ko');

            } else {

                this.set('mode', 'league');

            }
            
        }

    },

    addPlayer: function(id) {

        var textField = M.ViewManager.getViewById(id);
        var username = textField.value;

        if(!username) {
            return;
        }

        textField.setValue('');

        this.players.push(username);

        this.set('numberOfPlayers', this.players.length);

        var html = "";
        _.each(this.players, function(player, key) {

            html += '<div class="player" id="player_' + key + '">' + player + '</div>';

        });

        var playerContainer = M.ViewManager.getView('newTournamentPage', 'players');
        $('#' + playerContainer.id).html(html);

        var that = this;
        _.each(this.players, function(player, key) {
            $('#player_' + key).unbind().bind('tap', function(evt) {
                CouchCup.UtilityController.confirm(
                    'Möchtest du ' + player + ' löschen?',
                    function(buttonIndex) {
                        if(buttonIndex === 1) {
                            _.each(that.players, function(pl, k) {
                                if(player === pl) {
                                    that.players.splice(k, 1);
                                    $('#player_' + k).remove();
                                }
                            });
                        }
                    }
                );
            });
        });
    },

    setPlayersPerTeam: function(id) {

        var image = M.ViewManager.getViewById(id);
        if(image && image.value) {

            var grid = M.ViewManager.getView('newTournamentPage', 'inputRule1');
            var numberOfPlayersPerTeam = Number(image.value.substr(image.value.lastIndexOf('player_') + 7, 1));
            var imageCounter = 1;
            var that = this;
            
            $('#' + grid.id).find('img').each(function() {
                if(imageCounter++ === that.numberOfPlayersPerTeam) {
                    $(this).attr('src', $(this).attr('src').substr(0, $(this).attr('src').lastIndexOf('_active')) + '.png');
                    M.ViewManager.getViewById($(this).attr('id')).value = $(this).attr('src');
                }
            });

            $('#' + image.id).attr('src', $('#' + image.id).attr('src').substr(0, $('#' + image.id).attr('src').length - 4) + '_active.png');
            image.value = $('#' + image.id).attr('src');

            this.numberOfPlayersPerTeam = numberOfPlayersPerTeam;

            if(this.numberOfPlayersPerTeam === 1) {
                $('#' + M.ViewManager.getView('newTournamentPage', 'labelRule3').id).hide();
                $('#' + M.ViewManager.getView('newTournamentPage', 'inputRule3').id).hide();
            } else {
                $('#' + M.ViewManager.getView('newTournamentPage', 'labelRule3').id).show();
                $('#' + M.ViewManager.getView('newTournamentPage', 'inputRule3').id).show();
            }

        }

    },

    startShuffling: function() {

//        var text = 'Turnier: ' + this.name + '<br/>' +
//        'Modus: ' + this.mode + '<br/>' +
//        'Spieler: ' + this.players + '<br/>' +
//        'Spieler pro Team: ' + this.numberOfPlayersPerTeam + '<br/>' +
//        'Hin- und Rückspiel: ' + this.playHereAndThere + '<br/>' +
//        'Automatische Auslosung: ' + this.createTeamsAutomatically;
//
//        this.set('info', text);

        this.createTeams();
        
    },

    createTeams: function() {

        var players = _.shuffle(this.players);
        for(var i = 0; i < this.players.length; i += this.numberOfPlayersPerTeam) {
            var playerNames = '';
            for(var j = 0; j < this.numberOfPlayersPerTeam; j++) {
                playerNames += players[i + j] + ((j + 1) !== this.numberOfPlayersPerTeam ? ', ' : '');
            }
            console.log('Team ' + '#' + ((i / this.numberOfPlayersPerTeam) + 1) + ': ' + playerNames);
        }

    }

});
