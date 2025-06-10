const placesList = document.getElementById('places-list');
console.log(placesList);


// Step 1: where to add
const li = document.createElement('li');
// Step 2: what to add
li.innerText = 'Pahartoli Bon'
// Step 3: add to the parent
placesList.appendChild(li);

// step 1: where to add
const mainContainer = document.getElementById('main-container');


const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My Food List';
section.appendChild (h1);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'Biriyani';
ul.appendChild(li1) ;
const li2 = document.createElement('li');
li2.innerText = 'Borhani';
ul.appendChild(li2) ;
const li3 = document.createElement('li');
li3.innerText = 'Salad';
ul.appendChild(li3) ;


mainContainer.appendChild(section);
section.appendChild(ul);


// Set InnerHTML directly
const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1>My Dress List</h1>
    <ul>
    <li>Panjabi</li>
    <li>Lungi</li>
    <li>Sendo Genji</li>
    </ul>
`;
mainContainer.appendChild(sectionDress);


// age je script tag thakbe seta age execute hobe