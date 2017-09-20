(function () {
    'use strict';

    angular
        .module('angularApp')
        .factory('AppData', AppData);

    AppData.$inject = ['$http', '$q', '$timeout'];

    function AppData($http, $q, $timeout) {

        var baseUrl = 'http://localhost:63451/';

        var service = {
            getItems: getItems,
            getItem: getItem
        };

        return service;


        function getItems() {


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
        

        function getItem(itemId) {

            return {
                ItemId: itemId,
                Title: 'This is Item ' + itemId,
                Description: 'blah, blah, blah'
            };


        }; 


    }

})();