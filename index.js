var w = window.innerWidth;
var h = window.innerHeight;
var bgColor = "#2ECCFA"; 
var game = new Phaser.Game(w,h,Phaser.CANVAS,'canvas',{preload:preload,create:create,update:update,render:render});
var orange = "#FF7519";
var debug=false;
var hero;
var cursors;
var tree1;
var plant1;
var ct1,ct2,ct3,ct4;
var bulletTime = 0;
var ctext,pythontext,javatext,jstext;
var birds;
var bubble;
var style_white = { font:"24px Roboto", fill:"#FFF",align:"center" };
var style_roboto = { font:"24px Roboto", fill:"#FFF",align:"center" }
var shakti;
var shakti_cup;
var shakti2;
var football;
var text;
var medium_url="https://akash-kumar916.medium.com/";
var hackerearth_url="https://www.hackerearth.com/@akash1043";
var leetcode_url="https://leetcode.com/akash_kumar916/";
var github_url="https://github.com/akashkumar916";
var linkedin_url="https://linkedin.com/in/akash-kumar916";
var resume_url="https://drive.google.com/file/d/15bNhr7I1Xr4aod0F-VX3pX28lyRLJB6i/view?usp=sharing";
var website_url="https://akash-kumar916.medium.com/";
var gmail_url="";
var inst_text;
var bug;
var bug_tween;
var bug_killed = false;
var cloud_moving1;
var cloud_moving2;
var base5 = 15100;
var base6 = 17500+1400;
var base7 =18100+1400;
var platformLength = base7+2000;
var cupTweenDone=false;
var cupTweenSecondDone=false;
var delay =0;
var starting_point=100;
var back_btn;
var touch;
var direction = "left";
var explosion_count = 0;
var max_explosion_count=5;
//preload
function preload(){
	 
	text = game.add.text(w/2, h/2, "Loading...",{ font:"80px Roboto",fill: '#ffffff' });
	text.anchor.setTo(0.5,0.5);
	//intro
	game.load.image('intro','assets/img/intro.png');
	game.load.image('download','assets/download2.png');
	game.load.image('publication','assets/publication.png');
	game.load.image('ground','assets/ground.png');
	game.load.image('back','assets/back64.png');
	game.load.image('grass','assets/grass.png');
	game.load.image('brick','assets/brick.png');
	game.load.image('tree1','assets/tree-bright-e.png');
	game.load.image('plant1','assets/plant-lotus.png');
	game.load.image('cloud','assets/cloud.png');
	game.load.image('birds','assets/birds.png');
	game.load.image('school','assets/img/school.png');
	game.load.image('building','assets/building.png');
	game.load.image('florida','assets/img/florida.png');
	game.load.image('hometown','assets/img/hometown.png');
	game.load.image('hill','assets/mountain.png');
	game.load.image('treeS','assets/tree-dark-d.png');
	game.load.atlasJSONHash('akash','assets/akash_char.png','assets/hero_running.json');
	game.load.atlasJSONHash('waterAtlas','assets/water_corrected.png','assets/water_running.json');
	game.load.atlasJSONHash('waterAtlas2','assets/water_orange.png','assets/water_running.json');
	game.load.image('lpu','assets/img/lpu.png');
	game.load.image('level','assets/sign.png');
	game.load.image('cocotree','assets/coco.png');
	game.load.image('python','assets/code/python.png');
	game.load.image('c++','assets/code/c++.png');
	game.load.image('js','assets/js.png');
	game.load.image('java','assets/code/java.png');
	game.load.image('night','assets/night8.jpeg');
	//game.load.image('jquery','assets/jquery_white.png');
	game.load.image('developer','assets/fullstackS.png');
	//game.load.image('phaser','assets/phaserLogo.png');
	game.load.image('backend','assets/code/backend1.png');

	game.load.image('frog','assets/frog.png');
	game.load.image('acko','assets/img/acko.png');
	game.load.image('amazon','assets/img/amazon.png');
	game.load.image('gfg','assets/img/gfg.png');
        game.load.image('juniper','assets/img/juniper.png');
        game.load.image('amd','assets/img/amd.png');
//	game.load.image('campk12Logo','assets/img/amazon.png');
	game.load.image('tekion','assets/img/tekion.png');
	game.load.image('corel','assets/corel.png');
	game.load.image('sea1','assets/sea/sea1.png');
	game.load.image('sea2','assets/sea/sea2.png');
	game.load.image('sea3','assets/sea/sea3.png');
	game.load.image('sea4','assets/sea/sea4.png');
	game.load.image('sea5','assets/sea/sea5.png');
	game.load.image('sea6','assets/sea/sea7.png');

	game.load.image('games','assets/img/cancer.png');
	game.load.image('quiz','assets/img/quiz.png');
	//game.load.image('photoshop','assets/pslogo.png');
	game.load.image('bits','assets/0s1s.png');
	game.load.image('hackathon','assets/img/hackathon.png');
	game.load.image('facebook','assets/img/facebook.png');
	game.load.image('hospital','assets/hospital_kalp.png');
	game.load.image('ambulance','assets/ambulance2.png');
	game.load.image('otherprojects','assets/other.png');
	//game.load.image('best','assets/best_cartoonist.png');
	game.load.image('bullet','assets/bullet.png');
	game.load.image('pipe','assets/pipe.png');
	game.load.image('cup','assets/cup.png');
	game.load.image('incubation','assets/img/incubation.png');
	game.load.image('code1','assets/img/code1.png');
	game.load.image('gaana','assets/gaanalogo.png');
	game.load.image('shephertz','assets/shephertz.png');
	game.load.image('codelhi','assets/codelhi.png');
	game.load.image('maui','assets/img/maui.png');
	game.load.image('chai','assets/cpc.png');
	game.load.image('football','assets/football.png');
	game.load.image('gmail','assets/gmail.png');
	game.load.image('facebook','assets/fb.png');
	game.load.image('linkedin','assets/linkedin.png');
	game.load.image('hackerearth','assets/img/hackerearth.png');
	game.load.image('ladder','assets/ladder.png');
	game.load.image('yoga','assets/yoga.png');
	game.load.image('swach_bharat','assets/swach_bharat.png');
	game.load.image('github','assets/github.png');	
	game.load.image('leetcode','assets/img/leetcode.png');
	game.load.image('medium','assets/img/medium.png');
	game.load.image('algae','assets/algae-b.png');
	game.load.image('blogLogo','assets/cartoon.png');
	game.load.image('bug','assets/bug.png');
	game.load.image('flag','assets/flag.png');
	game.load.image('squarebrick','assets/brick_small.png');
	game.load.image('questionbrick','assets/question_block_small.png');
	game.load.image('question_hide','assets/question_block_plain_small.png');
	game.load.image('icpc','assets/icpc.jpg');
	game.load.atlasJSONHash('grari','assets/grari_map.png','assets/grari_map.json');
	game.load.atlasJSONHash('coin_moving','assets/coin-sprite.png','assets/coin-sprite-map.json');
	game.load.atlasJSONHash('digital_india','assets/digital_india.png','assets/digital_india.json');	
	game.load.image('waterBubble', 'assets/bubble256.png');
	game.load.image('sun', 'assets/sun.png');
	game.load.atlasXML('seacreatures', 'assets/seacreatures.png', 'assets/seacreatures.xml');
	game.load.spritesheet('kaboom', 'assets/explode.png', 128, 128);

}

function create(){
		
	//Add Clouds
	for(var i=0;i<20000;i+=1000){
		if(i>=6800 && i<=8100){
		game.add.sprite(i,h-680,'cloud');
		game.add.sprite(i+400,h-630+50,'cloud');
		}
		else{
		game.add.sprite(i,h-580,'cloud');
		game.add.sprite(i+400,h-630,'cloud');
		

		}
	}

	//Add night mode
	night = game.add.tileSprite(0,0,platformLength*2,h,'night');
	night.alpha = 1;
	//Add mountains


	bullets = game.add.group();
    bullets.enableBody = true;
    bullets.physicsBodyType = Phaser.Physics.ARCADE;
    bullets.createMultiple(30, 'bullet');
    bullets.setAll('anchor.x', 0.5);
    bullets.setAll('anchor.y', 1);
    bullets.setAll('outOfBoundsKill', true);
    bullets.setAll('checkWorldBounds', true);
   	
    explosions = game.add.group();

    tiles = game.add.group();
    tiles.enableBody = true;
    tiles.physicsBodyType = Phaser.Physics.ARCADE;
    tiles.createMultiple(6,'questionbrick');
    
    text.setText("");

	game.stage.backgroundColor =bgColor;
	game.world.setBounds(0, 0,platformLength,h+800);

	//Add corel parachute
	corel = game.add.sprite(9000,h-600,'corel');
	game.add.tween(corel).to( { y:h-450}, 2000, Phaser.Easing.Quadratic.InOut, true, 0, 2000, true);
	//game.input.onTap.add(moveforward,this);


	flag = game.add.sprite(platformLength-190,h,'flag');
	flag.scale.setTo(0.5,0.5);
	game.add.sprite(platformLength-220,h-200,'pipe');



	game.add.sprite(3060,h-350,'treeS');
	hill1=game.add.sprite(2600,h-300+400,'hill');
	hill2=game.add.sprite(3000,h-350+400,'hill');

	//Add Coco Trees
	ct1  = game.add.sprite(5000,h,'cocotree');
	ct2  = game.add.sprite(5200,h,'cocotree');
	ct3  = game.add.sprite(5400,h,'cocotree');
	ct4  = game.add.sprite(5600,h,'cocotree');

	var style_white2 = { font:"30px Roboto",fill:"#fff"};
	var style_lang = { font:"30px Roboto" ,fill:"#fff"};
	//var style_lang = { font:"30px monospace" ,fill:"#fff"};

	javatext = game.add.text(5050,h-320-50,'Python\n 80%',style_roboto);
	pythontext=	game.add.text(5250,h-430-60,'Java\n 90%',style_white2);
	jstext = game.add.text(5430,h-450-50,'JavaScript\n 75%',style_white2);
	ctext = game.add.text(5660,h-460-50,'C/C++ \n 90%',style_white2);

	
	javatext.alpha = 0.2;
	pythontext.alpha = 0.2;
	jstext.alpha = 0.2;
	ctext.alpha = 0.2;
	game.add.text(5200,h-140,'LANGUAGE  ACTIVITY',style_roboto);


	
	//Add Coin
	var mustard_style = { font: "80px Roboto", fill: "#FFF", align: "center" };
	codetext = game.add.text(6550,h-550,'C    D E =>',mustard_style);
	var moving_coin = game.add.sprite(6610,h-550,'coin_moving');
	moving_coin.scale.setTo(2,2);
	moving_coin.animations.add('run');
	moving_coin.animations.play('run',20,true);
	
	/* The newer one */
	game.add.sprite(6650,h-200,'pipe');
	new_bug = game.add.sprite(6600,h-180,'bug');
	new_bug2 = game.add.sprite(6500,h-155,'bug');
	new_bug.scale.setTo(-1,1);
	new_bug2.scale.setTo(-0.7,0.7);
	game.add.tween(new_bug).to( { x:6680}, 2000, Phaser.Easing.Quadratic.InOut, true, 0, 2000, true);
	game.add.tween(new_bug2).to( { x:6600}, 2000, Phaser.Easing.Quadratic.InOut, true, 0, 2000, true);

	var xcoord=6500;
	game.add.sprite(xcoord,h-450,'squarebrick');
	game.add.sprite(xcoord+119,h-450,'question_hide');
	game.add.sprite(xcoord+2*119,h-450,'squarebrick');

	var exp_index =0;
	for(xcoord = 7100;xcoord<=8200;xcoord += 2*119)
	{
		game.add.sprite(xcoord,h-450,'squarebrick');
		//explosions.push(temp);
		 tile = tiles.getFirstExists(false);
		 if(tile){

		 	tile.reset(xcoord+119,h-450);
		 }

		 game.add.sprite(xcoord+100,h-310,'tree1').scale.setTo(0.6,0.6);
	}
	game.add.sprite(xcoord,h-450,'squarebrick');
	game.add.sprite(xcoord+100,h-310,'tree1').scale.setTo(0.6,0.6);

   //Add Explosion object pool
   	explosions = game.add.group();
    explosions.createMultiple(6, 'kaboom');
	//explos.forEach(function(){ expl })
	

	//game.add.text(6600,h-160,'FULL STACK WEB DEVELOPER \t\t SERVER SIDE IN DJANGO\t\t GAME DEVELOPMENT\t\tANDROID\t\t  DESIGNING SKILLS >> \t\t\t\t\t PHOTOSHOP ',style_lang);	


	//game.add.sprite(base5+150,h-420,'tree1').scale.setTo(0.8,0.8);
	game.add.sprite(base5+300,h-250,'treeS').scale.setTo(0.7,0.7);
	game.add.sprite(base6+250,h-420,'tree1').scale.setTo(0.8,0.8);
	game.add.sprite(base6+200,h-250,'treeS').scale.setTo(0.7,0.7);
	game.add.sprite(base6+380,h-300,'treeS').scale.setTo(0.8,0.8);


	var style = { font: "16px monospace", fill: "#fff", align: "center" };
	game.add.text(2930,h-250,"Class 10th \n 8.8.0/10.0 CGPA ", style);
	game.add.text(3330,h-280,"Class 12th \n 87.6 % marks \n CBSE Board ", style);
//	game.add.text(3700,h-320,"School Captain ", style);
	//Add Ground and Grass
	var ground = game.add.tileSprite(0,h-100,platformLength*2,2000,'ground');
	ground.scale.setTo(0.5,0.5);

	var grass = game.add.tileSprite(0,h-100,platformLength*2,50,'grass');
	grass.scale.setTo(0.5,0.5);
	

	game.add.text(5200,h-70,'*Percentiles as calculated by HackerEarth',{font:"20px monospace",fill:"#fff"});


	var water = game.add.tileSprite(8700,h-100,800,600,'waterAtlas');
	game.add.sprite(8800,h+120,'algae').scale.setTo(1.5,1.5);
	game.add.sprite(9200,h+250,'algae');
	createBubbles();
	//game.add.tileSprite(8700,h+600-136,133*6,136,'photoshop');

	var brick2 = game.add.sprite(12750-70,h-100-36,'brick');
	brick2.scale.setTo(0.5,0.5);
	game.add.sprite(12750-70,h-100,'brick').scale.setTo(0.5,0.5);


	game.add.sprite(12750+350,h-100-36,'brick').scale.setTo(0.5,0.5);
	game.add.sprite(12750+350,h-100,'brick').scale.setTo(0.5,0.5);

	water.animations.add('run');
	water.animations.play('run',2,true);
	

	//Add trees

	tree1 = game.add.sprite(130,h-100-0.75*430,'tree1');
	tree1.scale.setTo(.75,.75);
	

	var banner = game.add.sprite(250,h-665,'intro');

	//Add birds
	birds = game.add.sprite(50,50,'birds');
	birds.fixedToCamera = true;
	birds.scale.setTo(0.75,0.75);
	game.add.tween(birds.cameraOffset).to( { y:100 }, 2000, Phaser.Easing.Back.InOut, true, 0, 2000, true);
	
	//Signboards
	game.add.sprite(1300,h-440,'level');
	game.add.text(1370,h-340,"Level 1");
	game.add.text(1440,h-260,"About > >");

	game.add.sprite(4700,h-440,'level');
	game.add.text(4770,h-340,"Level 2");
	game.add.text(4840,h-260,"Skills > >");

	game.add.sprite(9600,h-440,'level');
	game.add.text(9670,h-340,"Level 3");
	game.add.text(9740,h-260,"Experience",{font:"25px Arial Black"});


	game.add.sprite(11800,h-440,'level');
	game.add.text(11870,h-340,"Level 4");
	game.add.text(11940,h-260,"Projects",{font:"25px Arial Black"});


	game.add.sprite(base5+100,h-440,'level');
	game.add.text(base5+170,h-340,"Level 5");
	game.add.text(base5+240,h-260,"Achievements",{font:"22px Arial Black"});


	// game.add.sprite(base6+200,h-440,'level');
	// game.add.text(base6+270,h-340,"Level 6");
	// game.add.text(base6+335,h-260,"Other Highlights",{font:"20px Arial Black"});


	game.add.sprite(base6+500,h-440,'level');
	game.add.text(base6+570,h-340,"Level 6");
	game.add.text(base6+630,h-260,"Online Profiles",{font:"20px Arial Black"});

	//-------------------Levels Finish



	
	game.add.sprite(10200,h-420,'tree1').scale.setTo(0.75,0.75);
	game.add.sprite(11570,h-420,'tree1').scale.setTo(0.75,0.75);
	//Add frog
	for(row = 1;row<=7;row++){
		for(var xcoord=10500+(row-1)*60+200;xcoord<=11200-(row-1)*60+260;xcoord+=60){
			 if(row==7){
			 	game.add.sprite(xcoord+30,h-600,'flag').scale.setTo(0.2,0.2);
			 }
			 game.add.sprite(xcoord,h-100-row*60,'squarebrick').scale.setTo(0.5,0.5);
		}
	}

	//game.add.sprite(10000,h-330,'frog').scale.setTo(0.8,0.8);
	game.add.sprite(10100,h-360,'frog').scale.setTo(0.9,0.9);
	game.add.sprite(10500,h-340,'frog').scale.setTo(1,1);
	game.add.sprite(10700,h-320,'frog').scale.setTo(1.1,1.1);
	game.add.sprite(10900,h-300,'frog').scale.setTo(1.2,1.2);
        game.add.sprite(11000,h-280,'frog').scale.setTo(1.3,1.3);
       // game.add.sprite(11100,h-360,'frog').scale.setTo(1.4,1.4);

	//Add logos
	game.add.sprite(10105,h-230,'amazon');
	game.add.sprite(10420,h-235,'gfg').scale.setTo(0.48,0.48);
	game.add.sprite(10710,h-250,'acko');		
	game.add.sprite(11050,h-300,'tekion').scale.setTo(0.5,0.5);
        game.add.sprite(11320,h-300,'juniper').scale.setTo(0.5,0.5);
       //game.add.sprite(11600,h-300,'amd').scale.setTo(0.5,0.5);

	//Add company texts.
	var style_ex = {font:"16px Arial",fill:orange,align:"center"};
	var style_exS = {font:"14px Arial",fill:orange,align:"center"};
	game.add.text(10125,h-220,"Amazon \n Sept'20 - Oct'20 \n Software Developer Intern",style_exS);
	game.add.text(10480,h-230,"GeekforGeeks\n Jul'20 - Sep'20 \n Techincal Writer Intern",style_ex); 
	game.add.text(10780,h-250,"Acko Technology \n Jul'21 - Nov'21 \n Software Engineer ",style_ex);
	game.add.text(11090,h-290,"Tekion Corp, Bangalore \n Nov'21 - Jul'23\n Associate Software Engineer",style_ex);
        game.add.text(11390,h-290,"Juniper Networks, Sunnyvale, CA \n May'23 - Aug'23\n Software Engineer Intern",style_ex);
        game.add.text(11500,h-290,"AMD, Austin, TX \n Jan'24 - May'24\n Software Engineer Intern",style_ex);

	
	

	//Add projects
	game.add.sprite(12200,h-520,'games');

	game.add.sprite(12740,h-450,'quiz');

	game.add.sprite(13400,h-410,'facebook').scale.setTo(0.6,0.6);
	
	game.add.sprite(13800,h-440,'hackathon').scale.setTo(0.5,0.5);



	game.add.sprite(14400,h-370,'hospital');
	var ambu = game.add.sprite(14700,h-260,'ambulance');
	ambu.scale.setTo(0.8,0.8);
	var t = game.add.tween(ambu).to( { x:14400,}, 2000, Phaser.Easing.Back.InOut, true, 0, 2000, true);
	t.start();
	game.add.text(14540,h-370,"SCAN-X Web Application \n to develop Smart\n Hospital Management",style_white);
	

	//game.add.sprite(14800,h-420,'otherprojects');
	//game.add.text(14850,h-450,"Other Projects",style_white);

	//Add Acheivements Section
	game.add.tileSprite(base5+500,h-100-73*3,139*2,73*3,'brick');
	shakti = game.add.sprite(base5+700,-670,'maui');
	//shakti.scale.setTo(0.7,0.7);
	shakti_cup = game.add.sprite(base5+500,-500,'cup');
	shakti_cup.scale.setTo(0.5,0.5);
	game.add.text(base5+505,h-300,"Secured AIR\n of 1895 out of 200k in\n TCS Code Vita 2020.",style_white);
	
	//game.add.tileSprite(15720,h-300,100,300'brick');

	//game.add.sprite(15715,h-410,'best').scale.setTo(0.8,0.8);
	//Positon style
	var style_position = { font:"24px monospace",fill:"#fff",align:"center"};
	
	game.add.sprite(base5+1020,h-600,'incubation');
	//game.add.text(base5+1180,h-250,"",style_position);

	cup1 = game.add.sprite(base5+900,h-250,'cup').scale.setTo(0.5,0.5);
	cup2 = game.add.sprite(base5+1410,h-280,'cup').scale.setTo(0.6,0.6);
	cup3 = game.add.sprite(base5+2220,h-320,'cup').scale.setTo(0.7,0.7);;
	cup4 = game.add.sprite(base5+3000,h-350,'cup').scale.setTo(0.8,0.8);
	cup5 = game.add.sprite(base5+3600,h-360,'cup').scale.setTo(0.8,0.8);




	game.add.sprite(base5+1630,h-465,'code1');


	//Add grari
	grari = game.add.sprite(base5+2600,h-350,'grari');
	grari2 = game.add.sprite(base5+2520+260,h-420,'grari');
	grari.animations.add('run');
	grari.animations.play('run',2,true);
	grari2.scale.setTo(0.75,0.75);
	grari2.animations.add('run');
	grari2.animations.play('run',2,true);

	//Add digital India
	digital_india = game.add.sprite(base5+2550,h-260,'digital_india');
	digital_india.animations.add('run');
	digital_india.animations.play('run',5,true);
	game.add.text(base5+2500,h-480,"Google Explore \n ML Program:\n One of the 120 selected ",{font:"28px Arial",fill:"#fff",align:"center"});
	
	game.add.sprite(base5+3200,h-390,'building');
	game.add.text(base5+3250,h-470,"Winner \nSmart India Hackathon \nat HYD (2019)",{font:"28px Arial",fill:"#fff",align:"center"});

	game.add.sprite(base5+3820,h-310,'icpc');
	game.add.text(base5+3800,h-470,"Qualified for \nACM-ICPC \n2019",{font:"30px Arial",fill:"#fff",align:"center"});
	
	//Add Contact Buttons
	game.add.sprite(base7+600,h-400,'ladder');
	
	var cloud_blog =game.add.sprite(base7+550,h-700+20,'sun');	
	cloud_blog.scale.setTo(1.3,1.3);
	
	game.add.button(base7+620,h-650+20,'blogLogo',openWebsite,this);
	//game.add.text(base7+650,h-550+20,"Blog",{font:"40px Arial" ,fill:"#fff"});
	cloud_moving1 = game.add.sprite(base7+510,h-650,'cloud');
	cloud_moving2 = game.add.sprite(base7+510-60,h-650,'cloud');

	cloud_moving2.scale.setTo(1.3,1.3);
	cloud_moving1.scale.setTo(1.2,1.2);


	game.add.sprite(base7+450,h-550,'cloud').scale.setTo(1.2,1.2);
	button_github = game.add.button(base7+500,h-490,'github',openGithub, this);
	button_github.scale.setTo(0.20,0.20);
	
	game.add.sprite(base7+800,h-550,'cloud').alpha=0.8;
	//button_fb = game.add.button(base7+860,h-520,'facebook',openFacebook,this);
	
	var hackerearth_cloud=game.add.sprite(base7+650+30,h-350+15,'cloud');
	hackerearth_cloud.scale.setTo(1.1,1.1);

	button_hackerearth = game.add.button(base7+700+30,h-310+15,'hackerearth',openHackerearth, this);
	button_hackerearth.scale.setTo(0.5,0.5);
	
	var gmail_cloud=game.add.sprite(base7+670,h-440,'cloud');
	gmail_cloud.scale.setTo(1.1,1.1);
	gmail_cloud.alpha =0.95;
	button_gmail = game.add.button(base7+720,h-400,'gmail',openGmail, this);
	button_gmail.scale.setTo(0.8,0.8)
	
	

	
	var cloud_leetcode=game.add.sprite(base7+400,h-400,'cloud');
	cloud_leetcode.scale.setTo(1.4,1.4);
	cloud_leetcode.alpha=0.8;
	button_leetcode = game.add.button(base7+430,h-330,'leetcode',openleetcode, this).scale.setTo(0.6,0.6);
	
	//game.add.sprite(20150+200,h-350,'medium').scale.setTo(0.25,0.25);
	game.add.sprite(base7+850,h-430,'cloud').scale.setTo(1.3,1.3);
	button_medium = game.add.button(base7+890,h-350,'medium',openmedium, this);


	var linkedin_cloud = game.add.sprite(base7+1050-100,h-530,'cloud')
	linkedin_cloud.scale.setTo(1.2,1.2);
	linkedin_cloud.alpha =0.9;
	button_linkedin = game.add.button(base7+990,h-450,'linkedin',openLinkedIn, this);
	button_linkedin.scale.setTo(0.8,0.8);
	
	game.add.text(base7+720,h-105,"Click/Tap the Clouds to open Profiles and Publications.",style_white);
	
	game.add.button(base7+1260,h-450+20,'publication',openPublication,this);

	
	//Add hometown
	var hometown = game.add.sprite(1700,h-490,'hometown');

	//Add fullstack
	game.add.sprite(5900,h-360,'developer');

	//Add College building
	game.add.sprite(3800,h-610,'lpu').scale.setTo(0.75,0.75);
	aieee_cup=game.add.sprite(3500,-500,'cup');
	//game.add.text(3850,h-105,"  Undergrad in CSE- 8.23/10",style_roboto);
	
	game.add.sprite(4200,h-612,'florida').scale.setTo(0.75,0.75);
	aieee_cup=game.add.sprite(3500,-500,'cup');
//	game.add.text(4400,h-105," Master in Computer Science",style_roboto);
	

	//Add bubble
	
	bubble = game.add.sprite(8900,h+350,'sea1');
	bubble1 = game.add.sprite(9100,h+350,'sea2');
	bubble2 = game.add.sprite(9300,h+350,'sea3');
	bubble3 = game.add.sprite(8900,h+150,'sea4');
	bubble4 = game.add.sprite(9100,h+150,'sea5');
	bubble5 = game.add.sprite(9300,h+150,'sea6');

	game.add.text(8990,h+560,"Others Tools and Frameworks",style_roboto);
	
	inst_text = game.add.text(290,h-50,"Use Arrow Keys/Screen keys >>",{font:"27px Arial",fill:"#fff"});
	//Add hero 
	hero = game.add.sprite(100,-500,'akash');
	hero.animations.add('run');



//----------------------------------------Sea Creatures
    //Add under water animals
    octopus = game.add.sprite(9200, h+100, 'seacreatures');
    octopus.animations.add('swim', Phaser.Animation.generateFrameNames('octopus', 0, 24, '', 4), 30, true);
    octopus.animations.play('swim');
  //  game.add.tween(octopus).to( { y:h-100},2000, Phaser.Easing.Back.InOut, true, 0, 2000, true);
    game.add.tween(octopus).to({ y: h-100 }, 2000, Phaser.Easing.Quadratic.InOut, true, 0, 1000, true);

    octopus2 = game.add.sprite(13100, h-200, 'seacreatures');
    octopus2.animations.add('swim', Phaser.Animation.generateFrameNames('octopus', 0, 24, '', 4), 30, true);
    octopus2.animations.play('swim');

    crab = game.add.sprite(8750,h+420, 'seacreatures');
    crab.animations.add('swim', Phaser.Animation.generateFrameNames('crab1', 0, 25, '', 4), 30, true);
    crab.animations.play('swim');

    crab2 = game.add.sprite(12650,h-180, 'seacreatures');
    crab2.scale.setTo(0.7,0.7);
    crab2.animations.add('swim', Phaser.Animation.generateFrameNames('crab1', 0, 25, '', 4), 30, true);
    crab2.animations.play('swim');

    // seahorse = game.add.sprite(9300, h+200, 'seacreatures');
    // seahorse.animations.add('swim', Phaser.Animation.generateFrameNames('seahorse', 0, 5, '', 4), 30, true);
    // seahorse.animations.play('swim');


    purpleFish = game.add.sprite(12950,h-80, 'seacreatures');
    purpleFish.animations.add('swim', Phaser.Animation.generateFrameNames('purpleFish', 0, 20, '', 4), 30, true);
    purpleFish.animations.play('swim');
    game.add.tween(purpleFish).to({ x:12750}, 7500, Phaser.Easing.Quadratic.InOut, true, 0, 1000, false);

    greenJellyfish = game.add.sprite(8800, h-150, 'seacreatures');
    greenJellyfish.animations.add('swim', Phaser.Animation.generateFrameNames('greenJellyfish', 0, 39, '', 4), 30, true);
    greenJellyfish.animations.play('swim');
    game.add.tween(greenJellyfish).to( { y:h-100},2000, Phaser.Easing.Back.InOut, true, 0, 2000, true);


	//Add School
	var school = game.add.sprite(2200,h-575,'school');
//	hero tween
	var entryTween = game.add.tween(hero);
 //	tween = game.add.tween(sprites.cursor).to( { x:100,y: 500 }, 2000, Phaser.Easing.Bounce.Out, true);
	entryTween.to({x:starting_point,y:h-245-hero.height},2000,Phaser.Easing.Bounce.Out, true);
	entryTween.start();
	
	cursors = game.input.keyboard.createCursorKeys();
	game.physics.startSystem(Phaser.Physics.ARCADE);
	game.physics.arcade.enable(hero);
	game.physics.arcade.enable(night);
	night.body.velocity.x = -30;

	game.input.mouse.mouseWheelCallback = mouseWheel;

//Add a bug
	bug = game.add.sprite(5900,h-150,'bug');
	game.physics.arcade.enable(bug);

	game.camera.follow(hero);
	game.camera.follow(hero,Phaser.Camera.FOLLOW_PLATFORMER);
	//Create Water Bubbles
	back_btn = game.add.button(10,h-94,'back');
	fwd_btn = game.add.button(w-10,h-94,'back');
	fwd_btn.scale.x *= -1;
	fwd_btn.fixedToCamera = true;
	back_btn.fixedToCamera = true;
	back_btn.alpha = 1;
	
	download_btn = game.add.button(w-150,5,'download',openResume,this);
	download_btn.fixedToCamera = true;
	game.add.text(w-120,100,"Download PDF",{font:"10px Roboto",fill:"#000"}).fixedToCamera=true;
	night_tween = game.add.tween(night);
	night_tween.to({ alpha:0.5}, 10000)

	if(w<=481){
		back_btn.alpha = 1;
	}
	
	explosions = game.add.group();
    explosions.createMultiple(10, 'kaboom');

}

function addMovingCoin(x,y,scale){
	var moving_coin = game.add.sprite(x,y,'coin_moving');
	moving_coin.scale.setTo(scale,scale);
	moving_coin.animations.add('run');
	moving_coin.animations.play('run',20,true);
	return moving_coin;
	
}

function collisionHandler(bullet,tile){
   
    
	var explosion = explosions.getFirstExists(false);
	if(explosion){
	explosion_count++;
    explosion.reset(tile.body.x-50, tile.body.y-50);
    explosion.scale.setTo(1.5,1.5);
    explosion.animations.add('kaboom');
    explosion.animations.play('kaboom', 60, false, true);
    }

    tile.kill();
    bullet.kill();

    var bv = 7275;
    var inc = 119*2;

    if(explosion_count==1){
		var css = game.add.sprite(bv,h-400,'c++');
		css.scale.setTo(0.5,0.5);
		css.anchor.setTo(0.5,0.5);
		game.add.tween(css).to({y:h-550},300).start();
		game.add.tween(css.scale).to({y:0.9,x:0.9},500).start();
		var coin = addMovingCoin(bv,h-400,2);
		var t =game.add.tween(coin).to({x:hero.x+100,y:hero.y+50},500).start();
		t.onComplete.add(function(){coin.alpha=0;});

	}
	else if(explosion_count==2){
	var html= game.add.sprite(bv+1*inc,h-500,'java');
		html.scale.setTo(0.5,0.5);
		html.anchor.setTo(0.5,0.5);
		game.add.tween(html).to({y:h-550},300).start();
		game.add.tween(html.scale).to({y:0.9,x:0.9},500).start();
	
			var coin = addMovingCoin(bv+inc,h-400,2);
		var t =game.add.tween(coin).to({x:hero.x+100,y:hero.y+50},500).start();
		t.onComplete.add(function(){coin.alpha=0;});
	

	}
	else if(explosion_count==3){
	var js= game.add.sprite(bv+2*inc,h-500,'js');
	js.scale.setTo(0.5,0.5);
	js.anchor.setTo(0.5,0.5);
	game.add.tween(js).to({y:h-550},300).start();
	game.add.tween(js.scale).to({y:0.9,x:0.9},800).start();
	
		var coin = addMovingCoin(bv+2*inc,h-400,2);
		var t =game.add.tween(coin).to({x:hero.x+100,y:hero.y+50},500).start();
		t.onComplete.add(function(){coin.alpha=0;});


	}

	else if(explosion_count==4){
	var py= game.add.sprite(bv+3*inc,h-500,'python');
	py.scale.setTo(0.2,0.2);
	py.anchor.setTo(0.5,0.5);
	game.add.tween(py).to({y:h-550},300).start();
	game.add.tween(py.scale).to({y:0.6,x:0.6},500).start();

		var coin = addMovingCoin(bv+3*inc,h-400,2);
		var t =game.add.tween(coin).to({x:hero.x+100,y:hero.y+50},500).start();
		t.onComplete.add(function(){coin.alpha=0;});

	
	}
	else if(explosion_count==5){
	/*
	var phaser= game.add.sprite(bv+3*inc,h-500,'phaser');
	py.scale.setTo(0.2,0.2);
	py.anchor.setTo(0.5,0.5);
	game.add.tween(py).to({y:h-550},300).start();
	game.add.tween(py.scale).to({y:0.6,x:0.6},500).start();
	*/

	var andro= game.add.sprite(bv+4*inc,h-500,'backend');
	andro.scale.setTo(0.2,0.2);
	andro.anchor.setTo(0.5,0.5);
	game.add.tween(andro).to({y:h-550},300).start();
	game.add.tween(andro.scale).to({y:0.6,x:0.6},600).start();

		var coin = addMovingCoin(bv+4*inc,h-400,2);
		var t =game.add.tween(coin).to({x:hero.x+100,y:hero.y+50},500).start();
		t.onComplete.add(function(){coin.alpha=0;});


	}
}


function fireBullet () {

    //  To avoid them being allowed to fire too fast we set a time limit
    if (game.time.now > bulletTime && direction=="right"&&explosion_count<max_explosion_count)
    {
        //  Grab the first bullet we can from the pool
        bullet = bullets.getFirstExists(false);

        if (bullet)
        {
            //  And fire it
            bullet.reset(hero.x+hero.width/2+50, hero.y+100);
            bullet.scale.setTo(1.5,1);
            bullet.body.velocity.y = -400;
            bulletTime = game.time.now + 200;
        }

        bullet2 = bullets.getFirstExists(false);

        if (bullet2)
        {
            //  And fire it
            bullet2.reset(hero.x+ hero.width/2+100, hero.y+100);
            bullet2.scale.setTo(1.5,1);
            bullet2.body.velocity.y = -400;
            bulletTime = game.time.now + 300;
        }
    

    }

}

function resetBullet (bullet) {

    //  Called if the bullet goes out of the screen
    bullet.kill();

}

function moveBack(){
	hero.x -= 80;
	hero.animations.play('run',15,true);
}
function createBubbles(){
	for (var i = 0; i < 20; i++)
    {
        var sprite = game.add.sprite(game.rnd.realInRange(8700,9400), h+400, 'waterBubble');

        sprite.scale.set(game.rnd.realInRange(0.1, 0.3));
        sprite.alpha -=0.1;

        var speed = game.rnd.between(4000, 6000);

        game.add.tween(sprite).to({ y:h-game.rnd.realInRange(100,250),}, speed, Phaser.Easing.Sinusoidal.InOut, true, delay, 1000, false);

        delay += 300;
    }


}

function mouseWheel(event) {
		inst_text.setText("");
		if(game.input.mouse.wheelDelta>0){
			
			hero.x +=60;
			hero.animations.play('run',15,true);	
		 }
		
		else{
			hero.x -=60;
			hero.animations.play('run',15,true);		
		}

}

function moveforward(){

	inst_text.setText("");
	hero.x +=80;
	
}

function forwardButtonPressed(){
	
	var ptr = game.input.activePointer ;
	hero.animations.play('run',15,true);

	if((ptr.x>=w-150 && ptr.y>=h-150&&ptr.isDown)||cursors.right.isDown||scroll>0)
	{
		if(direction =="left"){
		direction= "right";
		hero.scale.setTo(1,1);
		hero.anchor.setTo(0,0);	
		}
		return true;
	}
	else
		{
			return false;
		}

}

function backButtonPressed(){
	var ptr = game.input.activePointer ;
	hero.animations.play('run',15,true); 
	if((ptr.x<=150 && ptr.y>=h-150&&ptr.isDown)||cursors.left.isDown||scroll<0)
	{
		if(direction =="right"){
		direction= "left";
		//hero.anchor.setTo(1,0);
		hero.scale.setTo(-1,1);
	}
	return true;
	}
	else		
		return false;
}

function update(){

	game.physics.arcade.overlap(bullets, tiles, collisionHandler, null, this);
	var scroll = game.input.mouse.wheelDelta;

	if(hero.x>2600&&hero.x<=2650){
		moveHillsUp();
	}

	if(forwardButtonPressed()){
		inst_text.setText("");
		hero.x +=30;
		//console.log("Pointer:"+game.input.activePointer.x);
		hero.animations.play('run',15,true);
	}


	else if(backButtonPressed()){
		hero.x -=30;
	}
	else{
		hero.animations.stop('run');
	}
	
	if(hero.x<=0&&direction=="right"){
		hero.x =0;
	}
	if(hero.x <=150&&direction=="left"){
		hero.x = 150;
	}
	
	if(hero.x<=6450&& hero.x>=6200 &&hero.y == h-650 &&backButtonPressed() ){
		game.add.tween(hero).to({x:5800,y:h-300},300).start();
		hero.x=5780;
		hero.y = h-300;
		//console.log("This tween");
	}
	if(hero.x<8700 && hero.y>h &&(backButtonPressed())){
		hero.x = 8700;
		console.log("Yeh valal");
	}
	//Throw into ocean right
	if(direction =="left" &&hero.x >=9250&&hero.x<=9450&&backButtonPressed()){
		hero.y = h+300;
		hero.alpha = 0.8;
		birds.alpha =0;
	}
	if(hero.x >base5){

		night_tween.start();
	}

	if(hero.x > 8750 && hero.x <8900 && hero.y > h &&direction!='right'){
		var t =game.add.tween(hero).to({x:8800,y:h-300},1000).start();
		t.onComplete.add(function(){ hero.alpha=1; birds.alpha=1;game.camera.y -=150;})
		//console.log("Nahin Yeh Vaala")
	}

	if(hero.x>=12500&&hero.x<=12650&&(forwardButtonPressed())){
		var t = game.add.tween(hero).to({x:12800,y:h-700},100);
		t.start();
		t.onComplete.add(function(){ game.add.tween(hero).to({x:13100,y:h-300},200).start()});
	
	}

	if(hero.x >=13000&&hero.x<=13100&&(backButtonPressed())){
		var t = game.add.tween(hero).to({x:12400,y:h-600},100);
		t.start();
		t.onComplete.add(function(){ game.add.tween(hero).to({x:12400,y:h-300},200).start();});

	}



	if(hero.x > 4500){
		showPlantsFromBottom();
		moveBugLeft();
	}
	if(hero.x > 15350){
		
		game.add.tween(shakti).to({x:base5+580,y:h-650},100).start();
		game.add.tween(shakti_cup).to({x:base5+500,y:h-475},100).start();
		//console.log("Shakti cup is here");

	}
	if(hero.x > base5+800 && hero.x <=base5+900 && !cupTweenDone){
	
	cupTweenDone =true;


	}
	if(hero.x > base5+1600 && hero.x <=base5+1700 && !cupTweenSecondDone){
		cupTweenSecondDone=true;


	}


	if(hero.x>platformLength-350){
		hero.x = platformLength-350;
		var t = game.add.tween(flag).to({y:h-400},1000);
		t.start();
		t.onComplete.add(function(){game.add.text(platformLength-185,h-370,"Thanks for\n Visiting !",style_white);},this);
	
	}

	if(hero.x > base7+500){
		game.add.tween(cloud_moving2).to({x:base7,alpha:0},5000).start();
		game.add.tween(cloud_moving1).to({x:platformLength,alpha:0},5000).start();

	}

	
	if(hero.x>5800 && hero.x <=6000 && hero.y>= h-245-hero.height-50 && direction!='left'){
		game.add.tween(hero).to({x:6500,y:h-650},100).start();
		

	}

	if((bug.x - hero.x)<=100){
	
		bug.body.velocity.x = 0;


		bug.scale.setTo(1,0.2);
		bug.body.y = h - 110;
		
		if(bug_killed==false){
		game.add.text(bug.x,h-200,"Oouch..!",style_roboto);
		bug_killed =true;
		}
	}
	//Throw onto Ground
	if(hero.x > 6830 && hero.x <7000 && direction=="right"){
		hero.y = h - 300;  

	}
	if(hero.x <=7000&&hero.x>6900 && direction=="left" ){
		hero.y = h - 650;

	}
	//Throw into ocean
	if(hero.x >=8600&&hero.x<=8800&&hero.y==h-300&&(forwardButtonPressed())&&direction=="right"){
		var t = game.add.tween(hero).to({x:8700,y:h+300},300).start();
		birds.alpha = 0;
		hero.alpha = 0.6;
		bubble.scale.setTo(0.8,0.8);
		bubble.anchor.setTo(0.8, 0.8);
		bubble1.scale.setTo(0.8,0.8);
		bubble1.anchor.setTo(0.8, 0.8);
		bubble2.scale.setTo(0.8,0.8);
		bubble2.anchor.setTo(0.8, 0.8);
		bubble3.scale.setTo(0.8,0.8);
		bubble3.anchor.setTo(0.8, 0.8);
		bubble4.scale.setTo(0.8,0.8);
		bubble4.anchor.setTo(0.8, 0.8);
		bubble5.scale.setTo(0.8,0.8);
		bubble5.anchor.setTo(0.8, 0.8);
		animateBubble();
		
	}

	if(hero.x > 9250 && hero.x <9300 && hero.y > h &&direction!='left'){
		var t =game.add.tween(hero).to({x:9350,y:h-300},1000).start();
		t.onComplete.add(function(){ hero.alpha=1; birds.alpha=1;game.camera.y -=150;})
	}


	if(hero.x >=7100 && hero.x <=8200){
		fireBullet();
	}
	



}
function animateBubble(){

				bubble.scale.setTo(0.75,0.75);
				game.physics.enable(bubble,Phaser.Physics.ARCADE);
				bubble.body.angularVelocity = 50;

				bubble1.scale.setTo(0.75,0.75);
				game.physics.enable(bubble1,Phaser.Physics.ARCADE);
				bubble1.body.angularVelocity = 100;

				bubble2.scale.setTo(0.75,0.75);
				game.physics.enable(bubble2,Phaser.Physics.ARCADE);
				bubble2.body.angularVelocity = 50;

				bubble3.scale.setTo(0.75,0.75);
				game.physics.enable(bubble3,Phaser.Physics.ARCADE);
				bubble3.body.angularVelocity =100;

				bubble4.scale.setTo(0.75,0.75);
				game.physics.enable(bubble4,Phaser.Physics.ARCADE);
				bubble4.body.angularVelocity = 50;
				
				bubble5.scale.setTo(0.75,0.75);
				game.physics.enable(bubble5,Phaser.Physics.ARCADE);
				bubble5.body.angularVelocity = 100;





}
function moveBugLeft(){

	if(bug_killed===false && hero.x >=4900 ){
			bug.body.velocity.x = -200;
	}



}
function moveHillsUp(){

	var hillsTween = game.add.tween(hill1);
	hillsTween.to({y:h-300},1500);
	hillsTween.start();

	var hills2Tween = game.add.tween(hill2);
	hills2Tween.to({y:h-350},2000);
	hills2Tween.start();

	// var hills3Tween = game.add.tween(hill3);
	// hills3Tween.to({y:h-400},2500);
	// hills3Tween.start();


	var ct = game.add.tween(aieee_cup);
	ct.to({y:h-410},5000,Phaser.Easing.Bounce.Out, true);
	ct.start();

}

function showPlantsFromBottom(){

	var plantsTween = game.add.tween(ct1);
	plantsTween.to({y:h-300},300);
	plantsTween.start();

	var plantsTween2 = game.add.tween(ct2);
	plantsTween2.to({y:h-400},300);
	plantsTween2.start();

	
	var plantsTween3 = game.add.tween(ct3);
	plantsTween3.to({y:h-420},300);
	plantsTween3.start();

	
	var plantsTween4 = game.add.tween(ct4);
	plantsTween4.to({y:h-420},300);
	plantsTween4.start();
	plantsTween4.onComplete.add(fadeText,this);

}


function bounceFootball(){


}
function bounceakash(){
// var bounceTween = 
}

function fadeText(){

	 game.add.tween(jstext).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true).start();
	 game.add.tween(ctext).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true).start();
	 game.add.tween(pythontext).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true).start();
	 game.add.tween(javatext).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true).start();
}

function render(){
	
	if(debug)
		{game.debug.spriteInfo(hero,32,32);}
}

function loadStart() {

	text.anchor.setTo(0.5,0.5);
	text.setText("Loading ...");

}

//	This callback is sent the following parameters:
function fileComplete(progress, cacheKey, success, totalLoaded, totalFiles) {
	//game.add.sprite(w/2,h/2,'loader');
	console.log("File complete...");

	text.setText("File Complete: " + progress + "% - " + totalLoaded + " out of " + totalFiles);


}

function loadComplete() {

	text.setText("Load Complete");

}

function openGithub(){
 var win = window.open(github_url);
 win.focus();
}
function openleetcode(){
 var win = window.open(leetcode_url);
 win.focus();
}
function openLinkedIn(){
 var win = window.open(linkedin_url);
 win.focus();
}

function openHackerearth(){
 var win = window.open(hackerearth_url);
 win.focus();
}


function openWebsite(){
 var win = window.open(website_url);
 win.focus();
}

function openResume(){
 var win = window.open(resume_url);
 win.focus();
}

function openGmail(){
 var win = window.open("mailto:akash.me916@gmail.com");
 win.focus();
}

function openmedium(){
 var win = window.open(medium_url);
 win.focus();
}
function openPublication(){
 var win = window.open("https://www.ijeast.com/papers/207-210,Tesma508,IJEAST.pdf");
 win.focus();
}



