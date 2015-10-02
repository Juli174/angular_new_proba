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