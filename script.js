// Pohjanpiha Festival – 30 esiintyjää (Perjantai & Lauantai, 3 lavaa)
const esiintyjat = [
  // PERJANTAI (15 esiintyjää)
  { nimi: "Vesterinen Yhtyeineen", lava: "Päälava", paiva: "Perjantai", aika: "22:00", genre: "Pop / Rock" },
  { nimi: "Behm", lava: "Päälava", paiva: "Perjantai", aika: "20:00", genre: "Pop" },
  { nimi: "Egotrippi", lava: "Päälava", paiva: "Perjantai", aika: "18:00", genre: "Suomirock" },
  { nimi: "Maija Vilkkumaa", lava: "Päälava", paiva: "Perjantai", aika: "16:15", genre: "Rock / Pop" },
  { nimi: "Viitasen Piia", lava: "Päälava", paiva: "Perjantai", aika: "14:45", genre: "Folk / Pop" },

  { nimi: "Antti Autio", lava: "Rantalava", paiva: "Perjantai", aika: "22:30", genre: "Folk / Pop" },
  { nimi: "Maustetytöt", lava: "Rantalava", paiva: "Perjantai", aika: "20:45", genre: "Indie / Pop" },
  { nimi: "Ruusut", lava: "Rantalava", paiva: "Perjantai", aika: "19:00", genre: "Elektropop" },
  { nimi: "Knipi", lava: "Rantalava", paiva: "Perjantai", aika: "17:15", genre: "Pop / Singer-songwriter" },
  { nimi: "Pambikallio", lava: "Rantalava", paiva: "Perjantai", aika: "15:30", genre: "Dream pop" },

  { nimi: "Litku Klemetti", lava: "Navettalava", paiva: "Perjantai", aika: "21:30", genre: "Indie / Rock" },
  { nimi: "Teini-pää", lava: "Navettalava", paiva: "Perjantai", aika: "19:45", genre: "Indie / Punk" },
  { nimi: "Lyyti", lava: "Navettalava", paiva: "Perjantai", aika: "18:15", genre: "Runopop" },
  { nimi: "Kissa", lava: "Navettalava", paiva: "Perjantai", aika: "16:45", genre: "Garagerock" },
  { nimi: "Jaakko Kulta", lava: "Navettalava", paiva: "Perjantai", aika: "15:15", genre: "Indie / Pop" },

  // LAUANTAI (15 esiintyjää)
  { nimi: "Gasellit", lava: "Päälava", paiva: "Lauantai", aika: "22:30", genre: "Rap / Pop" },
  { nimi: "Olavi Uusivirta", lava: "Päälava", paiva: "Lauantai", aika: "20:30", genre: "Rock" },
  { nimi: "Vesala", lava: "Päälava", paiva: "Lauantai", aika: "18:30", genre: "Pop" },
  { nimi: "Scandinavian Music Group", lava: "Päälava", paiva: "Lauantai", aika: "16:30", genre: "Pop / Folk" },
  { nimi: "Younghearted", lava: "Päälava", paiva: "Lauantai", aika: "14:45", genre: "Akustinen pop" },

  { nimi: "Arppa", lava: "Rantalava", paiva: "Lauantai", aika: "21:30", genre: "Indie / Folk" },
  { nimi: "Pehmoaino", lava: "Rantalava", paiva: "Lauantai", aika: "19:30", genre: "Indie / Pop" },
  { nimi: "Vesta", lava: "Rantalava", paiva: "Lauantai", aika: "17:45", genre: "Pop" },
  { nimi: "Samuli Putro", lava: "Rantalava", paiva: "Lauantai", aika: "16:00", genre: "Suomirock" },
  { nimi: "Emma & Matilda", lava: "Rantalava", paiva: "Lauantai", aika: "14:30", genre: "Indie / Folk" },

  { nimi: "Iron Maiden", lava: "Navettalava", paiva: "Lauantai", aika: "22:00", genre: "Rock" },
  { nimi: "Metallica", lava: "Navettalava", paiva: "Lauantai", aika: "20:00", genre: "Punk / Rock" },
  { nimi: "Ares", lava: "Navettalava", paiva: "Lauantai", aika: "18:15", genre: "Indie / Soul / Rap" },
  { nimi: "Isaac Sene", lava: "Navettalava", paiva: "Lauantai", aika: "16:45", genre: "Soul / Pop" },
  { nimi: "Lordi", lava: "Navettalava", paiva: "Lauantai", aika: "15:00", genre: "Rock" }
];

const hakuKentta = document.getElementById("haku");
const lavaSuodatin = document.getElementById("lava-suodatin");
const paivaSuodatin = document.getElementById("paiva-suodatin");
const jarjestysValikko = document.getElementById("jarjestys");
const tilarivi = document.getElementById("tilarivi");
const esiintyjalista = document.getElementById("esiintyjalista");

if (esiintyjalista && hakuKentta && lavaSuodatin && paivaSuodatin && jarjestysValikko && tilarivi) {
  function paivitaOhjelma() {
    const hakusana = hakuKentta.value.trim().toLowerCase();
    const valittuLava = lavaSuodatin.value;
    const valittuPaiva = paivaSuodatin.value;
    const jarjestys = jarjestysValikko.value;

    let suodatetut = esiintyjat.filter((artisti) => {
      const sopiiHakuun =
        artisti.nimi.toLowerCase().includes(hakusana) ||
        artisti.genre.toLowerCase().includes(hakusana);
      const sopiiLavalle = valittuLava === "kaikki" || artisti.lava === valittuLava;
      const sopiiPaivaan = valittuPaiva === "kaikki" || artisti.paiva === valittuPaiva;

      return sopiiHakuun && sopiiLavalle && sopiiPaivaan;
    });

    if (jarjestys === "nimi") {
      suodatetut.sort((a, b) => a.nimi.localeCompare(b.nimi, "fi"));
    } else if (jarjestys === "aika") {
      suodatetut.sort((a, b) => {
        if (a.paiva !== b.paiva) {
          return a.paiva === "Perjantai" ? -1 : 1;
        }
        return a.aika.localeCompare(b.aika);
      });
    }

    tilarivi.textContent = `Näytetään ${suodatetut.length} / ${esiintyjat.length} esiintyjää.`;

    esiintyjalista.innerHTML = "";

    if (suodatetut.length === 0) {
      const tyhja = document.createElement("li");
      tyhja.textContent = "Ei hakuehtoja vastaavia esiintyjiä. Kokeile muuttaa suodattimia.";
      esiintyjalista.appendChild(tyhja);
      return;
    }

    suodatetut.forEach((artisti) => {
      const li = document.createElement("li");
      li.className = "esiintyja-kortti";
      li.innerHTML = `
        <span class="badge">${artisti.lava}</span>
        <h3>${artisti.nimi}</h3>
        <p><strong>${artisti.paiva} klo ${artisti.aika}</strong> · ${artisti.genre}</p>
      `;
      esiintyjalista.appendChild(li);
    });
  }

  hakuKentta.addEventListener("input", paivitaOhjelma);
  lavaSuodatin.addEventListener("change", paivitaOhjelma);
  paivaSuodatin.addEventListener("change", paivitaOhjelma);
  jarjestysValikko.addEventListener("change", paivitaOhjelma);

  paivitaOhjelma();
}
