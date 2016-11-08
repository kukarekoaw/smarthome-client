import {BrowserModule} from '@angular/platform-browser';
import {Component, NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {ChartModule} from 'angular2-highcharts';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import {AppComponent} from './components/app.component';
import {DeviceComponent}  from './components/device.component';
import {PanelSensorComponent} from "./components/panel-sensor.component";
import {PanelHomeComponent} from "./components/panel-home.component";

import {SensorsService} from "./shared/sensors.service";
import {AppRoutingModule}     from './app-routing.module';

@NgModule({
    declarations: [
        AppComponent,
        DeviceComponent,
        PanelSensorComponent,
        PanelHomeComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ChartModule,
        AppRoutingModule,
    ],
    providers: [
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        SensorsService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
