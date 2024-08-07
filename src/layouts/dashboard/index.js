import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import axios from "axios";
import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
import OrdersOverview from "layouts/dashboard/components/OrdersOverview";

function Dashboard() {
  const [portfolioPerformance, setPortfolioPerformance] = useState({
    labels: [],
    datasets: { label: "", data: [] },
  });
  const [mervalPerformance, setMervalPerformance] = useState({
    labels: [],
    datasets: { label: "", data: [] },
  });
  const [lastPerformance, setLastPerformance] = useState(0);
  const [lastPerformanceMerval, setLastPerformanceMerval] = useState(0);

  useEffect(() => {
    const fetchPortfolioPerformanceData = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:5000/api/v1/asset/portfolio_performance/1",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        const data = response.data;
        const labels = data.map((item) => item.date);
        const values = data.map((item) => item.performance);
        setPortfolioPerformance({
          labels,
          datasets: { label: "Robo Advisor Performance", data: values },
        });
        setLastPerformance(values[values.length - 1].toFixed(2));
        console.log(values);
      } catch (error) {
        console.error("Error fetching Robo Advisor Performance data", error);
      }
    };

    const fetchMervalPerformanceData = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:5000/api/v1/asset/merval_performance/1",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        const data = response.data;
        const labels = data.map((item) => item.date);
        const values = data.map((item) => item.performance);
        setMervalPerformance({ labels, datasets: { label: "Merval Performance", data: values } });
        setLastPerformanceMerval(values[values.length - 1].toFixed(2));
      } catch (error) {
        console.error("Error fetching Merval Performance data", error);
      }
    };

    fetchPortfolioPerformanceData();
    fetchMervalPerformanceData();
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="store"
                title="Rendimiento anual del Roboadvisor"
                count={`${lastPerformance}%`}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon="weekend"
                title="Rendimiento anual del Merval"
                count={`${lastPerformanceMerval}%`}
              />
            </MDBox>
          </Grid>
        </Grid>
        <MDBox mt={4.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={8}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="success"
                  title="Rendimiento Cartera Robo Advisor"
                  date="recién actualizado"
                  chart={portfolioPerformance}
                />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
        <MDBox mt={6.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={8}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="dark"
                  title="Rendimiento Índice Merval"
                  date="recién actualizado"
                  chart={mervalPerformance}
                />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
        {/* <MDBox>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <OrdersOverview />
            </Grid>
          </Grid>
        </MDBox> */}
      </MDBox>
    </DashboardLayout>
  );
}

export default Dashboard;
