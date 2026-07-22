import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
} from "@mui/material";

function RecentActivity() {
  return (
    <Card sx={{ mt: 4, borderRadius: 4 }}>
      <CardContent>

        <Typography variant="h6">
          Recent Activity
        </Typography>

        <List>

          <ListItem>
            SQL Lab Completed
          </ListItem>

          <ListItem>
            Quiz Submitted
          </ListItem>

          <ListItem>
            Attendance Marked
          </ListItem>

        </List>

      </CardContent>
    </Card>
  );
}

export default RecentActivity;