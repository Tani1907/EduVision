import { Paper, Typography } from "@mui/material";

function WelcomeBanner() {
  return (
    <Paper
      sx={{
        p: 3,
        mb: 3,
        borderRadius: 3,
      }}
    >
      <Typography variant="h4" fontWeight="bold">
        Welcome to EduVision
      </Typography>

      <Typography>
        AI-Powered Intelligent Virtual Laboratory
      </Typography>
    </Paper>
  );
}

export default WelcomeBanner;