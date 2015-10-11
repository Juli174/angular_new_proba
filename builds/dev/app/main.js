;(function(){
	'use strict';

	angular
		.module('Loft', [
			// 'ngRoute',
			'ui.router',
			'Loft.Fire',
			'Loft.User',
			'Loft.Users',
			'Loft.Home'
		])
		.constant('FIREBASE_URL', 'https://yuliyaapp.firebaseio.com/')
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
	function Run(FIREBASE_URL, configOptions, $rootScope){
		$rootScope.alerts = [];

		$rootScope.addAlert = function(_type, _msg) {
			_type = _type || 'warning';
		   $rootScope.alerts.push({type: _type, msg: _msg});
		};

		$rootScope.closeAlert = function(index) {
		   $rootScope.alerts.splice(index, 1);
		};
		console.log("== Run Main ==");
		console.log(FIREBASE_URL);
		console.log(configOptions);
	}
	
	//Config.$inject = ['$urlRouterProvider'];
	//@ngInject
	function Config($urlRouterProvider, FIREBASE_URL, $logProvider){
		$logProvider.debugEnabled(true);
		$urlRouterProvider.otherwise('/');
		console.log("== Config Main ==");
		console.log(FIREBASE_URL);
	}


})();