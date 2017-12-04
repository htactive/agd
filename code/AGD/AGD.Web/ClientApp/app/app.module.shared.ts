import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { LeftSideBarComponent } from './components/left-side-bar/leftsidebar.component';
import { AppFooterComponent } from './components/app-footer/appfooter.component';
import { SparklineComponent } from './components/sparkline/sparkline.component';
import { ChartComponent } from './components/chart/chart.component';
import { RightSideBarComponent } from './components/right-side-bar/rightsidebar.component';


@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        LeftSideBarComponent,
        RightSideBarComponent,
        AppFooterComponent,
        SparklineComponent,
        ChartComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'charts', component: ChartComponent },
            { path: '**', redirectTo: 'home' }
        ]),
        ChartsModule
    ]
})
export class AppModuleShared {
}
