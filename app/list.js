(function () {
    'use strict';

    angular
        .module('angularApp')
            .controller('List', List);

    List.$inject = ['$location', '$stateParams', 'AppData'];

    function List($location, $stateParams, AppData) {
        var vm = this;

        console.log('this is a list');


        function getAllItems() {

            vm.allItems =  AppData.getItems();
            //AppData.getItems()
            //   .success(function (data) {
            //       vm.allItems = data;
            //   })
            //      .error(function (error) {
            //          return error;
            //      });

        }

        getAllItems();

   
    }

})();