import {
  Grid,
  Card,
  CardContent,
  Typography,
} from "@mui/material";

import SchoolIcon from "@mui/icons-material/School";
import CodeIcon from "@mui/icons-material/Code";
import QuizIcon from "@mui/icons-material/Quiz";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

const cards = [
  {
    title: "Attendance",
    value: "92%",
    icon: <SchoolIcon fontSize="large" />,
    color: "#2563EB",
  },
  {
    title: "SQL Lab",
    value: "18 / 20",
    icon: <CodeIcon fontSize="large" />,
    color: "#10B981",
  },
  {
    title: "DSA Lab",
    value: "15 / 20",
    icon: <TrendingUpIcon fontSize="large" />,
    color: "#F59E0B",
  },
  {
    title: "Quiz Score",
    value: "88%",
    icon: <QuizIcon fontSize="large" />,
    color: "#EF4444",
  },
];

function DashboardCards() {
  return (
    <Grid container spacing={3}>
      {cards.map((card) => (
        <Grid item xs={12} sm={6} md={3} key={card.title}>
          <Card
            sx={{
              borderRadius: 4,
              transition: "0.3s",
              "&:hover": {
                transform: "translateY(-5px)",
              },
            }}
          >
            <CardContent>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography variant="h6">
                  {card.title}
                </Typography>

                <div
                  style={{
                    color: card.color,
                  }}
                >
                  {card.icon}
                </div>
              </div>

              <Typography
                variant="h4"
                fontWeight="bold"
                mt={2}
              >
                {card.value}
              </Typography>

              <Typography
                color="text.secondary"
              >
                Updated Today
              </Typography>

            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default DashboardCards;