import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
} from "@mui/material";

import {
  getProfile,
  updateProfile,
} from "../../services/studentService";

function Profile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const data = await getProfile();
        setProfile(data);
      } catch (error) {
        console.error(error);
      }
    };

    loadProfile();
  }, []);

  const handleSave = async () => {
    try {
      const res = await updateProfile({
        name: profile.name,
        phone: profile.phone,
        department: profile.department,
      });

      alert(res.message);
    } catch (err) {
      alert("Update Failed");
    }
  };

  if (!profile) return <p>Loading...</p>;

  return (
    <Card
      sx={{
        maxWidth: 700,
        margin: "30px auto",
        p: 2,
      }}
    >
      <CardContent>

        <Typography
          variant="h4"
          gutterBottom
        >
          Student Profile
        </Typography>

        <TextField
          fullWidth
          label="Name"
          margin="normal"
          value={profile.name}
          onChange={(e) =>
            setProfile({
              ...profile,
              name: e.target.value,
            })
          }
        />

        <TextField
          fullWidth
          label="Email"
          margin="normal"
          value={profile.email}
          disabled
        />

        <TextField
          fullWidth
          label="Phone"
          margin="normal"
          value={profile.phone}
          onChange={(e) =>
            setProfile({
              ...profile,
              phone: e.target.value,
            })
          }
        />

        <TextField
          fullWidth
          label="Roll No"
          margin="normal"
          value={profile.roll_no}
          disabled
        />

        <TextField
          fullWidth
          label="Department"
          margin="normal"
          value={profile.department}
          onChange={(e) =>
            setProfile({
              ...profile,
              department: e.target.value,
            })
          }
        />

        <TextField
          fullWidth
          label="Role"
          margin="normal"
          value={profile.role}
          disabled
        />

        <Button
          variant="contained"
          sx={{ mt: 3 }}
          onClick={handleSave}
        >
          Save Changes
        </Button>

      </CardContent>
    </Card>
  );
}

<Button
  variant="contained"
  sx={{ mt: 3 }}
  onClick={async () => {
    try {
      const res = await updateProfile(profile);
      alert(res.message);
    } catch (err) {
      alert("Update failed");
    }
  }}
>
  Save Changes
</Button>

export default Profile;