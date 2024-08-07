/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
import React, { useState, useEffect } from "react";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import { getAssetByShortName } from "constants";
import axios from "axios";

export default function historyData() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("http://127.0.0.1:5000/api/v1/asset/holding_history/1", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log(response);
      setHistory(response.data);
    }
    fetchData();
  }, []);

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
    { Header: "Fecha", accessor: "fecha", width: "20%", align: "left" },
    { Header: "Activo", accessor: "activo", align: "left" },
    { Header: "Cantidad de acciones", accessor: "cantidad", align: "left" },
  ];

  const rows = history.flatMap((record) => {
    return record.assets.map((activo) => {
      const asset = getAssetByShortName(activo.name);
      return {
        fecha: record.date,
        activo: (
          <MDBox key={activo.id} display="flex" alignItems="center" mb={1}>
            <Activo image={asset.image} name={asset.shortName} email={asset.longName} />
          </MDBox>
        ),
        cantidad: activo.quantity,
      };
    });
  });

  return {
    columns,
    rows,
  };
}
