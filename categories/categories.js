angular.module('categories', [
	'in30Days.models.categories'
])
	.config(function($stateProvider) {
		$stateProvider
			.state('in30Days.categories', {
				url: '/',
				views: {
					'categories@': {
						controller: 'CategoriesListCtrl as categoriesListCtrl',
						templateUrl: 'categories/categories_tmpl.html'
					},
					'habits@': {
						controller: 'HabitsListCtrl as habitsListCtrl',
						templateUrl: 'categories/habits/habits_tmpl.html'
					}
				}
			}
		)
	})
	.controller('CategoriesListCtrl', function CategoriesListCtrl(CategoriesModel, HabitsModel) {
		var categoriesListCtrl = this;
		
		CategoriesModel.getCategories()
			.then(function(result) {
				categoriesListCtrl.categories = result;
			});

		HabitsModel.getHabits()
			.then(function(result) {
				categoriesListCtrl.habits = result;
				categoriesListCtrl.habitsTotal = result.length;
			});
	})
;
