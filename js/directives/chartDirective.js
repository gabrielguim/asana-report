(function () {
	angular.module('myApp').directive('chart', function () {

		return {
			restrict: 'E',
			templateUrl: '/views/chartView.html',
			controller: 'chartController'
		};

	});
})();
