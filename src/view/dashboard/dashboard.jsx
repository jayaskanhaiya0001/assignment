import { Box, Button } from "@mui/material"
import DocumentTabs from "./documentTab"
import InvoicePDF from "../../components/pdf/pdf"
import { makeStyles } from "@mui/styles";
import ExpenseDialog from "./dialog";
const useStyles = makeStyles((theme) => ({
    root: {
        background: "#f5f5fa",
        padding: "20px 20px",
        //   boxShadow: theme.shadows[3],
        // [theme.breakpoints.down("xs")]: {
        //     width: "95%",
        //     padding: 5,
        // },
        // [theme.breakpoints.up("sm")]: {
        //     width: 350,
        //     padding: 10,
        // },
        // [theme.breakpoints.up("md")]: {
        //     width: 400,
        //     padding: 15,
        // },
        // [theme.breakpoints.up("lg")]: {
        //     width: 450,
        //     padding: 20,
        // },
    },
    rootChild: {
        borderRadius: '20px',
        padding: "20px 20px",

        background: "#fff"
    },
    expensesButton: {
        backgroundColor: "#603AE5",
        color: "#fff",
        fontWeight: "500",
        fontSize: "14px"
    },
    flexBox: {
        display: "flex",
        width: "100%",
        gap: "20px",
    },

    pdfRoot: {
        border: "2px dashed #ECECF2",
        padding: "15px",
        // height: "100vh",
        flex: 1,
        borderRadius: '20px',
        [theme.breakpoints.down("lg")]: {
            display: 'none'
        },
    },
    pdfRootChild: {
        background: "#F6DEBA",
        height: '100%',
        width: "100%",
        borderRadius: '20px',
    },

}));

export const DashBoard = () => {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Box className={classes.rootChild}>
                <Box display={'flex'} justifyContent={'end'} width={'100%'}>
                    <ExpenseDialog />
                </Box>
                <Box className={classes.flexBox}>
                    <DocumentTabs />
                    <Box className={classes.pdfRoot} >
                        <Box className={classes.pdfRootChild}>
                            <img src="/pdf.png" />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}