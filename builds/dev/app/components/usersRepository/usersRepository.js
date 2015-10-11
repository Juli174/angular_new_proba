;(function(){
	'use strict';

	angular
	.module('Loft.Users.Repository', [
		'Loft.Fire'
		])
	.factory('UsersRepository', UsersRepositoryFactory);

	//ngInject
	function UsersRepositoryFactory(dbc, $firebaseArray, $firebaseObject){
		var o = {};

		o.getAllUsers = function(){
			var ref = dbc.getRef();

			return $firebaseArray(ref.child('users'));
		}

		o.getNewUser = function(_user){
			if(_user && _user.name && _user.name.length > 0){
				var ref = dbc.getRef();
				var usersList = $firebaseArray(ref.child('users'));
				return usersList.$add(_user);
			}
			return false;
		}

		o.removeUser = function(_$id){
			if(_$id){
				var ref = dbc.getRef();
				var userObject = $firebaseObject(ref.child('users').child(_$id));
				return userObject.$remove();
			}
		}

		return o;
	}
})();