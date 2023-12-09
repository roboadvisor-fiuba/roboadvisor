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

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

export default function data() {
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

  return {
    columns: [
      { Header: "especie", accessor: "author", width: "45%", align: "left" },
      // { Header: "function", accessor: "function", align: "left" },
      // { Header: "status", accessor: "status", align: "center" },
      { Header: "ultimo precio", accessor: "employed", align: "center" },
      { Header: "accion", accessor: "action", align: "center" },
    ],

    rows: [
      {
        author: <Author image={team2} name="BBAR" email="BBVA" />,
        function: <Job title="Manager" description="Organization" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            1750,20
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
      },
      {
        author: <Author image={team3} name="EDN" email="Edenor" />,
        function: <Job title="Programator" description="Developer" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="offline" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            2500,65
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
      },
      {
        author: <Author image={team4} name="YPFD" email="YPF" />,
        function: <Job title="Executive" description="Projects" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            1986,78
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
      },
      {
        author: <Author image={team3} name="GGAL" email="Galicia" />,
        function: <Job title="Programator" description="Developer" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            1657,0
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
      },
      {
        author: <Author image={team3} name="LOMA" email="Loma Negra" />,
        function: <Job title="Manager" description="Executive" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="offline" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            830,0
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
      },
      {
        author: <Author image={team4} name="PAMP" email="Pampa Energía" />,
        function: <Job title="Programator" description="Developer" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="offline" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            950,0
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
      },
    ],
  };
}
