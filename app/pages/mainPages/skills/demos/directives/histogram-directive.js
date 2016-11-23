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
    template: '<div id="histogramContainer" style="margin: 0 auto">not working</div>',
    link: function () {
      var computers = [46.6, 14.8, 10, 61.6];
      var cell_phones = [26.6, 35.8, 62.6, 9.1];
      var tablets = [26.8, 49.4, 27.4, 29.3];

      var chart = new Highcharts.Chart({
        chart: {
          renderTo: 'histogramContainer',
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
        tooltip: {
          shared: false,
          valueSuffix: '%'
        },
        plotOptions: {
          column: {
            grouping: true,
            shadow: true
          }
        },
        series: [{
          name: 'Computers',
          data: computers,
          pointPadding: 0
        },{
          name: 'Cell phones',
          data: cell_phones,
          pointPadding: 0.1
        },{
          name: 'Tablets',
          data: tablets,
          pointPadding: 0.2
        }],
        credits: {
          enabled: false
        }

      });
    }
  };
};

