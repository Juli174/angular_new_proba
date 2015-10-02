;(function(){
	'use strict';

	angular
		.module('Loft', [
			// 'ngRoute',
			'ui.router',
			'Loft.User',
			'Loft.Users',
			'Loft.Home'
		])
		.constant('FIREBASE_URL', 'http:/...')
		.value('configOptions',{
			lang: 'ru',
			timezone: '+3'
		})
		.config(Config)
		.run(Run)
		//.controller('MainCtrl', ['$scope', MainController]);

	// function MainController($scope){
	// 	var mc = this;
	// 	$scope.hello = "Привет, мир!";
	// 	mc.hello = "Это controllerAs";
	// };

	// function Config($routeProvider){
	// 	$routeProvider
	// 	.otherwise({redirectTo: '/'});
	// }

	//@ngInject
	function Run(FIREBASE_URL, configOptions){
		console.log("== Run Main ==");
		console.log(FIREBASE_URL);
		console.log(configOptions);
	}
	
	//Config.$inject = ['$urlRouterProvider'];
	//@ngInject
	function Config($urlRouterProvider, FIREBASE_URL){
		$urlRouterProvider.otherwise('/');
		console.log("== Config Main ==");
		console.log(FIREBASE_URL);
	}


})();
;(function(){
	'use strict';

	angular
		.module('Loft.Home', [
			'ui.router'
			])
		.config(ConfigHome)
		.controller('HomeCtrl', HomeController);

		function HomeController($scope){
			$scope.hello = "hello msg!";
		}

	// function UsersConfig($routeProvider){
	// 	$routeProvider
	// 	.when('/users', {
	// 		templateUrl: 'app/users/users.html',
	// 		controller: 'UsersCtrl',
	// 		controllerAs: 'usc'
	// 	});
	// }
	//ConfigHome.$inject = ['$stateProvider'];
	//@ngInject
	function ConfigHome($stateProvider){
		$stateProvider
		.state('Home', {
			url:'/home',
			templateUrl: 'app/home/index.html',
			controller: 'HomeCtrl',
			controllerAs: 'hc'
		});
	}
})();
;(function(){
	'use strict';

	angular
		.module('Loft.Users', [
			'ui.router'
			])
		.factory('UsersFactory', UsersFactory)
		.service('UsersService', UsersService)
		.config(UsersConfig)
		.controller('UsersCtrl', UsersController)
		.provider('Users', UsersProvider)
		.run(Run);

	//@ngInject
	function UsersController(UsersFactory, UsersService, $scope){
		var s = this;
		this.hello = "Users";
		this.usersList = [];
		this.get = UsersFactory.helloPrivate();
		console.log("== Controller ==");
		console.log("UsersService privateVal: ", UsersService.getPrivate());
		$scope.tf = true;
	}

	//@ngInject
	function UsersProvider(){
		var privateVal = 'Private';
		return {

			setPrivate: function(_privateVal){
				privateVal = _privateVal;
			},

			$get: function(){
				var o = {};

				o.getPrivate = function(){
					return privateVal;
				};

				return o;
			}
		}
	}

	//@ngInject
	function UsersFactory($log){
		var o = {};
		$log.debug("UsersFactory Init");
		var privateVal = null;

		o.val = "Some value";

		o.getPrivate = function(){
			return privateVal;
		}

		o.setPrivate = function(_private){
			privateVal = _private
		}

		return o;
	}

	//@ngInject
	function UsersService(){
		var privateVal = null;

		this.val = "Some value";

		this.getPrivate = function(){
			return privateVal;
		}

		this.setPrivate = function(_private){
			privateVal = _private
		}
	}

	//@ngInject
	function Run(FIREBASE_URL, configOptions, UsersFactory, UsersService, Users){
		console.log("== Run Users ==");
		console.log(FIREBASE_URL);
		console.log(configOptions);
		UsersFactory.setPrivate('Hello guys');
		console.log("UsersService privateVal: ", UsersService.getPrivate());
		UsersService.setPrivate('Users Service Singletone');
		//Users.setPrivate("New Private Value");
		console.log("++ Users ++", Users);
		console.log("USERSPROVIDER private: ", Users.getPrivate());
	}

	// function UsersConfig($routeProvider){
	// 	$routeProvider
	// 	.when('/users', {
	// 		templateUrl: 'app/users/users.html',
	// 		controller: 'UsersCtrl',
	// 		controllerAs: 'usc'
	// 	});
	// }

	//UsersConfig.$inject = ['$stateProvider'];
	//@ngInject
	function UsersConfig($provide, $stateProvider, UsersProvider, $logProvider){
		console.log("== Config Users ==");
		console.log("++ UsersProvider ++", UsersProvider);
		$logProvider.debugEnabled(false);
		//console.log(configOptions);
		$stateProvider
			.state('Users', {
				url:'/users',
				templateUrl: 'app/users/index.html',
				controller: 'UsersCtrl',
				controllerAs: 'usc'
			});
		UsersProvider.setPrivate("Not almost private");

		$provide.decorator('UsersFactory', ['$delegate', function($delegate){
			$delegate.helloPrivate = function(){
				return "hello " + $delegate.getPrivate();
			}
			return $delegate;
		}]);
	}
})();
;(function(){
	'use strict';

	angular
		.module('Loft.User', [
			'ui.router'
			])
		.config(UserConfig)
		.controller('UserCtrl', UserController);

	function UserController(){
		this.hello = "User";
	}

	// function UserConfig($routeProvider){
	// 	$routeProvider
	// 	.when('/user', {
	// 		templateUrl: 'app/user/user.html',
	// 		controller: 'UserCtrl',
	// 		controllerAs: 'uc'
	// 	});
	// }

	//UserConfig.$inject = ['$stateProvider'];
	function UserConfig($stateProvider){
		$stateProvider
		.state('User', {
			url: '/user',
			templateUrl: 'app/user/index.html',
			controller: 'UserCtrl',
			controllerAs: 'uc'
		});
	}
})();