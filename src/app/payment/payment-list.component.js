angular
  .module('app')
  .component('paymentListCom', {
    templateUrl: 'app/payment/template/payment-list.html',
    controller: function ($rootScope, $log, $state, $q, $interval, DTOptionsBuilder, DTColumnDefBuilder, DTColumnBuilder, DTDefaultOptions) {
      var self = this;
      self.payments = [];

      angular.element('.dropdown-menu > .hold-on-click').on('click', function(e) {
            // angular.element('.dropdown-menu').addClass('');;
        });

      self.payments = [
      {
        id: 12,
        custName: "Seth Duerr",
        loan: "Flexible (RD1000.00)",
        balance: 200,
        amountPay: 800,
        transactionDate: "11/15/2017",
        teller: "Admin"
      }, {
        id: 13,
        custName: "Fernando Michelin",
        loan: "Flexible (RD5000.00)",
        balance: 0,
        amountPay: 5000,
        transactionDate: "11/22/2017",
        teller: "Admin"
      }, {
        id: 15,
        custName: "Natalia Rorick",
        loan: "Flexible (RD3000.00)",
        balance: 10000,
        amountPay: 2000,
        transactionDate: "11/09/2017",
        teller: "Admin"
      }, {
        id: 16,
        custName: "Winnie Prejean",
        loan: "Flexible (RD400.00)",
        balance: -50,
        amountPay: 450,
        transactionDate: "11/11/2017",
        teller: "Admin"
      }, {
        id: 19,
        custName: "Jonney Wick",
        loan: "Flexible (RD1200.00)",
        balance: 200,
        amountPay: 1000,
        transactionDate: "11/12/2017",
        teller: "Admin"
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
        DTColumnDefBuilder.newColumnDef(self.payments.length - 1).notSortable()
      ];
    }
  });
