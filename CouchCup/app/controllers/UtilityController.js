// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: CouchCup
// Controller: UtilityController
// ==========================================================================

CouchCup.UtilityController = M.Controller.extend({

    confirm: function(message, callback, title, buttonNames, scope) {
        if(navigator && navigator.notification) {
            navigator.notification.confirm(
                message,
                callback,
                title,
                buttonNames
            );
        } else {
            M.DialogView.confirm({
                title: title,
                message: message,
                callbacks: {
                    confirm: {
                        target: scope,
                        action: function() {
                            callback(1);
                        }
                    },
                    cancel: {
                        target: scope,
                        action: function() {
                            callback(2);
                        }
                    }
                }
            });
        }
    }

});
