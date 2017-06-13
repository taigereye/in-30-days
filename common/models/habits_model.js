angular.module('in30Days.models.habits', [

])
	.service('HabitsModel', function($http) {
		var model = this,
		URLS = {
			FETCH: 'data/habits.json'
		}
		habits = [];

		function extract(result) {
			return result.data;
		}

		function cacheHabits(result) {
			habits = extract(result);
			return habits;
		}

		model.getHabits = function() {
			return $http.get(URLS.FETCH).then(cacheHabits);
		}	
	})
;
