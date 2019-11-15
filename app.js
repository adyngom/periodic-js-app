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
    const __allothers = order.filter(e => elements[e].category !== 'lanthanide' && elements[e].category !== 'actinide');
    
    const others = __allothers.map( el => {
        return elemMkp( elements[el] );
    }).join('');

    const lanthanides = __lanthanides.map( el => {
        return elemMkp( elements[el] );
    }).join('');

    const actinides = __actinides.map( el => {
        return elemMkp( elements[el] );
    }).join('');

    const html = tableMkp(others, lanthanides, actinides);

    render('app', `${html}`);
}

function render(elementId, mkp) {
    const element = document.querySelector(`#${elementId}`);

    element.innerHTML = mkp;

    return;

}

function elemMkp( data ) {
    const item = ( data => {
        return `<div class="card element-${data.number} element-${data.symbol.toLowerCase()}">
                    <div class="card-content">
                        <div class="content">
                        <div class="card-name">${data.symbol}</div>
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