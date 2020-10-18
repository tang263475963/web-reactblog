import React, { useRef, useState } from 'react';
import { Row, Col, Container, Badge} from 'reactstrap';
import axios from 'axios';

function FileUpload() {
    const [file, setFile] = useState(''); // storing the uploaded file    // storing the recived file from backend
    const [data, getFile] = useState({ name: "", path: "" }); const [progress, setProgess] = useState(0); // progess bar
    const el = useRef(); // accesing input element
    const handleChange = (e) => {
        setProgess(0)
        const file = e.target.files[0]; // accesing file
        console.log(file);
        setFile(file); // storing file
    }
    const uploadFile = () => {
        const formData = new FormData(); formData.append('file', file); // appending file
        axios.post('http://localhost:8000/api/upload', formData, {
            onUploadProgress: (ProgressEvent) => {
                let progress = Math.round(
                    ProgressEvent.loaded / ProgressEvent.total * 100) + '%';
                setProgess(progress);
            }
        }).then(res => {
            console.log(res);
            getFile({
                name: res.data.name,
                path: 'http://localhost:8000' + res.data.path
            })
        }).catch(err => console.log(err))
    }
    return (
        <div>
            <Container>
                <hr/>
                    <Row className="justify-content-center front">
                        <Col md="7" className="text-center">
                        <h3>รูปภาพ <Badge color="dark">Upload</Badge>{' '}</h3>
                            <h2 className="title">หน้านี้มีไว้สำหรับทดสอบระบบการอัพรูปภาพ</h2>
                            <h6 className="subtitle">*เว็บไซต์บางส่วนยังมีข้อผิดพลาดที่ยังแก้ไขไม่ได้ จึงต้องใช้การสมมติแทน*</h6>
                        <hr/>                    
                        </Col>
                    </Row>
                </Container>
            <div className="file-upload front">
                <input type="file" ref={el} onChange={handleChange} />                
                <div className="progessBar" style={{ width: progress }}>
                    {progress}
                </div>
                <button onClick={uploadFile} >    Upload   </button>
             
                <hr />
                {/* displaying received image*/}
                {data.path && <img src={data.path} alt={data.name} />}
            </div>
            <hr/>
        </div>
    );
}
export default FileUpload;