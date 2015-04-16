angular.module('calorific', ['ionic']) .run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
angular.module('calorific', ['ionic']) .controller('AppCtrl', function($scope) {
  $scope.data = {};
  
  $scope.items = [
    { price: '$4.99', text: 'Meat' },
    { price: '$2.99', text: 'Dairy' },
    { price: '$3.99', text: 'Fruit' },
  ];
    
  $scope.clearSearch = function() {
    $scope.data.searchQuery = '';
  };
});
