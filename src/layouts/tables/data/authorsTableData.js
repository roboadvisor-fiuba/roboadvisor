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
  const [precios, setPrecios] = useState({});

  useEffect(() => {
    async function fetchPrices() {
      const fetchedPrices = {};
      for (const asset of Object.values(ASSETS)) {
        try {
          const response = await axios.get(
            `http://127.0.0.1:5000/api/v1/asset/yfinance/${asset.shortName}`,
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          );
          fetchedPrices[asset.shortName] = response.data.price;
        } catch (error) {
          console.error(`Error fetching price for ${asset.shortName}:`, error);
        }
      }
      setPrecios(fetchedPrices);
    }

    fetchPrices();
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
          {price !== undefined ? `$${price}` : "Loading..."}
        </MDTypography>
      ),
    };
  });

  const columns = [
    { Header: "especie", accessor: "author", width: "45%", align: "left" },
    { Header: "ultimo precio", accessor: "employed", align: "center" },
  ];

  return { columns, rows };
}

export default Data;
