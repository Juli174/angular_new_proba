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
		.config(Config)
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

	function Config($urlRouterProvider){
		$urlRouterProvider.otherwise('/');
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
;(function(){
	'use strict';

	angular
		.module('Loft.Users', [
			'ui.router'
			])
		.config(UsersConfig)
		.controller('UsersCtrl', UsersController);

	function UsersController(){
		this.hello = "Users";
		this.usersList = [];
	}

	// function UsersConfig($routeProvider){
	// 	$routeProvider
	// 	.when('/users', {
	// 		templateUrl: 'app/users/users.html',
	// 		controller: 'UsersCtrl',
	// 		controllerAs: 'usc'
	// 	});
	// }
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