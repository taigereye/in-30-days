angular.module('in30Days.models.habits', [

])
	.service('HabitsModel', function($http, $q) {
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

		function findHabit(habitId) {
			for (var i = 0; i < habits.length; i++) {
				if (habits[i].id === parseInt(habitId, 10)) {
					return habits[i];
				}
			}
		}

		model.getHabitById = function(habitId) {
			var deferred = $q.defer();

			if(habits.length > 0) {
				deferred.resolve(findHabit(habitId));
			} else {
				model.getHabits().then(function() {
					deferred.resolve(findHabit(habitId));
				})
			}

			return deferred.promise;
		};

		model.getHabits = function() {
			var deferred = $q.defer();

			if(habits.length > 0) {
				deferred.resolve(habits);
			} else {
				$http.get(URLS.FETCH).then(function(habits) {
					deferred.resolve(cacheHabits(habits));
				});
			}

			return deferred.promise;
		}	

		model.createHabit = function(habit) {
			habit.id = habits.length;
			habits.push(habit);
		}

		model.updateHabit = function(habit) {
			var index;

			for (var i = 0; i < habits.length; i++) {
				if (habit.id === habits[i].id) {
					index = habit.id;
				}
			}

			habits[index] = habit;
		}
	})
;
