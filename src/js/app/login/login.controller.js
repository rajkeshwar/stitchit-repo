
app.controller('LoginModalCtrl', 
  [        '$scope','$uibModal','$log','$rootScope', '$state',
  function ($scope,  $uibModal,  $log,  $rootScope, $state) {

  $scope.userHasAccount = true;
  $scope.forgotYourPassword = false;

  $scope.createAccount = function(){
    $scope.userHasAccount = false;
    $scope.forgotYourPassword = false;
  }

  $scope.loginAccount = function(){
    $scope.userHasAccount = true;
    $scope.forgotYourPassword = false;
  }

  $scope.forgotPassowrd = function(flage){
    $scope.forgotYourPassword = flage;
  }

  $scope.loginSuccess = function(){
    console.log('loginSuccess is called');
    $state.go('^.shipping', {msr:'Rajkeshwar'});
  };

  $scope.authError = "Invalid username or password ";
}]);