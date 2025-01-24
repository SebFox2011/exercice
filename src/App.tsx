import { useState } from "react";
import BookmarkForm from "./composants/BookmarkForm";
import BookmarkList from "./composants/BookmarkList";
import type Bookmark from "./types";
import "./App.css";

const App = () => {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);

  const addBookmark = (bookmark: Bookmark) =>
    setBookmarks([...bookmarks, bookmark]);

  const removeBookmark = (id: string) =>
    setBookmarks(bookmarks.filter((item) => item.id !== id));

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
