var ctx = document.getElementById('gender');
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Male', 'Female'],
        datasets: [{
            label: 'Age Division',
            data: [70,30],
            backgroundColor: [
                'rgb(23,174,226)',
                'rgb(210,47,143)'
            ],
            borderColor: [
                'rgb(23,174,226)',
                'rgb(210,47,143)'
                
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