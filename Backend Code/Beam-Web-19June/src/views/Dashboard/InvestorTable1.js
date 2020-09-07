import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Table from "components/Table/Table.js";
// eslint-disable-next-line no-unused-vars
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
// eslint-disable-next-line no-unused-vars
import CardIcon from "components/Card/CardIcon.js";
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
            <p className="" style={{ fontSize: "12px", color: "gray" }}>
              <b>ENGAGEMENT PER UPDATE</b>
            </p>
            {/* <h3 className={classes.cardIconTitle}>PERFORMANCE</h3> */}
          </CardHeader>
          <CardBody style={{ width: "fit-content" }}>
            <Table
              tableHead={["Name", "Imp", "Read More", "Saved", "Shared"]}
              tableData={[
                [
                  <span key={1}>
                    {" "}
                    <p className="" style={{ fontSize: "12px", color: "blue" }}>
                      Example of how we managae..
                    </p>
                  </span>,
                  <span key={1}>
                    {" "}
                    <p className="" style={{ fontSize: "12px" }}>
                      5
                    </p>
                  </span>,
                  <span key={1}>
                    {" "}
                    <p className="" style={{ fontSize: "12px" }}>
                      2
                    </p>
                  </span>,
                  <span key={1}>
                    <i className="fa fa-bookmark"></i>
                  </span>,
                  <span key={1}>
                    <i className="fa fa-share"></i>
                  </span>
                ],
                [
                  <span key={1}>
                    {" "}
                    <p className="" style={{ fontSize: "12px", color: "blue" }}>
                      The fund gained +1.14%(es...)
                    </p>
                  </span>,
                  <span key={1}>
                    {" "}
                    <p className="" style={{ fontSize: "12px" }}>
                      5
                    </p>
                  </span>,
                  <span key={1}>
                    {" "}
                    <p className="" style={{ fontSize: "12px" }}>
                      2
                    </p>
                  </span>,
                  <span key={1}>
                    <i className="fa fa-bookmark"></i>
                  </span>,
                  <span key={1}>
                    <i className="fa fa-share"></i>
                  </span>
                ],
                [
                  <span key={1}>
                    {" "}
                    <p className="" style={{ fontSize: "12px", color: "blue" }}>
                      September in a nutshell
                    </p>
                  </span>,
                  <span key={1}>
                    {" "}
                    <p className="" style={{ fontSize: "12px" }}>
                      5
                    </p>
                  </span>,
                  <span key={1}>
                    {" "}
                    <p className="" style={{ fontSize: "12px" }}>
                      2
                    </p>
                  </span>,
                  <span key={1}>
                    <i className="fa fa-bookmark"></i>
                  </span>,
                  <span key={1}>
                    <i className="fa fa-share"></i>
                  </span>
                ],
                [
                  <span key={1}>
                    {" "}
                    <p className="" style={{ fontSize: "12px", color: "blue" }}>
                      Interesting fact: The US stoc..
                    </p>
                  </span>,
                  <span key={1}>
                    {" "}
                    <p className="" style={{ fontSize: "12px" }}>
                      5
                    </p>
                  </span>,
                  <span key={1}>
                    {" "}
                    <p className="" style={{ fontSize: "12px" }}>
                      2
                    </p>
                  </span>,
                  <span key={1}>
                    <i className="fa fa-bookmark"></i>
                  </span>,
                  <span key={1}>
                    <i className="fa fa-share"></i>
                  </span>
                ],
                [
                  <span key={1}>
                    {" "}
                    <p className="" style={{ fontSize: "12px", color: "blue" }}>
                      Lyft stock jumped as much a...
                    </p>
                  </span>,
                  <span key={1}>
                    {" "}
                    <p className="" style={{ fontSize: "12px" }}>
                      5
                    </p>
                  </span>,
                  <span key={1}>
                    {" "}
                    <p className="" style={{ fontSize: "12px" }}>
                      2
                    </p>
                  </span>,
                  <span key={1}>
                    <i className="fa fa-bookmark"></i>
                  </span>,
                  <span key={1}>
                    <i className="fa fa-share"></i>
                  </span>
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
