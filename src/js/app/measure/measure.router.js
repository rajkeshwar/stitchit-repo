

'use strict';

app.config(['$stateProvider', '$urlRouterProvider', 'JQ_CONFIG', 
  function ( $stateProvider,   $urlRouterProvider,   JQ_CONFIG) {

    $stateProvider
        .state('app.measure', {
          url: '/measure/:msrItemName',
          templateUrl: 'js/app/measure/measure-tpl.html',
          controller: 'MeasureCtrl',
          params: {msrItemName:null, msrItemValue:null},
          resolve: {
            deps: ['$ocLazyLoad', loadMeasureLibs]
          }
        })
        .state('app.confirm', {
          url:'/confirm',
          templateUrl: 'js/app/measure/measure-cnf-tpl.html',
          controller: 'MeasureConfCtrl',
          params: {msr:'null'}
        });
  }
]);
//:msrItemName/conf
function loadMeasureLibs( $ocLazyLoad ){
  return $ocLazyLoad.load('ui.select').then(
    function(){
      return $ocLazyLoad.load('js/controllers/select.js');
    });
}

app.controller('MeasureConfCtrl', 
  [        '$scope','$state','modalService',
  function( $scope,  $state,  modalService){
  console.log('MeasureConfCtrl called', $state.params.msr);

  $scope.cnf = $state.params.msr;

  $scope.backToCustomize = function(){
    $state.go('^.measure', {msrItemName:'blouse', msrItemValue: $scope.cnf});
  }

  //app.measure({msrItemName:'blouse'})
  $scope.addToCart = function(){

    console.log('addToCart is called'); 
    
    var modalOptions = {
        closeText: 'Cancel',
        okText: 'Delete Customer',
        headerText: 'Delete Rajkeshwar ?',
        bodyText: 'Are you sure you want to delete this customer?'
    };
    var modalDefaults = {
      templateUrl: 'js/app/login/login.tpl.html'
    };

    modalService.showModal(modalDefaults, modalOptions).then(function (result) {
      console.log('You clicked ok');
      $state.go('^.shipping', {msr:'Rajkeshwar'});
    });
  }

}]);
