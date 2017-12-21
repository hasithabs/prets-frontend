angular
  .module('app')
  .component('walletListCom', {
    templateUrl: 'app/wallet/template/wallet-list.html',
    controller: function ($rootScope, $log, $state, $q, $interval, DTOptionsBuilder, DTColumnDefBuilder, DTColumnBuilder, DTDefaultOptions, SweetAlert) {
      var self = this;
      self.mywallets = [];

      self.newWallet = {};
      self.newWallet.selectedWalletType = "Debit";

      angular.element('.dropdown-menu > .hold-on-click').on('click', function(e) {
            // angular.element('.dropdown-menu').addClass('');;
        });

      self.mywallets = [
      {
        id: 23,
        amount: 500,
        description: "Description Sample",
        walletType: "Debit",
        transactionDate: "2017-10-28"
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
        DTColumnDefBuilder.newColumnDef(5).notSortable()
      ];

      self.onAddNewAmount = function () {
        var newItem =
        {
          id: (Math.ceil(Math.random() * (200 + 12)) - 12),
          amount: self.newWallet.newAmount,
          description: self.newWallet.description,
          walletType: self.newWallet.selectedWalletType,
          transactionDate: moment(new Date()).format("YYYY-MM-DD")
        };
        console.log(newItem);
        self.mywallets.push(newItem);
      };

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
            self.mywallets.splice(id, 1);
            SweetAlert.swal("Deleted!", "Your customer data has been deleted.", "success");
          } else {
            SweetAlert.swal("Cancelled", "Your customer data is safe :)", "error");
          }
        });
      }

      self.toDelete = toDelete;
    }
  });
