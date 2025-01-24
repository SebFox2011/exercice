import { useState } from "react";
import type Bookmark from "../types";
import { isValidURL, dateFormat } from "../utils";

type Props = {
  onAddBookmark: (bookmark: Bookmark) => void;
};

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

      const bookmark: Bookmark = {
        id: Date.now().toString(),
        url,
        title: data.title,
        author: data.author_name,
        addedDate: dateFormat(new Date()),
        publishedDate: data.upload_date
          ? dateFormat(new Date(data.upload_date))
          : "Pas de date de publication disponible.",
        duration: data.duration
          ? new Date(data.duration * 1000).toISOString().substring(11, 19)
          : "Pas de durée disponible.",
        dimensions:
          data.width && data.height
            ? `${data.width}x${data.height} pixels`
            : "Pas de dimensions disponibles.",
        thumbnailUrl: data.thumbnail_url,
      };

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
