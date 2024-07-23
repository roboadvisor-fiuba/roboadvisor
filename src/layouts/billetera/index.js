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

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import Modal from "components/Modal";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

// Data
import billeteraTable from "layouts/billetera/data/billeteraTable";
import billeteraTable2 from "layouts/billetera/data/billeteraTable2";

function Abc() {
  const { columns, rows } = billeteraTable2();
  return (
    <MDBox pt={6} pb={3}>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Card>
            <MDBox
              mx={2}
              mt={-3}
              py={3}
              px={2}
              variant="gradient"
              bgColor="info"
              borderRadius="lg"
              coloredShadow="info"
            >
              <MDTypography variant="h6" color="white">
                Portfolio del Robo Advisor
              </MDTypography>
            </MDBox>
            <MDBox pt={3}>
              <DataTable
                table={{ columns, rows }}
                isSorted={false}
                entriesPerPage={false}
                showTotalEntries={false}
                noEndBorder
              />
            </MDBox>
          </Card>
        </Grid>
      </Grid>
    </MDBox>
  );
}

function Billetera() {
  const [openNewPortModal, setOpenNewPortModal] = useState(false);
  const [portfolioAssets, setPortfolioAssets] = useState({});

  const handleClickOpen = () => {
    setOpenNewPortModal(true);
  };

  // useEffect(() => {
  //   const fetchPortfolios = async () => {
  //     try {
  //       const response = await axios.get("http://127.0.0.1:5000/api/v1/portfolios", {
  //         headers: {
  //           Authorization: `Bearer ${localStorage.getItem("token")}`,
  //         },
  //       });

  //       const portfolios = response.data.items;
  //       const portfolioAssetsData = {};

  //       for (const portfolio of portfolios) {
  //         const assetsResponse = await axios.get(
  //           `http://127.0.0.1:5000/api/v1/asset/${portfolio.id}`,
  //           {
  //             headers: {
  //               Authorization: `Bearer ${localStorage.getItem("token")}`,
  //             },
  //           }
  //         );

  //         const assets = assetsResponse.data.assets.map((asset) => ({
  //           name: asset.name.toUpperCase(), // Assuming asset names in ASSETS are uppercase
  //           amount: asset.quantity,
  //         }));

  //         portfolioAssetsData[portfolio.name] = assets;
  //       }

  //       setPortfolioAssets(portfolioAssetsData);
  //     } catch (error) {
  //       console.error("Error fetching portfolios and assets:", error);
  //     }
  //   };

  //   fetchPortfolios();
  // }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      {/* <MDBox pt={1} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <MDBox pt={2} px={2} display="flex" justifyContent="space-between" alignItems="center">
              <MDButton variant="gradient" color="dark" onClick={handleClickOpen}>
                <Icon sx={{ fontWeight: "bold" }}>add</Icon>
                &nbsp;Nuevo Portfolio
              </MDButton>
            </MDBox>
            <Modal
              open={openNewPortModal}
              setOpen={setOpenNewPortModal}
              title={"Nuevo portfolio"}
              subtitle={"Ingrese el nombre del nuevo portfolio"}
              label={"Nombre del portfolio"}
              createLabel={"Crear nuevo portfolio"}
            />
          </Grid>
          {Object.keys(portfolioAssets).map((portfolioName) => {
            const { columns, rows } = billeteraTable(portfolioAssets[portfolioName]);
            return (
              <Grid item xs={12} key={portfolioName}>
                <Card>
                  <MDBox
                    mx={2}
                    mt={-3}
                    py={3}
                    px={2}
                    variant="gradient"
                    bgColor="info"
                    borderRadius="lg"
                    coloredShadow="info"
                  >
                    <MDTypography variant="h6" color="white">
                      {portfolioName}
                    </MDTypography>
                  </MDBox>
                  <MDBox pt={3}>
                    <DataTable
                      table={{ columns, rows }}
                      isSorted={false}
                      entriesPerPage={false}
                      showTotalEntries={false}
                      noEndBorder
                    />
                  </MDBox>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </MDBox> */}
      <Abc />
      {/* <Card id="delete-account">
        <MDBox pt={3} px={2}>
          <MDTypography variant="h6" fontWeight="medium">
            Dinero Invertido
          </MDTypography>
        </MDBox>
        <MDBox pt={1} pb={2} px={2}>
          <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
            <MDBox p={3}>
              <MDTypography variant="h4" color="text">
                $10,000
              </MDTypography>
              <MDBox mt={5} display="flex" justifyContent="left" gap={1}>
                <Link to="/comprar">
                  <MDButton variant="gradient" color="success">
                    Invertir
                  </MDButton>
                </Link>
                <MDButton variant="gradient" color="error">
                  Vender
                </MDButton>
              </MDBox>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card> */}
      {/* <Footer /> */}
    </DashboardLayout>
  );
}

export default Billetera;
