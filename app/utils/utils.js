
export const shuffleArray = function _shuffleArray(o) {
  for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
  return o;
}

export const getRandomValueFromApi = function _getRandomValueFromApi(api) {
  let apiLength = api.length;
  let randomKey = Math.floor(Math.random() * (apiLength - 0) + 0);
  return api[randomKey];  
}

export const getRandomInt = function _getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max) + 1;
  return Math.floor(Math.random() * (max - min)) + min;
}

export const replaceVarFromStr = function _replaceVarFromStr(str, search, replace) {
  return str.replace('{{' + search + '}}', replace);
}