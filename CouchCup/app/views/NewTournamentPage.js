// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: CouchCup
// View: NewTournamentPage
// ==========================================================================

m_require('app/views/Tabs.js');

CouchCup.NewTournamentPage = M.PageView.design({

    events: {

        pagebeforeshow: {

            target: CouchCup.LayoutController,

            action: 'initApplication'
            
        }

    },

    cssClass: 'newTournamentPage',

    childViews: 'content tabs',

    content: M.ScrollView.design({

        childViews: 'containerSteps containerAction',

        containerSteps: M.ContainerView.design({

            cssClass: 'containerSteps',

            childViews: 'list',

            list: M.SelectionListView.design({

                cssClass: 'stepsList',

                childViews: 'step1 step2 step3',

                events: {

                    change: {

                        target: CouchCup.ApplicationController,

                        action: 'stepSelected'

                    }

                },

                step1: M.SelectionListItemView.design({

                    value: '0',

                    label: M.I18N.l('stepBasics'),

                    isSelected: YES
                    
                }),

                step2: M.SelectionListItemView.design({

                    value: '1',

                    label: M.I18N.l('stepPlayers')

                }),

                step3: M.SelectionListItemView.design({

                    value: '2',

                    label: M.I18N.l('stepShuffling')

                })
                
            })
            
        }),

        containerAction: M.ContainerView.design({

            cssClass: 'containerAction',

            childViews: 'stepContainers',

            stepContainers: M.ContainerView.design({

                cssClass: 'containers',

                childViews: 'stepBasics stepPlayers stepShuffling',

                stepBasics: M.ContainerView.design({

                    cssClass: 'stepBasicsContainer',

                    childViews: 'title labelName inputName labelMode modeGrid modeGridInfo',

                    title: M.LabelView.design({

                        cssClass: 'title',

                        computedValue: {

                            value: M.I18N.l('stepBasics'),
                            
                            operation: function(v) {

                                if(v) {

                                    return v.toUpperCase();

                                }

                            }

                        }

                    }),

                    labelName: M.LabelView.design({

                        cssClass: 'label',

                        value: M.I18N.l('infoInputName')

                    }),

                    inputName: M.TextFieldView.design({

                        cssClass: 'name',

                        cssClassOnInit: 'initial',

                        initialText: M.I18N.l('defaultCupName') + D8.now().format('yyyy-mm-dd')

                    }),

                    labelMode: M.LabelView.design({

                        cssClass: 'label',

                        value: M.I18N.l('infoInputMode')

                    }),

                    modeGrid: M.GridView.design({

                        childViews: 'modeKO modeLeague',

                        layout: M.TWO_COLUMNS,

                        modeKO: M.ImageView.design({

                            events: {

                                tap: {

                                    target: CouchCup.ApplicationController,

                                    action: 'setMode'

                                }

                            },

                            computedValue: {

                                value: 'ko',

                                contentBinding: {

                                    target: CouchCup.ApplicationController,

                                    property: 'mode'

                                },

                                operation: function(v) {

                                    if(v === 'ko') {

                                        return 'theme/images/mode_ko_active.png';

                                    } else {

                                        return 'theme/images/mode_ko.png';

                                    }

                                }

                            }

                        }),

                        modeLeague: M.ImageView.design({

                            events: {

                                tap: {

                                    target: CouchCup.ApplicationController,

                                    action: 'setMode'

                                }

                            },

                            computedValue: {

                                contentBinding: {

                                    target: CouchCup.ApplicationController,

                                    property: 'mode'

                                },

                                operation: function(v) {

                                    if(v === 'league') {

                                        return 'theme/images/mode_league_active.png';

                                    } else {

                                        return 'theme/images/mode_league.png';

                                    }

                                }

                            }

                        })

                    }),

                    modeGridInfo: M.GridView.design({

                        childViews: 'modeKOInfo modeLeagueInfo',

                        layout: M.TWO_COLUMNS,

                        modeKOInfo: M.LabelView.design({

                            value: M.I18N.l('modeKOInfo')

                        }),

                        modeLeagueInfo: M.LabelView.design({

                            value: M.I18N.l('modeLeagueInfo')

                        })

                    })

                }),

                stepPlayers: M.ContainerView.design({

                    cssClass: 'stepPlayersContainer',

                    childViews: 'title',

                    title: M.LabelView.design({

                        cssClass: 'title',

                        computedValue: {

                            value: M.I18N.l('stepPlayers'),

                            operation: function(v) {

                                if(v) {

                                    return v.toUpperCase();

                                }

                            }

                        }

                    })

                }),

                stepShuffling: M.ContainerView.design({

                    cssClass: 'stepPlayersContainer',

                    childViews: 'title',

                    title: M.LabelView.design({

                        cssClass: 'title',

                        computedValue: {

                            value: M.I18N.l('stepShuffling'),

                            operation: function(v) {

                                if(v) {

                                    return v.toUpperCase();

                                }

                            }

                        }

                    })

                })

            })

        })

    }),

    tabs: CouchCup.Tabs

});