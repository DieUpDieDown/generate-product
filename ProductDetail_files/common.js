

jQuery(document).ready(function ($) {
	/*global configuration for common library */
	$.waypoints.settings = {
      scrollThrottle: 15
    };

	var useCss = true;
	if($('html').hasClass('ie1')) {
		var useCss = false;
	}

	 if ($('html').hasClass('ie6')){		
		$('.slider').each(function(){
		     if($(this).find('.product-item-inner').length > 0) {
			    $(this).bxSlider({
			    	infiniteLoop: false,
				    slideWidth: 300,
				    minSlides: 3,
				    maxSlides: 3,
				    slideMargin: 20,
				    pager: false,
				    useCSS: useCss,
				    onSliderLoad: function(slider, activeIndex) {
						if (activeIndex == 0) {
							slider.controls.prev.addClass('slide-first');
						}
						setTimeout(function() {
							slider.loader && slider.loader.hide().remove();
						}, 50);
					},
					onSlideNext: function(slider, $slideElement, oldIndex, newIndex) {
						var numItem = slider.children.length;
						var numSlide = Math.ceil(numItem / 3);
						if (newIndex == numSlide - 1) {
							slider.controls.next.addClass('slide-last');
							slider.controls.prev.removeClass('slide-first');
						}
					},
					onSlidePrev: function(slider, $slideElement, oldIndex, newIndex) {
						if (newIndex == 0) {
							slider.controls.prev.addClass('slide-first');
							slider.controls.next.removeClass('slide-last');
						}
					} 
				});
	     	}
		 });
	}
	else{
		$('.slider').each(function(){
		     if($(this).find('.product-item-inner').length > 0) {
			    $(this).bxSlider({
				    slideWidth: 300,
				    minSlides: 3,
				    maxSlides: 3,
				    slideMargin: 20,
				    pager: false,
				    useCSS: useCss,
				    onSliderLoad: function(){}
				 });
		     }
		 });	
	}	 
	      
	$('.bx-loading').hide();

	$('input').placeholder();

	if($('html').hasClass('ie') && $('html').hasClass('lt-ie9')){		
		$("label img").click(function(e){
			var parent = $(this).parent();
			parent.parent().find('label.active').removeClass('active');
			parent.addClass('active');
		});
	}
	
	
	// for checkout flow js start
	
	function createOption(label,value){
		return "<option value='"+value+"'>"+label+"</option>";
	}
	
	function clearSelector(id){
		$(id).combobox('updateValues',[{code:"select", name: pleaseSelectDefault}]);
//		$(id).combobox('updateValues',[]);
	}
	
	
	if($("#existAddressSelector") && $("#existAddressSelector").size()>0){
		$("#existAddressSelector").combobox({
		    labelWidth:120,
	        scrollbarWidth : 10,                
	        dropDownWidth: 500,
	        changeHandler: function (o, val) {
	        	if(val!="addNewAddress"){
		        	if(hasError!="true"){
		        		var requestUrl = getAddressDetailURL+"?selectedAddressCode="+val;
			        	$.ajax({
			                type: "get",
			                url: requestUrl,
			                dataType: "json",
			                success: function (data) {			                	
			                	fillForm(data);
			                },
			                error: function (XMLHttpRequest, textStatus, errorThrown) {
			                }
			        	});	
		        	} 
		        	
	        	} else {
	        		if(hasError!="true"){
	        			fillForm(null);
	        		}
	        	}
	        	hasError = "false";
	        }
	    });
	}
	
	var citySelectorOptions ={
		    labelWidth:80,
	        scrollbarWidth : 10,                
	        dropDownWidth: 500,
	        changeHandler: function (o, val) {
	        	if(val!="select"){
	        		if(hasErrorForD != "true"){
		        		$.ajax({
		        			type: "get",
		        			url: getDistrictURL+"?cityCode="+val,
		        			dataType: "json",
		        			success: function (data) {
		        				if(data)data.shift();
		        				clearSelector("#districtSelector");
		        				$("#districtSelector").combobox('addValues',data);
		        				//$("#districtSelector").combobox('setSelectedValue',data[0].code);
		        			},
		        			error: function (XMLHttpRequest, textStatus, errorThrown) {
		        			}
		        		});	
		        		
	        		}
	        	}
	        	else {
	        		clearSelector("#districtSelector");
	        	}
	        	hasErrorForD = "false";
	        }
	    };
	
	var districtSelectorOptions ={
			labelWidth:120,
	        scrollbarWidth : 10,                
	        dropDownWidth: 500,
	        changeHandler: function (o, val) {
	        }
	};
	
	
	if($("#provinceSelector") && $("#provinceSelector").size()>0){
		$("#provinceSelector").combobox({
		    labelWidth:80,
	        scrollbarWidth : 10,                
	        dropDownWidth: 500,
	        changeHandler: function (o, val) {
	        	if(val!="select"){
	        		if(hasErrorForC != "true"){
		        		$.ajax({
		        			type: "get",
		        			url: getCityURL+"?provinceCode="+val,
		        			dataType: "json",
		        			success: function (data) {
//		        				console.log(data);
		        				if(data)data.shift();
		        				clearSelector("#citySelector");
		        				clearSelector("#districtSelector");
		        				$("#citySelector").combobox('addValues',data);
		        	//			$("#citySelector").combobox('setSelectedValue',data[0].code);
		        			},
		        			error: function (XMLHttpRequest, textStatus, errorThrown) {
		        			}
		        		});	
	        		}
	        	} 
	        	else {
	        		clearSelector("#citySelector");
	        		clearSelector("#districtSelector");
	        	}
	        	hasErrorForC = "false";
	        }
	    });
	}
	
	
	if($("#citySelector") && $("#citySelector").size()>0){
		$("#citySelector").combobox(citySelectorOptions);
	}
	
	if($("#districtSelector") && $("#districtSelector").size()>0){
		$("#districtSelector").combobox(districtSelectorOptions);
	}
	
	
	
	
	function fillForm(data){
		
		$("#email").val(data==null?"":data.address['email']);
		$("#fullName").val(data==null?"":data.address['fullName']);
		$("#addressDetails").val(data==null?"":data.address['addressDetails']);
		$("#mobilePhone").val(data==null?"":data.address['mobilePhone']);
		$("#contactNumber").val(data==null?"":data.address['contactNumber']);
		
		$("#provinceSelector").combobox('setSelectedValue',data==null|| data.address==null || data.address['province'] == null?"select":data.address['province'].code,"noChangeFunctionCall");
		clearSelector("#citySelector");
		clearSelector("#districtSelector");
		if(data){
			$("#citySelector").combobox('addValues',data.cList);
			$("#districtSelector").combobox('addValues',data.dList);
		}
		$("#citySelector").combobox('setSelectedValue',data==null|| data.address==null || data.address['city'] == null?"select":data.address['city'].code,"noChangeFunctionCall");
		
		$("#districtSelector").combobox('setSelectedValue',data==null|| data.address==null || data.address['district'] == null?"select":data.address['district'].code,"noChangeFunctionCall");
	}
	
	
	if($('.pay')  && $('.pay').size()>0){
		$('.pay').multiTab({
			defaultTab: $("#tabSectionName").val(),
			tabContainer: '.tab-content-level1-wrapper',
			changeHandler: function(section, subsection) {
				//$("#tabSectionName").val(subsection);
				$(".banking").radioGroup();
			}
		}); 
	}
	
	if($(".checkout #saveInAddressBook")  && $(".checkout #saveInAddressBook").size()>0){
			$(".checkout #saveInAddressBook").checkbox();
	}
	
	if($(".radio-g1") && $(".radio-g1").size()>0){
		//$(".radio-g1").radioGroup();
		$(".radio-g1").click(function(){
			$("#tabSectionName").val(".third-party-payment-link");
		});
	} 
	
	if($(".radio-g2") && $(".radio-g2").size()>0){
		$(".radio-g2").click(function(){
			$("#tabSectionName").val(".domestic-bank-link");
		});
	}
	
	if($(".radio-g3") && $(".radio-g3").size()>0){
//		$(".radio-g3").radioGroup();
		$(".radio-g3").click(function(){
			$("#tabSectionName").val(".cash-delivery-link");
		});
	}
	
	if($(".banking") && $(".banking").size()>0){
		$(".banking").radioGroup();
	}
	
	createOrder = function(ele){
		var resultBoolean = false;
		if($(ele).data("clicked")=="true"){
			return false;
		} else {
			$(ele).data("clicked","true");
			$.ajax({
				url: checkplaceOrderDataUrl+"?time="+(new Date()).getTime(),
				dataType:'json',
				async:false,
				success: function (data) {
					$(ele).data("clicked","false");
					if (data.success=="false") {
						$.colorbox({
							html : data.error_popup
						});
						resultBoolean = false;
					} else {
						if($("#isCOD").val()=="true"){
							resultBoolean = true;
						} else {
							$.colorbox({href:getPopupUrl,closeButton:false, onLoad: function(){
							    $('#cboxClose').remove();
							}});
							resultBoolean = true;
						}
						$(ele).attr("href",placeOrderUrl);
					}
    			},
    			error: function (XMLHttpRequest, textStatus, errorThrown) {
    				$(ele).data("clicked","false");
    				resultBoolean= false;
    			}
			});
		}
		return (resultBoolean);
	}
	
	$("#addPaymentForOrderDetail").click(function(){
		if($("#isCOD").val()!="true"){
			$.colorbox({href:getPopupUrl,closeButton:false, onLoad: function(){
			    $('#cboxClose').remove();
			}});
		}
		return true;
	});
	
	if($('.block-logined').length > 0){
		
		if(jQuery('html').hasClass('tablet')) {
			$('.block-logined').click(function(e){
				e.stopPropagation();
				var $this = $(this);
				$this.addClass('expanded');
			});
			$(document).click(function(e) {
				if($('.block-logined').length && $('.block-logined').hasClass('expanded')) {
					$('.block-logined').removeClass('expanded');
				}
			});
		}
		else{

			$('.block-logined').hover(function(){
				var $this = $(this);
				$this.toggleClass('expanded');
				/*if($('.block-logined').hasClass('expanded')){
					if($('html').hasClass('ie6')){
						$('.header').css({'padding':'14px 0 8px 0'})
					}
					else{
					 	$('.header').css({'padding':'14px 0 8px 0'})
					}
				}
				else {
					$('.header').css({'padding':'14px 0 24px 0'})
				}*/
			});

		}

		
	}

	
	if($('.cover-products').length > 0){
		$('.cover-products .product-item-inner:first-child').css({'margin-left':'0px'});
	}
	 
	
	//for checkout flow js end

	if ($('html').hasClass('ie6')){
		$('.accessories-help-support').each(function(){
			var $block = $(this);

			var $list = $block.find('ul');

			var items = $list.children();

			items.click(function (e) {
				var $item = $(this);

				e.preventDefault();
				window.open($item.find('a').attr("href"), '_blank');
			});
		});	
	}	
});