!(function (NioApp, $) {
    "use strict";

    var TrafficChannelDoughnutData = {
        labels : ["Organic Search", "Social Media", "Referrals", "Others"],
        dataUnit : 'People',
        legend: false,
        datasets : [{
            borderColor : "#fff",
            background : ["#798bff","#b8acff","#ffa9ce","#f9db7b"],
            data: [4305, 859, 482, 138]
        }]
    };

    function analyticsDoughnut(selector, set_data){
        var $selector = (selector) ? $(selector) : $('.analytics-doughnut');
        $selector.each(function(){
            var $self = $(this), _self_id = $self.attr('id'), _get_data = (typeof set_data === 'undefined') ? eval(_self_id) : set_data;
            var selectCanvas = document.getElementById(_self_id).getContext("2d");

            var chart_data = [];
            for (var i = 0; i < _get_data.datasets.length; i++) {
                chart_data.push({
                    backgroundColor: _get_data.datasets[i].background,
                    borderWidth:2,
                    borderColor: _get_data.datasets[i].borderColor,
                    hoverBorderColor: _get_data.datasets[i].borderColor,
                    data: _get_data.datasets[i].data,
                });
            } 
            var chart = new Chart(selectCanvas, {
                type: 'doughnut',
                data: {
                    labels: _get_data.labels,
                    datasets: chart_data,
                },
                options: {
                    legend: {
                        display: (_get_data.legend) ? _get_data.legend : false,
                        rtl: NioApp.State.isRTL,
                        labels: {
                            boxWidth:12,
                            padding:20,
                            fontColor: '#6783b8',
                        }
                    },
                    rotation: -1.5,
                    cutoutPercentage:70,
                    maintainAspectRatio: false,
                    tooltips: {
                        enabled: true,
                        rtl: NioApp.State.isRTL,
                        callbacks: {
                            title: function(tooltipItem, data) {
                                return data['labels'][tooltipItem[0]['index']];
                            },
                            label: function(tooltipItem, data) {
                                return data.datasets[tooltipItem.datasetIndex]['data'][tooltipItem['index']] + ' ' + _get_data.dataUnit;
                            }
                        },
                        backgroundColor: '#fff',
                        borderColor:'#eff6ff',
                        borderWidth:2,
                        titleFontSize: 13,
                        titleFontColor: '#6783b8',
                        titleMarginBottom: 6,
                        bodyFontColor: '#9eaecf',
                        bodyFontSize: 12,
                        bodySpacing:4,
                        yPadding: 10,
                        xPadding: 10,
                        footerMarginTop: 0,
                        displayColors: false
                    },
                }
            });
        })
    }
    // init chart
    NioApp.coms.docReady.push(function(){ analyticsDoughnut(); });  

    var OrganicSearchData = {
        labels : ["01 Jan", "02 Jan", "03 Jan", "04 Jan", "05 Jan", "06 Jan", "07 Jan", "08 Jan", "09 Jan", "10 Jan", "11 Jan", "12 Jan"],
        dataUnit : 'People',
        lineTension : .1,
        datasets : [{
            label : "Organic Search",
            color : "#798bff",
            background : NioApp.hexRGB('#798bff',.25),
            data: [110, 80, 125, 65, 95, 75, 90, 110, 80, 125, 70, 95]
        }]
    };

    var SocialMediaData = {
        labels : ["01 Jan", "02 Jan", "03 Jan", "04 Jan", "05 Jan", "06 Jan", "07 Jan", "08 Jan", "09 Jan", "10 Jan", "11 Jan", "12 Jan"],
        dataUnit : 'People',
        lineTension : .1,
        datasets : [{
            label : "Social Media",
            color : "#b8acff",
            background : NioApp.hexRGB('#b8acff',.25),
            data: [110, 80, 125, 65, 95, 75, 90, 110, 80, 125, 70, 95]
        }]
    };

    var ReferralsData = {
        labels : ["01 Jan", "02 Jan", "03 Jan", "04 Jan", "05 Jan", "06 Jan", "07 Jan", "08 Jan", "09 Jan", "10 Jan", "11 Jan", "12 Jan"],
        dataUnit : 'People',
        lineTension : .1,
        datasets : [{
            label : "Referrals",
            color : "#ffa9ce",
            background : NioApp.hexRGB('#ffa9ce',.25),
            data: [110, 80, 125, 65, 95, 75, 90, 110, 80, 125, 70, 95]
        }]
    };

    var OthersData = {
        labels : ["01 Jan", "02 Jan", "03 Jan", "04 Jan", "05 Jan", "06 Jan", "07 Jan", "08 Jan", "09 Jan", "10 Jan", "11 Jan", "12 Jan"],
        dataUnit : 'People',
        lineTension : .1,
        datasets : [{
            label : "Others",
            color : "#f9db7b",
            background : NioApp.hexRGB('#f9db7b',.25),
            data: [110, 80, 125, 65, 95, 75, 90, 110, 80, 125, 70, 95]
        }]
    };

    var BounceRateData = {
        labels : ["01 Jan", "02 Jan", "03 Jan", "04 Jan", "05 Jan", "06 Jan", "07 Jan", "08 Jan", "09 Jan", "10 Jan", "11 Jan", "12 Jan"],
        dataUnit : 'People',
        lineTension : .1,
        datasets : [{
            label : "Bounce Rate",
            color : "#798bff",
            background : NioApp.hexRGB('#798bff',.25),
            data: [110, 80, 125, 65, 95, 75, 90, 110, 80, 125, 70, 95]
        }]
    };

    var PageviewsData = {
        labels : ["01 Jan", "02 Jan", "03 Jan", "04 Jan", "05 Jan", "06 Jan", "07 Jan", "08 Jan", "09 Jan", "10 Jan", "11 Jan", "12 Jan"],
        dataUnit : 'People',
        lineTension : .1,
        datasets : [{
            label : "Pageviews",
            color : "#9a89ff",
            background : NioApp.hexRGB('#9a89ff',.25),
            data: [110, 80, 125, 65, 95, 75, 90, 110, 80, 125, 70, 95]
        }]
    };

    var NewUsersData = {
        labels : ["01 Jan", "02 Jan", "03 Jan", "04 Jan", "05 Jan", "06 Jan", "07 Jan", "08 Jan", "09 Jan", "10 Jan", "11 Jan", "12 Jan"],
        dataUnit : 'People',
        lineTension : .1,
        datasets : [{
            label : "New Users",
            color : "#798bff",
            background : NioApp.hexRGB('#798bff',.25),
            data: [110, 80, 125, 65, 95, 75, 90, 110, 80, 125, 70, 95]
        }]
    };

    var TimeOnSiteData = {
        labels : ["01 Jan", "02 Jan", "03 Jan", "04 Jan", "05 Jan", "06 Jan", "07 Jan", "08 Jan", "09 Jan", "10 Jan", "11 Jan", "12 Jan"],
        dataUnit : 'Hours',
        lineTension : .1,
        datasets : [{
            label : "Time on Site",
            color : "#9a89ff",
            background : NioApp.hexRGB('#9a89ff',.25),
            data: [110, 80, 125, 65, 95, 75, 90, 110, 80, 125, 70, 95]
        }]
    };

    function analyticsLineSmall(selector, set_data){
        var $selector = (selector) ? $(selector) : $('.analytics-line-small');
        $selector.each(function(){
            var $self = $(this), _self_id = $self.attr('id'), _get_data = (typeof set_data === 'undefined') ? eval(_self_id) : set_data;
            var selectCanvas = document.getElementById(_self_id).getContext("2d");

            var chart_data = [];
            for (var i = 0; i < _get_data.datasets.length; i++) {
                chart_data.push({
                    label: _get_data.datasets[i].label,
                    tension:_get_data.lineTension,
                    backgroundColor: _get_data.datasets[i].background,
                    borderWidth:2,
                    borderColor: _get_data.datasets[i].color,
                    pointBorderColor: 'transparent',
                    pointBackgroundColor: 'transparent',
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: _get_data.datasets[i].color,
                    pointBorderWidth: 2,
                    pointHoverRadius: 4,
                    pointHoverBorderWidth: 2,
                    pointRadius: 4,
                    pointHitRadius: 4,
                    data: _get_data.datasets[i].data,
                });
            } 
            var chart = new Chart(selectCanvas, {
                type: 'line',
                data: {
                    labels: _get_data.labels,
                    datasets: chart_data,
                },
                options: {
                    legend: {
                        display: (_get_data.legend) ? _get_data.legend : false,
                        rtl: NioApp.State.isRTL,
                        labels: {
                            boxWidth:12,
                            padding:20,
                            fontColor: '#6783b8',
                        }
                    },
                    maintainAspectRatio: false,
                    tooltips: {
                        enabled: true,
                        rtl: NioApp.State.isRTL,
                        callbacks: {
                            title: function(tooltipItem, data) {
                                return false; //data['labels'][tooltipItem[0]['index']];
                            },
                            label: function(tooltipItem, data) {
                                return data.datasets[tooltipItem.datasetIndex]['data'][tooltipItem['index']];
                            }
                        },
                        backgroundColor: '#eff6ff',
                        titleFontSize: 9,
                        titleFontColor: '#6783b8',
                        titleMarginBottom: 6,
                        bodyFontColor: '#9eaecf',
                        bodyFontSize: 9,
                        bodySpacing:4,
                        yPadding: 6,
                        xPadding: 6,
                        footerMarginTop: 0,
                        displayColors: false
                    },
                    scales: {
                        yAxes: [{
                            display: false,
                            ticks: {
                                beginAtZero: false,
                                fontSize:12,
                                fontColor:'#9eaecf',
                                padding: 0
                            },
                            gridLines: { 
                                color: NioApp.hexRGB("#526484",.2),
                                tickMarkLength:0,
                                zeroLineColor: NioApp.hexRGB("#526484",.2)
                            },
                        }],
                        xAxes: [{
                            display: false,
                            ticks: {
                                fontSize:12,
                                fontColor:'#9eaecf',
                                source: 'auto',
                                padding: 0,
                                reverse: NioApp.State.isRTL
                            },
                            gridLines: {
                                color: "transparent",
                                tickMarkLength:0,
                                zeroLineColor: NioApp.hexRGB("#526484",.2),
                                offsetGridLines: true,
                            }
                        }]
                    }
                }
            });
        })
    }
    // init chart
    NioApp.coms.docReady.push(function(){ analyticsLineSmall(); });  


    var analyticOvData = {
        labels : ["01 Jan", "02 Jan", "03 Jan", "04 Jan", "05 Jan", "06 Jan", "07 Jan", "08 Jan", "09 Jan", "10 Jan", "11 Jan", "12 Jan","13 Jan", "14 Jan", "15 Jan", "16 Jan", "17 Jan", "18 Jan", "19 Jan", "20 Jan", "21 Jan", "22 Jan", "23 Jan", "24 Jan", "25 Jan", "26 Jan", "27 Jan", "28 Jan", "29 Jan", "30 Jan"],
        dataUnit : 'People',
        lineTension : .1,
        datasets : [{
            label : "Current Month",
            color : "#c4cefe",
            dash : [5],
            background : "transparent",
            data: [3910, 4420, 4110, 5180, 4400, 5170, 6460, 8830, 5290, 5430, 4690, 4350, 4600, 5200, 5650, 6850, 6950, 4150, 4300, 6000, 6800, 2250, 6900, 7950,6900, 4200, 6250, 7650, 8950, 9750]
        },{
            label : "Current Month",
            color : "#798bff",
            dash : 0,
            background : NioApp.hexRGB('#798bff',.15),
            data: [4110, 4220, 4810, 5480, 4600, 5670, 6660, 4830, 5590, 5730, 4790, 4950, 5100, 5800, 5950, 5850, 5950, 4450, 4900, 8000, 7200, 7250, 7900, 8950,6300, 7200, 7250, 7650, 6950, 4750]
        }]
    };

    function analyticsLineLarge(selector, set_data){
        var $selector = (selector) ? $(selector) : $('.analytics-line-large');
        $selector.each(function(){
            var $self = $(this), _self_id = $self.attr('id'), _get_data = (typeof set_data === 'undefined') ? eval(_self_id) : set_data;
            var selectCanvas = document.getElementById(_self_id).getContext("2d");

            var chart_data = [];
            for (var i = 0; i < _get_data.datasets.length; i++) {
                chart_data.push({
                    label: _get_data.datasets[i].label,
                    tension:_get_data.lineTension,
                    backgroundColor: _get_data.datasets[i].background,
                    borderWidth:2,
                    borderDash:_get_data.datasets[i].dash,
                    borderColor: _get_data.datasets[i].color,
                    pointBorderColor: 'transparent',
                    pointBackgroundColor: 'transparent',
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: _get_data.datasets[i].color,
                    pointBorderWidth: 2,
                    pointHoverRadius: 4,
                    pointHoverBorderWidth: 2,
                    pointRadius: 4,
                    pointHitRadius: 4,
                    data: _get_data.datasets[i].data,
                });
            } 
            var chart = new Chart(selectCanvas, {
                type: 'line',
                data: {
                    labels: _get_data.labels,
                    datasets: chart_data,
                },
                options: {
                    legend: {
                        display: (_get_data.legend) ? _get_data.legend : false,
                        rtl: NioApp.State.isRTL,
                        labels: {
                            boxWidth:12,
                            padding:20,
                            fontColor: '#6783b8',
                        }
                    },
                    maintainAspectRatio: false,
                    tooltips: {
                        enabled: true,
                        rtl: NioApp.State.isRTL,
                        callbacks: {
                            title: function(tooltipItem, data) {
                                return data['labels'][tooltipItem[0]['index']];
                            },
                            label: function(tooltipItem, data) {
                                return data.datasets[tooltipItem.datasetIndex]['data'][tooltipItem['index']];
                            }
                        },
                        backgroundColor: '#fff',
                        borderColor:'#eff6ff',
                        borderWidth:2,
                        titleFontSize: 13,
                        titleFontColor: '#6783b8',
                        titleMarginBottom: 6,
                        bodyFontColor: '#9eaecf',
                        bodyFontSize: 12,
                        bodySpacing:4,
                        yPadding: 10,
                        xPadding: 10,
                        footerMarginTop: 0,
                        displayColors: false
                    },
                    scales: {
                        yAxes: [{
                            display: true,
                            position : NioApp.State.isRTL ? "right" : "left",
                            ticks: {
                                beginAtZero: true,
                                fontSize:12,
                                fontColor:'#9eaecf',
                                padding: 8,
                                stepSize:2400
                            },
                            gridLines: { 
                                color: NioApp.hexRGB("#526484",.2),
                                tickMarkLength:0,
                                zeroLineColor: NioApp.hexRGB("#526484",.2),
                            },
                        }],
                        xAxes: [{
                            display: false,
                            ticks: {
                                fontSize:12,
                                fontColor:'#9eaecf',
                                source: 'auto',
                                padding: 0,
                                reverse: NioApp.State.isRTL
                            },
                            gridLines: {
                                color: "transparent",
                                tickMarkLength:0,
                                zeroLineColor: 'transparent',
                                offsetGridLines: true,
                            }
                        }]
                    }
                }
            });
        })
    }
    // init chart
    NioApp.coms.docReady.push(function(){ analyticsLineLarge(); });


})(NioApp, jQuery);