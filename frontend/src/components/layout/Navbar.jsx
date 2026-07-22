import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
} from "@mui/material";

import NotificationsIcon from "@mui/icons-material/Notifications";

function Navbar() {
  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: 1201,
      }}
    >
      <Toolbar>

        <Typography
          variant="h6"
          sx={{ flexGrow: 1 }}
        >
          EduVision
        </Typography>

        <IconButton color="inherit">
          <NotificationsIcon />
        </IconButton>

        <Avatar sx={{ ml: 2 }}>
          A
        </Avatar>

      </Toolbar>
    </AppBar>
  );
}

export default Navbar;