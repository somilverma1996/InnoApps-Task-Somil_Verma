// /* eslint-disable no-unused-vars */
// import React from "react";
// import PropTypes from "prop-types";
// // javascript plugin used to create scrollbars on windows
// import PerfectScrollbar from "perfect-scrollbar";
// import { NavLink } from "react-router-dom";
// import cx from "classnames";
// import "./sidebar.css";

// // @material-ui/core components
// import withStyles from "@material-ui/core/styles/withStyles";
// import Drawer from "@material-ui/core/Drawer";
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemText from "@material-ui/core/ListItemText";
// import Hidden from "@material-ui/core/Hidden";
// import Collapse from "@material-ui/core/Collapse";
// import profile_cover from "assets/img/profile cover.png";
// // core components
// import Requests from "views/Dashboard/Request";
// import AdminNavbarLinks from "components/Navbars/AdminNavbarLinks.js";
// import Chip from "@material-ui/core/Chip";
// import people_blue from "assets/img/people_blue.png";
// import home_blue from "assets/img/home.png";
// import people from "assets/img/people.png";
// import home from "assets/img/home_grey.png";
// import insights_blue from "assets/img/insight_blue.png";
// import insights from "assets/img/insights_grey.png";
// import sidebarStyle from "assets/jss/material-dashboard-pro-react/components/sidebarStyle.jsx";
// import kc_pic from "assets/img/profile-KC.png"

// var ps;


// class SidebarWrapper extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       home: "",
//       network: "",
//       insights: ""
//     };
//   }
//   sidebarWrapper = React.createRef();
//   componentDidMount() {
//     let location = window.location.pathname;
//     this.setState({
//       network: location
//     });

//     if (navigator.platform.indexOf("Win") > -1) {
//       ps = new PerfectScrollbar(this.sidebarWrapper.current, {
//         suppressScrollX: true,
//         suppressScrollY: false
//       });
//     }
//     let ele = document.getElementById("myNetwork");
//     let ele2 = document.getElementById("home");
//     let ele3 = document.getElementById("insights");
//     if (ele != undefined && ele2 != undefined && ele3 != undefined) {
//       if (
//         window.location.pathname == "/mynetwork" ||
//         window.location.pathname == "/investors"
//       ) {
//         let ele = document.getElementById("myNetwork");
//         ele.setAttribute("class", "activeNav");
//         let ele2 = document.getElementById("home");
//         this.setState({
//           network: people_blue,
//           home: home,
//           insights: insights
//         });
//         ele2.removeAttribute("class", "activeNav");
//         ele2.setAttribute("class", "navlinks");

//         let ele3 = document.getElementById("insights");
//         ele3.removeAttribute("class", "activeNav");
//         ele3.setAttribute("class", "navlinks");
//       } else if (window.location.pathname == "/insights") {
//         let ele = document.getElementById("insights");
//         ele.setAttribute("class", "activeNav");
//         this.setState({
//           network: people,
//           home: home,
//           insights: insights_blue
//         });

//         let ele2 = document.getElementById("myNetwork");
//         ele2.removeAttribute("class", "activeNav");
//         ele2.setAttribute("class", "navlinks");

//         let ele3 = document.getElementById("home");
//         ele3.removeAttribute("class", "activeNav");
//         ele3.setAttribute("class", "navlinks");
//       } else {
//         let ele = document.getElementById("home");
//         ele.setAttribute("class", "activeNav");
//         this.setState({
//           network: people,
//           home: home_blue,
//           insights: insights
//         });

//         let ele2 = document.getElementById("myNetwork");
//         ele2.removeAttribute("class", "activeNav");
//         ele2.setAttribute("class", "navlinks");

//         let ele3 = document.getElementById("insights");
//         ele3.removeAttribute("class", "activeNav");
//         ele3.setAttribute("class", "navlinks");
//       }
//     }
//   }
//   componentWillUnmount() {
//     if (navigator.platform.indexOf("Win") > -1) {
//       ps.destroy();
//     }
//   }
//   render() {
//     const { className, user, headerLinks, links } = this.props;

//     return (
//       <div className={className} ref={this.sidebarWrapper}>
//         {user}
//         {headerLinks}
//         {window.location.pathname != "/mynetwork" &&
//           window.location.pathname != "/investors" &&
//           window.location.pathname != "/insights" &&
//           window.location.pathname != "/requests" && (
//             <div>
//               {links}
//               <br />
//               <br />
//               <br />
//               <span
//                 style={{
//                   fontFamily: "Helvetica",
//                   fontSize: 12,
//                   color: "#657786",
//                   marginLeft: 24
//                 }}
//               >
//                 Disclaimer
//               </span>
//               {window.innerWidth < 801 && (
//                 <div style={{ paddingLeft: "2.6em" }}>
//                   <a href="/updates">
//                     <div
//                       id="home"
//                       style={{}}
//                       className="navlinks"
//                       onClick={() => {
//                         // this.setActive("home");
//                       }}
//                     >
//                       <img src={home} className="mr-3" />
//                       <span style={{ lineHeight: 0, verticalAlign: "sub" }}>
//                         Home
//                       </span>
//                     </div>
//                   </a>
//                   <br />
//                   <a href="/mynetwork" style={{ color: "" }}>
//                     <div
//                       id="myNetwork"
//                       style={{}}
//                       className="navlinks"
//                       onClick={() => {
//                         // this.setActive("myNetwork");
//                         // this.props.history.push('/investors')
//                       }}
//                     >
//                       <img src={people} className="mr-4" />
//                       <span style={{ lineHeight: 0, verticalAlign: "sub" }}>
//                         My Network
//                       </span>
//                     </div>
//                   </a>
//                   <br />
//                   <a href="/insights" style={{ color: "" }}>
//                     <div
//                       id="insights"
//                       className="navlinks"
//                       onClick={() => {
//                         // this.setActive("insights");
//                         // this.props.history.push('/investors')
//                       }}
//                     >
//                       <img src={insights} className="mr-2" width="31px" />
//                       <span style={{ lineHeight: 0, verticalAlign: "sub" }}>
//                         Insights
//                       </span>
//                     </div>
//                   </a>
//                 </div>
//               )}
//             </div>
//           )}
//         {/* {} */}
//       </div>
//     );
//   }
// }

// class Sidebar extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       openAvatar: false,
//       miniActive: true,
//       updatesCount: 20,
//       showDiv: false,
//       network: "",
//       ...this.getCollapseStates(props.routes)
//     };
//   }
//   componentDidMount = () => {
//     let location = window.location.pathname;

//     this.setState(
//       {
//         network: location
//       },
//       () => {
//         if (window.location.pathname == "/requests") {
//           let ele = document.getElementById("requests");

//           ele.setAttribute("class", "activeNetwork");
//           let ele2 = document.getElementById("currentInvestors");
//           ele2.removeAttribute("class", "activeNetwork");
//           ele2.setAttribute("class", "networkTab");
//         } else if (window.location.pathname == "/mynetwork") {
//           let ele = document.getElementById("currentInvestors");
//           ele.setAttribute("class", "activeNetwork");
//           let ele2 = document.getElementById("requests");
//           ele2.removeAttribute("class", "activeNetwork");
//           ele2.setAttribute("class", "networkTab");
//         }
//       }
//     );
//   };
//   componentDidUpdate = prevProps => {
//     // eslint-disable-next-line react/prop-types
//     if (this.state.network != prevProps.location.pathname) {
//       this.setState(
//         {
//           network: window.location.pathname,
//           classes: this.props.classes
//         },
//         () => {}
//       );
//     }
//   };
//   mainPanel = React.createRef();
//   // this creates the intial state of this component based on the collapse routes
//   // that it gets through this.props.routes
//   getCollapseStates = routes => {
//     let initialState = {};

//     routes.map(prop => {
//       if (prop.collapse) {
//         initialState = {
//           [prop.state]: this.getCollapseInitialState(prop.views),
//           ...this.getCollapseStates(prop.views),
//           ...initialState
//         };
//         if (prop.path === "mynetwork") {
//           this.setState(
//             {
//               mynetwork: true
//             },
//             () => {}
//           );
//         }
//       }
//       return null;
//     });
//     return initialState;
//   };
//   // this verifies if any of the collapses should be default opened on a rerender of this component
//   // for example, on the refresh of the page,
//   // while on the src/views/forms/RegularForms.jsx - route /admin/regular-forms
//   getCollapseInitialState(routes) {
//     for (let i = 0; i < routes.length; i++) {
//       if (routes[i].collapse && this.getCollapseInitialState(routes[i].views)) {
//         return true;
//       } else if (window.location.href.indexOf(routes[i].path) !== -1) {
//         return true;
//       }
//     }
//     return false;
//   }
//   // verifies if routeName is the one active (in browser input)
//   activeRoute = routeName => {
//     return window.location.href.indexOf(routeName) > -1 ? "active" : "";
//   };
//   openCollapse(collapse) {
//     var st = {};
//     st[collapse] = !this.state[collapse];
//     this.setState(st);
//   }
//   setActive = name => {
//     if (name == "requests") {
//       let ele = document.getElementById("requests");

//       ele.setAttribute("class", "activeNetwork");
//       let ele2 = document.getElementById("currentInvestors");
//       ele2.removeAttribute("class", "activeNetwork");
//       ele2.setAttribute("class", "networkTab");
//     } else if (name == "currentInvestors") {
//       let ele = document.getElementById("currentInvestors");
//       ele.setAttribute("class", "activeNetwork");
//       let ele2 = document.getElementById("requests");
//       ele2.removeAttribute("class", "activeNetwork");
//       ele2.setAttribute("class", "networkTab");
//     }
//   };
//   // this function creates the links and collapses that appear in the sidebar (left menu)
//   createLinks = routes => {
//     const { classes, color, rtlActive } = this.props;

//     return routes.map((prop, key) => {
//       if (
//         prop.path === "/login" ||
//         prop.path === "/register" ||
//         prop.path === "/forgot-password" ||
//         prop.path === "mynetwork" ||
//         prop.path === "investors" ||
//         prop.path === "insights" ||
//         prop.path === "requests" ||
//         prop.path === "descriptionPost"
//       ) {
//         return null;
//       }
//       if (prop.redirect) {
//         return null;
//       }
//       if (prop.path === "mynetwork") {
//         this.setState(
//           {
//             mynetwork: true
//           },
//           () => {}
//         );
//       }
//       if (prop.collapse) {
//         var st = {};
//         st[prop["state"]] = !this.state[prop.state];
//         const navLinkClasses =
//           classes.itemLink +
//           " " +
//           cx({
//             [" " + classes.collapseActive]: this.getCollapseInitialState(
//               prop.views
//             )
//           });
//         const itemText =
//           classes.itemText +
//           " " +
//           cx({
//             [classes.itemTextMini]:
//               this.props.miniActive && this.state.miniActive,
//             [classes.itemTextMiniRTL]:
//               rtlActive && this.props.miniActive && this.state.miniActive,
//             [classes.itemTextRTL]: rtlActive
//           });
//         const collapseItemText =
//           classes.collapseItemText +
//           " " +
//           cx({
//             [classes.collapseItemTextMini]:
//               this.props.miniActive && this.state.miniActive,
//             [classes.collapseItemTextMiniRTL]:
//               rtlActive && this.props.miniActive && this.state.miniActive,
//             [classes.collapseItemTextRTL]: rtlActive
//           });
//         const caret =
//           classes.caret +
//           " " +
//           cx({
//             [classes.caretRTL]: rtlActive
//           });
//         return (
//           <ListItem
//             key={key}
//             className={cx(
//               { [classes.item]: prop.icon !== undefined },
//               { [classes.collapseItem]: prop.icon === undefined }
//             )}
//           >
//             <NavLink
//               to={"#"}
//               className={navLinkClasses}
//               onClick={e => {
//                 e.preventDefault();
//                 this.setState(st);
//               }}
//             >
//               <ListItemText
//                 primary={rtlActive ? prop.rtlName : prop.name}
//                 secondary={
//                   <b
//                     className={
//                       caret +
//                       " " +
//                       (this.state[prop.state] ? classes.caretActive : "")
//                     }
//                   />
//                 }
//                 disableTypography={true}
//                 className={cx(
//                   { [itemText]: prop.icon !== undefined },
//                   { [collapseItemText]: prop.icon === undefined }
//                 )}
//               />
//             </NavLink>
//             <Collapse in={this.state[prop.state]} unmountOnExit>
//               <List className={classes.list + " " + classes.collapseList}>
//                 {this.createLinks(prop.views)}
//               </List>
//             </Collapse>
//           </ListItem>
//         );
//       }
//       const innerNavLinkClasses =
//         classes.collapseItemLink +
//         " " +
//         cx({
//           [" " + classes[color]]: this.activeRoute(prop.path)
//         });
//       const navLinkClasses =
//         classes.itemLink +
//         " " +
//         cx({
//           [" " + classes[color]]: this.activeRoute(prop.path)
//         });
//       const itemText =
//         classes.itemText +
//         " " +
//         cx({
//           [classes.itemTextMini]:
//             this.props.miniActive && this.state.miniActive,
//           [classes.itemTextMiniRTL]:
//             rtlActive && this.props.miniActive && this.state.miniActive,
//           [classes.itemTextRTL]: rtlActive
//         });
//       const collapseItemText =
//         classes.collapseItemText +
//         " " +
//         cx({
//           [classes.collapseItemTextMini]:
//             this.props.miniActive && this.state.miniActive,
//           [classes.collapseItemTextMiniRTL]:
//             rtlActive && this.props.miniActive && this.state.miniActive,
//           [classes.collapseItemTextRTL]: rtlActive
//         });
//       return (
//         <ListItem
//           key={key}
//           className={cx(
//             { [classes.item]: prop.icon !== undefined },
//             { [classes.collapseItem]: prop.icon === undefined }
//           )}
//         >
//           <NavLink
//             to={prop.layout + prop.path}
//             className={cx(
//               { [navLinkClasses]: prop.icon !== undefined },
//               { [innerNavLinkClasses]: prop.icon === undefined }
//             )}
//           >
//             {/* {prop.icon !== undefined ? (
//               typeof prop.icon === "string" ? (
//                 <Icon className={itemIcon}>{prop.icon}</Icon>
//               ) : (
//                   <prop.icon className={itemIcon} />
//                 )
//             ) : (
//                 <span className={collapseItemMini}>
//                   {rtlActive ? prop.rtlMini : prop.mini}
//                 </span>
//               )} */}
//             <ListItemText
//               primary={rtlActive ? prop.rtlName : prop.name}
//               disableTypography={true}
//               className={cx(
//                 { [itemText]: prop.icon !== undefined },
//                 { [collapseItemText]: prop.icon === undefined }
//               )}
//             />
//           </NavLink>
//         </ListItem>
//       );
//     });
//   };
//   render() {
//     const { classes, routes, bgColor, rtlActive } = this.props;
//     const userWrapperClass =
//       classes.user +
//       " " +
//       cx({
//         [classes.whiteAfter]: bgColor === "white"
//       });
//     const collapseItemMini =
//       classes.collapseItemMini +
//       " " +
//       cx({
//         [classes.collapseItemMiniRTL]: rtlActive
//       });
//     var user = (
//       <div style={{ cursor: "default" }} className={userWrapperClass}>
//         <List className={classes.list} style={{ cursor: "default" }}>
//           <ListItem
//             style={{ cursor: "default" }}
//             className={classes.item + " " + classes.userItem}
//           >
//             <NavLink
//               to={"#"}
//               style={{ cursor: "default" }}
//               className={classes.itemLink + " " + classes.userCollapseButton}
//               onClick={() => this.openCollapse("openAvatar")}
//             ></NavLink>
//             {/* <Collapse in={this.state.openAvatar} unmountOnExit>
//               <List className={classes.list + " " + classes.collapseList}>
//                 <ListItem className={classes.collapseItem}>
//                   <NavLink
//                     to="#"
//                     className={
//                       classes.itemLink + " " + classes.userCollapseLinks
//                     }
//                   >
//                     <span className={collapseItemMini}>
//                       {rtlActive ? "مع" : "MP"}
//                     </span>
//                     <ListItemText
//                       primary={rtlActive ? "ملفي" : "My Profile"}
//                       disableTypography={true}
//                       className={collapseItemText}
//                     />
//                   </NavLink>
//                 </ListItem>
//                 <ListItem className={classes.collapseItem}>
//                   <NavLink
//                     to="#"
//                     className={
//                       classes.itemLink + " " + classes.userCollapseLinks
//                     }
//                   >
//                     <span className={collapseItemMini}>
//                       {rtlActive ? "هوع" : "EP"}
//                     </span>
//                     <ListItemText
//                       primary={
//                         rtlActive ? "تعديل الملف الشخصي" : "Edit Profile"
//                       }
//                       disableTypography={true}
//                       className={collapseItemText}
//                     />
//                   </NavLink>
//                 </ListItem>
//                 <ListItem className={classes.collapseItem}>
//                   <NavLink
//                     to="#"
//                     className={
//                       classes.itemLink + " " + classes.userCollapseLinks
//                     }
//                   >
//                     <span className={collapseItemMini}>
//                       {rtlActive ? "و" : "S"}
//                     </span>
//                     <ListItemText
//                       primary={rtlActive ? "إعدادات" : "Settings"}
//                       disableTypography={true}
//                       className={collapseItemText}
//                     />
//                   </NavLink>
//                 </ListItem>
//               </List>
//             </Collapse> */}
//           </ListItem>
//         </List>
//       </div>
//     );
//     var links = (
//       <List className={classes.list}>{this.createLinks(routes)}</List>
//     );
//     var brand = (
//       <div style={{ marginTop: "-2.5em", backgroundColor: "#fff" }}>
//         <img
//           src={profile_cover}
//           alt="logo"
//           className={classes.img}
//           style={{
//             width: "100%",
//             position: "relative",
//             height: "auto"
//           }}
//         />
//         {/* <div
//           style={{
//             marginLeft: 14,
//             padding: "3.8%",
//             paddingLeft: "10px !important",
//             position: "absolute",
//             fontWeight: 100,
//             fontSize: 24,
//             backgroundColor: "#c4c4c4",
//             borderRadius: "50%",
//             width: "75px",
//             height: "75px",
//             border: "2px solid white"
//           }}
//         >
//           <span
//             style={{
//               fontSize: 24,
//               paddingTop: "0em",
//               marginTop: "0px",
//               marginLeft: "5px",
//               verticalAlign: "-webkit-baseline-middle",
//               fontFamily: "Imprint mt shadow",
//               color: "#000"
//             }}
//           >
//             {"K C"}
//           </span>
//         </div> */}
//         <img src={kc_pic} className="kc_pic" />
//         <br />
//         <div style={{ marginTop: "6em", marginLeft: "2em" }}>
//           <h4
//             style={{
//               fontSize: "18px",
//               fontWeight: "bold",
//               color: "#14171A",
//               fontFamily: "Helvetica"
//             }}
//           >
//             {/* {sessionStorage.getItem('name')} */}
//             Kleber Capital
//           </h4>
//           <h6
//             style={{
//               fontSize: "14px",
//               color: "#657786",
//               fontWeight: "normal",
//               fontFamily: "Helvetica",
//               textTransform: "lowercase",
//               lineHeight: 0
//             }}
//           >
//             {/* @{sessionStorage.getItem('username').charAt(0)} */}
//             {"@kleberCapital"}
//           </h6>
//         </div>
//         {/* <br/> */}

//         <div style={{ display: "flex", marginLeft: "2em" }}>
//           <div>
//             <h5
//               style={{
//                 fontSize: "12px",
//                 color: "#657786",
//                 textTransform: "capitalize",
//                 fontWeight: "bold",
//                 fontFamily: "Helvetica"
//               }}
//             >
//               Updates
//             </h5>
//             <h6
//               style={{
//                 fontSize: "18px",
//                 textTransform: "capitalize",
//                 fontWeight: "bold",
//                 marginTop: "-2em",
//                 color: "#1560BD",
//                 fontFamily: "Helvetica"
//               }}
//             >
//               <br />
//               {sessionStorage.getItem("updates_count")}
//             </h6>
//           </div>
//           <div style={{ marginLeft: "4em" }}>
//             <h5
//               style={{
//                 fontSize: "13px",
//                 color: "#657786",
//                 textTransform: "",
//                 fontWeight: 600,
//                 fontFamily: "Helvetica"
//               }}
//             >
//               Following investors
//             </h5>
//             <h6
//               style={{
//                 fontSize: "18px",
//                 textTransform: "capitalize",
//                 fontWeight: "bold",
//                 marginTop: "-2em",
//                 color: "#1560BD",
//                 fontFamily: "Helvetica"
//               }}
//             >
//               <br />
//               81
//             </h6>
//           </div>
//         </div>
//       </div>
//     );
//     var brandNetwork = (
//       <div style={{ marginTop: ".7em", backgroundColor: "#fff", height: 237 }}>
//         <div
//           className="networkTab activeNetwork"
//           id="currentInvestors"
//           onClick={() => {
//             this.setActive("currentInvestors");
//             // eslint-disable-next-line react/prop-types
//             this.props.history.push("/mynetwork");
//           }}
//         >
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "space-between",
//               cursor: "pointer"
//             }}
//           >
//             <span>Current Investors</span>
//             <span
//               className="ml-3"
//               style={{
//                 width: 20,
//                 height: 20,
//                 borderRadius: 30,
//                 backgroundColor: "#ee3215",
//                 padding: "5px 7px",
//                 color: "white",
//                 fontWeight: "bold",
//                 fontSize: "8px",
//                 fontFamily: "Helvetica Bold"
//               }}
//             >
//               1{" "}
//             </span>
//           </div>
//         </div>
//         <div
//           className="networkTab"
//           id="requests"
//           onClick={() => {
//             this.setActive("requests");
//             // eslint-disable-next-line react/prop-types
//             this.props.history.push("/requests");
//           }}
//         >
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "space-between",
//               cursor: "pointer"
//             }}
//           >
//             <span>Requests</span>
//             <span
//               className="ml-3"
//               style={{
//                 width: 20,
//                 height: 20,
//                 borderRadius: 30,
//                 backgroundColor: "#ee3215",
//                 padding: "5px 7px",
//                 color: "white",
//                 fontSize: "8px",
//                 fontFamily: "Helvetica Bold"
//               }}
//             >
//               1{" "}
//             </span>
//           </div>
//         </div>
//         <br />
//         {/* <div
//           style={{
//             width: "80%",
//             margin: "0px 10%",
//             borderBottom: ".3px solid #657786"
//           }}
//         ></div> */}
//         <hr
//           style={{
//             width: "80%",
//             margin: "0px 10%",
//             color: "#657786",
//             borderBottom: ".3px solid #657786"
//           }}
//         />
//         <br />
//         <br />
//         <Chip
//           onClick={() => {
//             this.setState({
//               showDiv: !this.state.showDiv
//             });
//             localStorage.setItem("showField", true);
//           }}
//           style={{
//             cursor: "pointer",
//             backgroundColor: "white",
//             border: "1px solid #81A9DB",
//             marginLeft: "26px",
//             width: "30%",
//             height: 28,
//             borderRadius: 35
//           }}
//           label={
//             <span style={{ color: "#1560BD", fontWeight: 600, fontSize: 14 }}>
//               Invite
//             </span>
//           }
//         />
//         <div style={{ display: "none" }}>
//           <Requests show={this.state.showDiv} />
//         </div>
//         <br />
//         <br />
//         <span
//           style={{
//             color: "#1560BD",
//             fontSize: 13,
//             fontWeight: "normal",
//             marginLeft: "26px",
//             cursor: "pointer",
//             fontFamily: "sans-serif"
//           }}
//         >
//           ... or import connections
//         </span>
//         {/* {
//           this.state.show && (
//             <Request test="test" />
//           )
//         } */}
//       </div>
//     );

//     const drawerPaper =
//       classes.drawerPaper +
//       " " +
//       cx({
//         [classes.drawerPaperMini]:
//           this.props.miniActive && this.state.miniActive,
//         [classes.drawerPaperRTL]: rtlActive
//       });
//     const sidebarWrapper =
//       classes.sidebarWrapper +
//       " " +
//       cx({
//         [classes.drawerPaperMini]:
//           this.props.miniActive && this.state.miniActive,
//         [classes.sidebarWrapperWithPerfectScrollbar]:
//           navigator.platform.indexOf("Win") > -1
//       });
//     return (
//       <div ref={this.mainPanel}>
//         <Hidden mdUp implementation="css">
//           <Drawer
//             variant="temporary"
//             anchor={rtlActive ? "left" : "right"}
//             open={this.props.open}
//             classes={{
//               paper: drawerPaper + " " + classes[bgColor + "Background"]
//             }}
//             onClose={this.props.handleDrawerToggle}
//             ModalProps={{
//               keepMounted: true // Better open performance on mobile.
//             }}
//           >
//             {/* {brand} */}
//             {this.state.network == "/mynetwork" ||
//             this.state.network == "/investors" ||
//             this.state.network == "/requests"
//               ? brandNetwork
//               : [this.state.network == "/insights" ? null : brand]
//             // brand
//             }
//             {this.state.network == "/insights" && null}
//             {/* <div style={{fontSize:16, color:"black", backgroundColor:"white"}}>
//              <p></p>
//            <p class="side" onClick={(event)=>{this.props.history.push('/admin/updates')}} > Updates </p>
//            <p class="side" onClick={(event)=>{this.props.history.push('/admin/description')}}> Description </p>
//             <p class="side"> Performance </p>
//            <p class="side">  Documents </p>
//             </div> */}
//             <SidebarWrapper
//               className={sidebarWrapper}
//               user={user}
//               headerLinks={<AdminNavbarLinks rtlActive={rtlActive} />}
//               links={links}
//             />
//             {/* {image !== undefined ? (
//               <div
//                 className={classes.background}
//                 style={{ backgroundImage: "url(" + image + ")" }}
//               />
//             ) : null} */}
//           </Drawer>
//         </Hidden>
//         <Hidden smDown implementation="css">
//           <Drawer
//             onMouseOver={() => this.setState({ miniActive: false })}
//             onMouseOut={() => this.setState({ miniActive: true })}
//             anchor={rtlActive ? "right" : "left"}
//             variant="permanent"
//             open
//             classes={{
//               paper: drawerPaper + " " + classes[bgColor + "Background"]
//             }}
//           >
//             {this.state.network == "/mynetwork" ||
//             this.state.network == "/investors" ||
//             this.state.network == "/requests"
//               ? brandNetwork
//               : [this.state.network == "/insights" ? null : brand]
//             // brand
//             }

//             <SidebarWrapper
//               className={sidebarWrapper}
//               user={user}
//               links={links}
//             />
//             {/* {image !== undefined ? (
//               <div
//                 className={classes.background}
//                 style={{ backgroundImage: "url(" + image + ")" }}
//               />
//             ) : null} */}
//           </Drawer>
//         </Hidden>
//       </div>
//     );
//   }
// }

// Sidebar.defaultProps = {
//   bgColor: "blue"
// };

// Sidebar.propTypes = {
//   classes: PropTypes.object.isRequired,
//   bgColor: PropTypes.oneOf(["white", "black", "blue"]),
//   rtlActive: PropTypes.bool,
//   color: PropTypes.oneOf([
//     "white",
//     "red",
//     "orange",
//     "green",
//     "blue",
//     "purple",
//     "rose"
//   ]),
//   logo: PropTypes.string,
//   logoText: PropTypes.string,
//   image: PropTypes.string,
//   routes: PropTypes.arrayOf(PropTypes.object),
//   miniActive: PropTypes.bool,
//   open: PropTypes.bool,
//   handleDrawerToggle: PropTypes.func
// };

// SidebarWrapper.propTypes = {
//   className: PropTypes.string,
//   user: PropTypes.object,
//   headerLinks: PropTypes.object,
//   links: PropTypes.object
// };

// export default withStyles(sidebarStyle)(Sidebar);

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
import { NavLink } from "react-router-dom";
import cx from "classnames";
import "./sidebar.css";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Hidden from "@material-ui/core/Hidden";
import Collapse from "@material-ui/core/Collapse";
import profile_cover from "assets/img/profile cover.png";
// core components
import Requests from "views/Dashboard/Request";
import AdminNavbarLinks from "components/Navbars/AdminNavbarLinks.js";
import Chip from "@material-ui/core/Chip";
import people_blue from "assets/img/people_blue.png";
import home_blue from "assets/img/home.png";
import people from "assets/img/people.png";
import home from "assets/img/home_grey.png";
import insights_blue from "assets/img/insight_blue.png";
import insights from "assets/img/insights_grey.png";
import sidebarStyle from "assets/jss/material-dashboard-pro-react/components/sidebarStyle.jsx";
import { useLocalStorage } from "../../storageHook";

var ps;


function SidebarWrapper(props) {
  const [home, setHome] = useState("");
  const [network, setNetwork] = useState("");
  const [insights, setInsights] = useState("");
  let sidebarWrapper = React.createRef();

  useEffect(() => {
    let location = window.location.pathname;
    setNetwork(location);

    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(sidebarWrapper.current, {
        suppressScrollX: true,
        suppressScrollY: false
      });
    }
    let ele = document.getElementById("myNetwork");
    let ele2 = document.getElementById("home");
    let ele3 = document.getElementById("insights");
    if (ele != undefined && ele2 != undefined && ele3 != undefined) {
      if (
        window.location.pathname == "/mynetwork" ||
        window.location.pathname == "/investors"
      ) {
        let ele = document.getElementById("myNetwork");
        ele.setAttribute("class", "activeNav");
        let ele2 = document.getElementById("home");

        setNetwork(people_blue);
        setHome(home);
        setInsights(insights);

        ele2.removeAttribute("class", "activeNav");
        ele2.setAttribute("class", "navlinks");

        let ele3 = document.getElementById("insights");
        ele3.removeAttribute("class", "activeNav");
        ele3.setAttribute("class", "navlinks");
      } else if (window.location.pathname == "/insights") {
        let ele = document.getElementById("insights");
        ele.setAttribute("class", "activeNav");

        setNetwork(people);
        setHome(home);
        setInsights(insights_blue);

        let ele2 = document.getElementById("myNetwork");
        ele2.removeAttribute("class", "activeNav");
        ele2.setAttribute("class", "navlinks");

        let ele3 = document.getElementById("home");
        ele3.removeAttribute("class", "activeNav");
        ele3.setAttribute("class", "navlinks");
      } else {
        let ele = document.getElementById("home");
        ele.setAttribute("class", "activeNav");
        setNetwork(people);
        setHome(home_blue);
        setInsights(insights);

        let ele2 = document.getElementById("myNetwork");
        ele2.removeAttribute("class", "activeNav");
        ele2.setAttribute("class", "navlinks");

        let ele3 = document.getElementById("insights");
        ele3.removeAttribute("class", "activeNav");
        ele3.setAttribute("class", "navlinks");
      }
    }
  }, []);

  useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
    }
  }, []);

  const { className, user, headerLinks, links } = props;
  // const classes = this.state.classes;

  return (
    <div className={className} ref={sidebarWrapper}>
      {user}
      {headerLinks}
      {window.location.pathname != "/mynetwork" &&
        window.location.pathname != "/investors" &&
        window.location.pathname != "/insights" &&
        window.location.pathname != "/requests" && (
          <div>
            {links}
            <br />
            <br />
            <br />
            <br />
            <br />
            <span
              style={{
                fontFamily: "helvetica",
                fontSize: 12,
                color: "grey",
                marginLeft: 18
              }}
            >
              Disclaimer
            </span>
            {window.innerWidth < 801 && (
              <div>
                <a href="/updates">
                  <div
                    id="home"
                    style={{}}
                    className="navlinks"
                    onClick={() => {
                      this.setActive("home");
                    }}
                  >
                    <img src={this.state.home} className="mr-3" />
                    <span style={{ lineHeight: 0, verticalAlign: "sub" }}>
                      Home
                    </span>
                  </div>
                </a>
                <br />
                <a href="/mynetwork" style={{ color: "" }}>
                  <div
                    id="myNetwork"
                    style={{}}
                    className="navlinks"
                    onClick={() => {
                      this.setActive("myNetwork");
                      // this.props.history.push('/investors')
                    }}
                  >
                    <img src={this.state.network} className="mr-3" />
                    <span style={{ lineHeight: 0, verticalAlign: "sub" }}>
                      My Network
                    </span>
                  </div>
                </a>
                <br />
                <a href="/insights" style={{ color: "" }}>
                  <div
                    id="insights"
                    className="navlinks"
                    onClick={() => {
                      this.setActive("insights");
                      // this.props.history.push('/investors')
                    }}
                  >
                    <img src={this.state.insights} className="mr-3" />
                    <span style={{ lineHeight: 0, verticalAlign: "sub" }}>
                      Insights
                    </span>
                  </div>
                </a>
              </div>
            )}
          </div>
        )}
      {/* {} */}
    </div>
  );
}

function Sidebar(props) {
  const [openAvatar, setOpenAvatar] = useState(false);
  const [miniActive, setMiniActive] = useState(true);
  const [updatesCount, setUpdatesCount] = useState(20);
  const [showDiv, setShowDiv] = useState(false);
  const [network, setNetwork] = useState("");
  const [storage, setStorage] = useLocalStorage("showField", false);
  const [mynetwork, setMynetwork] = useState("");
  const [classes, setClasses] = useState("");
  const [requestCount] = useLocalStorage("requestsCount", 0);
  // ...this.getCollapseStates(props.routes)
  useEffect(() => {
    let location = window.location.pathname;
    setNetwork(location);
    // if (window.location.pathname == "/requests") {
    //   let ele = document.getElementById("requests");

    //   ele.setAttribute("class", "activeNetwork");
    //   let ele2 = document.getElementById("currentInvestors");
    //   ele2.removeAttribute("class", "activeNetwork");
    //   ele2.setAttribute("class", "networkTab");
    // } else if (window.location.pathname == "/mynetwork") {
    //   let ele = document.getElementById("currentInvestors");
    //   ele.setAttribute("class", "activeNetwork");
    //   let ele2 = document.getElementById("requests");
    //   ele2.removeAttribute("class", "activeNetwork");
    //   ele2.setAttribute("class", "networkTab");
    // }
  }, []);

  // useEffect(() => {

  // }, [network]);

  useEffect(prevProps => {
    // eslint-disable-next-line react/prop-types
    if (network != prevProps) {
      setNetwork(window.location.pathname);
      setClasses(props.classes);
    }
  });
  let mainPanel = React.createRef();
  // this creates the intial state of this component based on the collapse routes
  // that it gets through this.props.routes
  let getCollapseStates = routes => {
    let initialState = {};

    routes.map(prop => {
      if (prop.collapse) {
        initialState = {
          [prop.state]: getCollapseInitialState(prop.views),
          ...getCollapseStates(prop.views),
          ...initialState
        };
        if (prop.path === "mynetwork") {
          setMynetwork(true);
        }
      }
      return null;
    });
    return initialState;
  };
  // this verifies if any of the collapses should be default opened on a rerender of this component
  // for example, on the refresh of the page,
  // while on the src/views/forms/RegularForms.jsx - route /admin/regular-forms
  let getCollapseInitialState = routes => {
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].collapse && getCollapseInitialState(routes[i].views)) {
        return true;
      } else if (window.location.href.indexOf(routes[i].path) !== -1) {
        return true;
      }
    }
    return false;
  };
  // verifies if routeName is the one active (in browser input)
  let activeRoute = routeName => {
    return window.location.href.indexOf(routeName) > -1 ? "active" : "";
  };

  let setActive = name => {
    if (name == "requests") {
      let ele = document.getElementById("requests");

      ele.setAttribute("class", "activeNetwork");
      let ele2 = document.getElementById("currentInvestors");
      ele2.removeAttribute("class", "activeNetwork");
      ele2.setAttribute("class", "networkTab");
    } else if (name == "currentInvestors") {
      let ele = document.getElementById("currentInvestors");
      ele.setAttribute("class", "activeNetwork");
      let ele2 = document.getElementById("requests");
      ele2.removeAttribute("class", "activeNetwork");
      ele2.setAttribute("class", "networkTab");
    }
  };
  // this function creates the links and collapses that appear in the sidebar (left menu)
  let createLinks = routes => {
    const { classes, color, rtlActive } = props;

    return routes.map((prop, key) => {
      if (
        prop.path === "/login" ||
        prop.path === "/register" ||
        prop.path === "/forgot-password" ||
        prop.path === "mynetwork" ||
        prop.path === "investors" ||
        prop.path === "insights" ||
        prop.path === "requests" ||
        prop.path === "descriptionPost"
      ) {
        return null;
      }
      if (prop.redirect) {
        return null;
      }
      if (prop.path === "mynetwork") {
        setMynetwork(true);
      }
      if (prop.collapse) {
        // var st = {};
        // st[prop.state] = !prop.state;
        const navLinkClasses =
          classes.itemLink +
          " " +
          cx({
            [" " + classes.collapseActive]: getCollapseInitialState(prop.views)
          });
        const itemText =
          classes.itemText +
          " " +
          cx({
            [classes.itemTextMini]: props.miniActive && miniActive,
            [classes.itemTextMiniRTL]: rtlActive && miniActive && miniActive,
            [classes.itemTextRTL]: rtlActive
          });
        const collapseItemText =
          classes.collapseItemText +
          " " +
          cx({
            [classes.collapseItemTextMini]: props.miniActive && miniActive,
            [classes.collapseItemTextMiniRTL]:
              rtlActive && props.miniActive && miniActive,
            [classes.collapseItemTextRTL]: rtlActive
          });
        const caret =
          classes.caret +
          " " +
          cx({
            [classes.caretRTL]: rtlActive
          });
        return (
          <ListItem
            key={key}
            className={cx(
              { [classes.item]: prop.icon !== undefined },
              { [classes.collapseItem]: prop.icon === undefined }
            )}
          >
            <NavLink
              to={"#"}
              className={navLinkClasses}
              onClick={e => {
                e.preventDefault();
                // this.setState(st);
              }}
            >
              <ListItemText
                primary={rtlActive ? prop.rtlName : prop.name}
                secondary={
                  <b
                    className={
                      caret
                      // caret +
                      // " " +
                      // (this.state[prop.state] ? classes.caretActive : "")
                    }
                  />
                }
                disableTypography={true}
                className={cx(
                  { [itemText]: prop.icon !== undefined },
                  { [collapseItemText]: prop.icon === undefined }
                )}
              />
            </NavLink>
            <Collapse in={this.state[prop.state]} unmountOnExit>
              <List className={classes.list + " " + classes.collapseList}>
                {createLinks(prop.views)}
              </List>
            </Collapse>
          </ListItem>
        );
      }
      const innerNavLinkClasses =
        classes.collapseItemLink +
        " " +
        cx({
          [" " + classes[color]]: activeRoute(prop.path)
        });
      const navLinkClasses =
        classes.itemLink +
        " " +
        cx({
          [" " + classes[color]]: activeRoute(prop.path)
        });
      const itemText =
        classes.itemText +
        " " +
        cx({
          [classes.itemTextMini]: props.miniActive && miniActive,
          [classes.itemTextMiniRTL]:
            rtlActive && props.miniActive && miniActive,
          [classes.itemTextRTL]: rtlActive
        });
      const collapseItemText =
        classes.collapseItemText +
        " " +
        cx({
          [classes.collapseItemTextMini]: props.miniActive && miniActive,
          [classes.collapseItemTextMiniRTL]:
            rtlActive && props.miniActive && miniActive,
          [classes.collapseItemTextRTL]: rtlActive
        });
      return (
        <ListItem
          key={key}
          className={cx(
            { [classes.item]: prop.icon !== undefined },
            { [classes.collapseItem]: prop.icon === undefined }
          )}
        >
          <NavLink
            to={prop.layout + prop.path}
            className={cx(
              { [navLinkClasses]: prop.icon !== undefined },
              { [innerNavLinkClasses]: prop.icon === undefined }
            )}
          >
            {/* {prop.icon !== undefined ? (
              typeof prop.icon === "string" ? (
                <Icon className={itemIcon}>{prop.icon}</Icon>
              ) : (
                  <prop.icon className={itemIcon} />
                )
            ) : (
                <span className={collapseItemMini}>
                  {rtlActive ? prop.rtlMini : prop.mini}
                </span>
              )} */}
            <ListItemText
              primary={rtlActive ? prop.rtlName : prop.name}
              disableTypography={true}
              className={cx(
                { [itemText]: prop.icon !== undefined },
                { [collapseItemText]: prop.icon === undefined }
              )}
            />
          </NavLink>
        </ListItem>
      );
    });
  };
  props.routes.map(() => {});

  // const { classes, routes, bgColor, rtlActive } = props;
  const { routes, bgColor, rtlActive } = props;
  const collapseItemText =
    classes.collapseItemText +
    " " +
    cx({
      [classes.collapseItemTextMini]: props.miniActive && miniActive,
      [classes.collapseItemTextMiniRTL]:
        rtlActive && props.miniActive && miniActive,
      [classes.collapseItemTextRTL]: rtlActive
    });
  const userWrapperClass =
    classes.user +
    " " +
    cx({
      [classes.whiteAfter]: bgColor === "white"
    });
  const collapseItemMini =
    classes.collapseItemMini +
    " " +
    cx({
      [classes.collapseItemMiniRTL]: rtlActive
    });
  var user = (
    <div className={userWrapperClass}>
      <List className={classes.list}>
        <ListItem className={classes.item + " " + classes.userItem}>
          <NavLink
            to={"#"}
            className={classes.itemLink + " " + classes.userCollapseButton}
            onClick={() => setOpenAvatar(!openAvatar)}
          ></NavLink>
          <Collapse in={openAvatar} unmountOnExit>
            <List className={classes.list + " " + classes.collapseList}>
              <ListItem className={classes.collapseItem}>
                <NavLink
                  to="#"
                  className={classes.itemLink + " " + classes.userCollapseLinks}
                >
                  <span className={collapseItemMini}>
                    {rtlActive ? "مع" : "MP"}
                  </span>
                  <ListItemText
                    primary={rtlActive ? "ملفي" : "My Profile"}
                    disableTypography={true}
                    className={collapseItemText}
                  />
                </NavLink>
              </ListItem>
              <ListItem className={classes.collapseItem}>
                <NavLink
                  to="#"
                  className={classes.itemLink + " " + classes.userCollapseLinks}
                >
                  <span className={collapseItemMini}>
                    {rtlActive ? "هوع" : "EP"}
                  </span>
                  <ListItemText
                    primary={rtlActive ? "تعديل الملف الشخصي" : "Edit Profile"}
                    disableTypography={true}
                    className={collapseItemText}
                  />
                </NavLink>
              </ListItem>
              <ListItem className={classes.collapseItem}>
                <NavLink
                  to="#"
                  className={classes.itemLink + " " + classes.userCollapseLinks}
                >
                  <span className={collapseItemMini}>
                    {rtlActive ? "و" : "S"}
                  </span>
                  <ListItemText
                    primary={rtlActive ? "إعدادات" : "Settings"}
                    disableTypography={true}
                    className={collapseItemText}
                  />
                </NavLink>
              </ListItem>
            </List>
          </Collapse>
        </ListItem>
      </List>
    </div>
  );
  var links = <List className={classes.list}>{createLinks(routes)}</List>;
  var brand = (
    <div style={{ marginTop: "-2.5em", backgroundColor: "#fff" }}>
      <img
        src={profile_cover}
        alt="logo"
        className={classes.img}
        style={{
          width: "100%",
          position: "relative",
          height: "auto"
        }}
      />
      <div
        style={{
          marginLeft: 14,
          padding: "1.8%",
          paddingLeft: "10px !important",
          position: "absolute",
          fontWeight: 700,
          fontSize: 24,
          backgroundColor: "#c4c4c4",
          borderRadius: "50%",
          width: "62px",
          height: "62px",
          border: "2px solid white"
        }}
      >
        <span
          style={{
            fontSize: 15,
            paddingTop: "0em",
            marginTop: "0px",
            marginLeft: "13px",
            verticalAlign: "-webkit-baseline-middle"
          }}
        >
          {/* {sessionStorage.getItem('name') != undefined && sessionStorage.getItem('name').charAt(0)} {sessionStorage.getItem('last_name') != undefined && sessionStorage.getItem('last_name').charAt(0)} */}
          {"A B"}
        </span>
      </div>
      <br />
      <div style={{ marginTop: "8em", marginLeft: "2em" }}>
        <h4
          style={{
            fontSize: "20px",
            fontWeight: 700,
            color: "#14171A",
            fontFamily: "Helvetica"
          }}
        >
          {/* {sessionStorage.getItem('name')} */}
          Hello
        </h4>
        <h6
          style={{
            fontSize: "14px",
            color: "grey",
            textTransform: "capitalize",
            lineHeight: 0
          }}
        >
          {/* @{sessionStorage.getItem('username').charAt(0)} */}
          {"@hello"}
        </h6>
      </div>
      {/* <br/> */}

      <div style={{ display: "flex", marginLeft: "2em" }}>
        <div>
          <h5
            style={{
              fontSize: "14px",
              color: "grey",
              textTransform: "capitalize",
              fontWeight: 600
            }}
          >
            Updates
          </h5>
          <h6
            style={{
              fontSize: "20px",
              textTransform: "capitalize",
              fontWeight: 600,
              marginTop: "-2em",
              color: "blue"
            }}
          >
            <br />
            {sessionStorage.getItem("updates_count")}
          </h6>
        </div>
        <div style={{ marginLeft: "2em" }}>
          <h5
            style={{
              fontSize: "14px",
              color: "grey",
              textTransform: "",
              fontWeight: 600
            }}
          >
            Following investors
          </h5>
          <h6
            style={{
              fontSize: "20px",
              textTransform: "capitalize",
              fontWeight: 600,
              marginTop: "-2em",
              color: "blue"
            }}
          >
            <br />
            {sessionStorage.getItem("investors_count")}
          </h6>
        </div>
      </div>
    </div>
  );
  var brandNetwork = (
    <div style={{ marginTop: ".7em", backgroundColor: "#fff", height: 270 }}>
      <div
        className="networkTab activeNetwork"
        id="currentInvestors"
        onClick={() => {
          setActive("currentInvestors");
          setStorage(false);
          props.history.push("/mynetwork");
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            cursor: "pointer"
          }}
        >
          <span>Current Investors</span>
          <span
            className="ml-3"
            style={{
              width: 20,
              height: 20,
              borderRadius: 30,
              backgroundColor: "red",
              padding: "2px 6px",
              color: "white",
              fontSize: "12px"
            }}
          >
            {sessionStorage.getItem("investors_count")}
          </span>
        </div>
      </div>
      <div
        className="networkTab"
        id="requests"
        onClick={() => {
          setActive("requests");
          setStorage(false);
          props.history.push("/requests");
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            cursor: "pointer"
          }}
        >
          <span>Requests</span>
          <span
            className="ml-3"
            style={{
              width: 20,
              height: 20,
              borderRadius: 30,
              backgroundColor: "red",
              padding: "2px 4px",
              color: "white",
              fontSize: "12px"
            }}
          >
            {requestCount}
          </span>
        </div>
      </div>
      <br />
      <div
        style={{
          width: "80%",
          margin: "0px 10%",
          borderBottom: ".9px solid grey"
        }}
      ></div>
      <br />
      <br />
      <Chip
        onClick={() => {
          setShowDiv(!showDiv);
          setStorage(true);
        }}
        style={{
          cursor: "pointer",
          backgroundColor: "white",
          border: "1px solid grey",
          marginLeft: "26px",
          width: "32%",
          height: 35,
          borderRadius: 35
        }}
        label={
          <span style={{ color: "#1560BD", fontWeight: 600, fontSize: 14 }}>
            Invite
          </span>
        }
      />
      <div style={{ display: "none" }}>
        <Requests show={showDiv} />
      </div>
      <br />
      <br />
      <span
        style={{
          color: "#1560BD",
          fontSize: 14,
          fontWeight: 500,
          marginLeft: "26px",
          fontFamily: "sans-serif"
        }}
      >
        ... or import connections
      </span>
      {/* {
        this.state.show && (
          <Request test="test" />
        )
      } */}
    </div>
  );

  const drawerPaper =
    classes.drawerPaper +
    " " +
    cx({
      [classes.drawerPaperMini]: props.miniActive && miniActive,
      [classes.drawerPaperRTL]: rtlActive
    });
  const sidebarWrapper =
    classes.sidebarWrapper +
    " " +
    cx({
      [classes.drawerPaperMini]: props.miniActive && miniActive,
      [classes.sidebarWrapperWithPerfectScrollbar]:
        navigator.platform.indexOf("Win") > -1
    });
  return (
    <div ref={mainPanel}>
      <Hidden mdUp implementation="css">
        <Drawer
          variant="temporary"
          anchor={rtlActive ? "left" : "right"}
          open={props.open}
          classes={{
            paper: drawerPaper + " " + classes[bgColor + "Background"]
          }}
          onClose={props.handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
        >
          {/* {brand} */}
          {network == "/mynetwork" ||
          network == "/investors" ||
          network == "/requests"
            ? brandNetwork
            : [network == "/insights" ? null : brand]
          // brand
          }
          {network == "/insights" && null}
          {/* <div style={{fontSize:16, color:"black", backgroundColor:"white"}}>
            <p></p>
          <p class="side" onClick={(event)=>{this.props.history.push('/admin/updates')}} > Updates </p>
          <p class="side" onClick={(event)=>{this.props.history.push('/admin/description')}}> Description </p>
          <p class="side"> Performance </p>
          <p class="side">  Documents </p>
          </div> */}
          <SidebarWrapper
            className={sidebarWrapper}
            // user={user}
            headerLinks={<AdminNavbarLinks rtlActive={rtlActive} />}
            links={links}
          />
          {/* {image !== undefined ? (
            <div
              className={classes.background}
              style={{ backgroundImage: "url(" + image + ")" }}
            />
          ) : null} */}
        </Drawer>
      </Hidden>
      <Hidden smDown implementation="css">
        <Drawer
          onMouseOver={() => setMiniActive(false)}
          onMouseOut={() => setMiniActive(true)}
          anchor={rtlActive ? "right" : "left"}
          variant="permanent"
          open
          classes={{
            paper: drawerPaper + " " + classes[bgColor + "Background"]
          }}
        >
          {network == "/mynetwork" ||
          network == "/investors" ||
          network == "/requests"
            ? brandNetwork
            : [network == "/insights" ? null : brand]
          // brand
          }

          <SidebarWrapper
            className={sidebarWrapper}
            user={user}
            links={links}
          />
          {/* {image !== undefined ? (
            <div
              className={classes.background}
              style={{ backgroundImage: "url(" + image + ")" }}
            />
          ) : null} */}
        </Drawer>
      </Hidden>
    </div>
  );
}

Sidebar.defaultProps = {
  bgColor: "blue"
};

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  bgColor: PropTypes.oneOf(["white", "black", "blue"]),
  rtlActive: PropTypes.bool,
  color: PropTypes.oneOf([
    "white",
    "red",
    "orange",
    "green",
    "blue",
    "purple",
    "rose"
  ]),
  logo: PropTypes.string,
  logoText: PropTypes.string,
  image: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object),
  miniActive: PropTypes.bool,
  open: PropTypes.bool,
  handleDrawerToggle: PropTypes.func
};

SidebarWrapper.propTypes = {
  className: PropTypes.string,
  user: PropTypes.object,
  headerLinks: PropTypes.object,
  links: PropTypes.object
};

export default withStyles(sidebarStyle)(Sidebar);

