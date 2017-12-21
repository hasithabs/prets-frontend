angular
  .module('app')
  .component('reportHistoryCom', {
    templateUrl: 'app/report/template/report-history.html',
    controller: function ($log, DTOptionsBuilder, DTColumnDefBuilder, DTColumnBuilder, DTDefaultOptions, SweetAlert) {
      var self = this;

      self.reports = [
      {
        id: 121,
        type: "Loans",
        startDate: "2017-03-01",
        endDate: "2017-08-20",
        count: "257"
      }, {
        id: 123,
        type: "Payments",
        startDate: "2017-06-23",
        endDate: "2017-06-30",
        count: "All"
      }, {
        id: 125,
        type: "Loans",
        startDate: "2017-07-10",
        endDate: "2017-08-10",
        count: "23"
      }, {
        id: 128,
        type: "Customers",
        startDate: "2017-01-01",
        endDate: "2017-11-30",
        count: "All"
      }, {
        id: 133,
        type: "Payments",
        startDate: "2017-11-01",
        endDate: "2017-11-30",
        count: "353"
      }, {
        id: 140,
        type: "My Wallet",
        startDate: "2017-02-25",
        endDate: "2017-05-13",
        count: "63"
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
        DTColumnDefBuilder.newColumnDef(4).notSortable()
      ];

      self.onGenerate = function () {
        self.isProcessing = true;

        $timeout(function () {
          SweetAlert.swal({
            title: "Nice!",
            text: "Report created successfully.",
            type: "success",
            timer: 2000,
            showConfirmButton: false
          }, function () {
            SweetAlert.close();
            self.isProcessing = false;
          });
        }, 500);
      };
    }
  });
