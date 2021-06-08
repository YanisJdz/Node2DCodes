// Fonction Ajax pour récupérer une url
function Get(yourUrl) {
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET", yourUrl, false);
    Httpreq.send(null);
    return JSON.parse(Httpreq.responseText);
}

function bdd(){
    let items = Get("http://127.0.0.1:3000/api/objects");
    let container = document.getElementById('bdd')
    items.forEach(item => {
        container.innerHTML += '<div class="col-sm-4"><div class="card-group"><div class="card"><img class="card-img-top" id="code_id'+item.id+'" src="" alt="2DCode"><div class="card-body"><h5 class="card-title">'+item.title+'</h5><p class="card-text">'+item.description+'</p></div></div></div></div>'
        let canvas = document.createElement('canvas');
        try {
            // The return value is the canvas element
            bwipjs.toCanvas(canvas, {
                    bcid:        'datamatrix',       // Barcode type
                    text:        JSON.stringify(item),    // Text to encode
                    scale:       3,               // 3x scaling factor
                    height:      20,              // Bar height, in millimeters
                    width:       20,
                    includetext: true,            // Show human-readable text
                    textxalign:  'center',        // Always good to set this
                });
                document.getElementById('code_id'+item.id).src = canvas.toDataURL('image/png');
        } catch (e) {
            console.log(e);
        }
    });;
}

