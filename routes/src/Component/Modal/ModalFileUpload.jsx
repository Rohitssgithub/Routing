import React from 'react';
import Modal from '../Modal/Modal';

const ModalFileUpload = () => {
    return (
        <>
            <Modal>
                <div className={styles.fileUploadDiv}>
                    <img src={fileUploadIcon} alt="File Upload Logo" className={styles.fileUploadLogoImage} />
                    <p>{file?.name ? file?.name : 'Drag & Drop your files here'}</p>
                    {errorMessage && <span className={styles.fileUploadMessage}>{errorMessage}</span>}
                    {!errorMessage && (
                        <p className={styles.infoText}>
                            {file?.size ? `Size: ${(file.size / 1024 / 1024).toFixed(2)} MB` : 'Files supported .csv & .xlsx'}
                        </p>
                    )}
                    <span className={file && styles.fileUploadMessage}>{file ? 'Uploaded Successfully' : 'or'}</span>
                    <div className={styles.fieldDiv}>
                        <div className={styles.fileDiv}>
                            <input type="file"
                                id="fileInput"
                                className={`${styles.customfileinput} ${file && styles.hideInput}`}
                                onChange={(e) => handleFileChange(e)}
                                accept=".csv, .xlsx"
                                ref={inputRef}
                            />
                            <button onClick={file ? removeFile : addFile} className={`${styles.browseFileBtn} ${file && styles.fileUploadField}`}>{file ? "Remove file" : 'Browse file'}</button>
                        </div>
                        <p className={styles.fileLimitText}>{file ? '' : 'Maximum size : 2MB'}</p>
                        <button className={styles.uploadFileBtn}>Upload</button>
                    </div>
                </div>
            </Modal>

        </>
    )
}

export default ModalFileUpload