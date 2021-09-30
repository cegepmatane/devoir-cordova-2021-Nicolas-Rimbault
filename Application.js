class Application {
  constructor(window, vueListeSwitch, vueSwitch, switchDAO){

    this.window = window;

    this.vueListeSwitch = vueListeSwitch;

    this.vueSwitch = vueSwitch;

    this.switchDAO = switchDAO;

    // C'est l'équivalent de function(){this.naviguer()}
    this.window.addEventListener("hashchange", () =>this.naviguer());

    this.naviguer();
  }

  naviguer(){
    let hash = window.location.hash;

    if(!hash){

      this.vueListeSwitch.initialiserListeSwitch(this.switchDAO.lister());
      this.vueListeSwitch.afficher();

    }else{

      let navigation = hash.match(/^#switch\/([0-9]+)/);
      let idSwitch = navigation[1];

      let switch_ = this.switchDAO.chercher(parseInt(idSwitch));
      this.vueSwitch.initialiserSwitch(switch_);
      this.vueSwitch.afficher();
    }
  }

}

new Application(window, new VueListeSwitch(), new VueSwitch(), new SwitchDAO());

