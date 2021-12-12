import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "./Title";
import { useSelector } from "react-redux";

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Statistics() {
  const history = useSelector((state) => state.history);
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Recent visits</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Manufacturer</TableCell>
            <TableCell>Brand</TableCell>
            <TableCell>Model</TableCell>
            <TableCell align="right">Vendor</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {history.history.map((hist) => (
            <TableRow key={hist?.id}>
              <TableCell>{hist?.date}</TableCell>
              <TableCell>{hist?.time}</TableCell>
              <TableCell>{hist?.manufacturer}</TableCell>
              <TableCell>{hist?.brand}</TableCell>
              <TableCell>{hist?.model}</TableCell>
              <TableCell align="right">{hist.vendor}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more statistics
        </Link>
      </div>
    </React.Fragment>
  );
}
