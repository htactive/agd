import { Component } from '@angular/core';

@Component({
    selector: 'chart',
    templateUrl: './chart.component.html'
})
export class ChartComponent {
    lineChartData: any[];
    lineChartLabels: any[];
    lineChartOptions: any;
    lineChartColors: any[];
    lineChartLegend: boolean = false;
    lineChartType: string = 'line';
    constructor() {
        //generate random number for charts
        let randNum = function () {
            //return Math.floor(Math.random()*101);
            return (Math.floor(Math.random() * (1 + 40 - 20))) + 20;
        }
        this.lineChartLabels = ["January", "February", "March", "April", "May", "June", "July"];
        this.lineChartColors = [
            {
                backgroundColor: "rgba(186,195,210,0.2)",
                borderColor: "rgba(186,195,210,1)",
                pointBackgroundColor: "rgba(186,195,210,1)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgba(186,195,210,1)",
            },
            {
                backgroundColor: "rgba(96,177,204,0.2)",
                borderColor: "rgba(96,177,204,1)",
                pointBackgroundColor: "rgba(96,177,204,1)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgba(96,177,204,1)",
            },
        ];
        this.lineChartData = [
            {
                label: "PayPal",
                data: [3 + randNum(), 5 + randNum(), 8 + randNum(), 13 + randNum(), 17 + randNum(), 21 + randNum(), 23 + randNum()]
            },
            {
                label: "Credit card",
                data: [randNum() - 5, randNum() - 2, randNum() - 4, randNum() - 1, randNum() - 3, randNum() - 2, randNum() - 5]
            }
        ];
        this.lineChartOptions = {
            responsive: true,
            scaleShowGridLines: true,
            scaleGridLineColor: "#bfbfbf",
            scaleGridLineWidth: 0.2,
            bezierCurve: false,
            //points
            pointDot: false,
            datasetStroke: true,
            datasetStrokeWidth: 2,
            datasetFill: true,
            //animations
            animation: true,
            animationSteps: 60,
            animationEasing: "easeOutQuart",
            //scale
            showScale: true,
            scaleFontFamily: "'Roboto'",
            scaleFontSize: 13,
            scaleFontStyle: "normal",
            scaleFontColor: "#333",
            //tooltips
            showTooltips: true,
            tooltipFillColor: "#344154",
            tooltipFontFamily: "'Roboto'",
            tooltipFontSize: 13,
            tooltipFontColor: "#fff",
            tooltipYPadding: 8,
            tooltipXPadding: 10,
            tooltipCornerRadius: 2,
            tooltipTitleFontFamily: "'Roboto'",
        };
    }
}
