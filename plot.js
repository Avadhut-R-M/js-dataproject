function team_wise_run(){
    fetch('json_files/team_wise_run.json')
    .then(response => response.json())
    .then(data => {
        const teams = Object.keys(data);
        const runs = Object.values(data);

        Highcharts.chart('graph_1', {
            chart: {
                type: 'column'
                },
            title: {
                text: 'Total runs scored by team',
                style:{
                    fontSize: '2.5em'
                }
                },
            subtitle: {
                text: 'Graph of total runs scored by each teams in IPL',
                style:{
                    fontSize: '1.2em'
                }
                },
            xAxis: {
                categories: teams,
                title:{
                    text: 'Team Name',
                    style:{
                        color: '#A18723',
                        fontSize: '1.2em'
                    }
                    }
                },
            yAxis: {
                labels:{
                    overflow: 'justify'
                },
                title: {
                    text: 'Total runs',
                    style:{
                        color: '#A18723',
                        fontSize: '1.2em'
                    }
                    },
                },
            legend:{
                enabled: false
            },
            series: [{
                name: '',
                data: runs
                }],
        });
    });
}

function top_batsman_of_rcb(){
    fetch('json_files/top_batsman_of_rcb.json')
    .then(response => response.json())
    .then(data => {
        const batsman = Object.keys(data);
        const runs = Object.values(data);

        Highcharts.chart('graph_2', {
            chart: {
                type: 'column'
                },
            title: {
                text: 'Top batsman for Royal Challengers Bangalore',
                style:{
                    fontSize: '2.5em'
                }
                },
            subtitle: {
                text: 'Top batsmans from RCB team of IPL',
                style:{
                    fontSize: '1.2em'
                }
                },
            xAxis: {
                categories: batsman,
                title:{
                    text: 'Batsman name',
                    style:{
                        color: '#A18723',
                        fontSize: '1.2em'
                    }
                    }
                },
            yAxis: {
                labels:{
                    overflow: 'justify'
                },
                title: {
                    text: 'Runs',
                    style:{
                        color: '#A18723',
                        fontSize: '1.2em'
                    }
                    }
                },
            legend:{
                enabled: false
            },        
            series: [{
                name: '',
                data: runs
                }],
        });
    });
}

function umpires_by_origin(){
    fetch('json_files/umpires_by_origin.json')
        .then(response => response.json())
        .then(data => {
            const country = Object.keys(data);
            const umpire = Object.values(data);

            Highcharts.chart('graph_3', {
                chart: {
                    type: 'column'
                    },
                title: {
                    text: 'Foreign umpire analysis',
                    style:{
                        fontSize: '2.5em'
                    }
                    },
                subtitle: {
                    text: 'chart of the total runs scored by each teams over the history of IPL.',
                    style:{
                        fontSize: '1.2em'
                    }
                    },
                xAxis: {
                    categories: country,
                    title:{
                        text: 'Country name',
                        style:{
                            color: '#A18723',
                            fontSize: '1.2em'
                        }
                        }
                    },
                yAxis: {
                    labels:{
                        overflow: 'justify'
                    },
                    title: {
                        text: 'No. of Umpires',
                        style:{
                            color: '#A18723',
                            fontSize: '1.2em'
                        }
                        }
                    },
                legend:{
                    enabled: false
                },
                series: [{
                    name: '',
                    data: umpire
                    }],
            });
        });
}

function matches_played_by_team_by_season(){
    fetch('json_files/matches_played_by_team_by_season.json')
        .then(response => response.json())
        .then(data => {
            let teams = data.teams
            let team_score = data.matches
            console.log(teams,team_score);
            Highcharts.chart('graph_4', {
                chart: {
                    type: 'bar'
                },
                title: {
                    text: 'Matches played by team by season',
                    style:{
                        fontSize: '2.5em'
                    }
                },
                subtitle: {
                    text: 'Season wise matches played by each teams in IPL',
                    style:{
                        fontSize: '1.2em'
                    }
                },
                xAxis: {
                    categories: teams,
                    title:{
                        text: 'IPL Teams',
                        style:{
                            color: '#A18723',
                            fontSize: '1.2em',
                        }
                    }
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Matches Played by Team per season',
                        style:{
                            color: '#A18723',
                            fontSize: '1.2em'
                        }
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
                series: team_score
            });
        });
}
umpires_by_origin();
team_wise_run();
top_batsman_of_rcb();
matches_played_by_team_by_season();
