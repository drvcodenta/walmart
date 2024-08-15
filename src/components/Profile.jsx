import React, { useState, useRef } from "react";
import Axios from "axios";
import Webcam from "react-webcam";
import "./Profile.css";

export const Profile = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const webcamRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const openCamera = () => {
    setIsCameraOpen(true);
    setSelectedImage(null); 
  };

  const closeCamera = () => {
    setIsCameraOpen(false);
  };

  const capture = () => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      setSelectedImage(imageSrc);
      setIsCameraOpen(false); 
      const file = base64ToFile(imageSrc, "captured-image.jpg");

      uploadImage(file);
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

        sendUrlToBackend(cloudinaryUrl);
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
        uploadImage(file); 
      };
      reader.readAsDataURL(file);
    }
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
      <div className="capture-section">
        <h3>Upload Full Body Image</h3>
        <div className="upload-box">
          {isCameraOpen ? (
            <div>
              <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width="100%"
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "10px",
                }}
              >
                <button
                  onClick={capture}
                  style={{
                    padding: "10px",
                    borderRadius: "5px",
                    backgroundColor: "blue",
                    color: "white",
                    border: "none",
                    cursor: "pointer",
                    flex: "1",
                    marginRight: "10px",
                  }}
                >
                  Capture Photo
                </button>
                <button
                  onClick={closeCamera}
                  style={{
                    padding: "10px",
                    borderRadius: "5px",
                    backgroundColor: "red",
                    color: "white",
                    border: "none",
                    cursor: "pointer",
                    flex: "1",
                  }}
                >
                  Close Camera
                </button>
              </div>
            </div>
          ) : (
            <div>
              {selectedImage ? (
                <div>
                  <img
                    src={selectedImage}
                    alt="Selected"
                    className="preview-img"
                  />
                  <button onClick={openCamera}>Retake Photo</button>
                </div>
              ) : (
                <>
                  <button
                    onClick={openCamera}
                    style={{
                      padding: "10px",
                      borderRadius: "5px",
                      backgroundColor: "blue",
                      color: "white",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    Open Camera
                  </button>
                  <p style={{ margin: "10px 0" }}>OR</p>
                  <label
                    htmlFor="file-input"
                    style={{
                      padding: "10px",
                      borderRadius: "5px",
                      border: "1px solid #ccc",
                      cursor: "pointer",
                    }}
                  >
                    <p
                      style={{
                        textAlign: "center",
                        margin: "0",
                        color: "#333",
                      }}
                    >
                      Choose from Device
                    </p>
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
        {result && (
          <div className="result-section">
            <h4>Result:</h4>
            <p>{JSON.stringify(result)}</p>
          </div>
        )}
      </div>
    </div>
  );
};
