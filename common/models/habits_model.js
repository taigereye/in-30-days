angular.module('in30Days.models.habits', [

])
	.service('HabitsModel', function() {
		var model = this,
		habits = [
			{"id" : 0, "name": "Drink Water", "category": "Current", "current_day": 3},
			{"id" : 1, "name": "Toe Exercises", "category": "Paused", "current_day": 20},
			{"id" : 2, "name": "Watch A TED Talk", "category": "Current", "current_day": 12},
			{"id" : 3, "name": "What I'm Grateful For", "category": "Current", "current_day": 7},
			{"id" : 4, "name": "Check The News", "category": "Current", "current_day": 26},
			{"id" : 5, "name": "Green Tea", "category": "Paused", "current_day": 10},
			{"id" : 6, "name": "Stretch", "category": "Current", "current_day": 14},
			{"id" : 7, "name": "1 Second Everyday", "category": "Finished", "current_day": 30},
			{"id" : 8, "name": "Weigh In", "category": "Finished", "current_day": 30},
			{"id" : 9, "name": "Short Term Goals", "category": "Current", "current_day": 5},
		];
		
		model.getHabits = function() {
			return habits;
		}	
	})
;
