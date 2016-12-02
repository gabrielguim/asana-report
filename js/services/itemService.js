(function () {
	angular.module('myApp').factory('items', function ($http) {

		var itemToShow;
		return {
			
			setItemToShow: function (item) {
				itemToShow = item;
			},

			getItemToShow: function () {
				return itemToShow;
			},

		};

	});
})();
