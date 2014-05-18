;(function($){
	var $doc = $(document);

	var isIE6 = jQuery("html").hasClass('ie6');

	$doc.ready(function ($) {
		
		var $lpChatDiv = $('#lpChatDiv');
		var lpChatHTML = '<div style="display: none; visibility: visible;" id="lpChatDiv"></div>';

		/*Automatically generate #lpChatDiv element for live chat api callback if no element embedded.*/
		if ($lpChatDiv.length <= 0) {
			$lpChatDiv = $(lpChatHTML);
			$lpChatDiv.appendTo('body');
		}

		/*
		live chat button has 3 states
			1. active: when this service is available
			2. inactive: when this service is off.
		*/
		/* 
	    	Integrate live chat using chat service from liveperson 
	    as http://www.microsoftstore.com.cn/ site
	    */
	    $doc.undelegate("click.live").delegate(".chat-live-link:not(.coocare-chat)", "click.live", function (e) {
	    	e.preventDefault();
	    	var $this = $(this);

	    	if (!$this.hasClass("coocare-chat")){
	    		$lpChatDiv.find(' > a').trigger('click');
	    	}
	    });

		// $('.chat-live-link').not('.coocare-chat').delegate($('document'),"click", function(e) {
		// 	e.preventDefault();
		// 	$lpChatDiv.find(' > a').trigger('click');
		// });

		var timeout = setInterval(function() {
			if ($lpChatDiv.children().length > 0) {
				var $chatLink = $('.chat-live-link').not('.coocare-chat');
				// clearInterval(timeout);
				changeChatButtonState($lpChatDiv.find(' > a').length > 0);
			}
		}, 1000);

		var changeChatButtonState = function(active) {
			var $chatLink = $('.chat-live-link').not('.coocare-chat');
			var isBreak = active && $chatLink.hasClass('active');
					
			if(isBreak) return;
			if (active) {
				$chatLink.removeClass('inactive');
				$chatLink.addClass('active');
				$chatLink.parent().removeClass('inactive');
				$chatLink.parent().addClass('active');
				$chatLink.text(MSCN.dict.get("online"));
			} else {
				$chatLink.removeClass('active');
				$chatLink.addClass('inactive');
				$chatLink.parent().removeClass('active');
				$chatLink.parent().addClass('inactive');
				$chatLink.text(MSCN.dict.get("offline"));

			}
			if(isIE6) $chatLink.redraw();
			
		}
		
		changeChatButtonState(false);
	});

})(window.jQuery);