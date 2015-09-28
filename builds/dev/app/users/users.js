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