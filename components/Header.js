// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    // create the elements
    const header = document.createElement('div')
    const headerDate = document.createElement('span')
    const headerTitle = document.createElement('h1')
    const headerTemp = document.createElement('span')

    // assign classes and text content, where applicable
    header.classList.add('header')
    headerDate.classList.add('date')
    headerDate.textContent = 'MARCH 28, 2020'
    headerTitle.textContent = 'Lambda Times'
    headerTemp.classList.add('temp')
    headerTemp.textContent = '98°'

    // create the structure of the elements
    header.appendChild(headerDate)
    header.appendChild(headerTitle)
    header.appendChild(headerTemp)


    // return the component
    return header;
}

const headerContainer = document.querySelector('.header-container')

headerContainer.appendChild(Header());