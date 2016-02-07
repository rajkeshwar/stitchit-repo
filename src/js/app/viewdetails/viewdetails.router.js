

'use strict';

app.config(['$stateProvider', 'JQ_CONFIG', 
  function ( $stateProvider,   JQ_CONFIG) {

    $stateProvider
      .state('app.viewDerails', {
        url:'/details',
        templateUrl: 'js/app/viewdetails/viewdetails-tpl.html',
        controller: 'ItemDetailsCtrl',
        params: {activeItem:'null'}
      });
  }
]);

app.controller('ItemDetailsCtrl', 
  [        '$scope','$uibModal','$log','$state',
  function ($scope,  $uibModal,  $log,  $state) {

    console.log('ItemDetailsCtrl is called');
    $scope.activeItem = $state.params.activeItem;

    $scope.totalItems = 64;
    $scope.currentPage = 4;

    $scope.maxSize = 10;
    $scope.bigTotalItems = 175;
    $scope.bigCurrentPage = 1;

    // tab controller 
    $scope.tabs = [
      { title:'Product Details', content:'Dynamic content 1' },
      { title:'Shipping Details', content:'Dynamic content 2' },
      { title:'Returns', content:'Your complete shopping satisfaction is our No.1 Priority. We want you happy each and every time you buy from us. However if due to some unforeseen situation you are not happy with the product then the following terms apply for a mutually consented resolution of the situation.' },
      { title:'Similar Items', content:'Dynamic content 1' },
      { title:'Know your Product', content:'Fabric: Loops, crinkles, pulled yarns, thread irregularities or missing yarns are inevitable features of Georgette. Such variations are natural characteristics of the fabric and add an aesthetic impact to it.' }
    ];

    $scope.alertMe = function() {
      setTimeout(function() {
        $window.alert('You\'ve selected the alert tab!');
      });
    };

  }
]);