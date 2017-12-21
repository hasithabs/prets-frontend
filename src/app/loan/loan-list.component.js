angular
  .module('app')
  .component('loanListCom', {
    templateUrl: 'app/loan/template/loan-list.html',
    controller: function ($rootScope, $log, $state, $q, $interval, DTOptionsBuilder, DTColumnDefBuilder, DTColumnBuilder, DTDefaultOptions, SweetAlert) {
      var self = this;
      self.loans = [];

      angular.element('.dropdown-menu > .hold-on-click').on('click', function(e) {
            // angular.element('.dropdown-menu').addClass('');;
        });

      self.loans = [
      {
        id: 214,
        loanType: "Personal",
        custName: "Withana",
        amount: 125000,
        balance: 100000,
        duration: 12,
        date: "2017-10-11"
      }, {
        id: 235,
        loanType: "Personal ",
        custName: "Nagodavithana",
        amount: 200000,
        balance: 200000,
        duration: 24,
        date: "2017-11-24"
      }, {
        id: 239,
        loanType: "Business ",
        custName: "Dilshanka",
        amount: 600000,
        balance: 450000,
        duration: 60,
        date: "2015-05-10"
      }, {
        id: 245,
        loanType: "Vehicle",
        custName: "Thilakasiri",
        amount: 300000,
        balance: 200000,
        duration: 24,
        date: "2016-01-14"
      }, {
        id: 249,
        loanType: "Personal",
        custName: "Buddika",
        amount: 150000,
        balance: 140000,
        duration: 6,
        date: "2017-02-22"
      }];


      self.language = {
        // "sEmptyTable": "Ingen tilgængelige data (prøv en anden søgning)",
        // "sInfo": "Viser _START_ til _END_ af _TOTAL_ rækker",
        // "sInfoEmpty": "Viser 0 til 0 af 0 rækker",
        // "sInfoFiltered": "(filtreret ud af _MAX_ rækker ialt)",
        // "sInfoPostFix": "",
        // "sInfoThousands": ",",
        sLengthMenu: "Show _MENU_",
        // "sLoadingRecords": "Henter data...",
        // "sProcessing": "Processing...",
        // sSearch: "Seatc:",
        // "sZeroRecords": "Ingen rækker matchede filter",
        oPaginate:
        {
        // "sFirst": "Første",
        // "sLast": "Sidste",
          sNext: ">",
          sPrevious: "<"
        }
        // "oAria": {
        // "sSortAscending": ": activate to sort column ascending",
        // "sSortDescending": ": activate to sort column descending"
        // }
      };

      self.dtOptions = DTOptionsBuilder.newOptions()
        .withOption('responsive', true)
        .withOption('scrollX', '100%')
        .withLanguage(self.language)
        .withBootstrap();

      self.dtColumnDefs = [
        DTColumnDefBuilder.newColumnDef(0),
        // DTColumnDefBuilder.newColumnDef(1).notVisible(),
        DTColumnDefBuilder.newColumnDef(7).notSortable()
      ];

      function toDelete(id) {
        console.log("sds");
        SweetAlert.swal(
        {
          title: "Are you sure?",
          text: "Your will not be able to recover this customer data!",
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "Yes, delete it!",
          cancelButtonText: "No, cancel!",
          closeOnConfirm: false,
          closeOnCancel: false
        },
        function (isConfirm) {
          if (isConfirm) {
            self.loans.splice(id, 1);
            SweetAlert.swal("Deleted!", "Your customer data has been deleted.", "success");
          } else {
            SweetAlert.swal("Cancelled", "Your customer data is safe :)", "error");
          }
        });
      }

      self.toDelete = toDelete;
    }
  });
