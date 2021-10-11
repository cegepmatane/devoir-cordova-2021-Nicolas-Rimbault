class SwitchDAO {
  constructor() {
    // this.listeSwitchMemoire = [new Switch("Bleu", "0,71", "2,2mm", "1,8mm", "4mm", "tactil", "50g", "HyperX", "clicky", "Oui", "80 million", 0),
    //   new Switch("Rouge", "0,71", "2mm", "2mm", "4mm", "lineaire", "45g", "HyperX", "Not", "Oui", "80 million", 1),
    //   new Switch("Noir", "0,71", "2mm", "2mm", "4mm", "lineaire", "60g", "Cherry", "Not", "Oui", "100 million", 2)]
    this.listeSwitchMemoire = [];
  }

  lister() {
    if(localStorage['switch']){
      this.listeSwitch = JSON.parse(localStorage['switch']);
    }
    for (let position in this.listeSwitchMemoire) {
      let switch_ = new Switch(this.listeSwitchMemoire[position].couleur,
                                this.listeSwitchMemoire[position].prix,
                                this.listeSwitchMemoire[position].distanceActivation,
                                this.listeSwitchMemoire[position].distanceMorte,
                                this.listeSwitchMemoire[position].distanceTotal,
                                this.listeSwitchMemoire[position].type,
                                this.listeSwitchMemoire[position].forceAction,
                                this.listeSwitchMemoire[position].marque,
                                this.listeSwitchMemoire[position].clickyOrNot,
                                this.listeSwitchMemoire[position].rgbCompatibility,
                                this.listeSwitchMemoire[position].dureeDeVie,
                                this.listeSwitchMemoire[position].id);

      this.listeSwitchMemoire[switch_.id] = switch_;
    }

    return this.listeSwitchMemoire;

  }

  ajouter(switch_){
    if(this.listeSwitchMemoire.length > 0)
      switch_.id = this.listeSwitchMemoire[this.listeSwitchMemoire.length-1].id + 1;
    else
      switch_.id = 0;

    this.listeSwitchMemoire[switch_.id] = switch_;

    localStorage['switch'] = JSON.stringify(this.listeSwitchMemoire);
    console.log("JSON.stringify(this.listeSwitch) : " + JSON.stringify(this.listeSwitchMemoire));
  }
}