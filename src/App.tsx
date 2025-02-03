import { useState } from "react";
import BookmarkForm from "./composants/BookmarkForm";
import BookmarkList from "./composants/BookmarkList";
import type { VideoBookmark, PhotoBookmark } from "./types";

/**
 * Composant principal de l'application
 * @returns JSX.Element
 * @see Bookmark
 * @see BookmarkForm
 * @see BookmarkList
 */
const App = () => {
  const [bookmarks, setBookmarks] = useState<(PhotoBookmark | VideoBookmark)[]>(
    []
  );

  const addBookmark = (bookmark: PhotoBookmark | VideoBookmark) =>
    setBookmarks([...bookmarks, bookmark]);

  const removeBookmark = (id: string) =>
    setBookmarks((prevState) => prevState.filter((item) => item.id !== id));

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Gestionnaire de Favoris</h1>
      <BookmarkForm onAddBookmark={addBookmark} />
      <BookmarkList bookmarks={bookmarks} onRemoveBookmark={removeBookmark} />
    </div>
  );
};

export default App;
