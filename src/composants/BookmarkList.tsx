import type Bookmark from "../types";
import BookmarkItem from "./BookmarkItem";

type Props = {
  bookmarks: Bookmark[];
  onRemoveBookmark: (id: string) => void;
};

/**
 * Composant affichant la liste des favoris
 * @param bookmarks Liste des favoris
 * @param onRemoveBookmark Fonction appelée lors de la suppression d'un favori
 * @returns JSX.Element
 * @see BookmarkItem
 * @example
 */
const BookmarkList = ({ bookmarks, onRemoveBookmark }: Props) => {
  return (
    <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
      {bookmarks?.length ? (
        bookmarks.map((bookmark) => (
          <BookmarkItem
            key={bookmark.id}
            bookmark={bookmark}
            onRemove={() => onRemoveBookmark(bookmark.id)}
          />
        ))
      ) : (
        <p>Aucun favoris ajoutés pour le moment.</p>
      )}
    </div>
  );
};

export default BookmarkList;
