class Application {
  constructor(window, vueListeSwitch, vueSwitch, switchDAO, VueAjouterSwitch){

    this.window = window;
    this.switchDAO = switchDAO;
    this.vueListeSwitch = vueListeSwitch;
    this.vueSwitch = vueSwitch;
    this.VueAjouterSwitch = VueAjouterSwitch;
    // C'est l'équivalent de function(){this.naviguer()}
    this.VueAjouterSwitch.initialiserActionAjouterSwitch(switch_ => this.actionAjouterSwitch(switch_));

    this.window.addEventListener("hashchange", () => this.naviguer());
    this.naviguer();
  }

  naviguer(){
    let hash = window.location.hash;

    if(!hash){

      this.vueListeSwitch.initialiserListeSwitch(this.switchDAO.lister());
      this.vueListeSwitch.afficher();

    }else if(hash.match(/^#ajouter-switch/)){

      this.VueAjouterSwitch.afficher();
    }
    else{
      let navigation  = hash.match(/^#switch\/([0-9]+)/)
      let idSwitch = navigation[1];

      this.vueSwitch.initialiserSwitch(this.switchDAO.lister()[idSwitch]);
      this.vueSwitch.afficher();
    }
  }
  
  actionAjouterSwitch(switch_){
    this.switchDAO.ajouter(switch_);
    this.window.location.hash = "#";
  }
}

new Application(window, new VueListeSwitch(), new VueSwitch(), new SwitchDAO(), new VueAjouterSwitch());