

'use strict';

app.config(['$stateProvider', '$urlRouterProvider', 'JQ_CONFIG', 
  function ( $stateProvider,   $urlRouterProvider,   JQ_CONFIG) {

    $stateProvider
      .state('app.shipping', {
        url: '/shipping',
        templateUrl: 'js/app/shipping/shipping-tpl.html',
        controller: 'ShippingCtrl',
        params: {msr:'null'}
      });
  }
]);

app.controller('ShippingCtrl', 
  [        '$scope','$state','modalService',
  function( $scope,  $state,  modalService){

    console.log('ShippingCtrl called');  
    $scope.saveAndContinue = function(){
      $state.go('^.invoice', {inv:'Invoicing'});
    }

  }
]);