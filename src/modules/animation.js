import Scrollmap from 'scrollmap';
import $ from 'jquery';

const animation = {
	init() {
		this.homepage();
	},
	homepage() {
		Scrollmap.trigger({
			target: '#about-section .sqs-row',
			surfaceVisible: 0.5
			}, (element) => {

		    	//add any code to be triggered upon
		    	//the element becoming visible

		        $(element).addClass("visible");
		});

		Scrollmap.trigger({
			target: '#collection-59a877bbb8a79b3789fa88cd .index-section',
			surfaceVisible: 0.6
		});
	}
};

export default animation;
