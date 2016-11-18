(function () {
	angular.module('myApp').controller('listController', function ($scope, $timeout, $mdDialog, $http) {
		//
		//
		// $http.get('https://app.asana.com/api/1.0/projects/114058063528014/tasks?opt_pretty&opt_expand=(this%7Csubtasks%2B)', '').then(
		// 	function (res) {
		// 		$timeout(function () {
		// 			console.log(res.data);
		// 		}, 50);
	 // 		},
		//
		// 	function (err) { console.log(err) }
		// );

		$scope.items = [
							    {
							      "id": 214692925860338,
							      "created_at": "2016-11-17T13:36:16.676Z",
							      "modified_at": "2016-11-17T13:37:04.947Z",
							      "name": "[ET] - Infraestrutura - Configuração do agente do estêncil",
							      "notes": "Session duration: 1h \n\nGlobal Scope:\nConfiguração do agente do estêncil\n\nOut of Scope: \n     \nTarget SUTs: \nSI2 (v4955)\n\nEnvironment: \nBrowser: Chrome 32\n\nResult: Ok",
							      "assignee": {
							        "id": 113562395367629,
							        "name": "Jackson Alves Lino"
							      },
							      "completed": false,
							      "assignee_status": "inbox",
							      "completed_at": null,
							      "due_on": "2016-11-17",
							      "due_at": null,
							      "projects": [
							        {
							          "id": 114058063528014,
							          "name": "Test Plans"
							        }
							      ],
							      "tags": [],
							      "workspace": {
							        "id": 113562381772540,
							        "name": "Si2-Team"
							      },
							      "num_hearts": 0,
							      "memberships": [
							        {
							          "project": {
							            "id": 114058063528014,
							            "name": "Test Plans"
							          },
							          "section": {
							            "id": 214692925860336,
							            "name": "2016-11-17: Exploratory Testing:"
							          }
							        }
							      ],
							      "subtasks": [],
							      "hearted": false,
							      "hearts": [],
							      "parent": null,
							      "followers": [
							        {
							          "id": 113562395367629,
							          "name": "Jackson Alves Lino"
							        }
							      ]
							    },{
      "id": 213746751183363,
      "created_at": "2016-11-16T13:43:28.226Z",
      "modified_at": "2016-11-17T03:00:10.211Z",
      "name": "[ET] - Infraestrutura - Configuração do agente do estêncil",
      "notes": "Session duration: 1h \n\nGlobal Scope:\nConfiguração do agente do estêncil\n\nOut of Scope: \n     \nTarget SUTs: \nSI2 (v4933)\n\nEnvironment: \nBrowser: Chrome 32\n\nResult: Ok",
      "assignee": {
        "id": 113908429246779,
        "name": "Andson Belo"
      },
      "completed": false,
      "assignee_status": "inbox",
      "completed_at": null,
      "due_on": "2016-11-16",
      "due_at": null,
      "projects": [
        {
          "id": 114058063528014,
          "name": "Test Plans"
        }
      ],
      "tags": [
        {
          "id": 114061102856250,
          "name": "Exploratory Test"
        }
      ],
      "workspace": {
        "id": 113562381772540,
        "name": "Si2-Team"
      },
      "num_hearts": 0,
      "memberships": [
        {
          "project": {
            "id": 114058063528014,
            "name": "Test Plans"
          },
          "section": {
            "id": 213746751183361,
            "name": "2016-11-16: Exploratory Testing:"
          }
        }
      ],
      "subtasks": [],
      "hearted": false,
      "hearts": [],
      "parent": null,
      "followers": [
        {
          "id": 113908429246779,
          "name": "Andson Belo"
        }
      ]
    },
    {
      "id": 213753115709190,
      "created_at": "2016-11-16T13:51:06.860Z",
      "modified_at": "2016-11-16T14:36:41.056Z",
      "name": "[ET] - Infraestrutura - Monitor de Sensores do Estêncil",
      "notes": "Session duration: 1h \n\nGlobal Scope:\nMonitor de Sensores do Estêncil\n\nOut of Scope: \nConfiguração do Agente do Estêncil\n\nTarget SUTs: \nSI2 (v4941)\n\nEnvironment: \nBrowser: Chrome 32\n\nResult: Ok",
      "assignee": {
        "id": 113908429246757,
        "name": "Gabriel Guimarães"
      },
      "parent": null,
      "completed": true,
      "assignee_status": "inbox",
      "completed_at": "2016-11-16T14:36:40.223Z",
      "due_on": "2016-11-16",
      "due_at": null,
      "projects": [
        {
          "id": 114058063528014,
          "name": "Test Plans"
        }
      ],
      "memberships": [
        {
          "project": {
            "id": 114058063528014,
            "name": "Test Plans"
          },
          "section": {
            "id": 213746751183361,
            "name": "2016-11-16: Exploratory Testing:"
          }
        }
      ],
      "subtasks": [],
      "tags": [
        {
          "id": 114061102856250,
          "name": "Exploratory Test"
        }
      ],
      "workspace": {
        "id": 113562381772540,
        "name": "Si2-Team"
      },
      "hearted": false,
      "hearts": [],
      "num_hearts": 0,
      "followers": [
        {
          "id": 113908429246757,
          "name": "Gabriel Guimarães"
        }
      ]
    },{
      "id": 213753115709190,
      "created_at": "2016-11-16T13:51:06.860Z",
      "modified_at": "2016-11-16T14:36:41.056Z",
      "name": "[ET] - Infraestrutura - Monitor de Sensores do Estêncil",
      "notes": "Session duration: 1h \n\nGlobal Scope:\nMonitor de Sensores do Estêncil\n\nOut of Scope: \nConfiguração do Agente do Estêncil\n\nTarget SUTs: \nSI2 (v4941)\n\nEnvironment: \nBrowser: Chrome 32\n\nResult:\nBug #4124\nBug #5124",
      "assignee": {
        "id": 113908429246757,
        "name": "Gabriel Guimarães"
      },
      "parent": null,
      "completed": true,
      "assignee_status": "inbox",
      "completed_at": "2016-11-16T14:36:40.223Z",
      "due_on": "2016-11-16",
      "due_at": null,
      "projects": [
        {
          "id": 114058063528014,
          "name": "Test Plans"
        }
      ],
      "memberships": [
        {
          "project": {
            "id": 114058063528014,
            "name": "Test Plans"
          },
          "section": {
            "id": 213746751183361,
            "name": "2016-11-16: Exploratory Testing:"
          }
        }
      ],
      "subtasks": [],
      "tags": [
        {
          "id": 114061102856250,
          "name": "Exploratory Test"
        }
      ],
      "workspace": {
        "id": 113562381772540,
        "name": "Si2-Team"
      },
      "hearted": false,
      "hearts": [],
      "num_hearts": 0,
      "followers": [
        {
          "id": 113908429246757,
          "name": "Gabriel Guimarães"
        }
      ]
    }];

		$scope.showCustomDialog = function (ev, item) {
			$mdDialog.show({
				controller: DialogController,
				templateUrl: 'views/detailsDialog.html',
				parent: angular.element(document.body),
				targetEvent: ev,
				clickOutsideToClose:true,
				fullscreen: $scope.customFullscreen
			}).then(function(answer) {

			});
		};

		$scope.getResults = function (item){
			var info = item.notes.split(" ");
			var index = info.length - 1;
			var results = [];

			while (info[index] != "Result:"){
				if (info[index] === ""){

				} else if (info[index] === ""){

				}
			};
		};

		function DialogController($scope, $mdDialog) {
	    $scope.hide = function() {
	      $mdDialog.hide();
	    };

	    $scope.cancel = function() {
	      $mdDialog.cancel();
	    };

	    $scope.answer = function(answer) {
	      $mdDialog.hide(answer);
	    };
  	}

	});
})();
