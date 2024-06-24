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

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";
import MDButton from "components/MDButton";
import Icon from "@mui/material/Icon";

import { useEffect, useState } from "react";

// Images
import roboadv from "assets/images//activos/robot.png";
import edn from "assets/images//activos/edn.jpg";
import ypf from "assets/images//activos/YPFD.jpg";
import ggal from "assets/images//activos/GGAL.jpg";
import loma from "assets/images//activos/LOMA.jpg";
import pamp from "assets/images//activos/PAMP.jpg";

// const ASSETS = {
//   GGAL: {
//     image: "assets/images//activos/GGAL.jpg",
//     longName: "Banco Galicia",
//     shortName: "GGAL",
//   },
//   EDN: {
//     image: "assets/images//activos/edn.jpg",
//     longName: "Edenor",
//     shortName: "EDN",
//   },
//   YPFD: {
//     image: "assets/images//activos/YPFD.jpg",
//     longName: "YPF",
//     shortName: "YPFD",
//   },
//   LOMA: {
//     image: "assets/images//activos/LOMA.jpg",
//     longName: "Loma Negra",
//     shortName: "LOMA",
//   },
//   PAMP: {
//     image: "assets/images//activos/PAMP.jpg",
//     longName: "Pampa Energía",
//     shortName: "PAMP",
//   },
// };

// export default function data() {
//   const Author = ({ image, name, email }) => (
//     <MDBox display="flex" alignItems="center" lineHeight={1}>
//       <MDAvatar src={image} name={name} size="sm" />
//       <MDBox ml={2} lineHeight={1}>
//         <MDTypography display="block" variant="button" fontWeight="medium">
//           {name}
//         </MDTypography>
//         <MDTypography variant="caption">{email}</MDTypography>
//       </MDBox>
//     </MDBox>
//   );

//   const Job = ({ title, description }) => (
//     <MDBox lineHeight={1} textAlign="left">
//       <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
//         {title}
//       </MDTypography>
//       <MDTypography variant="caption">{description}</MDTypography>
//     </MDBox>
//   );

//   return {
//     columns: [
//       { Header: "especie", accessor: "author", width: "45%", align: "left" },
//       // { Header: "function", accessor: "function", align: "left" },
//       // { Header: "status", accessor: "status", align: "center" },
//       { Header: "importe", accessor: "employed", align: "center" },
//       { Header: "accion", accessor: "action", align: "center" },
//     ],

//     rows: [
//       {
//         author: <Author image={ggal} name="GGAL" email="Galicia" />,
//         function: <Job title="Manager" description="Organization" />,
//         status: (
//           <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
//             $35000
//           </MDTypography>
//         ),
//         employed: (
//           <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
//             $100
//           </MDTypography>
//         ),
//         action: (
//           <MDBox display="flex" alignItems="center" mt={{ xs: 2, sm: 0 }} ml={{ xs: -1.5, sm: 0 }}>
//             <MDBox mr={1}>
//               <MDButton variant="text" color="error">
//                 <Icon>delete</Icon>&nbsp;vender
//               </MDButton>
//             </MDBox>
//             <MDBox mr={1}>
//               <MDButton variant="text" color="success">
//                 <Icon>delete</Icon>&nbsp;comprar
//               </MDButton>
//             </MDBox>
//           </MDBox>
//         ),
//       },
//       {
//         author: <Author image={pamp} name="PAMP" email="Pampa Energía" />,
//         function: <Job title="Programator" description="Developer" />,
//         status: (
//           <MDBox ml={-1}>
//             <MDBadge badgeContent="offline" color="dark" variant="gradient" size="sm" />
//           </MDBox>
//         ),
//         employed: (
//           <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
//             $200
//           </MDTypography>
//         ),
//         action: (
//           <MDBox display="flex" alignItems="center" mt={{ xs: 2, sm: 0 }} ml={{ xs: -1.5, sm: 0 }}>
//             <MDBox mr={1}>
//               <MDButton variant="text" color="error">
//                 <Icon>delete</Icon>&nbsp;vender
//               </MDButton>
//             </MDBox>
//             <MDBox mr={1}>
//               <MDButton variant="text" color="success">
//                 <Icon>delete</Icon>&nbsp;comprar
//               </MDButton>
//             </MDBox>
//           </MDBox>
//         ),
//       },
//     ],
//   };
// }

const ASSETS = {
  GGAL: {
    image: ggal,
    longName: "Banco Galicia",
    shortName: "GGAL",
  },
  EDN: {
    image: edn,
    longName: "Edenor",
    shortName: "EDN",
  },
  YPFD: {
    image: ypf,
    longName: "YPF",
    shortName: "YPFD",
  },
  LOMA: {
    image: loma,
    longName: "Loma Negra",
    shortName: "LOMA",
  },
  PAMP: {
    image: pamp,
    longName: "Pampa Energía",
    shortName: "PAMP",
  },
};

export default function data(assetList) {
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

  const Job = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
    </MDBox>
  );

  // Generate rows based on assetList and ASSETS constant
  const rows = assetList
    .map((asset) => {
      const assetInfo = ASSETS[asset.name];
      if (!assetInfo) return null;

      return {
        author: (
          <Author image={assetInfo.image} name={assetInfo.shortName} email={assetInfo.longName} />
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            {`$${asset.amount}`}
          </MDTypography>
        ),
        action: (
          <MDBox display="flex" alignItems="center" mt={{ xs: 2, sm: 0 }} ml={{ xs: -1.5, sm: 0 }}>
            <MDBox mr={1}>
              <MDButton variant="text" color="error">
                <Icon>delete</Icon>&nbsp;vender
              </MDButton>
            </MDBox>
            <MDBox mr={1}>
              <MDButton variant="text" color="success">
                <Icon>delete</Icon>&nbsp;comprar
              </MDButton>
            </MDBox>
          </MDBox>
        ),
      };
    })
    .filter((row) => row !== null); // Filter out any null rows

  return {
    columns: [
      { Header: "especie", accessor: "author", width: "45%", align: "left" },
      { Header: "importe", accessor: "employed", align: "center" },
      { Header: "accion", accessor: "action", align: "center" },
    ],
    rows: rows,
  };
}
