//this two functions substrings the given text in the first space afetr the given chars number
//inorder not to get substrings in the middle of a word.
const getIndexForSubString = (text, chars) => {
  for (let i = 0; i < text.length; i++) {
    if (i > chars && text[i] === " ") return i + 1;
  }

  return text.length;
};

export const subString = (text, chars) => {
  text = text.replaceAll("\n", "<br/>");
  return text.substring(0, getIndexForSubString(text, chars));
};

export const getNameFirstLetters = (name) => {
  let result = name[0];

  for (let i = 1; i < name.length - 1; i++) {
    if (name[i] === " ") result += name[i + 1];
  }
  return result;
};
