

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

  $scope.chooseStyle = function( item, slide ){
    console.log('Item choosed ', item);
    slide.label = item.label;
  };

  var itemSelected = {};
  $scope.selectItemSize = function(item){
    //console.log('item, select ', item, $scope.msr);
    var measures = $scope.msr.measurements;
    for (var i = 0; i < measures.length; i++) {
      measures[i].size = measures[i].value[item.id];
    }
    $scope.msr.measurements = measures;
    itemSelected['size']  = item;

    setTimeout(function(){
      $(document).trigger('click');
    }, 1000);
    
  };

  // defalut selected for select
  $scope.size = {
    selected: {
      id:"small",
      label:"Please select a size"
    }
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


