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
		.controller('MainCtrl', ['$scope', MainController]);

	function MainController($scope){
		var mc = this;
		$scope.hello = "Привет, мир!";
		mc.hello = "Это controllerAs";
	};

	// function Config($routeProvider){
	// 	$routeProvider
	// 	.otherwise({redirectTo: '/'});
	// }

	//@ngInject
	function Run(FIREBASE_URL, configOptions){
		console.log("Run Main");
		console.log(FIREBASE_URL);
		console.log(configOptions);
	}
	
	//Config.$inject = ['$urlRouterProvider'];
	//@ngInject
	function Config($urlRouterProvider){
		$urlRouterProvider.otherwise('/');
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
		.config(UsersConfig)
		.controller('UsersCtrl', UsersController)
		.factory('UsersFactory', [function(){
			retrun{

			}
		}])
		.run(Run);

	function UsersController(){
		this.hello = "Users";
		this.usersList = [];
	}

	//@ngInject
	function Run(FIREBASE_URL, configOptions){
		console.log("Run Users");
		console.log(FIREBASE_URL);
		console.log(configOptions);
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
	function UsersConfig($stateProvider){
		$stateProvider
		.state('Users', {
			url:'/users',
			templateUrl: 'app/users/index.html',
			controller: 'UsersCtrl',
			controllerAs: 'usc'
		});
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

	UserConfig.$inject = ['$stateProvider'];
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