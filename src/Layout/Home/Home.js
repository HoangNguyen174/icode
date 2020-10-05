
import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withStyles } from "@material-ui/core/styles";

function createData(name, icode, others) {
  return { name, icode, others };
}

const useStyles = makeStyles((theme) => ({
  content: {
    padding: theme.spacing(8, 0, 6),
  },
  table: {
    width: '750px',
    margin: 'auto'
  },
}));

const rows = [
  createData('Learn by doing', '✓', 'x'),
  createData('Instructor Expert-level skills', '✓', 'x'),
  createData('Job-focused content', '✓', 'x'),
  createData('Real human help', '✓', 'x'),
  createData('Personalized code reviews', '✓', 'x'),
  createData('Real-life projects', '✓', 'x'),
];

const LeftTableCell = withStyles((theme) => ({
  body: {
    fontSize: 16,
    backgroundColor: 'rgb(242, 251, 254)',
    border: '1px solid white'
  },
  head: {
    backgroundColor: 'rgb(242, 251, 254)',
    border: '1px solid white'
  },
}))(TableCell);

const MidTableCell = withStyles((theme) => ({
  body: {
    backgroundColor: 'rgb(13, 103, 137)',
    color: 'white',
    fontWeight: 'bold',
    borderRight: '1px solid white'
  },
  head: {
    backgroundColor: 'rgb(13, 103, 137)',
    color: 'white',
    fontWeight: 'bold',
    borderRight: '1px solid white'
  },
}))(TableCell);

const RightTableCell = withStyles((theme) => ({
  body: {
    backgroundColor: 'gray',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16
  },
  head: {
    backgroundColor: 'gray',
    color: 'white',
    fontWeight: 'bold',
  },
}))(TableCell);

export default function Home() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container maxWidth="md" component="main" className={classes.content}>
        <Typography variant="h5" align="center" color="textSecondary" component="p">
          Our Part-Time Online Bootcamp is a flexible alternative that provides online access to our in-depth curriculum—complete with real-time support from instructors, our industry-tested learning platform, hands-on assignments and much more.
        </Typography>
      </Container>
      <TableContainer className={classes.table} component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <LeftTableCell></LeftTableCell>
              <MidTableCell align="center"> ICODE </MidTableCell>
              <RightTableCell align="center"> OTHERS </RightTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <LeftTableCell component="th" scope="row">
                  {row.name}
                </LeftTableCell>
                <MidTableCell align="center">{row.icode}</MidTableCell>
                <RightTableCell align="center">{row.others}</RightTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  )
}