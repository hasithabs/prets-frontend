angular
  .module('app')
  .component('customerListCom', {
    templateUrl: 'app/customer/template/customer-list.html',
    controller: function ($rootScope, $log, $state, $q, $interval, DTOptionsBuilder, DTColumnDefBuilder, DTColumnBuilder, DTDefaultOptions, SweetAlert) {
      var self = this;
      self.customers = [];

      angular.element('.dropdown-menu > .hold-on-click').on('click', function(e) {
            // angular.element('.dropdown-menu').addClass('');;
        });

      self.customers = [
      {
        id: 124,
        firstName: "Bathiya",
        lastName: "Withana",
        birthday: "1989-10-11",
        mobile: 0714612489,
        city: "Kandy",
        email: "bathiya.3Withana@gmail.com"
      }, {
        id: 125,
        firstName: "Shanaka ",
        lastName: "Nagodavithana",
        birthday: "1990-01-12",
        mobile: 0778462719,
        city: "Homagama",
        email: "Shanaka314@yahoo.com"
      }, {
        id: 130,
        firstName: "Lalith ",
        lastName: "Dilshanka",
        birthday: "1980-12-01",
        mobile: 0776148353,
        city: "Nugegoda",
        email: "Dilshanka643@gmail.com"
      }, {
        id: 132,
        firstName: "Umesh",
        lastName: "Thilakasiri",
        birthday: "1994-10-25",
        mobile: 0705564442,
        city: "Maharagama",
        email: "UmeshTT@gmail.com"
      }, {
        id: 19,
        firstName: "Sachin",
        lastName: "Buddika",
        birthday: "1992-05-29",
        mobile: 0766693582,
        city: "Malabe",
        email: "SachBuddika@gmail.co"
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
            self.customers.splice(id, 1);
            SweetAlert.swal("Deleted!", "Your customer data has been deleted.", "success");
          } else {
            SweetAlert.swal("Cancelled", "Your customer data is safe :)", "error");
          }
        });
      }

      self.toDelete = toDelete;
    }
  });
