interface Bookmark  {
  id: string; // ID unique
  url: string;
  title: string;
  author: string;
  addedDate: string; // Date d'ajout dans l'application
  publishedDate: string; // Date de publication sur Vimeo/Flickr
  duration?: string; // Vidéo uniquement
  dimensions?: string; // Photo uniquement
  thumbnailUrl?: string; // Aperçu
};

export default Bookmark;
