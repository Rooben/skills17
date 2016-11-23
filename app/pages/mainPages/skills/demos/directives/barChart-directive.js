'use strict';

/**
 * @ngdoc function
 * @name rolandApp.mainPages.skills:demos barChart directive
 * @description
 * # demos barChart directive
 * A directive of the rolandApp
 */
module.exports = function(){
  var Highcharts = require('highcharts');
  return {
    restrict: 'EA',
    replace: true,
    scope: {},
    template: '<div id="barChartContainer" style="margin: 0 auto">not working</div>',
    link: function () {
      var computers = [46.6, 14.8, 10, 61.6];
      var cell_phones = [26.6, 35.8, 62.6, 9.1];
      var tablets = [26.8, 49.4, 27.4, 29.3];

      var chart = new Highcharts.Chart({
        chart: {
          renderTo: 'barChartContainer',
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'column'
        },
        title: {
          text: 'Product Profit Margins in our branches in Canadian Cities'
        },
        xAxis: {
          categories: ['Ottawa', 'Toronto', 'Edmonton', 'Montreal']
        },
        yAxis: {
          min: 0,
          max: 100,
          title: {
            text: 'Percentage of Profits'
          }
        },
        legend: {
          reversed: true
        },
        plotOptions: {
          series: {
            stacking: 'normal'
          }
        },
        series: [{
          name: 'Computers',
          data: computers
        }, {
          name: 'Cell phones',
          data: cell_phones
        }, {
          name: 'Tablets',
          data: tablets
        }],
        credits: {
          enabled: false
        }

      });
    }
  };
};
