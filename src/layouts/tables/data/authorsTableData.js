import React, { useState, useEffect } from "react";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";
import { ASSETS } from "constants";

import axios from "axios";

function Data() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedAsset, setSelectedAsset] = useState(null);
  const [precios, setPrecios] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("http://127.0.0.1:5000/api/v1/asset/yfinance", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log(response);
      setPrecios(response.data);
    }
    fetchData();
  }, []);

  // eslint-disable-next-line react/prop-types
  const Author = ({ image, name, email }) => (
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

  // eslint-disable-next-line react/prop-types
  const Job = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
    </MDBox>
  );

  const handleComprarClick = (asset) => {
    setSelectedAsset(asset);
    setModalOpen(true);
  };

  const rows = Object.values(ASSETS).map((asset) => {
    const price = precios[asset.shortName];
    return {
      author: <Author image={asset.image} name={asset.shortName} email={asset.longName} />,
      function: <Job title="Manager" description="Organization" />,
      status: (
        <MDBox ml={-1}>
          <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
        </MDBox>
      ),
      employed: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {price}
        </MDTypography>
      ),
    };
  });

  const columns = [
    { Header: "especie", accessor: "author", width: "45%", align: "left" },
    // { Header: "function", accessor: "function", align: "left" },
    // { Header: "status", accessor: "status", align: "center" },
    { Header: "ultimo precio", accessor: "employed", align: "center" },
    // { Header: "accion", accessor: "action", align: "center" },
  ];

  return { columns, rows };
}

export default Data;
