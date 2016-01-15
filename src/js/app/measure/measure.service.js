
'use strict';

app.factory('msrService', ['$http', function($http){

	function getBlouseSizes(){
		return $http.get('api/measure/blouse.json');
	}

	return {
		getBlouseSizes: getBlouseSizes
	}
	
}]);