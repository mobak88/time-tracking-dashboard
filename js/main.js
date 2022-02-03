const displayCurrentData = document.querySelectorAll('.card__small--time');
const displayPreviousData = document.querySelectorAll('.small__card--previous');

const activeTimeframeDaily = document.getElementById('daily');
const activeTimeframeWeekly = document.getElementById('weekly');
const activeTimeframeMonthly = document.getElementById('monthly');

let current = true;

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

function clearTimeFrame(timeframe, data) {
    for (let i = 0; i < data.length; i++) {
        timeframe[i].innerHTML = '';
    }
};

function changeActiveTimeframe(timeframe, removeFirst, removeSecond) {
    timeframe.classList.add('user-card__timeframe--active');
    removeFirst.classList.remove('user-card__timeframe--active');
    removeSecond.classList.remove('user-card__timeframe--active');
};

function getData() {
    fetch('data.json')
        .then(res => res.json())
        .then(data => {
            loopThroughReportDetails(displayCurrentData, data, current);
            loopThroughReportDetails(displayPreviousData, data);

            activeTimeframeDaily.addEventListener('click', function() {
                clearTimeFrame(displayCurrentData, data);
                clearTimeFrame(displayPreviousData, data);

                changeActiveTimeframe(activeTimeframeDaily, activeTimeframeWeekly, activeTimeframeMonthly);


                loopThroughReportDetails(displayCurrentData, data, current);
                loopThroughReportDetails(displayPreviousData, data);
            });

            activeTimeframeWeekly.addEventListener('click', function() {
                clearTimeFrame(displayCurrentData, data);
                clearTimeFrame(displayPreviousData, data);

                changeActiveTimeframe(activeTimeframeWeekly, activeTimeframeDaily, activeTimeframeMonthly);

                loopThroughReportDetails(displayCurrentData, data, current);
                loopThroughReportDetails(displayPreviousData, data);
            });

            activeTimeframeMonthly.addEventListener('click', function() {
                clearTimeFrame(displayCurrentData, data);
                clearTimeFrame(displayPreviousData, data);

                changeActiveTimeframe(activeTimeframeMonthly, activeTimeframeDaily, activeTimeframeWeekly);

                loopThroughReportDetails(displayCurrentData, data, current);
                loopThroughReportDetails(displayPreviousData, data);
            });
        })
        .catch(err => console.log(err));
}