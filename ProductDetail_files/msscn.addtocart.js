MS.cart = (function($) {

	var xhr = null;
	var bundledOffer01 = [], bundledOffer02 = [], accessories = [];
	var xhr = null;
	var mask = null;
	var running = false;
	var $bundled01, $bundled02, $accessories;

	function initBundledOffer() {
		$('[data-bundle]').each(function() {
			var $this = $(this);

			$this.kgCheckbox({
				isMulti : $this.attr('data-multiselection') === 'true',
				onCheck : function($handle, $inp) {
					$this.data('value', $inp);
				},
				onUnCheck : function($handle, $inp) {
					$this.removeData("value");
				}
			});
		});
	}

	function resetOptions() {
		$('[data-bundle]').kgCheckbox('uncheckedAll');
	}

	function findIndexById(arr, id) {
		var i = 0, l = arr.length;
		for (; i < arr.length; i++) {
			if (id == arr[i].id)
				break;
		}

		return i;
	}

	function initBtnAddtoCart() {
		$('.btn-buy-now-add-to-cart').each(function() {
			var $block = $(this);
			$block.delegate(".add-to-cart", 'click', addToCart);

			if ($('html').hasClass("ie6")){
				$block.find('.add-to-cart').hover(
					function(){
						$(this).addClass("active");
					}, 
					function(){
						$(this).removeClass("active");
					});
			}
		});
	}

	function addToCart(e) {

		e.stopPropagation();
		e.preventDefault();

		xhr && xhr.abort();
		
		var buyNow = $(e.target).attr("data-type");
		
		var postData =  $('#add_to_cart_form').serialize();
		
		if(buyNow =="buyNow"){
			postData+= "&type=buyNow";
		} else {
			postData+= "&type=";
		}
		
		xhr = $.ajax({
			url : addToCartURL,
			data : postData,
			type : 'POST',
			success : function(responseText) {
				// console.log(responseText)
				if (responseText.error_popup) {
					$.colorbox({
						html : responseText.error_popup
					});
					// Hide AddToCart and BuyNow and PreOrder button
					$('#preOrderButton').hide();

					if (responseText.statusCode == 'noStock') {
						// Check whether the main product is out of stock or not
						// If the main product out of stock hide the AddToCart and BuyNow button
						// and display Notify Me
						if (responseText.productCode == $('#add_to_cart_form input[name=productCodePost]').val()) {
							$('#notifyButton').removeClass('hidden');
							$(".add-to-cart").addClass("hidden");
							// Update stock available for current active SKU
							productStockLevelObject.val(0);
						}
					} else if (responseText.statusCode == 'prepurchase.only.one') {
						// Customer click ADD_TO_CART for regular product after that customer try to add one preorder product.
						// Can not add preorder product many time, although its available stock greater than 0.
						// So we nedd show popup for notify that and still display preOrder button
						$('#preOrderButton').show();
					} else if (responseText.statusCode == 'prepurchase.only.one.type') {
						// Preorder product still available in stock. We has add one preorder product and we can add another product.
						// So we nedd show popup for notify that and still display preOrder button
						// The rule: for preorder product will be separate in another invoice so we can add another product when
						// we added a preorder product to cart.
						$('#preOrderButton').show();
					} else if (responseText.statusCode == 'already.prepurchase') {

					}
				} else {
					if(responseText.redirectTOCart=="true"){
						window.location=cartURL;
						return false;
					}
					resetOptions();
					$.cartOverlayController.addToCart(responseText);
				}
			},
			beforeSend : function() {
				mask = $('<div id="mask-loading"></div>').appendTo("body");
			}
		})
		return false; // prevent click event on a tag.
	}

	function notifyMe(e){
		e.preventDefault();
		var $this = $(this);
		var status = $this.attr('data-control-notify');
		var productCode = $this.attr('data-control-productCode');

		switch (status){
			case "noStock":
				$('#add_to_cart_form .btnPreOrderButton').hide();
				
				// Check whether the main product is out of stock or not
				// If the main product out of stock hide the AddToCart and BuyNow button
				// and display Notify Me
				if (productCode == $('#add_to_cart_form input[name=productCodePost]').val()) {
					$('#add_to_cart_form .btnNotifyButton').removeClass('hidden');
					$("#add_to_cart_form .add-to-cart").addClass("hidden");	
				}				
				break;
		}
		$.colorbox.close();
	}

	function bindAll() {
		initBundledOffer();
		initBtnAddtoCart();
		$(document).delegate('[data-control-notify]', 'click', notifyMe);

		$.cartOverlayController.initialize({
			onShowCart : function() {
				running = false;
			},
			template : (function() {
				var xTmpl = document.getElementById('dropdown-cart-template');

				if (!xTmpl)
					return '';

				return xTmpl.innerHTML;
			}())
		});
	}

	return {
		bindAll : bindAll
	}
})(jQuery);

$(document).ready(function() {
	MS.cart.bindAll();
});