var ctx = document.getElementById('age');
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['0-14 yrs', '15-40 yrs', '41-60 yrs', 'Above 60 yrs'],
        datasets: [{
            label: 'Gender Division',
            data: [1485, 17156, 8566, 1968],
            backgroundColor: [
                'rgb(88,45,145)',
                'rgb(3,101,177)',
                'rgb(246,133,30)',
                'rgb(238,26,35)'
            ],
            borderColor: [
                'rgb(88,45,145)',
                'rgb(3,101,177)',
                'rgb(246,133,30)',
                'rgb(238,26,35)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});