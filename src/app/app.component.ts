import * as Highcharts from 'highcharts';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { chartData } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-app-azure';
  chartData: any;
  options: any;
  selectedClass: any;
  isClassSelected = false;
  allClassOneChartData: any;
  allClassTwoChartData: any;
  selectedChartData: any;
  @ViewChild('PlotChart', { static: false }) PlotChartRef: ElementRef<SVGElement>;

  ngOnInit() {
    this.chartData = chartData;
  }

  getClassPlusChartData() {
    const classLablePlusOne = "1";
    this.selectedClass = classLablePlusOne;
    this.isClassSelected = true;
    
    const sensor0DataClassPlusOne = this.chartData.sensor_data.sensor0.slice(0, 200);
    const sensor1DataClassPlusOne = this.chartData.sensor_data.sensor1.slice(0, 200);
    const sensor2DataClassPlusOne = this.chartData.sensor_data.sensor2.slice(0, 200);
    const sensor3DataClassPlusOne = this.chartData.sensor_data.sensor3.slice(0, 200);
    const sensor4DataClassPlusOne = this.chartData.sensor_data.sensor4.slice(0, 200);
    const sensor5DataClassPlusOne = this.chartData.sensor_data.sensor5.slice(0, 200);
    const sensor6DataClassPlusOne = this.chartData.sensor_data.sensor6.slice(0, 200);
    const sensor7DataClassPlusOne = this.chartData.sensor_data.sensor7.slice(0, 200);
    const sensor8DataClassPlusOne = this.chartData.sensor_data.sensor8.slice(0, 200);
    const sensor9DataClassPlusOne = this.chartData.sensor_data.sensor9.slice(0, 200);
    this.selectedChartData = [
      {
        type: 'line',
        name: 'series 0',
        showInLegend: false,
        data: sensor0DataClassPlusOne
      },
      {
        type: 'line',
        name: 'series 1',
        showInLegend: false,
        data: sensor1DataClassPlusOne
      },
      {
        type: 'line',
        name: 'series 2',
        showInLegend: false,
        data: sensor2DataClassPlusOne
      },
      {
        type: 'line',
        name: 'series 3',
        showInLegend: false,
        data: sensor3DataClassPlusOne
      },
      {
        type: 'line',
        name: 'series 4',
        showInLegend: false,
        data: sensor4DataClassPlusOne
      },
      {
        type: 'line',
        name: 'series 5',
        showInLegend: false,
        data: sensor5DataClassPlusOne
      },
      {
        type: 'line',
        name: 'series 6',
        showInLegend: false,
        data: sensor6DataClassPlusOne
      },
      {
        type: 'line',
        name: 'series 7',
        showInLegend: false,
        data: sensor7DataClassPlusOne
      },
      {
        type: 'line',
        name: 'series 8',
        showInLegend: false,
        data: sensor8DataClassPlusOne
      },
      {
        type: 'line',
        name: 'series 9',
        showInLegend: false,
        data: sensor9DataClassPlusOne
      },

    ]
    this.drawChart(this.selectedChartData, classLablePlusOne);
  }

  drawChart(seriesData: any, classno:any) {
    this.options = {
      chart: {
        height: 700,
        backgroundColor: '#ffffe7',
      },
       
      legend: {
        visible: false
      },
 
      xAxis: {
        visible: false,
        type: 'datetime'
      },

      yAxis: {
        title: {
          text: `Samples - class${classno}`
        }
      },

      plotOptions: {
        series: {
            lineWidth: 0.2
        }
    },

      tooltip: {
        formatter: function () {
          return `Sample Value of <b>${this.series.name}</b> is <b>${this.y}</b>`
        }
      },

      series: seriesData
    }
    Highcharts.chart('PlotChart', this.options).redraw();
   
  }

  getClassMinusChartData() {
    const classLableMinusOne = " -1";
    this.selectedClass = classLableMinusOne;
    this.isClassSelected = true;
    const sensor0DataClassMinusOne = this.chartData.sensor_data.sensor0.slice(200, 400);
    const sensor1DataClassMinusOne = this.chartData.sensor_data.sensor1.slice(200, 400);
    const sensor2DataClassMinusOne = this.chartData.sensor_data.sensor2.slice(200, 400);
    const sensor3DataClassMinusOne = this.chartData.sensor_data.sensor3.slice(200, 400);
    const sensor4DataClassMinusOne = this.chartData.sensor_data.sensor4.slice(200, 400);
    const sensor5DataClassMinusOne = this.chartData.sensor_data.sensor5.slice(200, 400);
    const sensor6DataClassMinusOne = this.chartData.sensor_data.sensor6.slice(200, 400);
    const sensor7DataClassMinusOne = this.chartData.sensor_data.sensor7.slice(200, 400);
    const sensor8DataClassMinusOne = this.chartData.sensor_data.sensor8.slice(200, 400);
    const sensor9DataClassMinusOne = this.chartData.sensor_data.sensor9.slice(200, 400);
    this.selectedChartData = [
      {
        type: 'line',
        name: 'series 0',
        showInLegend: false,
        data: sensor0DataClassMinusOne
      },
      {
        type: 'line',
        name: 'series 1',
        showInLegend: false,
        data: sensor1DataClassMinusOne
      },
      {
        type: 'line',
        name: 'series 2',
        showInLegend: false,
        data: sensor2DataClassMinusOne
      },
      {
        type: 'line',
        name: 'series 3',
        showInLegend: false,
        data: sensor3DataClassMinusOne
      },
      {
        type: 'line',
        name: 'series 4',
        showInLegend: false,
        data: sensor4DataClassMinusOne
      },
      {
        type: 'line',
        name: 'series 5',
        showInLegend: false,
        data: sensor5DataClassMinusOne
      },
      {
        type: 'line',
        name: 'series 6',
        showInLegend: false,
        data: sensor6DataClassMinusOne
      },
      {
        type: 'line',
        name: 'series 7',
        showInLegend: false,
        data: sensor7DataClassMinusOne
      },
      {
        type: 'line',
        name: 'series 8',
        showInLegend: false,
        data: sensor8DataClassMinusOne
      },
      {
        type: 'line',
        name: 'series 9',
        showInLegend: false,
        data: sensor9DataClassMinusOne
      },

    ]

    this.drawChart(this.selectedChartData, classLableMinusOne);
  }

  plotSeriesChart(seriesData: any) {
    this.drawChart([seriesData], this.selectedClass);
  }
}
