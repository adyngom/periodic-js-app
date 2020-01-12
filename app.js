async function getTable() {
  try {
    let response = await fetch("https://api.myjson.com/bins/z24ty");
    let data = response.json();
    return data;
  } catch (err) {
    throw err;
  }
}

const Body = document.getElementsByTagName("body")[0];
let ShowCard;

let state = {
  elements: {}
};

getTable()
  .then(data => {
    state.elements = data.table.elements;
    init(data);
  })
  .catch(err => {});

function init(data) {
  const { order, elements } = data.table;

  const __lanthanides = [...order].slice(56, 71);
  const __actinides = [...order].slice(88, 103);
  const __allothers = order.filter(
    e =>
      elements[e].category !== "lanthanide" &&
      elements[e].category !== "actinide"
  );

  const mkpFactory = makeElemMkp(elements);

  const others = __allothers.map(mkpFactory).join("");
  const lanthanides = __lanthanides.map(mkpFactory).join("");
  const actinides = __actinides.map(mkpFactory).join("");

  const html = tableMkp(others, lanthanides, actinides);

  render("app", `${html}`);

  ShowCard = document.getElementById("showcard");

  addPageEvents();
}

function render(elementId, mkp) {
  const element = document.querySelector(`#${elementId}`);
  element.innerHTML = mkp;
}

function makeElemMkp(elems) {
  return function(name) {
    return elemMkp(elems[name]);
  };
}

function elemMkp(data) {
  return `<div 
                    class="card element-${
                      data.number
                    } element-${data.symbol.toLowerCase()} ${quickSlug(
    data.category
  )}"
                    data-element="${data.name}"
                    >
                    ${cardMkp(data)}
                </div>`;
}

function cardMkp(data) {
  return `
    <div class="card-content">
        <div class="content">
            <div class="card-metrics">
                <h3>${data.number}</h3>  
            </div>
            <div class="card-name">
                <h1>${data.symbol}</h1>
                <p>${data.name}</p>   
                <!--<p>${data.atomic_mass.toFixed(
                  4
                )}</p>-->                         
            </div>
        </div>
    </div>
    `;
}

function elemPage(data) {
  return `
        
                <div class="card element-card ${quickSlug(data.category)}">
                    ${cardMkp(data)}
                </div>
                <div class="element-content">
                    <p>${data.summary}</p>
                </div>
       
    `;
}

function tableMkp(others, lanthanides, actinides) {
  return `
        <div class='flashcards'>
            <div class='showCard' id='showcard'></div>
            <div class='lanthanide' id='lanth-row'>
                <h4>57 - 71</h4>
            </div>
            <div class='actinide' id='act-row'>
                <h4>89 - 103</h4>
            </div>
            ${others}
        </div>
        <div class='flashcards lanth-row'>
           ${lanthanides}
           <div class='card card-empty'></div> 
        </div>
        <div class='flashcards actin-row'>
            ${actinides}
            <div class='card card-empty'></div> 
        </div>
    `;
}

function quickSlug(str) {
  return !!str && str.split(" ").join("-");
}

function addPageEvents() {
  const CardsHandler = PageEventsHandler(".card");
  CardsHandler("click")(event => {
    const key = event.target.dataset.element.toLowerCase();
    showPage(key);
  });
}

function showPage(name) {
  const pageFragment = new DocumentFragment();
  const pageMkp = elemPage(state.elements[name]);
  //   const wrapper = document.createElement("div");
  //   wrapper.classList = "wrapper full-screen";
  //   wrapper.innerHTML = pageMkp;
  //   pageFragment.appendChild(wrapper);
  //Body.appendChild(pageFragment);
  ShowCard.innerHTML = pageMkp;
}

function PageEventsHandler(element) {
  return function(eventType) {
    return function(callback = null) {
      document.querySelectorAll(`#app ${element}`).forEach(el =>
        el.addEventListener(eventType, event => {
          callback(event);
        })
      );
    };
  };
}
