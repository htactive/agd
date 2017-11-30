import { Component, AfterViewInit, ViewChild, ElementRef, Input } from '@angular/core';

@Component({
    selector: 'sparkline',
    templateUrl: './sparkline.component.html'
})
export class SparklineComponent implements AfterViewInit {
    @ViewChild('sElement') el: ElementRef;
    @Input('data-set') dataSet: number[];
    ngAfterViewInit(): void {
        let $ = (window as any).$;
        $(this.el.nativeElement).sparkline(this.dataSet, {
            type: 'bar',
            width: '100%',
            height: '20px',
            barColor: '#dfe2e7',
            zeroAxis: false,
        });
    }
}
