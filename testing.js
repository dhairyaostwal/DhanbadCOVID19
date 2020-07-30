var ctx = document.getElementById('testing');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['March', 'April', 'May', 'June', 'July', 'August'],
        datasets: [{
            label: 'Testing per Month',
            data: [0, 2, 3, 5, 6, 7],
            backgroundColor: [
                'rgba(255, 206, 86, 0.9)',
            ],
            borderColor: [
                'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1
        },
    ]
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