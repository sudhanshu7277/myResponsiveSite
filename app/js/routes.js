// // configure our routes
// sudhanshuApp.config(function($routeProvider) {
//     $routeProvider

//     // route for the home page
//         .when('/', {
//             templateUrl : 'templates/home.html',
//             controller  : 'mainController'
//         })

//         // route for the about page
//         .when('/about', {
//             templateUrl : 'templates/main.html',
//             controller  : 'aboutController'
//         })

//         // route for the contact page
//         .when('/contact', {
//             templateUrl : 'templates/contact.html',
//             controller  : 'contactController'
//         });
// });

// configure our routes
sudhanshuApp.config(function($routeProvider) {
    $routeProvider

    // route for the home page
        .when('/', {
            templateUrl : 'app/templates/home.html',
            controller  : 'mainController'
        })

        // route for the about page
        .when('/about', {
            templateUrl : 'app/templates/main.html',
            controller  : 'aboutController'
        })

        // route for the contact page
        .when('/contact', {
            templateUrl : 'app/templates/contact.html',
            controller  : 'contactController'
        });
});