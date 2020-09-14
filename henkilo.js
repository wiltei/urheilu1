/***********************************************************************************************
*******************
* Vilho Teivainen *
* 1904654         *
*******************
Web-ohjelmointi LTD7003
Javascript -perusteet, teht 3, viikko 2

Kehitystehtävänä on määritellä olio-ohjelmointikielille ominainen luokkamäärittely ja periytyminen
JavaScript-kielellä.

Määrittele yliluokka Henkilo, joka sisältää ihmisen henkilötietoja:

    etunimet,
    sukunimi,
    kutsumanimi,
    syntymävuosi

Määrittele luokka Urheilija, joka perii Henkilo-luokan ja toteuttaa lisäksi saantifunktiot (get- ja set-)
Urheilija-luokalle merkityksellisiin attribuutteihin. Lisää Urheilija luokkaan seuraavat ominaisuudet:

    linkki kuvaan,
    omapaino,
    laji,
    saavutukset.

Kirjoita nämä vaatimukset toteuttava koodi joka toimii node.js-tulkissa.

    Toteuta koodi. Lisää koodiin esimerkkejä Urheilija –olioista.
    Talleta toteutuksesi gitlab (tai github) -ympäristöön omaan projektiisi hakemistoon: Urheilu1
    Kirjoita tehtävästä kommentointi ja huomioita kehittäjän blogiin (hackmd.io).

***********************************************************************************************/

"use strict";

class Henkilo {
  constructor(etuNimet, sukuNimi, kutsumaNimi, syntymaVuosi) {
    this._etuNimet = etuNimet;
    this._sukuNimi = sukuNimi;
    this._kutsumaNimi = kutsumaNimi;
    this._syntymaVuosi = syntymaVuosi;
    console.log("new Person created", this);
  }
}
var hlo1 = new Henkilo("Werner", "Heisenberg", "Wernie", 1901);

// Luodaan uusi luokka henkilön pohjalta
class Urheilija extends Henkilo {
  constructor(
    etuNimet,
    sukuNimi,
    kutsumaNimi,
    syntymaVuosi,
    kuvaLinkki,
    omapaino,
    laji,
    saavutukset
  ) {
    // uusi luokka perii superilla isäntäluokan properties:t
    super(etuNimet, sukuNimi, kutsumaNimi, syntymaVuosi);
    // lisäksi uusi luokka saa myös muutaman oman propertyn
    this._kuvaLinkki = kuvaLinkki;
    this._omapaino = omapaino;
    this._laji = laji;
    this._saavutukset = saavutukset;
  }

  // Nimen getterit & setterit
  // Arvelin että olisi kiva saada helposti koko nimi
  get urheilijanNimi() {
    let kokoNimi = this._etuNimet + " " + this._sukuNimi;
    return kokoNimi;
  }

  set etuNimet(etuNimet) {
    this._etuNimet = etuNimet;
  }

  //syntymävuosi
  get syntymaVuosi() {
    return this._syntymaVuosi;
  }
  set syntymaVuosi(syntymaVuosi) {
    this._syntymaVuosi = syntymaVuosi;
  }
}

let sporttimake1 = new Urheilija(
  "Elmo Petteri",
  "Tulikoura",
  "Elmo",
  1980,
  "https://link.ki",
  120,
  "kymmenottelu",
  "Moninkertainen maailmanmestari"
);

console.log(sporttimake1.syntymaVuosi);
sporttimake1.syntymaVuosi = 1700;
console.log(sporttimake1.syntymaVuosi);
