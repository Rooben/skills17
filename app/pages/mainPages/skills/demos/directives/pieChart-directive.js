'use strict';

/**
 * @ngdoc function
 * @name rolandApp.mainPages.skills:demos pieChart directive
 * @description
 * # demos pieChart directive
 * A directive of the rolandApp
 */
module.exports = function(){
  var Highcharts = require('highcharts');
  return {
    restrict: 'EA',
    replace: true,
    scope: {},
    template: '<div id="pieChartContainer" style="margin: 0 auto">not working</div>',
    link: function () {
      var data2 = [['Shiraz', 5], ['Sauvignon', 10], ['Pinot', 20],
        ['Malbec', 5], ['Chardonnay', 28], ['Cabernet', 23], ['Merlot', 9]];

      var chart = new Highcharts.Chart({
        chart: {
          renderTo: 'pieChartContainer',
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false
        },
        colors: ['#65Af43', '#FFE76D', '#BB43F2','#A50f33', '#15CACA', '#612BF3', '#FF8E04'],

        title: {
          text: 'Store Wine Sales Quota (Year 2013)'
        },
        subtitle: {
          text: 'By Obenit App Inc.'
        },
        yAxis: {
          min: 0,
          title: {
            text: 'Calories'
          }
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.y}%</b>'
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            size: '80%',
            cursor: 'pointer',
            showInLegend: true,
            slicedOffset: 20
          }
        },
        series: [{
          type: 'pie',
          name: 'Sales',
          data: data2,
          borderColor: '#888888',
          borderWidth: 1,
          dataLabels: {
            enabled: true,
            color: '#bbbbbb',
            connectorColor: '#bbbbbb',
            format: '{point.name}: <b>{point.y}%</div></b>'
          }
        }],
        credits: {
          enabled: false
        }

      });
    }
  };
};

