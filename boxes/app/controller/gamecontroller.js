app.controller('gamecontroller', function ($scope) {
    $scope.y = 0;
    $scope.x = 0;
    var maxBounds = 96;
    var minBounds = 0;
    var moveSpeedMod = .5;
    var moveSpeed = 1;

    // key binding and moving

    $scope.move = function (e) {
        debugger;
        if (e.keyCode == 39) {
            $scope.moveRight();
        } else if
            (e.keyCode == 40) {
            $scope.moveDown();
        } else if
          (e.keyCode == 38) {
            $scope.moveUp();
        } else if
            (e.keyCode == 37) {
            $scope.moveLeft();
        }
    }

    $scope.moveDown = function () {
        if ($scope.y < maxBounds) {
            $scope.y++;
        }
    }
    $scope.moveUp = function () {
        if ($scope.y < maxBounds) {
            $scope.y--;
        }
    }
    $scope.moveRight = function () {
        debugger;
        if ($scope.x >= minBounds) {
            $scope.x++;
        }
    }
    $scope.moveLeft = function () {
        if ($scope.x >= minBounds) {
            $scope.x--;
        }
    }

    //  end of controller
});