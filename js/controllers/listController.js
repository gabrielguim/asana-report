(function () {
	angular.module('myApp').controller('listController', function ($scope, $timeout, $http) {


		$http.get('https://app.asana.com/api/1.0/projects/114058063528014/tasks?opt_pretty&opt_expand=(this%7Csubtasks%2B)', '').then(
			function (res) {
				$timeout(function () {
					console.log(res.data);
				}, 50);
	 		},

			function (err) { console.log(err) }
		);

		$scope.items = [
			{ name: 'gabriel', email: 'teste@asdas', date: "12/23/1234" },
			{ name: 'gabriel', email: 'teste@asdas', date: "12/23/1234" },
			{ name: 'gabriel', email: 'teste@asdas', date: "12/23/1234" },
			{ name: 'gabriel', email: 'teste@asdas', date: "12/23/1234" },
			{ name: 'gabriel', email: 'teste@asdas', date: "12/23/1234" },
			{ name: 'gabriel', email: 'teste@asdas', date: "12/23/1234" },
			{ name: 'gabriel', email: 'teste@asdas', date: "12/23/1234" },
			{ name: 'gabriel', email: 'teste@asdas', date: "12/23/1234" },
			{ name: 'gabriel', email: 'teste@asdas', date: "12/23/1234" },
			{ name: 'gabriel', email: 'teste@asdas', date: "12/23/1234" }
		];

	});
})();
