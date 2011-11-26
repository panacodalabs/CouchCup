// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: CouchCup
// Controller: ApplicationController
// ==========================================================================

CouchCup.ApplicationController = M.Controller.extend({

    step: 0,

    mode: 'ko',

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
                duration/2
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

    }

});
