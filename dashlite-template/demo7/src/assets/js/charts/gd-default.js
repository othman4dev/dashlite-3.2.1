"use strict";

!function (NioApp, $) {
  "use strict";

  //////// for developer - User Balance //////// 
  // Avilable options to pass from outside 
  // labels: array,
  // legend: false - boolean,
  // dataUnit: string, (Used in tooltip or other section for display) 
  // datasets: [{label : string, color: string (color code with # or other format), data: array}]
  var salesRevenue = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    dataUnit: 'USD',
    stacked: true,
    datasets: [{
      label: "Sales Revenue",
      color: [NioApp.hexRGB("#0fac81", .2), NioApp.hexRGB("#0fac81", .2), NioApp.hexRGB("#0fac81", .2), NioApp.hexRGB("#0fac81", .2), NioApp.hexRGB("#0fac81", .2), NioApp.hexRGB("#0fac81", .2), NioApp.hexRGB("#0fac81", .2), NioApp.hexRGB("#0fac81", .2), NioApp.hexRGB("#0fac81", .2), NioApp.hexRGB("#0fac81", .2), NioApp.hexRGB("#0fac81", .2), "#0fac81"],
      data: [11000, 8000, 12500, 5500, 9500, 14299, 11000, 8000, 12500, 5500, 9500, 14299]
    }]
  };
  var activeSubscription = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    dataUnit: 'USD',
    stacked: true,
    datasets: [{
      label: "Active User",
      color: [NioApp.hexRGB("#0fac81", .2), NioApp.hexRGB("#0fac81", .2), NioApp.hexRGB("#0fac81", .2), NioApp.hexRGB("#0fac81", .2), NioApp.hexRGB("#0fac81", .2), "#0fac81"],
      data: [8200, 7800, 9500, 5500, 9200, 9690]
    }]
  };
  var totalSubscription = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    dataUnit: 'USD',
    stacked: true,
    datasets: [{
      label: "Active User",
      color: [NioApp.hexRGB("#008080", .2), NioApp.hexRGB("#008080", .2), NioApp.hexRGB("#008080", .2), NioApp.hexRGB("#008080", .2), NioApp.hexRGB("#008080", .2), "#008080"],
      data: [8200, 7800, 9500, 5500, 9200, 9690]
    }]
  };
  function salesBarChart(selector, set_data) {
    var $selector = selector ? $(selector) : $('.sales-bar-chart');
    $selector.each(function () {
      var $self = $(this),
        _self_id = $self.attr('id'),
        _get_data = typeof set_data === 'undefined' ? eval(_self_id) : set_data,
        _d_legend = typeof _get_data.legend === 'undefined' ? false : _get_data.legend;
      var selectCanvas = document.getElementById(_self_id).getContext("2d");
      var chart_data = [];
      for (var i = 0; i < _get_data.datasets.length; i++) {
        chart_data.push({
          label: _get_data.datasets[i].label,
          data: _get_data.datasets[i].data,
          // Styles
          backgroundColor: _get_data.datasets[i].color,
          borderWidth: 2,
          borderColor: 'transparent',
          hoverBorderColor: 'transparent',
          borderSkipped: 'bottom',
          barPercentage: .7,
          categoryPercentage: .7
        });
      }
      var chart = new Chart(selectCanvas, {
        type: 'bar',
        data: {
          labels: _get_data.labels,
          datasets: chart_data
        },
        options: {
          legend: {
            display: _get_data.legend ? _get_data.legend : false,
            rtl: NioApp.State.isRTL,
            labels: {
              boxWidth: 30,
              padding: 20,
              fontColor: '#6783b8'
            }
          },
          maintainAspectRatio: false,
          tooltips: {
            enabled: true,
            rtl: NioApp.State.isRTL,
            callbacks: {
              title: function title(tooltipItem, data) {
                return false;
              },
              label: function label(tooltipItem, data) {
                return data['labels'][tooltipItem['index']] + ' ' + data.datasets[tooltipItem.datasetIndex]['data'][tooltipItem['index']];
              }
            },
            backgroundColor: '#eff6ff',
            titleFontSize: 11,
            titleFontColor: '#6783b8',
            titleMarginBottom: 4,
            bodyFontColor: '#9eaecf',
            bodyFontSize: 10,
            bodySpacing: 3,
            yPadding: 8,
            xPadding: 8,
            footerMarginTop: 0,
            displayColors: false
          },
          scales: {
            yAxes: [{
              display: false,
              stacked: _get_data.stacked ? _get_data.stacked : false,
              ticks: {
                beginAtZero: true
              }
            }],
            xAxes: [{
              display: false,
              stacked: _get_data.stacked ? _get_data.stacked : false,
              ticks: {
                reverse: NioApp.State.isRTL
              }
            }]
          }
        }
      });
    });
  }
  // init chart
  NioApp.coms.docReady.push(function () {
    salesBarChart();
  });
  var salesOverview = {
    labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"],
    dataUnit: 'BTC',
    lineTension: 0.1,
    datasets: [{
      label: "Sales Overview",
      color: "#3fbd9a",
      background: NioApp.hexRGB('#3fbd9a', .3),
      data: [8200, 7800, 9500, 5500, 9200, 9690, 8200, 7800, 9500, 5500, 9200, 9690, 8200, 7800, 9500, 5500, 9200, 9690, 8200, 7800, 9500, 5500, 9200, 9690, 8200, 7800, 9500, 5500, 9200, 9690]
    }]
  };
  function lineSalesOverview(selector, set_data) {
    var $selector = selector ? $(selector) : $('.sales-overview-chart');
    $selector.each(function () {
      var $self = $(this),
        _self_id = $self.attr('id'),
        _get_data = typeof set_data === 'undefined' ? eval(_self_id) : set_data;
      var selectCanvas = document.getElementById(_self_id).getContext("2d");
      var chart_data = [];
      for (var i = 0; i < _get_data.datasets.length; i++) {
        chart_data.push({
          label: _get_data.datasets[i].label,
          tension: _get_data.lineTension,
          backgroundColor: _get_data.datasets[i].background,
          borderWidth: 2,
          borderColor: _get_data.datasets[i].color,
          pointBorderColor: "transparent",
          pointBackgroundColor: "transparent",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: _get_data.datasets[i].color,
          pointBorderWidth: 2,
          pointHoverRadius: 3,
          pointHoverBorderWidth: 2,
          pointRadius: 3,
          pointHitRadius: 3,
          data: _get_data.datasets[i].data
        });
      }
      var chart = new Chart(selectCanvas, {
        type: 'line',
        data: {
          labels: _get_data.labels,
          datasets: chart_data
        },
        options: {
          legend: {
            display: _get_data.legend ? _get_data.legend : false,
            rtl: NioApp.State.isRTL,
            labels: {
              boxWidth: 30,
              padding: 20,
              fontColor: '#6783b8'
            }
          },
          maintainAspectRatio: false,
          tooltips: {
            enabled: true,
            rtl: NioApp.State.isRTL,
            callbacks: {
              title: function title(tooltipItem, data) {
                return data['labels'][tooltipItem[0]['index']];
              },
              label: function label(tooltipItem, data) {
                return data.datasets[tooltipItem.datasetIndex]['data'][tooltipItem['index']] + ' ' + _get_data.dataUnit;
              }
            },
            backgroundColor: '#eff6ff',
            titleFontSize: 13,
            titleFontColor: '#6783b8',
            titleMarginBottom: 6,
            bodyFontColor: '#9eaecf',
            bodyFontSize: 12,
            bodySpacing: 4,
            yPadding: 10,
            xPadding: 10,
            footerMarginTop: 0,
            displayColors: false
          },
          scales: {
            yAxes: [{
              display: true,
              stacked: _get_data.stacked ? _get_data.stacked : false,
              position: NioApp.State.isRTL ? "right" : "left",
              ticks: {
                beginAtZero: true,
                fontSize: 11,
                fontColor: '#9eaecf',
                padding: 10,
                callback: function callback(value, index, values) {
                  return '$ ' + value;
                },
                min: 100,
                stepSize: 3000
              },
              gridLines: {
                color: NioApp.hexRGB("#526484", .2),
                tickMarkLength: 0,
                zeroLineColor: NioApp.hexRGB("#526484", .2)
              }
            }],
            xAxes: [{
              display: true,
              stacked: _get_data.stacked ? _get_data.stacked : false,
              ticks: {
                fontSize: 9,
                fontColor: '#9eaecf',
                source: 'auto',
                padding: 10,
                reverse: NioApp.State.isRTL
              },
              gridLines: {
                color: "transparent",
                tickMarkLength: 0,
                zeroLineColor: 'transparent'
              }
            }]
          }
        }
      });
    });
  }

  // init chart
  NioApp.coms.docReady.push(function () {
    lineSalesOverview();
  });
}(NioApp, jQuery);