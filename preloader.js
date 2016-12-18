Game.Preloader = function(game){

};

var zivljenjaVeganka = 5;
var tockeV = 0;
var ziv6kup = false;
var ziv7kup = false;
var ziv8kup = false;
var ziv9kup = false;
var ziv10kup = false;

Game.Preloader.prototype = {
  preload:function(){

    this.game.stage.backgroundColor = '#FFF';
    this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY, 'preloadBar');
    this.load.setPreloadSprite(this.preloadBar);


    this.preloadBar = this.add.sprite(0, 100, 'preloaderBar');

    // za main menu
    this.load.image('MMozadje', 'images_menu/meni_back.png');
    this.load.image('1vs1', 'images_menu/1vs1_btn.png');
    this.load.image('pomoc', 'images_menu/help_btn.png');
    this.load.image('ctv', 'images_menu/ctv_btn.png');
    this.load.image('msr', 'images_menu/mesar_btn.png');
    this.load.image('vgn', 'images_menu/vegan_btn.png');
    this.load.image('shopBtn', 'images_menu/shop_btn.png');
    this.load.image('titleMM', 'images_menu/meni_title.png');

    // za help
      this.load.image('sidroHlp', 'images_help/sidroH.png');
      this.load.image('titleHlp', 'images_help/helpTitle.png');
      this.load.image('ctvBtnH', 'images_help/ctvH.png');
      this.load.image('1v1BtnH', 'images_help/1v1h.png');
      this.load.image('sgpBtnH', 'images_help/sgpH.png');
      this.load.image('izhH', 'images_help/izhH.png');
      this.load.image('1v1Hlp', 'images_help/1v1hlp.png');
      this.load.image('ctvHlp', 'images_help/ctvHlp.png');
      this.load.image('sgpHlp', 'images_help/snglHlp.png');
      this.load.image('bckArHlp', 'images_help/halpBck.png');


      this.load.image('background', 'images_vegan/ozadje1-01.png');

      // za vegan lvl 1
      this.load.tilemap('mapV1', 'images_vegan/lvl1map.csv');
      // za vegan lvl 2
      this.load.tilemap('mapV2', 'images_vegan/lvl2map.csv');
      // za vegan lvl 3
      this.load.tilemap('mapV3', 'images_vegan/lvl3map.csv');

      this.load.tilemap('mapV4', 'images_vegan/lvl4map.csv');
      // za veganske lvl
      this.load.image('tilesetV', 'images_vegan/tilesV.png');
      this.load.spritesheet('veganka','images_vegan/vegan.png', 24, 26);

      this.load.image('srcek', 'images_vegan/srcek.png');
      this.load.image('metekV', 'images_vegan/metek.png');

      this.load.image('bckGO', 'images_vegan/go_bck.png');
      this.load.image('mnGO', 'images_vegan/go_mn.png');

      this.load.image('mesarEn', 'images_vegan/mesar_front_big.png');

      this.load.image('bckCTV', 'images_catchTheV/bck_CTV.jpg');
      this.load.tilemap('mapCTV1', 'images_catchTheV/mapCTV1.csv');
      this.load.image('tilesetCTV', 'images_catchTheV/tileCtchVg.png');
      this.load.spritesheet('vegankaCTV', 'images_catchTheV/veganka_labirint.png', 20, 20);
      this.load.spritesheet('butcherCTV', 'images_catchTheV/butcher_labirint.png', 20, 20);
      this.load.image('vegWinM', 'images_catchTheV/veg_win.png');
      this.load.image('butchWinM', 'images_catchTheV/butch_win.png');
      this.load.image('bckBtnCTV', 'images_catchTheV/ctv_meni.png');
      this.load.image('nxtBtnCTV', 'images_catchTheV/ctv_next.png');

	  //boss
	        this.load.tilemap('bossVmap', 'images_vegan/bossVmap.csv');
      this.load.image('tilesetVB', 'images_vegan/tilesVB_.png');

      this.load.image('vegankaEn', 'images_vegan/veganka_front_big.png');
      this.load.tilemap('bossMmap', 'images_vegan/bossMmap.csv');
      this.load.image('tilesetVB', 'images_vegan/tilesetV.png');


	  // mesar
	this.load.image('nebo', "extra/ozadje.png");
    this.load.tilemap('zemljevid', "extra/mapaNova.csv");

    this.load.image('tiles', 'extra/tiles.png');

    //this.load.spritesheet('mesar', "extra/mesar.png",100,100);
    //this.load.image('mesar', "extra/mesar.png");

	this.load.tilemap('mapM1', 'images_vegan/mapa1.csv');
      this.load.image('tileset', 'images_vegan/tileset.png');

      this.load.image('lajf', 'images_vegan/srcek.png');

      this.load.spritesheet('mesarM','images_vegan/mesar.png', 24, 26);

      this.load.image('sovraznik', 'images_vegan/enemy.png'); // sovraznik je vegan
      this.load.image('kost', 'images_vegan/kost.png'); // za streljanje

	  //mesar lvl2
	  this.load.tilemap('mapM2', 'images_mesar/lvl2mapMesar.csv');
      this.load.image('tilesetV', 'images_mesar/titlesV.png');


      this.load.tilemap('mapM3', 'images_mesar/mapa1.csv');
      this.load.image('tilesetV', 'images_mesar/tilesetV.png');

      this.load.spritesheet('mesar','images_mesar/butcher.png', 24, 26);


	this.load.image('enemy', 'images_mesar/enemy.png'); // sovraznik je vegan
	this.load.image('kost', 'images_mesar/kost.png'); // za streljanje
	  this.load.tilemap('mapMVlvl1', 'images_vegan/multiVMlvl1.csv');
       this.load.tilemap('mapMVlvl2', 'images_vegan/multiVMlvl2.csv');
	  this.load.image('tilesetMV', 'images_vegan/multiV.png');
      this.load.image('metekM', 'images_mesar/kost.png');
      this.load.image('metekMe', 'images_vegan/kostMet.png');
       this.load.tilemap('mapMVlvl3', 'images_vegan/multiVMlvl3.csv');

      this.load.image('tilesetCTV', 'images_catchTheV/tileCtchVg.png');

      //zvoki
      this.load.audio('meniSong','zvoki/menuSongP.wav');
      this.load.audio('meso','zvoki/mesoP.wav');
      this.load.audio('jabolko','zvoki/jabolkoP.wav');
      this.load.audio('gameSong','zvoki/mainSongP.wav');
      this.load.audio('strel','zvoki/strelP.wav');
      this.load.audio('bossSong','zvoki/bossSongP.wav');
      this.load.audio('konec','zvoki/orgleP.wav');
      this.load.audio('skok','zvoki/skok.wav');
      this.load.audio('power','zvoki/powerUp.wav');
      this.load.audio('helpShopS', 'zvoki/helpShop.wav');

      //shopMain
      this.load.image('shopBck', 'images_shop/shopBck.png');
      this.load.image('izbrV', 'images_shop/izbrana_veganka.png');
      this.load.image('neizM', 'images_shop/neizbran_mesar.png');
      this.load.image('nakBtnS', 'images_shop/nakupuj.png');
      this.load.image('izhBtnS', 'images_shop/izhod.png');
      this.load.image('zivS', 'images_shop/zivljenja.png');
      this.load.image('oroS', 'images_shop/orozja.png');
      this.load.image('oblS', 'images_shop/dodatno.png');
      this.load.image('okoS', 'images_shop/okolje.png');
      this.load.image('izhNak', 'images_shop/close.png');
      this.load.image('naprS', 'images_shop/naprej.png');
      this.load.image('nazS', 'images_shop/nazaj.png');
      this.load.image('kupiBtn', 'images_shop/kupi.png');
      this.load.image('coinS', 'images_shop/coin.png');
      this.load.image('warPD', 'images_shop/premaloDenarja.png');

      //shopZivljenja
      this.load.image('zivSid', 'images_shop/prvastr.png');
      this.load.image('6ziv', 'images_shop/6zivljenj.png');
      this.load.image('7ziv', 'images_shop/7zivljenj.png');
      this.load.image('8ziv', 'images_shop/8zivljenj.png');
      this.load.image('9ziv', 'images_shop/9zivljenj.png');
      this.load.image('10ziv', 'images_shop/10zivljenj.png');

      //shopOrozje
      this.load.image('oroSid', 'images_shop/drugastr.png');
      this.load.image('ananasP', 'images_shop/ananasP.png');
      this.load.image('bananaP', 'images_shop/bananaP.png');
      this.load.image('cesnjeP', 'images_shop/cesnjeP.png');
      this.load.image('grenivkaP', 'images_shop/grenivkaP.png');
      this.load.image('grozdjeP', 'images_shop/grozdjeP.png');
      this.load.image('hruskaP', 'images_shop/hruskaP.png');
      this.load.image('jabolkoP', 'images_shop/jabolkoP.png');
      this.load.image('jagodaP', 'images_shop/jagodaP.png');
      this.load.image('limonaP', 'images_shop/limonaP.png');
      this.load.image('lubenicaP', 'images_shop/lubenicaP.png');

  },

  create:function(){
    this.state.start('MainMenu');
  }

};
