/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
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

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import { getAssetByShortName } from "constants";
import axios from "axios";

export default function data() {
  const [portfolio, setPortfolio] = useState([]);
  const [precios, setPrecios] = useState({});

  useEffect(() => {
    async function fetchPortfolio() {
      const response = await axios.get("http://127.0.0.1:5000/api/v1/asset/holding/1", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log(response);
      setPortfolio(response.data);
    }
    fetchPortfolio();
  }, []);

  useEffect(() => {
    async function fetchPrices() {
      const fetchedPrices = {};
      for (const activo of portfolio) {
        try {
          const response = await axios.get(
            `http://127.0.0.1:5000/api/v1/asset/yfinance/${activo.name}`,
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          );
          fetchedPrices[activo.name] = response.data.price;
        } catch (error) {
          console.error(`Error fetching price for ${activo.name}:`, error);
        }
      }
      setPrecios(fetchedPrices);
    }

    if (portfolio.length > 0) {
      fetchPrices();
    }
  }, [portfolio]);

  const Activo = ({ image, name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const Valor = ({ number, simboloPesos = false }) => (
    <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
      {simboloPesos && "$"}
      {number}
    </MDTypography>
  );

  const columns = [
    { Header: "Activo", accessor: "activo", width: "45%", align: "left" },
    { Header: "Precio por Acción", accessor: "precio", align: "center" },
    { Header: "Cantidad de acciones", accessor: "acciones", align: "center" },
    { Header: "Valor Total", accessor: "valor", align: "center" },
  ];

  const rows = portfolio.map((activo) => {
    const asset = getAssetByShortName(activo.name);
    console.log("Activo: ", activo);
    console.log("Asset: ", asset);

    const precio = precios[activo.name] || 0;

    return {
      activo: <Activo image={asset.image} name={asset.shortName} email={asset.longName} />,
      precio: <Valor number={precio} simboloPesos />,
      acciones: <Valor number={activo.quantity} />,
      valor: <Valor number={precio * activo.quantity} simboloPesos />,
    };
  });

  return {
    columns,
    rows,
  };
}
