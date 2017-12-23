angular
  .module('app')
  .component('loginCom', {
    templateUrl: 'app/login/template/login.html',
    controller: function ($rootScope, $state) {
      var self = this;
      self.isDisabled = false;

      self.onLoginClicked = function () {
        $rootScope.usernameLog = self.logUsername;
        console.log("$rootScope.usernameLog");
        console.log($rootScope.usernameLog);

        if (self.logPassword == "customer") {
          $rootScope.isCustomer = true;
          $state.go('app.loan.new');
        } else {
          $rootScope.isCustomer = false;
          $state.go('app.dashboard');
        }
      };

var Login = function() {


    var handleForgetPassword = function() {

        jQuery('#forget-password').click(function() {
            jQuery('.login-form').hide();
            jQuery('.forget-form').show();
        });

        jQuery('#back-btn').click(function() {
            jQuery('.login-form').show();
            jQuery('.forget-form').hide();
        });

    }

    var handleRegister = function() {

        function format(state) {
            if (!state.id) { return state.text; }
            var $state = $(
             '<span><img src="../assets/global/img/flags/' + state.element.value.toLowerCase() + '.png" class="img-flag" /> ' + state.text + '</span>'
            );
            
            return $state;
        }

        if (jQuery().select2 && $('#country_list').size() > 0) {
            $("#country_list").select2({
              placeholder: '<i class="fa fa-map-marker"></i>&nbsp;Select a Country',
              templateResult: format,
                templateSelection: format,
                width: 'auto', 
              escapeMarkup: function(m) {
                  return m;
              }
          });
      }

        jQuery('#register-btn').click(function() {
            jQuery('.login-form').hide();
            jQuery('.register-form').show();
        });

        jQuery('#register-back-btn').click(function() {
            jQuery('.login-form').show();
            jQuery('.register-form').hide();
        });

        jQuery('#register-submit-btn').click(function() {
            jQuery('.login-form').show();
            jQuery('.register-form').hide();
        });

        jQuery('#forget-submit-btn').click(function() {
            jQuery('.login-form').show();
            jQuery('.forget-form').hide();
        });
    }

    return {
        //main function to initiate the module
        init: function() {

            handleForgetPassword();
            handleRegister();

        }

    };

}();

jQuery(document).ready(function() {
    Login.init();
});


    }
  });

