angular.module('categories.habits.create', [

])
	.config(function($stateProvider) {
		$stateProvider
			.state('in30Days.categories.habits.create', {
				url: '/habits/create',
				templateUrl: 'categories/habits/create/habit_create_tmpl.html',
				controller: 'CreateHabitCtrl as createHabitCtrl'
			})
	})
	.controller('CreateHabitCtrl', function($state, $stateParams, HabitsModel) {
		var createHabitCtrl = this;

		function returnToHabits() {
			$state.go('in30Days.categories.habits', {
				category: $stateParams.category
			})
		}

		function cancelCreating() {
			returnToHabits();
		}

		function createHabit(habit) {
			HabitsModel.createHabit(habit);
			returnToHabits();
		}

		function resetForm() {
			createHabitCtrl.newHabit = {
				name: '',
				category: $stateParams.category,
				current_day: 0
			};
		}

		createHabitCtrl.cancelCreating = cancelCreating;
		createHabitCtrl.createHabit = createHabit;

		resetForm();
	})
;
