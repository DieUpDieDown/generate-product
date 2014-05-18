jQuery(document).ready(function ($) {
  $('.reviews-faq ul.tabs a').click(function(){
    if(!$(this).hasClass('active')) {
      $('.reviews-faq ul.tabs a').removeClass('active');
      $(this).addClass('active');
      if($(this).hasClass('customer-review')) {
        $('.reviews-faq .container-review-faq .faq').hide();
        $('.reviews-faq .container-review-faq .customer-review').show();
      }else{
        $('.reviews-faq .container-review-faq .faq').show();
        $('.reviews-faq .container-review-faq .customer-review').hide();
      }
    }
  });
});

