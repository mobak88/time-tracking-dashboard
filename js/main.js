import reportDetails from './reportDetails.js';
const details = JSON.parse(reportDetails);

const displayCurrentData = document.querySelectorAll('.card__small--time');
const displayPreviousData = document.querySelectorAll('.small__card--previous');

const activeTimeframeDaily = document.getElementById('daily');
const activeTimeframeWeekly = document.getElementById('weekly');
const activeTimeframeMonthly = document.getElementById('monthly');

let current = true;

function getData() {
    fetch('data.json')
        .then(res => res.json())
        .then(data => {
            loopThroughReportDetails(displayCurrentData, data, current);
            loopThroughReportDetails(displayPreviousData, data);
            console.log(data[0].timeframes.daily.current);
        })
        .catch(err => console.log(err));
}

function loopThroughReportDetails(timeframe, data, current) {
    if (activeTimeframeDaily.classList.contains('user-card__timeframe--active')) {
        for (let i = 0; i < data.length; i++) {
            timeframe[i].innerHTML = current === true ? `${data[i].timeframes.daily.current}hrs` : `Last week ${data[i].timeframes.daily.previous}hrs`;
        }
    } else if (activeTimeframeWeekly.classList.contains('user-card__timeframe--active')) {
        for (let i = 0; i < data.length; i++) {
            timeframe[i].innerHTML = current === true ? `${data[i].timeframes.weekly.current}hrs` : `Last week ${data[i].timeframes.weekly.previous}hrs`;
        }
    } else if (activeTimeframeMonthly.classList.contains('user-card__timeframe--active')) {
        for (let i = 0; i < data.length; i++) {
            timeframe[i].innerHTML = current === true ? `${data[i].timeframes.monthly.current}hrs` : `Last week ${data[i].timeframes.monthly.previous}hrs`;
        }
    }
};

getData();

const clearTimeFrame = function(timeframe) {
    for (let i = 0; i <= details.length - 1; i++) {
        timeframe[i].innerHTML = '';
    }
};

const changeActiveTimeframe = function(timeframe, removeFirst, removeSecond) {
    timeframe.classList.add('user-card__timeframe--active');
    removeFirst.classList.remove('user-card__timeframe--active');
    removeSecond.classList.remove('user-card__timeframe--active');

    clearTimeFrame(displayCurrentData);
    clearTimeFrame(displayPreviousData);
};

activeTimeframeDaily.addEventListener('click', function() {
    changeActiveTimeframe(activeTimeframeDaily, activeTimeframeWeekly, activeTimeframeMonthly);

    // loopThroughReportDetails(displayCurrentData, details);
    // loopThroughReportDetails(displayPreviousData);
});

activeTimeframeWeekly.addEventListener('click', function() {
    changeActiveTimeframe(activeTimeframeWeekly, activeTimeframeDaily, activeTimeframeMonthly);

    // loopThroughReportDetails(displayCurrentData, details);
    // loopThroughReportDetails(displayPreviousData);
});

activeTimeframeMonthly.addEventListener('click', function() {
    changeActiveTimeframe(activeTimeframeMonthly, activeTimeframeDaily, activeTimeframeWeekly);

    // loopThroughReportDetails(displayCurrentData, details);
    // loopThroughReportDetails(displayPreviousData);
});