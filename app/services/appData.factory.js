(function () {
    'use strict';

    angular
        .module('angularApp')
        .factory('AppData', AppData);

    AppData.$inject = ['$http'];

    function AppData($http) {

        var BASE_URL = 'https://swapi.co/api/people/';

        var service = {
            getItems: getItems,
            getItem: getItem
        };

        return service;

        function getItems(){
          return $http.get(BASE_URL)
               .then(function(result){
                   return result.data.results;
            });
        }

        function getItem(itemId) {
            return  $http.get(BASE_URL + itemId + '/')
                .then(function(result){
                    return result.data;
                });
        };

        function getItems_mock() {

            //This is hardcoded data, but could be an api call (see below) 
            return [
                {
                    ItemId: 1,
                    Title:'Item one'
                },
                {
                    ItemId: 2,
                    Title: 'Item Two'
                },
                {
                    ItemId: 3,
                    Title: 'Item Three'
                },
                {
                    ItemId: 4,
                    Title:'Item Four'
                },
                {
                    ItemId: 5,
                    Title: 'Item Four'
                }
            ];



        }; 
        




    }

})();