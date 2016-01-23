angular.module('app').controller('ListController', function ($scope, $state) {
    $scope.images = [];
    $.get({
        url: 'kittenIdentity.json',
        success: function (res) {
            $scope.images = res;
            $scope.$apply;
        }
    })
})