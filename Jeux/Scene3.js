var EntrerPorte1;
var EntrerPorte2;
var EntrerPorte3;
var EntrerPorte4;
var EntrerPorte5;
var EntrerPorte6;
var EntrerPorte7;
var EntrerPorte8;
var sorPorte1;
var sorPorte2;
var sorPorte3;
var sorPorte4;
var sorPorte5;
var sorPorte6;
var sorPorte7;
var sorPorte8;
var portesorti;
var itemcle;




class Scene3 extends Phaser.Scene {
    constructor() {
      super("House");
      
    }
    preload (){ 

      this.load.image("tiles", "assets/tilesets/tuxmon-sample-32px-extruded.png");
      this.load.tilemapTiledJSON("map", "assets/tilemaps/tuxemon-town.json");

      this.load.spritesheet('player', 'assets/Perso.png', { frameWidth:32, frameHeight: 64,});
      this.load.spritesheet('cle', 'assets/Cle.png', { frameWidth:32, frameHeight: 64,});
      
      this.load.image('Vie0', 'assets/Vie0.png');
      this.load.image('Vie1', 'assets/Vie1.png');
      this.load.image('Vie2', 'assets/Vie2.png');
      this.load.image('Vie3', 'assets/Vie3.png');
    
    }

    create(){

      const map = this.make.tilemap({ key: "map" });
      const tileset = map.addTilesetImage("tuxmon-sample-32px-extruded", "tiles");
      
      const wallHouse = map.createLayer("Wall", tileset, 0, 0) .setDepth(5);

      map.createLayer("BelowHouse", tileset, 0, 0);
    

      wallHouse.setCollisionByProperty({ collides: true });


      EntrerPorte1 = map.findObject("PorteInt", obj => obj.name === "EntrerPorte1");
      EntrerPorte2 = map.findObject("PorteInt", obj => obj.name === "EntrerPorte2");
      EntrerPorte3 = map.findObject("PorteInt", obj => obj.name === "EntrerPorte3");
      EntrerPorte4 = map.findObject("PorteInt", obj => obj.name === "EntrerPorte4");
      EntrerPorte5 = map.findObject("PorteInt", obj => obj.name === "EntrerPorte5");
      EntrerPorte6 = map.findObject("PorteInt", obj => obj.name === "EntrerPorte6");
      EntrerPorte7 = map.findObject("PorteInt", obj => obj.name === "EntrerPorte7");
      EntrerPorte8 = map.findObject("PorteInt", obj => obj.name === "EntrerPorte8");

      
      if(porte == 'Porte1'){
        player = this.physics.add
        .sprite(EntrerPorte1.x, EntrerPorte1.y, 'player')
        .setDepth(6)
        .setSize(32, 32,)
        .setOffset(0, 32);
      }
      if(porte == 'Porte2'){
        player = this.physics.add.sprite(EntrerPorte2.x,EntrerPorte2.y, 'player')
        .setDepth(6)
        .setSize(32, 32,)
        .setOffset(0, 32);
      } 
      if(porte == 'Porte3'){
        player = this.physics.add.sprite(EntrerPorte3.x,EntrerPorte3.y, 'player')
        .setDepth(6)
        .setSize(32, 32,)
        .setOffset(0, 32);
      } 
      if(porte == 'Porte4'){
        player = this.physics.add.sprite(EntrerPorte4.x,EntrerPorte4.y, 'player')
        .setDepth(6)
        .setSize(32, 32,)
        .setOffset(0, 32);
      } 
      if(porte == 'Porte5'){
        player = this.physics.add.sprite(EntrerPorte5.x,EntrerPorte5.y, 'player')
        .setDepth(6)
        .setSize(32, 32,)
        .setOffset(0, 32);
      } 
      if(porte == 'Porte6'){
        player = this.physics.add.sprite(EntrerPorte6.x,EntrerPorte6.y, 'player')
        .setDepth(6)
        .setSize(32, 32,)
        .setOffset(0, 32);
      } 
      if(porte == 'Porte7'){
        player = this.physics.add.sprite(EntrerPorte7.x,EntrerPorte7.y, 'player')
        .setDepth(6)
        .setSize(32, 32,)
        .setOffset(0, 32);
      } 
      if(porte == 'Porte8'){
        player = this.physics.add.sprite(EntrerPorte8.x,EntrerPorte8.y, 'player')
        .setDepth(6)
        .setSize(32, 32,)
        .setOffset(0, 32);
      } 
      
      const camera = this.cameras.main;
      camera.startFollow(player);
      camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
      //camera.setBounds(0, 0, player.widthInPixels, player.heightInPixels);
      
      //porte sorti
      const sortiePorte1 = map.findObject("PorteInt", obj => obj.name === "IntPorte1");
        sorPorte1 = this.physics.add.sprite(sortiePorte1.x, sortiePorte1.y)
        .setSize(32, 32,)
      
      const sortiePorte2 = map.findObject("PorteInt", obj => obj.name === "IntPorte2");
        sorPorte2 = this.physics.add.sprite(sortiePorte2.x, sortiePorte2.y)
        .setSize(32, 32,)
      
      const sortiePorte3 = map.findObject("PorteInt", obj => obj.name === "IntPorte3");
        sorPorte3 = this.physics.add.sprite(sortiePorte3.x, sortiePorte3.y)
        .setSize(32, 32,)
      
      const sortiePorte4 = map.findObject("PorteInt", obj => obj.name === "IntPorte4");
        sorPorte4 = this.physics.add.sprite(sortiePorte4.x, sortiePorte4.y)
        .setSize(32, 32,)

      const sortiePorte5 = map.findObject("PorteInt", obj => obj.name === "IntPorte5");
        sorPorte5 = this.physics.add.sprite(sortiePorte5.x, sortiePorte5.y)
        .setSize(32, 32,)

      const sortiePorte6 = map.findObject("PorteInt", obj => obj.name === "IntPorte6");
        sorPorte6 = this.physics.add.sprite(sortiePorte6.x, sortiePorte6.y)
        .setSize(32, 32,)

      const sortiePorte7 = map.findObject("PorteInt", obj => obj.name === "IntPorte7");
        sorPorte7 = this.physics.add.sprite(sortiePorte7.x, sortiePorte7.y)
        .setSize(32, 32,)
      
      const sortiePorte8 = map.findObject("PorteInt", obj => obj.name === "IntPorte8");
        sorPorte8 = this.physics.add.sprite(sortiePorte8.x, sortiePorte8.y)
        .setSize(32, 32,)


      //clé

      if(getcle === false){
          const cle = map.findObject("Objects", obj => obj.name === "cle");
          itemcle = this.physics.add.sprite(cle.x, cle.y,"cle")
          .setSize(32, 32,)

      }
      
      
    
      

      this.physics.add.collider(player, itemcle,takecle, null, this);


      this.physics.add.overlap(player, sorPorte1,SortiP1, null, this);
      this.physics.add.overlap(player, sorPorte2,SortiP2, null, this);
      this.physics.add.overlap(player, sorPorte3,SortiP3, null, this);
      this.physics.add.overlap(player, sorPorte4,SortiP4, null, this);
      this.physics.add.overlap(player, sorPorte5,SortiP5, null, this);
      this.physics.add.overlap(player, sorPorte6,SortiP6, null, this);
      this.physics.add.overlap(player, sorPorte7,SortiP7, null, this);
      this.physics.add.overlap(player, sorPorte8,SortiP8, null, this);


      this.physics.add.collider(player, wallHouse);

      cursors = this.input.keyboard.createCursorKeys();

      if (this.input.gamepad.total === 0){
        this.input.gamepad.once('connected', function (pad, button, index) {
            paddle = pad;
            padConnected = true;
        }); 
      }
      else {
        paddle = this.input.gamepad.pad1;
      }

      const anims = this.anims;

        anims.create({
            key: 'down',
            frames: this.anims.generateFrameNumbers('player', { start: 0, end: 4 }),
            frameRate: 5,
        });

        anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('player', { start: 5, end: 8 }),
            frameRate: 5,
        });

        anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('player', { start: 9, end: 12 }),
            frameRate: 5,
        });

        anims.create({
            key: 'up',
            frames: this.anims.generateFrameNumbers('player', { start: 13, end: 16 }),
            frameRate: 5,
        });
    }

    update (){
      
     /* this.add.text(16, 30, "Vie: " + life, {font: "18px monospace",fill: "#000000",padding: { x: 20, y: 10 },backgroundColor: "#ffffff"})
            .setDepth(12)
            .setScrollFactor(0);*/

      this.add.text(16, 75, "Flèches: " + arrow, {font: "18px monospace",fill: "#000000",padding: { x: 20, y: 10 },backgroundColor: "#ffffff"})
            .setDepth(12)
            .setScrollFactor(0);
     
      if(getepee === true){
        this.add.text(16, 120, "Epée", {font: "18px monospace",fill: "#000000",padding: { x: 10, y: 5 },backgroundColor: "#ffffff"})
          .setDepth(12)
          .setScrollFactor(0);
      } 
      
      if(getarc === true){
        this.add.text(80, 120, "Arc", {font: "18px monospace",fill: "#000000",padding: { x: 10, y: 5 },backgroundColor: "#ffffff"})
          .setDepth(12)
          .setScrollFactor(0);
      }
      if(getcle === true){
        this.add.text(135, 120, "Cle", {font: "18px monospace",fill: "#000000",padding: { x: 10, y: 5 },backgroundColor: "#ffffff"})
          .setDepth(12)
          .setScrollFactor(0);
      }


      Vie3 = this.add.image(75, 35,'Vie3') 
      .setDepth(0)
      .setScrollFactor(0);

      Vie2 =this.add.image(75, 35,'Vie2') 
          .setDepth(0)
          .setScrollFactor(0);

      Vie1 =this.add.image(75, 35,'Vie1') 
          .setDepth(0)
          .setScrollFactor(0);
      
      Vie0 =this.add.image(75, 35,'Vie0') 
          .setDepth(0)
          .setScrollFactor(0);


      if(life === 3)
      {
          Vie3.setDepth(1);
          Vie2.setDepth(0);
          Vie1.setDepth(0);
          Vie0.setDepth(0);
      }
      
      if (life === 2){

          Vie3.setDepth(0);
          Vie2.setDepth(1);
          Vie1.setDepth(0);
          Vie0.setDepth(0);
      }
      
      if(life === 1){
      
          Vie3.setDepth(0);
          Vie2.setDepth(0);
          Vie1.setDepth(1);
          Vie0.setDepth(0);
      
      }




      const speed = 175;
      const prevVelocity = player.body.velocity.clone();

      //mouvement si rien n'est affecter
      player.body.setVelocity(0);

      // Horizontal movement
      if (cursors.left.isDown) {
          player.body.setVelocityX(-speed);
          direction = 'right' ;
      } else if (cursors.right.isDown) {
          player.body.setVelocityX(speed);
          direction = 'left' ;
      }

      // Vertical movement
      if (cursors.up.isDown) {
          player.body.setVelocityY(-speed);
          direction = 'down' ;
      } else if (cursors.down.isDown) {
          player.body.setVelocityY(speed);
          direction = 'up' ;
      }

      // Normalize and scale the velocity so that player can't move faster along a diagonal
      player.body.velocity.normalize().scale(speed);

      // Update the animation last and give left/right animations precedence over up/down animations
      if (cursors.left.isDown) {
        player.anims.play("left", true);
      } else if (cursors.right.isDown) {
        player.anims.play("right", true);
      } else if (cursors.up.isDown) {
        player.anims.play("up", true);
      } else if (cursors.down.isDown) {
        player.anims.play("down", true);
      } else {
        player.anims.stop();
        // If we were moving, pick and idle frame to use
        
        if (prevVelocity.x < 0) player.setTexture('player');
        else if (prevVelocity.x > 0) player.setTexture('player');
        else if (prevVelocity.y < 0) player.setTexture('player');
        else if (prevVelocity.y > 0) player.setTexture('player');
      }  

      if(padConnected){

        if (paddle.left) {
            player.body.setVelocityX(-speed);
            direction = 'right' ;
        } else if (paddle.right) {
            player.body.setVelocityX(speed);
            direction = 'left' ;
        }

        // Vertical movement
        if (paddle.up) {
            player.body.setVelocityY(-speed);
            direction = 'down' ;
        } else if (paddle.down) {
            player.body.setVelocityY(speed);
            direction = 'up' ;
        }
      }
    }
}
function SortiP1(player,porte)
{
    this.scene.start("playGame");
    portesorti = 'SorPorte1' ;
}
function SortiP2(player,porte)
{
    this.scene.start("playGame");
    portesorti = 'SorPorte2' ;
}
function SortiP3(player,porte)
{
    this.scene.start("playGame");
    portesorti = 'SorPorte3' ;
}
function SortiP4(player,porte)
{
    this.scene.start("playGame");
    portesorti = 'SorPorte4' ;
}
function SortiP5(player,porte)
{
    this.scene.start("playGame");
    portesorti = 'SorPorte5' ;
}
function SortiP6(player,porte)
{
    this.scene.start("playGame");
    portesorti = 'SorPorte6' ;
}
function SortiP7(player,porte)
{
    this.scene.start("playGame");
    portesorti = 'SorPorte7' ;
}
function SortiP8(player,porte)
{
    this.scene.start("playGame");
    portesorti = 'SorPorte8' ;
}
function takecle(player,itemcle)
{
    itemcle.destroy();
    getcle = true ;

    const textcle = this.add.text(300, 60, "Vous avez trouvé : Clé  ->  *** Peut-etre utilisé pour ouvrir une serrure  *** " , {font: "18px monospace",fill: "#000000",padding: { x: 20, y: 10 },backgroundColor: "#ffffff"})
    .setDepth(12)
    .setScrollFactor(0);
    
    setTimeout(function(){textcle.destroy()}, 2000);
}