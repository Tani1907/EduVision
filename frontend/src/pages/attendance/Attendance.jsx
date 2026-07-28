import { useRef, useState } from "react";
import Webcam from "react-webcam";
import { registerFace, markAttendance,} from "../../services/attendanceService";

import {
  Card,
  CardContent,
  Typography,
  Button,
} from "@mui/material";

function Attendance() {

  const webcamRef = useRef(null);

  const [image, setImage] = useState("");

  // Capture image from webcam
  const capture = () => {
    const screenshot = webcamRef.current.getScreenshot();
    setImage(screenshot);
  };

  // Upload image to backend
  const uploadFace = async () => {

    if (!image) {
      alert("Please capture an image first.");
      return;
    }

    // Convert Base64 image to Blob
    const blob = await fetch(image).then((res) => res.blob());

    // Create form data
    const formData = new FormData();

    // "face" must match upload.single("face") in backend
    formData.append("face", blob, "face.jpg");

    try {

      const res = await registerFace(formData);

      alert(res.message);

    } catch (err) {

      console.error(err);

      alert("Face Registration Failed");

    }
  };

  return (
    <Card
      sx={{
        maxWidth: 700,
        margin: "30px auto",
        p: 3,
      }}
    >
      <CardContent>

        <Typography
          variant="h4"
          gutterBottom
        >
          Smart Attendance
        </Typography>

        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
        />

        {/* Capture Button */}
        <Button
          sx={{ mt: 2 }}
          variant="contained"
          onClick={capture}
        >
          Capture Face
        </Button>

        {/* Register Button */}
        <Button
          sx={{ mt: 2, ml: 2 }}
          variant="contained"
          color="success"
          onClick={uploadFace}
        >
          Register Face
        </Button>
<Button
  variant="contained"
  color="secondary"
  sx={{ mt: 2, ml: 2 }}
  onClick={async () => {
    try {
      const res = await markAttendance();
      alert(res.message);
    } catch (err) {
      alert("Attendance Failed");
    }
  }}
>
  Mark Attendance
</Button>
        {image && (
          <>
            <Typography mt={3}>
              Captured Image
            </Typography>

            <img
              src={image}
              alt="Captured Face"
              width="100%"
            />
          </>
        )}

      </CardContent>
    </Card>
  );
}

export default Attendance;