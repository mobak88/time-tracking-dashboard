import reportDetails from './reportDetails.js';
const details = JSON.parse(reportDetails);

const currentData = document.querySelectorAll('.card__small--time');
const previousData = document.querySelectorAll('.small__card--previous');

const activeTimeframeDaily = document.getElementById('daily');
const activeTimeframeWeekly = document.getElementById('weekly');
const activeTimeframeMonthly = document.getElementById('monthly');

const loopThroughReportDetailsDaily = function(timeframe, data) {
    for (let i = 0;i <= details.length - 1;i++) {
        timeframe[i].innerHTML = data ? `${details[i].timeframes.daily.current}hrs` : `Last week ${details[i].timeframes.daily.previous}hrs`;
    }
};

loopThroughReportDetailsDaily(currentData, details);
loopThroughReportDetailsDaily(previousData);

const clearTimeFrame = function(timeframe) {
    for (let i = 0;i <= details.length - 1;i++) {
        timeframe[i].innerHTML = '';
    }
};

const changeActiveTimeframe = function(timeframe, removeFirst, removeSecond) {
    timeframe.classList.add('user-card__timeframe--active');
    removeFirst.classList.remove('user-card__timeframe--active');
    removeSecond.classList.remove('user-card__timeframe--active');

    clearTimeFrame(currentData);
    clearTimeFrame(previousData);
};

// // How do I use onclick with argument without calling the function before the click
// activeTimeframeDaily.onclick = changeActiveTimeframe(activeTimeframeDaily);
// activeTimeframeWeekly.onclick = changeActiveTimeframe(activeTimeframeWeekly);
// activeTimeframeMonthly.onclick = changeActiveTimeframe(activeTimeframeMonthly);

activeTimeframeDaily.addEventListener('click', function() {
    changeActiveTimeframe(activeTimeframeDaily, activeTimeframeWeekly, activeTimeframeMonthly);

    loopThroughReportDetailsDaily(currentData, details);
    loopThroughReportDetailsDaily(previousData);
});

const loopThroughReportDetailsWeekly = function(timeframe, data) {
    for (let i = 0;i <= details.length - 1;i++) {
        timeframe[i].innerHTML = data ? `${details[i].timeframes.weekly.current}hrs` : `Last week ${details[i].timeframes.weekly.previous}hrs`;
    }
};

activeTimeframeWeekly.addEventListener('click', function() {
    changeActiveTimeframe(activeTimeframeWeekly, activeTimeframeDaily, activeTimeframeMonthly);

    loopThroughReportDetailsWeekly(currentData, details);
    loopThroughReportDetailsWeekly(previousData);
});

const loopThroughReportDetailsMonthly = function(timeframe, data) {
    for (let i = 0;i <= details.length - 1;i++) {
        timeframe[i].innerHTML = data ? `${details[i].timeframes.monthly.current}hrs` : `Last week ${details[i].timeframes.monthly.previous}hrs`;
    }
};

activeTimeframeMonthly.addEventListener('click', function() {
    changeActiveTimeframe(activeTimeframeMonthly, activeTimeframeDaily, activeTimeframeWeekly);

    loopThroughReportDetailsMonthly(currentData, details);
    loopThroughReportDetailsMonthly(previousData);
});