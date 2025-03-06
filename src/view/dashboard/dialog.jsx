import React, { useState } from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    TextField,
    Button,
    MenuItem,
    Typography,
    IconButton,
    Box,
    Tabs,
    Tab,
} from "@mui/material";
import { CloudUpload, Close, ContentCopy } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        margin: "auto",
        backgroundColor: "#fff",
        borderRadius: 8,
        //   boxShadow: theme.shadows[3],
        [theme.breakpoints.down("xs")]: {
            width: "95%",
            padding: 5,
        },
        [theme.breakpoints.up("sm")]: {
            width: 350,
            padding: 10,
        },
        [theme.breakpoints.up("md")]: {
            width: 400,
            padding: 15,
        },
        [theme.breakpoints.up("lg")]: {
            width: 450,
            padding: 20,
        },
    },
    tabRoot: {
        "& .MuiTabs-indicator": { display: "none" },
        "& .MuiTab-root": {
            textTransform: "none",
            fontWeight: "bold",
            color: "#8181A5",
        },
        "& .Mui-selected": { color: "#603AE5 !important", border: "1px solid #ECECF2", borderRadius: "8px" },
    },
    listItem: {
        [theme.breakpoints.down("xs")]: { padding: "5px" },
        [theme.breakpoints.up("sm")]: { padding: "10px" },
        [theme.breakpoints.up("md")]: { padding: "15px" },
    },
    billName: {
        color: "#6A0DAD",
        fontWeight: "bold",
    },
    billText: {
        color: "#666",
        fontSize: "0.85rem",
    },
    amountText: {
        fontWeight: "bold",
        color: "#444",
        fontSize: "0.9rem",
    },
}));


const ExpenseDialog = () => {
    const [open, setOpen] = useState(false);
    const [tabIndex, setTabIndex] = useState(1);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleTabChange = (event, newIndex) => setTabIndex(newIndex);
    const classes = useStyles();
    return (
        <>
            <Button variant="contained" onClick={handleOpen} sx={{
                backgroundColor: "#603AE5",
                color: "#fff",
                fontWeight: "500",
                fontSize: "14px",
                marginY: "20px",
                textTransform: "capitalize"
            }}>
                Add To Expenses Report
            </Button>

            {/* <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
                <DialogTitle sx={{ display: "flex", justifyContent: "space-between" }}>
                    EasyUpload
                    <IconButton onClick={handleClose}>
                        <Close />
                    </IconButton>
                </DialogTitle>
                <DialogContent>
                    <Box display="flex" justifyContent="space-between" my={2}>
                        <Typography fontWeight="bold">Document Owner</Typography>
                        <Typography fontWeight="bold">Accountant 01</Typography>
                    </Box>
                    <TextField
                        select
                        fullWidth
                        label="Client"
                        variant="outlined"
                        margin="normal"
                    >
                        <MenuItem value="">Select Client</MenuItem>
                    </TextField>

                    <Box
                        sx={{
                            border: "2px dashed #ccc",
                            padding: 4,
                            textAlign: "center",
                            borderRadius: 2,
                            my: 2,
                        }}
                    >
                        <CloudUpload fontSize="large" color="primary" />
                        <Typography color="primary">Drag & Drop or Choose file to upload</Typography>
                        <Typography variant="caption">JPG, PNG, PDF, CVS</Typography>
                    </Box>

                    <Button variant="contained" color="primary" fullWidth>
                        Add Receipt
                    </Button>

                    <Box mt={3}>
                        <Typography variant="body2">Send Over Email</Typography>
                        <Box display="flex" alignItems="center" mt={1}>
                            <Typography variant="body2" color="primary">
                                Single : abc.single@gmail.com
                            </Typography>
                            <IconButton>
                                <ContentCopy fontSize="small" />
                            </IconButton>
                        </Box>
                        <Box display="flex" alignItems="center" mt={1}>
                            <Typography variant="body2" color="primary">
                                Multiple : abc.multiple@gmail.com
                            </Typography>
                            <IconButton>
                                <ContentCopy fontSize="small" />
                            </IconButton>
                        </Box>
                    </Box>
                </DialogContent>
            </Dialog> */}
            <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
                <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                    <DialogTitle>
                        EasyUpload
                    </DialogTitle>
                    <Tabs value={tabIndex} onChange={handleTabChange} centered className={classes.tabRoot} fullWidth>
                        <Tab label="Bills" />
                        <Tab label="Receipts" />
                        <Tab label="Bank" />
                    </Tabs>
                    <DialogTitle>
                        <IconButton onClick={handleClose}>
                            <Close />
                        </IconButton>
                    </DialogTitle>

                </Box>
                <DialogContent>



                    <Box display={'flex'} gap={2}>
                        <Box display="flex" flexDirection={'column'} flex={1}>
                            <Typography color="#8181A5">Document Owner</Typography>
                            <TextField
                                fullWidth
                                placeholder="Write document owner name.."
                                variant="standard"
                                margin="normal"
                            />
                        </Box>
                        <Box flex={1}>
                            <Typography color="#8181A5">Client</Typography>
                            <TextField
                                select
                                fullWidth
                                placeholder="Client"
                                variant="standard"
                                margin="normal"
                            >
                                <MenuItem value="Client">Client 1</MenuItem>
                            </TextField>
                        </Box>
                    </Box>

                    <Box
                        sx={{
                            border: "2px dashed #ccc",
                            padding: 4,
                            textAlign: "center",
                            borderRadius: 2,
                            my: 2,
                        }}
                    >
                        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} gap={2}>
                            <Box sx={{
                                background: "#f5f5fa",
                                padding: "20px 25px",
                                borderRadius: "12px"
                            }}>
                                <CloudUpload fontSize="large" sx={{
                                    color: "#603AE5"
                                }} />
                            </Box>
                            <Box>
                                <Typography sx={(theme) => ({
                                    color: "#603AE5",
                                    fontWeight: '700',
                                    [theme.breakpoints.down("sm")]: {
                                        fontSize: "14px"
                                    },
                                })}>Drag & Drop or Choose file to upload</Typography>
                                <Typography variant="caption" sx={(theme) => ({
                                    color: "#603AE5",
                                    fontWeight: '400',
                                    [theme.breakpoints.down("sm")]: {
                                        fontSize: "12px",

                                    },
                                })}>JPG, PNG, PDF, CVS</Typography>
                            </Box>
                        </Box>
                    </Box>

                    <Box display={'flex'} justifyContent={'center'} fullWidth>
                        <Button variant="contained" color="primary" sx={{
                            bgcolor: "#603AE5",
                            textTransform: 'capitalize'
                        }}>
                            Add Receipt
                        </Button>
                    </Box>

                    <Box mt={3}>
                        <Typography variant="body2" color="#8181A5">Send Over Email</Typography>
                        <Box display="flex" alignItems="center" mt={1}>
                            <Typography variant="body2" sx={{
                                fontSize: "13.96px",
                                fontWeight: '700'
                            }}>
                                <Typography variant="span" color="#000" >Single</Typography> : <Typography variant="span" color="#603AE5">abc.single@gmail.com</Typography>
                            </Typography>
                            <IconButton>
                                <ContentCopy fontSize="small" />
                            </IconButton>
                        </Box>
                        <Box display="flex" alignItems="center" mt={1}>
                            <Typography variant="body2" sx={{
                                fontSize: "13.96px",
                                fontWeight: '700'
                            }}>
                                <Typography variant="span" color="#000">Multiple</Typography> : <Typography variant="span" color="#603AE5">abc.multiple@gmail.com</Typography>
                            </Typography>
                            <IconButton>
                                <ContentCopy fontSize="small" />
                            </IconButton>
                        </Box>
                    </Box>


                </DialogContent>
            </Dialog>
        </>
    );
};

export default ExpenseDialog;
