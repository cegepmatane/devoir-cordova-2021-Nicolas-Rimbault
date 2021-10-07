class VueAjouterSwitch{
    constructor(){
        this.html = document.getElementById("html-vue-ajouter-switch").innerHTML;
        this.actionAjouterSwitch = null;
    }

    initialiserActionAjouterSwitch(actionAjouterSwitch){
        this.actionAjouterSwitch = actionAjouterSwitch
    }

    afficher(){
        document.getElementsByTagName("body")[0].innerHTML = this.html;
        console.log(this.html);
        document.getElementById("formulaire-ajouter").addEventListener("submit", evenement => this.enregistrer(evenement));
    }

    enregistrer(evenement){
        evenement.preventDefault();

        let couleur = document.getElementById("switch-couleur").value;
        let marque = document.getElementById("switch-marque").value;
        let prix = document.getElementById("switch-prix").value;
        let distanceActivation = document.getElementById("switch-distanceActivation").value;
        let distanceMorte = document.getElementById("switch-distanceMorte").value;
        let distanceTotal = document.getElementById("switch-distanceTotal").value;
        let type = document.getElementById("switch-type").value;
        let forceAction = document.getElementById("switch-forceAction").value;
        let clickyOrNot = document.getElementById("switch-clickyOrNot").value;
        let RGB = document.getElementById("switch-RGB-compatibility").value;
        let vie = document.getElementById("switch-duree-de-vie").value;

        this.actionAjouterSwitch(new Switch(couleur, prix, distanceActivation, distanceMorte, distanceTotal, type, forceAction, marque, clickyOrNot, RGB, vie, null));
    }
}