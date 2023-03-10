export class Silos{ //nesto
    constructor(oznaka, kapacitet)
    {
        if(oznaka){
            this.oznaka = oznaka;
        }
        else{
            this.oznaka = "Default";
        }
        if(kapacitet){
            this.kapacitet = kapacitet;
        }
        else{
            this.kapacitet = 1000;
        }
        this.trKolicina = 0;
        this.container = null;
    }
//gde = silosi
    crtajSilos(gde){
        this.container = document.createElement('div');//<div class="silos"></div>
        this.container.className = "silos";
        gde.appendChild(this.container);

        let nazivSilosa = document.createElement('label');
        nazivSilosa.className = "naziv-silosa";
        nazivSilosa.innerHTML = this.oznaka; // <label>Silo 1</label>
        this.container.appendChild(nazivSilosa);

        let kolicina = document.createElement('label');
        kolicina.className = 'kolicina-materijala';
        kolicina.innerHTML = `${this.trKolicina}t/ ${this.kapacitet}t`;
        this.container.appendChild(kolicina);

        let popunjenost = document.createElement('div');
        popunjenost.className = 'popunjenost';
        this.container.appendChild(popunjenost);

        let popuna = document.createElement('div');
        popuna.className = 'popuna';
        popuna.style.flexGrow = this.trKolicina/this.kapacitet; 
        popunjenost.appendChild(popuna);
    }
    dodajKolicinu(koliko){
        if(koliko < 0){
            alert("Nemoguce je uneti negativnu vrednost!");
        }
        else if(this.trKolicina + koliko <= this.kapacitet){
            this.trKolicina += koliko;
            let kolicina = this.container.querySelector('.kolicina-materijala');
            kolicina.innerHTML = `${this.trKolicina}t/ ${this.kapacitet}t`;

            let popuna = this.container.querySelector('.popuna');
            popuna.style.flexGrow = this.trKolicina/ this.kapacitet; 
        }
        else{
            alert("Nema mesta u silosu!");
        }
    }
}


//"Da", "li", "zna??", "ko", "ima", "doma??i", "zdatak","?"

//"Dobice", "1", "onaj", "ko", "nema", "domaci", "."


//"Sve", "br??e", "i", "br??e", "tr??i??", "."
//"Sve", "bolje", "i", "bolje", "radi??", "doma??i", "."
//"Milica", "je", "sve", "bolja", "i", "bolja", "."
//"Svi", "su", "do??li", "."