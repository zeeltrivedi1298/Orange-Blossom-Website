import * as React from "react";
// import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios, { Axios } from "axios";
import { v4 as uuid } from "uuid";
import Adminbar from "./Adminbar";

const theme = createTheme();

export default function Addproject() {
  // const [plantname, setPlantname] = useState("");
  // const [plantdescription, setPlantdescription] = useState("");
  // const [plantcolor, setPlantcolor] = useState("");
  // const [size, setSize] = useState("");
  // const [price, setPrice] = useState("");
  const current = new Date();

  const date = `${current.getFullYear()}-${
    current.getMonth() + 1
  }-${current.getDate()}`;

  const handleSubmit = (event) => {
    // event.preventDefault();
    const data = new FormData(event.currentTarget);
    const unique_id = uuid();
    const projectunique_id = unique_id.slice(0, 8);
    console.log("id: ", projectunique_id);

    const unique_id2 = uuid();
    const payment_id = unique_id2.slice(0, 8);

    // setPlantname(data.get("plantname"));
    // setPlantdescription(data.get("plantdescription"));
    // setPlantcolor(data.get("plantcolor"));
    // setSize(data.get("size"));
    // setPrice(data.get("price"));

    console.log("jd", data.get("plantname"));
    console.log("jd1", data.get("plantdescription"));

    // data.values("");

    let body_data = {
      plantnameexp: "abc",
      plantdescriptionexp: "bdf",
    };
    body_data = JSON.stringify(body_data);

    // fetch("http://localhost:3001/api/insert", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     profile_image_link: "https://demo.link",
    //   }),
    // })
    //   .then((response) => response.text())
    //   .then((result) => console.log(result))
    //   .catch((error) => console.log("error", error));

    axios
      .post("http://localhost:3002/api/insert/addproject", {
        project_id: projectunique_id,
        projectname: data.get("projectname"),
        projectphase: data.get("projectphase"),
        projecttype: data.get("projecttype"),
        projectdescription: data.get("projectdescription"),
        projectinstallation: data.get("projectinstallation"),
        projectaddress: data.get("projectaddress"),
        phonenumber: data.get("phonenumber"),
        projectstartdate: data.get("projectstartdate"),
        projectpickupdate: data.get("projectpickupdate"),
        projecttotal: data.get("projecttotal"),
        projectdeposit: data.get("projectdeposit"),
        payment_date: date,
        balance: 0,
        payment_id: payment_id,
      })
      .then(() => {
        alert("Successful insert");
      });

    // console.log({
    //   plantid: plantunique_id,
    //   plantname: plantname,
    //   plantdescription: plantdescription,
    //   plantcolor: plantcolor,
    //   size: size,
    //   price: price,
    // });
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Adminbar />
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              Add Project
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="projectname"
                    name="projectname"
                    label="Project Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="projectphase"
                    name="projectphase"
                    label="Phase"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="projecttype"
                    name="projecttype"
                    label="Project Type"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Project Description"
                    name="projectdescription"
                    id="projectdescription"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Project Installation Month"
                    name="projectinstallation"
                    id="projectinstallation"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Project Address"
                    name="projectaddress"
                    id="projectaddress"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Phone Number"
                    name="phonenumber"
                    id="phonenumber"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Project Start Date"
                    name="projectstartdate"
                    id="projectstartdate"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Project Pickup Date"
                    name="projectpickupdate"
                    id="projectpickupdate"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Project Total"
                    name="projecttotal"
                    id="projecttotal"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Project Deposit"
                    name="projectdeposit"
                    id="projectdeposit"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Submit
              </Button>
              <Grid container justifyContent="flex-end"></Grid>
            </Box>
          </Box>
        </Container>

        {/* {plantdata.map((val) => {
        return (
          <div>
            <h4>Plant Id: {val.plant_id} </h4>;
            <table>
              <tbody>
                <tr>
                  <td>Plant Id</td>
                  <td>Plant Name</td>
                  <td>Color</td>
                  <td>Size</td>
                  <td>Price</td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      })} */}
      </ThemeProvider>
    </div>
  );
}
