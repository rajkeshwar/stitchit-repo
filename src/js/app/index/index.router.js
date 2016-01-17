

'use strict';

app.config(['$stateProvider', 'JQ_CONFIG', 
  function ( $stateProvider,   JQ_CONFIG) {

    $stateProvider
      .state('app.index', {
        url: '/index',
        templateUrl: 'js/app/index/index-tpl.html',
        controller: 'IndexCtrl',
        params: {msr:'null'}
      })
      .state('app.viewDerails', {
        url:'/details',
        templateUrl: 'js/app/index/view-details-tpl.html',
        controller: 'ItemDetailsCtrl',
        params: {activeItem:'null'}
      });
  }
]);

app.controller('IndexCtrl', 
  [        '$scope','$state','msrService',
  function( $scope,  $state,  msrService){

    console.log('IndexCtrl called');  

    msrService.getBlouseSizes().then(function( resp ){
      $scope.msr = resp.data;
    });

    $scope.indexItems = [];
    var sareeBlouses = [];
    var salwarKameez = [];
    var ghagraCholis = [];

    for (var i = 1; i <= 35; i++) {
      sareeBlouses.push('ext-imgs/in-blouse/blouse ('+i+').jpg');
    } 
    for (var i = 1; i <= 52; i++) {
      salwarKameez.push('ext-imgs/in-salwar/salwar ('+i+').jpg');
    } 
    for (var i = 1; i <= 25; i++) {
      ghagraCholis.push('ext-imgs/in-lahenga/lahenga ('+i+').jpg');
    }

    $scope.indexItems.push({'label': 'Saree blouse', 'slides':sareeBlouses});
    $scope.indexItems.push({'label': 'Salwar Kameez', 'slides':salwarKameez});
    $scope.indexItems.push({'label': 'Lahenga Choli', 'slides':ghagraCholis});

    $scope.viewDetails = function( activeItem ){
      console.log('You clicked viewDetails ', activeItem);
      $state.go('^.viewDerails', {activeItem:activeItem});
    };
  }
]);

app.controller('ItemDetailsCtrl', 
  [        '$scope','$uibModal','$log','$state',
  function ($scope,  $uibModal,  $log,  $state) {

    console.log('ItemCtrl is called');
    $scope.activeItem = $state.params.activeItem;
  }
]);