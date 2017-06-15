angular.module('categories.habits.edit', [

])
	.config(function($stateProvider) {
		$stateProvider
			.state('in30Days.categories.habits.edit', {
				url: '/habits/:habitId/edit',
				templateUrl: 'categories/habits/edit/habit_edit_tmpl.html',
				controller: 'EditHabitCtrl as editHabitCtrl'
			})
	})
	.controller('EditHabitCtrl', function() {
		
	})
;