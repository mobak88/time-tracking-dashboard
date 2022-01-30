import reportDetails from './reportDetails.js';
const details = JSON.parse(reportDetails);

const currentData = document.querySelectorAll('.card__small--time');
const previousData = document.querySelectorAll('.small__card--previous');

const activeTimeframeDaily = document.getElementById('daily');
const activeTimeframeWeekly = document.getElementById('weekly');
const activeTimeframeMonthly = document.getElementById('monthly');

const loopThroughReportDetails = function(timeframe) {
    for (let i = 0;i <= details.length - 1;i++) {
        timeframe[i].innerHTML = `${details[i].timeframes.daily.current}hrs`;
    }
};

loopThroughReportDetails(currentData);
loopThroughReportDetails(previousData);

const clearTimeFrame = function() {
    for (let i = 0;i <= details.length - 1;i++) {
        currentData[i].innerHTML = '';
    }

    for (let i = 0;i <= details.length - 1;i++) {
        previousData[i].innerHTML = '';
    }

};

const changeActiveTimeframe = function(timeframe, removeFirst, removeSecond) {
    timeframe.classList.add('user-card__timeframe--active');
    removeFirst.classList.remove('user-card__timeframe--active');
    removeSecond.classList.remove('user-card__timeframe--active');

    clearTimeFrame();
};

// activeTimeframeDaily.onclick = changeActiveTimeframe(activeTimeframeDaily);
// activeTimeframeWeekly.onclick = changeActiveTimeframe(activeTimeframeWeekly);
// activeTimeframeMonthly.onclick = changeActiveTimeframe(activeTimeframeMonthly);

activeTimeframeDaily.addEventListener('click', function() {
    changeActiveTimeframe(activeTimeframeDaily, activeTimeframeWeekly, activeTimeframeMonthly);

    for (let i = 0;i <= details.length - 1;i++) {
        currentData[i].innerHTML = `${details[i].timeframes.daily.current}hrs`;
    }

    for (let i = 0;i <= details.length - 1;i++) {
        previousData[i].innerHTML += `Last week - ${details[i].timeframes.daily.previous}hrs`;
    }
});

activeTimeframeWeekly.addEventListener('click', function() {
    changeActiveTimeframe(activeTimeframeWeekly, activeTimeframeDaily, activeTimeframeMonthly);

    for (let i = 0;i <= details.length - 1;i++) {
        currentData[i].innerHTML += `${details[i].timeframes.weekly.current}hrs`;
    }


    for (let i = 0;i <= details.length - 1;i++) {
        previousData[i].innerHTML += `Last week - ${details[i].timeframes.weekly.previous}hrs`;
    }
});

activeTimeframeMonthly.addEventListener('click', function() {
    changeActiveTimeframe(activeTimeframeMonthly, activeTimeframeDaily, activeTimeframeWeekly);

    for (let i = 0;i <= details.length - 1;i++) {
        currentData[i].innerHTML += `${details[i].timeframes.monthly.current}hrs`;
    }


    for (let i = 0;i <= details.length - 1;i++) {
        previousData[i].innerHTML += `${details[i].timeframes.monthly.previous}hrs`;
    }
});