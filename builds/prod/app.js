!function(){"use strict";function r(r){var t=this;r.hello="Привет, мир!",t.hello="Это controllerAs"}function t(r){r.otherwise("/")}angular.module("Loft",["ui.router","Loft.User","Loft.Users","Loft.Home"]).config(t).controller("MainCtrl",["$scope",r]),t.$inject=["$urlRouterProvider"]}(),function(){"use strict";function r(r){r.hello="hello msg!"}function t(r){r.state("Home",{url:"/home",templateUrl:"app/home/index.html",controller:"HomeCtrl",controllerAs:"hc"})}angular.module("Loft.Home",["ui.router"]).config(t).controller("HomeCtrl",r)}(),function(){"use strict";function r(){this.hello="User"}function t(r){r.state("User",{url:"/user",templateUrl:"app/user/index.html",controller:"UserCtrl",controllerAs:"uc"})}angular.module("Loft.User",["ui.router"]).config(t).controller("UserCtrl",r),t.$inject=["$stateProvider"]}(),function(){"use strict";function r(){this.hello="Users",this.usersList=[]}function t(r){r.state("Users",{url:"/users",templateUrl:"app/users/index.html",controller:"UsersCtrl",controllerAs:"usc"})}angular.module("Loft.Users",["ui.router"]).config(t).controller("UsersCtrl",r),t.$inject=["$stateProvider"]}();