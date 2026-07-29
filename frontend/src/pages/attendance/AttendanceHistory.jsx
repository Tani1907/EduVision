import { useEffect, useState } from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Typography,
} from "@mui/material";

import { getAttendanceHistory } from "../../services/attendanceService";

function AttendanceHistory() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    loadAttendance();
  }, []);

  const loadAttendance = async () => {
    try {
      const data = await getAttendanceHistory();
      setRecords(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Paper
      sx={{
        maxWidth: 900,
        margin: "30px auto",
        p: 3,
        borderRadius: 3,
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontWeight: "bold", mb: 3 }}
      >
        Attendance History
      </Typography>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }}>Date</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Check In</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Status</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {records.length > 0 ? (
            records.map((record, index) => (
              <TableRow key={index} hover>
                <TableCell>
                  {new Date(record.attendance_date).toLocaleDateString(
                    "en-IN",
                    {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    }
                  )}
                </TableCell>

                <TableCell>
                  {new Date(record.check_in_time).toLocaleTimeString(
                    "en-IN",
                    {
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: true,
                    }
                  )}
                </TableCell>

                <TableCell>{record.status}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={3} align="center">
                No attendance records found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default AttendanceHistory;