# Exercice: Liste de films Viméo et photos Flickr

## Enoncé

L'application devra supporter deux types de liens :

- vidéo Vimeo ( ex: <https://vimeo.com/565486457> )
- photo Flickr ( ex: <https://www.flickr.com/photos/feuilllu/45771361701/> )

L’utilisateur aura une vue principale contenant un formulaire d'ajout et une liste des bookmarks.

Le formulaire d'ajout comporte un champ de saisie pour l'url du lien et un bouton de soumission. Lors de la soumission du lien, un appel à l'API <https://noembed.com/> sera effectué pour obtenir les informations de la vidéo ou de la photo.

Les informations suivantes seront affichées pour un lien Vimeo :

- Aperçu vidéo (si disponible)
- URL
- Titre de la vidéo
- Auteur
- Date d'ajout dans l'application (il y a une heure, il y a 2 minutes...)
- Date de publication sur Vimeo (le 3 novembre 2020)
- Durée (hh:mm:ss)

Les informations suivantes seront affichées pour un lien Flickr :

- Aperçu photo
- URL
- Titre de la photo
- Auteur
- Date d'ajout dans l'application (il y a une heure, il y a 2 minutes...)
- Date de publication sur Flickr (le 3 novembre 2020)
- Largeur x Hauteur

Un bouton de suppression sera également présent pour chaque lien.

## installation

Exécuter npm i puis npm run dev

## lancement

Sur le navigateur, aller sur cette url: <http://localhost:5173/>

## Améliorations possibles

- Meilleure gestion du loading et disabled du bouton pendant le chargement => react-query.
- Amélioration du design => utilisation de tailwind CSS ou material-Ui.
- Mémorisation des urls en cache ou en base.
- Amélioration du rendu des images de prévisualisation
