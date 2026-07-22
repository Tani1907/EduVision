import {
  Card,
  CardContent,
  Typography,
  Button,
} from "@mui/material";

function RecommendationCard() {
  return (
    <Card sx={{ mt: 4, borderRadius: 4 }}>
      <CardContent>

        <Typography
          variant="h6"
          gutterBottom
        >
          AI Recommendation
        </Typography>

        <Typography>
          Your SQL performance is improving.
          Practice DSA Arrays this week to
          improve your overall score.
        </Typography>

        <Button
          variant="contained"
          sx={{ mt: 2 }}
        >
          View Learning Path
        </Button>

      </CardContent>
    </Card>
  );
}

export default RecommendationCard;