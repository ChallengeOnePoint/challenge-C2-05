angular
    .module('app', [
    'ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $stateProvider
        /*   .state('clients', {
               url: '/clients',
               templateUrl: 'views/clients.html',
               controller: 'ClientsController'
           })*/
            .state('list', {
            url: '/',
            templateUrl: 'image_flow.html',
            controller: 'ListController'
        })
        $urlRouterProvider.otherwise('/');
    }])