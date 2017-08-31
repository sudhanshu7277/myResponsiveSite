var sudhanshuApp = angular.module('sudhanshuApp', ['ngRoute']);

// create the controller and inject Angular's $scope
sudhanshuApp.controller('mainController', function($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
});

sudhanshuApp.controller('aboutController', function($scope) {
    $scope.message = 'Look! I am an about page.';
});

sudhanshuApp.controller('contactController', function($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
});