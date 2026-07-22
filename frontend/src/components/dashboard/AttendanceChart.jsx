import {
  Card,
  CardContent,
  Typography,
} from "@mui/material";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  { month: "Jan", attendance: 82 },
  { month: "Feb", attendance: 85 },
  { month: "Mar", attendance: 90 },
  { month: "Apr", attendance: 92 },
  { month: "May", attendance: 94 },
  { month: "Jun", attendance: 91 },
];

function AttendanceChart() {
  return (
    <Card sx={{ mt: 4, borderRadius: 4 }}>
      <CardContent>

        <Typography variant="h6" gutterBottom>
          Attendance Overview
        </Typography>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="attendance"
              stroke="#2563EB"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>

      </CardContent>
    </Card>
  );
}

export default AttendanceChart;