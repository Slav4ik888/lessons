export const format = (size) => {
  return (size / 1024 / 1024).toLocaleString(`ru-Ru`) + `Mb`;
};
