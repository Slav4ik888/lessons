import { getBase64 } from './get-base64';


export const processFile = (file, updateFileList) => {
  const { name, size, type } = file;

  return getBase64(file)
    .then(fileAsBase64 => {
      updateFileList({
        file,
        name,
        size,
        type,
        imgUrl: fileAsBase64,
        loading: false,
        error: null,
        status: `Ok`
      });
    })
    .catch(error => {
      updateFileList({
        file,
        name,
        size,
        type,
        imgUrl: null,
        loading: false,
        error,
        status: `Error`
      });
    })
};
