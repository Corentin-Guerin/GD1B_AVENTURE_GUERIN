
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
var compteur = 60 ;
var life = 3 ;
var lifetext;   
var gameOver;
var shoots;
var shoot;
var arrow = 0 ;
var cursors2;
var direction = 'up';
var itemlife;
var itemarrow;
var itemlifes;
var itemarrows;
var porte;
var getcle = false ;
var itemarc;
var getarc = false ;
var itemepee;
var getepee = false;
var coupepee;
var coups;
var charge = 0 ;
var sprite;

var gamepad;
var paddle;
var padConnected;
var pad; 

var Vie3;
var Vie2;
var Vie0;
var Vie1;



class Scene2 extends Phaser.Scene{
    constructor(){
      super("playGame");
      
    }
  
    preload (){ 


        this.load.image("tiles", "assets/tilesets/tuxmon-sample-32px-extruded.png");
        this.load.tilemapTiledJSON("map", "assets/tilemaps/tuxemon-town.json");

        this.load.spritesheet("player", 'assets/Perso.png', { frameWidth:32, frameHeight: 64,});
        this.load.spritesheet("Arc", 'assets/Arc.png', { frameWidth:32, frameHeight: 32,});
        this.load.spritesheet("Epee", 'assets/Epee.png', { frameWidth:32, frameHeight: 32,});
        this.load.spritesheet("CoupEpee", 'assets/CoupEpee.png', { frameWidth:32, frameHeight: 32,});
        this.load.spritesheet("shoot", 'assets/Fleche.png', { frameWidth:32, frameHeight: 32,});
        this.load.spritesheet("shoot2", 'assets/Fleche2.png', { frameWidth:32, frameHeight: 32,});
        this.load.spritesheet("Enemie1", 'assets/enemie1.png', { frameWidth:32, frameHeight: 64,});
        this.load.spritesheet("Enemie2", 'assets/enemie2.png', { frameWidth:64, frameHeight: 32,});
        this.load.spritesheet("Persoup", 'assets/Persoup.png', { frameWidth:32, frameHeight: 64,});
        this.load.spritesheet("Persodown", 'assets/Persodown.png', { frameWidth:32, frameHeight: 64,});
        this.load.spritesheet("Persoleft", 'assets/Persoleft.png', { frameWidth:32, frameHeight: 64,});
        this.load.spritesheet("Persoright", 'assets/Persoright.png', { frameWidth:32, frameHeight: 64,});
        
        this.load.spritesheet("itemlife", 'assets/itemlife.png', { frameWidth:16, frameHeight: 16,});
        this.load.spritesheet("itemarrow", 'assets/itemarrow.png', { frameWidth:32, frameHeight: 32,});

        this.load.image('Vie0', 'assets/Vie0.png');
        this.load.image('Vie1', 'assets/Vie1.png');
        this.load.image('Vie2', 'assets/Vie2.png');
        this.load.image('Vie3', 'assets/Vie3.png');
    }

    create(){
     
        const map = this.make.tilemap({ key: "map" });
        const tileset = map.addTilesetImage("tuxmon-sample-32px-extruded", "tiles");

        const belowLayer = map.createLayer("Below Player", tileset, 0, 0);
        const belowLayer2 = map.createLayer("Below PlayerTwo", tileset, 0, 0);
        const worldLayer = map.createLayer("World", tileset, 0, 0);
        const aboveLayer = map.createLayer("Above Player", tileset, 0, 0);

      
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
                .sprite(SortiePorte1.x, SortiePorte1.y,  'player')
                .setDepth(1)
                .setSize(32, 32,)
                .setOffset(0, 32);
          }
        else if(portesorti == 'SorPorte2'){
            player = this.physics.add
                .sprite(SortiePorte2.x, SortiePorte2.y,  'player')
                .setDepth(1)
                .setSize(32, 32,)
                .setOffset(0, 32);
          }
        else if(portesorti == 'SorPorte3'){
            player = this.physics.add
                .sprite(SortiePorte3.x, SortiePorte3.y,  'player')
                .setDepth(1)
                .setSize(32, 32,)
                .setOffset(0, 32);
          }
        else if(portesorti == 'SorPorte4'){
            player = this.physics.add
                .sprite(SortiePorte4.x, SortiePorte4.y,  'player')
                .setDepth(1)
                .setSize(32, 32,)
                .setOffset(0, 32);
          }
        else if(portesorti == 'SorPorte5'){
            player = this.physics.add
                .sprite(SortiePorte5.x, SortiePorte5.y,  'player')
                .setDepth(1)
                .setSize(32, 32,)
                .setOffset(0, 32);
          }
        else if(portesorti == 'SorPorte6'){
            player = this.physics.add
                .sprite(SortiePorte6.x, SortiePorte6.y,  'player')
                .setDepth(1)
                .setSize(32, 32,)
                .setOffset(0, 32);
          }
        else if(portesorti == 'SorPorte7'){
            player = this.physics.add
                .sprite(SortiePorte7.x, SortiePorte7.y,  'player')
                .setDepth(1)
                .setSize(32, 32,)
                .setOffset(0, 32);
          }
        else if(portesorti == 'SorPorte8'){
            player = this.physics.add
                .sprite(SortiePorte8.x, SortiePorte8.y,  'player')
                .setDepth(1)
                .setSize(32, 32,)
                .setOffset(0, 32);
          }
        else {
            player = this.physics.add
                .sprite(spawnPoint.x, spawnPoint.y,  'player')
                .setDepth(1)
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



        this.physics.add.overlap(player, entPorte1,EntrerP1, null, this);
        this.physics.add.overlap(player, entPorte2,EntrerP2, null, this);
        this.physics.add.overlap(player, entPorte3,EntrerP3, null, this);
        this.physics.add.overlap(player, entPorte4,EntrerP4, null, this);
        this.physics.add.overlap(player, entPorte5,EntrerP5, null, this);
        this.physics.add.overlap(player, entPorte6,EntrerP6, null, this);
        this.physics.add.overlap(player, entPorte7,EntrerP7, null, this);
        this.physics.add.overlap(player, entPorte8,EntrerP8, null, this);



        if(getarc === false){
            const creatarc = map.findObject("Objects", obj => obj.name === "Arc");
            itemarc = this.physics.add.sprite(creatarc.x, creatarc.y,"Arc")
            .setSize(32, 32,)
  
        }
        if(getepee === false){
            const createpee = map.findObject("Objects", obj => obj.name === "Epee");
            itemepee = this.physics.add.sprite(createpee.x, createpee.y,"Epee")
            .setSize(32, 32,)
  
        }

        this.physics.add.collider(player, itemarc,takearc, null, this);
        this.physics.add.collider(player, itemepee,takeepee, null, this);

        shoots = this.physics.add.group();
        coups = this.physics.add.group();
        itemarrows = this.physics.add.group();
        itemlifes = this.physics.add.group();

        this.physics.add.collider(player, worldLayer);
        this.physics.add.collider(enemies1, worldLayer);
        this.physics.add.collider(enemies2, worldLayer);
        /*this.physics.add.collider(enemies1, enemies2);
        this.physics.add.collider(enemies1, enemies1);
        this.physics.add.collider(enemies2, enemies2);*/

        this.physics.world.addCollider(player, enemies1, hitplayer, null, this);
        this.physics.world.addCollider(player, enemies2, hitplayer, null, this);
        this.physics.world.addCollider(enemies1, player, hitplayer, null, this);
        this.physics.world.addCollider(enemies2, player, hitplayer, null, this);

        this.physics.add.collider(shoots, worldLayer,hitwalls, null, this);
        this.physics.add.overlap(enemies1, shoots,hitenemies, null, this);
        this.physics.add.overlap(enemies2, shoots,hitenemies, null, this);

      
        this.physics.add.overlap(enemies1, coups,hitenemies, null, this);
        this.physics.add.overlap(enemies2, coups,hitenemies, null, this);

        this.physics.add.overlap(player, itemarrows,addarrow, null, this);
        this.physics.add.overlap(player, itemlifes,addlife, null, this);


        cursors = this.input.keyboard.createCursorKeys();
        cursors2 = this.input.keyboard.addKeys('A,Z,S,Q,D,T,space');
        
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
            frames: this.anims.generateFrameNumbers('player', { start: 0, end: 3 }),
            frameRate: 5,
        });

        anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('player', { start: 4, end: 7 }),
            frameRate: 5,
        });

        anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('player', { start: 8, end: 11 }),
            frameRate: 5,
        });

        anims.create({
            key: 'up',
            frames: this.anims.generateFrameNumbers('player', { start: 12, end: 15 }),
            frameRate: 5,
        });

        anims.create({
            key: 'enemiedown',
            frames: this.anims.generateFrameNumbers('Enemie1', { start: 0, end: 3 }),
            frameRate: 5,
        });

        anims.create({
            key: 'enemieup',
            frames: this.anims.generateFrameNumbers('Enemie1', { start: 4, end: 7 }),
            frameRate: 5,
        });

        anims.create({
            key: 'enemie2',
            frames: this.anims.generateFrameNumbers('Enemie2', { start: 0, end: 3 }),
            frameRate: 5,
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
                enemie1.anims.play("enemieup", true);
                
            } else {
                enemie1.setVelocityY(-100);
                enemie1.setFlipX(true);
                
                enemie1.anims.play("enemiedown", true);
               
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
                enemie2.setFlipX(true);
                enemie2.anims.play("enemie2", true);
                
            } else {
                enemie2.setVelocityX(-100);
                enemie2.setFlipX(false);
                enemie2.anims.play("enemie2", true);
                
            }
        }
        
        //info inventaire

      /*  this.add.text(16, 30, "Vie: " + life, {font: "18px monospace",fill: "#000000",padding: { x: 20, y: 10 },backgroundColor: "#ffffff"})
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

        //frame invulnérable
        if(invincible == true){
            compteur-- ;
            if(compteur == 0){
                compteur = 60;
                player.setTint(0xffffff);
                invincible = false ;
            }
        }
        
        //gestion vie

        Vie3 = this.add.image(75, 35,'Vie3') 
        .setDepth(0)
        .setScrollFactor(0);

        Vie2 = this.add.image(75, 35,'Vie2') 
            .setDepth(0)
            .setScrollFactor(0);

        Vie1 = this.add.image(75, 35,'Vie1') 
            .setDepth(0)
            .setScrollFactor(0);
        
        Vie0 = this.add.image(75, 35,'Vie0') 
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



        if (life === 0){
            
            Vie3.setDepth(0);
            Vie2.setDepth(0);
            Vie1.setDepth(0);
            Vie0.setDepth(1);

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


        //fin du jeu
        if (gameOver)
        {
            return;
        }

        //cd attaque 
        if(charge != 0){
            charge -- ;
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
            
            if (prevVelocity.x < 0) player.setTexture('Persoleft');
            else if (prevVelocity.x > 0) player.setTexture('Persoright');
            else if (prevVelocity.y < 0) player.setTexture('Persoup');
            else if (prevVelocity.y > 0) player.setTexture('Persodown');
          
           
        }  
        

        const JustDownA = Phaser.Input.Keyboard.JustDown(cursors2.A)       
    
        if (JustDownA && arrow >0 && getarc===true && charge === 0 )
        {
            arrow-- ;
            charge = 30;
    
            if(direction == 'left'){
                shoot = shoots.create(player.x,player.y+16,'shoot');
                shoot.body.allowGravity = false;
                shoot.allowGravity = false;
                
                shoot.setFlipX(false);
                shoot.setVelocityX(550);
                
            }
            else if(direction == 'right') {
                shoot = shoots.create(player.x,player.y+16,'shoot');
                shoot.body.allowGravity = false;
                shoot.allowGravity = false;

                shoot.setFlipX(true);
                shoot.setVelocityX(-550);
                
            }
            else if(direction == 'down'){
                shoot = shoots.create(player.x,player.y+16,'shoot2');
                shoot.body.allowGravity = false;
                shoot.allowGravity = false;

                shoot.setFlipY(false);
                shoot.setVelocityY(-550);
                
            }
            else if (direction == 'up'){
                shoot = shoots.create(player.x,player.y+16,'shoot2');
                shoot.body.allowGravity = false;
                shoot.allowGravity = false;

                shoot.setFlipY(true);
                shoot.setVelocityY(550);
            
            }
        }

        const JustDownspace = Phaser.Input.Keyboard.JustDown(cursors2.space)       
        
        if (JustDownspace && getepee===true && charge === 0  )
        {
            
    
            if(direction == 'left'){
                coupepee = coups.create(player.x+30,player.y+16,'CoupEpee');
                coupepee.setFlipX(false);
                coupepee.body.allowGravity = false;
                coupepee.allowGravity = false;
                setTimeout(function(){coupepee.destroy()}, 100);
                charge = 35;
            }
            else if(direction == 'right') {
                coupepee = coups.create(player.x-30,player.y+16,'CoupEpee');
                coupepee.setFlipX(true);
                coupepee.body.allowGravity = false;
                coupepee.allowGravity = false;
                setTimeout(function(){coupepee.destroy()}, 100);
                charge = 35;
            }
            else if(direction == 'down'){
                coupepee = coups.create(player.x,player.y-20,'CoupEpee');
                coupepee.setRotation(-90);
                coupepee.body.allowGravity = false;
                coupepee.allowGravity = false;
                setTimeout(function(){coupepee.destroy()}, 100);
                charge = 35;
            }
            else if (direction == 'up'){
                coupepee = coups.create(player.x,player.y+50,'CoupEpee');
                coupepee.setRotation(90);
                coupepee.body.allowGravity = false;
                coupepee.allowGravity = false;
                setTimeout(function(){coupepee.destroy()}, 100);
                charge = 35;
            }
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
                
                if (prevVelocity.x < 0) player.setTexture('Persoleft');
                else if (prevVelocity.x > 0) player.setTexture('Persoright');
                else if (prevVelocity.y < 0) player.setTexture('Persoup');
                else if (prevVelocity.y > 0) player.setTexture('Persodown');
              
               
            }  
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
            
         
            
            if (paddle.B && arrow >0 && getarc===true && charge === 0 )
            {
                arrow-- ;
                charge = 30;
        
                if(direction == 'left'){
                    shoot = shoots.create(player.x,player.y+16,'shoot');
                    shoot.body.allowGravity = false;
                    shoot.allowGravity = false;
                    
                    shoot.setFlipX(false);
                    shoot.setVelocityX(550);
                    
                }
                else if(direction == 'right') {
                    shoot = shoots.create(player.x,player.y+16,'shoot');
                    shoot.body.allowGravity = false;
                    shoot.allowGravity = false;

                    shoot.setFlipX(true);
                    shoot.setVelocityX(-550);
                    
                }
                else if(direction == 'down'){
                    shoot = shoots.create(player.x,player.y+16,'shoot2');
                    shoot.body.allowGravity = false;
                    shoot.allowGravity = false;

                    shoot.setFlipY(false);
                    shoot.setVelocityY(-550);
                    
                }
                else if (direction == 'up'){
                    shoot = shoots.create(player.x,player.y+16,'shoot2');
                    shoot.body.allowGravity = false;
                    shoot.allowGravity = false;

                    shoot.setFlipY(true);
                    shoot.setVelocityY(550);
                }
            }

            if (paddle.A && getepee===true && charge === 0  )
            {
                if(direction == 'left'){
                    coupepee = coups.create(player.x+30,player.y+16,'epee');
                    coupepee.setFlipX(false);
                    coupepee.body.allowGravity = false;
                    coupepee.allowGravity = false;
                    setTimeout(function(){coupepee.destroy()}, 100);
                    charge = 35;
                }
                else if(direction == 'right') {
                    coupepee = coups.create(player.x-30,player.y+16,'epee');
                    coupepee.body.allowGravity = false;
                    coupepee.allowGravity = false;
                    setTimeout(function(){coupepee.destroy()}, 100);
                    charge = 35;
                }
                else if(direction == 'down'){
                    coupepee = coups.create(player.x,player.y-20,'epee').setDepth(-1);
                    coupepee.body.allowGravity = false;
                    coupepee.allowGravity = false;
                    setTimeout(function(){coupepee.destroy()}, 100);
                    charge = 35;
                }
                else if (direction == 'up'){
                    coupepee = coups.create(player.x,player.y+50,'epee');
                    coupepee.setRotation(90);
                    coupepee.body.allowGravity = false;
                    coupepee.allowGravity = false;
                    setTimeout(function(){coupepee.destroy()}, 100);
                    charge = 35;
                }
                if (paddle.left) {
                    player.anims.play("left", true);
                } else if (paddle.right) {
                    player.anims.play("right", true);
                } else if (paddle.up) {
                    player.anims.play("up", true);
                } else if (paddle.down) {
                    player.anims.play("down", true);
                } else {
                    player.anims.stop();
                    // If we were moving, pick and idle frame to use
                    
                    if (prevVelocity.x < 0) player.setTexture('player');
                    else if (prevVelocity.x > 0) player.setTexture('player');
                    else if (prevVelocity.y < 0) player.setTexture('player');
                    else if (prevVelocity.y > 0) player.setTexture('player');
                
                
                }  
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
    this.cameras.main.fade(250, 0, 0, 0);
}
function EntrerP2(player,porte2)
{
    this.scene.start("House");
    porte = 'Porte2' ;
}
function EntrerP3(player,porte3)
{
    if (getcle == true){
        this.scene.start("House");
        porte = 'Porte3' ;
    }
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

function takearc(player,itemarc)
{
    itemarc.destroy();
    arrow = arrow +10 ;
    getarc = true ;
    
    const textarc = this.add.text(400, 60, "Vous avez trouvé : Arc -> ** Press A / O pour utiliser *** " , {font: "18px monospace",fill: "#000000",padding: { x: 20, y: 10 },backgroundColor: "#ffffff"})
    .setDepth(12)
    .setScrollFactor(0);
    
    setTimeout(function(){textarc.destroy()}, 2000);

}
function takeepee(player,itemepee)
{
    itemepee.destroy();
    getepee = true ;

    const textepee = this.add.text(400, 60, "Vous avez trouvé : Epee -> ** Press ESPACE / X  pour utiliser ** " , {font: "18px monospace",fill: "#000000",padding: { x: 20, y: 10 },backgroundColor: "#ffffff"})
            .setDepth(12)
            .setScrollFactor(0);
    
    setTimeout(function(){textepee.destroy()}, 2000);

}