angular.module('categories.habits', [
	'categories.habits.create',
	'categories.habits.edit', 
	'in30Days.models.categories',
	'in30Days.models.habits'
])
	.config(function($stateProvider) {
		$stateProvider
			.state('in30Days.categories.habits', {
				url: 'categories/:category',
				views: {
					'habits@': {
						templateUrl: 'categories/habits/habits_tmpl.html',
						controller: 'HabitsListCtrl as habitsListCtrl'
					}
				}
			})
	})
	.controller('HabitsListCtrl', function HabitsListCtrl($stateParams, HabitsModel, CategoriesModel) {
		var habitsListCtrl = this;

		CategoriesModel.setCurrentCategory($stateParams.category);
		
		HabitsModel.getHabits()
			.then(function(result) {
				habitsListCtrl.habits = result;
			});

		habitsListCtrl.getCurrentCategory = CategoriesModel.getCurrentCategory;
		habitsListCtrl.getCurrentCategoryTitle = CategoriesModel.getCurrentCategoryTitle;
	})
;
