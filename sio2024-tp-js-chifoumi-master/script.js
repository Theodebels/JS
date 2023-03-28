let coups = ["PIERRE", "FEUILLE", "CISEAUX"];
let statutJeu = document.querySelector("#statut-jeu");
let boutons = document.querySelectorAll("button");
let affichageCoupsJoues = document.querySelectorAll(".container-coups-joues h2");


commencerPartie();
function calculerResultat(monCoup, coupOrdi) {
    if (monCoup === coupOrdi) {
        return "Copieur !";
    } else if (monCoup === 0) {
        if (coupOrdi === 2) {
            return "OK, gagné...";
        } else {
            return "Looser !";
        }
    } else if (monCoup === 1) {
        if (coupOrdi === 0) {
            return "OK, gagné...";
        } else {
            return "Looser !";
        }
    } else if (monCoup === 2) {
        if (coupOrdi === 1) {
            return "OK, gagné...";
        } else {
            return "Looser !";
        }
    }

    function calculerResultat(monCoup, coupOrdi) {
        let msgVictoire = "OK, gagné...";
        let msgDefaite = "Looser !";
        let msgEgalite = "Copieur !";

        if (monCoup === coupOrdi) return msgEgalite;
        if (monCoup === 0) {
            if (coupOrdi === 2) return msgVictoire;
            return msgDefaite;
        }
        if (monCoup === 1) {
            if (coupOrdi === 0) return msgVictoire;
            return msgDefaite;
        }
        if (coupOrdi === 1) return msgVictoire;
        return msgDefaite;
    }

    let msgVictoire = "OK, gagné...";
    let msgDefaite = "Looser !";
    let msgEgalite = "Copieur !";

    if (monCoup === coupOrdi) return msgEgalite;
    if (coups.indexOf(monCoup) === (coups.indexOf(coupOrdi) + 1) % 3) {
        return msgVictoire;
    }
    return msgDefaite;
}

function commencerPartie() {
    statutJeu.textContent = "Choisissez !";

    for (let i = 0; i < 3; i++) {
        boutons[i].textContent = coups[i];
        boutons[i].style.display = coups[i];
        boutons[i].addEventListener("click", finirPartie);
    }

    for (let i = 0; i < affichageCoupsJoues.length; i++) {
        affichageCoupsJoues[i].style.display = "none";
    }
}



function calculerResultat(monCoup, coupOrdi) {
    if (monCoup === coupOrdi) {
        return "Copieur !";
    } else if (monCoup === 0) {
        if (coupOrdi === 2) {
            return "OK, gagné...";
        } else {
            return "Looser !";
        }
    } else if (monCoup === 1) {
        if (coupOrdi === 0) {
            return "OK, gagné...";
        } else {
            return "Looser !";
        }
    } else if (monCoup === 2) {
        if (coupOrdi === 1) {
            return "OK, gagné...";
        } else {
            return "Looser !";
        }
    }
}

function finirPartie(event) {
    let monCoup = coups.indexOf(event.target.textContent);

    let coupOrdi = coupAleatoire();

    statutJeu.textContent = calculerResultat(monCoup, coupOrdi);

    affichageCoupsJoues[0].style.display = "inline-block";
    affichageCoupsJoues[0].textContent = coups[monCoup];
    affichageCoupsJoues[1].style.display = "inline-block";
    affichageCoupsJoues[1].textContent = "vs.";
    affichageCoupsJoues[2].style.display = "inline-block";
    affichageCoupsJoues[2].textContent = coups[coupOrdi];

    boutons[0].style.display = "none";
    boutons[2].style.display = "none";

    boutons[1].textContent = "Rejouer";

    boutons[1].removeEventListener("click", finirPartie);

    boutons[1].addEventListener("click", commencerPartie);
}


console.log(calculerResultat("pierre", "pierre")); // égalité
console.log(calculerResultat("pierre", "feuille")); // gagné
console.log(calculerResultat("pierre", "ciseaux")); // perdu