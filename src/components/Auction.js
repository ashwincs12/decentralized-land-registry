import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { NavLink, useParams } from "react-router-dom";
import { Table, Divider } from "antd";


const columns = [
  {
    title: "Bidder",
    dataIndex: "bidder",
    key: "bidder",
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
  },
];

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Auction() {
  const { landId } = useParams();
  const [isOwner, setIsOwner] = useState(false);
  const [landData, setLandData] = useState({
    surveyNo: "",
    district: "",
    taluk: "",
    village: "",
    blockNo: "",
    area: "",
    landValue: "",
  });
  const [landDocs, setLandDocs] = useState("");
  const [landPrice, setLandPrice] = useState("");
  const [eventDetails, setEventDetails] = useState([]);

  useEffect(() => {
    getLandDetails();
    getEventDetails();
  }, []);

  const getLandDetails = async () => {
    try {
      // Simulated data fetching; replace with actual fetch logic
      let land = {
        surveyNo: "[ Survey No ]",
        district: "[ District Name ]",
        taluk: "[ Taluk Name ]",
        village: "[ Village Name ]",
        blockNo: "[ Block Number ]",
        area: "[ Area in ares ]",
        landValue: "[ Price in wei ]",
      };
      setIsOwner(true);
      setLandDocs("[ Link to Land Documents ]");
      setLandData(land);
    } catch (error) {
      console.error("Error fetching land details:", error);
    }
  };

  const getEventDetails = async () => {
    try {
      // Simulated data fetching; replace with actual fetch logic
      let newEvent = {
        key: 1,
        bidder: "[ Bidder Identity ]",
        amount: "[ Bid Amount ]",
      };
      setEventDetails([newEvent]);
    } catch (error) {
      console.error("Error fetching event details:", error);
    }
  };

  const priceChangeHandler = (event) => {
    setLandPrice(event.target.value);
  };

  const bidSubmitHandler = async (event) => {
    // Implement bid submission logic
  };

  const acceptBidSubmitHandler = async (event) => {
    // Implement accept bid logic
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Tooltip title="Back to Marketplace">
              <IconButton size="large" color="inherit" component={NavLink} to="/">
                <ArrowBackIcon />
              </IconButton>
            </Tooltip>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              LAND MARKETPLACE
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Box
        sx={{
          paddingLeft: 15,
          paddingTop: 2,
          paddingBottom: 2,
          flexGrow: 1,
          maxWidth: "90%",
        }}
      >
        {landData && (
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <img src={process.env.PUBLIC_URL + "/landSale.png"} alt="A" />
            </Grid>
            <Grid item xs={6}>
              <Item>
                <Typography align="left">
                  <b>Land ID: </b>
                  {landId}
                </Typography>
              </Item>
              <br />
              <Item>
                <Typography align="left">
                  <b>Survey No: </b>
                  {landId}
                </Typography>
              </Item>
              <br />
              
              {/* Render other land details here */}
            </Grid>
            {isOwner ? (
              <Grid item xs={12}>
                <Button
                  fullWidth
                  variant="contained"
                  onClick={acceptBidSubmitHandler}
                  sx={{ height: 40 }}
                  color="primary"
                >
                  Accept Bid
                </Button>
              </Grid>
            ) : (
              <>
                <Grid item xs={6}>
                  <TextField
                    required
                    label="Bid Value"
                    helperText="Provide your bid value (should be greater than last bid)"
                    variant="outlined"
                    onChange={priceChangeHandler}
                    sx={{ width: "100%" }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Button
                    fullWidth
                    sx={{ height: 55 }}
                    onClick={bidSubmitHandler}
                    variant="contained"
                    color="primary"
                  >
                    Place Bid
                  </Button>
                </Grid>
              </>
            )}
          </Grid>
        )}
        <Divider />
        <Table columns={columns} dataSource={eventDetails} />
      </Box>
    </div>
  );
}
