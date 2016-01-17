

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
        .state('app.item', {
          url:'/item',
          templateUrl: 'js/app/index/item-tpl.html',
          controller: 'ItemCtrl',
          params: {inv:'null'}
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

    $scope.chooseStyle = function( item, slide ){
      console.log('Item choosed ', item);
      slide.label = item.label;
    };
  }
]);

app.controller('ItemCtrl', 
  [        '$scope','$uibModal','$log','$rootScope',
  function ($scope,  $uibModal,  $log,  $rootScope) {

    console.log('ItemCtrl is called');
  
  }
]);