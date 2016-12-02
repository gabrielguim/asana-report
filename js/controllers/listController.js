(function () {
	angular.module('myApp').controller('listController', function ($scope, $mdDialog, $http, items) {

		$http.get('./js/data.json')
      .success(function(data) {
					$scope.rawData = data.data;
					$scope.allTests = getFormattedItems($scope.rawData);
			}).error(function() {});

		$scope.showCustomDialog = function (ev, item) {

			items.setItemToShow(item);

			$mdDialog.show({
				controller: DialogController,
				templateUrl: '/views/detailsDialog.html',
				parent: angular.element(document.body),
				targetEvent: ev,
				clickOutsideToClose:true,
			}).then(function(answer) {

			});
		};

		$scope.columns = [
			{name: "Name", flex: 60},
			{name: "Assignee", flex: 10},
			{name: "Result", flex: 10},
			{name: "Bugs", flex: 10},
			{name: "Date", flex: 10}
		];

		$scope.getTotalHours = function() {
			totalHours = 0;
			for (var i = 0; i < $scope.allTests.length; i++) {
				totalHours += parseInt($scope.allTests[i].duration);
			}

			return totalHours;
		};

		function getFormattedItems(allTests){
			var listFormattedItems = [];
			var obj = {};

			for (var i = 0; i < allTests.length; i++) {
				var currentTest = allTests[i];

				if (canCount(currentTest)){

					obj = {
						id: currentTest.id,
						assignee: currentTest.assignee.name,
						name: currentTest.name,
						date: currentTest.completed_at,
						duration: getDuration(currentTest),
						result: getResult(currentTest),
						version: getVersion(currentTest),
						bugs: getBugs(currentTest)
					};

					listFormattedItems.push(obj);
				}
			}

			return listFormattedItems;
		};

		function canCount(item){
			var retorno_a;
			var retorno_b;
			var retorno_c;

			if (item.assignee === null || item.assignee === undefined){
				retorno_a = false;
			} else {
				retorno_a = true;
			}

			if (item.notes === "" || item.notes === null || item.notes === undefined){
				retorno_b = false;
			} else {
				retorno_b = true;
			}

			if (item.notes.split("\n")[0].indexOf(":") === -1){
				retorno_c = false;
			} else {
				retorno_c = true;
			}

			return retorno_a && retorno_b && retorno_c;
		};

		function getDuration(item){
			return item.notes.split("\n")[0].split(":")[1].split("")[1]
		}

		function getVersion(item) {
			var version = "";
			var info = item.notes.split("\n");

			var indexVersion = info.indexOf("Target SUTs: ");
			if (!isEmpty(info[indexVersion + 1])){
				version = info[indexVersion + 1];
				if (!isEmpty(info[indexVersion + 2])){
					version += "; " + info[indexVersion + 2];
				}
			};

			function isEmpty(text) {
				var count = 0;
				for (var i = 0; i < text.length; i++) {
					if (text[i] === " "){
						count++;
					}
				};

				return count === text.length;
			};

			return version;

		};

		function getBugs(item){
			var info = item.notes.split("\n");
			var results = [];

			var bugs = "-";
			for (var i = 0; i < info.length; i++) {
				if (info[i] === "Result:"){
					for (var j = i; j < info.length; j++) {
						if (j != i) {
							bugs += info[j] + "; ";
						} else {
							bugs = "";
						}
					}
				}
			};

			return bugs;

		};

		function getResult(item){
			var info = item.notes.split("\n");
			var results = [];

			var result = "NG"
			for (var i = 0; i < info.length; i++) {
				if (info[i] === "Result: Ok"){
					result = "OK";
				}
			};

			return result;

		};

		function DialogController($scope, $mdDialog) {

			$scope.item = items.getItemToShow();

			$scope.hide = function() {
				$mdDialog.hide();
			};

			$scope.cancel = function() {
				$mdDialog.cancel();
			};

			$scope.answer = function(answer) {
				$mdDialog.hide(answer);
			};

		};

	});
})();
