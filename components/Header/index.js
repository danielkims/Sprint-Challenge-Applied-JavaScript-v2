// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const primeHeader = document.createElement('.header-container')
primeHeader.appendChild(newHeader());


function newHeader() {
    const header = document.createElement('div');
    const headerTitle = document.createElement('h1');
    const headerDate = document.createElement('span');
    const headerTemp = document.createElement('span');

    header.classList.add('header');
    headerDate.classList.add('headerDate');
    headerTemp.classList.add('headerTemp');

    headerDate.textContent = "SMARCH 28, 2019";
    headerTitle.textContent = "Lambda Times";
    headerTemp.textContent = "98";

    header.append(headerTitle);
    header.append(headerDate);
    header.append(headerTemp);

    return header;
}
