'use strict';

angular.module('core').filter('checkmark', () => {
    return (input: any) => {
        return input ? '\u2713' : '\u2718';
    };
});
