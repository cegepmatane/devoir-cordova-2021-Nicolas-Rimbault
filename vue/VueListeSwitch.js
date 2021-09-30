class VueListeSwitch{
  constructor(){
    this.html = document.getElementById("html-vue-liste-switch").innerHTML;
    this.listeSwitchDonnee = null;
  }

  initialiserListeSwitch(listeSwitchDonnee){
    this.listeSwitchDonnee = listeSwitchDonnee;
  }

  afficher(){
    document.getElementsByTagName("body")[0].innerHTML = this.html;

    let listeSwitch = document.getElementById("liste-switch");
    const listeSwitchItemHTML = listeSwitch.innerHTML;
    let listeSwitchHTMLRemplacement = "";

    for(var numeroSwitch in this.listeSwitchDonnee){
      let listeSwitchItemHTMLRemplacement = listeSwitchItemHTML;
      listeSwitchItemHTMLRemplacement = listeSwitchItemHTMLRemplacement.replace("{Switch.id}",this.listeSwitchDonnee[numeroSwitch].id);
      listeSwitchItemHTMLRemplacement = listeSwitchItemHTMLRemplacement.replace("{Switch.couleur}",this.listeSwitchDonnee[numeroSwitch].couleur);
      listeSwitchItemHTMLRemplacement = listeSwitchItemHTMLRemplacement.replace("{Switch.marque}",this.listeSwitchDonnee[numeroSwitch].marque);
      listeSwitchHTMLRemplacement += listeSwitchItemHTMLRemplacement;
    }

    listeSwitch.innerHTML = listeSwitchHTMLRemplacement;
  }

}
