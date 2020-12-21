'use strict';

angular.module('core.phone').factory('Phone', ['$resource',
    ($resource: any) => {
        return $resource('phones/:phoneId.json', {}, {
            query: {
                method: 'GET',
                params: {phoneId: 'phones'},
                isArray: true
            }
        });
    }
]);
