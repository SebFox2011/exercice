import type Bookmark from "../types";

type Props = {
  bookmark: Bookmark;
  onRemove: () => void;
};

/**
  * Composant affichant un favori
  * @param bookmark Favori à afficher
  * @param onRemove Fonction appelée lors de la suppression du favori
  * @returns JSX.Element
  */
const BookmarkItem = ({ bookmark, onRemove }: Props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        border: "1px solid black",
        padding: "1rem",
        margin: "1rem",
        backgroundColor: "lightgray",
        borderRadius: "15px",
      }}
    >
      {bookmark.thumbnailUrl && (
        <img
          src={bookmark.thumbnailUrl}
          alt={bookmark.title}
          style={{ maxWidth: "200px" }}
        />
      )}
      <p>
        <a href={bookmark.url} target="_blank" rel="noreferrer">
          {bookmark.url}
        </a>
      </p>
      <p>Titre: {bookmark.title}</p>
      <p>Auteur: {bookmark.author}</p>
      <p>Date d'ajout: {bookmark.addedDate}</p>
      {bookmark.publishedDate && (
        <p>Date de publication: {bookmark.publishedDate}</p>
      )}
      {bookmark.duration && <p>Durée: {bookmark.duration}</p>}
      {bookmark.dimensions && <p>Dimensions: {bookmark.dimensions}</p>}
      <button
        type="button"
        onClick={onRemove}
        style={{ color: "red", width: "100px", margin: "auto" }}
      >
        Supprimer
      </button>
    </div>
  );
};

export default BookmarkItem;
