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