declare var angular: angular.IAngularStatic;
import { Phone, PhoneData } from '../core/phone/phone.service';

class PhoneDetailController {
    phone: PhoneData;
    mainImageUrl: string;

    static $inject = ['$routeParams', 'phone'];
    constructor($routeParams: angular.route.IRouteParamsService, phone: Phone) {
        const phoneId = $routeParams.phoneId;
        phone.get(phoneId).subscribe(data => {
            this.phone = data;
            this.setImage(data.images[0]);
        });
    }

    setImage(imageUrl: string) {
        this.mainImageUrl = imageUrl;
    }
}

angular.
module('phoneDetail').
component('phoneDetail', {
    template: require('./phone-detail.template.html').default,
    controller: PhoneDetailController
});
