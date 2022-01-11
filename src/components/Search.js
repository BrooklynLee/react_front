import React, { useEffect, useState } from "react";
import axios from "axios";
import FeatureComponent from "./FeatureComponent";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from '@material-ui/core/CircularProgress';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

const useStyles = makeStyles({
    root: {
        width: "100%",
        overflowX: "auto",
    },
    table: {
        minWidth: 1080,
    },
    progress: {
        margin: 10,
    }
});


const Search = () => {
    const { search } = useLocation();
    const { tag } = queryString.parse(search);
    const [data, setData] = useState({ results: [] });
    const [progress, setProgress] = useState(0);


    const classes = useStyles();

    useEffect(() => {
        const fetchData = async () => {
            setInterval(() => {
                setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 1));
            }, 20);
            const result = await axios.get("/api/v1/features?tag=" + tag)
            setData(result.data);
        };
        fetchData();
    }, []);

    // const stateRefresh = async () => {
    //     setInterval(() => {
    //         setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 1));
    //     }, 20);
    //     const result = await axios.get("/api/v1/features?tag=" + tag)
    //     setData(result.data);
    // }


    return (
        <TableContainer component={Paper}>
            <Paper className={classes.root}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ids</TableCell>
                            <TableCell>feature_types</TableCell>
                            <TableCell>names</TableCell>
                            <TableCell>links</TableCell>
                            <TableCell>tags</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data !== 0 ? data.results.map((c) => {
                            return (
                                <FeatureComponent
                                    key={c.id}
                                    id={c.id}
                                    feature_type={c.feature_type}
                                    name={c.name}
                                    // desc={c.desc}
                                    link={c.link}
                                    tag={c.tag}
                                />
                            );
                        }) :
                            <TableRow>
                                <TableCell colSpan="6" align="center">
                                    <CircularProgress className={progress} variant="determinate" value={progress} />
                                </TableCell>
                            </TableRow>
                        }
                    </TableBody>
                </Table>
            </Paper>
        </TableContainer >);
}
export default Search;