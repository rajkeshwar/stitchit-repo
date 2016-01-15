

'use strict';

app.controller('MeasureCtrl', 
	['$scope', '$state', '$stateParams', 'msrService',
	function($scope, $state, $stateParams, msrService){

	console.log('MeasureCtrl loaded');
	console.log('$stateParams', $stateParams);

	$scope.itemName = $stateParams.msrItemName;

	msrService.getBlouseSizes().then(function( resp ){
		$scope.msr = resp.data;
	});

  // $scope.fnecks = [1,2,3,4,5,6,7,8];
  // $scope.bnecks = [1,2,3,4,5,6,7,8,9,10,11,12];
  // $scope.sleeves = [1,2,3,4,5,6,7,8,9,10];

  // $scope.sfrontNeck = "Front Neck Style";
  // $scope.sbackNeck = "Back Neck Style";
  // $scope.sslveStyle = "Sleeve Style";

  $scope.chooseStyle = function( item, slide ){
    console.log('Item choosed ', item);
    slide.label = item.label;
  };

  // $scope.frontNeck = function(item){
  //   $scope.sfrontNeck = item;
  // };

  // $scope.backNeck = function(item){
  //   $scope.sbackNeck = item;
  // };

  // $scope.sleeveStyle = function(item){
  //   $scope.sslveStyle = item;
  // };

  var itemSelected = {};
  $scope.selectItemSize = function(item){
    //console.log('item, select ', item, $scope.msr);
    var measures = $scope.msr.measurements;
    for (var i = 0; i < measures.length; i++) {
      measures[i].size = measures[i].value[item.id];
    }
    $scope.msr.measurements = measures;
    itemSelected['size']  = item;
  };

  // defalut selected for select
  $scope.size = {
    selected: {id:"small"}
  };

  $scope.proceedToNext = function(){
    var measures = $scope.msr.measurements;
    var msrArray = [], itemObj = {};
    for (var i = 0; i < measures.length; i++) {
      itemObj = {
        'key': measures[i].key,
        'value':measures[i].size
      };
      msrArray.push(itemObj);
    }
    itemSelected['measures'] = msrArray;
    itemSelected['itemName'] = $scope.msr.itemName;
    itemSelected['itemDescription'] = $scope.msr.itemDescription;
    itemSelected['itemId'] = $scope.msr.itemId;

    $state.go('^.confirm', {msr:itemSelected});
  }
        
}]);


