import "../App.css";

const AudioUploader = () => {
  return (
    <div className="container center-content">
      <h1 className="">Audio To Text Transcribe</h1>
      <div>
        <input type="file" accept="audio/*" />
      </div>
      <div>
        <button className="upload-button">Upload and Transcribe</button>
      </div>
      <div className="transcription-result"><h2>Transcription Result</h2></div>
    </div>
  );
};

export default AudioUploader;
