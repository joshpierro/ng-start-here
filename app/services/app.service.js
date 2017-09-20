(function () {
    'use strict';

    angular
        .module('angularApp')
        .service('AppService', AppService);

    AppService.$inject = [];

    function AppService() {


       this.getIds = function(items) {
           items.forEach(function getId(item){
               //This is a hack... why doesnt this api have an id?
               item.itemId =
                   item.url.substr(item.url.indexOf('people/'))
                       .replace('people/','')
                       .replace('/','')
           });
            return items;
        }

    }

})();