/**
 * @param {string} data 
 * @returns sorted unique chars
 */
export const getUniqueChars = (data) => {
  const set = new Set();
  
  data.split('').forEach(it => set.add(it.toLowerCase()));

  let str = '';
  
  set.forEach(it => str += it);
  return str.split('').sort().join('')
};
