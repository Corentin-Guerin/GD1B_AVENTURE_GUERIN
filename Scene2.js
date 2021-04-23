
var SortiePorte1;
var SortiePorte2;
var SortiePorte3;
var SortiePorte4;
var SortiePorte5;
var SortiePorte6;
var SortiePorte7;
var SortiePorte8;
var entPorte1;
var entPorte2;
var entPorte3;
var entPorte4;
var entPorte5;
var entPorte6;
var entPorte7;
var entPorte8;
var cursors;
var player;
var enemie1;
var enemies1;
var enemie2;
var enemies2;
var invincible = false ;
var compteur = 60;
var life = 3 ;
var lifetext;   
var gameOver;
var shoots;
var shoot;
var arrow = 10 ;
var cursors2;
var direction = 'up';
var itemlife;
var itemarrow;
var itemlifes;
var itemarrows;
var porte;

class Scene2 extends Phaser.Scene{
    constructor(){
      super("playGame");
     
      
    }
  
    preload (){ 


        this.load.image("tiles", "assets/tilesets/tuxmon-sample-32px-extruded.png");
        this.load.tilemapTiledJSON("map", "assets/tilemaps/tuxemon-town.json");

        this.load.atlas("atlas", "assets/atlas/atlas.png", "../assets/atlas/atlas.json");
        //this.load.spritesheet('atlas', 'assets/atlas/Perso/Perso.png', { frameWidth:24, frameHeight: 20,});
        
    }

    create(){
     
        const map = this.make.tilemap({ key: "map" });
        const tileset = map.addTilesetImage("tuxmon-sample-32px-extruded", "tiles");

        const belowLayer = map.createStaticLayer("Below Player", tileset, 0, 0);
        const belowLayer2 = map.createStaticLayer("Below PlayerTwo", tileset, 0, 0);
        const worldLayer = map.createStaticLayer("World", tileset, 0, 0);
        const aboveLayer = map.createStaticLayer("Above Player", tileset, 0, 0);

      
        worldLayer.setCollisionByProperty({ collides: true });
        aboveLayer.setDepth(10);

        
        //spawn joueur
        SortiePorte1 = map.findObject("PortesExt", obj => obj.name === "SortiePorte1");
        SortiePorte2 = map.findObject("PortesExt", obj => obj.name === "SortiePorte2");
        SortiePorte3 = map.findObject("PortesExt", obj => obj.name === "SortiePorte3");
        SortiePorte4 = map.findObject("PortesExt", obj => obj.name === "SortiePorte4");
        SortiePorte5 = map.findObject("PortesExt", obj => obj.name === "SortiePorte5");
        SortiePorte6 = map.findObject("PortesExt", obj => obj.name === "SortiePorte6");
        SortiePorte7 = map.findObject("PortesExt", obj => obj.name === "SortiePorte7");
        SortiePorte8 = map.findObject("PortesExt", obj => obj.name === "SortiePorte8");

        

        const spawnPoint = map.findObject("Objects", obj => obj.name === "Spawn Point");


        if(portesorti == 'SorPorte1'){
            player = this.physics.add
                //.sprite(SortiePorte1.x, SortiePorte1.y, "atlas", "Perso-front")
                .sprite(SortiePorte1.x, SortiePorte1.y,  'player')
               
                .setSize(32, 32,)
                .setOffset(0, 32);
          }
        else if(portesorti == 'SorPorte2'){
            player = this.physics.add
                .sprite(SortiePorte2.x, SortiePorte2.y,  'player')
                .setSize(32, 32,)
                .setOffset(0, 32);
          }
        else if(portesorti == 'SorPorte3'){
            player = this.physics.add
                .sprite(SortiePorte3.x, SortiePorte3.y,  'player')
                .setSize(32, 32,)
                .setOffset(0, 32);
          }
        else if(portesorti == 'SorPorte4'){
            player = this.physics.add
                .sprite(SortiePorte4.x, SortiePorte4.y,  'player')
                .setSize(32, 32,)
                .setOffset(0, 32);
          }
        else if(portesorti == 'SorPorte5'){
            player = this.physics.add
                .sprite(SortiePorte5.x, SortiePorte5.y,  'player')
                .setSize(32, 32,)
                .setOffset(0, 32);
          }
        else if(portesorti == 'SorPorte6'){
            player = this.physics.add
                .sprite(SortiePorte6.x, SortiePorte6.y,  'player')
                .setSize(32, 32,)
                .setOffset(0, 32);
          }
        else if(portesorti == 'SorPorte7'){
            player = this.physics.add
                .sprite(SortiePorte7.x, SortiePorte7.y,  'player')
                .setSize(32, 32,)
                .setOffset(0, 32);
          }
        else if(portesorti == 'SorPorte8'){
            player = this.physics.add
                .sprite(SortiePorte8.x, SortiePorte8.y,  'player')
                .setSize(32, 32,)
                .setOffset(0, 32);
          }
        else {
            player = this.physics.add
                .sprite(spawnPoint.x, spawnPoint.y,  'player')
                .setSize(32, 32,)
                .setOffset(0, 32);
        }


        const camera = this.cameras.main;
        camera.startFollow(player);
        camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
        //camera.setBounds(0, 0, player.widthInPixels, player.heightInPixels);


        //Enemie////////////////////////
        const enemieObjects = map.getObjectLayer('EnemiesVer').objects;
        enemies1 = this.physics.add.group({
        }); 

        for (const enemie1 of enemieObjects) {
        //enemies.create(enemie.x, enemie.y, 'Enemie1')
        enemies1.create(enemie1.x, enemie1.y, 'Enemie1')
            
            .setDepth(1)
            .setScale(1)
            .setSize(32, 32,)
        }

        for (const enemie1 of enemies1.children.entries) {
            enemie1.direction = 'UP';
            enemie1.isDed = false;
        }  

        const enemieObjects2 = map.getObjectLayer('EnemiesHor').objects;
            enemies2 = this.physics.add.group({
            }); 

            for (const enemie2 of enemieObjects2) {
            //enemies.create(enemie.x, enemie.y, 'Enemie1')
            enemies2.create(enemie2.x, enemie2.y, 'Enemie2')
                .setDepth(1)
                .setScale(1)
                .setSize(32, 32,)
            }

        for (const enemie2 of enemies2.children.entries) {
            enemie2.direction = 'RIGHT';
            enemie2.isDed = false;
        }  

        //Porte

        const Porte1 = map.findObject("PortesExt", obj => obj.name === "Porte1");
        entPorte1 = this.physics.add.sprite(Porte1.x, Porte1.y)
        .setSize(32, 32,)
        
        const Porte2 = map.findObject("PortesExt", obj => obj.name === "Porte2");
        entPorte2 = this.physics.add.sprite(Porte2.x, Porte2.y)
        .setSize(32, 32,)
        
        const Porte3 = map.findObject("PortesExt", obj => obj.name === "Porte3");
        entPorte3 = this.physics.add.sprite(Porte3.x, Porte3.y)
        .setSize(32, 32,)

        const Porte4 = map.findObject("PortesExt", obj => obj.name === "Porte4");
        entPorte4= this.physics.add.sprite(Porte4.x, Porte4.y)
        .setSize(32, 32,)

        const Porte5 = map.findObject("PortesExt", obj => obj.name === "Porte5");
        entPorte5 = this.physics.add.sprite(Porte5.x, Porte5.y)
        .setSize(32, 32,)

        const Porte6 = map.findObject("PortesExt", obj => obj.name === "Porte6");
        entPorte6 = this.physics.add.sprite(Porte6.x, Porte6.y)
        .setSize(32, 32,)

        const Porte7 = map.findObject("PortesExt", obj => obj.name === "Porte7");
        entPorte7 = this.physics.add.sprite(Porte7.x, Porte7.y)
        .setSize(32, 32,)

        const Porte8 = map.findObject("PortesExt", obj => obj.name === "Porte8");
        entPorte8 = this.physics.add.sprite(Porte8.x, Porte8.y)
        .setSize(32, 32,)



        this.physics.add.collider(player, entPorte1,EntrerP1, null, this);
        this.physics.add.collider(player, entPorte2,EntrerP2, null, this);
        this.physics.add.collider(player, entPorte3,EntrerP3, null, this);
        this.physics.add.collider(player, entPorte4,EntrerP4, null, this);
        this.physics.add.collider(player, entPorte5,EntrerP5, null, this);
        this.physics.add.collider(player, entPorte6,EntrerP6, null, this);
        this.physics.add.collider(player, entPorte7,EntrerP7, null, this);
        this.physics.add.collider(player, entPorte8,EntrerP8, null, this);




        shoots = this.physics.add.group();
        itemarrows = this.physics.add.group();
        itemlifes = this.physics.add.group();

        this.physics.add.collider(player, worldLayer);
        this.physics.add.collider(player, enemies1);   
        this.physics.add.collider(player, enemies2);      
        this.physics.add.collider(enemies1, worldLayer);
        this.physics.add.collider(enemies2, worldLayer);
        /*this.physics.add.collider(enemies1, enemies2);
        this.physics.add.collider(enemies1, enemies1);
        this.physics.add.collider(enemies2, enemies2);*/

        this.physics.world.addCollider(player, enemies1, hitplayer, null, this);
        this.physics.world.addCollider(player, enemies2, hitplayer, null, this);

        this.physics.add.collider(shoots, worldLayer,hitwalls, null, this);
        this.physics.add.overlap(enemies1, shoots,hitenemies, null, this);
        this.physics.add.overlap(enemies2, shoots,hitenemies, null, this);

        this.physics.add.overlap(player, itemarrows,addarrow, null, this);
        this.physics.add.overlap(player, itemlifes,addlife, null, this);


        cursors = this.input.keyboard.createCursorKeys();
        cursors2 = this.input.keyboard.addKeys('A,Z,S,Q,D,T,space');

        const anims = this.anims;
        anims.create({
            key: "Perso-left-walk",
            frames: anims.generateFrameNames("atlas", {
            prefix: "Perso-left-walk.",
            start: 0,
            end: 3,
            zeroPad: 3
            }),
            frameRate: 10,
            repeat: -1
        });
        anims.create({
            key: "Perso-right-walk",
            frames: anims.generateFrameNames("atlas", {
            prefix: "Perso-right-walk.",
            start: 0,
            end: 3,
            zeroPad: 3
            }),
            frameRate: 10,
            repeat: -1
        });
        anims.create({
            key: "Perso-front-walk",
            frames: anims.generateFrameNames("atlas", {
            prefix: "Perso-front-walk.",
            start: 0,
            end: 3,
            zeroPad: 3
            }),
            frameRate: 10,
            repeat: -1
        });
        anims.create({
            key: "Perso-back-walk",
            frames: anims.generateFrameNames("atlas", {
            prefix: "Perso-back-walk.",
            start: 0,
            end: 3,
            zeroPad: 3
            }),
            frameRate: 10,
            repeat: -1
        });
    

    }

    update (){


        for (const enemie1 of enemies1.children.entries) {
            if (enemie1.body.blocked.up) {
                enemie1.direction = 'UP';
            }
    
            if (enemie1.body.blocked.down) {
                enemie1.direction = 'DOWN';
            }
    
            if (enemie1.direction === 'UP') {
                enemie1.setVelocityY(100);
                enemie1.setFlipX(false);
                
            } else {
                enemie1.setVelocityY(-100);
                enemie1.setFlipX(true);
               
            }
           
        }


        for (const enemie2 of enemies2.children.entries) {
            if (enemie2.body.blocked.right) {
                enemie2.direction = 'LEFT';
            }
    
            if (enemie2.body.blocked.left) {
                enemie2.direction = 'RIGHT';
            }
    
            if (enemie2.direction === 'RIGHT') {
                enemie2.setVelocityX(100);
                enemie2.setFlipX(false);
                
            } else {
                enemie2.setVelocityX(-100);
                enemie2.setFlipX(true);
                
            }
           
        }
        
        this.add.text(16, 30, "Vie: " + life, {font: "18px monospace",fill: "#000000",padding: { x: 20, y: 10 },backgroundColor: "#ffffff"})
            .setDepth(12)
            .setScrollFactor(0);

        this.add.text(16, 75, "Flèches: " + arrow, {font: "18px monospace",fill: "#000000",padding: { x: 20, y: 10 },backgroundColor: "#ffffff"})
            .setDepth(12)
            .setScrollFactor(0);


        if(invincible == true){
            compteur-- ;
            if(compteur == 0){
                compteur = 60;
                player.setTint(0xffffff);
                invincible = false ;
            }
        }
        if (life === 0){
            
            this.physics.pause();
            player.setTint(0xff0000);
            this.add
                .text(500, 400, "Game Over", {
                font: "18px monospace",
                fill: "#000000",
                padding: { x: 50, y: 25 },
                backgroundColor: "#ffffff"
                })
            .setDepth(1)
            .setScrollFactor(0);

            gameOver = true;
        }

        if (gameOver)
        {
            return;
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
            player.anims.play("Perso-left-walk", true);
        } else if (cursors.right.isDown) {
            player.anims.play("Perso-right-walk", true);
        } else if (cursors.up.isDown) {
            player.anims.play("Perso-back-walk", true);
        } else if (cursors.down.isDown) {
            player.anims.play("Perso-front-walk", true);
        } else {
            player.anims.stop();
            // If we were moving, pick and idle frame to use
            /*
            if (prevVelocity.x < 0) player.setTexture("atlas", "Perso-left");
            else if (prevVelocity.x > 0) player.setTexture("atlas", "Perso-right");
            else if (prevVelocity.y < 0) player.setTexture("atlas", "Perso-back");
            else if (prevVelocity.y > 0) player.setTexture("atlas", "Perso-front");
            */
            if (prevVelocity.x < 0) player.setTexture( 'player');
            else if (prevVelocity.x > 0) player.setTexture( 'player');
            else if (prevVelocity.y < 0) player.setTexture( 'player');
            else if (prevVelocity.y > 0) player.setTexture( 'player');
           
        }

        const JustDownA = Phaser.Input.Keyboard.JustDown(cursors2.A)       
    
        if (JustDownA && arrow >0 )
        {
            shoot = shoots.create(player.x,player.y+16,'shoot');
            shoot.body.allowGravity = false;
            shoot.allowGravity = false;
            arrow-- ;
    
            if(direction == 'left'){
                shoot.setVelocityX(550);
                shoot.setFlipX(false);
            }
            else if(direction == 'right') {
                shoot.setVelocityX(-550);
                shoot.setFlipX(false);
            }
            else if(direction == 'down'){
                shoot.setVelocityY(-550);
                shoot.setFlipX(false);
            }
            else if (direction == 'up'){
                shoot.setVelocityY(550);
                shoot.setFlipX(true);
            }
           
        }

    }
    
}
function hitplayer (){
    if (invincible === false)
    {
        invincible = true;
        life--;
        player.setTint(0xff0000);
    }
}

function hitenemies (enemies,shoot)
{   
    enemies.destroy();
    shoot.destroy();
    aleatoire = Math.floor(Math.random() * Math.floor(4));
    if (aleatoire == 1){
        itemlife = itemlifes.create(enemies.x,enemies.y,'itemlife');
    }
    else if (aleatoire == 2){
        itemarrow = itemarrows.create(enemies.x,enemies.y,'itemarrow');
    }
}

function hitwalls (shoot,worldLayer)
{      
    shoot.destroy();
}

function addarrow(player, itemarrow)
{      
    itemarrow.destroy();
    arrow = arrow + 10 ; 
    if(arrow > 99 ){
        arrow = 99 ;
    }
    
}
function addlife(player, itemlife)
{      
    itemlife.destroy();
    if(life < 3 ){
        life = life + 1 ; 
    }
}
function EntrerP1(player,porte1)
{
    this.scene.start("House");
    porte = 'Porte1' ;
}
function EntrerP2(player,porte2)
{
    this.scene.start("House");
    porte = 'Porte2' ;
}
function EntrerP3(player,porte3)
{
    this.scene.start("House");
    porte = 'Porte3' ;
}
function EntrerP4(player,porte4)
{
    this.scene.start("House");
    porte = 'Porte4' ;
}
function EntrerP5(player,porte5)
{
    this.scene.start("House");
    porte = 'Porte5' ;
}
function EntrerP6(player,porte6)
{
    this.scene.start("House");
    porte = 'Porte6' ;
}
function EntrerP7(player,porte7)
{
    this.scene.start("House");
    porte = 'Porte7' ;
}
function EntrerP8(player,porte8)
{
    this.scene.start("House");
    porte = 'Porte8' ;
}