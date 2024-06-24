import React from "react";
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

function CompraExitosa() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Card id="delete-account">
        <MDBox pt={3} px={2}>
          <MDTypography variant="h6" fontWeight="medium"></MDTypography>
        </MDBox>
        <MDBox pt={1} pb={2} px={2}>
          <MDTypography variant="h12" fontWeight="regular">
            Ha invertido exitosamente.
          </MDTypography>
        </MDBox>
        <MDBox pt={1} pb={2} px={2}>
          <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
            <MDBox mt={2} display="flex" justifyContent="left" gap={1}>
              <Link to="/">
                <MDButton variant="gradient" color="dark">
                  Volver al Dashboard
                </MDButton>
              </Link>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </DashboardLayout>
  );
}

export default CompraExitosa;
