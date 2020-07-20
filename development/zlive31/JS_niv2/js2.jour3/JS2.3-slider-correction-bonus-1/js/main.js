'use strict';   // Mode strict du JavaScript

/*************************************************************************************************/
/* ****************************************** DONNEES ****************************************** */
/*************************************************************************************************/

// Déclaration de constantes
const AUTOPLAY_DELAY = 3000;

// Codes des touches du clavier
const ARROW_LEFT = 'ArrowLeft';
const ARROW_RIGHT = 'ArrowRight';
const SPACE = 'Space';

/**
 *   Déclaration des variables globales dont on aura besoin dans tout le script
 *		-> Données concernant les slides (liste des éléments DOM <figure>)
 *		-> Objet contenant l'état du slider (indice de la slide courante, chronomètre)
 */
let slides;
let state;

/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/

/**
 * Met à jour le slider en fonction de la slide que l'on souhaite afficher
 * -> on enlève la classe 'active' à la slide qui la possède pour la donner à la nouvelle slide
 * -> la slide à afficher est la slide dont l'indice dans le tableau de slides vaut state.index
 */
function refreshSlider()
{
	// Supprimer la classe 'active' de la figure actuellement visible
	const activeSlide = document.querySelector('.active');
	activeSlide.classList.remove('active');

	// Faire apparaître la figure demandée en lui ajoutant la classe 'active'
	slides[ state.index ].classList.add('active');

	// Bonus 1 - Puces
	refreshDots();
}

/**
 * Bonus 1 - Puces
 *
 * Mise à jour de la puce sélectionnée
 */
function refreshDots()
{
	/**
	 *	Changer la classe selected sur slider-dots
	 * 		 1 - supprimer la classe 'selected' de la puce actuellement sélectionnée
	 * 		 2 - ajouter la classe 'selected' à la puce que l'on souhaite sélectionner,
	 *           c'est-à-dire l'élément <li> dont l'attribut data-index vaut state.index
	 *
	 *	Rappel : [data-index = "1"] : sélecteur css permettant de cibler les éléments dont l'attribut data-index vaut "1"
	 */
	const currentSelectedBullet = document.querySelector('#slider-dots .selected');
	currentSelectedBullet.classList.remove('selected');

	// Cibler la puce dont l'attribut data-slide correspond à state.index
	const newSelectedBullet = document.querySelector('[data-index="' + state.index + '"]');

	/**
	 * Avec l'interpolation, les "templates strings" introduits par ES2015 :
	 *
	 * newSelectedBullet = document.querySelector(`[data-index="${state.index}"]`);
	 */

	newSelectedBullet.classList.add('selected');
}

/**
 * Passer à la slide suivante
 */
function onSliderGoToNext()
{
  // Passage à la slide suivante : on incrémente l'indice de la slide courante
  state.index++;

  // Est-ce qu'on est arrivé à la fin de la liste des slides ?
  if(state.index == slides.length) {

      // Oui, on revient au début, à la première slide, d'indice 0
      state.index = 0;
  }

  // Mise à jour de l'affichage.
  refreshSlider();
}

/**
 * Passer à la slide précédente
 */
function onSliderGoToPrevious()
{
  // Passage à la slide précédente : on décrémente l'indice de la slide courante
  state.index--;

  // Est-ce qu'on est revenu au début de la liste des slides ?
  if(state.index < 0) {

      // Oui, on revient à la fin (le carrousel est circulaire).
      state.index = slides.length - 1;
  }

  // Mise à jour de l'affichage.
  refreshSlider();
}

/**
 * Affiche une slide aléatoire différente de la slide courante
 */
function onSliderGoToRandom()
{
	let random;

	do {
		random = getRandomInteger(0, slides.length - 1);
	}
	while(random == state.index);

	// Passage à une slide aléatoire
	state.index = random;

	// Mise à jour de l'affichage.
	refreshSlider();
}


/**
 * Lance ou stopper le défilement automatique du slider
 */
function onSliderPlayPause()
{
  // Sélection du bouton Play/Pause pour changer son attribut title
  const playPauseButton = document.querySelector('#play-pause');

  // Si le carousel est arrêté (aucun timer n'est lancé)
  if( state.timer == null) {

    // On passe à la slide suivante selon un intervalle de temps fixe
    state.timer = window.setInterval(onSliderGoToNext, AUTOPLAY_DELAY);

    // Modification du libellé du bouton en mode "Pause".
	playPauseButton.title = 'Arrêter le diaporama';
  }
  else {

  	// Si un timer existe, on le stoppe et on réinitialise state.timer
    window.clearInterval( state.timer );
    state.timer = null;

	// Modification du libellé du bouton en mode "Play".
	playPauseButton.title = 'Démarrer le diaporama';
  }

  // Modification de l'icône du bouton play/pause
  const icon = document.querySelector('#play-pause i');
  icon.classList.toggle('fa-play');
  icon.classList.toggle('fa-pause');
}

/**
 * Gestionnaire d'événement responsable du clavier
 * @param event - Objet événement grâce auquel on va savoir quelle touche du clavier a été enfoncée
 */
function onSliderKeyDown(event)
{
  /**
   * On teste la propriété code de l'objet event, c'est un code qui représente la touche du clavier enfoncée
   * https://developer.mozilla.org/fr/docs/Web/API/KeyboardEvent/code
   */
  switch(event.code) {

    case ARROW_RIGHT :
        onSliderGoToNext();
        break;

    case ARROW_LEFT :
        onSliderGoToPrevious();
      	break;

	case SPACE :

		/**
		 * Annulation du comportement par défaut du navigateur qui va faire défiler
		 * la page lorsqu'on appuie sur la barre d'espace
 		 */
		event.preventDefault();
		onSliderPlayPause();
		break;
  }
}


/**
 * Bonus 1 - Puces
 *
 * Création et insertion dans l'élément <ol id="slider-dots"> d'éléments <li>
 * représentant les puces d ela pagination. On créera une puce pour chaque slide.
 *
 * Chaque puce stockera dans un attribut data l'indice de la slide associée.
 * La puce associée à la slide courante, actuellement affichée, aura la classe 'selected'
 */
function createDots()
{
	// Sélection de l'élément <ol> qui va contenir la pagination
	const dotsContainer = document.querySelector('#slider-dots');

	// On parcours les slides
	for( let index = 0; index < slides.length ; index++ ) {

		// Création d'un élément <li>
		const item = document.createElement('li');

		// Ajout d'un attribut data-index permettent de savoir à quelle image l'item correspond
		item.dataset.index = index; // ou bien : item.setAttribute('data-slide',index);

		// Par défaut au chargement de la page c'est la première slide qui est sélectionnée
		if(index == 0) {
			item.classList.add('selected');
		}

		// Insertion de la li dans la liste numérotée
		dotsContainer.appendChild(item);
	}
}

/**
 * Bonus 1 - Puces
 * Gestionnaire d'événement au clic sur la pagination
 * @param event - Objet événement
 */
function onClickDots(event)
{
	/**
	 * Le gestionnaire d'événement est installé avec délégation, c'est-à-dire
	 * sur un élément parent des éléments qui nous intéressent. Il est donc déclenché
	 * lorsqu'on clique n'importe où sur l'élément <ol> qui contient la pagination.
	 *
	 * On va donc devoir vérifier quel élément a réellement été cliqué.
	 * On ne fera quelque chose seulement si c'est une puce (un élément <li>) qui est cliqué.
	 *
	 * Pour récupérer l'élément réellement cliqué, on utilisera la propriété target de l'objet event
	 * La propriété currentTarget, comme this, représente quant à elle l'élément déclencheur, c'est-à-dire
	 * l'élément sur lequel a été installé le gestionnaire d'événement.
	 */

	// Tester les différentes valeur en fonction de l'endroit cliqué
	// console.log(this);
	// console.log(event.target);
	// console.log(event.currentTarget);

	/**
	 * Si l'élément réellement cliqué est un élément <li> et qu'on a cliqué
	 * sur une puce associée à une autre slide que la slide courante...
	 *
	 * On vérifie la balise cliquée avec la méthode element.matches() qui permet de savoir si
	 * un élément correspond à un sélecteur particulier
	 * https://developer.mozilla.org/fr/docs/Web/API/Element/matches
 	 */
	if( event.target.matches('#slider-dots li') && state.index != event.target.dataset.index) {

		state.index = event.target.dataset.index; // ou bien : state.index = event.target.getAttribute('data-index');

		refreshSlider();
	}
}


/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/

/**
 * Code principal : code JavaScript exécuté dès le chargement de la page
 *
 * Pour s'assurer que le DOM est chargé (puisqu'on va le manipuler), on écoute l'événement 'DOMContentLoaded'
 * sur le document entier. Cet événement est lancé lorsque le navigateur a terminé de constuire le DOM.
 *
 * https://developer.mozilla.org/fr/docs/Web/Events/DOMContentLoaded
 *
 * On utilise en général comme fonction gestionnaire d'événement associée une fonction anonyme car
 * on ne l'appellera jamais ailleurs nous-même.
*/
document.addEventListener('DOMContentLoaded', function() {

	// Liste des slides constituant le slider (liste des éléments <figure>)
	slides = document.querySelectorAll('.slider-figure');

	state = new Object();
	state.index = 0; // Indice de la slide courante (actuellement affichée), au départ, c'est la première
	state.timer = null; // Chronomètre correspondant au défilement automatique, au départ il n'y en a pas

	// Installation des gestionnaires d'événements
	installEventHandler('#prev','click', onSliderGoToPrevious );
	installEventHandler('#next','click', onSliderGoToNext );
	installEventHandler('#random', 'click', onSliderGoToRandom);
	installEventHandler('#play-pause', 'click', onSliderPlayPause);

	/**
	 * L'évènement d'appui sur une touche doit être installé sur l'ensemble du
	 * document, on ne recherche pas une balise en particulier dans l'arbre DOM.
	 *
	 * L'ensemble de la page c'est la balise <html> et donc la variable document.
	 */
	document.addEventListener('keydown', onSliderKeyDown);

	/**
	 * Bonus 1 - Puces
	 *
	 * -> Création de la pagination de manière dynamique
	 * -> Installation d'un gestionnaire d'événement au clic sur la pagination avec délégation d'événement
	 */
	createDots();
	installEventHandler('#slider-dots','click', onClickDots );
});
