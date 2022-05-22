import React, { useState } from 'react';
import { processFile } from './utils';
import cn from 'classnames';
import s from './index.module.scss';




export const UploadFile = ({ multiple }) => {
  const [files, setFiles] = useState({});
  console.log('files: ', files);

  const updateFileList = (filePayload) => setFiles(prev => ({
    ...prev,
    [filePayload.name]: filePayload
  }));
  

  const handleChange = (e) => {
    console.log(`###:`, e.target.files);
    const fileList = e.target.files;

    for (const file of fileList) {
      console.log('file: ', file);
      const { name, size, type } = file;

      updateFileList({
        file,
        name,
        size,
        type,
        imgUrl: null,
        loading: true,
        error: null,
        status: `Pending`
      });
      setTimeout(() => processFile(file, updateFileList), 2000);
    }
  };

  return (
    <div className={s.root}>
      <label className={s.dropZone}>
        <div className={s.dropZoneDescription}>
          <span className={s.dropZoneIcon}>icon-nah</span>
        </div>
        <input
          type="file"
          className = {s.inputFileInstance}
          multiple  = {multiple}
          onChange  = {handleChange}
        />
      </label>
      
      <div className={s.previewFileContainer}>
        <ul className={s.previewList}>
          {
            Object.entries(files).map(([key, value]) => <li
              key={key}
              className={s.previewListItem}
            >
              {value.name}
              <img src={value.imgUrl} alt={value.name} width="400" />
            </li>
            )
          }
        </ul>
      </div>
    </div>
  )
};
