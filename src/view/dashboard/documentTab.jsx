import React, { useState } from "react";
import { Tabs, Tab, Box, Typography, List, ListItem, ListItemText, Paper } from "@mui/material";

import { makeStyles } from "@mui/styles";

const billsData = Array.from({ length: 8 }, (_, index) => ({
    id: index + 1,
    name: `Bill ${index + 1}`,
    date: "Nov 1, 2019",
    amount: "£50.59",
}));

const useStyles = makeStyles((theme) => ({
    tabBox: {
        [theme.breakpoints.down("lg")]: {
            width: "100%",
        },
    },
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
        "& .Mui-selected": { color: "#000 !important", border: "1px solid #ECECF2", borderRadius: "8px" },
    
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

const DocumentTabs = () => {
    const [selectedTab, setSelectedTab] = useState(1);
    const classes = useStyles();
    return (
        <Box sx={{ margin: "auto", minWidth: 375, backgroundColor: "#fff", borderRadius: 5, p: 1 }} className={classes.tabBox}>
            <Tabs
                value={selectedTab}
                onChange={(e, newValue) => setSelectedTab(newValue)}
                variant="fullWidth"
                className={classes.tabRoot}
            >
                <Tab label="All Document" />
                <Tab label="Bills" />
                <Tab label="Receipts" />
            </Tabs>
            <Paper elevation={0} sx={{ mt: 1, py: 1, border: '1px solid #EEEEEE' }}>
                <List>
                    {billsData.map((bill, index) => (
                        <ListItem key={bill.id} divider={index === billsData?.length - 1 ? false : true}>
                            <ListItemText
                                primary={<Typography sx={{ color: "#6A0DAD", fontWeight: "bold" }}>{bill.name}</Typography>}
                                secondary={
                                    <>
                                        <Typography variant="body2" sx={{ color: "#666" }}>
                                            Date: {bill.date}
                                        </Typography>
                                        <Typography variant="body2" sx={{ fontWeight: "bold", color: "#444" }}>
                                            {bill.amount}
                                        </Typography>
                                    </>
                                }
                            />
                        </ListItem>
                    ))}
                </List>
            </Paper>
        </Box>
    );
};

export default DocumentTabs;
