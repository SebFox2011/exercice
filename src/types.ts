/**
 * Interface décrivant la structure d'un marque-page
 * @interface
 * @property {string} id - ID unique
 * @property {string} url - URL du marque-page
 * @property {string} title - Titre du marque-page
 * @property {string} author - Auteur du marque-page
 * @property {string} addedDate - Date d'ajout dans l'application
 * @property {string} [publishedDate] - Date de publication sur Vimeo/Flickr
 * @property {string} [duration] - Durée de la vidéo
 * @property {string} [dimensions] - Dimensions de la photo
 * @property {string} [thumbnailUrl] - URL de l'aperçu
 */
interface Bookmark {
  id: string;
  url: string;
  title: string;
  author: string;
  addedDate: string;
  publishedDate?: string;
  duration?: string;
  dimensions?: string;
  thumbnailUrl?: string;
}

export default Bookmark;
