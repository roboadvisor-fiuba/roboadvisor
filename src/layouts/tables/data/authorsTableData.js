import React, { useState, useEffect } from "react";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";
import MDButton from "components/MDButton";
import Icon from "@mui/material/Icon";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import axios from "axios";

// Images
import bbva from "assets/images/activos/bbva.jpg";
import edn from "assets/images/activos/edn.jpg";
import ypf from "assets/images/activos/YPFD.jpg";
import ggal from "assets/images/activos/GGAL.jpg";
import loma from "assets/images/activos/LOMA.jpg";
import pamp from "assets/images/activos/PAMP.jpg";

const ASSETS = {
  GGAL: {
    image: ggal,
    longName: "Banco Galicia",
    shortName: "GGAL.BA",
  },
  EDN: {
    image: edn,
    longName: "Edenor",
    shortName: "EDN.BA",
  },
  YPFD: {
    image: ypf,
    longName: "YPF",
    shortName: "YPFD.BA",
  },
  LOMA: {
    image: loma,
    longName: "Loma Negra",
    shortName: "LOMA.BA",
  },
  PAMP: {
    image: pamp,
    longName: "Pampa Energía",
    shortName: "PAMP.BA",
  },
  BBAR: {
    image: bbva,
    longName: "BBVA",
    shortName: "BBAR.BA",
  },
};

const PRICES = {
  GGAL: 1657.0,
  EDN: 2500.65,
  YPFD: 1986.78,
  LOMA: 666.0,
  PAMP: 950.0,
  BBAR: 1750.2,
};

// function ComprarModal({ open, setOpen, asset }) {
//   const [portfolioId, setPortfolioId] = useState("");
//   const [quantity, setQuantity] = useState(1);
//   const [errorMessage, setErrorMessage] = useState("");
//   const portfolios = [
//     { id: 1, name: "Portfolio 1" },
//     { id: 2, name: "Portfolio 2" },
//   ]; // Replace this with actual portfolio data

//   const handleClose = () => {
//     setOpen(false);
//     setPortfolioId("");
//     setQuantity(1);
//     setErrorMessage("");
//   };

//   const handleComprar = async (event) => {
//     event.preventDefault();
//     try {
//       const formData = new FormData();
//       formData.append("name", asset.shortName);
//       formData.append("quantity", quantity);
//       formData.append("portfolio_id", portfolioId);

//       await axios.post("http://127.0.0.1:5000/api/v1/asset", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//       });
//       handleClose();
//     } catch (error) {
//       if (error.response) {
//         setErrorMessage(error.response.data.message || "An error occurred during the purchase.");
//       } else {
//         setErrorMessage("The server may be down or your network is not configured correctly.");
//       }
//     }
//   };

//   return (
//     <Dialog open={open} onClose={handleClose}>
//       <DialogTitle>Comprar {asset.longName}</DialogTitle>
//       <DialogContent>
//         <DialogContentText>
//           Selecciona el portafolio y la cantidad que deseas comprar.
//         </DialogContentText>
//         <FormControl fullWidth margin="dense">
//           <InputLabel id="portfolio-label">Portafolio</InputLabel>
//           <Select
//             labelId="portfolio-label"
//             id="portfolio"
//             value={portfolioId}
//             onChange={(e) => setPortfolioId(e.target.value)}
//           >
//             {portfolios.map((portfolio) => (
//               <MenuItem key={portfolio.id} value={portfolio.id}>
//                 {portfolio.name}
//               </MenuItem>
//             ))}
//           </Select>
//         </FormControl>
//         <TextField
//           margin="dense"
//           id="quantity"
//           label="Cantidad"
//           type="number"
//           fullWidth
//           variant="standard"
//           value={quantity}
//           onChange={(e) => setQuantity(e.target.value)}
//         />
//         {errorMessage && (
//           <MDTypography color="error" textAlign="center">
//             {errorMessage}
//           </MDTypography>
//         )}
//       </DialogContent>
//       <DialogActions>
//         <Button onClick={handleClose}>Cancelar</Button>
//         <Button onClick={handleComprar}>Comprar</Button>
//       </DialogActions>
//     </Dialog>
//   );
// }

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
      // action: (
      //   <MDBox display="flex" alignItems="center" mt={{ xs: 2, sm: 0 }} ml={{ xs: -1.5, sm: 0 }}>
      //     <MDBox mr={1}>
      //       <MDButton variant="text" color="error">
      //         <Icon>delete</Icon>&nbsp;vender
      //       </MDButton>
      //     </MDBox>
      //     <MDBox mr={1}>
      //       <MDButton variant="text" color="success" onClick={() => handleComprarClick(asset)}>
      //         <Icon>add</Icon>&nbsp;comprar
      //       </MDButton>
      //     </MDBox>
      //   </MDBox>
      // ),
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
