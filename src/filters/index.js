export function truncateWords(str, count) {
  if (!str) return str;
  if (str.length < count) return str;
  return str.slice(0, count) + "...";
}
