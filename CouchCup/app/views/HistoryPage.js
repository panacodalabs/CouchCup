// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: CouchCup
// View: NewTournamentPage
// ==========================================================================

m_require('app/views/Tabs.js');

CouchCup.HistoryPage = M.PageView.design({

    childViews: 'header content tabs',

    header: M.ToolbarView.design({
        value: M.I18N.l('tabHistory'),
        anchorLocation: M.TOP
    }),

    content: M.ScrollView.design({
        childViews: 'label',
        label: M.LabelView.design({
            value: M.I18N.l('tabHistory')
        })
    }),

    tabs: CouchCup.Tabs

});