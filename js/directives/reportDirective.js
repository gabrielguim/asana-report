(function () {
	angular.module('myApp').directive('report', function () {

		return {
			restrict: 'E',
			templateUrl: '/views/reportView.html',
			controller: 'listController'
		};

	});
})();
