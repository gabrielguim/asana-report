(function () {
	angular.module('myApp').controller('sideNavController', function ($scope) {

		$scope.options = [
			{name: "Relatório geral", id: 0},
			{name: "Gráficos", id: 1}
		]

		$scope.selectedOption = 0;

		$scope.checkSelectedOption = function(option){
			return $scope.selectedOption === option;
		};

		$scope.setSelectedOption = function(option){
			$scope.selectedOption = option;
		};

	});
})();
