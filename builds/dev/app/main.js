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