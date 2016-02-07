

'use strict';

app.config(['$stateProvider', 'JQ_CONFIG', 
  function ( $stateProvider,   JQ_CONFIG) {

    $stateProvider
      .state('app.timeline', {
        url:'/timeline',
        templateUrl: 'js/app/timeline/timeline-tpl.html',
        controller: 'TimelineCtrl',
        params: {inv:'null'}
      });
  }
]);

app.controller('TimelineCtrl', 
  [        '$scope','$uibModal','$log','$state',
  function ($scope,  $uibModal,  $log,  $state) {

    console.log('TimelineCtrl is called');

  }
]);