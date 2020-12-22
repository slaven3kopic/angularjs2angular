declare var angular: angular.IAngularStatic;
import { Phone, PhoneData } from '../core/phone/phone.service';

class PhoneListController {
    phones: PhoneData[];
    orderProp: string;

    static $inject = ['phone'];
    constructor(phone: Phone) {
        phone.query().subscribe(phones => {
            this.phones = phones;
        });
        this.orderProp = 'age';
    }

}

angular.
module('phoneList').
component('phoneList', {
    template: require('./phone-list.template.html').default,
    controller: PhoneListController
});
