import WelcomeBanner from "../../components/dashboard/WelcomeBanner";
import DashboardCards from "../../components/dashboard/DashboardCards";
import AttendanceChart from "../../components/dashboard/AttendanceChart";
import PerformanceChart from "../../components/dashboard/PerformanceChart";
import RecommendationCard from "../../components/dashboard/RecommendationCard";
import RecentActivity from "../../components/dashboard/RecentActivity";
import UpcomingTasks from "../../components/dashboard/UpcomingTasks";

function Dashboard() {
  return (
    <div>
      <WelcomeBanner />

      <DashboardCards />

      <AttendanceChart />

      <PerformanceChart />

      <RecommendationCard />

      <RecentActivity />

      <UpcomingTasks />
    </div>
  );
}

export default Dashboard;