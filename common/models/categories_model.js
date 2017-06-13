angular.module('in30Days.models.categories', [
	
])
	.service('CategoriesModel', function() {
		var model = this,
		categories = [
			{"title": "Current"},
			{"title": "Paused"},
			{"title": "Finished"}
		];

		model.getCategories = function() {
			return categories;
		}

	})
;
