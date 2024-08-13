// import React, { useState } from "react";
// import "./Return.css";
// import laptop from "../images/laptop.jpg";

// export const Return = () => {
//   const [selectedImage, setSelectedImage] = useState(null);

//   const handleImageChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const imageUrl = URL.createObjectURL(file);
//       setSelectedImage(imageUrl);
//     }
//   };

//   return (
//     <div className="whole-page">
//       <div className="image-text">
//         <div className="lapy">
//           <img src={laptop} />
//         </div>

//         <div className="class">
//           <h2>Return Request</h2>
//           <div className="details">
//             <p>HP Laptop Ryzen 3</p>
//             <p>45K</p>
//             <h2>Total Refund 45K</h2>
//             <p>
//               Convenience Fee ₹15.00 is not refundable.<span>Read policy.</span>
//             </p>
//           </div>
//           <p>Reason</p>
//           <div className="reason">
//             <p>Select reason</p>
//             <p>sub reason</p>
//           </div>
//         </div>
//       </div>
//       <div className="image-section">
//         <div className="before">
//           <p>Product At Delivery</p>
//           <img src={laptop} />
//         </div>

//         <div className="after">
//           <p>Product After Delivery</p>
//           <div className="upload-box">
//             {selectedImage ? (
//               <img src={selectedImage} alt="Selected" className="preview-img" />
//             ) : (
//               <label htmlFor="file-input" className="upload-label">
//                 <p>Click to Upload or Capture Photo</p>
//               </label>
//             )}
//             <input
//               id="file-input"
//               type="file"
//               accept="image/*"
//               capture="environment"
//               onChange={handleImageChange}
//               style={{ display: "none" }}
//             />
//           </div>
//         </div>
//       </div>
//       <div className="confirm">
//         <p>Return Request will be confirmed after review.</p>
//         <button className="review">Review</button>
//       </div>
//     </div>
//   );
// };

// import React, { useRef, useState } from "react";
// import Webcam from "react-webcam";
// import "./Return.css";
// import laptop from "../images/laptop.jpg";
// import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

// export const Return = () => {
//   const [reason, setReason] = React.useState("");

//   const handleChange = (event) => {
//     setReason(event.target.value);
//   };

//   const [selectedImage, setSelectedImage] = useState(null);
//   const [isCameraOpen, setIsCameraOpen] = useState(false);
//   const webcamRef = useRef(null);

//   const handleImageChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const imageUrl = URL.createObjectURL(file);
//       setSelectedImage(imageUrl);
//     }
//   };

//   const capture = React.useCallback(() => {
//     if (webcamRef.current) {
//       const imageSrc = webcamRef.current.getScreenshot();
//       setSelectedImage(imageSrc);
//       setIsCameraOpen(false); // Close the camera after capturing
//     }
//   }, [webcamRef]);

//   return (
//     <div className="whole-page">
//       <div className="image-text">
//         <div className="lapy">
//           <img src={laptop} alt="Laptop" />
//         </div>

//         <div className="class">
//           <h2>Return Request</h2>
//           <div className="details">
//             <p>HP Laptop Ryzen 3</p>
//             <p>45K</p>
//             <h2>Total Refund 45K</h2>
//             <p>
//               Convenience Fee ₹15.00 is not refundable.<span>Read policy.</span>
//             </p>
//           </div>
//           <h2>Reason</h2>
//           <div className="reason">
//             <FormControl fullWidth variant="outlined" >
//               <InputLabel id="select-reason-label">Select Reason</InputLabel>
//               <Select
//                 labelId="select-reason-label"
//                 id="select-reason"
//                 value={reason}
//                 onChange={handleChange}
//                 label="Select Reason"
//               >
//                 <MenuItem value="reason1">Reason 1</MenuItem>
//                 <MenuItem value="reason2">Reason 2</MenuItem>
//                 <MenuItem value="reason3">Reason 3</MenuItem>
//               </Select>
//             </FormControl>

//             <input
//               type="text"
//               name="Sub reason"
//               placeholder="Type Sub reason"
//             />
//           </div>
//         </div>
//       </div>
//       <div className="image-section">
//         <div className="before">
//           <p>Product At Delivery</p>
//           <img src={laptop} alt="Product At Delivery" />
//         </div>

//         <div className="after">
//           <p>Product After Delivery</p>
//           <div className="upload-box">
//             {isCameraOpen ? (
//               <div>
//                 <Webcam
//                   audio={false}
//                   ref={webcamRef}
//                   screenshotFormat="image/jpeg"
//                   width="100%"
//                 />
//                 <button onClick={capture}>Capture Photo</button>
//                 <button onClick={() => setIsCameraOpen(false)}>
//                   Close Camera
//                 </button>
//               </div>
//             ) : (
//               <div>
//                 {selectedImage ? (
//                   <img
//                     src={selectedImage}
//                     alt="Selected"
//                     className="preview-img"
//                   />
//                 ) : (
//                   <label htmlFor="file-input" className="upload-label">
//                     <p>Click to Upload</p>
//                   </label>
//                 )}
//                 <input
//                   id="file-input"
//                   type="file"
//                   accept="image/*"
//                   capture="environment"
//                   onChange={handleImageChange}
//                   style={{ display: "none" }}
//                 />
//                 <button onClick={() => setIsCameraOpen(true)}>
//                   Open Camera
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//       <div className="confirm">
//         <p>Return Request will be confirmed after review.</p>
//         <button className="review">Review</button>
//       </div>
//     </div>
//   );
// };

import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import "./Return.css";
import laptop from "../images/laptop.jpg";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export const Return = () => {
  const [reason, setReason] = React.useState("");
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
    }
  };

  const capture = React.useCallback(() => {
    console.log("Capture button clicked");
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      setSelectedImage(imageSrc);
      setIsCameraOpen(false); // Close the camera after capturing
    }
  }, [webcamRef]);

  const openCamera = () => {
    console.log("Open Camera button clicked");
    setIsCameraOpen(true);
  };

  const closeCamera = () => {
    console.log("Close Camera button clicked");
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
                <button onClick={capture}>Capture Photo</button>
                <button onClick={closeCamera}>Close Camera</button>
              </div>
            ) : (
              <div>
                {selectedImage ? (
                  <img
                    src={selectedImage}
                    alt="Selected"
                    className="preview-img"
                  />
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
                <button onClick={openCamera}>Open Camera</button>
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
