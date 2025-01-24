import type Bookmark from "../types";

type Props = {
  bookmark: Bookmark;
  onRemove: () => void;
};

function BookmarkItem({ bookmark, onRemove }: Props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        border: "1px solid black",
        padding: "1rem",
        margin: "1rem",
        backgroundColor: "lightgray",
      }}
    >
      {bookmark.thumbnailUrl && (
        <img src={bookmark.thumbnailUrl} alt={bookmark.title} />
      )}
      <p>Titre: {bookmark.title}</p>
      <p>Auteur: {bookmark.author}</p>
      <p>Date d'ajout: {bookmark.addedDate}</p>
      <p>Date de publication: {bookmark.publishedDate}</p>
      {bookmark.duration && <p>Durée: {bookmark.duration}</p>}
      {bookmark.dimensions && <p>Dimensions: {bookmark.dimensions}</p>}
      <p>
        <a href={bookmark.url} target="_blank" rel="noopener noreferrer">
          Ouvrir le lien
        </a>
      </p>
      <button type="button" onClick={onRemove}>
        Supprimer
      </button>
    </div>
  );
}

export default BookmarkItem;
