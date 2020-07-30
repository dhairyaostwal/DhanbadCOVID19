var ctx = document.getElementById('increasingCorona');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['March', 'April', 'May', 'June', 'July', 'August'],
        datasets: [{
            label: 'Confirmed',
            data: [0, 5, 10, 20, 30, 40],
            backgroundColor: [
                'rgba(255, 206, 86, 0.2)',
            ],
            borderColor: [
                'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1
        },
        {
            label: 'Recovered',
            data: [0, 2, 4, 8, 16, 32],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1
        },
        {
            label: 'Active',
            data: [0, 1, 3, 6, 12, 24],
            backgroundColor: [
                'rgba(75, 192, 192, 0.6)',
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
            ],
            borderWidth: 1
        },
        {
            label: 'Deceased',
            data: [0, 0.5, 1, 2, 4, 8],
            backgroundColor: [
                'rgba(255,0,0,1)',
            ],
            borderColor: [
                'rgba(255, 0, 0)',
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