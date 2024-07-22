/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import TimelineItem from "examples/Timeline/TimelineItem";

function OrdersOverview() {
  return (
    <Card sx={{ height: "100%" }}>
      <MDBox pt={3} px={3}>
        <MDTypography variant="h6" fontWeight="medium">
          Historial de transacciones
        </MDTypography>
        <MDBox mt={0} mb={2}>
          <MDTypography variant="button" color="text" fontWeight="regular">
            <MDTypography display="inline" variant="body2" verticalAlign="middle">
              <Icon sx={{ color: ({ palette: { success } }) => success.main }}>arrow_upward</Icon>
            </MDTypography>
            &nbsp;
            <MDTypography variant="button" color="text" fontWeight="medium">
              $2400
            </MDTypography>{" "}
            este mes
          </MDTypography>
        </MDBox>
      </MDBox>
      <MDBox p={2}>
        <TimelineItem
          color="success"
          icon="notifications"
          title="+$2400 Cartera Robo Advisor"
          dateTime="22 DEC 7:20 PM"
        />
        <TimelineItem
          color="success"
          icon="notifications"
          title="+$1800 Cartera Robo Advisor"
          dateTime="20 DEC 2:20 AM"
        />
      </MDBox>
    </Card>
  );
}

export default OrdersOverview;
