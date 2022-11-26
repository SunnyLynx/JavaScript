const clonBtn = () => {
  const elem = document.getElementById('topSection');
  const cloneElement = elem.cloneNode(true);
  const elems = document.querySelector(".topRow");
  elems.after(cloneElement);
}

const addHorse = () => {
  const element = document.querySelector('.rowHorse');
  const newElement = document.createElement('img'); 
  newElement.setAttribute('src', 'image/4horse.png'); 
  newElement.classList.add('horse'); 
  element.append(newElement);
}

const deleteHorse = () => {
  const element = document.querySelector('.horse');
  element.remove();
}

const addForest = () => { 
  const forest = document.querySelector('.rowForest'); 
  const newForest = document.createElement('img'); 
  newForest.setAttribute('src', 'image/forest.png'); 
  newForest.classList.add('forest-item'); 
  forest.append(newForest); 
}