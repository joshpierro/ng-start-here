(function () {
    'use strict';

    angular
        .module('angularApp')
            .controller('List', List);

    List.$inject = ['AppData','AppService'];

    function List(AppData,AppService) {
        var vm = this;

        function init(){
            getAllItems();
        }

        function getAllItems() {
            AppData.getItems()
                .then(function success(result){
                    vm.allItems = AppService.getIds(result);
                    console.table( vm.allItems)
                },function error(error){
                    console.log('we got an error')
                });
        }

        init();

    }

})();