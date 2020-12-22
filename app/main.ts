import './polyfills';
import 'angular';
import 'angular-animate';
import 'angular-resource';
import 'angular-route';
import 'bootstrap';

import './core/index'
import './phone-detail/index';
import './phone-list/index';
import './app.module';
import './app.config';

import './imports.less';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HttpClientModule } from '@angular/common/http';
import { Phone } from "./core/phone/phone.service";

@NgModule({
    imports: [
        BrowserModule,
        UpgradeModule,
        HttpClientModule
    ],
    providers: [
        Phone
    ]
})

export class AppModule {
    ngDoBootstrap() {}
}

platformBrowserDynamic().bootstrapModule(AppModule).then(platformRef => {
    console.log("Bootstrapping both Angular and AngularJS");
    const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
    upgrade.bootstrap(document.body, ['phonecatApp']);
}).catch(e => {
    console.error(e);
});
