import {
  Card,
  CardContent,
  Typography,
} from "@mui/material";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  { subject: "SQL", marks: 88 },
  { subject: "DSA", marks: 80 },
  { subject: "Quiz", marks: 91 },
  { subject: "Viva", marks: 84 },
];

function PerformanceChart() {
  return (
    <Card sx={{ mt: 4, borderRadius: 4 }}>
      <CardContent>

        <Typography variant="h6" gutterBottom>
          Academic Performance
        </Typography>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="subject" />

            <YAxis />

            <Tooltip />

            <Bar
              dataKey="marks"
              fill="#10B981"
            />

          </BarChart>
        </ResponsiveContainer>

      </CardContent>
    </Card>
  );
}

export default PerformanceChart;