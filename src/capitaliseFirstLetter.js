export const capitaliseFirstLetter = (string) => {
  let currentString = string[0].toUpperCase();
  string = string.substring(1)
  currentString += string
  return currentString
}