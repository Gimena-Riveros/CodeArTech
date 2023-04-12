var data = {
	"english":
	{
		"title": "Hello World, the first program for every developer",
		"description":
			"For all those people who enter the world of programming or have a first contact with it, our first great achievement is to print a \"Hello World!\" or \"Hello World!\" on our screen. This can be defined as the first program for every developer and we even continue to use it as the initial test for every new project. However, the history or why of the origin of the famous \"Hello World\" is somewhat uncertain, we can affirm that its first invocation dates back to the 70s where Brian Kernighan, author of one of the most famous programming books in the history: C Programming Language (1978) and previously, in 1973 a book called A Tutorial Introduction to the Programming Language B, first introduced the example of the famous Hello World.",
		"potential":
			"we raise your potential",
		"knowUs":
			"KNOW US"
	},
	"spanish":
	{
		"title": "Hola Mundo, el primer programa de todo desarrollador",
		"description":
			"Para todas aquellas personas que ingresan al mundo de la programación o bien tienen un primer contacto con ella, nuestro primer gran logro es imprimir un «Hola Mundo!» o «Hello World!» en nuestra pantalla. Esto se puede definir como el primer programa de todo desarrollador e incluso seguimos utilizándolo como la prueba inicial de todo nuevo proyecto. Sin embargo, la historia o el porque del origen del famoso «Hola Mundo» es algo incierto, podemos afirmar que su primer invocación se remonta a la década de los 70 donde Brian Kernighan, autor de uno de los libros de programación más famosos de la historia: C Progamming Language (1978) y previamente, en 1973 un libro llamado A Tutorial Introduction to the Programming Language B, introdujo por primera vez el ejemplo del famoso Hello World.",
		"potential":
			"elevamos tu potencial",
		"knowUs":
			"CONOCENOS"
	},
	"italian":
	{
		"title": "Hello World, il primo programma per ogni sviluppatore",
		"description":
			"Per tutte quelle persone che entrano nel mondo della programmazione o hanno il loro primo contatto con esso, il nostro primo grande traguardo è stampare un Hello World! o Ciao mondo! sul nostro schermo. Questo può essere definito come il primo programma per ogni sviluppatore e continuiamo ad usarlo anche come test iniziale per ogni nuovo progetto. Tuttavia la storia o il perché dell'origine del famoso Hello World è alquanto incerta, possiamo affermare che la sua prima invocazione risale agli anni '70 dove Brian Kernighan, autore di uno dei libri di programmazione più famosi della storia: C Programming Language (1978) e in precedenza, nel 1973, un libro intitolato A Tutorial Introduction to the Programming Language B, ha introdotto per la prima volta l'esempio del famoso Hello World.",
		"potential":
			"aumentiamo il tuo potenziale",
		"knowUs":
			"CONOSCICI"
	}
}
const langEl = document.querySelector('.langWrap');
const link = document.querySelectorAll('a');
const titleEl = document.querySelector('.title');
const descrEl = document.querySelector('.description');
const tuPotencial = document.querySelector('.potential');
const conocenos = document.querySelector('.knowUs');

link.forEach(el => {
	el.addEventListener('click', () => {
		langEl.querySelector('.active').classList.remove('active');
		el.classList.add('active');

		const attr = el.getAttribute('language');

		titleEl.textContent = data[attr].title;
		descrEl.textContent = data[attr].description;
		tuPotencial.textContent = data[attr].potential;
		conocenos.textContent = data[attr].knowUs;
	});
});