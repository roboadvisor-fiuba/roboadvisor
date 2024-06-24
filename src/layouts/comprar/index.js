import React, { useState } from "react";
import { Link } from "react-router-dom";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import Tooltip from "@mui/material/Tooltip";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import MDInput from "components/MDInput";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import visaLogo from "assets/images/logos/visa.png";

function Comprar() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Card id="delete-account">
        <MDBox pt={3} px={2}>
          <MDTypography variant="h6" fontWeight="medium">
            Invertir dinero en la cartera del RoboAdvisor
          </MDTypography>
        </MDBox>
        <MDBox pt={1} pb={2} px={2}>
          <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
            <MDBox p={3}>
              <MDBox pr={1}>
                <MDInput label="$" />
              </MDBox>
            </MDBox>
          </MDBox>
          <MDTypography variant="h12" fontWeight="regular">
            El dinero invertido se destinará a comprar activos según la sugerencia del RoboAdvisor.
            Periódicamente, la cartera del Roboadvisor será actualizada por lo que se efectuarán
            compras y ventas automáticamente.
          </MDTypography>
        </MDBox>
        <MDBox pt={3} px={2}>
          <MDTypography variant="h6" fontWeight="medium">
            Método de pago
          </MDTypography>
        </MDBox>
        <MDBox p={2}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <MDBox
                borderRadius="lg"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                p={3}
                sx={{
                  border: ({ borders: { borderWidth, borderColor } }) =>
                    `${borderWidth[1]} solid ${borderColor}`,
                }}
              >
                <MDBox component="img" src={visaLogo} alt="master card" width="10%" mr={2} />
                <MDTypography variant="h6" fontWeight="medium">
                  ****&nbsp;&nbsp;****&nbsp;&nbsp;****&nbsp;&nbsp;5248
                </MDTypography>
                <MDBox ml="auto" lineHeight={0} color={"white"}>
                  <Tooltip title="Edit Card" placement="top">
                    <Icon sx={{ cursor: "pointer" }} fontSize="small">
                      edit
                    </Icon>
                  </Tooltip>
                </MDBox>
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
        <MDBox pt={1} pb={2} px={2}>
          <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
            <MDBox p={3}>
              <MDBox mt={5} display="flex" justifyContent="left" gap={1}>
                <Link to="/compra-exitosa">
                  <MDButton variant="gradient" color="success">
                    Invertir
                  </MDButton>
                </Link>
              </MDBox>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </DashboardLayout>
  );
}

export default Comprar;
