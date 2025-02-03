import { useState } from "react";
import type { Bookmark, PhotoBookmark, VideoBookmark } from "../types";
import { isValidURL, dateFormat } from "../utils";

type Props = {
  onAddBookmark: (bookmark: PhotoBookmark | VideoBookmark) => void;
};

/**
 * Composant permettant d'ajouter un favori
 * @param onAddBookmark Fonction appelée lors de l'ajout d'un favori
 * @returns JSX.Element
 * @see Bookmark
 */
const BookmarkForm = ({ onAddBookmark }: Props) => {
  const [url, setUrl] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://noembed.com/embed?url=${url}`);
      if (!response.ok)
        throw new Error(
          "Une erreur est survenue lors de la récupération des données"
        );

      const data = await response.json();
      if (data.error) throw new Error(data.error);

      let bookmark: PhotoBookmark | VideoBookmark;

      const bookmarkBase: Bookmark = {
        id: Date.now().toString(),
        url,
        title: data.title,
        author: data.author_name,
        addedDate: dateFormat(new Date()),
        publishedDate: data.upload_date
          ? dateFormat(new Date(data.upload_date))
          : undefined,
      };

      if (data.duration) {
        bookmark = {
          ...bookmarkBase,
          duration: data.duration
            ? new Date(data.duration * 1000).toISOString().substring(11, 19)
            : undefined,
          thumbnailUrl: data.thumbnail_url,
          type: "video",
        };
      } else {
        bookmark = {
          ...bookmarkBase,
          dimensions: `${data.width}x${data.height} pixels`,
          thumbnailUrl: data.thumbnail_url,
          type: "photo",
        };
      }

      onAddBookmark(bookmark);
      setUrl("");
    } catch (error) {
      alert("Une erreur est survenue lors de la récupération des données");
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", justifyContent: "space-around" }}
    >
      <input
        type="url"
        value={url}
        onChange={(e) => setUrl(e.target.value.trim())} // met à jour l'état url en supprimant les espaces inutiles
        placeholder="Ajouter une URL Vimeo ou Flickr"
        style={{ margin: "1rem", width: "200px" }}
      />
      <button
        style={{ margin: "1rem" }}
        type="submit"
        disabled={!isValidURL(url)} // on désactive le bouton si l'URL n'est pas valide => ne correspond pas à la regex
      >
        Ajouter le favoris
      </button>
    </form>
  );
};

export default BookmarkForm;
