import { getBase64 } from './get-base64';


export const processFile = async (file, updateFileList) => {
  const { name, size, type } = file;

  try {
    const fileAsBase64 = await getBase64(file);
    setTimeout(() => {
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
    }, 2000);
  }
  catch (error) {
    updateFileList({
      file,
      name,
      size,
      type,
      imgUrl  : null,
      loading : false,
      error,
      status  : `Error`
    });
  }
};
