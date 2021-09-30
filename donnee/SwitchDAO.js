class SwitchDAO{
    constructor(){
        let listeSwitchMemoire = [new Switch("Bleu", "0,71", "2,2mm", "1,8mm", "4mm", "tactil", "50g", "HyperX", "clicky", "Oui", "80 million", 0),
                                  new Switch("Rouge", "0,71", "2mm", "2mm", "4mm", "lineaire", "45g", "HyperX", "Not", "Oui", "80 million", 1),
                                  new Switch("Noir", "0,71", "2mm", "2mm", "4mm", "lineaire", "60g", "Cherry", "Not", "Oui", "100 million", 2)];
    
        localStorage['switch'] = JSON.stringify(listeSwitchMemoire);
        this.listeSwitch = [];
    }
    
    lister(){
        this.listeSwitch = [];
        let listeSwitchMemoire = [];
        if(localStorage['switch']){
          listeSwitchMemoire = JSON.parse(localStorage['switch']);
        }
    
        for(let position in listeSwitchMemoire){
          let switch_ = new Switch(listeSwitchMemoire[position].couleur,
                                  listeSwitchMemoire[position].prix,
                                  listeSwitchMemoire[position].distanceActivation,
                                  listeSwitchMemoire[position].distanceMorte,
                                  listeSwitchMemoire[position].distanceTotal,
                                  listeSwitchMemoire[position].type,
                                  listeSwitchMemoire[position].forceAction,
                                  listeSwitchMemoire[position].marque,
                                  listeSwitchMemoire[position].clickyOrNot,
                                  listeSwitchMemoire[position].rgbCompatibility,
                                  listeSwitchMemoire[position].dureeDeVie,
                                  listeSwitchMemoire[position].id);
    
          this.listeSwitch.push(switch_);
        }
    
        return this.listeSwitch;
    
    }
    
      chercher(id){
        this.lister();
        return this.listeSwitch.find(switch_ => switch_.id === id);
      }
    }