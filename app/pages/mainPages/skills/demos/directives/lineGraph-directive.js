'use strict';

/**
 * @ngdoc function
 * @name rolandApp.mainPages.skills:demos lineGraph directive
 * @description
 * # demos lineGraph directive
 * A directive of the rolandApp
 */
module.exports = function(){
  var Highcharts = require('highcharts');
  return {
    restrict: 'EA',
    replace: true,
    scope: {
      //item: '='
    },
    template: '<div id="lineGraphContainer" style="margin: 0 auto">not working</div>',
    link: function (scope) {
      var Polio = [1, 2, 3, 2, 3, 4];
      var Diabetes = [3, 4, 5, 6, 5, 7];
      var Measles = [5, 6, 8, 9, 7, 9];
      var Cholera = [7, 8, 9, 11, 10, 11];

      var chart = new Highcharts.Chart({
        chart: {
          renderTo: 'lineGraphContainer',
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'line'
        },
        title: {
          text: 'Graph of Diseases Handled'
        },
        subtitle: {
          text: 'By Obenit App Inc.'
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage}%</b>',
          percentageDecimals: 1
        },

        xAxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          title: {
            enabled: true,
            text: '<i>Diseases out break</i>',
            style: {
              fontWeight: 'bold'
            }
          }
        },
        series: [{
          name: 'Polio',
          data: Polio
        },{
          name: 'Diabetes',
          data: Diabetes
        },{
          name: 'Measles',
          data: Measles
        },{
          name: 'Cholera',
          data: Cholera
        }
        ],
        credits: {
          enabled: false
        }

      });

      //scope.$watch("items", function (newValue) {
      //  chart.series[0].setData(newValue, true);
      //}, true);
    }
  };
};