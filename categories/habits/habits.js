angular.module('categories.habits', [
])
	.config(function($stateProvider) {
		$stateProvider
			.state('in30days.categories.habits', {
				url: 'categories/:category',
				views: {
					'habits@': {
						templateUrl: 'categories/habits/habits_tmpl.html',
						controller: 'HabitsCtrl'
					}
				}
			})
	})
	.controller('HabitsCtrl', function($scope, $stateParams) {
		$scope.currentCategoryName = $stateParams.category;
	})
;
