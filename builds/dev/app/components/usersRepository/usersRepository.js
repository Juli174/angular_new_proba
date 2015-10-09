;(function(){
	'use strict';

	angular
	.module('Loft.Users.Repository', [])
	.factory('UsersRepository', UsersRepositoryFactory);

	//ngInject
	function UsersRepositoryFactory(){
		var o = {};

		return o;
	}
})();