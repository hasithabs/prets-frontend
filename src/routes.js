angular
  .module('app')
  .config(routesConfig);

/** @ngInject */
// function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
function routesConfig($stateProvider, $urlRouterProvider) {
  // $locationProvider.html5Mode(true).hashPrefix('!'); //uncomment when running on server
  $urlRouterProvider.otherwise('/app/dashboard');

  $stateProvider
    .state('app', {
      url: '/app',
      component: 'homeCom'
    })
    .state('login', {
      url: '/login',
      component: 'loginCom'
    })
    .state('app.dashboard', {
      url: '/dashboard',
      views: {
        mainContent: {
          component: 'dashboardCom'
        }
      }
    })
    .state('app.sample', {
      url: '/sample',
      views: {
        mainContent: {
          component: 'sampleCom'
        }
      }
    })
    /* ------------------------------- Payment  ------------------------------- */
    .state('app.payment', {
      url: '/payment',
      views: {
        mainContent: {
          template: '<div ui-view="mainContent"></div>'
        }
      }
    })
    .state('app.payment.list', {
      url: '/list',
      views: {
        mainContent: {
          component: 'paymentListCom'
        }
      }
    })
    .state('app.payment.new', {
      url: '/new',
      views: {
        mainContent: {
          component: 'paymentNewCom'
        }
      }
    })
    /* ------------------------------- Customer  ------------------------------- */
    .state('app.customer', {
      url: '/customer',
      views: {
        mainContent: {
          template: '<div ui-view="mainContent"></div>'
        }
      }
    })
    .state('app.customer.list', {
      url: '/list',
      views: {
        mainContent: {
          component: 'customerListCom'
        }
      }
    })
    .state('app.customer.new', {
      url: '/new',
      views: {
        mainContent: {
          component: 'customerNewCom'
        }
      }
    })
    /* ------------------------------- Loan  ------------------------------- */
    .state('app.loan', {
      url: '/loan',
      views: {
        mainContent: {
          template: '<div ui-view="mainContent"></div>'
        }
      }
    })
    .state('app.loan.list', {
      url: '/list',
      views: {
        mainContent: {
          component: 'loanListCom'
        }
      }
    })
    .state('app.loan.new', {
      url: '/new',
      views: {
        mainContent: {
          component: 'loanNewCom'
        }
      }
    })
    /* ------------------------------- Wallet  ------------------------------- */
    .state('app.wallet', {
      url: '/wallet',
      views: {
        mainContent: {
          component: 'walletListCom'
        }
      }
    })
    /* ------------------------------- Settings  ------------------------------- */
    .state('app.settings', {
      url: '/settings',
      views: {
        mainContent: {
          template: '<div ui-view="mainContent"></div>'
        }
      }
    })
    .state('app.settings.company', {
      url: '/company',
      views: {
        mainContent: {
          component: 'settingsCompanyCom'
        }
      }
    })
    .state('app.settings.email', {
      url: '/email',
      views: {
        mainContent: {
          component: 'settingsEmailCom'
        }
      }
    })
    /* ------------------------------- Report  ------------------------------- */
    .state('app.report', {
      url: '/report',
      views: {
        mainContent: {
          template: '<div ui-view="mainContent"></div>'
        }
      }
    })
    .state('app.report.generator', {
      url: '/generator',
      views: {
        mainContent: {
          component: 'reportGeneratorCom'
        }
      }
    })
    .state('app.report.history', {
      url: '/history',
      views: {
        mainContent: {
          component: 'reportHistoryCom'
        }
      }
    });
}
