class VueSwitch{
  constructor(){
    this.html = document.getElementById("html-vue-switch").innerHTML;
    this.switch = null;
  }

  initialiserSwitch(switch_){
    this.switch = switch_;
  }

  afficher(){
    document.getElementsByTagName("body")[0].innerHTML = this.html;
    document.getElementById("switch-couleur").innerHTML = this.switch.couleur;
    document.getElementById("switch-marque").innerHTML = this.switch.marque;
    document.getElementById("switch-prix").innerHTML = this.switch.prix;
    document.getElementById("switch-distanceActivation").innerHTML = this.switch.distanceActivation;
    document.getElementById("switch-distanceMorte").innerHTML = this.switch.distanceMorte;
    document.getElementById("switch-distanceTotal").innerHTML = this.switch.distanceTotal;
    document.getElementById("switch-type").innerHTML = this.switch.type;
    document.getElementById("switch-forceAction").innerHTML = this.switch.forceAction;
    document.getElementById("switch-clickyOrNot").innerHTML = this.switch.clickyOrNot;
    document.getElementById("switch-RGB-compatibility").innerHTML = this.switch.rgbCompatibility;
    document.getElementById("switch-duree-de-vie").innerHTML = this.switch.dureeDeVie;
  }
  //{couleur:"", prix:"", distanceActivation:"", distanceMorte:"", distanceTotal:"", type:"", forceAction:"", marque:"",clickyOrNot:"", id:0}
}
