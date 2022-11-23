import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { borderRadius } from "@mui/system";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CardContent from "@mui/material/CardContent";
import HomeDropDown from "../components/HomeDropDown";

function Home() {
  return (
    <Grid container direction="column" sx={{ backgroundColor: "#eeeee4" }}>
      <Grid item className="banner">
        <Box
          sx={{
            height: "147px",
            backgroundImage:
              'url("https://staticdev.marham.pk/assets/images/home-new/web-banner-2.png")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></Box>
      </Grid>
      <Grid item container justifyContent="center" className="location_section">
        <Grid
          item
          container
          xs={10}
          justifyContent="space-between"
          direction="row"
          spacing={2}
        >
          <Box
            display="flex"
            flexDirection="row"
            style={{
              boxShadow: "0px 3px 6px rgba(0 0 0 0.1)",
              height: "100%",
              width: "39%",
              backgroundColor: "#fff",
              borderRadius: "3px",
            }}
          >
            <TextField
              id="basic"
              defaultValue="Lahore"
              label="Enter City"
              variant="filled"
            />
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            style={{
              boxShadow: "0px 3px 6px rgba(0 0 0 0.1)",
              height: "100%",
              width: "59%",
              backgroundColor: "#fff",
              borderRadius: "3px",
            }}
          >
            <TextField
              id="basic"
              defaultValue="Lahore"
              label="Enter City"
              variant="filled"
            />
          </Box>
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        justifyContent="center"
        className="heading"
        sx={{
          backgroundColor: "#fff",
          mt: "1.5rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: '15px'
        }}
      >
        <Box textAlign="center" sx={{ marginBottom: "1rem" }}>
          <Typography
            variant="h2"
            style={{
              fontSize: "1.125rem",
              fontWeight: "bold",
              color: "rgb(1 78 120)",
            }}
          >
            Are you looking for a Doctor
          </Typography>
          <Typography
            variant="h2"
            style={{ fontSize: "1.125rem", color: "rgb(55 63 80)" }}
          >
            1 Million + Patients Found Doctor Through Marham
          </Typography>
        </Box>
        <Grid
          container
          xs={10}
          justifyContent="center"
          alignItems="center"
          direction="row"
          className="dr-col"
          style={{ height: "30%", justifyContent: "center" }}
        >
          <Box
            display="flex"
            style={{
              height: "30%",
              width: "40%",
              padding: "1rem",
              marginX: "1.5rem",
              marginY: "2rem",
            }}
          >
            <Box>
              <Typography
                variant="h2"
                style={{
                  fontSize: "1.125rem",
                  fontWeight: "bold",
                  color: "rgb(1 78 120)",
                }}
              >
                Find and Book Appointment
              </Typography>
              <Typography
                variant="h2"
                style={{ fontSize: "1.125rem", color: "rgb(1 78 120)" }}
              >
                16000+ PMC Verified doctors
              </Typography>
              <Button variant="contained">Contained</Button>
            </Box>
            <Box sx={{ maxWidth: "25%" }}>
              <img
                src="https://static.marham.pk/assets/images/home-new/doctor1.png"
                alt=""
                style={{ height: "auto ", maxWidth: "100%" }}
              />
            </Box>
          </Box>
          <Box
            display="flex"
            style={{
              height: "30%",
              width: "40%",
              padding: "1rem",
              marginX: "1.5rem",
              marginY: "2rem",
            }}
          >
            <Box>
              <Typography
                variant="h2"
                style={{
                  fontSize: "1.125rem",
                  fontWeight: "bold",
                  color: "rgb(1 78 120)",
                }}
              >
                Video Consultation
              </Typography>
              <Typography
                variant="h2"
                style={{ fontSize: "1.125rem", color: "rgb(1 78 120)" }}
              >
                Are you looking for a Doctor
              </Typography>
              <Button variant="contained">Contained</Button>
            </Box>
            <Box sx={{ maxWidth: "25%" }}>
              <img
                src="https://static.marham.pk/assets/images/home-new/doctor2.png"
                alt=""
                style={{ height: "auto ", maxWidth: "100%" }}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Grid
        xs={12}
        className="Top-Searched-Specialist"
        sx={{ borderRadius: "4px", paddingX: "1rem", backgroundColor: "#fff" }}
      >
        <Box sx={{ marginY: "2rem" }}>
          <Typography
            variant="h2"
            style={{
              fontSize: "1.125rem",
              fontWeight: "bold",
              color: "rgb(1 78 120)",
              textAlign: "center",
            }}
          >
            Top Searched Specialists
          </Typography>
          <Typography
            variant="h2"
            style={{
              fontSize: "1.125rem",
              color: "rgb(55 63 80)",
              textAlign: "center",
            }}
          >
            150+ Specialists Available
          </Typography>
        </Box>
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              width: "15%",
              alignItems: "center",
            }}
          >
            <svg
              class="py-2"
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 90 90"
            >
              <g
                id="Group_6634"
                data-name="Group 6634"
                transform="translate(-400.87 -615)"
              >
                <path
                  id="Path_5636"
                  data-name="Path 5636"
                  d="M45,0A45,45,0,1,1,0,45,45,45,0,0,1,45,0Z"
                  transform="translate(400.87 615)"
                  fill="#014e78"
                ></path>
                <path
                  id="blond"
                  d="M51.755,23.771c-1.811-5.38-4.349-8.869-7.54-10.368a7.592,7.592,0,0,0-5.036-.584,16.51,16.51,0,0,0-2.221-1.009,14.438,14.438,0,0,0-8.87-.39A18.248,18.248,0,0,0,17.6,19.331C10.181,32.314,11.8,46.945,16.456,55.045c1.5,2.608,3.279,3.956,5.3,4.016l.128,0c3.6,0,6.383-4.221,6.5-4.4a.869.869,0,0,0,.111-.711.884.884,0,0,0-.456-.559,8.486,8.486,0,0,1-2.415-2.129c-.169-.195-.328-.379-.473-.533C23.739,49.2,22.468,45.21,21.8,41.859c7.8-2.951,15.807-14.049,17.918-17.125,7.7,5.839,7.294,13.493,6.051,19.563-1.186,5.81-6.1,10.327-6.152,10.371a.872.872,0,0,0-.287.69.888.888,0,0,0,.343.663,7.449,7.449,0,0,0,5.667,1.765c2.89-.426,4.893-2.782,6.15-4.518C58.455,43.635,53.94,30.247,51.755,23.771ZM50.061,52.236c-1.068,1.476-2.744,3.478-4.978,3.809a5.214,5.214,0,0,1-3.495-.846c1.547-1.615,4.9-5.586,5.909-10.549,1.388-6.786,1.791-15.4-7.5-21.894a.892.892,0,0,0-.672-.144.872.872,0,0,0-.571.384c-.108.169-9.628,14.631-17.96,17.378a1.258,1.258,0,0,0-.162.014.865.865,0,0,0-.342.138,7.221,7.221,0,0,1-3.074.217.881.881,0,0,0-.285,1.74,8.345,8.345,0,0,0,3.168-.118c.7,3.449,2.025,7.7,3.754,9.561.137.145.28.313.437.492a12.6,12.6,0,0,0,2.069,2.01c-.959,1.181-2.719,2.873-4.486,2.873-.026,0-.051,0-.079,0-1.362-.038-2.645-1.092-3.816-3.131-4.409-7.678-5.93-21.581,1.145-33.962a16.609,16.609,0,0,1,9.418-7.085,12.979,12.979,0,0,1,3.4-.463,13.279,13.279,0,0,1,6.68,1.876.871.871,0,0,0,.754.058A5.724,5.724,0,0,1,43.463,15c2.7,1.271,4.99,4.5,6.634,9.382C52.334,31,56.494,43.341,50.061,52.236Z"
                  transform="translate(411.37 625.098)"
                  fill="#fff"
                ></path>
              </g>
            </svg>
            <Typography
              variant="h3"
              style={{
                fontSize: "1rem",
                fontWeight: "normal",
                color: "rgb(1 78 120)",
                lineHeight: "1.7778",
                marginTop: "0.5rem",
              }}
            >
              Dermatologist
            </Typography>
          </Box>
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "15%",
            }}
          >
            <svg
              class="py-2"
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 90 90"
            >
              <g
                id="Group_6635"
                data-name="Group 6635"
                transform="translate(-616 -615)"
              >
                <circle
                  id="Ellipse_276"
                  data-name="Ellipse 276"
                  cx="45"
                  cy="45"
                  r="45"
                  transform="translate(616 615)"
                  fill="#014e78"
                ></circle>
                <g id="stomach" transform="translate(637.907 637.422)">
                  <path
                    id="Path_5618"
                    data-name="Path 5618"
                    d="M29.076,11.417h5.561s-.684,13.542,5.006,9.732c2.6-1.74,7.056-4.832,12.514-.138,4.29,3.689,8.109,9.746,2.224,22.523C51.31,50.2,41.117,60.72,25.6,49.235c-2.361-1.747-8.62-5.978-9.037,7.508H11.139s-.212-15.777,8.9-14.6c4.722.611,15.632,3.494,17.381-7.787.362-2.334,1.38-5.216-4.171-8.481C30.883,24.486,28.935,23.235,29.076,11.417Z"
                    transform="translate(-11.139 -11.417)"
                    fill="none"
                    stroke="#fff"
                    stroke-width="2"
                  ></path>
                </g>
              </g>
            </svg>
            <Typography
              variant="h3"
              style={{
                fontSize: "1rem",
                fontWeight: "normal",
                color: "rgb(1 78 120)",
                lineHeight: "1.7778",
                marginTop: "0.5rem",
              }}
            >
              Dermatologist
            </Typography>
          </Box>
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "15%",
            }}
          >
            <svg
              class="py-2"
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 90 90"
            >
              <g
                id="Group_6636"
                data-name="Group 6636"
                transform="translate(-827 -615)"
              >
                <circle
                  id="Ellipse_276"
                  data-name="Ellipse 276"
                  cx="45"
                  cy="45"
                  r="45"
                  transform="translate(827 615)"
                  fill="#014e78"
                ></circle>
                <path
                  id="internal1"
                  d="M56.7,21.043a11.544,11.544,0,0,0-8.277-3.995c-2.454,0-4.331,1.05-5.147,2.889a12.207,12.207,0,0,0-.607,7.778H39.878V16.82a1.065,1.065,0,1,0-2.13,0V27.715h-.812V16.82a1.065,1.065,0,0,0-2.13,0V32.034H31.827a11.7,11.7,0,0,0-.816-6.609c-.816-1.834-2.691-2.887-5.147-2.887a11.56,11.56,0,0,0-8.277,3.995c-1.845,2.086-3.9,5.795-3.187,11.636C15.836,50,25.807,53.853,29.083,53.853c1.892,0,2.013-1.2,2.02-1.453a5.853,5.853,0,0,0-.556-1.945c-.814-2.133-2.329-6.1-1.165-9.947.264-.873.556-1.73.844-2.578.422-1.24.835-2.5,1.163-3.773h3.417V54.077a1.065,1.065,0,0,0,2.13,0V34.158h.812V54.077a1.065,1.065,0,0,0,2.13,0V29.848h3.34c.262.871.552,1.736.844,2.595s.579,1.706.844,2.576c1.165,3.85-.349,7.817-1.165,9.949a5.893,5.893,0,0,0-.556,1.945c.006.243.132,1.455,2.022,1.455,3.274,0,13.245-3.862,14.683-15.686C60.6,26.837,58.549,23.126,56.7,21.043ZM28.21,37.249c-.3.869-.592,1.749-.865,2.646-1.374,4.54.311,8.954,1.212,11.321.06.158.128.328.187.49-2.8-.275-11.006-3.737-12.229-13.8-.614-5.053,1.112-8.211,2.669-9.966a9.374,9.374,0,0,1,6.681-3.279,3.244,3.244,0,0,1,3.2,1.628C30.689,29.954,29.541,33.335,28.21,37.249Zm9.538-5.215h-.812V29.85h.812Zm20.028.388c-1.223,10.062-9.429,13.524-12.226,13.8.06-.162.128-.332.183-.488.905-2.369,2.588-6.785,1.212-11.323-.271-.9-.571-1.777-.863-2.646-.337-.986-.66-1.939-.931-2.872,0-.036.021-.062.021-.1a1.037,1.037,0,0,0-.2-.588,10.664,10.664,0,0,1,.258-7.393,3.248,3.248,0,0,1,3.2-1.626,9.377,9.377,0,0,1,6.683,3.274C56.661,24.213,58.391,27.368,57.776,32.421Z"
                  transform="translate(834.998 624.667)"
                  fill="#fff"
                ></path>
              </g>
            </svg>
            <Typography
              variant="h3"
              style={{
                fontSize: "1rem",
                fontWeight: "normal",
                color: "rgb(1 78 120)",
                lineHeight: "1.7778",
                marginTop: "0.5rem",
              }}
            >
              Dermatologist
            </Typography>
          </Box>
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "15%",
            }}
          >
            <svg
              class="py-2"
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 90 90"
            >
              <g
                id="Group_6637"
                data-name="Group 6637"
                transform="translate(-1024 -615)"
              >
                <circle
                  id="Ellipse_276"
                  data-name="Ellipse 276"
                  cx="45"
                  cy="45"
                  r="45"
                  transform="translate(1024 615)"
                  fill="#014e78"
                ></circle>
                <g id="baby" transform="translate(1051.156 635.422)">
                  <g
                    id="Group_6441"
                    data-name="Group 6441"
                    transform="translate(11.121 17.648)"
                  >
                    <g id="Group_6438" data-name="Group 6438">
                      <path
                        id="Path_5619"
                        data-name="Path 5619"
                        d="M186.792,181.278a.741.741,0,0,1-.741-.741v-1.186a.741.741,0,1,1,1.482,0v1.186A.741.741,0,0,1,186.792,181.278Z"
                        transform="translate(-186.051 -178.61)"
                        fill="#fff"
                      ></path>
                    </g>
                    <g
                      id="Group_6439"
                      data-name="Group 6439"
                      transform="translate(12.341)"
                    >
                      <path
                        id="Path_5620"
                        data-name="Path 5620"
                        d="M311.689,181.278a.741.741,0,0,1-.741-.741v-1.186a.741.741,0,1,1,1.482,0v1.186A.741.741,0,0,1,311.689,181.278Z"
                        transform="translate(-310.948 -178.61)"
                        fill="#fff"
                      ></path>
                    </g>
                    <g
                      id="Group_6440"
                      data-name="Group 6440"
                      transform="translate(4.544 1.15)"
                    >
                      <path
                        id="Path_5621"
                        data-name="Path 5621"
                        d="M234.4,192.476a2.9,2.9,0,0,1-2.186-1,.741.741,0,1,1,1.117-.974,1.415,1.415,0,0,0,2.136,0,.741.741,0,1,1,1.117.974A2.9,2.9,0,0,1,234.4,192.476Z"
                        transform="translate(-232.035 -190.253)"
                        fill="#fff"
                      ></path>
                    </g>
                  </g>
                  <g id="Group_6442" data-name="Group 6442">
                    <path
                      id="Path_5622"
                      data-name="Path 5622"
                      d="M91.533,0A18.053,18.053,0,0,0,73.5,18.033V32.558a18.023,18.023,0,0,0,29.894,13.571.751.751,0,0,0,.1-.091,17.993,17.993,0,0,0,6.069-13.48V18.033A18.053,18.053,0,0,0,91.533,0Zm16.551,32.558a16.506,16.506,0,0,1-5.144,11.981L98.282,40.58a.741.741,0,1,0-.96,1.129l4.486,3.814A16.542,16.542,0,0,1,74.982,32.558V18.033a16.551,16.551,0,0,1,33.1,0Z"
                      transform="translate(-73.5)"
                      fill="#fff"
                    ></path>
                    <path
                      id="Path_5623"
                      data-name="Path 5623"
                      d="M126,37.436a14.353,14.353,0,0,0-14.249,12.771.741.741,0,1,0,1.473.161,12.853,12.853,0,0,1,17.115-10.7,5.12,5.12,0,0,1,.854,5.292,3.972,3.972,0,0,1-5.173,2.172,3.029,3.029,0,0,1-1.657-3.945,2.272,2.272,0,0,1,2.963-1.244,1.67,1.67,0,0,1,.914,2.177,1.18,1.18,0,0,1-.64.646.741.741,0,1,0,.574,1.367,2.652,2.652,0,0,0,1.438-1.452,3.152,3.152,0,0,0-1.726-4.11,3.755,3.755,0,0,0-4.9,2.055,4.513,4.513,0,0,0,2.468,5.878,5.449,5.449,0,0,0,7.106-2.983,6.6,6.6,0,0,0,.112-4.733,12.852,12.852,0,1,1-14.118,21.461l-1.691-1.438-.013-.01a12.8,12.8,0,0,1-3.625-7.578.741.741,0,1,0-1.473.167,14.3,14.3,0,0,0,4.039,8.432.745.745,0,0,0,.111.118l.041.035q.232.228.475.447a14.4,14.4,0,0,0,1.121.91L129.524,73.52a.741.741,0,0,0,.96-1.129l-7.876-6.7A14.333,14.333,0,1,0,126,37.436Z"
                      transform="translate(-107.968 -33.737)"
                      fill="#fff"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
            <Typography
              variant="h3"
              style={{
                fontSize: "1rem",
                fontWeight: "normal",
                color: "rgb(1 78 120)",
                lineHeight: "1.7778",
                marginTop: "0.5rem",
              }}
            >
              Dermatologist
            </Typography>
          </Box>
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "15%",
            }}
          >
            <svg
              class="py-2"
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 90 90"
            >
              <g
                id="Group_6638"
                data-name="Group 6638"
                transform="translate(-1220 -615)"
              >
                <circle
                  id="Ellipse_276"
                  data-name="Ellipse 276"
                  cx="45"
                  cy="45"
                  r="45"
                  transform="translate(1220 615)"
                  fill="#014e78"
                ></circle>
                <g id="fetus" transform="translate(1243.877 632.422)">
                  <path
                    id="Path_5624"
                    data-name="Path 5624"
                    d="M47.175,11.973c-4.5-1.756-8.242-1.842-11.114-.249-4.459,2.473-5.569,8.4-5.986,10.634-.519,2.78-2.448,7.894-9.548,10.939-2.388,1.022-9.758,5.439-4.354,19.335l.245.616c1.137,2.827,2.308,5.757-1.807,11.332a.972.972,0,0,0,1.562,1.156c4.76-6.449,3.257-10.2,2.046-13.213l-.237-.6c-4.642-11.936.769-15.754,3.311-16.84,7.929-3.4,10.1-9.21,10.691-12.369.633-3.379,1.776-7.49,5.019-9.292,2.341-1.3,5.526-1.177,9.464.361,8.425,3.286,9.94,12.2,4.5,26.5-2.095,5.507-9.1,16.244-16.555,17.32a20.445,20.445,0,0,1-4.2-.045c-3.058-.233-6.225-.472-8.45,1.5-1.506,1.337-2.3,3.468-2.438,6.517a.971.971,0,0,0,.929,1.012h.043a.972.972,0,0,0,.972-.929c.109-2.5.692-4.183,1.784-5.147,1.609-1.43,4.358-1.222,7.014-1.016a22,22,0,0,0,4.628.035c8.736-1.263,16.08-13.271,18.093-18.556C60.127,21.674,53.783,14.551,47.175,11.973Z"
                    transform="translate(-14.235 -10.589)"
                    fill="#fff"
                  ></path>
                  <path
                    id="Path_5625"
                    data-name="Path 5625"
                    d="M22.321,36.438a5.483,5.483,0,0,0-3.558,2.277,8.918,8.918,0,0,0-.82,8.005,9.551,9.551,0,0,0,5.4,5.639,12.119,12.119,0,0,0,3.692.633,7.173,7.173,0,0,0,4.234-1.275c2.742-1.931,3.542-5.51,3.771-7.246l.278,0c8.308,0,10.825-8.05,11.8-11.167,1.7-5.429,1.725-9.6.08-12.414a5.848,5.848,0,0,0-3.379-2.788v0a5.068,5.068,0,0,0-4.71.142l-.12.08a6.192,6.192,0,0,0-.707-2.508,3.058,3.058,0,0,0-1.893-1.5l-.494-.1A3.079,3.079,0,0,0,32.474,16.5l0,.5a5.579,5.579,0,0,1-.87,4.525,9.315,9.315,0,0,0-1.591,8.72c-1.885-.861-3.812-1.238-5.011.033a3.564,3.564,0,0,0-.975,2.794,7.231,7.231,0,0,0,1.449,3.431A7.407,7.407,0,0,0,22.321,36.438Zm8.3,2.574c-1.238-.952-4.488-3.907-4.661-6.093a1.611,1.611,0,0,1,.451-1.306c.453-.476,2.089-.245,5.347,1.842l.332.134a4.849,4.849,0,0,0,3.48,1.131c3.721-.284,6.707-4.838,6.834-5.032a.971.971,0,0,0-1.628-1.057c-.711,1.1-3.062,3.979-5.351,4.152A3.267,3.267,0,0,1,32.7,31.509a7.481,7.481,0,0,1,.455-8.812,7.52,7.52,0,0,0,1.271-5.878,1.1,1.1,0,0,1,1.216-.676l.251.049a1.109,1.109,0,0,1,.7.6,7.542,7.542,0,0,1,.324,4.518,9.144,9.144,0,0,0-.439,2.052.973.973,0,0,0,.8,1.028.955.955,0,0,0,1.1-.7,19.434,19.434,0,0,0,.427-1.92,3.641,3.641,0,0,1,1.333-1.879,3.417,3.417,0,0,1,3.107.07,3.983,3.983,0,0,1,2.3,1.97c.909,1.6,1.6,4.764-.288,10.8-1.521,4.869-4.154,10.356-11.015,9.756a1.016,1.016,0,0,0-.729.239.99.99,0,0,0-.33.694c0,.045-.2,4.725-3.047,6.721-1.529,1.078-3.616,1.2-6.208.371a7.73,7.73,0,0,1-4.172-4.471,7.028,7.028,0,0,1,.663-6.315,3.622,3.622,0,0,1,2.285-1.381,4.978,4.978,0,0,1,.96-.1,10.447,10.447,0,0,1,5.792,2.326.971.971,0,0,0,1.347-.208A.986.986,0,0,0,30.622,39.013Z"
                    transform="translate(-11.295 -7.198)"
                    fill="#fff"
                  ></path>
                </g>
              </g>
            </svg>
            <Typography
              variant="h3"
              style={{
                fontSize: "1rem",
                fontWeight: "normal",
                color: "rgb(1 78 120)",
                lineHeight: "1.7778",
                marginTop: "0.5rem",
              }}
            >
              Dermatologist
            </Typography>
          </Box>
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "15%",
            }}
          >
            <svg
              class="py-2 mx-1 shadow"
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 90 90"
            >
              <g
                id="Group_6639"
                data-name="Group 6639"
                transform="translate(-1423 -615)"
              >
                <circle
                  id="Ellipse_276"
                  data-name="Ellipse 276"
                  cx="45"
                  cy="45"
                  r="45"
                  transform="translate(1423 615)"
                  fill="#014e78"
                ></circle>
                <path
                  id="cross51"
                  d="M42.238,36.136H40.265v-1.97a1.837,1.837,0,0,0-1.834-1.836H35.841a1.837,1.837,0,0,0-1.834,1.836v1.97H32.036A1.837,1.837,0,0,0,30.2,37.972V40.56A1.837,1.837,0,0,0,32.036,42.4h1.971v1.97A1.833,1.833,0,0,0,35.841,46.2h2.589a1.835,1.835,0,0,0,1.834-1.832V42.4h1.971a1.839,1.839,0,0,0,1.836-1.836V37.972A1.838,1.838,0,0,0,42.238,36.136Zm.6,4.425a.6.6,0,0,1-.6.6H39.644a.618.618,0,0,0-.616.616V44.37a.6.6,0,0,1-.6.6H35.838a.6.6,0,0,1-.6-.6V41.781a.618.618,0,0,0-.618-.616H32.031a.6.6,0,0,1-.6-.6V37.974a.6.6,0,0,1,.6-.6h2.587a.617.617,0,0,0,.618-.618V34.165a.607.607,0,0,1,.6-.606h2.589a.606.606,0,0,1,.6.606v2.587a.617.617,0,0,0,.616.618h2.591a.6.6,0,0,1,.6.6v2.587Zm4.991-1.294a10.69,10.69,0,0,0-4.755-8.883l0-2.267a4.611,4.611,0,0,0-4.6-4.595h-.007l-5.2.005a7.338,7.338,0,1,0-7.829.009l-5.23.007a4.6,4.6,0,0,0-4.593,4.605V43.663a.618.618,0,0,0,.618.618h5.28V56.872a4.512,4.512,0,0,0,4.4,4.6h6.863a4.51,4.51,0,0,0,4.4-4.6V49.96A10.713,10.713,0,0,0,47.83,39.268ZM23.237,17.336a6.106,6.106,0,1,1,6.1,6.1A6.112,6.112,0,0,1,23.237,17.336Zm9.536,42.9H29.893a.594.594,0,0,0,.065-.263V48.708a.616.616,0,0,0-1.232,0V59.972a.59.59,0,0,0,.067.263H25.912a3.275,3.275,0,0,1-3.171-3.365v-13.2c0-.005,0-.009,0-.014s0-.007,0-.014V33.127a.617.617,0,1,0-1.234,0v9.914H16.846v-14.9a3.365,3.365,0,0,1,3.363-3.37l18.265-.021h0a3.377,3.377,0,0,1,3.368,3.365v1.561a10.683,10.683,0,1,0-5.894,20.2v6.978A3.286,3.286,0,0,1,32.774,60.235Zm4.363-11.511a9.458,9.458,0,1,1,9.458-9.458A9.469,9.469,0,0,1,37.137,48.723Z"
                  transform="translate(1439.517 623.421)"
                  fill="#fff"
                ></path>
              </g>
            </svg>
            <Typography
              variant="h3"
              style={{
                fontSize: "1rem",
                fontWeight: "normal",
                color: "rgb(1 78 120)",
                lineHeight: "1.7778",
                marginTop: "0.5rem",
              }}
            >
              Dermatologist
            </Typography>
          </Box>
        </Box>
        <Box
          justifyContent="center"
          alignItems="center"
          width="100%"
          display="flex"
          marginY="1rem"
        >
          <Button
            variant="contained"
            sx={{ backgroundColor: "danger.main", fontSize: "0.7rem" }}
          >
            View All Specialists
          </Button>
        </Box>
      </Grid>
      <Grid
        xs={12}
        className="Top-Searched-Diseases"
        sx={{ borderRadius: "4px", paddingX: "1rem",  backgroundColor: "#fff", mt: '10px' }}
      >
        <Box sx={{ marginY: "2rem", justifyItems: "center" }}>
          <Typography
            variant="h2"
            style={{
              fontSize: "1.125rem",
              fontWeight: "bold",
              color: "rgb(1 78 120)",
              textAlign: "center",
            }}
          >
            Top Searched Disease
          </Typography>
          <Typography
            variant="h2"
            style={{
              fontSize: "1.125rem",
              color: "rgb(55 63 80)",
              textAlign: "center",
            }}
          >
            150+ Specialists Available
          </Typography>
        </Box>
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              width: "15%",
              alignItems: "center",
            }}
          >
            <svg
              class="py-2"
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 90 90"
            >
              <g
                id="Group_6634"
                data-name="Group 6634"
                transform="translate(-400.87 -615)"
              >
                <path
                  id="Path_5636"
                  data-name="Path 5636"
                  d="M45,0A45,45,0,1,1,0,45,45,45,0,0,1,45,0Z"
                  transform="translate(400.87 615)"
                  fill="#014e78"
                ></path>
                <path
                  id="blond"
                  d="M51.755,23.771c-1.811-5.38-4.349-8.869-7.54-10.368a7.592,7.592,0,0,0-5.036-.584,16.51,16.51,0,0,0-2.221-1.009,14.438,14.438,0,0,0-8.87-.39A18.248,18.248,0,0,0,17.6,19.331C10.181,32.314,11.8,46.945,16.456,55.045c1.5,2.608,3.279,3.956,5.3,4.016l.128,0c3.6,0,6.383-4.221,6.5-4.4a.869.869,0,0,0,.111-.711.884.884,0,0,0-.456-.559,8.486,8.486,0,0,1-2.415-2.129c-.169-.195-.328-.379-.473-.533C23.739,49.2,22.468,45.21,21.8,41.859c7.8-2.951,15.807-14.049,17.918-17.125,7.7,5.839,7.294,13.493,6.051,19.563-1.186,5.81-6.1,10.327-6.152,10.371a.872.872,0,0,0-.287.69.888.888,0,0,0,.343.663,7.449,7.449,0,0,0,5.667,1.765c2.89-.426,4.893-2.782,6.15-4.518C58.455,43.635,53.94,30.247,51.755,23.771ZM50.061,52.236c-1.068,1.476-2.744,3.478-4.978,3.809a5.214,5.214,0,0,1-3.495-.846c1.547-1.615,4.9-5.586,5.909-10.549,1.388-6.786,1.791-15.4-7.5-21.894a.892.892,0,0,0-.672-.144.872.872,0,0,0-.571.384c-.108.169-9.628,14.631-17.96,17.378a1.258,1.258,0,0,0-.162.014.865.865,0,0,0-.342.138,7.221,7.221,0,0,1-3.074.217.881.881,0,0,0-.285,1.74,8.345,8.345,0,0,0,3.168-.118c.7,3.449,2.025,7.7,3.754,9.561.137.145.28.313.437.492a12.6,12.6,0,0,0,2.069,2.01c-.959,1.181-2.719,2.873-4.486,2.873-.026,0-.051,0-.079,0-1.362-.038-2.645-1.092-3.816-3.131-4.409-7.678-5.93-21.581,1.145-33.962a16.609,16.609,0,0,1,9.418-7.085,12.979,12.979,0,0,1,3.4-.463,13.279,13.279,0,0,1,6.68,1.876.871.871,0,0,0,.754.058A5.724,5.724,0,0,1,43.463,15c2.7,1.271,4.99,4.5,6.634,9.382C52.334,31,56.494,43.341,50.061,52.236Z"
                  transform="translate(411.37 625.098)"
                  fill="#fff"
                ></path>
              </g>
            </svg>
            <Typography
              variant="h3"
              style={{
                fontSize: "1rem",
                fontWeight: "normal",
                color: "rgb(1 78 120)",
                lineHeight: "1.7778",
                marginTop: "0.5rem",
              }}
            >
              Dermatologist
            </Typography>
          </Box>
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "15%",
            }}
          >
            <svg
              class="py-2"
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 90 90"
            >
              <g
                id="Group_6635"
                data-name="Group 6635"
                transform="translate(-616 -615)"
              >
                <circle
                  id="Ellipse_276"
                  data-name="Ellipse 276"
                  cx="45"
                  cy="45"
                  r="45"
                  transform="translate(616 615)"
                  fill="#014e78"
                ></circle>
                <g id="stomach" transform="translate(637.907 637.422)">
                  <path
                    id="Path_5618"
                    data-name="Path 5618"
                    d="M29.076,11.417h5.561s-.684,13.542,5.006,9.732c2.6-1.74,7.056-4.832,12.514-.138,4.29,3.689,8.109,9.746,2.224,22.523C51.31,50.2,41.117,60.72,25.6,49.235c-2.361-1.747-8.62-5.978-9.037,7.508H11.139s-.212-15.777,8.9-14.6c4.722.611,15.632,3.494,17.381-7.787.362-2.334,1.38-5.216-4.171-8.481C30.883,24.486,28.935,23.235,29.076,11.417Z"
                    transform="translate(-11.139 -11.417)"
                    fill="none"
                    stroke="#fff"
                    stroke-width="2"
                  ></path>
                </g>
              </g>
            </svg>
            <Typography
              variant="h3"
              style={{
                fontSize: "1rem",
                fontWeight: "normal",
                color: "rgb(1 78 120)",
                lineHeight: "1.7778",
                marginTop: "0.5rem",
              }}
            >
              Dermatologist
            </Typography>
          </Box>
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "15%",
            }}
          >
            <svg
              class="py-2"
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 90 90"
            >
              <g
                id="Group_6636"
                data-name="Group 6636"
                transform="translate(-827 -615)"
              >
                <circle
                  id="Ellipse_276"
                  data-name="Ellipse 276"
                  cx="45"
                  cy="45"
                  r="45"
                  transform="translate(827 615)"
                  fill="#014e78"
                ></circle>
                <path
                  id="internal1"
                  d="M56.7,21.043a11.544,11.544,0,0,0-8.277-3.995c-2.454,0-4.331,1.05-5.147,2.889a12.207,12.207,0,0,0-.607,7.778H39.878V16.82a1.065,1.065,0,1,0-2.13,0V27.715h-.812V16.82a1.065,1.065,0,0,0-2.13,0V32.034H31.827a11.7,11.7,0,0,0-.816-6.609c-.816-1.834-2.691-2.887-5.147-2.887a11.56,11.56,0,0,0-8.277,3.995c-1.845,2.086-3.9,5.795-3.187,11.636C15.836,50,25.807,53.853,29.083,53.853c1.892,0,2.013-1.2,2.02-1.453a5.853,5.853,0,0,0-.556-1.945c-.814-2.133-2.329-6.1-1.165-9.947.264-.873.556-1.73.844-2.578.422-1.24.835-2.5,1.163-3.773h3.417V54.077a1.065,1.065,0,0,0,2.13,0V34.158h.812V54.077a1.065,1.065,0,0,0,2.13,0V29.848h3.34c.262.871.552,1.736.844,2.595s.579,1.706.844,2.576c1.165,3.85-.349,7.817-1.165,9.949a5.893,5.893,0,0,0-.556,1.945c.006.243.132,1.455,2.022,1.455,3.274,0,13.245-3.862,14.683-15.686C60.6,26.837,58.549,23.126,56.7,21.043ZM28.21,37.249c-.3.869-.592,1.749-.865,2.646-1.374,4.54.311,8.954,1.212,11.321.06.158.128.328.187.49-2.8-.275-11.006-3.737-12.229-13.8-.614-5.053,1.112-8.211,2.669-9.966a9.374,9.374,0,0,1,6.681-3.279,3.244,3.244,0,0,1,3.2,1.628C30.689,29.954,29.541,33.335,28.21,37.249Zm9.538-5.215h-.812V29.85h.812Zm20.028.388c-1.223,10.062-9.429,13.524-12.226,13.8.06-.162.128-.332.183-.488.905-2.369,2.588-6.785,1.212-11.323-.271-.9-.571-1.777-.863-2.646-.337-.986-.66-1.939-.931-2.872,0-.036.021-.062.021-.1a1.037,1.037,0,0,0-.2-.588,10.664,10.664,0,0,1,.258-7.393,3.248,3.248,0,0,1,3.2-1.626,9.377,9.377,0,0,1,6.683,3.274C56.661,24.213,58.391,27.368,57.776,32.421Z"
                  transform="translate(834.998 624.667)"
                  fill="#fff"
                ></path>
              </g>
            </svg>
            <Typography
              variant="h3"
              style={{
                fontSize: "1rem",
                fontWeight: "normal",
                color: "rgb(1 78 120)",
                lineHeight: "1.7778",
                marginTop: "0.5rem",
              }}
            >
              Dermatologist
            </Typography>
          </Box>
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "15%",
            }}
          >
            <svg
              class="py-2"
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 90 90"
            >
              <g
                id="Group_6637"
                data-name="Group 6637"
                transform="translate(-1024 -615)"
              >
                <circle
                  id="Ellipse_276"
                  data-name="Ellipse 276"
                  cx="45"
                  cy="45"
                  r="45"
                  transform="translate(1024 615)"
                  fill="#014e78"
                ></circle>
                <g id="baby" transform="translate(1051.156 635.422)">
                  <g
                    id="Group_6441"
                    data-name="Group 6441"
                    transform="translate(11.121 17.648)"
                  >
                    <g id="Group_6438" data-name="Group 6438">
                      <path
                        id="Path_5619"
                        data-name="Path 5619"
                        d="M186.792,181.278a.741.741,0,0,1-.741-.741v-1.186a.741.741,0,1,1,1.482,0v1.186A.741.741,0,0,1,186.792,181.278Z"
                        transform="translate(-186.051 -178.61)"
                        fill="#fff"
                      ></path>
                    </g>
                    <g
                      id="Group_6439"
                      data-name="Group 6439"
                      transform="translate(12.341)"
                    >
                      <path
                        id="Path_5620"
                        data-name="Path 5620"
                        d="M311.689,181.278a.741.741,0,0,1-.741-.741v-1.186a.741.741,0,1,1,1.482,0v1.186A.741.741,0,0,1,311.689,181.278Z"
                        transform="translate(-310.948 -178.61)"
                        fill="#fff"
                      ></path>
                    </g>
                    <g
                      id="Group_6440"
                      data-name="Group 6440"
                      transform="translate(4.544 1.15)"
                    >
                      <path
                        id="Path_5621"
                        data-name="Path 5621"
                        d="M234.4,192.476a2.9,2.9,0,0,1-2.186-1,.741.741,0,1,1,1.117-.974,1.415,1.415,0,0,0,2.136,0,.741.741,0,1,1,1.117.974A2.9,2.9,0,0,1,234.4,192.476Z"
                        transform="translate(-232.035 -190.253)"
                        fill="#fff"
                      ></path>
                    </g>
                  </g>
                  <g id="Group_6442" data-name="Group 6442">
                    <path
                      id="Path_5622"
                      data-name="Path 5622"
                      d="M91.533,0A18.053,18.053,0,0,0,73.5,18.033V32.558a18.023,18.023,0,0,0,29.894,13.571.751.751,0,0,0,.1-.091,17.993,17.993,0,0,0,6.069-13.48V18.033A18.053,18.053,0,0,0,91.533,0Zm16.551,32.558a16.506,16.506,0,0,1-5.144,11.981L98.282,40.58a.741.741,0,1,0-.96,1.129l4.486,3.814A16.542,16.542,0,0,1,74.982,32.558V18.033a16.551,16.551,0,0,1,33.1,0Z"
                      transform="translate(-73.5)"
                      fill="#fff"
                    ></path>
                    <path
                      id="Path_5623"
                      data-name="Path 5623"
                      d="M126,37.436a14.353,14.353,0,0,0-14.249,12.771.741.741,0,1,0,1.473.161,12.853,12.853,0,0,1,17.115-10.7,5.12,5.12,0,0,1,.854,5.292,3.972,3.972,0,0,1-5.173,2.172,3.029,3.029,0,0,1-1.657-3.945,2.272,2.272,0,0,1,2.963-1.244,1.67,1.67,0,0,1,.914,2.177,1.18,1.18,0,0,1-.64.646.741.741,0,1,0,.574,1.367,2.652,2.652,0,0,0,1.438-1.452,3.152,3.152,0,0,0-1.726-4.11,3.755,3.755,0,0,0-4.9,2.055,4.513,4.513,0,0,0,2.468,5.878,5.449,5.449,0,0,0,7.106-2.983,6.6,6.6,0,0,0,.112-4.733,12.852,12.852,0,1,1-14.118,21.461l-1.691-1.438-.013-.01a12.8,12.8,0,0,1-3.625-7.578.741.741,0,1,0-1.473.167,14.3,14.3,0,0,0,4.039,8.432.745.745,0,0,0,.111.118l.041.035q.232.228.475.447a14.4,14.4,0,0,0,1.121.91L129.524,73.52a.741.741,0,0,0,.96-1.129l-7.876-6.7A14.333,14.333,0,1,0,126,37.436Z"
                      transform="translate(-107.968 -33.737)"
                      fill="#fff"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
            <Typography
              variant="h3"
              style={{
                fontSize: "1rem",
                fontWeight: "normal",
                color: "rgb(1 78 120)",
                lineHeight: "1.7778",
                marginTop: "0.5rem",
              }}
            >
              Dermatologist
            </Typography>
          </Box>
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "15%",
            }}
          >
            <svg
              class="py-2"
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 90 90"
            >
              <g
                id="Group_6638"
                data-name="Group 6638"
                transform="translate(-1220 -615)"
              >
                <circle
                  id="Ellipse_276"
                  data-name="Ellipse 276"
                  cx="45"
                  cy="45"
                  r="45"
                  transform="translate(1220 615)"
                  fill="#014e78"
                ></circle>
                <g id="fetus" transform="translate(1243.877 632.422)">
                  <path
                    id="Path_5624"
                    data-name="Path 5624"
                    d="M47.175,11.973c-4.5-1.756-8.242-1.842-11.114-.249-4.459,2.473-5.569,8.4-5.986,10.634-.519,2.78-2.448,7.894-9.548,10.939-2.388,1.022-9.758,5.439-4.354,19.335l.245.616c1.137,2.827,2.308,5.757-1.807,11.332a.972.972,0,0,0,1.562,1.156c4.76-6.449,3.257-10.2,2.046-13.213l-.237-.6c-4.642-11.936.769-15.754,3.311-16.84,7.929-3.4,10.1-9.21,10.691-12.369.633-3.379,1.776-7.49,5.019-9.292,2.341-1.3,5.526-1.177,9.464.361,8.425,3.286,9.94,12.2,4.5,26.5-2.095,5.507-9.1,16.244-16.555,17.32a20.445,20.445,0,0,1-4.2-.045c-3.058-.233-6.225-.472-8.45,1.5-1.506,1.337-2.3,3.468-2.438,6.517a.971.971,0,0,0,.929,1.012h.043a.972.972,0,0,0,.972-.929c.109-2.5.692-4.183,1.784-5.147,1.609-1.43,4.358-1.222,7.014-1.016a22,22,0,0,0,4.628.035c8.736-1.263,16.08-13.271,18.093-18.556C60.127,21.674,53.783,14.551,47.175,11.973Z"
                    transform="translate(-14.235 -10.589)"
                    fill="#fff"
                  ></path>
                  <path
                    id="Path_5625"
                    data-name="Path 5625"
                    d="M22.321,36.438a5.483,5.483,0,0,0-3.558,2.277,8.918,8.918,0,0,0-.82,8.005,9.551,9.551,0,0,0,5.4,5.639,12.119,12.119,0,0,0,3.692.633,7.173,7.173,0,0,0,4.234-1.275c2.742-1.931,3.542-5.51,3.771-7.246l.278,0c8.308,0,10.825-8.05,11.8-11.167,1.7-5.429,1.725-9.6.08-12.414a5.848,5.848,0,0,0-3.379-2.788v0a5.068,5.068,0,0,0-4.71.142l-.12.08a6.192,6.192,0,0,0-.707-2.508,3.058,3.058,0,0,0-1.893-1.5l-.494-.1A3.079,3.079,0,0,0,32.474,16.5l0,.5a5.579,5.579,0,0,1-.87,4.525,9.315,9.315,0,0,0-1.591,8.72c-1.885-.861-3.812-1.238-5.011.033a3.564,3.564,0,0,0-.975,2.794,7.231,7.231,0,0,0,1.449,3.431A7.407,7.407,0,0,0,22.321,36.438Zm8.3,2.574c-1.238-.952-4.488-3.907-4.661-6.093a1.611,1.611,0,0,1,.451-1.306c.453-.476,2.089-.245,5.347,1.842l.332.134a4.849,4.849,0,0,0,3.48,1.131c3.721-.284,6.707-4.838,6.834-5.032a.971.971,0,0,0-1.628-1.057c-.711,1.1-3.062,3.979-5.351,4.152A3.267,3.267,0,0,1,32.7,31.509a7.481,7.481,0,0,1,.455-8.812,7.52,7.52,0,0,0,1.271-5.878,1.1,1.1,0,0,1,1.216-.676l.251.049a1.109,1.109,0,0,1,.7.6,7.542,7.542,0,0,1,.324,4.518,9.144,9.144,0,0,0-.439,2.052.973.973,0,0,0,.8,1.028.955.955,0,0,0,1.1-.7,19.434,19.434,0,0,0,.427-1.92,3.641,3.641,0,0,1,1.333-1.879,3.417,3.417,0,0,1,3.107.07,3.983,3.983,0,0,1,2.3,1.97c.909,1.6,1.6,4.764-.288,10.8-1.521,4.869-4.154,10.356-11.015,9.756a1.016,1.016,0,0,0-.729.239.99.99,0,0,0-.33.694c0,.045-.2,4.725-3.047,6.721-1.529,1.078-3.616,1.2-6.208.371a7.73,7.73,0,0,1-4.172-4.471,7.028,7.028,0,0,1,.663-6.315,3.622,3.622,0,0,1,2.285-1.381,4.978,4.978,0,0,1,.96-.1,10.447,10.447,0,0,1,5.792,2.326.971.971,0,0,0,1.347-.208A.986.986,0,0,0,30.622,39.013Z"
                    transform="translate(-11.295 -7.198)"
                    fill="#fff"
                  ></path>
                </g>
              </g>
            </svg>
            <Typography
              variant="h3"
              style={{
                fontSize: "1rem",
                fontWeight: "normal",
                color: "rgb(1 78 120)",
                lineHeight: "1.7778",
                marginTop: "0.5rem",
              }}
            >
              Dermatologist
            </Typography>
          </Box>
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "15%",
            }}
          >
            <svg
              class="py-2 mx-1 shadow"
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 90 90"
            >
              <g
                id="Group_6639"
                data-name="Group 6639"
                transform="translate(-1423 -615)"
              >
                <circle
                  id="Ellipse_276"
                  data-name="Ellipse 276"
                  cx="45"
                  cy="45"
                  r="45"
                  transform="translate(1423 615)"
                  fill="#014e78"
                ></circle>
                <path
                  id="cross51"
                  d="M42.238,36.136H40.265v-1.97a1.837,1.837,0,0,0-1.834-1.836H35.841a1.837,1.837,0,0,0-1.834,1.836v1.97H32.036A1.837,1.837,0,0,0,30.2,37.972V40.56A1.837,1.837,0,0,0,32.036,42.4h1.971v1.97A1.833,1.833,0,0,0,35.841,46.2h2.589a1.835,1.835,0,0,0,1.834-1.832V42.4h1.971a1.839,1.839,0,0,0,1.836-1.836V37.972A1.838,1.838,0,0,0,42.238,36.136Zm.6,4.425a.6.6,0,0,1-.6.6H39.644a.618.618,0,0,0-.616.616V44.37a.6.6,0,0,1-.6.6H35.838a.6.6,0,0,1-.6-.6V41.781a.618.618,0,0,0-.618-.616H32.031a.6.6,0,0,1-.6-.6V37.974a.6.6,0,0,1,.6-.6h2.587a.617.617,0,0,0,.618-.618V34.165a.607.607,0,0,1,.6-.606h2.589a.606.606,0,0,1,.6.606v2.587a.617.617,0,0,0,.616.618h2.591a.6.6,0,0,1,.6.6v2.587Zm4.991-1.294a10.69,10.69,0,0,0-4.755-8.883l0-2.267a4.611,4.611,0,0,0-4.6-4.595h-.007l-5.2.005a7.338,7.338,0,1,0-7.829.009l-5.23.007a4.6,4.6,0,0,0-4.593,4.605V43.663a.618.618,0,0,0,.618.618h5.28V56.872a4.512,4.512,0,0,0,4.4,4.6h6.863a4.51,4.51,0,0,0,4.4-4.6V49.96A10.713,10.713,0,0,0,47.83,39.268ZM23.237,17.336a6.106,6.106,0,1,1,6.1,6.1A6.112,6.112,0,0,1,23.237,17.336Zm9.536,42.9H29.893a.594.594,0,0,0,.065-.263V48.708a.616.616,0,0,0-1.232,0V59.972a.59.59,0,0,0,.067.263H25.912a3.275,3.275,0,0,1-3.171-3.365v-13.2c0-.005,0-.009,0-.014s0-.007,0-.014V33.127a.617.617,0,1,0-1.234,0v9.914H16.846v-14.9a3.365,3.365,0,0,1,3.363-3.37l18.265-.021h0a3.377,3.377,0,0,1,3.368,3.365v1.561a10.683,10.683,0,1,0-5.894,20.2v6.978A3.286,3.286,0,0,1,32.774,60.235Zm4.363-11.511a9.458,9.458,0,1,1,9.458-9.458A9.469,9.469,0,0,1,37.137,48.723Z"
                  transform="translate(1439.517 623.421)"
                  fill="#fff"
                ></path>
              </g>
            </svg>
            <Typography
              variant="h3"
              style={{
                fontSize: "1rem",
                fontWeight: "normal",
                color: "rgb(1 78 120)",
                lineHeight: "1.7778",
                marginTop: "0.5rem",
              }}
            >
              Dermatologist
            </Typography>
          </Box>
        </Box>
        <Box
          justifyContent="center"
          alignItems="center"
          width="100%"
          display="flex"
          marginY="0.5rem"
        >
          <Button variant="contained">View All Diseases</Button>
        </Box>
      </Grid>
      <Grid
        item
        container
        justifyContent="center"
        xs={12}
        className="avail-discount"
        sx={{ marginTop: "0.5rem", paddingBottom: "1.5rem", backgroundColor: "#fff" }}
      >
        <Grid
          item
          justifyContent="center"
          alignItems="center"
          xs={12}
          display="flex"
        >
          <Typography
            variant="h3"
            style={{
              fontSize: "1.125rem",
              fontWeight: "bold",
              color: "rgb(1 78 120)",
              lineHeight: "1.7778",
              paddingTop: "0.5rem",
            }}
          >
            Upto 20% OFF on Lab Tests
          </Typography>
        </Grid>
        <Grid item xs={5}>
          <Box
            display="flex"
            sx={{ padding: "1rem", boxShadow: "0px 3px 6px rgba(0 0 0 0.1)" }}
          >
            <Grid item xs={4}>
              <img
                class=""
                style={{ borderRadius: "5px" }}
                data-src="https://static.marham.pk/assets/images/home-new/labs.png"
                width="136"
                height="119"
                alt="Booking Lab Tests"
                src="https://static.marham.pk/assets/images/home-new/labs.png"
              ></img>
            </Grid>
            <Grid item xs={8}>
              <Typography
                sx={{
                  fontWeight: "bold",
                  textAlign: "center",
                  color: "rgb(32 33 36)",
                }}
              >
                Avail Discounts
              </Typography>
              <Typography sx={{ textAlign: "center", marginBottom: "1rem" }}>
                On Booking Lab Tests
              </Typography>
              <Typography sx={{ textAlign: "center" }}>
                Trusted Labs | Home Sampling
              </Typography>
              <Box justifyContent="center" width="100%" display="flex">
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "#c02942", paddingX: "5rem" }}
                >
                  Book Lab Tests
                </Button>
              </Box>
            </Grid>
          </Box>
        </Grid>
      </Grid>
      <Grid sx={{ padding: "1rem", backgroundColor: "#fff", mt: '10px' }}>
        <Grid
          item
          justifyContent="center"
          alignItems="center"
          xs={12}
          display="flex"
        >
          <Typography
            variant="h3"
            style={{
              fontSize: "1.125rem",
              fontWeight: "bold",
              color: "rgb(1 78 120)",
              lineHeight: "1.7778",
              paddingTop: "0.5rem",
            }}
          >
            Here's What our Users Say About Us
          </Typography>
        </Grid>
        <Grid item container direction="row" justifyContent="space-between">
          <Card sx={{ width: "30%" }}>
            <CardHeader
              avatar={
                <Avatar
                  sx={{ bgcolor: "#EBFAFF", color: "#202124" }}
                  aria-label="recipe"
                >
                  R
                </Avatar>
              }
              title="Shrimp and Chorizo Paella"
              subheader="September 14, 2016"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ width: "30%" }}>
            <CardHeader
              avatar={
                <Avatar
                  sx={{ bgcolor: "#EBFAFF", color: "#202124" }}
                  aria-label="recipe"
                >
                  R
                </Avatar>
              }
              title="Shrimp and Chorizo Paella"
              subheader="September 14, 2016"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ width: "30%" }}>
            <CardHeader
              avatar={
                <Avatar
                  sx={{ bgcolor: "#EBFAFF", color: "#202124" }}
                  aria-label="recipe"
                >
                  R
                </Avatar>
              }
              title="Shrimp and Chorizo Paella"
              subheader="September 14, 2016"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid
        item
        className="DownLoadApp"
        sx={{ marginBottom: "0.5rem", marginTop: "0.5rem" }}
      >
        <Box
          sx={{
            maxWidth: "100%",
            minHeight: "300px",
            backgroundImage:
              'url("https://static.marham.pk/assets/images/home-new/background-2.png")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            paddingBottom: "1rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingX: "15px",
          }}
        >
          <Button
            variant="contained"
            sx={{
              display: "inline-block",
              width: "max-content",
              backgroundColor: "#c02942",
              boxShadow:
                "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)",
              borderRadius: "8px",
            }}
          >
            Download App
          </Button>
        </Box>
      </Grid>
      <Grid sx ={{backgroundColor: "#fff"}}>
        <Grid
          item
          justifyContent="center"
          alignItems="center"
          xs={12}
          display="flex"
        >
          <Typography
            variant="h3"
            style={{
              fontSize: "1.125rem",
              fontWeight: "bold",
              color: "rgb(1 78 120)",
              lineHeight: "1.7778",
              paddingTop: "0.5rem",
            }}
          >
            Find Doctor By City
          </Typography>
        </Grid>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            paddingX: "2rem",
            justifyContent: "center",
            marginY: "1rem",
          }}
        >
          <HomeDropDown underline={false} />
          <HomeDropDown underline={false} />
          <HomeDropDown underline={false} />
          <HomeDropDown underline={false} />
          <HomeDropDown underline={false} />
          <HomeDropDown underline={false} />
          <HomeDropDown underline={false} />
          <HomeDropDown underline={false} />
          <HomeDropDown underline={false} />
          <HomeDropDown underline={false} />
        </Box>
      </Grid>
      <Grid sx ={{backgroundColor: "#fff", my: '5px'}}>
        <Grid
          item
          justifyContent="center"
          alignItems="center"
          xs={12}
          display="flex"
        >
          <Typography
            variant="h3"
            style={{
              fontSize: "1.125rem",
              fontWeight: "bold",
              color: "rgb(1 78 120)",
              lineHeight: "1.7778",
              paddingTop: "0.5rem",
            }}
          >
            Common Services, Diseases, Surgeries & Hospitals
          </Typography>
        </Grid>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            paddingX: "2rem",
            justifyContent: "space-evenly",
            marginY: "1rem",
          }}
        >
          <HomeDropDown underline={false} label="services" />
          <HomeDropDown underline={false} label="diseases" />
          <HomeDropDown underline={false} label="surgeries" />
          <HomeDropDown underline={false} label="hospitals" />
        </Box>
      </Grid>
    </Grid>
  );
}

export default Home;
