(function () {
    'use strict';

    angular
        .module('angularApp')
            .controller('Item', Item);

    Item.$inject = ['$stateParams', 'AppData'];

    function Item($stateParams, AppData) {

        var vm = this;

        function getItem() {


            //vm.selectedItem = AppData.getItem($stateParams.itemId);

            AppData.getItem($stateParams.itemId)
                .then(function success(result){
                    console.log(result)
                    vm.selectedItem = result;
                },function error(error){
                    console.log(error)
                    console.log('we got an error')
                });


        }; 

        getItem();
 
    }

})();


