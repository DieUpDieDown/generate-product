(function ($) {
    if (typeof ACC == 'undefined') { 
        jQuery.error('error: ACC is undefined. Please check ACC global variable');
        return;
    }

    ACC.address = {

        default_ui_options: {
            labelWidth: 120,
            scrollbarWidth: 10,
            dropDownWidth: 500,
            isNew: true
        },

        running: false,
        xhr : null,

        onProvinceSelect: function (provinceCode) {
            if (ACC.address.running) return;
            ACC.address.running = true;
            
            ACC.address.xhr && ACC.address.xhr.abort();

            var $cbCity = $("#city_dropdown"),
                $cbDistrict = $("#district_dropdown");

            $cbCity.attr('disabled', 'disabled');
            $cbDistrict.attr('disabled', 'disabled');

            ACC.address.xhr = $.getJSON(ACC.config.contextPath + '/my-account/get-cities', {
                provinceCode: provinceCode
            }, function (data) {
                $.each(data, function() {
                    if (this.code == $cbCity.val()) {
                        this.selected = "selected";
                    }
                })
                ACC.address.populateDropDown("city_dropdown", data);
                ACC.address.onCitySelect($cbCity.val());

                $cbCity.removeAttr('disabled');
                $cbDistrict.removeAttr('disabled');
                ACC.address.running = false;
            });
        },

        onCitySelect: function (cityCode) {
           // if (ACC.address.running) return;
            //ACC.address.running = true;
            
            //ACC.address.xhr && ACC.address.xhr.abort();

            var $cbProvince = $("#province_dropdown"),
                $cbDistrict = $("#district_dropdown");

            $cbProvince.attr('disabled', 'disabled');
            $cbDistrict.attr('disabled', 'disabled');

            ACC.address.xhr = $.getJSON(ACC.config.contextPath + '/my-account/get-districts', {
                cityCode: cityCode
            }, function (data) {
                $.each(data, function() {
                    if (this.code == $cbDistrict.val()) {
                        this.selected="selected";
                    }
                })
                ACC.address.populateDropDown("district_dropdown", data);
                
                $cbProvince.removeAttr('disabled');
                $cbDistrict.removeAttr('disabled');                
                //ACC.address.running = false;
            });
        },

        onPredefinedAddressSelect: function() {
            var option = $("#predefine_dropdown > option").filter(":selected");

            if (option.val() == '-1') {
                //not actually select a pre-defined address.
                return;
            }

            $("#email").val(option.data('email'));
            $("#fullName").val(option.data('fullname'));
            $("#addressDetails").val(option.data('details'));
            $("#mobilePhone").val(option.data('mobile'));
            $("#phone").val(option.data('phone'));

            $("#province_dropdown").combobox('setSelectedValue', option.data('province'));
            $("#province_dropdown").combobox();

            $.getJSON(ACC.config.contextPath + '/my-account/get-cities', {
                provinceCode: option.data('province')
            }, function(data) {
                $.each(data, function() {
                    if (this.code == option.data('city')) {
                        this.selected = 'selected'
                    }
                });
                ACC.address.populateDropDown('city_dropdown', data);


                $.getJSON(ACC.config.contextPath + '/my-account/get-districts', {
                    cityCode: option.data('city')
                }, function(data) {
                    $.each(data, function() {
                        if (this.code == option.data('district')) {
                            this.selected = 'selected'
                        }
                    })

                    ACC.address.populateDropDown('district_dropdown', data);
                })

            });
        },

        initDropDown: function (ui_options, id, changeCallback) {
            $("#" + id).combobox($.extend(ui_options, {
                changeHandler: function (o, val) {
                    val && changeCallback(val);
                }
            }));
        },

        populateDropDown: function (id, data) {
            $("#" + id).combobox("updateValues", data);
        },

        initDropDowns: function () {
            ACC.address.initDropDown(ACC.address.default_ui_options, "province_dropdown", ACC.address.onProvinceSelect);
            ACC.address.initDropDown(ACC.address.default_ui_options, "city_dropdown", ACC.address.onCitySelect);
            ACC.address.initDropDown(ACC.address.default_ui_options, "district_dropdown", function () {

            });


            ACC.address.initDropDown(ACC.address.default_ui_options, "predefine_dropdown", ACC.address.onPredefinedAddressSelect);

            if ($("#province_dropdown").val() == '-1' && $("#city_dropdown").val() == '-1' && $("#district_dropdown").val() == '-1') {
                ACC.address.onProvinceSelect(-1);
                ACC.address.onCitySelect(-1);
            }            
            if(null != $("#predefine_dropdown")){
                $("#predefine_dropdown").combobox('setSelectedValue',$("#addressId").val() ,"noChangeFunctionCall");
            }

        },

        submitAddressForm: function () {            
            if (ACC.address.running) return;
            ACC.address.running = true;
            
            ACC.address.xhr && ACC.address.xhr.abort();

            ACC.address.xhr = $.ajax({
                url: $("#addressForm").attr("action"),
                type: 'post',
                data: $("#addressForm").serialize(),
                success: function (data) {
                    if (data.length == 0) {
                        location.reload();
                    } else {
                        ACC.address.displayFormError(data);
                    }

                    ACC.address.running = false;
                }
            })
        },

        displayFormError: function (errors) {

            //clear all previous error status.
            $(".block-error > p").empty();
            $("div.error").removeClass('error');

            $.each(errors, function () {
                $("#" + this.field + "_input").addClass('error');
                $("#" + this.field + "_error > p").text(this.defaultMessage);
            })
        },

        initAjaxForm: function () {
            $(".btn-submit").click(ACC.address.submitAddressForm)
        }
    }
})(window.jQuery);




