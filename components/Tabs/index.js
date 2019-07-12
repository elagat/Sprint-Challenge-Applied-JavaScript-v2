// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const tabs = document.querySelector('.tabs');
const topics = document.querySelector('.topics');

axios.get('https://lambda-times-backend.herokuapp.com/topics')
  .then(res => {
    console.log(res.data);
    const tab = createTab(res.data);
    tabs.append(tab);
  })

const topicsArray = [
  'javascript',
  'bootstrap',
  'technology',
  'jquery',
  'node.js',
];

topicsArray.forEach(topic => {
  axios.get(`https://lambda-times-backend.herokuapp.com/${topic}`)
    .then(res => {
      const topic = createTab(res.data);
      topics.append(topic);
    })
})

function createTab() {
  const tabs
}

tabs.appendChild(createTab());
