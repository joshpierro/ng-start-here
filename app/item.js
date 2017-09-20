(function () {
    'use strict';

    angular
        .module('angularApp')
            .controller('Item', Item);

    Item.$inject = ['$location', '$stateParams', 'AppData'];

    function Item($location, $stateParams, flipperData) {

        var vm = this;

        function getItem() {


            vm.selectedItem = flipperData.getItem($stateParams.itemId); 

            //AppDataData.getItem($stateParams.itemId)
            //   .success(function (data) {
            //       vm.selectedItem = data;
            //   })
            //      .error(function (error) {
            //          return error;
            //      });


        }; 

        getItem();
 
    }

})();


