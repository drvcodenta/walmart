import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import "./Return.css";
import laptop from "../images/laptop.jpg";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export const Return = () => {
  const [reason, setReason] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const webcamRef = useRef(null);

  const handleChange = (event) => {
    setReason(event.target.value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      setIsCameraOpen(false); // Close the camera after image selection
    }

    console.log("Selected Image: ", file);
  };

  const capture = () => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();

      // Convert base64 to file
      const file = base64ToFile(imageSrc, 'captured-image.jpg');

      // Save the file to the device
      saveFile(file);

      setSelectedImage(imageSrc);
      setIsCameraOpen(false); // Close the camera after capturing

      console.log("Captured Image: ", file);
    }
  };

  const base64ToFile = (base64String, filename) => {
    const arr = base64String.split(',');
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, { type: mime });
  };

  const saveFile = (file) => {
    const link = document.createElement('a');
    link.href = URL.createObjectURL(file);
    link.download = file.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const openCamera = () => {
    setIsCameraOpen(true);
    setSelectedImage(null); // Clear the previous image when reopening the camera
  };

  const closeCamera = () => {
    setIsCameraOpen(false);
  };

  return (
    <div className="whole-page">
      <div className="image-text">
        <div className="lapy">
          <img src={laptop} alt="Laptop" />
        </div>

        <div className="class">
          <h2>Return Request</h2>
          <div className="details">
            <p>HP Laptop Ryzen 3</p>
            <p>45K</p>
            <h2>Total Refund 45K</h2>
            <p>
              Convenience Fee ₹15.00 is not refundable.<span>Read policy.</span>
            </p>
          </div>
          <h2>Reason</h2>
          <div className="reason">
            <FormControl
              variant="outlined"
              style={{ width: "250px", marginRight: "20px" }}
            >
              <InputLabel id="select-reason-label">Select Reason</InputLabel>
              <Select
                labelId="select-reason-label"
                id="select-reason"
                value={reason}
                onChange={handleChange}
                label="Select Reason"
              >
                <MenuItem value="reason1">Reason 1</MenuItem>
                <MenuItem value="reason2">Reason 2</MenuItem>
                <MenuItem value="reason3">Reason 3</MenuItem>
              </Select>
            </FormControl>

            <input
              type="text"
              name="Sub reason"
              placeholder="Type Sub reason"
              style={{
                width: "250px",
                height: "56px",
                padding: "0 14px",
                fontSize: "16px",
              }}
            />
          </div>
        </div>
      </div>
      <div className="image-section">
        <div className="before">
          <p>Product At Delivery</p>
          <img src={laptop} alt="Product At Delivery" />
        </div>

        <div className="after">
          <p>Product After Delivery</p>
          <div className="upload-box">
            {isCameraOpen ? (
              <div>
                <Webcam
                  audio={false}
                  ref={webcamRef}
                  screenshotFormat="image/jpeg"
                  width="100%"
                />
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
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
                  <label htmlFor="file-input" className="upload-label">
                    <p>Click to Upload</p>
                  </label>
                )}
                <input
                  id="file-input"
                  type="file"
                  accept="image/*"
                  capture="environment"
                  onChange={handleImageChange}
                  style={{ display: "none" }}
                />
                {!selectedImage && (
                  <>
                    <button onClick={openCamera}>Open Camera</button>
                    <p style={{ margin: "10px 0" }}>OR</p>
                    <label htmlFor="file-input" className="upload-label">
                      <p>Choose from Device</p>
                    </label>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="confirm">
        <p>Return Request will be confirmed after review.</p>
        <button className="review">Review</button>
      </div>
    </div>
  );
};
