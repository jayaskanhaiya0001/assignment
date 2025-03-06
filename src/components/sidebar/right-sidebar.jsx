import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  Radio,
  RadioGroup,
  TextField,
  Typography,
  Select,
  MenuItem,
  Divider,
  Tab, Tabs,
  FormControl,
} from "@mui/material";
import { ArrowBack, ArrowForward, ExpandMore, ArrowBackIos, ArrowForwardIos, } from "@mui/icons-material";
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const RightSidebar = () => {
  const [tabValue, setTabValue] = useState(0);
  const [step, setStep] = useState(0);
  const [paidStatus, setPaidStatus] = useState("paid");
  const [lineItem, setLineItem] = useState("single");
  const sliderRef = useRef(null);
  // const steps = [
  //   {
  //     title: "Payment Details",
  //     content: (
  //       <>

  //       </>
  //     ),
  //   },
  //   {
  //     title: "Additional Details",
  //     content: (
  //       <>

  //         <Typography>Currency</Typography>
  //         <Select fullWidth displayEmpty>
  //           <MenuItem value="">Select Currency</MenuItem>
  //           <MenuItem value="usd">USD</MenuItem>
  //           <MenuItem value="gbp">GBP</MenuItem>
  //         </Select>
  //       </>
  //     ),
  //   },
  //   {
  //     title: "Description",
  //     content: (
  //       <>
  //         <RadioGroup row value={lineItem} onChange={(e) => setLineItem(e.target.value)}>
  //           <FormControlLabel value="single" control={<Radio />} label="Single" />
  //           <FormControlLabel value="multiple" control={<Radio />} label="Multiple" />
  //         </RadioGroup>
  //         <Typography>Description</Typography>
  //         <TextField fullWidth placeholder="Enter Description" variant="standard" />
  //       </>
  //     ),
  //   },
  // ];


  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Custom arrows below
    appendDots: (dots) => <div className="custom-dots">{dots}</div>,
  };
  return (
    <Box
      width={450}
      boxSizing={'border-box'}
      p={2}
      bgcolor="white"
      boxShadow={3}
      display="flex"
      flexDirection="column"
      gap={2}
    // height={'100vh'}
    // overflow={'hidden'}
    >
      {/* Quickbook Section */}
      <Box border={'1px solid #ECECF2'} py={2} px={2} display={'flex'} flexDirection={'column'} gap={2}>
        <Box display={'flex'} justifyContent={'space-between'}>
          <Box display="flex" gap={2}>
            <Box width={40} height={40}>
              <img src="/quickbooks-1.png" alt="Quickbook" />
            </Box>
            <Box textAlign={'left'}>
              <Typography fontWeight="bold">Quickbook</Typography>
              <Typography variant="caption" display={'block'}>16 June, 2024 - 8:15 PM</Typography>
            </Box>
          </Box>
          <Box>
            <Typography variant="caption" display={'block'} color="#8181A5">Publishing...</Typography>
            <Typography variant="caption" display={'block'} color="#8181A5">Jimmy Janson</Typography>
          </Box>
        </Box>
        <Box display={'flex'} justifyContent={'space-between'}>
          <FormControlLabel control={<Checkbox  sx={{

            "&.Mui-checked": {
              color: "#603AE5", // Checked color
            },
          }} />} label="Auto-sync" />
          <FormControlLabel control={<Checkbox  sx={{

            "&.Mui-checked": {
              color: "#603AE5", // Checked color
            },
          }} />} label="Save Config" />
        </Box>
      </Box>

      {/* Comment Section */}

      <Box>
        <Tabs
          value={tabValue}
          onChange={(_, newValue) => setTabValue(newValue)}
          textColor="primary"
          indicatorColor="primary"
          fullWidth
          sx={{
            "& .MuiTabs-indicator": { display: "none !important" },
            "& .MuiTab-root": {
              textTransform: "none",
              fontWeight: "bold",
              color: "#8181A5",
            },
            "& .Mui-selected": {
              fontWeight: "bold",
              color: "#000 !important",
              border: "1px solid #ECECF2",
              borderRadius: "8px"
            },
          }}
        >
          <Tab label="Comment" sx={{ fontWeight: tabValue === 0 ? "bold" : "normal", width: "50%" }} />
          <Tab label="Query" sx={{ fontWeight: tabValue === 1 ? "bold" : "normal", width: "50%" }} />
        </Tabs>
        <Box mt={4}>
          <Typography fontWeight="bold" textAlign={'left'}>Type Comment</Typography>
          <TextField fullWidth placeholder="Start typing..." variant="standard" sx={{
            pt: 1
          }} size="small" multiline
            minRows={4} />
          <Box my={4}>
            <Button fullWidth variant="contained" sx={{ mb: 3, bgcolor: "#F6F6F6", color: "#8181A5", height: "46.21px", borderRadius: "8px" }}>
              Add Comment
            </Button>
            <Button fullWidth variant="contained" sx={{ bgcolor: "#603AE5", color: "#FFFFFF", height: "46.21px", borderRadius: "8px" }}>
              View Line Items
            </Button>
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
        <Button onClick={() => sliderRef.current.slickPrev()} sx={{
          bgcolor: "#E7E7EE",
          minWidth: "max-content", borderRadius: "4px"
        }}>
          <ArrowBackIosNewIcon sx={{
            color: "#25314C",
            height: '16px',
            width: '16px'
          }} />
        </Button>
        <Typography variant="h6">Payment Details</Typography>
        <Button onClick={() => sliderRef.current.slickNext()} sx={{
          bgcolor: "#E7E7EE",
          minWidth: "max-content", borderRadius: "4px"
        }}>
          <ArrowForwardIosIcon sx={{
            color: "#25314C",
            height: '16px',
            width: '16px'
          }} />
        </Button>
      </Box>
      <Divider />
      <Slider ref={sliderRef} {...settings}>
        {
          Array.from({ length: 3 })?.map((data) => <div>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography component="span">Payment Details</Typography>
              </AccordionSummary>
              <Box px={2}>
                <Box mb={2}>
                  <RadioGroup row value={paidStatus} onChange={(e) => setPaidStatus(e.target.value)}>
                    <FormControlLabel value="paid" control={<Radio />} label="Paid" />
                    <FormControlLabel value="unpaid" control={<Radio />} label="Unpaid" />
                  </RadioGroup>
                </Box>
                <Box mb={2}>
                  <Typography textAlign={'left'} mb={1}>Bill Number</Typography>
                  <TextField fullWidth placeholder="Start Typing" variant="standard" />
                </Box>
                <Box mb={2}>
                  <Typography textAlign={'left'} mb={1}>Bill Date</Typography>
                  <TextField fullWidth placeholder="Start Typing" variant="standard" />
                </Box>
                <Box mb={2}>
                  <Typography textAlign={'left'} mb={1}>Paid Amount</Typography>
                  <TextField fullWidth placeholder="£ 1900.00" variant="standard" />
                </Box>
                <Box mb={2}>
                  <Typography textAlign={'left'} mb={1}>Paid Date</Typography>
                  <TextField fullWidth placeholder="£ 1900.00" variant="standard" />
                </Box>
                <Box mb={2}>
                  <Typography textAlign={'left'} mb={1}>Due Date</Typography>
                  <TextField fullWidth placeholder="£ 1900.00" variant="standard" />
                </Box>
                <Box mb={2}>
                  <FormControl variant="standard" fullWidth>
                    <Typography textAlign={'left'} mb={1}>Payment Mode</Typography>
                    <Select fullWidth displayEmpty
                      value=""
                      renderValue={(selected) => (selected ? selected : <span style={{ color: "#aaa" }}>Select a payment method</span>)} sx={{ textAlign: "left" }}>
                      <MenuItem value="credit">Credit Card</MenuItem>
                      <MenuItem value="debit">Debit Card</MenuItem>
                    </Select>
                  </FormControl>

                </Box>
                <Box mb={2}>
                  <FormControl variant="standard" fullWidth>
                    <Typography textAlign={'left'} mb={1}>Select Currency</Typography>
                    <Select fullWidth displayEmpty
                      value=""
                      renderValue={(selected) => (selected ? selected : <span style={{ color: "#aaa" }}>Select a payment method</span>)} sx={{ textAlign: "left" }}>
                      <MenuItem value="USD">US Dollar</MenuItem>
                      <MenuItem value="EUR">Euro</MenuItem>
                      <MenuItem value="INR">Indian Rupee</MenuItem>
                    </Select>
                  </FormControl>

                </Box>

                <Box mb={2}>
                  <Typography textAlign={'left'} mb={1}>Bank Transaction Ref</Typography>
                  <TextField fullWidth placeholder="Start Typing" variant="standard" />
                </Box>
                <Box mb={2}>
                  <Typography textAlign={'left'} mb={1}>Total Amount</Typography>
                  <TextField fullWidth placeholder="Start Typing" variant="standard" />
                </Box>
                <Box mb={2}>
                  <Typography textAlign={'left'} mb={1}>Tax Amount</Typography>
                  <TextField fullWidth placeholder="Start Typing" variant="standard" />
                </Box>

                <Box mb={2}>
                  <Typography textAlign={'left'} mb={1}>Total Amount (GBP)</Typography>
                  <TextField fullWidth placeholder="Start Typing" variant="standard" />
                </Box>
                <Box mb={2}>
                  <Typography textAlign={'left'} mb={1}>Tax Amount (GBP)</Typography>
                  <TextField fullWidth placeholder="Start Typing" variant="standard" />
                </Box>
                <Box mb={2}>
                  <Typography textAlign={'left'} mb={1}>FX Rate</Typography>
                  <TextField fullWidth placeholder="Start Typing" variant="standard" />
                </Box>
              </Box>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography component="span">Descriptions</Typography>
              </AccordionSummary>
              <Box px={2}>
                <Box mb={2}>
                  <RadioGroup row value={paidStatus} onChange={(e) => setPaidStatus(e.target.value)}>
                    <FormControlLabel value="Single" control={<Radio />} label="Single" />
                    <FormControlLabel value="Multiple" control={<Radio />} label="Multiple" />
                  </RadioGroup>
                </Box>
                <Box mb={2}>
                  <Typography textAlign={'left'} mb={1}>Description</Typography>
                  <TextField fullWidth placeholder="Enter Description" variant="standard" multiline
                    minRows={4} />
                </Box>
              </Box>
            </Accordion>
          </div>)
        }

      </Slider>

      {/* Navigation and Actions */}

      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: 3 }}>
        <Button onClick={() => sliderRef.current.slickPrev()} sx={{
          bgcolor: "#E7E7EE",
          minWidth: "max-content", borderRadius: "4px"
        }}>
          <ArrowBackIosNewIcon sx={{
            color: "#25314C",
            height: '16px',
            width: '16px'
          }} />
        </Button>
        <Box sx={{ flexGrow: 1, textAlign: "center" }}>{settings.appendDots?.([])}</Box>
        <Button onClick={() => sliderRef.current.slickNext()} sx={{
          bgcolor: "#E7E7EE",
          minWidth: "max-content", borderRadius: "4px"
        }}>
          <ArrowForwardIosIcon sx={{
            color: "#25314C",
            height: '16px',
            width: '16px'
          }} />
        </Button>
      </Box>

      <Button fullWidth variant="contained" sx={{ bgcolor: "#603AE51A", color: "#603AE5", height: "46.21px", borderRadius: "8px" }}>
        Save
      </Button>
      <Button fullWidth variant="contained" sx={{ bgcolor: "#603AE5", color: "#FFFFFF", height: "46.21px", borderRadius: "8px" }} endIcon={<ExpandMore />}>
        Publish
      </Button>
    </Box>
  );
};

export default RightSidebar;
