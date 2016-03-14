import { Component } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';

import { BlogComponent } from './blog.component';
import { BookshelfComponent } from './bookshelf.component';

@Component({
	selector: 'about',
	templateUrl: 'app/about.component.html',
	directives: [
		ROUTER_DIRECTIVES,
		BlogComponent,
		BookshelfComponent
	]
})
export class AboutComponent {}