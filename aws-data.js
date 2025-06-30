var myContext = document.getElementById("fitness-survey").getContext('2d'); 

var beforeFitnessData = [
    {
        label: 'Strongly Disagree',
        backgroundColor: "#A379B9",
        data: [7, 6, 7, 0, 4, 13],
    },
    {
        label: 'Disagree',
        backgroundColor: "#C693CB",
        data: [5, 7, 7, 13, 8, 6],
    },
    {
        label: 'Neutral',
        backgroundColor: "#EBCDE7",
        data: [7, 5, 5, 11, 2, 0],
    },
    {
        label: 'Agree',
        backgroundColor: "#EFA7BD",
        data: [7, 9, 5, 11, 12, 5],
    },
    {
        label: 'Strongly Agree',
        backgroundColor: "#DC7092",
        data: [10, 9, 12, 1, 10, 12],
    },
];

var afterFitnessData = [
    {
        label: 'Strongly Disagree',
        backgroundColor: "#A379B9",
        data: [1, 1, 0, 0, 1, 1],
    },
    {
        label: 'Disagree',
        backgroundColor: "#C693CB",
        data: [3, 1, 5, 14, 1, 6],
    },
    {
        label: 'Neutral',
        backgroundColor: "#EBCDE7",
        data: [5, 6, 3, 13, 2, 4],
    },
    {
        label: 'Agree',
        backgroundColor: "#EFA7BD",
        data: [2, 3, 3, 3, 10, 5],
    },
    {
        label: 'Strongly Agree',
        backgroundColor: "#DC7092",
        data: [20, 20, 20, 1, 17, 15],
    },
];

var currentFitnessData = beforeFitnessData;

var fitness = new Chart(myContext, { 
    type: 'horizontalBar', 
    data: { 
        labels: ["I choose healthy food over fast food", "I have a positive body image", 
        "I know how to cook with fresh ingredients", "I exercise regularly outside of PE class", "I am happy with my appearance",
        "I can budget for healthy groceries"], 
        datasets: currentFitnessData, 
    }, 
    options: { 
        plugins: { 
            title: { 
                display: true,  
            }, 
            legend:{
                labels:{
                    font: {size: 20}
                }
            }
        }, 
        scales: { 
            xAxes: [{
                stacked: true,
                ticks: {
                    fontSize: 15,
                    fontColor: 'black'}
              }],
              yAxes: [{
                stacked: true,
                ticks: {fontSize: 17,
                        fontColor: 'black', 
                        fontFamily: 'Arial'}
              }],
        }
    } 
}); 



document.getElementById('fitnessSwitch').addEventListener('change', function() {
    var isAfter = this.checked;
    
    // Update the chart based on the switch state
    if (isAfter) {
        fitness.data.datasets = afterFitnessData;

    } else {
        fitness.data.datasets = beforeFitnessData;
    }
    fitness.update()
    
    }
    


);

// start here
var myContext = document.getElementById("mental-survey").getContext('2d'); 

var beforeMentalData = [
    {
        label: 'Strongly Disagree',
        backgroundColor: "#151A1D",
        data: [7, 6, 7, 0, 4, 13],
    },
    {
        label: 'Disagree',
        backgroundColor: "#392A3D",
        data: [5, 7, 7, 13, 8, 6],
    },
    {
        label: 'Neutral',
        backgroundColor: "#63375B",
        data: [7, 5, 5, 11, 2, 0],
    },
    {
        label: 'Agree', 
        backgroundColor: "#A66384",
        data: [7, 9, 5, 11, 12, 5],
    },
    {
        label: 'Strongly Agree',
        backgroundColor: "#CA8AA5",
        data: [10, 9, 12, 1, 10, 12],
    },
];

var afterMentalData = [
    {
        label: 'Strongly Disagree',
        backgroundColor: "#151A1D",
        data: [1, 4, 2, 0, 1],
    },
    {
        label: 'Disagree',
        backgroundColor: "#392A3D",
        data: [2, 5, 3, 8, 3],
    },
    {
        label: 'Neutral',
        backgroundColor: "#63375B",
        data: [5, 8, 5, 5, 7],
    },
    {
        label: 'Agree',
        backgroundColor: "#A66384",
        data: [9, 8, 9, 10, 13],
    },
    {
        label: 'Strongly Agree',
        backgroundColor: "#CA8AA5",
        data: [19, 11, 17, 13, 12],
    },
];

var currentMentalData = beforeMentalData;

var mental = new Chart(myContext, { 
    type: 'horizontalBar', 
    data: { 
        labels: ["I plan ahead", "I feel good about myself", 
        "I approach challenges positively", "I feel valued and appreciated by others", 
        "I have control over my life and future"], 
        datasets: currentMentalData, 
    }, 
    options: { 
        plugins: { 
            title: { 
                display: true, 
            }, 
        }, 
        scales: { 
            xAxes: [{
                stacked: true,
                ticks: {fontSize: 17,
                    fontColor: 'black', 
                    fontFamily: 'Arial'}
               
              }],
              yAxes: [{
                stacked: true,
                ticks: {fontSize: 17,
                    fontColor: 'black', 
                    fontFamily: 'Arial'}
              }],
        } 
    } 
}); 



document.getElementById('mentalSwitch').addEventListener('change', function() {
    var isAfter = this.checked;
    
    // Update the chart based on the switch state
    if (isAfter) {
        mental.data.datasets = afterMentalData;

    } else {
        mental.data.datasets = beforeMentalData;
    }
    mental.update()
    
    }
    


);

// start here
var myContext = document.getElementById("career-survey").getContext('2d'); 

var beforeCareerData = [
    {
        label: 'Strongly Disagree',
        backgroundColor: "#151A1D",
        data: [3, 1, 2, 5],
    },
    {
        label: 'Disagree',
        backgroundColor: "#392A3D",
        data: [2, 0, 4, 3],
    },
    {
        label: 'Neutral',
        backgroundColor: "#63375B",
        data: [8, 0, 2, 3],
    },
    {
        label: 'Agree',
        backgroundColor: "#A66384",
        data: [6, 6, 7, 7],
    },
    {
        label: 'Strongly Agree',
        backgroundColor: "#CA8AA5",
        data: [17, 29, 21, 18],
    },
];

var afterCareerData = [
    {
        label: 'Strongly Disagree',
        backgroundColor: "#151A1D",
        data: [2, 0, 0, 1],
    },
    {
        label: 'Disagree',
        backgroundColor: "#392A3D",
        data: [2, 0, 1, 1],
    },
    {
        label: 'Neutral',
        backgroundColor: "#63375B",
        data: [1, 1, 2, 4],
    },
    {
        label: 'Agree',
        backgroundColor: "#A66384",
        data: [4, 0, 6, 4],
    },
    {
        label: 'Strongly Agree',
        backgroundColor: "#CA8AA5",
        data: [22, 30, 22, 21],
    },
];

var currentCareerData = beforeCareerData;

var career = new Chart(myContext, { 
    type: 'horizontalBar', 
    data: { 
        labels: ["I feel positive about school", "I am confident about graduating high school", 
    "I have educational goals for the next 5 years", "I have career goals for the next 5-10 years"], 
        datasets: currentCareerData, 
    }, 
    options: { 
        plugins: { 
            title: { 
                display: true, 
            }, 
        
        }, 
       
        scales: { 
            xAxes: [{
                stacked: true,
                ticks: {fontSize: 17,
                    fontColor: 'black', 
                    fontFamily: 'Arial'}
              }],
              yAxes: [{
                stacked: true,
                ticks: {fontSize: 17,
                    fontColor: 'black', 
                    fontFamily: 'Arial'}
              }],
        } 
    } 
}); 



document.getElementById('careerSwitch').addEventListener('change', function() {
    var isAfter = this.checked;
    
    // Update the chart based on the switch state
    if (isAfter) {
        career.data.datasets = afterCareerData;

    } else {
        career.data.datasets = beforeCareerData;
    }
    career.update()
    
    }
    


);

// Personal Safety Graph
var myContext = document.getElementById("safety-survey").getContext('2d'); 

var beforeSafetyData = [
    {
        label: 'Strongly Disagree',
        backgroundColor: "#A379B9",
        data: [2, 0, 2, 2],
    },
    {
        label: 'Disagree',
        backgroundColor: "#C693CB",
        data: [2, 2, 2, 1],
    },
    {
        label: 'Neutral',
        backgroundColor: "#EBCDE7",
        data: [10, 3, 5, 2],
    },
    {
        label: 'Agree',
        backgroundColor: "#EFA7BD",
        data: [7, 9, 8, 7],
    },
    {
        label: 'Strongly Agree',
        backgroundColor: "#DC7092",
        data: [15, 22, 19, 24],
    },
];

var afterSafetyData = [
    {
        label: 'Strongly Disagree',
        backgroundColor: "#A379B9",
        data: [1, 0, 0, 0],
    },
    {
        label: 'Disagree',
        backgroundColor: "#C693CB",
        data: [0, 2, 0, 0],
    },
    {
        label: 'Neutral',
        backgroundColor: "#EBCDE7",
        data: [6, 6, 3, 2],
    },
    {
        label: 'Agree',
        backgroundColor: "#EFA7BD",
        data: [5, 4, 1, 0],
    },
    {
        label: 'Strongly Agree',
        backgroundColor: "#DC7092",
        data: [19, 19, 27, 29],
    },
];

var currentSafetyData = beforeSafetyData;

var safety = new Chart(myContext, { 
    type: 'horizontalBar', 
    data: { 
        labels: ["I can defend myself in a harmful situation", "I know how to get help for violence/abuse/sexual assault", 
    "I feel confident in my knowledge of STDs", "I feel confident in my knowledge of pregnancy prevention"], 
        datasets: currentSafetyData, 
    }, 
    options: { 
        plugins: { 
            title: { 
                display: true, 
            }, 
        }, 
        scales: { 
            xAxes: [{
                stacked: true,
                ticks: {fontSize: 17,
                    fontColor: 'black', 
                    fontFamily: 'Arial'}
              }],
              yAxes: [{
                stacked: true,
                ticks: {fontSize: 13,
                    fontColor: 'black', 
                    fontFamily: 'Arial'}
              }],
        } 
    } 
}); 



document.getElementById('safetySwitch').addEventListener('change', function() {
    var isAfter = this.checked;
    
    // Update the chart based on the switch state
    if (isAfter) {
        safety.data.datasets = afterSafetyData;

    } else {
        safety.data.datasets = beforeSafetyData;
    }
    safety.update()
    
    }
    


);

