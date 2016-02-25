/* global Firebase */
app.controller('MainController', function ($scope, FBREF, $firebaseArray) {
    $scope.db = new Firebase(FBREF);
    $scope.itemList = $firebaseArray(new Firebase(FBREF + 'items'));
    $scope.member;


    $scope.user = {
        email: "",
        password: "",
    };
    console.log("what even is a firebase object?", $scope.db)

    $scope.register = function () {
        
        $scope.db.createUser($scope.user, handleDBResponse)
    }

    function handleDBResponse(err, authData) {
        
        console.log("did we get here")
        if (err) {
            console.log(err)
        } {
            console.log(authData);
            $scope.userToSave = {
                username: $scope.user.email,
                reputation: 0,
                created: Date.now(),
            }
            $scope.$apply(function () {
                $scope.member = $scope.userToSave;
            })
            $scope.db.child('users').child(authData.uid).update($scope.userToSave)
        }
    };


    $scope.addItem = function () {
        if (!$scope.newItem) {
            return
        }
        $scope.itemList.$add({ body: $scope.newItem });
        $scope.newItem = ""
    }

   $scope.removeItem = function(item){
       $scope.itemList.$remove(item);
   }

    $scope.login = function () {
       
        //  we need to pass the input to the datatbase
        //  databsae responible for auth
        //  after validation from the server the server will send back error or auth data for that user
        // authData.uid ----- we want this 
        $scope.db.authWithPassword($scope.user, handleDBResponse)
        console.log($scope.user.email, $scope.user.password)
    };
});    
