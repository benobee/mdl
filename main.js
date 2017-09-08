import { App_Build } from './src/core';
import modals from './src/modules/modals';
import carousel from './src/modules/carousel';
import animation from './src/modules/animation';

//build the site object
class Site_Build {
	constructor() {
		this.app = new App_Build();
		this.isMobile = this.app.isMobile();
		this.modals = modals;
		this.carousel = carousel;

		this.runModules();
	}
	runModules() {
		carousel.init();
		modals.init();
		animation.init();
	}
}

const Site = new Site_Build();
