import reportDetails from './reportDetails.js';
const details = JSON.parse(reportDetails);

const time = document.querySelectorAll('.card__small--time');
const previous = document.querySelectorAll('.small__card--previous');


for (let i = 0;i <= details.length - 1;i++) {
    console.log(details[i].timeframes.daily.current);

    time[i].innerHTML = `${details[i].timeframes.daily.current}hrs`;
}

for (let i = 0;i <= details.length;i++) {
    previous[i].innerHTML += `Last week - ${details[i].timeframes.daily.previous}hrs`;
}

