

'use strict';

app.config(['$stateProvider', 'JQ_CONFIG', 
  function ( $stateProvider,   JQ_CONFIG) {

    $stateProvider
      .state('app.invoice', {
        url:'/invoice',
        templateUrl: 'js/app/invoice/invoice-tpl.html',
        controller: 'InvoiceCtrl',
        params: {inv:'null'}
      });
  }
]);

app.controller('InvoiceCtrl', 
  [        '$scope','$uibModal','$log','$state',
  function ($scope,  $uibModal,  $log,  $state) {

    console.log('InvoiceCtrl is called');
    
    $scope.continueShopping = function(){
      console.log('continueShopping called');
      $state.go('^.index', {inv:'continueShopping'});
    }

  }
]);