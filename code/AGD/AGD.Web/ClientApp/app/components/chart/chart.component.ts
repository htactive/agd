import { Component } from '@angular/core';

@Component({
    selector: 'chart',
    templateUrl: './chart.component.html'
})
export class ChartComponent {
    // lineChart
    lineChartData: any[];
    lineChartLabels: any[];
    lineChartOptions: any;
    lineChartColors: any[];
    lineChartLegend: boolean = false;
    lineChartType: string = 'line';
    // line Unfilled chart
    lineChartUnfilledData: any[];
    lineChartUnfilledLabels: any[];
    lineChartUnfilledOptions: any;
    lineChartUnfilledColors: any[];
    lineChartUnfilledLegend: boolean = false;
    lineChartUnfilledType: string = 'line';
    // pie chart
    pieChartData: any[];
    pieChartOptions: any;
    pieChartLabels: any[];
    // radar
    radarChartData: any[];
    radarChartLabels: any[];
    radarChartOptions: any;

    // bar
    barChartData: any[];
    barChartLabels: any[];
    barChartOptions: any;

    // donut
    donutChartData: any[];
    donutChartOptions: any;
    donutChartLabels: any[];
    // polar Area
    polarAreaChartLabels: any[];
    polarAreaChartData: any[];

    randNum() {
        return (Math.floor(Math.random() * (1 + 40 - 20))) + 20;

    }
    constructor() {

        // lineChart
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
                data: [3 + this.randNum(), 5 + this.randNum(), 8 + this.randNum(), 13 + this.randNum(), 17 + this.randNum(), 21 + this.randNum(), 23 + this.randNum()]
            },
            {
                label: "Credit card",
                data: [this.randNum() - 5, this.randNum() - 2, this.randNum() - 4, this.randNum() - 1, this.randNum() - 3, this.randNum() - 2, this.randNum() - 5]
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
            animation: {
                steps: 60,
                easing: "easeOutQuart",
                rotate: true,
                scale: false
            },
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

        // line unfilled chart
        this.lineUnfilledChart();
        // pie chart
        this.pieChart();
        // radar chart
        this.radarChart();

        // bar
        this.barChart();
        // donut
        this.donutChart();

        // polar area
        this.polarArea();
    }

    lineUnfilledChart() {

        this.lineChartUnfilledLabels = ["January", "February", "March", "April", "May", "June", "July"];
        this.lineChartUnfilledColors = [
            {
                backgroundColor: "rgba(186,195,210,0.2)",
                borderColor: "rgba(186,195,210,1)",
                pointBackgroundColor: "rgba(186,195,210,1)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#a1a1a1",
                pointHoverBorderColor: "#fff"
            },
            {
                backgroundColor: "rgba(67,174,168,0.2)",
                borderColor: "rgba(67,174,168,1)",
                pointBackgroundColor: "rgba(67,174,168,1)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgba(67,174,168,1)"
            },
        ];
        let randNum = this.randNum;
        this.lineChartUnfilledData = [
            {
                label: "PayPal",
                data: [3 + randNum(), 5 + randNum(), 8 + randNum(), 13 + randNum(), 17 + randNum(), 21 + randNum(), 23 + randNum()],
                fill: false,
                lineTension: 0
            },
            {
                label: "Credit card",
                data: [randNum() - 5, randNum() - 2, randNum() - 4, randNum() - 1, randNum() - 3, randNum() - 2, randNum() - 5],
                fill: false,
                lineTension: 0
            }
        ];
        this.lineChartUnfilledOptions = {
            responsive: true,
            scaleShowGridLines: true,
            scaleGridLineColor: "#bfbfbf",
            scaleGridLineWidth: 0.2,
            bezierCurve: true,
            //points
            pointDot: false,
            datasetFill: false,
            //animations
            animation: {
                steps: 60,
                easing: "easeOutQuart",
                rotate: true,
                scale: false
            },
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

    pieChart() {
        this.pieChartLabels = ["SEO", "Coding", "Hosting", "Design", "Other"];
        this.pieChartData = [300, 50, 100, 40, 120];

        this.pieChartOptions = {
            responsive: true,
            //pie options
            segmentShowStroke: true,
            segmentStrokeColor: "#fff",
            segmentStrokeWidth: 2,
            percentageInnerCutout: 0, // This is 0 for Pie charts
            //animations

            animation: {
                steps: 100,
                easing: "easeOutBounce",
                rotate: true,
                scale: false,
            },
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

    radarChart() {
        this.radarChartLabels = ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"];
        this.radarChartData = [
            {
                label: "My First dataset",
                fillColor: "rgba(186,195,210,0.2)",
                strokeColor: "rgba(186,195,210,1)",
                pointColor: "rgba(186,195,210,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(186,195,210,1)",
                data: [65, 59, 90, 81, 56, 55, 40]
            },
            {
                label: "My Second dataset",
                fillColor: "rgba(96,177,204,0.2)",
                strokeColor: "rgba(96,177,204,1)",
                pointColor: "rgba(96,177,204,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(96,177,204,1)",
                data: [28, 48, 40, 19, 96, 27, 100]
            }
        ];
        this.radarChartOptions = {
            responsive: true,
            //radar options
            scaleShowLine: true,
            angleShowLineOut: true,
            scaleShowLabels: false,
            angleLineColor: "rgba(0,0,0,.0.5)",
            angleLineWidth: 1,
            pointDotRadius: 3,
            pointDotStrokeWidth: 1,
            //points
            pointLabelFontFamily: "'Roboto'",
            pointDot: true,
            //animations
            animation: {
                steps: 100,
                easing: "easeOutBounce",
                rotate: true,
                scale: true
            },
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

    barChart() {
        this.barChartLabels = ["January", "February", "March", "April", "May", "June", "July"];
        let randNum = this.randNum;
        this.barChartData = [{
            fillColor: "rgba(186,195,210,0.5)",
            strokeColor: "rgba(186,195,210,0.3)",
            highlightFill: "rgba(186,195,210,0.75)",
            highlightStroke: "rgba(186,195,210,1)",
            data: [3 + randNum(), 5 + randNum(), 8 + randNum(), 13 + randNum(), 17 + randNum(), 21 + randNum(), 23 + randNum()]
        },
        {
            fillColor: "rgba(96,177,204,0.5)",
            strokeColor: "rgba(96,177,204,0.3)",
            highlightFill: "rgba(96,177,204,0.75)",
            highlightStroke: "rgba(96,177,204,1)",
            data: [randNum() - 5, randNum() - 2, randNum() - 4, randNum() - 1, randNum() - 3, randNum() - 2, randNum() - 5]
        }];
        this.barChartOptions = {
            responsive: true,
            scaleShowGridLines: true,
            scaleGridLineColor: "#bfbfbf",
            scaleGridLineWidth: 0.2,
            //bar options
            barShowStroke: true,
            barStrokeWidth: 2,
            barValueSpacing: 5,
            barDatasetSpacing: 2,
            //animations
            animation: {
                steps: 60,
                easing: "easeOutQuart"
            },
            //scale
            showScale: true,
            scaleFontFamily: "'Roboto'",
            scaleFontSize: 13,
            scaleFontStyle: "normal",
            scaleFontColor: "#333",
            scaleBeginAtZero: true,
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

    donutChart() {
        this.donutChartData = [300, 50, 100, 40, 120

        ];
        this.donutChartLabels = ["SEO", "Coding", "Hosting", "Design", "Other"];
        this.donutChartOptions = {
            responsive: true,
            //donut options
            segmentShowStroke: true,
            segmentStrokeColor: "#fff",
            segmentStrokeWidth: 2,
            percentageInnerCutout: 45, // This is 0 for Pie charts
            //animations
            animation: {
                steps: 100,
                easing: "easeOutBounce",
                rotate: true,
                scale: true
            },
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

    polarArea() {
        this.polarAreaChartLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];
        this.polarAreaChartData = [300, 500, 100, 40, 120];
    }
}
