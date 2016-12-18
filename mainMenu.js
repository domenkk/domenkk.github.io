

Game.MainMenu = function(game) {

};

var odVegana = 0;

Game.MainMenu.prototype = {
    create:function(game){

      this.backgroundSprite = this.game.add.tileSprite(0, 0, 800, 600, 'MMozadje');
       music = game.add.audio("meniSong");
       music.play('', 0, 1, true);

        game.add.image(0, 0, 'titleMM');

      var btnvgn =  game.add.button(game.camera.x+300, game.camera.y+160, 'vgn', function(){
        this.state.start('VeganLevel1');
          music.stop();
        }, this, 2, 1, 0);

      var btnmsr =  game.add.button(game.camera.x+400, game.camera.y+160, 'msr', function(){
        this.state.start('VeganBoss');
           music.stop();
        }, this, 2, 1, 0);

      var btnctv =  game.add.button(game.camera.x+280, game.camera.y+260, 'ctv', function(){
        this.state.start('CTVlevel1'); // sem pride Catch The Vegan
           music.stop();
        }, this, 2, 1, 0);

      var btn1v1 =  game.add.button(game.camera.x+275, game.camera.y+340, '1vs1', function(){
        this.state.start('MultiVMlvl3'); // to treba naredit
           music.stop();
        }, this, 2, 1, 0);

      var btnhlp =  game.add.button(game.camera.x+278, game.camera.y+480, 'pomoc', function(){
        this.state.start('Help');
        music.stop();
        }, this, 2, 1, 0);

      var btnshp =  game.add.button(game.camera.x+400, game.camera.y+480, 'shopBtn', function(){
        this.state.start('Shop');
        music.stop();
        }, this, 2, 1, 0);
    },

    update:function(game){

    },
}
