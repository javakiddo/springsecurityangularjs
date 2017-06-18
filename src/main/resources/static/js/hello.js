angular.module('hello',[])
    .controller('home',function($http,$scope){
    
    var self=this;
            $http.get('/resource').then(function(response){
                $scope.greeting=response.data;
                console.log(response);
            })
});