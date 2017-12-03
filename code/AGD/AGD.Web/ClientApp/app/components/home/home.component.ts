import { Component, AfterViewInit, AfterContentInit } from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements AfterContentInit {
    ngAfterContentInit(): void {
        setTimeout(() => {
            (window as any).initDashboard();
        }, 100);
    }
}
