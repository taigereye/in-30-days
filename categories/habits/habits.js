angular.module('categories.habits', [
	'in30Days.models.categories',
	'in30Days.models.habits'
])
	.config(function($stateProvider) {
		$stateProvider
			.state('in30days.categories.habits', {
				url: 'categories/:category',
				views: {
					'habits@': {
						templateUrl: 'categories/habits/habits_tmpl.html',
						controller: 'HabitsListCtrl as habitsListCtrl'
					}
				}
			})
	})
	.controller('HabitsListCtrl', function HabitsListCtrl($stateParams, HabitsModel) {
		var habitsListCtrl = this;
		habitsListCtrl.currentCategoryName = $stateParams.category;
		HabitsModel.getHabits()
			.then(function (result) {
				habitsListCtrl.habits = result;
			});
	})
;
