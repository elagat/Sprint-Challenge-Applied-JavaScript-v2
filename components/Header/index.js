// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the header-container component

function Header() {
  const header = document.createElement('div');
  header.classList.add('header');

  const date = document.createElement('span');
  date.classList.add('date');
  date.textContent = 'JULY 12, 2019';

  const newspaper = document.createElement('h1');
  newspaper.textContent = 'Lambda Times';

  const temp = document.createElement('span');
  temp.classList.add('temp');
  temp.textContent = '98°';

  headerContainer.append(header);
  header.append(date);
  header.append(newspaper);
  header.append(temp);

  return Header;
}

const headerContainer = document.querySelector('.header-container');
headerContainer.appendChild(Header());
