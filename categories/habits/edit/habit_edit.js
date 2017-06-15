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
	.controller('EditHabitCtrl', function($state, $stateParams, HabitsModel) {
		var editHabitCtrl = this;

		function returnToHabits() {
			$state.go('in30Days.categories.habits', {
				category: $stateParams.category
			})
		}

		function cancelEditing() {
			returnToHabits();
		}

		function updateHabit() {
			editHabitCtrl.habit = angular.copy(editHabitCtrl.editedHabit);
			HabitsModel.updateHabit(editHabitCtrl.editedHabit);
			returnToHabits();
		}

		HabitsModel.getHabitById($stateParams.habitId)
			.then(function (habit) {
				if (habit) {
					editHabitCtrl.habit = habit;
					editHabitCtrl.editedHabit = angular.copy(editHabitCtrl.habit);
				} else {
					returnToHabits();
				}
			})

		editHabitCtrl.cancelEditing = cancelEditing;
		editHabitCtrl.updateHabit = updateHabit;
	})
;