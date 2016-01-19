angular.module('ecommerce', ['ui.router'])

.config(function( $stateProvider, $urlRouterProvider ) {

	$stateProvider
	.state('home', {
		url: '/home',
		templateUrl: 'views/home.html',
		controller: 'homeCtrl'
	})
	.state('admin', {
		url: '/admin',
		templateUrl: 'views/admin.html',
		controller: 'adminCtrl'
	})
    .state('newItem', {
		url: '/admin/newItem',
		templateUrl: 'views/newItem.html',
		controller: 'newItemCtrl'
	});

	$urlRouterProvider.otherwise('/home');

});