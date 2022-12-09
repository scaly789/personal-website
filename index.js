//Selecting canvas from DOM and setting up for 2d game
const canvas = document.querySelector('canvas');
c = canvas.getContext('2d');
canvas.width = 1024;
canvas.height = 576;

//Shorter var names for the individual assets
const grass = './assets/grass.png';
const castle_background = './assets/castle_background.png';
const portrait_background = './assets/portrait_background.png';
const carpet = './assets/carpet.png';
const step = './assets/step.png';
const stone = './assets/stone.png';
const gold_background = './assets/gold_background.png';
const amazon = './assets/amazon.png';
const ta = './assets/ta.png';
const fullstack = './assets/fullstack.png';
const booth = './assets/booth.png';
const robot = './assets/robot.png';
const nlp = './assets/nlp.png';
const python = './assets/python.png';
const runRight = './assets/runRight.png';
const runLeft = './assets/runLeft.png';
const standRight = './assets/standRight.png';
const standLeft = './assets/standLeft.png';

//Class for the moving character
class Character {
   constructor() {
      this.x = 100;
      this.y = 310;
      this.speed = 5;
      this.width = 186.67;
      this.height = 200;
      this.frame = 0;
      this.rightRun = createImage(runRight);
      this.leftRun = createImage(runLeft);
      this.rightStand = createImage(standRight);
      this.leftStand = createImage(standLeft);
      this.sprite = this.rightStand;
      this.spriteWidth = 1201;
      this.frameLimit = 240;
   }

   draw() {
      c.drawImage(this.sprite, Math.floor(this.frame / (this.frameLimit/6)) * this.spriteWidth, 0, this.spriteWidth, 1340, this.x, this.y, this.width, this.height);
   }

   update() {
      this.frame++;
      if (this.frame > this.frameLimit) {
         this.frame = 0;
      }
      this.draw();
   }
}

//Class for the images that will be drawn under the character's feet
class Ground {
   constructor({x, y, image}) {
      this.x = x;
      this.image = image;
      this.width = image.width;
      this.height = image.height;
   }

   draw() {
      c.drawImage(this.image, this.x, 470);
   }
}

//Class for the images that will be drawn in the background
class Background {
   constructor({x, y, image}) {
      this.x = x;
      this.y = y;
      this.image = image;
      this.width = image.width;
      this.height = image.height;
   }

   draw() {
      c.drawImage(this.image, this.x, this.y);
   }
}

//Object containing all the details on my work experiences
let experience = {
   'Home': {
      'title': 'Eric Gan\'s Portfolio',
      'dates': '',
      'place': '',
      'tools': 'Hello, I\'m Eric Gan, a Software Developer, Mentor, Researcher, and Team Player. I am excited to take my strong background in Computer Science and apply that to software development in the industry in order to help develop new and interesting technologies.',
      'languages': 'You can contact me at 2019egan@gmail.com or 571-733-4464',
      'info': 'Move the character above with A/left and D/right keys or the buttons on the top to navigate my portfolio. Also feel free to use the navigation buttons at the top to go to specific parts of the portfolio!'
   },
   'Amazon': {
      'title': 'Amazon: Software Development Engineering Intern (2 Summers)',
      'dates': 'May 2021 – Aug. 2022',
      'place': 'Seattle, WA',
      'tools': 'Amazon S3, DynamoDb, AWS Step Functions, Amazon SQS, Amazon Lambda Functions',
      'languages': 'Python, Java, SQL, XML, Angular, HTML, Scala, Java',
      'info': 'Worked on the inventory control team to develop new features for an internal auditing tool used by the corresponding science team. Developed automated generation of new data for the new features that weren\'t supported yet. Worked on the frontend and backend of the auditing tool to give the user access to the new features and the new data that was generated. Developed the feature to run automated simulations with the click of a button so that the scientists wouldn\'t have to waste so much time doing each step manually. Created a button on the frontend that could make a call to the backend to trigger the simulation.'
   },
   'TA': {
      'title': 'CMU SCS: 15-122 (Principles of Imperative Computation) Teaching Assistant',
      'dates': 'June 2020 – May 2022',
      'place': 'Pittsburgh, PA',
      'tools': 'Communication, Leadership, Teaching',
      'languages': 'C',
      'info': '15-122 is one of the largest and most interdisciplinary computer science courses offered at CMU. Mentor students of all computer science backgrounds and majors. Play an integral part of making sure that the semester goes by smoothly by attending weekly grading meetings, teaching a programming lab every week, and holding weekly office hours.'
   },
   'Fullstack': {
      'title': 'TalkMeUp: Full Stack Development Intern',
      'dates': 'May 2020 – Aug. 2020',
      'place': 'Pittsburgh, PA',
      'tools': 'MongoDB, React',
      'languages': 'Typescript, Angular',
      'info': 'Tackled the challenge of familiarizing myself with new programming languages and frameworks like Typescript and Angular. Developed the user onboarding pages on the v 2.0 website from scratch and ensured successful transfer of data between frontend and backend. Involved myself in the SaaS (Software as a Service) product development process.'
   },
   'Robot': {
      'title': 'Developing Motion Tracking for Robot Application',
      'dates': 'Jan. 2022 – May. 2022',
      'place': 'Pittsburgh, PA',
      'tools': 'OpenCV',
      'languages': 'Python',
      'info': 'Utilized OpenCV to track key points of a person’s hand through motions. Kept track of the motions for these motions so a robot arm could recognize these motions and replicate them.'
   },
   'StackV': {
      'title': 'Developing Python API (StackV)',
      'dates': 'Jan. 2021 – June. 2021',
      'place': 'Berkeley, CA',
      'tools': 'Swagger API, Shell Scripts',
      'languages': 'Python',
      'info': 'Worked as a student researcher in the Lawrence Berkeley National Laboratory. Reviewed shell scripts for older product and converted into python scripts for the 2.0 product. Applied new methods defined in the Swagger API into the new python scripts.'
   },
   'NLP': {
      'title': 'Question-Answering Program',
      'dates': 'Aug. 2020 – Dec. 2020',
      'place': 'Pittsburgh, PA',
      'tools': 'NLTK Toolkit, Docker',
      'languages': 'Python',
      'info': 'Applied core NLP concepts like dependency parsing and POS tagging to question-answer generation. Utilized spacy library and language parsing for question generation, and the Facebook Infersent vector model and BERT language representation model for answer generation.'
   },
   'Booth': {
      'title': 'Smart Maker Video Reflection Booth',
      'dates': 'Feb. 2020 – May 2020',
      'place': 'Pittsburgh, PA',
      'tools': 'Pygame, Ffmpeg, Rasberry Pi',
      'languages': 'Python',
      'info': 'Developed and refined the program for the Smart Maker Reflection Booth as part of the NSF-funded Smart Making Spaces Project. Programmed a customer-friendly interface for the Smart Maker Reflection Booth. This interface focused on walking the customer through an extensive self-reflection process. Improved communication skills through constant meetings with the clients.'
   }
};

//Function to create an img object from src path
function createImage(imageSrc) {
   const image = new Image();
   image.src = imageSrc;
   return image;
}

//Function to change positions of all images and character such that
//Looks like character is back at the beginning
function home() {
   char = new Character();
   ground = [
      new Ground({
         x: 0,
         y: 470,
         image: createImage(grass)
      }),
      new Ground({
         x: 450,
         y: 470,
         image: createImage(grass)
      }),
      new Ground({
         x: 900,
         y: 470,
         image: createImage(grass)
      }),
      new Ground({
         x: 1350,
         y: 470,
         image: createImage(carpet)
      }),
      new Ground({
         x: 1800,
         y: 470,
         image: createImage(carpet)
      }),
      new Ground({
         x: 2250,
         y: 470,
         image: createImage(carpet)
      }),
      new Ground({
         x: 2700,
         y: 470,
         image: createImage(carpet)
      }),
      new Ground({
         x: 3150,
         y: 470,
         image: createImage(carpet)
      }),
      new Ground({
         x: 3600,
         y: 470,
         image: createImage(carpet)
      }),
      new Ground({
         x: 4050,
         y: 470,
         image: createImage(carpet)
      }),
      new Ground({
         x: 4500,
         y: 470,
         image: createImage(carpet)
      }),
      new Ground({
         x: 4950,
         y: 470,
         image: createImage(carpet)
      }),
      new Ground({
         x: 5400,
         y: 470,
         image: createImage(carpet)
      }),
      new Ground({
         x: 5850,
         y: 470,
         image: createImage(stone)
      }),
      new Ground({
         x: 6150,
         y: 470,
         image: createImage(stone)
      }),
      new Ground({
         x: 6450,
         y: 470,
         image: createImage(stone)
      }),
      new Ground({
         x: 6750,
         y: 470,
         image: createImage(stone)
      }),
      new Ground({
         x: 7050,
         y: 470,
         image: createImage(stone)
      }),
      new Ground({
         x: 7350,
         y: 470,
         image: createImage(stone)
      }),
      new Ground({
         x: 7650,
         y: 470,
         image: createImage(stone)
      }),
      new Ground({
         x: 7950,
         y: 470,
         image: createImage(stone)
      }),
      new Ground({
         x: 8250,
         y: 470,
         image: createImage(stone)
      }),
      new Ground({
         x: 8550,
         y: 470,
         image: createImage(stone)
      }),
      new Ground({
         x: 8850,
         y: 470,
         image: createImage(stone)
      }),
      new Ground({
         x: 9150,
         y: 470,
         image: createImage(stone)
      }),
      new Ground({
         x: 9450,
         y: 470,
         image: createImage(stone)
      }),
      new Ground({
         x: 9750,
         y: 470,
         image: createImage(stone)
      }),
      new Ground({
         x: 10050,
         y: 470,
         image: createImage(stone)
      }),
      new Ground({
         x: 10350,
         y: 470,
         image: createImage(stone)
      }),
   ];
   background = [
      new Background({
         x: -1,
         y: -1,
         image: createImage(castle_background)
      }),
      new Background({
         x: 1000,
         y: -1,
         image: createImage(portrait_background)
      }),
      new Background({
         x: 2000,
         y: -1,
         image: createImage(portrait_background)
      }),
      new Background({
         x: 3000,
         y: -1,
         image: createImage(portrait_background)
      }),
      new Background({
         x: 4000,
         y: -1,
         image: createImage(gold_background)
      }),
      new Background({
         x: 1350,
         y: 20,
         image: createImage(amazon)
      }),
      new Background({
         x: 2350,
         y: 20,
         image: createImage(ta)
      }),
      new Background({
         x: 3350,
         y: 20,
         image: createImage(fullstack)
      }),
      new Background({
         x: 4200,
         y: 173,
         image: createImage(robot)
      }),
      new Background({
         x: 4900,
         y: 173,
         image: createImage(python)
      }),
      new Background({
         x: 5600,
         y: 173,
         image: createImage(nlp)
      }),
      new Background({
         x: 6300,
         y: 173,
         image: createImage(booth)
      }),
   ];
   globalPosition = 0;
}

//Function to change positions of all images and character such that
//Looks like character is at the work experience section
function castle() {
   char = new Character();
   ground = [
      new Ground({
         x: -1350,
         y: 470,
         image: createImage(grass)
      }),
      new Ground({
         x: -900,
         y: 470,
         image: createImage(grass)
      }),
      new Ground({
         x: -450,
         y: 470,
         image: createImage(grass)
      }),
      new Ground({
         x: 0,
         y: 470,
         image: createImage(carpet)
      }),
      new Ground({
         x: 450,
         y: 470,
         image: createImage(carpet)
      }),
      new Ground({
         x: 900,
         y: 470,
         image: createImage(carpet)
      }),
      new Ground({
         x: 1350,
         y: 470,
         image: createImage(carpet)
      }),
      new Ground({
         x: 1800,
         y: 470,
         image: createImage(carpet)
      }),
      new Ground({
         x: 2250,
         y: 470,
         image: createImage(carpet)
      }),
      new Ground({
         x: 2700,
         y: 470,
         image: createImage(carpet)
      }),
      new Ground({
         x: 3150,
         y: 470,
         image: createImage(carpet)
      }),
      new Ground({
         x: 3600,
         y: 470,
         image: createImage(carpet)
      }),
      new Ground({
         x: 4050,
         y: 470,
         image: createImage(carpet)
      }),
      new Ground({
         x: 4500,
         y: 470,
         image: createImage(stone)
      }),
      new Ground({
         x: 4800,
         y: 470,
         image: createImage(stone)
      }),
      new Ground({
         x: 5100,
         y: 470,
         image: createImage(stone)
      }),
      new Ground({
         x: 5400,
         y: 470,
         image: createImage(stone)
      }),
      new Ground({
         x: 5700,
         y: 470,
         image: createImage(stone)
      }),
      new Ground({
         x: 6000,
         y: 470,
         image: createImage(stone)
      }),
      new Ground({
         x: 6300,
         y: 470,
         image: createImage(stone)
      }),
      new Ground({
         x: 6600,
         y: 470,
         image: createImage(stone)
      }),
      new Ground({
         x: 6900,
         y: 470,
         image: createImage(stone)
      }),
      new Ground({
         x: 7200,
         y: 470,
         image: createImage(stone)
      }),
      new Ground({
         x: 7500,
         y: 470,
         image: createImage(stone)
      }),
      new Ground({
         x: 7800,
         y: 470,
         image: createImage(stone)
      }),
      new Ground({
         x: 8100,
         y: 470,
         image: createImage(stone)
      }),
      new Ground({
         x: 8400,
         y: 470,
         image: createImage(stone)
      }),
      new Ground({
         x: 8700,
         y: 470,
         image: createImage(stone)
      }),
      new Ground({
         x: 9000,
         y: 470,
         image: createImage(stone)
      }),
   ];
   background = [
      new Background({
         x: -910,
         y: -1,
         image: createImage(castle_background)
      }),
      new Background({
         x: 90,
         y: -1,
         image: createImage(portrait_background)
      }),
      new Background({
         x: 1090,
         y: -1,
         image: createImage(portrait_background)
      }),
      new Background({
         x: 2090,
         y: -1,
         image: createImage(portrait_background)
      }),
      new Background({
         x: 3090,
         y: -1,
         image: createImage(gold_background)
      }),
      new Background({
         x: 440,
         y: 20,
         image: createImage(amazon)
      }),
      new Background({
         x: 1440,
         y: 20,
         image: createImage(ta)
      }),
      new Background({
         x: 2440,
         y: 20,
         image: createImage(fullstack)
      }),
      new Background({
         x: 3290,
         y: 173,
         image: createImage(robot)
      }),
      new Background({
         x: 3990,
         y: 173,
         image: createImage(python)
      }),
      new Background({
         x: 4690,
         y: 173,
         image: createImage(nlp)
      }),
      new Background({
         x: 5390,
         y: 173,
         image: createImage(booth)
      }),
   ];
   globalPosition = 1350;
}

//Function to change positions of all images and character such that
//Looks like character is at the projects section
function treasury() {
   char = new Character();
   ground = [
      new Ground({
         x: -5850,
         y: 470,
         image: createImage(grass)
      }),
      new Ground({
         x: -5400,
         y: 470,
         image: createImage(grass)
      }),
      new Ground({
         x: -4950,
         y: 470,
         image: createImage(grass)
      }),
      new Ground({
         x: -4500,
         y: 470,
         image: createImage(carpet)
      }),
      new Ground({
         x: -4050,
         y: 470,
         image: createImage(carpet)
      }),
      new Ground({
         x: -3600,
         y: 470,
         image: createImage(carpet)
      }),
      new Ground({
         x: -3150,
         y: 470,
         image: createImage(carpet)
      }),
      new Ground({
         x: -2700,
         y: 470,
         image: createImage(carpet)
      }),
      new Ground({
         x: -2250,
         y: 470,
         image: createImage(carpet)
      }),
      new Ground({
         x: -1800,
         y: 470,
         image: createImage(carpet)
      }),
      new Ground({
         x: -1350,
         y: 470,
         image: createImage(carpet)
      }),
      new Ground({
         x: -900,
         y: 470,
         image: createImage(carpet)
      }),
      new Ground({
         x: -450,
         y: 470,
         image: createImage(carpet)
      }),
      new Ground({
         x: 0,
         y: 470,
         image: createImage(stone)
      }),
      new Ground({
         x: 300,
         y: 470,
         image: createImage(stone)
      }),
      new Ground({
         x: 600,
         y: 470,
         image: createImage(stone)
      }),
      new Ground({
         x: 900,
         y: 470,
         image: createImage(stone)
      }),
      new Ground({
         x: 1200,
         y: 470,
         image: createImage(stone)
      }),
      new Ground({
         x: 1500,
         y: 470,
         image: createImage(stone)
      }),
      new Ground({
         x: 1800,
         y: 470,
         image: createImage(stone)
      }),
      new Ground({
         x: 2100,
         y: 470,
         image: createImage(stone)
      }),
      new Ground({
         x: 2400,
         y: 470,
         image: createImage(stone)
      }),
      new Ground({
         x: 2700,
         y: 470,
         image: createImage(stone)
      }),
      new Ground({
         x: 3000,
         y: 470,
         image: createImage(stone)
      }),
      new Ground({
         x: 3300,
         y: 470,
         image: createImage(stone)
      }),
      new Ground({
         x: 3600,
         y: 470,
         image: createImage(stone)
      }),
      new Ground({
         x: 3900,
         y: 470,
         image: createImage(stone)
      }),
      new Ground({
         x: 4200,
         y: 470,
         image: createImage(stone)
      }),
      new Ground({
         x: 4500,
         y: 470,
         image: createImage(stone)
      }),
   ];
   background = [
      new Background({
         x: -3910,
         y: -1,
         image: createImage(castle_background)
      }),
      new Background({
         x: -2910,
         y: -1,
         image: createImage(portrait_background)
      }),
      new Background({
         x: -1910,
         y: -1,
         image: createImage(portrait_background)
      }),
      new Background({
         x: -910,
         y: -1,
         image: createImage(portrait_background)
      }),
      new Background({
         x: 90,
         y: -1,
         image: createImage(gold_background)
      }),
      new Background({
         x: -2560,
         y: 20,
         image: createImage(amazon)
      }),
      new Background({
         x: -1560,
         y: 20,
         image: createImage(ta)
      }),
      new Background({
         x: -560,
         y: 20,
         image: createImage(fullstack)
      }),
      new Background({
         x: 290,
         y: 173,
         image: createImage(robot)
      }),
      new Background({
         x: 990,
         y: 173,
         image: createImage(python)
      }),
      new Background({
         x: 1690,
         y: 173,
         image: createImage(nlp)
      }),
      new Background({
         x: 2390,
         y: 173,
         image: createImage(booth)
      }),
   ];
   globalPosition = 5850;
}

//Functions for the buttons to move the character
function onLeftDown() {
   leftPressed = true;
   char.sprite = char.leftRun;
   char.frameLimit = 60;
}

function onRightDown() {
   rightPressed = true;
   char.sprite = char.rightRun;
   char.frameLimit = 60;
}

function onLeftUp() {
   leftPressed = false;
   char.sprite = char.leftStand;
   char.frameLimit = 240;
}
function onRightUp() {
   rightPressed = false;
   char.sprite = char.rightStand;
   char.frameLimit = 240;
}

//Binding home, castle, and treasury functions to their respective buttons
document.getElementById("left-button").addEventListener("mousedown", onLeftDown);
document.getElementById("right-button").addEventListener("mousedown", onRightDown);
document.getElementById("left-button").addEventListener("mouseup", onLeftUp);
document.getElementById("right-button").addEventListener("mouseup", onRightUp);
document.getElementById("home").addEventListener("click", home);
document.getElementById("castle").addEventListener("click", castle);
document.getElementById("treasury").addEventListener("click", treasury);

//Animate function that is constantly running in the background
//Constantly updates what the game looks like
function animate() {
   requestAnimationFrame(animate);
   for (i in background) {
      background[i].draw();
   }
   for (i in ground) {
      ground[i].draw();
   }
   char.update();
   //Character moves relative to the screen if between 100 and 600
   //In the overall x coordinate
   if (rightPressed && char.x < 600) {
      char.x += char.speed;
   }
   else if (leftPressed && char.x > 100 && globalPosition > 0) {
      char.x -= char.speed;
   }
   else {
      //Otherwise, char doesn't move and the background and ground
      //Move to look like the char is moving
      //The background and ground also move at different speeds
      //To simulate a parallax effect
      if (rightPressed && globalPosition < 9500) {
         globalPosition += char.speed;
         for (i in background) {
            background[i].x -= char.speed * 0.66;
         }
         for (i in ground) {
            ground[i].x -= char.speed;
         }
      }
      else if (leftPressed && globalPosition > 0) {
         globalPosition -= char.speed;
         for (i in background) {
            background[i].x += char.speed * 0.66;
         }
         for (i in ground) {
            ground[i].x += char.speed;
         }
      }
   }

   //Whenever the character moves into a new "area",
   //The details outside of the game canvas update to
   //Show the viewer more detailed information about my experiences
   //The been... variables are used to know if I'm entering a new 
   //Section or not
   if (globalPosition < 800) {
      if (!beenHome) {
         animateText('Home');
      }
      beenHome = true;
      beenAmazon = false;
      beenTA = false;
      beenFull = false;
      beenRobot = false;
      beenPython = false;
      beenNLP = false;
      beenBooth = false;
   }
   else if (globalPosition < 2100) {
      if (!beenAmazon) {
         animateText('Amazon');
      }
      beenAmazon = true;
      beenHome = false;
      beenTA = false;
      beenFull = false;
      beenRobot = false;
      beenPython = false;
      beenNLP = false;
      beenBooth = false;

   }
   else if (globalPosition < 3800) {
      if (!beenTA) {
         animateText('TA');
      }
      beenTA = true;
      beenAmazon = false;
      beenHome = false;
      beenFull = false;
      beenRobot = false;
      beenPython = false;
      beenNLP = false;
      beenBooth = false;
   }
   else if (globalPosition < 5000) {
      if (!beenFull) {
         animateText('Fullstack');
      }
      beenFull = true;
      beenAmazon = false;
      beenTA = false;
      beenHome = false;
      beenRobot = false;
      beenPython = false;
      beenNLP = false;
      beenBooth = false;
   }
   else if (globalPosition < 6300) {
      if (!beenRobot) {
         animateText('Robot');
      }
      beenRobot = true;
      beenAmazon = false;
      beenTA = false;
      beenFull = false;
      beenHome = false;
      beenPython = false;
      beenNLP = false;
      beenBooth = false;
   }
   else if (globalPosition < 7400) {
      if (!beenPython) {
         animateText('StackV');
      }
      beenPython = true;
      beenAmazon = false;
      beenTA = false;
      beenFull = false;
      beenRobot = false;
      beenHome = false;
      beenNLP = false;
      beenBooth = false;
   }
   else if (globalPosition < 8500) {
      if (!beenNLP) {
         animateText('NLP');
      }
      beenNLP = true;
      beenAmazon = false;
      beenTA = false;
      beenFull = false;
      beenRobot = false;
      beenPython = false;
      beenHome = false;
      beenBooth = false;
   }
   else {
      if (!beenBooth) {
         animateText('Booth');
      }
      beenBooth = true;
      beenAmazon = false;
      beenTA = false;
      beenFull = false;
      beenRobot = false;
      beenPython = false;
      beenNLP = false;
      beenHome = false;
   }
}

//Function to update the text on the screen based on which section
//The character is in
function showDetails(section) {
   details = experience[section];
   title_info = details.title;
   dates_info = details.dates;
   place_info = details.place;
   tools_info = details.tools;
   languages_info = details.languages;
   details_info = details.info;

   let title = document.querySelector('.title');
   let dates = document.querySelector('.dates');
   let place = document.querySelector('.place');
   let tools = document.querySelector('.tools');
   let languages = document.querySelector('.languages');
   title.innerText = title_info;
   dates.innerText = dates_info;
   place.innerText = place_info;
   if (section != 'Home') {
      tools.innerText = 'Tools/Skills: ' + tools_info;
      languages.innerText = 'Languages Used: ' + languages_info;
   } else {
      tools.innerText = tools_info;
      languages.innerText = languages_info;
   }

   let info = document.querySelector('.info');
   info.innerText = details_info;
}

//Function to animate the text moving into the screen
//Uses the anime.js library
function animateIn() {
   anime.timeline({ loop: false })
      .add({
         targets: ['.information, .details'],
         translateX: [60, 0],
         opacity: [0, 1],
         easing: "easeOutExpo",
         duration: 700,
         delay: 300
      });
}

//Function to update the text and animate it moving into the screen
function animateText(section) {
   animateIn();
   setTimeout(showDetails, 100, section);
}

//Create the character
let char = new Character();

//Set the beginning values of these variables
let beenHome = false;
let beenAmazon = false;
let beenTA = false;
let beenFull = false;
let beenRobot = false;
let beenPython = false;
let beenNLP = false;
let beenBooth = false;

//Set beginning positions of the ground and background objects
let ground = [
   new Ground({
      x: 0,
      y: 470,
      image: createImage(grass)
   }),
   new Ground({
      x: 450,
      y: 470,
      image: createImage(grass)
   }),
   new Ground({
      x: 900,
      y: 470,
      image: createImage(grass)
   }),
   new Ground({
      x: 1350,
      y: 470,
      image: createImage(carpet)
   }),
   new Ground({
      x: 1800,
      y: 470,
      image: createImage(carpet)
   }),
   new Ground({
      x: 2250,
      y: 470,
      image: createImage(carpet)
   }),
   new Ground({
      x: 2700,
      y: 470,
      image: createImage(carpet)
   }),
   new Ground({
      x: 3150,
      y: 470,
      image: createImage(carpet)
   }),
   new Ground({
      x: 3600,
      y: 470,
      image: createImage(carpet)
   }),
   new Ground({
      x: 4050,
      y: 470,
      image: createImage(carpet)
   }),
   new Ground({
      x: 4500,
      y: 470,
      image: createImage(carpet)
   }),
   new Ground({
      x: 4950,
      y: 470,
      image: createImage(carpet)
   }),
   new Ground({
      x: 5400,
      y: 470,
      image: createImage(carpet)
   }),
   new Ground({
      x: 5850,
      y: 470,
      image: createImage(stone)
   }),
   new Ground({
      x: 6150,
      y: 470,
      image: createImage(stone)
   }),
   new Ground({
      x: 6450,
      y: 470,
      image: createImage(stone)
   }),
   new Ground({
      x: 6750,
      y: 470,
      image: createImage(stone)
   }),
   new Ground({
      x: 7050,
      y: 470,
      image: createImage(stone)
   }),
   new Ground({
      x: 7350,
      y: 470,
      image: createImage(stone)
   }),
   new Ground({
      x: 7650,
      y: 470,
      image: createImage(stone)
   }),
   new Ground({
      x: 7950,
      y: 470,
      image: createImage(stone)
   }),
   new Ground({
      x: 8250,
      y: 470,
      image: createImage(stone)
   }),
   new Ground({
      x: 8550,
      y: 470,
      image: createImage(stone)
   }),
   new Ground({
      x: 8850,
      y: 470,
      image: createImage(stone)
   }),
   new Ground({
      x: 9150,
      y: 470,
      image: createImage(stone)
   }),
   new Ground({
      x: 9450,
      y: 470,
      image: createImage(stone)
   }),
   new Ground({
      x: 9750,
      y: 470,
      image: createImage(stone)
   }),
   new Ground({
      x: 10050,
      y: 470,
      image: createImage(stone)
   }),
   new Ground({
      x: 10350,
      y: 470,
      image: createImage(stone)
   }),
];
let background = [
   new Background({
      x: -1,
      y: -1,
      image: createImage(castle_background)
   }),
   new Background({
      x: 1000,
      y: -1,
      image: createImage(portrait_background)
   }),
   new Background({
      x: 2000,
      y: -1,
      image: createImage(portrait_background)
   }),
   new Background({
      x: 3000,
      y: -1,
      image: createImage(portrait_background)
   }),
   new Background({
      x: 4000,
      y: -1,
      image: createImage(gold_background)
   }),
   new Background({
      x: 1350,
      y: 20,
      image: createImage(amazon)
   }),
   new Background({
      x: 2350,
      y: 20,
      image: createImage(ta)
   }),
   new Background({
      x: 3350,
      y: 20,
      image: createImage(fullstack)
   }),
   new Background({
      x: 4200,
      y: 173,
      image: createImage(robot)
   }),
   new Background({
      x: 4900,
      y: 173,
      image: createImage(python)
   }),
   new Background({
      x: 5600,
      y: 173,
      image: createImage(nlp)
   }),
   new Background({
      x: 6300,
      y: 173,
      image: createImage(booth)
   }),
];

//Initially, no key is pressed so rightPressed and leftPressed are false
let rightPressed = false;
let leftPressed = false;

//Before any movement is done, the globalPosition is 0 (beginning)
let globalPosition = 0;

//Set the details to show the info from Home because the website 
//starts on the home section
showDetails('Home');

//Call the animate function that updates the canvas and runs in the background
animate();

//Eventlisteners so that the user can navigate the website with the controls
window.addEventListener('keydown', (event) => {
   switch (event.key) {
      case 'a':
         leftPressed = true;
         char.sprite = char.leftRun;
         char.frameLimit = 60;
         break;
      case 'd':
         rightPressed = true;
         char.sprite = char.rightRun;
         char.frameLimit = 60;
         break;
      case 'ArrowLeft':
         leftPressed = true;
         char.sprite = char.leftRun;
         char.frameLimit = 60;
         break;
      case 'ArrowRight':
         rightPressed = true;
         char.sprite = char.rightRun;
         char.frameLimit = 60;
         break;
   }
});

window.addEventListener('keyup', (event) => {
   switch (event.key) {
      case 'a':
         leftPressed = false;
         char.sprite = char.leftStand;
         char.frameLimit = 240;
         break;
      case 'd':
         rightPressed = false;
         char.sprite = char.rightStand;
         char.frameLimit = 240;
         break;
      case 'ArrowLeft':
         leftPressed = false;
         char.sprite = char.leftStand;
         char.frameLimit = 240;
         break;
      case 'ArrowRight':
         rightPressed = false;
         char.sprite = char.rightStand;
         char.frameLimit = 240;
         break;
   }
});
