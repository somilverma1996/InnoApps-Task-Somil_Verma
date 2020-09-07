import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import "./abc.css";

import styles from "assets/jss/material-dashboard-pro-react/views/extendedTablesStyle.js";

const useStyles = makeStyles(styles);

export default function ExtendedTables() {
  const classes = useStyles();
  return (
    <GridContainer class="abc">
      <GridItem xs={12}>
        <Card>
          <CardHeader color="rose" icon>
            {/* <CardIcon color="rose">
              <Assignment />
            </CardIcon> */}
            <h3 className={classes.cardIconTitle}>PERFORMANCE</h3>
          </CardHeader>
          <CardBody>
            <Table
              tableHead={[
                <span key={1}></span>,
                <span key={2}>Kleber</span>,
                "S&P500 TR",
                "Russell 2000"
              ]}
              tableData={[
                ["Ann. return", "10.5%", "5.8%", "3.6%"],
                ["Total. return", "10.5%", "5.8%", "3.6%"],
                ["Last 12 mnths", "10.5%", "5.8%", "3.6%"],
                ["Best month", "10.5%", "5.8%", "3.6%"],
                ["Worst month", "10.5%", "5.8%", "3.6%"],
                ["% positive months", "10.5%", "5.8%", "3.6%"]
              ]}
              customCellClasses={[classes.center, classes.right, classes.right]}
              customClassesForCells={[0, 4, 5]}
              customHeadCellClasses={[
                classes.center,
                classes.right,
                classes.right
              ]}
              customHeadClassesForCells={[0, 4, 5]}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
