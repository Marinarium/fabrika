import React, {Component, useCallback, useState} from 'react'
import {
    Col, Row, Card
} from 'reactstrap';
import {DDTitle, DD} from "../helpers/style.tsx";
import {useDropzone} from 'react-dropzone'
import axios from 'axios';
import Loader from "../controls/Loader";
import STLViewer from 'stl-viewer'


export default () => {
    const [showLoader, setShowLoader] = useState(false);
    const [fileUploaded, setFileUploaded] = useState(false);
    const [fileName, setFileName] = useState("");
    const onDrop = useCallback(acceptedFiles => {
        let reader = new FileReader();
        reader.readAsText(acceptedFiles[0]);
        reader.onload = function () {
            setShowLoader(true);
            setFileName(acceptedFiles[0].name.split('.')[0]);
            axios.post('/transform/', {
                file: reader.result,
                fileName: acceptedFiles[0].name.split('.')[0]
            })
                .then(response => {
                    setFileUploaded(true);
                    setShowLoader(false);
                })
        };
    }, []);

    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});

    return (
        <React.Fragment>
            {fileUploaded ?
            <STLViewer
                model={`http://${window.location.hostname}:8000/media/${fileName}.stl`}
                height={400}
                width={1000}
                modelColor='#FFFFFF'
                rotate={true}
                orbitControls={true}
            /> : null}
            <Card className="mt-5">
                <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <DD>
                        <Row>
                            <Col md="2"/>
                            <Col md="7">
                                {isDragActive ? (
                                    <DDTitle>Drop the files here...</DDTitle>
                                ) : (
                                    <p>
                                        <DDTitle>Drop parts here</DDTitle>
                                        <div>or select files</div>
                                    </p>
                                )}
                            </Col>
                            <Col md="3"/>
                        </Row>
                    </DD>
                </div>
            </Card>
            <Row className="mt-5">
                <Col md="2"/>
                <Col md="10">
                    <div>
                        please, check inside radii &gt; 1 mm, walls &gt; 1 mm, minimum holes is 1
                        mm
                    </div>
                    <div>all uploads are secure and confidential</div>
                </Col>
            </Row>
            <Loader showLoader={showLoader}/>
        </React.Fragment>
    )
};
