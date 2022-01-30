import reportDetails from './reportDetails.js';
const details = JSON.parse(reportDetails);

const time = document.querySelectorAll('.card__small--time');
const previous = document.querySelectorAll('.small__card--previous');

const activeTimeframeDaily = document.getElementById('daily');
const activeTimeframeWeekly = document.getElementById('weekly');
const activeTimeframeMonthly = document.getElementById('monthly');

// Could not figure out how to use argument in template literal. Would like to pass timeframe as a argument to reuse the function
/* const loopThroughReportDetails = function(pastOrPresence, timeframe, current, lastWeek) {
    for (let i = 0;i <= details.length - 1;i++) {
        pastOrPresence[i].innerHTML = `${details[i].timeframes.timeframe.current}hrs`;
    } 
} */

for (let i = 0;i <= details.length - 1;i++) {
    time[i].innerHTML = `${details[i].timeframes.daily.current}hrs`;
}

for (let i = 0;i <= details.length - 1;i++) {
    previous[i].innerHTML += `Last week - ${details[i].timeframes.daily.previous}hrs`;
}

const clearTimeFrame = function() {
    for (let i = 0;i <= details.length - 1;i++) {
        time[i].innerHTML = '';
    }

    for (let i = 0;i <= details.length - 1;i++) {
        previous[i].innerHTML = '';
    }

};

const changeActiveTimeframe = function(timeframe, removeFirst, removeSecond) {
    timeframe.classList.add('user-card__timeframe--active');
    removeFirst.classList.remove('user-card__timeframe--active');
    removeSecond.classList.remove('user-card__timeframe--active');

    clearTimeFrame();
};

// activeTimeframeDaily.onclick = changeActiveTimeframe(activeTimeframeWeekly, '2');
// activeTimeframeWeekly.onclick = changeActiveTimeframe(activeTimeframeWeekly, '2');
// activeTimeframeMonthly.onclick = changeActiveTimeframe(activeTimeframeMonthly, '3');

activeTimeframeDaily.addEventListener('click', function() {
    changeActiveTimeframe(activeTimeframeDaily, activeTimeframeWeekly, activeTimeframeMonthly);

    for (let i = 0;i <= details.length - 1;i++) {
        time[i].innerHTML = `${details[i].timeframes.daily.current}hrs`;
    }

    for (let i = 0;i <= details.length - 1;i++) {
        previous[i].innerHTML += `Last week - ${details[i].timeframes.daily.previous}hrs`;
    }
});

activeTimeframeWeekly.addEventListener('click', function() {
    changeActiveTimeframe(activeTimeframeWeekly, activeTimeframeDaily, activeTimeframeMonthly);

    for (let i = 0;i <= details.length - 1;i++) {
        time[i].innerHTML += `${details[i].timeframes.weekly.current}hrs`;
    }


    for (let i = 0;i <= details.length - 1;i++) {
        previous[i].innerHTML += `Last week - ${details[i].timeframes.weekly.previous}hrs`;
    }
});

activeTimeframeMonthly.addEventListener('click', function() {
    changeActiveTimeframe(activeTimeframeMonthly, activeTimeframeDaily, activeTimeframeWeekly);

    for (let i = 0;i <= details.length - 1;i++) {
        time[i].innerHTML += `${details[i].timeframes.monthly.current}hrs`;
    }


    for (let i = 0;i <= details.length - 1;i++) {
        previous[i].innerHTML += `${details[i].timeframes.monthly.previous}hrs`;
    }
});