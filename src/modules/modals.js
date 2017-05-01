import $ from 'jquery';

$.fn.transition = require('semantic-ui-transition');

const modals = {
    init() {
      this.events();      
    },
    events() {
      //open modal
      const seoItem = $('.service, #seo-items > .item');

      this.items = seoItem;

      if(seoItem.length > 0){
        $(seoItem).on('click', (e) => {
            const modal = $(e.currentTarget).find('.modal').clone().appendTo('.modal-text').show();

            $('.mainModal').transition({
              animation: 'fade up',
              onStart() {
                $('.dimmer').fadeIn('fast');
              }
            });      
        });
        //close modal
        $('.mainModal').on('click', () => {
           this.closeModal();
        });
        $('.modalContent').on('click', (e) => {
           e.stopPropagation();
        });
        $('.close-modal').on('click', () => {
           this.closeModal();
        });
      }
    },
    closeModal() {          
	    $('.dimmer').fadeOut('fast');  
	    $('.mainModal').transition({
        	animation  : 'fade',
        	duration   : '0.2s',
        	onComplete() {
         	    //clear appended modal text html
                $('.modal-text').html('');
                
          	}
        }); 
    }
};

export default modals;