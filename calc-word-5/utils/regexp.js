
const getRegChar = (w) => w ? w : '.';

export const getRegMatch = (m) => `${getRegChar(m[0])}${getRegChar(m[1])}${getRegChar(m[2])}${getRegChar(m[3])}${getRegChar(m[4])}`;
