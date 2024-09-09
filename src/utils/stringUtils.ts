type TitleConvertFunction = (title: string) => string;

export const titleConvert: TitleConvertFunction = (url) => {
  const title: string = url.split("/")[1];
  const convertedTitle: string = title.replace(/-/g, " ");
  const returnTitle: string =
    convertedTitle.charAt(0).toUpperCase() + convertedTitle.slice(1);
  return returnTitle;
};
