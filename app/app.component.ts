import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { AboutComponent } from './about.component';
import { CurriculumComponent } from './curriculum.component';

@Component({
	selector: 'app',
	template: '<router-outlet></router-outlet>',
	directives: [
		ROUTER_DIRECTIVES,
		AboutComponent
	],
	providers: [
		ROUTER_PROVIDERS
	]
})
@RouteConfig([
	{
		path: '/about',
		name: 'About',
		component: AboutComponent,
		useAsDefault: true
	},
	{
		path: '/cv',
		name: "Curriculum",
		component: CurriculumComponent,
	}
])
export class AppComponent { }