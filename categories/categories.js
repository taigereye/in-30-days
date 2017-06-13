angular.module('categories', [
	'in30Days.models.categories'
])
	.config(function($stateProvider) {
		$stateProvider
			.state('in30days.categories', {
				url: '/',
				views: {
					'categories@': {
						controller: 'CategoriesListCtrl as categoriesListCtrl',
						templateUrl: 'categories/categories_tmpl.html'
					},
					}
				}
			)
	})
	.controller('CategoriesListCtrl', function CategoriesListCtrl(CategoriesModel) {
		var categoriesListCtrl = this;
		categoriesListCtrl.categories = CategoriesModel.getCategories();
	})
;
