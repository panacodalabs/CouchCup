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

                childViews: 'step1 step2 step3 step4',

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

                    label: M.I18N.l('stepRules')

                }),

                step3: M.SelectionListItemView.design({

                    value: '2',

                    label: M.I18N.l('stepPlayers')

                }),

                step4: M.SelectionListItemView.design({

                    value: '3',

                    label: M.I18N.l('stepShuffling')

                })
                
            })
            
        }),

        containerAction: M.ContainerView.design({

            cssClass: 'containerAction',

            childViews: 'stepContainers',

            stepContainers: M.ContainerView.design({

                cssClass: 'containers',

                childViews: 'stepBasics stepRules stepPlayers stepShuffling',

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

                stepRules: M.ContainerView.design({

                    cssClass: 'stepRulesContainer',

                    childViews: 'title labelRule1 inputRule1 labelRule2 inputRule2',

                    title: M.LabelView.design({

                        cssClass: 'title',

                        computedValue: {

                            value: M.I18N.l('stepRules'),

                            operation: function(v) {

                                if(v) {

                                    return v.toUpperCase();

                                }

                            }

                        }

                    }),

                    labelRule1: M.LabelView.design({

                        cssClass: 'label',

                        value: M.I18N.l('infoInputRule1')

                    }),

                    inputRule1: M.GridView.design({

                        layout: M.FOUR_COLUMNS,

                        childViews: 'player1 player2 player3 player4',

                        player1: M.ImageView.design({

                            value: 'theme/images/player_1_active.png',

                            events: {

                                tap: {

                                    target: CouchCup.ApplicationController,

                                    action: 'setPlayersPerTeam'

                                }

                            }

                        }),

                        player2: M.ImageView.design({

                            value: 'theme/images/player_2.png',

                            events: {

                                tap: {

                                    target: CouchCup.ApplicationController,

                                    action: 'setPlayersPerTeam'

                                }

                            }

                        }),

                        player3: M.ImageView.design({

                            value: 'theme/images/player_3.png',

                            events: {

                                tap: {

                                    target: CouchCup.ApplicationController,

                                    action: 'setPlayersPerTeam'

                                }

                            }

                        }),

                        player4: M.ImageView.design({

                            value: 'theme/images/player_4.png',

                            events: {

                                tap: {

                                    target: CouchCup.ApplicationController,

                                    action: 'setPlayersPerTeam'

                                }

                            }

                        })

                    }),

                    labelRule2: M.LabelView.design({

                        cssClass: 'label',

                        value: M.I18N.l('infoInputRule2')

                    }),

                    inputRule2: M.SelectionListView.design({

                        childViews: 'yes no',

                        cssClass: 'hereAndThere',

                        yes: M.SelectionListItemView.design({

                            value: YES,

                            label: M.I18N.l('hereAndThereYes'),

                            isSelected: YES

                        }),

                        no: M.SelectionListItemView.design({

                            value: NO,

                            label: M.I18N.l('hereAndThereNo')

                        })

                    })

                }),

                stepPlayers: M.ContainerView.design({

                    cssClass: 'stepPlayersContainer',

                    childViews: 'title labelUsername inputUsername players',

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

                    }),

                    labelUsername: M.LabelView.design({

                        cssClass: 'label',

                        computedValue: {

                            value: 0,

                            contentBinding: {

                                target: CouchCup.ApplicationController,

                                property: 'numberOfPlayers'

                            },

                            operation: function(v) {

                                return M.I18N.l('infoInputUsername1') + (++v) + M.I18N.l('infoInputUsername2');

                            }

                        }

                    }),

                    inputUsername: M.TextFieldView.design({

                        cssClass: 'name',

                        cssClassOnInit: 'initial',

                        initialText: M.I18N.l('defaultUsername'),

                        events: {

                            enter: {

                                target: CouchCup.ApplicationController,

                                action: 'addPlayer'

                            }

                        },

                        numberOfChars: 25

                    }),

                    players: M.ContainerView.design({

                        cssClass: 'players'

                    })

                }),

                stepShuffling: M.ContainerView.design({

                    cssClass: 'stepShufflingContainer',

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