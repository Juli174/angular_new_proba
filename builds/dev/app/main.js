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