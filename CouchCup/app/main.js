// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: CouchCup 
// ==========================================================================

var CouchCup  = CouchCup || {};

CouchCup.app = M.Application.design({

    /* Define the entry/start page of your app. This property must be provided! */
    entryPage : 'newTournamentPage',

    newTournamentPage: CouchCup.NewTournamentPage,

    historyPage: CouchCup.HistoryPage,

    settingsPage: CouchCup.SettingsPage

});