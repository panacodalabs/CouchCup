// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: CouchCup
// View: Tabs
// ==========================================================================

CouchCup.Tabs = M.TabBarView.design({

    childViews: 'tabNew tabHistory tabSettings',

    anchorLocation: M.BOTTOM,

    tabNew: M.TabBarItemView.design({

        value: M.I18N.l('tabNew'),
        page: 'newTournamentPage',
        icon: 'controls',
        isActive: YES

    }),

    tabHistory: M.TabBarItemView.design({

        value: M.I18N.l('tabHistory'),
        page: 'historyPage',
        icon: 'utilities'

    }),

    tabSettings: M.TabBarItemView.design({

        value: M.I18N.l('tabSettings'),
        page: 'settingsPage',
        icon: 'storage'

    })

});