import { Injectable } from '@nimble-ts/core/inject';
import { HttpClient } from '@nimble-ts/core/providers/http-client';
import { Version } from 'src/app/models/version.model';
import { VersionMenu } from '../models/version-menu.model';
import { LangService } from './lang.service';

@Injectable({ single: true })
export class NimbleDataService {

    public versions: Version[] = [];
    
    public languages: { id: string, name: string }[] = [
        { id: 'enUS', name: 'ENGLISH' },
        { id: 'ptBR', name: 'PORTUGUESE' },
    ];

    constructor(
        private langService: LangService,
        private httpClient: HttpClient
    ) {
	}
	
	public async getPackgeVersion(): Promise<string> {
		try {
			// const response = await (await this.httpClient.get<any>('https://registry.npmjs.org/@nimble-ts/core/latest')).data;
			// return response?.version ?? '1.0.0';

			//const response = await (await this.httpClient.get<any>('https://api.npms.io/v2/search?q=@nimble-ts/core/latest')).data;
			// if (response?.total > 0) {
			// 	return response?.results[0].package.version;
			// }
			// return '1.0.0';
			const response = await (await this.httpClient.get<any>('https://api.npms.io/v2/search?q=@nimble-ts/core')).data;
	
			if (response?.total > 0) {
				return response?.results[0].package.version;
			}
			return '1.0.0';
		}
		catch(e) {
			return '1.0.0';
		}
	}

    public async prapreMenu() {
		let version = await this.getPackgeVersion();
        this.versions = [
            new Version({
                id: '1x',
                name: `${version} ${this.langService.get('GLOBAL.LATEST').toLowerCase()}`,
                menu: [
                    new VersionMenu({
                        description: 'ESSENTIALS',
                        path: 'essentials',
                        keyWords: [],
                        submenu: [
                            new VersionMenu({
                                description: 'INTRODUCTION',
                                path: 'introduction',
                                keyWords: [],
                                submenu: [
                                    new VersionMenu({
                                        description: 'WHAT_IS_THE_NIMBLE',
                                        path: '#what-is-nimble',
                                        keyWords: []
                                    }),
                                    new VersionMenu({
                                        description: 'FIRST_STEPS',
                                        path: '#first-steps',
                                        keyWords: []
                                    }),
                                    new VersionMenu({
                                        description: 'RENDERING_A_SIMPLE_PAGE',
                                        path: '#rendering-a-simple-page',
                                        keyWords: []
                                    }),
                                    new VersionMenu({
                                        description: 'DECLARATIVE_RENDER',
                                        path: '#declarative-render',
                                        keyWords: []
                                    }),
                                    new VersionMenu({
                                        description: 'NOTIFICATION_TO_RERENDER',
                                        path: '#notification-to-update-page',
                                        keyWords: []
                                    }),
                                    new VersionMenu({
                                        description: 'CONDITION_AND_LOOPS',
                                        path: '#condition-and-loops',
                                        keyWords: []
                                    }),
                                    new VersionMenu({
                                        description: 'HIDE_AND_SHOW_ELEMENTS',
                                        path: '#hide-and-show-elements',
                                        keyWords: []
                                    }),
                                    new VersionMenu({
                                        description: 'SHOW_LIST_ELEMENTS',
                                        path: '#show-list-elements',
                                        keyWords: []
                                    })
                                ]
                            }),
                            new VersionMenu({
                                description: 'GET_STARTED',
                                path: 'get-started',
                                keyWords: [],
                                submenu: [
                                    new VersionMenu({
                                        description: 'INSTALL_CLI',
                                        path: '#install-cli',
                                        keyWords: []
                                    }),
                                    new VersionMenu({
                                        description: 'CREATE_A_PROJECT',
                                        path: '#create-a-project',
                                        keyWords: []
                                    })
                                ]
                            }),
                            new VersionMenu({
                                description: 'STRUCTURE',
                                path: 'structure',
                                keyWords: [],
                                submenu: [
                                    new VersionMenu({
                                        description: 'FOLDER_ARCHIVES_STRUCTURE',
                                        path: '#folder-archives-structure',
                                        keyWords: []
                                    }),
                                    new VersionMenu({
                                        description: 'ROOT_FILES',
                                        path: '#root-files',
                                        keyWords: []
                                    }),
                                    new VersionMenu({
                                        description: 'PUBLIC_DIRECTORY',
                                        path: '#public-directory',
                                        keyWords: []
                                    }),
                                    new VersionMenu({
                                        description: 'SOURCE_DIRECTORY',
                                        path: '#src-directory',
                                        keyWords: []
                                    }),
                                    new VersionMenu({
                                        description: 'APP_DIRECTORY',
                                        path: '#app-directory',
                                        keyWords: []
                                    }),
                                    new VersionMenu({
                                        description: 'ENVIRONMENTS_DIRECTORY',
                                        path: '#environments-directory',
                                        keyWords: []
                                    }),
                                    new VersionMenu({
                                        description: 'SCSS_DIRECTORY',
                                        path: '#scss-directory',
                                        keyWords: []
                                    }),
                                ]
                            }),
                            new VersionMenu({
                                description: 'SSR',
                                path: 'ssr',
                                keyWords: [],
                                submenu: [
                                    new VersionMenu({
                                        description: 'HOW_WORK',
                                        path: '#how-work',
                                        keyWords: []
                                    }),
                                    new VersionMenu({
                                        description: 'HOW_USE',
                                        path: '#how-use',
                                        keyWords: []
                                    }),
                                    new VersionMenu({
                                        description: 'DINAMIC_CONTENT',
                                        path: '#dinamic-content',
                                        keyWords: []
                                    }),
                                ]
                            }),
                        ]
                    }),
					new VersionMenu({
						description: 'FRAMEWORK',
						path: 'framework',
						submenu: [
							/* new VersionMenu({
								description: 'INTERPOLATION',
								path: 'interpolation',
								keyWords: []
							}), */
							new VersionMenu({
								description: 'ROUTES',
								path: 'routes',
								keyWords: []
							}),
							new VersionMenu({
								description: 'PAGES',
								path: 'pages',
								keyWords: []
							}),
							new VersionMenu({
								description: 'DIALOGS',
								path: 'dialogs',
								keyWords: []
							}),
							new VersionMenu({
								description: 'SERVICES',
								submenu: [
									new VersionMenu({
										description: 'ABOUT',
										path: 'services/about',
										keyWords: []
									}),
									new VersionMenu({
										description: 'INTERNAL',
										path: 'services/internals',
										keyWords: []
									}),
								],
								keyWords: []
							}),
							new VersionMenu({
								description: 'DIRECTIVES',
								submenu: [
									new VersionMenu({
										description: 'ABOUT',
										path: 'directives/about',
										keyWords: []
									}),
									new VersionMenu({
										description: 'INTERNAL',
										path: 'directives/internals',
										keyWords: []
									}),
								],
								keyWords: []
							}),
							new VersionMenu({
								description: 'FORMS',
								path: 'reactive-forms',
								submenu: [
                                    new VersionMenu({
                                        description: 'STRUCTURE',
                                        path: '#structure',
                                        keyWords: []
                                    }),
                                    new VersionMenu({
                                        description: 'START_USE',
                                        path: '#start-use',
                                        keyWords: []
                                    }),
                                    new VersionMenu({
                                        description: 'VALIDATE_FORM',
                                        path: '#validate-form',
                                        keyWords: []
                                    }),
                                    new VersionMenu({
                                        description: 'VALIDATORS',
                                        path: '#validators',
                                        keyWords: []
                                    }),
                                    new VersionMenu({
                                        description: 'CREATE_VALIDATOR',
                                        path: '#create-validator',
                                        keyWords: []
                                    }),
                                    new VersionMenu({
                                        description: 'DIRECTIVES',
                                        path: 'directives',
                                        keyWords: []
                                    })
								],
								keyWords: []
							}),
						],
						keyWords: []
					}),
                    new VersionMenu({
                        description: 'CLI',
                        path: 'cli',
                        keyWords: [],
                        submenu: [
							new VersionMenu({
								description: 'OVERVIEW',
								path: 'overview',
								forceLink: true,
								keyWords: []
							}),
							new VersionMenu({
								description: 'INTERACTIVE_COMMANDS',
								path: 'commands',
								submenu: [
                                    new VersionMenu({
                                        description: 'GENERATE',
                                        path: '#generate',
										submenu: [
											new VersionMenu({
												description: 'PAGE',
												path: '#generate-page',
												keyWords: []
											}),
											new VersionMenu({
												description: 'DIALOG',
												path: '#generate-dialog',
												keyWords: []
											}),
											new VersionMenu({
												description: 'DIRECTIVE',
												path: '#generate-directive',
												keyWords: []
											}),
											new VersionMenu({
												description: 'SERVICE',
												path: '#generate-service',
												keyWords: []
											}),
											new VersionMenu({
												description: 'GUARD',
												path: '#generate-guard',
												keyWords: []
											}),
										],
                                        keyWords: []
                                    }),
                                    new VersionMenu({
                                        description: 'SERVER',
                                        path: '#server',
                                        keyWords: []
                                    }),
                                    new VersionMenu({
                                        description: 'BUILD',
                                        path: '#build',
                                        keyWords: []
                                    }),
								],
								keyWords: [
								]
							}),
							new VersionMenu({
								description: 'ARGS',
								path: 'args',
								forceLink: true,
								submenu: [
									new VersionMenu({
                                        description: 'SERVER',
                                        path: '#nb-server',
                                        keyWords: []
                                    }),
									new VersionMenu({
                                        description: 'BUILD',
                                        path: '#nb-build',
                                        keyWords: []
                                    })
								],
								keyWords: []
							}),
                        ]
					})
                ]
            })
        ];

        this.versions.forEach(v => {
            v.seLangService(this.langService);
        });
	}

    public get lastVersion() {
        return this.versions.length > 0 ? this.versions[this.versions.length - 1].id : '';
    }
	
	public getCurrentVersionMenu(): VersionMenu[] {
		return this.versions?.find(x => x.id === this.lastVersion)?.menu ?? [];
	}
}