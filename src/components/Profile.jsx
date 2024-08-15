import React, { useState, useRef } from "react";
import Axios from "axios";
import Webcam from "react-webcam";
import "./Profile.css";

export const Profile = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isAnalyzed, setIsAnalyzed] = useState(false);
  const webcamRef = useRef(null);

  const openCamera = () => {
    setIsCameraOpen(true);
    setSelectedImage(null);
    setIsAnalyzed(false);
  };

  const closeCamera = () => {
    setIsCameraOpen(false);
  };

  const capture = () => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      setSelectedImage(imageSrc);
      setIsCameraOpen(false);
    }
  };

  const base64ToFile = (base64String, filename) => {
    const arr = base64String.split(",");
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, { type: mime });
  };

  const uploadImage = (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "ngmnmuma");

    Axios.post(
      "https://api.cloudinary.com/v1_1/dctz4wuix/image/upload",
      formData
    )
      .then((response) => {
        const cloudinaryUrl = response.data.secure_url;
        console.log("Cloudinary URL:", cloudinaryUrl);

        if (isAnalyzing) {
          sendUrlToBackend(cloudinaryUrl);
          setIsAnalyzing(false);
          setIsAnalyzed(true);
        }
      })
      .catch((error) => {
        console.error("Error uploading image to Cloudinary:", error);
      });
  };

  const sendUrlToBackend = (cloudinaryUrl) => {
    setLoading(true);
    Axios.post("https://return-reduce-backend.onrender.com/getSize", {
      url: cloudinaryUrl,
    })
      .then((response) => {
        setResult(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error sending URL to backend:", error);
        setLoading(false);
      });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
        setIsAnalyzed(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    const file = base64ToFile(selectedImage, "analyzed-image.jpg");
    uploadImage(file);
  };

  return (
    <div className="profile-page">
      <header className="profile-header">
        <h1>WalmartOne</h1>
        <div className="profile-info">
          <img
            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSPtnyekaZ7Uy-Tq7e82NkUmUCJmb7XyavSYZgHwk-l_b2UAWNA"
            alt="Lailanie Smith"
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              objectFit: "cover",
              marginRight: "20px",
            }}
          />
          <div>
            <h2>Lailanie Smith</h2>
            <p>Hayward, CA - Associate since 2009</p>
          </div>
          <button>View Full Profile</button>
          <button>Sign out</button>
        </div>
      </header>

      <nav className="profile-nav">
        <a href="#profile">Profile</a>
        <a href="#social">Social Activity</a>
        <a href="#schedule">Schedule</a>
        <a href="#messages">Messages</a>
      </nav>

      <div className="about-me-section">
        <h2>About Me</h2>
        <form>
          <label>Personal Quote</label>
          <textarea defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac leo sed sapien rutrum interdum id at urna. In ac velit sapien. Curabitur lacus felis, porttitor vel pulvinar sed, auctor a eros." />
          <div className="personal-info">
            <h3>Personal Info</h3>
            <div className="info-field">
              <label>First Name</label>
              <input type="text" value="Lailanie" />
            </div>
            <div className="info-field">
              <label>Last Name</label>
              <input type="text" value="Smith" />
            </div>
            <div className="info-field">
              <label>Preferred First Name (optional)</label>
              <input type="text" value="Lai Lai" />
            </div>
            <div className="info-field">
              <label>Contact Email</label>
              <input type="email" value="lsmith@gmail.com" />
              <a href="#change-email">Change email</a>
            </div>
            <div className="info-field">
              <label>Lives in (optional)</label>
              <input type="text" value="Hayward" />
            </div>
            <div className="info-field">
              <label>City</label>
              <input type="text" value="Hayward" />
            </div>
            <div className="info-field">
              <label>State/Province</label>
              <input type="text" value="CA" />
            </div>
            <div className="info-field">
              <label>Zip</label>
              <input type="text" value="94544" />
            </div>
            <div className="checkbox">
              <input type="checkbox" checked />
              <label>
                Yes, I would like to receive news and updates from Wal-Mart to
                this address.
              </label>
            </div>
          </div>
          <div className="form-buttons">
            <button type="button" className="cancel-button">
              Cancel
            </button>
            <button type="submit" className="save-button">
              Save Changes
            </button>
          </div>
        </form>
      </div>

      {/* Full Body Image Capture Section */}
      <div className={`capture-section ${isCameraOpen ? "expanded" : ""}`}>
        <h3 className="camera-header">Upload Full Body Image</h3>
        <div className="upload-box">
          {isCameraOpen ? (
            <div className="camera-container">
              <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width="100%"
              />
              <div className="camera-buttons">
                <button onClick={capture} className="capture-button">
                  Capture Photo
                </button>
                <button onClick={closeCamera} className="close-button">
                  Close Camera
                </button>
              </div>
            </div>
          ) : (
            <div>
              {selectedImage && !isAnalyzed ? (
                <div>
                  <img
                    src={selectedImage}
                    alt="Selected"
                    className="preview-img"
                  />
                  <div className="post-capture-buttons">
                    <button onClick={handleAnalyze} className="analyze-button">
                      Analyze Photo
                    </button>
                    <button onClick={openCamera} className="retake-button">
                      Retake Photo
                    </button>
                  </div>
                </div>
              ) : selectedImage && isAnalyzed ? (
                <div>
                  <img
                    src={selectedImage}
                    alt="Selected"
                    className="preview-img"
                  />
                  <div className="post-capture-buttons">
                    <button
                      onClick={() => {
                        setSelectedImage(null);
                        setResult(null);
                      }}
                      className="close-button"
                    >
                      Close
                    </button>
                    <button onClick={openCamera} className="retake-button">
                      Retake Photo
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <button onClick={openCamera} className="open-camera-button">
                    Open Camera
                  </button>
                  <p style={{ margin: "10px 0" }}>OR</p>
                  <label htmlFor="file-input" className="file-input-label">
                    <p className="file-input-text">Choose from Device</p>
                  </label>
                  <input
                    id="file-input"
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    style={{ display: "none" }}
                  />
                </>
              )}
            </div>
          )}
        </div>
        {loading && <p>Loading...</p>}
        {/* {result && (
          <div className="result-section">
            <h4>Result:</h4>
            <p>{JSON.stringify(result)}</p>
          </div>
        )} */}
      </div>
    </div>
  );
};
