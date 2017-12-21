angular
  .module('app')
  .component('customerNewCom', {
    templateUrl: 'app/customer/template/customer-new.html',
    controller: function ($rootScope, $log, $state, $q, $interval, $timeout, DTOptionsBuilder, DTColumnDefBuilder, DTColumnBuilder, DTDefaultOptions, SweetAlert, moment) {
      var self = this;

      self.maxDateBirthday = moment("2000-01-01");
      self.startDateBirthday = moment("1980-01-01");

      self.customerSubmitBtnClicked = false;
      self.isNewCustomerProcessing = false;

      self.customerNew = {};
      self.customerNewForm = {};

      self.custNames = [
      {
        name: "Seth Duerr"
      }, {
        name : "Fernando Michelin"
      }, {
        name : "Natalia Rorick"
      }, {
        name : "Winnie Prejean"
      }, {
        name : "Jonney Wick"
      }];

      self.loans = [
      {
        name: "214-Personal(125000)"
      }, {
        name: "235-Personal(200000)"
      }]

      self.tellers = [
      {
        name: "Peter"
      }, {
        name : "Helen"
      }, {
        name : "Ellen"
      }];

      // for (var i = angular.element('.form-body select').length - 1; i >= 0; i--) {
      //   angular.element('.form-body select')[i].focus();
      // }
      $timeout(function () {
        angular.element(".form-body select[name='loan']").focus();
      }, 200);
      $timeout(function () {
      angular.element(".form-body select[name='teller']").focus();
      }, 200);
      angular.element('body')[0].scrollTop = 0;
      $timeout(function () {
        angular.element(".form-body input[name='custName']").focus();
      }, 1000);

      self.onNewCustomerSubmit = function () {
        self.customerSubmitBtnClicked = true;
        self.isNewCustomerProcessing = true;

        if (self.customerNewForm.$valid) {
          $timeout(function () {
            self.isNewCustomerProcessing = false;

            SweetAlert.swal({
              title: "Nice!",
              text: "Customer created successfully.",
              type: "success",
              timer: 2000,
              showConfirmButton: false
            }, function () {
              SweetAlert.close();
              $state.go("app.customer.list");
            });
          }, 5000);
        } else {
            self.isNewCustomerProcessing = false;
        }

      };

    }
  });
