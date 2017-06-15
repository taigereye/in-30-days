angular.module("In30Days", [
	'ngAnimate',
	'ui.router',
	'categories',
	'categories.habits'
])
	.config(function($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('in30Days', {
				url: '',
				abstract: true
			});

		$urlRouterProvider.otherwise('/');
	})
;