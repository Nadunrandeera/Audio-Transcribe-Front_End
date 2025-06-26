import { useState } from "react";
import "../App.css";
import axios from "axios";

const AudioUploader = () => {
  const [file,setFile] = useState(null);
  const [transcription, setTranscription] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    const formDate = new FormData();
    formDate.append("file", file);

    try {
      const response = await axios.post(
        " http://localhost:8080/api/audio/transcribe",
        formDate,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setTranscription(response.data);
    } catch (error) {
      console.log("Error transcribing audio", error);
    }
  }
  return (
    <div className="container center-content">
      <h1 className="">Audio To Text Transcribe</h1>
      <div>
        <input type="file" accept="audio/*" onChange={handleFileChange}/>
      </div>
      
      <div>
        <button className="upload-button" onClick={handleUpload}>
          Upload and Transcribe
        </button>
      </div>

      <div className="transcription-result">
        <h2>Transcription Result</h2></div>
        <p>{transcription}</p>
    </div>
  );
};

export default AudioUploader;
