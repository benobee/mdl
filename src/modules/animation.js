import Scrollmap from 'scrollmap';
import $ from 'jquery';

const animation = {
	init() {
		this.homepage();
	},
	homepage() {
		Scrollmap.add('#about-section .sqs-row', {
		    onTriggerIn() {

		    	//add any code to be triggered upon
		    	//the element becoming visible

		        $(this.element).addClass("visible");
		    },
		    surfaceVisible: 0.5
		});		
	}
};

export default animation;
