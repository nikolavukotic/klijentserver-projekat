export class Fabrika{
    constructor(naziv){
        if(naziv){
            this.naziv = naziv;
        }
        else{
            this.naziv = "Default";
        }

        this.listaSilosa = [];
        this.container = null;
    }

    dodajSilos(silos){
        this.listaSilosa.push(silos);
    }

    crtajFabriku(gde){
        this.container = document.createElement('div');
        this.container.className = 'fabrika';
        gde.appendChild(this.container);

        let levi = document.createElement('div');
        levi.className = 'fabrika-info';
        this.container.appendChild(levi);

        let desni = document.createElement('div');
        desni.className = 'forma';
        this.container.appendChild(desni);

        // ispod je vezano za levi deo  
        let naslov = document.createElement('h2');
        naslov.className = 'fabrika-naslov';
        naslov.innerHTML = this.naziv;
        levi.appendChild(naslov);

        let silosi = document.createElement('div');
        silosi.className = 'silosi';
        levi.appendChild(silosi);

        //!!!!!
        this.listaSilosa.forEach((silos, index)=>{
            silos.crtajSilos(silosi);
        })

        // ispod je vezano za desni deo
        let desnoPrvi = document.createElement('div');
        desnoPrvi.className = 'desno-prvi';
        desni.appendChild(desnoPrvi);

        const labelaSilos = document.createElement('label');
        labelaSilos.innerHTML = "Silos: ";
        desnoPrvi.appendChild(labelaSilos);

        let selekt = document.createElement('select');
        selekt.className = 'selekt';
        desnoPrvi.appendChild(selekt);

        //!!!
        this.listaSilosa.forEach((silos, index)=>{
            let opcija = document.createElement('option');
            opcija.className = 'opcija';
            opcija.innerHTML = silos.oznaka; // silos <- objekat klase Silos!!!!!
//////////////////////////////////////////////////
            opcija.value = index; 
            //silos 1 ce da ima value 0
            //silos 2 ce da imao value 1...
/////////////////////////////////////////////////
            selekt.appendChild(opcija);
        });

        let desnoDrugi = document.createElement('div');
        desnoDrugi.className = 'desno-drugi';
        desni.appendChild(desnoDrugi);

        let labelaKolicina = document.createElement('label');
        labelaKolicina.innerHTML = "Kolicina: ";
        desnoDrugi.appendChild(labelaKolicina);

        let inputKolicina = document.createElement('input');
        inputKolicina.type = 'number'; // bez ovoga?
        inputKolicina.className = 'input-kolicina';
        desnoDrugi.appendChild(inputKolicina);

        let dugme = document.createElement('button');
        dugme.innerHTML = "Sipaj u silos";
        dugme.className = 'dugme';
        desni.appendChild(dugme);

        dugme.onclick = (ev) => this.klikNaDugme(); //lambda izraz
    }

    klikNaDugme(){
        //menjam kolicinu u izabranom silosu
        //kom silosu menjam kolicinu 1.
        //koja je kolicina 2.

        //1.
        let indexGdeSipam = this.container.querySelector(".selekt").value;
        console.log(indexGdeSipam);
        //2.
        let kolicinaZaSipanje = parseInt(this.container.querySelector('.input-kolicina').value);

        this.listaSilosa[indexGdeSipam].dodajKolicinu(kolicinaZaSipanje);
    }
}