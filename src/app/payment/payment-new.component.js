angular
  .module('app')
  .component('paymentNewCom', {
    templateUrl: 'app/payment/template/payment-new.html',
    controller: function ($rootScope, $log, $state, $q, $interval, $timeout, DTOptionsBuilder, DTColumnDefBuilder, DTColumnBuilder, DTDefaultOptions) {
      var self = this;

      self.paymentSubmitBtnClicked = false;
      self.isNewPaymentProcessing = false;

      self.paymentNew = {};
      self.paymentNew.selectedLoan = '9999';
      self.paymentNew.selectedTeller = '9999';

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

      self.onNewDrugSubmit = function () {
        self.paymentSubmitBtnClicked = true;
        self.isNewPaymentProcessing = true;

        $timeout(function () {
          self.isNewPaymentProcessing = false;
        }, 5000);

      };

    }
  });
