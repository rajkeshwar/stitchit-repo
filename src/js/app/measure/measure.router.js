

'use strict';

// app.config(['$stateProvider', '$urlRouterProvider', 'JQ_CONFIG', 
//    function ($stateProvider,   $urlRouterProvider,   JQ_CONFIG) {
//       	$stateProvider.state('app.measure', {
// 	        url: '/measure/:msrItemName',
// 	        templateUrl: 'js/app/measure/measure-tpl.html',
// 	        controller: 'MeasureCtrl',
// 	        resolve: {
//             deps: ['$ocLazyLoad', loadMeasureLibs]
//         	}
// 	    });
//    }]
// );

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

app.controller('MeasureConfCtrl', ['$scope', '$state', function( $scope, $state ){
  console.log('MeasureConfCtrl called', $state.params.msr);

  $scope.cnf = $state.params.msr;

  $scope.backToCustomize = function(){
    $state.go('^.measure', {msrItemName:'blouse', msrItemValue: $scope.cnf});
  }

  //app.measure({msrItemName:'blouse'})
  $scope.addToCart = function(){
    console.log('addToCart is called');
  }

}]);