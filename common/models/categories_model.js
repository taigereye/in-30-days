angular.module('in30Days.models.categories', [
	
])
	.service('CategoriesModel', function($http, $q) {
		var model = this,
		URLS = {
			FETCH: 'data/categories.json'
		}
		categories = [],
		currentCategory = {};

		model.setCurrentCategory = function(categoryTitle) {
			return model.getCategoryByTitle(categoryTitle)
				.then(function(category) {
					currentCategory = category;
				})
		};

		model.getCurrentCategory = function() {
			return currentCategory;
		}

		model.getCurrentCategoryTitle = function() {
			return currentCategory ? currentCategory.title : "";
		}

		function extract(result) {
			return result.data;
		}

		function cacheCategories(result) {
			categories = extract(result);
			return categories;
		}

		model.getCategories = function() {

			if (categories.length > 0) {
				return $q.when(categories) 
			} else {
				return $http.get(URLS.FETCH).then(cacheCategories);
			}
		}

		model.getCategoryByTitle = function(categoryTitle) {
			var deferred = $q.defer();

			function findCategory() {
				return _.find(categories, function(c) {
					return c.title == categoryTitle;
				})
			}

			if(categories) {
				deferred.resolve(findCategory());
			} else {
				model.getCategories()
					.then(function(result) {
						deferred.resolve(findCategory());
					})
			}

			return deferred.promise;
		}

	})
;
