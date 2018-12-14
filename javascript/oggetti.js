var dbCases = [{nome: "Corsair Obsidian 500D", prezzo: 89,99, quantita: 5, img: "immagini/memorie/index.jpeg" },
             {nome: "CoolerMaster MasterBox Lite", prezzo: 49,00, quantita: 5, img: "immagini/psu/cm.jpg" },
             {nome: "ThermalTake Versa C23", prezzo: 129,89, quantita:5, img: "immagini/psu/thermaltake.jpg" },
             {nome: "NZXT Noctis 450", prezzo: 149,00 ,quantita:5, img: "immagini/nzxt.jpg" }
                ];

var dbMobo = [{nome: "Gigabyte Aorus x299", prezzo: 210,00 , quantita: 5, img: "immagini/mobo/ogimg-logo.png"},
              {nome: "Gigabyte Aorus x470", prezzo: 199,99 , quantita: 5, img: "immagini/mobo/ogimg-logo.png"},
              {nome: "MSI MPG Z390", prezzo: 179,00, quantita: 5, img: "immagini/mobo/MSI_logo_for_share2.png"},
              {nome: "AsRock b450m Pro4", prezzo: 79,00, quantita: 5, img: "immagini/mobo/asrock-header.jpg"}
              ];

var dbRam = [{nome: "Corsair Vengeance 8gb 2666mhz", prezzo: 68,99, quantita: 5, img:"immagini/memorie/index.jpeg"},
             {nome: "Ballistix 2x8gb 3000mhz", prezzo: 164,99, quantita: 5, img:"immagini/memorie/images.png"},
             {nome: "HyperX Fury rgb 8gb", prezzo: 78,00, quantita: 5, img:"immagini/memorie/hx.jpeg"},
             {nome: "Adata rgb 2x16", prezzo: 279,00, quantita: 5, img:"immagini/memorie/adata.png"}
            ];

var dbPsu = [{nome: "Corsair vs550w 80+", prezzo: 45,99, quantita: 5, img:"immagini/memorie/index.jpeg"},
             {nome: "TermalTake smartSE 530w", prezzo: 53,00, quantita: 5, img:"immagini/psu/thermaltake.jpg"},
             {nome: "CoolerMaster MasterWatt 700w", prezzo: 61,00, quantita: 5, img:"immagini/psu/cm.jpg"},
             {nome: "EVGA 600w", prezzo: 67,63, quantita: 5, img:"immagini/psu/EVGA.png"}
            ];

var dbSchedeVideo = [{nome: "NVIDIA RTX 2080Ti", prezzo: 1483,60 , quantita: 5, img:"immagini/video/slide1_48508f79-7e76-44fc-ac2e-4d510abc27bf-prv.jpg"},
            {nome: "NVIDIA GTX 1060 6gb", prezzo: 285,99 , quantita: 5, img:"immagini/video/slide1_48508f79-7e76-44fc-ac2e-4d510abc27bf-prv.jpg"},
            {nome: "AMD Vega 64", prezzo: 500,00, quantita: 5, img:"immagini/video/1099px-AMD_Radeon_graphics_logo_2016.svg.png"},
            {nome: "AMD RX580", prezzo: 279,00 , quantita: 5, img:"immagini/video/1099px-AMD_Radeon_graphics_logo_2016.svg.png"}
           ];

var dbHardDisk = [{nome: "WD Blue 1TB 7200rpm", prezzo: 45,99 , quantita: 5, img:"immagini/hd/wd.jpg"},
           {nome: "Seagate 1TB 64mb cache", prezzo: 42,00, quantita: 5, img:"immagini/hd/seagate.jpg"},
           {nome: "Kingston ssd 128gb", prezzo: 78,00, quantita: 5, img:"immagini/hd/kingston-logo.png"},
           {nome: "Drevo x1 series 250gb", prezzo: 40,00 , quantita: 5, img:"immagini/hd/drevo.jpeg"}
          ];

function inizializzaDb() {
    var dbCasesJSON = localStorage.getItem("dbCases");
    if(dbCasesJSON == null) localStorage.setItem("dbCases", JSON.stringify(dbCases));
    var dbMoboJSON = localStorage.getItem();
    if(dbMoboJSON == null) localStorage.setItem("dbMobo", JSON.stringify(dbMobo));
    var dbRamJSON = localStorage.getItem();
    if(dbRamJSON == null) localStorage.setItem("dbRam", JSON.stringify(dbRam));
    var dbPsuJSON = localStorage.getItem();
    if(dbPsuJSON == null) localStorage.setItem("dbPsu", JSON.stringify(dbPsu));
    var dbSchedeVideoJSON = localStorage.getItem();
    if(dbSchedeVideoJSON == null) localStorage.setItem("dbSchedeVideo", JSON.stringify(dbSchedeVideo));
    var dbHardDiskJSON = localStorage.getItem();
    if(dbHardDiskJSON == null ) localStorage.setItem("dbHardDisk", JSON.stringify(dbHardDisk));
}

function setOggetti(database) {
    var databaseJSON = localStorage.getItem(database);
    var database = JSON.parse(databaseJSON);
    for(int i = 0; i < database.length ; i++){
        var oggetto = database[i];
        var trEl = document.createElement("tr");
        var tdimgEl = document.createElement("td");
        var imgEl = document.createElement("img");
        imgEl.setAttribute("src", oggetto.img);
        tdimgEl.appendChild(imgEl);
        var tdNome = document.createElement("td");
        var textNome = document.createTextNode(oggetto.nome);
        tdNome.appendChild(textNome);
        var tdPrezzo = document.createElement("td");
        var textPrezzo = document.createTextNode(oggetto.prezzo);
        tdPrezzo.appendChild(textPrezzo);
        var tdButton = document.createElement("td");
        var button = document.createElement("button");
        var textButton = document.createTextNode("Aggiungi al Carrello");
        button.appendChild(textButton);
        tdButton.appendChild(button);

        trEl.appendChild(tdimgEl);
        trEl.appendChild(tdNome);
        trEl.appendChild(tdPrezzo);
        trEl.appendChild(tdButton);
        var tabella = document.getElementById("tabellaOggetti");
        tabella.appendChild(trEl);
    }
}


        