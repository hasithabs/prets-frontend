angular
  .module('app')
  .component('loanNewCom', {
    templateUrl: 'app/loan/template/loan-new.html',
    controller: function ($rootScope, $log, $state, $q, $interval, $timeout, DTOptionsBuilder, DTColumnDefBuilder, DTColumnBuilder, DTDefaultOptions, SweetAlert, moment) {
      var self = this;

      self.loanSubmitBtnClicked = false;
      self.isNewLoanProcessing = false;

      self.loanNew = {};
      self.loanNewForm = {};

      self.loanNew.selectedLoanType = '9999';

      self.loanTypes = [
      {
        name: "Personal"
      }, {
        name : "Business"
      }, {
        name : "Vehicle"
      }];

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

      // for (var i = angular.element('.form-body select').length - 1; i >= 0; i--) {
      //   angular.element('.form-body select')[i].focus();
      // }
      $timeout(function () {
        angular.element(".form-body select[name='loanType']").focus();
      }, 200);
      angular.element('body')[0].scrollTop = 0;

      self.onNewLoanSubmit = function () {
        self.loanSubmitBtnClicked = true;
        self.isNewLoanProcessing = true;

        if (self.loanNewForm.$valid) {
          $timeout(function () {
            self.isNewLoanProcessing = false;

            SweetAlert.swal({
              title: "Nice!",
              text: "Loan created successfully.",
              type: "success",
              timer: 2000,
              showConfirmButton: false
            }, function () {
              SweetAlert.close();
              $state.go("app.loan.list");
            });
          }, 5000);
        } else {
            self.isNewLoanProcessing = false;
        }

      };

    }
  });
