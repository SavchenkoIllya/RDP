export function isVideo(ext) {
  const extension = ext.toLowerCase();
  const formats = [".mp4",  ".qt", ".wmv", ".avi", ".flv" , ".mpg", ".mpeg", ".mov", ".mp1"];
  return formats.includes(extension);
}