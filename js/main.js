import reportDetails from './reportDetails.js';

const details = JSON.parse(reportDetails);

for (let i = 0; i <= details.length; i++) {
  console.log(details[i].title);
  console.log(i);
}
