function exercice1() {
	let fruits = ['Pomme', 'Poire', 'Ananas'];
	let last = fruits.pop(); // supprime Ananas à la fin
	let first = fruits.unshift('Ananas'); //mettre Ananas au début de la liste
	document.getElementById("exercice1Resultat")innerHTML="fruits";
	
}


function exercice2() {
	let mots = ["Ici", ",", "on", "entre", "du", "texte", "qu", "'", "on", "va", "segmenter", "en", "mots", "."];
	document.getElementById("exercice2Resultat").innerHTML="mots".join("\s");

	document.getElementById("exercice2Resultat").innerHTML= "mots".toUpperCase();
}


function exercice3() {
	let mots = ["Ici", ",", "on", "entre", "du", "texte", "qu", "'", "on", "va", "segmenter", "en", "mots", "."];
	document.getElementById("exercice3Resultat").innerHTML="mots".join("\s");
	if (mots <= 3) {
		delete mot
	};//Découpez le texte suivants en mots (selon des espaces) puis retirer les mots qui ont une taille de 3 ou moins.
	document.getElementById("exercice3Resultat").innerHTML= "mots";
}


function exercice4() {
	let mots = ["Ici", ",", "on", "entre", "du", "texte", "qu", "'", "on", "va", "segmenter", "en", "mots", "."];
	mots.join("\s");
	mots.forEach(element => console.log(element));

	const para= document.createElementById("p");para.innerHTML="mots";
	document.getElementById("exercice4Resultat").appendChild(para);
}
