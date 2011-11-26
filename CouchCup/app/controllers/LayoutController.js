// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: CouchCup
// Controller: LayoutController
// ==========================================================================

CouchCup.LayoutController = M.Controller.extend({

    width: null,

    height: null,

    initApplication: function(isFirstLoad) {

        if(isFirstLoad) {

            this.width = M.Environment.getWidth();
            this.height = M.Environment.getHeight() - 50;
            var padding = M.Math.round(this.width * 0.06);
            
            this.height = this.height - M.Math.round(2 * padding);
            this.width = this.width - M.Math.round(3 * padding);

            $('.newTournamentPage .ui-content').css('padding', padding);

            $('.newTournamentPage .ui-content').css('height', this.height + 'px');
            $('.newTournamentPage .containerSteps').css('width', M.Math.round(this.width * 0.3));
            $('.newTournamentPage .containerAction').css('width', M.Math.round(this.width * 0.7));
            $('.newTournamentPage .containerAction').css('margin-left', padding);

            var stepCounter = 1;
            $('.newTournamentPage .stepsList_container label').each(function() {
                $(this).find('span.ui-icon').html(stepCounter++);
            });

            padding = 2 * (parseInt($('.newTournamentPage .containerAction div.name_container input.name').css('padding-left')) + parseInt($('.newTournamentPage .containerAction div.name_container').css('padding-left')));
            $('.newTournamentPage .containerAction div.name_container input.name').css('width', M.Math.round(this.width * 0.7) - padding);

            var that = this;
            $('.newTournamentPage .containers').find(' > div').each(function() {
                $(this).css('width', M.Math.round(that.width * 0.7));
            });
            $('.newTournamentPage .containers').css('width', --stepCounter * M.Math.round(this.width * 0.7));

            $('.newTournamentPage .containerAction .players').css('height', $('.newTournamentPage .containerAction').height() - $('.newTournamentPage .containerAction .players').position().top - 30 + 'px');

        }

    },

    resizePlayersContainer: function() {
        $('.newTournamentPage .containerAction .players').css('height', $('.newTournamentPage .containerAction').height() - $('.newTournamentPage .containerAction .players').position().top - 30 + 'px');
    }

});