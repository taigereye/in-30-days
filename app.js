angular.module("In30Days", [
	'ui.router',
	'categories',
	'categories.habits'
])
	.config(function($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('in30days', {
				url: '',
				abstract: true
			});

		$urlRouterProvider.otherwise('/');
	})
	.controller("MainCtrl", function($scope, $state) {

			$scope.currentCategory = null;

			function setCurrentCategory(category) {
				$scope.currentCategory = category;

				$state.go('in30days.categories.habits', {category:category.title});

				cancelCreating();
				cancelEditing();

			}

			function isCurrentCategory(category) {
				return $scope.currentCategory !== null && $scope.currentCategory == category;
			}

			$scope.isCurrentCategory = isCurrentCategory;
			$scope.setCurrentCategory = setCurrentCategory;



			$scope.currentHabit = null;

			function setCurrentHabit(habit) {
				$scope.currentHabit = habit;
			}

			$scope.setCurrentHabit = setCurrentHabit;



			$scope.isCreating = false;
			$scope.isEditing = false;

			function startCreating() {
				$scope.isCreating = true;
				$scope.isEditing = false;

				resetCreateForm();
			}

			function cancelCreating() {
				$scope.isCreating = false;
			}

			function startEditing() {
				$scope.isCreating = false;
				$scope.isEditing = true;
			}

			function cancelEditing() {
				$scope.isEditing = false;
			}

			function shouldShowCreating() {
				return $scope.currentCategory && !$scope.isEditing;
			}

			function shouldShowEditing() {
				return $scope.isEditing && !$scope.isCreating;
			}

			$scope.startCreating = startCreating;
			$scope.cancelCreating = cancelCreating;
			$scope.startEditing = startEditing;
			$scope.cancelEditing = cancelEditing;
			$scope.shouldShowCreating = shouldShowCreating;
			$scope.shouldShowEditing = shouldShowEditing;



			function resetCreateForm() {
				$scope.newHabit = {
					name: "",
					category: $scope.currentCategory
				}
			}

			function createHabit(habit) {
				habit.id = $scope.habits.length;
				habit.current_day = 0;
				habit.category = $scope.currentCategory.title;
				$scope.habits.push(habit);

				resetCreateForm();
			}

			$scope.createHabit = createHabit;



			$scope.editedHabit = null;

			function setEditedHabit(habit) {
				$scope.editedHabit = angular.copy(habit);
			}

			

			function updateHabit(habit) {
				var index;
				for (var i = 0; i < $scope.habits.length; i++) {
					if (habit.id === $scope.habits[i].id) {
						index = i;
					}
				}
				$scope.habits[index] = habit;

				$scope.editedHabit = null;
				$scope.isEditing = false;
			}

			function isSelectedHabit(habitId) {
				return $scope.editedHabit !== null && $scope.editedHabit.id === habitId;
			}

			$scope.setEditedHabit = setEditedHabit;
			$scope.updateHabit = updateHabit;
			$scope.isSelectedHabit = isSelectedHabit;



			function deleteHabit(habit) {
				for (var i = 0; i < $scope.habits.length; i++) {
					if (habit.id === $scope.habits[i].id) {
						$scope.habits.splice(i, 1);
					}
				}
			}

			$scope.deleteHabit = deleteHabit;

	})
;