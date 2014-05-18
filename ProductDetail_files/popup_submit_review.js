jQuery(document).ready(function () {
    var xhr;
    if($('.reviews-faq').length > 0) {
    	$('.reviews-faq').each(function(){
            var $this = $(this);
            var $spnError;

            var $form = $this.find('.form-faq-comment'),
                $popupSubmitReview = $this.find('.popup-submit-review'),
                $info = $this.find('.block-info'),
                $btnShowmore = $this.find('.show-more'),
                $success = $this.find('.thank-you'),
                $btnGotoComment = $this.find('.popup-post-comment');

            var $rates = $form.find('.rate-field');

            var $checkbox = $form.find('.checkbox-ui'),
                $txtRating = $form.find('.txt-rating'),
                $btnSubmit = $form.find('.btn-submit'),
                $btnCancel = $form.find('.btn-cancel');

            $rates.rating({
                blueStar: $rates.attr('data-blue-star'),
                grayStar: $rates.attr('data-gray-star'),
                onSelect: function (obj, value) {
                    $txtRating.val(value);
                    $spnError && $spnError.length && $spnError.remove();
                }
            });

            $checkbox.checkbox({activeClass: "active"});

            $btnGotoComment.click(function(e){
                e.preventDefault();
                gotoComment();
                resetForm();
            });

            //[START] Add validate form by KHOA 
            $form.validate({
                rules: {
                    alias: "required",
                    comment: "required"
                },
                messages: {
                    alias: $form.find('[name=alias]').attr('data-message-error'),
                    comment: $form.find('[name=comment]').attr('data-message-error')
                },
                errorPlacement: function(error, element) {
                    error.insertAfter(element.parent());
                },
                submitHandler: function(form) {
                    $form.find('span.Error').remove();
                    if (parseInt($txtRating.val()) <= 0){
                        $spnError = $('<span class="Error">'+$txtRating.attr('data-message-error')+'</span>').insertAfter($rates);
                        $spnError.show();
                        return;
                    }

                    xhr && xhr.abort();
                    xhr = $.ajax({
                        url: $form.attr('action'),
                        type: 'POST',
                        cache: false,
                        data: $form.serialize(),
                        success: function (data){
                            ajaxSubmitSuccess(data);
                        }
                    });
                }
            });

            $btnShowmore.click( function(e) {
                var $hdler = $(this);
                xhr && xhr.abort();

                xhr = $.ajax({
                    url: $hdler.attr('baseUrl') + '/' + $hdler.attr('displayNumber'),
                    success : function(data) {
                        $this.find('.jsp-pane').html(data);
                        
                        var currentReviewDisplayNum_val = $('#currentReviewDisplayNum').val();
                        var maxReviewDisplay_val = $('#maxReviewDisplay').val();
                        var reviewsTotal_val = $('#reviewsTotal').val();
                        
                        
                        // Scroll to element
                        var temp = parseInt(currentReviewDisplayNum_val) % parseInt(maxReviewDisplay_val);
                        
                        var scrollToElementId = null;
                        
                        if (parseInt(temp) != 0) {
                        	scrollToElementId = 'box_comment_' + (parseInt(currentReviewDisplayNum_val) - parseInt(temp));
                        } else {
                        	scrollToElementId = 'box_comment_' + (parseInt(currentReviewDisplayNum_val) - parseInt(maxReviewDisplay_val));
                        }

                        // Update the next display review number
                        $hdler.attr('displayNumber', parseInt(currentReviewDisplayNum_val));
                        
                        if($this.find('.jscrollpane').length > 0) {
                            var api = $this.find('.jscrollpane').jScrollPane({}).data('jsp');
                            api.scrollToElement($('#' + scrollToElementId),true, true);
                        }
                        
                    }
                });
                return false;
            });

            $btnSubmit.bind('click', function(e){
                e.preventDefault();
                e.stopPropagation();

                $form.submit();
            });
            //[END] Add validate form by KHOA

            $btnCancel.bind('click', function(e){
                backToReview();
                
                return false;
            });

            function ajaxSubmitSuccess(data){
                backToReview();
                $btnGotoComment.hide();
                $success.show();
                resetForm();
            };

            function resetForm(){
            	$form[0].reset();
                $txtRating.val('0');
                $rates.rating('reset');
            };

            function gotoComment(){
                $popupSubmitReview.show();
                $info.hide();
            };

            function backToReview(){
                $popupSubmitReview.hide();
                $info.show();
            };

            if($('html').hasClass('ie6')){
                $btnSubmit.hover(function(){
                    $(this).css({'background':'#eb3900' });
                },function(){
                    $(this).css({'background':'#00bcf2'});
                });

                $btnCancel.hover(function(){
                    $(this).css({'background':'#eb3900' });
                },function(){
                    $(this).css({'background':'#00bcf2'});
                });
            }
        });
    }
    
});

