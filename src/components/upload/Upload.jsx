import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Upload } from 'antd';
import styles from './upload.modules.css'

const UploadImg = ({ onChange, file }) => {
    return (
        <Upload {...props}>
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
    );
};

export default UploadImg;
