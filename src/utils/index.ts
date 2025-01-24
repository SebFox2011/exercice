export const dateFormat = (date: Date): string => {
  return new Date(date).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};


export const isValidURL = (url: string): boolean => {
  const regex = /^(https?:\/\/)?(www\.)?(vimeo\.com|flickr\.com)(\/.*)?$/;
  return regex.test(url);
};