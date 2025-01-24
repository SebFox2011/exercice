import type Bookmark from "../types";
import BookmarkItem from "./BookmarkItem";

type Props = {
  bookmarks: Bookmark[];
  onRemoveBookmark: (id: string) => void;
};

function BookmarkList({ bookmarks, onRemoveBookmark }: Props) {
  return (
    <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
      {bookmarks?.length ? (
        bookmarks.map(bookmark => (
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
}

export default BookmarkList;
