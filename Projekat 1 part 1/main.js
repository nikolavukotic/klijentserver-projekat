import {Fabrika} from './fabrika.js';
import {Silos} from './silos.js';

let fabrika1 = new Fabrika("Zitopek");

let silos1 = new Silos("Silos 1", 2000);
let silos2 = new Silos("Silos 2", 1000);

fabrika1.dodajSilos(silos1);
fabrika1.dodajSilos(silos2);
fabrika1.dodajSilos(new Silos("Silos 3", 1500));

fabrika1.crtajFabriku(document.body);
