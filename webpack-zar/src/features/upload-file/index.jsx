import React, { useState, useEffect, useMemo, useRef } from 'react';
import { processFile, format, normalizeFiles } from './utils';
import cn from 'classnames';
import s from './index.module.scss';




export const UploadFile = ({ multiple, onFinish }) => {
  const [files, setFiles] = useState({});
  const [drag, setDrag] = useState(false);

  const inputRef = useRef(null);

  const isFinish = useMemo(() => Object.keys(files).length > 0
    && Object.values(files).every(item => item.loading === false)
    , [files]);
  
  useEffect(() => {
    isFinish && onFinish && onFinish(normalizeFiles(files));
  }, [isFinish]);

  const updateFileList = (filePayload) => setFiles(prev => ({
    ...prev,
    [filePayload.name]: filePayload
  }));
  

  const handleChange = (e) => {
    console.log(`###:`, e.target.files);
    const fileList = e.target.files;
    processFileList(fileList);
  };

  const processFileList = async (fileList) => {
    for (const file of fileList) {
      const { name, size, type } = file;

      updateFileList({
        file,
        name,
        size,
        type,
        imgUrl  : null,
        loading : true,
        error   : null,
        status  : `Pending`
      });
      processFile(file, updateFileList);
    }
  };

  const handleDeleteButtonClick = (name) => {
    setFiles(prev => {
      const copyState = { ...prev };
      delete copyState[name];
      return copyState;
    });
  };

  return (
    <div className={s.root}>
      <label
        className={s.dropZone}
        onDragOver={(e) => {
          e.nativeEvent.preventDefault();
          setDrag(true);
        }}
        onDrop={(e) => {
          console.log(e);
          inputRef.current.files = e.nativeEvent.dataTransfer.files;
          inputRef.current.dispatchEvent(new Event(`change`, { bubbles: true }));
          e.nativeEvent.preventDefault();
          setDrag(false);
        }}
      >
        <div className={s.dropZoneDescription}>
          {
            drag
              ? <span className={s.dropZoneIcon}>{`Drop nah :)`}</span>
              : <span className={s.dropZoneIcon}>Select files</span>
          }
        </div>
        <input
          type="file"
          ref       = {inputRef}
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
              {value.imgUrl !== null && <img src={value.imgUrl} alt={value.name} className={s.previewListItemImage} />}
              {value.loading && <div className={s.loading}><span>{`( )`}</span></div>}
              {value.status === `Error` && <span className={s.error}>Error</span>}

              <div className={s.previewFileDescription}>
                <p>{value.name}</p>
                <p className={s.previewFileSize}>{format(value.size)}</p>
              </div>
              <button
                className = {s.previewFileDeleteButton}
                onClick   = {(e) => handleDeleteButtonClick(key)}
              >
                x
              </button>
            </li>
            )
          }
        </ul>
      </div>
    </div>
  )
};
