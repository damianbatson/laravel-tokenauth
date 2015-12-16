

app.controller('AuthController',  function($auth, $state,$http,$rootScope, $scope) {

    $scope.email='';
    $scope.password='';
    $scope.newUser={};
    $scope.loginError=false;
    $scope.loginErrorText='';

        $scope.login = function() {

            var credentials = {
                email: $scope.email,
                password: $scope.password
            }

            $auth.login(credentials).then(function (response) {

                // return $http.get('api/authenticate/user');
                console.log('data');

            // }).then(function(response) {

               // var user = JSON.stringify(response.data.user);
               // localStorage.setItem('user', user);
               // user response json returned from getAuthUser
                $rootScope.authenticated = true;
                $rootScope.currentUser = response.data.user;
                $scope.loginError = false;
                $scope.loginErrorText = '';

                $state.go('todo');
            }, function(error) {
                $scope.loginError = true;
                $scope.loginErrorText = error.data.error;

            });
        }

        $scope.register = function () {

            var credentials = {
                name: $scope.newUser.name,
                email: $scope.newUser.email,
                password: $scope.newUser.password
            }

            $auth.signup(credentials).then(function (response) {

                // return $http.get('api/authenticate/user');
                console.log('data');

            // }).then(function(response) {

               // var user = JSON.stringify(response.data.user);

               // localStorage.setItem('user', user);
               // user response json returned from getAuthUser
                $rootScope.authenticated = true;
                $rootScope.currentUser = response.data.user;
                $scope.loginError = false;
                $scope.loginErrorText = '';

                $state.go('login');
            }, function(error) {
                $scope.loginError = true;
                $scope.loginErrorText = error.data.error;

            });

        };


});