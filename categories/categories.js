angular.module('categories', [
])
	.config(function($stateProvider) {
		$stateProvider
			.state('in30days.categories', {
				url: '/',
				views: {
					'categories@': {
						controller: 'CategoriesCtrl',
						templateUrl: 'categories/categories_tmpl.html'
					},
					'habits@': {
						controller: 'HabitsCtrl',
						templateUrl: 'categories/habits/habits_tmpl.html'
					},
					}
				}
			)
	})
	.controller('CategoriesCtrl', function CategoriesCtrl($scope) {

	})
;
