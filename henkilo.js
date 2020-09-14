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
