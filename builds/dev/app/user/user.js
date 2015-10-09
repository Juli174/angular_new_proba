;(function(){
	'use strict';

	angular
		.module('Loft.User', [
			'ui.router'
			])
		.config(UserConfig)
		.controller('UserCtrl', UserController);

	//@ngInject
	function UserController($q, $log){
		$log.debug("== UserController ==");
		var s = this;


		function sonGo2Shop(){
			var deferred = $q.defer();
			

			setTimeout(function(){
				deferred.notify("Сын пошел в магазин");
				//if(parseInt(Math.random()*5)%2)
						deferred.resolve("Колбаса есть");
				//else	
					//deferred.reject("Колбасы нет");

						
			}, 1500);
			return deferred.promise;
		}

			function daughterGo2Shop(){
				var deferred = $q.defer();
				
				setTimeout(function(){
					deferred.notify("Дочь пошла в магазин");

					//if(parseInt(Math.random()*5)%2)
						deferred.resolve("Яйца есть");
					//else	
						//deferred.reject("Яиц нет");

					
				}, 2500);

				return deferred.promise;
			}


		s.test = function(){
			$q.all([sonGo2Shop(), daughterGo2Shop()])
			.then(
				//resolve
				function(_data){
					$log.debug("after sonGo2Shop resolved", _data);
				},
				//reject
				function(_data){
					$log.debug("after sonGo2Shop rejected", _data);
				},
				//notify
				function(_data){
					$log.debug("after sonGo2Shop notify", _data);
				});
		}
		
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
	//@ngInject
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