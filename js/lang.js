
let frEn={
    'Home':'Accueil',
    'About':'A Propos',
    'Skills':'Competences',
    'Services':'Services',
    'Projects':'Projets',
    'Contact':'Contact',
	'Developer <span>Web</span> FullStack':'Developpeur <span>Web</span> FullStackxx',
	'Download CV':'télécharger CV',    
	'A passionate web developer	My passion for web development I started in 2017 programming with langauge C algorithm and JAVA oracle mySql...	I obtained my 2021 diploma in computer development, I turned to new technologies (php, JavaScript) 	and their different Frameworks (laravel,vue.js,react.js.node.js,WordPress) by doing self-training, I made every effort to break into this path, while taking pleasure in the various projects developed.':
	'Un développeur web passionné Ma passion pour le développement web 	j\'ai commencé en 2017 la programation avec algorithme langauge C et JAVA oracle mySql... J\'ai obtenu mon diplome 2021 en développement informatique,je me suis orienté vers les nouvelles technologies (php,JavaScript) et leurs différentes Frameworks (laravel,vue.js,react.js.node.js,WordPress) en faisant l\'autoformation, je mis tout en oeuvre pour percer dans cette voie, tout en prenant du plaisir sur les divers projets développés.',
	'name':'nom',
	'Travel':'voyager',
	'Movie'	:'films',
	'Reading':'La Lecture',
	'My Skills':'Mes Competences',
	'Web Design':'RESPONSIVE DESIGN',
	'Compatible with all media, tablet & mobile application.':'Compatible tous supports, tablette & application mobile',
	'web development':'Web Development',
	'Showcase, corporate, event site,e-commerce, intranet, mobile application':'Site vitrine,évènementiel,e-commerce,web application.',
	'GRAPHIC DESIGN & WEBDESIGN':'CONCEPTION GRAPHIQUE & WEBDESIGN',
	'Logos, Web templates, advertising brochures,business cards, newsletters...':'Logos, templates Web, plaquettes publicitaires,cartes de visite, newsletters...',
	'ADMINISTRATION INTERFACE':'INTERFACE D\'ADMINISTRATION',
	'Specific tools for proper operation of your company.':'Outils spécifiques au bon fonctionnement de votre entreprise.',
	'WEB INTEGRATION':'INTÉGRATION WEB',
	'(X)HTML / CSS integrations	compliance with web standards.':'Des intégrations (X)HTML / CSS	respectueuses des standards du Web.',
	'SEO':'SEO',
	'Semantic display of information,clean pages for optimal SEO. ':'Affichage sémantique des informations,des pages propres pour un référencement optimal.',
	'Have a project on your mind.':'vous avez un projet à réaliser',
	'Contact me':'Contactez moi',
	'Our Projects':'Mes Projets réalisés',
	'I turned to new technologies (php, JavaScript) 	and their different Frameworks (laravel,vue.js,react.js.node.js,WordPress) by doing self-training, I made every effort to break into this path, while taking pleasure in the various projects developed.':'en 2019 je me suis orienté vers les nouvelles technologies (php,JavaScript) et leurs différentes Frameworks (laravel,vue.js,react.js.node.js,WordPress) en faisant l\'autoformation, je mis tout en oeuvre pour percer dans cette voie, tout en prenant du plaisir sur les divers projets développés.',
	'Links':'Liens',
	'About Me':'A Propos de moi',

}
lang=localStorage.getItem('lang') ? localStorage.getItem('lang'):'en'
document.getElementById('changeToFrance').addEventListener('click',function(){
  localStorage.setItem('lang','fr');	
})
document.getElementById('changeToEnglish').addEventListener('click',function(){
	localStorage.setItem('lang','en');	
 })

if(lang=='en'){
document.getElementById('formEnglish').style.display='none';	
// document.getElementById('Download2').style.display='none';	
currentLang=Object.keys(frEn)	
}
if(lang=='fr'){
document.getElementById('formFrance').style.display='none';	
// document.getElementById('Download').style.display='none';	
currentLang=Object.values(frEn)	
}
console.log(currentLang[9])
document.querySelector('.Home').innerHTML=currentLang[0];
document.querySelector('.About').innerHTML=currentLang[1];
document.querySelector('.Skills').innerHTML=currentLang[2];
document.querySelector('.Services').innerHTML=currentLang[3];
document.querySelector('.Projects').innerHTML=currentLang[4];
document.querySelector('.Contact').innerHTML=currentLang[5];
document.querySelector('.Developer').innerHTML=currentLang[6];
// document.querySelector('.Download').innerHTML=currentLang[7];
document.querySelector('.Biography').innerHTML=currentLang[8];
document.querySelector('.Name').innerHTML=currentLang[9];
document.querySelector('.Travel').innerHTML=currentLang[10];
document.querySelector('.Movie').innerHTML=currentLang[11];
document.querySelector('.Reading').innerHTML=currentLang[12];
document.querySelector('.My-Skills').innerHTML=currentLang[13];
document.querySelector('.s1').innerHTML=currentLang[14];
document.querySelector('.s2').innerHTML=currentLang[15];
document.querySelector('.s3').innerHTML=currentLang[16];
document.querySelector('.s4').innerHTML=currentLang[17];
document.querySelector('.s5').innerHTML=currentLang[18];
document.querySelector('.s6').innerHTML=currentLang[19];
document.querySelector('.s7').innerHTML=currentLang[20];
document.querySelector('.s8').innerHTML=currentLang[21];
document.querySelector('.s9').innerHTML=currentLang[22];
document.querySelector('.s10').innerHTML=currentLang[23];
document.querySelector('.s11').innerHTML=currentLang[24];
document.querySelector('.s12').innerHTML=currentLang[25];
document.querySelector('.s13').innerHTML=currentLang[26];
document.querySelector('.s14').innerHTML=currentLang[27];
document.querySelector('.s15').innerHTML=currentLang[28];
document.querySelector('.f2').innerHTML=currentLang[29];
document.querySelector('.f8').innerHTML=currentLang[30];
document.querySelector('.About2').innerHTML=currentLang[31];

// ======================
document.querySelector('.My-Services').innerHTML=currentLang[3];
document.querySelector('.s16').innerHTML=currentLang[5];
document.querySelector('.f1').innerHTML=currentLang[1];
document.querySelector('.f3').innerHTML=currentLang[0];
document.querySelector('.f4').innerHTML=currentLang[1];
document.querySelector('.f5').innerHTML=currentLang[3];
document.querySelector('.f6').innerHTML=currentLang[4];
document.querySelector('.f7').innerHTML=currentLang[5];

document.querySelector('.f9').innerHTML=currentLang[14];
document.querySelector('.f10').innerHTML=currentLang[16];
document.querySelector('.f11').innerHTML=currentLang[18];
document.querySelector('.f12').innerHTML=currentLang[20];
document.querySelector('.f13').innerHTML=currentLang[22];
document.querySelector('.f14').innerHTML=currentLang[3];


console.log(currentLang[8])