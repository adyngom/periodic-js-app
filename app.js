async function getTable() {
    let response = await fetch('https://api.myjson.com/bins/z24ty');
    let data = await response.json();
    return data;
}

getTable().then( data => init(data) );

function init(data) {
    const { order, elements } = data.table;

    const __lanthanides = [...order].slice(56,71);
    const __actinides = [...order].slice(88,103);
    const __allothers = order.filter(e => 
        elements[e].category !== 'lanthanide' && elements[e].category !== 'actinide'
    );
    
    const mkpFactory = makeElemMkp(elements);

    const others = __allothers.map(mkpFactory).join('');
    const lanthanides = __lanthanides.map(mkpFactory).join('');
    const actinides = __actinides.map(mkpFactory).join('');

    const html = tableMkp(others, lanthanides, actinides);

    render('app', `${html}`);
}

function render(elementId, mkp) {
    const element = document.querySelector(`#${elementId}`);
    element.innerHTML = mkp;
}

function makeElemMkp(elems) {
    return function(name) {
        return elemMkp(elems[name]);
    }
}

function elemMkp( data ) {
    const item = ( data => {
        return `<div class="card element-${data.number} element-${data.symbol.toLowerCase()} ${quickSlug(data.category)}">
                    <div class="card-content">
                        <div class="content">
                        <div class="card-name">
                            <h3>${data.symbol}</h3>
                        </div>
                        <div class="description"></div>
                        </div>
                    </div>
                </div>`;
    }); 
    return item(data);  
}

function tableMkp( others, lanthanides, actinides) {
    return `
        <div class='flashcards'>
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
    return !!str && str.split(' ').join('-');
}