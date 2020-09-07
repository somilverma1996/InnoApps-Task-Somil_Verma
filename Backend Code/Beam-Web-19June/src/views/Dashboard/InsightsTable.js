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
            {/* <p class="" style={{fontSize:"12px", color:"gray"}}><b>DOCUMENT VIEWS</b></p> */}
            {/* <h3 className={classes.cardIconTitle}>PERFORMANCE</h3> */}
          </CardHeader>
          <CardBody>
            <Table
              tableHead={["Name", "Imp", "Read More", "Saved", "Shared"]}
              tableData={[
                [
                  <span key={1}>
                    {" "}
                    <p className="" style={{ fontSize: "12px", color: "blue" }}>
                      Matthias Sainz
                    </p>
                    <p className="" style={{ fontSize: "12px", color: "gray" }}>
                      Montcalm Partners
                    </p>
                  </span>,
                  "5",
                  "2",
                  <span key={1}>
                    <i className="fa fa-bookmark"></i>
                  </span>,
                  "3"
                ],
                [
                  <span key={1}>
                    {" "}
                    <p className="" style={{ fontSize: "12px", color: "blue" }}>
                      Matthias Sainz
                    </p>
                    <p className="" style={{ fontSize: "12px", color: "gray" }}>
                      Montcalm Partners
                    </p>
                  </span>,
                  "5",
                  "2",
                  <span key={1}>
                    <i className="fa fa-bookmark"></i>
                  </span>,
                  "3"
                ],
                [
                  <span key={1}>
                    {" "}
                    <p className="" style={{ fontSize: "12px", color: "blue" }}>
                      Matthias Sainz
                    </p>
                    <p className="" style={{ fontSize: "12px", color: "gray" }}>
                      Montcalm Partners
                    </p>
                  </span>,
                  "5",
                  "2",
                  <span key={1}>
                    <i className="fa fa-bookmark"></i>
                  </span>,
                  "3"
                ],
                [
                  <span key={1}>
                    {" "}
                    <p className="" style={{ fontSize: "12px", color: "blue" }}>
                      Matthias Sainz
                    </p>
                    <p className="" style={{ fontSize: "12px", color: "gray" }}>
                      Montcalm Partners
                    </p>
                  </span>,
                  "5",
                  "2",
                  <span key={1}>
                    <i className="fa fa-bookmark"></i>
                  </span>,
                  "3"
                ],
                [
                  <span key={1}>
                    {" "}
                    <p className="" style={{ fontSize: "12px", color: "blue" }}>
                      Matthias Sainz
                    </p>
                    <p className="" style={{ fontSize: "12px", color: "gray" }}>
                      Montcalm Partners
                    </p>
                  </span>,
                  "5",
                  "2",
                  <span key={1}>
                    <i className="fa fa-bookmark"></i>
                  </span>,
                  "3"
                ],
                [
                  <span key={1}>
                    {" "}
                    <p className="" style={{ fontSize: "12px", color: "blue" }}>
                      Matthias Sainz
                    </p>
                    <p className="" style={{ fontSize: "12px", color: "gray" }}>
                      Montcalm Partners
                    </p>
                  </span>,
                  "5",
                  "2",
                  <span key={1}>
                    <i className="fa fa-bookmark"></i>
                  </span>,
                  "3"
                ],
                [
                  <span key={1}>
                    {" "}
                    <p className="" style={{ fontSize: "12px", color: "blue" }}>
                      Matthias Sainz
                    </p>
                    <p className="" style={{ fontSize: "12px", color: "gray" }}>
                      Montcalm Partners
                    </p>
                  </span>,
                  "5",
                  "2",
                  <span key={1}>
                    <i className="fa fa-bookmark"></i>
                  </span>,
                  "3"
                ],
                [
                  <span key={1}>
                    {" "}
                    <p className="" style={{ fontSize: "12px", color: "blue" }}>
                      Matthias Sainz
                    </p>
                    <p className="" style={{ fontSize: "12px", color: "gray" }}>
                      Montcalm Partners
                    </p>
                  </span>,
                  "5",
                  "2",
                  <span key={1}>
                    <i className="fa fa-bookmark"></i>
                  </span>,
                  "3"
                ]
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
