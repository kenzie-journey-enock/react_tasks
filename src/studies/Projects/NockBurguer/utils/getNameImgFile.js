export function getNameImgFile(url) {
  const regex = /\/([^\/?#]+\.png)/i;
  const match = url.match(regex);
  return match ? match[1] : null;
}