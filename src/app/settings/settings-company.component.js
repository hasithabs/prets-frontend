angular
  .module('app')
  .component('settingsCompanyCom', {
    templateUrl: 'app/settings/template/settings-company.html',
    controller: function ($log, $timeout, SweetAlert) {
      var self = this;

      self.settingsNew = {};

      self.settingsNew.companyName = "PRETS";
      self.settingsNew.companyPhone = "012341232";
      self.settingsNew.interestRate = 12;

      $timeout(function () {
        angular.element(".form-body input[name='companyName']").focus();
      }, 200);
      $timeout(function () {
        angular.element(".form-body input[name='companyPhone']").focus();
      }, 200);
      $timeout(function () {
        angular.element(".form-body input[name='interestRate']").focus();
      }, 200);

    }
  });
