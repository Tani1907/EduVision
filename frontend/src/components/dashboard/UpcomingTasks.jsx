import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
} from "@mui/material";

function UpcomingTasks() {
  return (
    <Card sx={{ mt: 4, borderRadius: 4 }}>
      <CardContent>

        <Typography variant="h6">
          Upcoming Tasks
        </Typography>

        <List>

          <ListItem>
            SQL Assignment - Friday
          </ListItem>

          <ListItem>
            DSA Lab - Monday
          </ListItem>

          <ListItem>
            AI Viva - Next Week
          </ListItem>

        </List>

      </CardContent>
    </Card>
  );
}

export default UpcomingTasks;