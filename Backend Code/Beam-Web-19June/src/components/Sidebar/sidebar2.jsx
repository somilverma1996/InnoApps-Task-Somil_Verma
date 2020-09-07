
// import React from "react";
// import classNames from "classnames";
// import PropTypes from "prop-types";
// import { NavLink } from "react-router-dom";
// // @material-ui/core components
// import withStyles from "@material-ui/core/styles/withStyles";
// import Drawer from "@material-ui/core/Drawer";
// import Hidden from "@material-ui/core/Hidden";
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
// import ListItemText from "@material-ui/core/ListItemText";
// import Icon from "@material-ui/core/Icon";
// import {Route } from 'react-router-dom';
// // core components
// import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
// import sidebarStyle from "assets/jss/material-dashboard-pro-react/components/sidebarStyle.jsx"
// // src/assets/jss/material-dashboard-pro-react/components/sidebarStyle.jsx
// const Sidebar = ({ ...props }) => {
//   // verifies if routeName is the one active (in browser input)
//   function activeRoute(routeName) { 


//       return props.location.pathname.indexOf(routeName) > -1 ? true : false;



//   }
//   const { classes, color, logo, image, logoText, routes } = props;

//   var links = (
//   <List className={classes.list}>
//   {routes.map((prop, key) => {

//   // if (props.authentication.user_type == "S"){
//   //   if(prop.path==="/organizationGoals" || prop.path==="/organizationsStrategyChart" || prop.path==="/organizationsGoalDetails" || prop.path==="/organizationStoreKpiDepartment" || prop.path==="/scoreCardReportsGraph" || prop.path==="/organizationsKpiGraph" || prop.path==="/organizationsKpiDepartmentManager" || prop.path==="/organizationEditKpiDepartment" || prop.path==="/organizationDepartmentEditKpi" || prop.path==="/organizationStoreDepartmentEditKpi" || prop.path==="/organizationDepartmentAddKpi" || prop.path==="/organizationStoreDepartmentAddKpi" || prop.path==="/organizationAddKpiDepartment" || prop.path==="/organizationKpiDepartment" || prop.path==="/scoreCardReports" || prop.path==="/organizationSubKpi" || prop.path==="/organizationStoreSurveyUser" || prop.path==="/organizationQuestionBanksAdd" || prop.path==="/organizationStoreQuestionBanksAdd" || prop.path==="/organizationStoreQuestionBanks" || prop.path==="/organizationQuestionBanks" || prop.path==="/organizationStoreSurveyEdit" || prop.path==="/organizationStoreSurveyForm" || prop.path==="/organizationStoreSurvey" || prop.path==="/organizationKpi" || prop.path==="/organizationStoreDepartmentUserEdit" || prop.path==="/organizationStoreEdit" || prop.path==="/organizationStoreAdd" || prop.path==="/organizationStoreDepartmentUserAdd" || prop.path==="/organizationStoreDepartmentUser" || prop.path==="/organizationStoreDepartmentEdit" || prop.path==="/organizationStoreDepartmentAdd" || prop.path==="/organizationStoreDepartment" || prop.path==="/organizationSurveyEdit" || prop.path==="/organizationDepartmentEditUser" || prop.path==="/organizationQuestionBanksAdd" || prop.path==="/organizationDepartmentAddUser" || prop.path==="/organizationDepartmentUser" || prop.path==="/organizationDepartmentEdit" || prop.path==="/organizationDepartmentAdd" || prop.path==="/SurveyEdit" || prop.path==="/QuestionBanksAdd" || prop.path==="/organizationEditSurvey" || prop.path==="/QuestionBanks" || prop.path==="/SurveyForm" || prop.path==="/Survey" || prop.path==="/organizationAddDepartment" || prop.path==="/organizationAddStore" || prop.path==="/organizationEditDepartment" || prop.path==="/organizationEditStore" || prop.path==="/organizationEdit" || prop.path==="/organizationEditUser" || prop.path==="/organizationAddUser" || prop.path==="/organizationSurveyForm" || prop.path==="/organizationQuestionBank" || prop.path==="/organizationStepper" || prop.path==="/organizationSurveyUser" || prop.path==="/organizationExecutives" || prop.path==="/organizationsDepartmentManager" ||  prop.path==="/UserProfile"|| prop.path==="/organizationQuestionBanks"|| prop.path==="/survey_user" || prop.path==="/organizationUser" || prop.path==="/typography" || prop.path==="/survey_user" ||prop.path==="/reporting/comments" || prop.path==="/DetailedReport"|| prop.path==="/reporting/Participation" ||prop.path==="/reporting/Question" ||prop.path==="/reporting/yourPulse" ||prop.path==="/organizationStore" || prop.path==="/reporting" || prop.path==="/organizationDepartment" || prop.path==="/login" || prop.path === "/organizationSurvey") {
//   //   return null
//   //   }
//   // }
//   //   else if (props.authentication.user_type == "GM"){
//   //     if(prop.path==="/organizationSummary" || prop.path==="/organizationsStrategyChart" || prop.path==="/organizationsGoalDetails" || prop.path==="/organizationStoreKpiDepartment" || prop.path==="/scoreCardReportsGraph" || prop.path==="/organizationsKpiGraph" || prop.path==="/organizationsKpiDepartmentManager" || prop.path==="/organizationEditKpiDepartment" || prop.path==="/organizationDepartmentEditKpi" || prop.path==="/organizationStoreDepartmentEditKpi" || prop.path==="/organizationDepartmentAddKpi" || prop.path==="/organizationStoreDepartmentAddKpi" || prop.path==="/organizationAddKpiDepartment" || prop.path==="/organizationKpiDepartment" || prop.path==="/scoreCardReports" || prop.path==="/organizationSubKpi" || prop.path==="/organizationStoreSurveyUser" || prop.path==="/organizationQuestionBanksAdd" || prop.path==="/organizationStoreQuestionBanksAdd" || prop.path==="/organizationStoreQuestionBanks" || prop.path==="/organizationQuestionBanks" || prop.path==="/organizationStoreSurveyEdit" || prop.path==="/organizationStoreSurveyForm" || prop.path==="/organizationSurvey" || prop.path==="/organizationStoreSurvey" || prop.path==="/organizationKpi" || prop.path==="/organizationStoreDepartmentUserEdit" || prop.path==="/organizationStoreEdit" || prop.path==="/organizationStoreAdd" || prop.path==="/organizationStoreDepartmentUserAdd" || prop.path==="/organizationStoreDepartmentUser" || prop.path==="/organizationStoreDepartmentEdit" || prop.path==="/organizationStoreDepartmentAdd" || prop.path==="/organizationStoreDepartment" || prop.path==="/organizationSurveyEdit" || prop.path==="/organizationDepartmentEditUser" || prop.path==="/organizationQuestionBanksAdd" || prop.path==="/organizationDepartmentAddUser" || prop.path==="/organizationDepartmentUser" || prop.path==="/organizationDepartmentEdit" || prop.path==="/organizationDepartmentAdd" || prop.path==="/SurveyEdit" || prop.path==="/QuestionBanksAdd" || prop.path==="/organizationEditSurvey" || prop.path==="/QuestionBanks" || prop.path==="/SurveyForm" || prop.path==="/Survey" || prop.path==="/organizationEditSurvey" || prop.path==="/organizationAddDepartment" || prop.path==="/organizationAddStore" || prop.path==="/organizationEditDepartment" || prop.path==="/organizationEditStore" || prop.path==="/organizationEdit" || prop.path==="/organizationEditUser" || prop.path==="/organizationAddUser" || prop.path==="/organizationSurveyForm" || prop.path==="/organizationQuestionBank" || prop.path==="/organizationStepper" || prop.path==="/organizationSurveyUser" || prop.path==="/organizationExecutives" ||  prop.path==="/organizationUser" || prop.path==="/organizationsDepartmentManager"  || prop.path==="/survey_user" ||prop.path==="/reporting/comments" || prop.path==="/DetailedReport"|| prop.path==="/reporting/Participation" ||prop.path==="/reporting/Question" ||prop.path==="/reporting/yourPulse" ||prop.path==="/organization" || prop.path==="/reporting" || prop.path==="/organizationDepartment" || prop.path==="/login" ){
//   //     return null
//   //     }
//   //     }
//   //     else if (props.authentication.user_type == "DM"){
//   //       if(prop.path==="/organizationSummary" || prop.path==="/organizationsStrategyChart" || prop.path==="/organizationsGoalDetails" || prop.path==="/organizationSurvey" ||  prop.path==="/organizationQuestionBanks" || prop.path==="/organizationStoreKpiDepartment" || prop.path==="/scoreCardReportsGraph" || prop.path==="/organizationsKpiGraph" || prop.path==="/organizationsKpiDepartmentManager" || prop.path==="/organizationEditKpiDepartment" || prop.path==="/organizationDepartmentEditKpi" || prop.path==="/organizationStoreDepartmentEditKpi" || prop.path==="/organizationDepartmentAddKpi" || prop.path==="/organizationStoreDepartmentAddKpi" || prop.path==="/organizationAddKpiDepartment" || prop.path==="/organizationKpiDepartment" || prop.path==="/scoreCardReports" || prop.path==="/organizationSubKpi" || prop.path==="/organizationStoreSurveyUser" || prop.path==="/organizationQuestionBanksAdd" || prop.path==="/organizationStoreQuestionBanksAdd" || prop.path==="/organizationStoreQuestionBanks" || prop.path==="/organizationStoreSurveyEdit" || prop.path==="/organizationStoreSurveyForm" || prop.path==="/organizationStoreSurvey" || prop.path==="/organizationKpi" || prop.path==="/organizationStoreDepartmentUserEdit" || prop.path==="/organizationStoreEdit" || prop.path==="/organizationStoreAdd" || prop.path==="/organizationStoreDepartmentUserAdd" || prop.path==="/organizationStoreDepartmentUser" || prop.path==="/organizationStoreDepartmentEdit" || prop.path==="/organizationStoreDepartmentAdd" || prop.path==="/organizationStoreDepartment" || prop.path==="/organizationSurveyEdit" || prop.path==="/organizationDepartmentEditUser" || prop.path==="/organizationQuestionBanksAdd" || prop.path==="/organizationDepartmentAddUser" || prop.path==="/organizationDepartmentUser" || prop.path==="/organizationDepartmentEdit" || prop.path==="/organizationDepartmentAdd" || prop.path==="/SurveyEdit" || prop.path==="/QuestionBanksAdd" || prop.path==="/organizationEditSurvey" || prop.path==="/QuestionBanks" || prop.path==="/SurveyForm" || prop.path==="/Survey" || prop.path==="/organizationEditSurvey" || prop.path==="/organizationAddDepartment" || prop.path==="/organizationAddStore" || prop.path==="/organizationEditDepartment" || prop.path==="/organizationEditStore" || prop.path==="/organizationEdit" || prop.path==="/organizationEditUser" || prop.path==="/organizationAddUser" || prop.path==="/organizationSurveyForm" || prop.path==="/organizationQuestionBank" || prop.path==="/organizationStepper" || prop.path==="/organizationSurveyUser" || prop.path==="/organizationExecutives" || prop.path === "/organizationUser" ||  prop.path==="/organizationsDepartmentManager" || prop.path==="/survey_user" ||prop.path==="/reporting/comments" || prop.path==="/DetailedReport"|| prop.path==="/reporting/Participation" ||prop.path==="/reporting/Question" ||prop.path==="/reporting/yourPulse" ||prop.path==="/organizationStore" || prop.path==="/reporting" || prop.path==="/organization" || prop.path==="/login" ){
//   //       return null
//   //       }
//   //       }
//   //       else if (props.authentication.user_type == "E"){
//   //         if(prop.path==="/organizationGoals" || prop.path==="/organizationSummary" || prop.path==="/organizationsStrategyChart" || prop.path==="/organizationsGoalDetails" || prop.path==="/organizationSummary" || prop.path==="/organizationStoreKpiDepartment" || prop.path==="/scoreCardReportsGraph" || prop.path==="/organizationsKpiGraph" || prop.path==="/organizationsKpiDepartmentManager" || prop.path==="/organizationEditKpiDepartment" || prop.path==="/organizationDepartmentEditKpi" || prop.path==="/organizationStoreDepartmentEditKpi" || prop.path==="/organizationDepartmentAddKpi" || prop.path==="/organizationStoreDepartmentAddKpi" || prop.path==="/organizationAddKpiDepartment" || prop.path==="/organizationKpiDepartment" || prop.path==="/scoreCardReports" || prop.path==="/organizationSubKpi" || prop.path==="/organizationStoreSurveyUser" || prop.path==="/organizationQuestionBanksAdd" || prop.path==="/organizationStoreQuestionBanksAdd" || prop.path==="/organizationStoreQuestionBanks" || prop.path==="/organizationQuestionBanks" || prop.path==="/organizationStoreSurveyEdit" || prop.path==="/organizationStoreSurveyForm" || prop.path==="/organizationStoreSurvey" || prop.path==="/organizationKpi" || prop.path==="/organizationStoreDepartmentUserEdit" || prop.path==="/organizationStoreEdit" || prop.path==="/organizationStoreAdd" || prop.path==="/organizationStoreDepartmentUserAdd" || prop.path==="/organizationStoreDepartmentUser" || prop.path==="/organizationStoreDepartmentEdit" || prop.path==="/organizationStoreDepartmentAdd" || prop.path==="/organizationStoreDepartment" || prop.path==="/organizationSurveyEdit" || prop.path==="/organizationDepartmentEditUser" || prop.path==="/organizationDepartmentAdd" || prop.path==="/organizationQuestionBanksAdd" || prop.path==="/organizationDepartmentAddUser" || prop.path==="/organizationDepartmentUser" || prop.path==="/organizationDepartmentEdit" ||  prop.path==="/SurveyEdit" || prop.path==="/QuestionBanksAdd" || prop.path==="/SurveyEdit" || prop.path==="/organizationQuestionBanks"|| prop.path==="/organizationSurvey" || prop.path==="/SurveyForm" || prop.path==="/organizationEditSurvey" || prop.path==="/organizationAddDepartment" || prop.path==="/organizationAddStore" || prop.path==="/organizationEditDepartment" || prop.path==="/organizationEditStore" || prop.path==="/organizationEdit" || prop.path==="/organizationEditUser" || prop.path==="/organizationAddUser" || prop.path==="/organizationSurveyForm" || prop.path==="/organizationQuestionBank" || prop.path==="/organizationStepper" || prop.path==="/organizationSurveyUser" || prop.path==="/organizationExecutives" ||  prop.path==="/organizationUser" || prop.path==="/organizationsDepartmentManager"  || prop.path==="/survey_user" ||prop.path==="/reporting/comments" || prop.path==="/DetailedReport"|| prop.path==="/reporting/Participation" ||prop.path==="/reporting/Question" ||prop.path==="/reporting/yourPulse" || prop.path==="/reporting" || prop.path==="/organizationDepartment" || prop.path==="/login" || prop.path==="/organizationStore" ){
//   //           return null
//   //           }
//   //         }
//   //         // organizationSurveyEdit
//   //         else if (!props.authentication.user_type){
//   //           // if(prop.path==="/UserProfile"|| prop.path==="/questionBanks"|| prop.path==="/survey_user" || prop.path==="/user" || prop.path==="/typography" || prop.path==="/survey_user" ||prop.path==="/reporting/comments" || prop.path==="/DetailedReport"|| prop.path==="/reporting/Participation" ||prop.path==="/reporting/Question" ||prop.path==="/reporting/yourPulse" ||prop.path==="/organizationStore" || prop.path==="/reporting" || prop.path==="/organizationDepartment" || prop.path==="/login" || prop.path === "/survey") {
//   //             return null
//   //           // }
//   //           }

//   // else{

//     if (prop.redirect) return null;

//     var activePro = " ";
//     var listItemClasses;

//     // if(prop.path === "/organization"){
//     //   console.log(prop.path)
//     //   const { dispatch } = props;
//     //   dispatch(organizationAction.reloadPage(true))
//     // }

//     if (prop.path === "/login") {
//     activePro = classes.activePro + " ";
//     listItemClasses = classNames({
//     [" " + classes[color]]: true
//     });
//     }

//     else {

//     listItemClasses = classNames({
//     [" " + classes[color]]:
//     activeRoute(prop.path)
//     });
//     }

//     const whiteFontClasses = classNames({
//     [" " + classes.whiteFont]: activeRoute(prop.path)
//     });

//           return (
//             <NavLink
//               to={prop.path}
//               className={activePro + classes.item}
//               activeClassName="active"
//               key={key}
//             >
//               <ListItem button className={classes.itemLink + listItemClasses}>
//                 <ListItemIcon className={classes.itemIcon + whiteFontClasses}>
//                   {/* {typeof prop.icon === "string" ? (
//                     <Icon>{prop.icon}</Icon>
//                   ) : (
//                     <prop.icon />
//                   )
//                   } */}
//                 </ListItemIcon>
//                 <ListItemText
//                   primary={prop.sidebarName}
//                   className={classes.itemText + whiteFontClasses}
//                   disableTypography={true}
//                 />
//               </ListItem>
//             </NavLink>
//           );
//         // }



//       })}
//     </List>
//   );
//   // var brand = (
//   //   <div className={classes.logo}>
//   //     <a className={classes.logoLink}>
//   //     {/* <Route render={({ history }) => (
//   //       <div  onClick={() => {

//   //         history.push('/organization') }} 


//   //         style={{cursor:'pointer'}} className={classes.logoImage}>
//   //            <img src={dashboardlogo} alt="logo" className={classes.img} style={{
//   //              width:"100px",
//   //              marginLeft: "33px",
//   //              cursor:'pointer',
//   //              height:'40px',

//   //           }} />
//   //        </div>
//   //     )} />  */}
//   //       {/* {logoText} */}
//   //     </a>
//   //     {/* <hr style={{"border": "1px solid grey",marginTop:15}}></hr> */}
//   //   </div>
//   // );
//   var brand = (
//     // <div>
//       <Route render={({ history }) => (
//         <div style={{cursor:'pointer', marginTop: '-2em', backgroundColor:'#fff'}}>
//              <img src={"profile cover.png"} alt="logo" className={classes.img} style={{
//                width:"100%",
//                position:'relative',
//                cursor:'pointer',
//                height:'auto',

//             }} />
//             <div style={{padding:'4.5%', marginLeft:'1em', position: 'absolute', fontSize:24, backgroundColor: '#c4c4c4', borderRadius: '50%', width: '65px', height: '65px' }}>
//               <span style={{ fontSize: 24, paddingTop:'2em' }}>K C</span>
//             </div>
//             <br/>
//             <div style={{ marginTop:'5em', marginLeft: '2em' }}>
//               <h4 style={{ fontSize:'16px', fontWeight:500, color:'black' }}>Kleber Capital</h4>
//               <h6 style={{ fontSize: '14px', color:'grey', textTransform: 'capitalize'  }}>@kleberCapital</h6>
//             </div>
//             {/* <br/> */}

//             <div style={{ display:'flex', marginLeft: '2em' }}> 
//               <div>
//                 <h5 style={{ fontSize: '14px', color:'grey', textTransform: 'capitalize', fontWeight: 600,  }}>Updates</h5><br/>
//                 <h6 style={{ fontSize: '15px', color:'grey', textTransform: 'capitalize', fontWeight: 600, marginTop: '-2em', color:'blue'  }}>6</h6>
//               </div>
//               <div style={{ marginLeft:'2em' }}>
//                 <h5 style={{ fontSize: '14px', color:'grey', textTransform: 'capitalize', fontWeight: 600,  }}>Following Investors</h5><br/>
//                 <h6 style={{ fontSize: '15px', color:'grey', textTransform: 'capitalize', fontWeight: 600, marginTop: '-2em', color:'blue'  }}>6</h6>
//               </div>
//             </div>
//          </div>
//       )} /> 
//     // </div>
//   );
//   return (
//     <div>
//       <Hidden mdUp implementation="css">
//         <Drawer
//           variant="temporary"
//           anchor="right"
//           open={props.open}
//           classes={{
//             paper: classes.drawerPaper
//           }}
//           onClose={props.handleDrawerToggle}
//           ModalProps={{
//             keepMounted: true // Better open performance on mobile.
//           }}
//         >
//           {brand}
//           <div className={classes.sidebarWrapper}>
//             {/* <HeaderLinks /> */}
//             {links}
//           </div>
//           {/* {image !== undefined ? (
//             <div
//               className={classes.background}
//               // style={{ backgroundImage: "url(" + image + ")" }}
//             />
//           ) : null} */}
//         </Drawer>
//       </Hidden>
//       <Hidden smDown implementation="css">
//         <Drawer
//           anchor="left"
//           variant="permanent"
//           open
//           classes={{
//             paper: classes.drawerPaper
//           }}
//         >
//           {brand}
//           <div className={classes.sidebarWrapper}>{links}</div>
//           {image !== undefined ? (
//             <div
//               className={classes.background}
//               // style={{ backgroundImage: "url(" + image + ")" }}
//             />
//           ) : null}
//         </Drawer>
//       </Hidden>
//     </div>
//   );
// };

// Sidebar.propTypes = {
//   classes: PropTypes.object.isRequired
// };
// const mapStateToProps = (state) => {
//   return state;
// }

// export default withRouter(withStyles(sidebarStyle)(Sidebar));

/*eslint-disable*/
import React from "react";
import PropTypes from "prop-types";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
import { NavLink } from "react-router-dom";
import cx from "classnames";
import './sidebar.css'

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Hidden from "@material-ui/core/Hidden";
import Collapse from "@material-ui/core/Collapse";
import Icon from "@material-ui/core/Icon";
import profile_cover from 'assets/img/profile cover.png'
// core components
import AdminNavbarLinks from "components/Navbars/AdminNavbarLinks.js";
import Chip from '@material-ui/core/Chip';


import sidebarStyle from "assets/jss/material-dashboard-pro-react/components/sidebarStyle.jsx";

import avatar from "assets/img/faces/avatar.jpg";

var ps;

// We've created this component so we can have a ref to the wrapper of the links that appears in our sidebar.
// This was necessary so that we could initialize PerfectScrollbar on the links.
// There might be something with the Hidden component from material-ui, and we didn't have access to
// the links, and couldn't initialize the plugin.
class SidebarWrapper extends React.Component {
  sidebarWrapper = React.createRef();
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(this.sidebarWrapper.current, {
        suppressScrollX: true,
        suppressScrollY: false
      });
    }
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
    }
  }
  render() {
    const { className, user, headerLinks, links } = this.props;
    return (
      <div className={className} ref={this.sidebarWrapper}>
        {user}
        {headerLinks}
        {links}
      </div>
    );
  }
}

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openAvatar: false,
      miniActive: true,
      ...this.getCollapseStates(props.routes)
    };
  }
  mainPanel = React.createRef();
  // this creates the intial state of this component based on the collapse routes
  // that it gets through this.props.routes
  getCollapseStates = routes => {
    let initialState = {};
    routes.map(prop => {
      if (prop.collapse) {
        initialState = {
          [prop.state]: this.getCollapseInitialState(prop.views),
          ...this.getCollapseStates(prop.views),
          ...initialState
        };
      }
      return null;
    });
    return initialState;
  };
  // this verifies if any of the collapses should be default opened on a rerender of this component
  // for example, on the refresh of the page,
  // while on the src/views/forms/RegularForms.jsx - route /admin/regular-forms
  getCollapseInitialState(routes) {
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].collapse && this.getCollapseInitialState(routes[i].views)) {
        return true;
      } else if (window.location.href.indexOf(routes[i].path) !== -1) {
        return true;
      }
    }
    return false;
  }
  // verifies if routeName is the one active (in browser input)
  activeRoute = routeName => {
    return window.location.href.indexOf(routeName) > -1 ? "active" : "";
  };
  openCollapse(collapse) {
    var st = {};
    st[collapse] = !this.state[collapse];
    this.setState(st);
  }
  // this function creates the links and collapses that appear in the sidebar (left menu)
  createLinks = routes => {
    const { classes, color, rtlActive } = this.props;
    return routes.map((prop, key) => {
      if (prop.redirect) {
        return null;
      }
      if (prop.collapse) {
        var st = {};
        st[prop["state"]] = !this.state[prop.state];
        const navLinkClasses =
          classes.itemLink +
          " " +
          cx({
            [" " + classes.collapseActive]: this.getCollapseInitialState(
              prop.views
            )
          });
        const itemText =
          classes.itemText +
          " " +
          cx({
            [classes.itemTextMini]:
              this.props.miniActive && this.state.miniActive,
            [classes.itemTextMiniRTL]:
              rtlActive && this.props.miniActive && this.state.miniActive,
            [classes.itemTextRTL]: rtlActive
          });
        const collapseItemText =
          classes.collapseItemText +
          " " +
          cx({
            [classes.collapseItemTextMini]:
              this.props.miniActive && this.state.miniActive,
            [classes.collapseItemTextMiniRTL]:
              rtlActive && this.props.miniActive && this.state.miniActive,
            [classes.collapseItemTextRTL]: rtlActive
          });
        const itemIcon =
          classes.itemIcon +
          " " +
          cx({
            [classes.itemIconRTL]: rtlActive
          });
        const caret =
          classes.caret +
          " " +
          cx({
            [classes.caretRTL]: rtlActive
          });
        const collapseItemMini =
          classes.collapseItemMini +
          " " +
          cx({
            [classes.collapseItemMiniRTL]: rtlActive
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
                this.setState(st);
              }}
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
                secondary={
                  <b
                    className={
                      caret +
                      " " +
                      (this.state[prop.state] ? classes.caretActive : "")
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
                {this.createLinks(prop.views)}
              </List>
            </Collapse>
          </ListItem>
        );
      }
      const innerNavLinkClasses =
        classes.collapseItemLink +
        " " +
        cx({
          [" " + classes[color]]: this.activeRoute(prop.path)
        });
      const collapseItemMini =
        classes.collapseItemMini +
        " " +
        cx({
          [classes.collapseItemMiniRTL]: rtlActive
        });
      const navLinkClasses =
        classes.itemLink +
        " " +
        cx({
          [" " + classes[color]]: this.activeRoute(prop.path)
        });
      const itemText =
        classes.itemText +
        " " +
        cx({
          [classes.itemTextMini]:
            this.props.miniActive && this.state.miniActive,
          [classes.itemTextMiniRTL]:
            rtlActive && this.props.miniActive && this.state.miniActive,
          [classes.itemTextRTL]: rtlActive
        });
      const collapseItemText =
        classes.collapseItemText +
        " " +
        cx({
          [classes.collapseItemTextMini]:
            this.props.miniActive && this.state.miniActive,
          [classes.collapseItemTextMiniRTL]:
            rtlActive && this.props.miniActive && this.state.miniActive,
          [classes.collapseItemTextRTL]: rtlActive
        });
      const itemIcon =
        classes.itemIcon +
        " " +
        cx({
          [classes.itemIconRTL]: rtlActive
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
  render() {
    const {
      classes,
      logo,
      image,
      logoText,
      routes,
      bgColor,
      rtlActive
    } = this.props;
    const itemText =
      classes.itemText +
      " " +
      cx({
        [classes.itemTextMini]: this.props.miniActive && this.state.miniActive,
        [classes.itemTextMiniRTL]:
          rtlActive && this.props.miniActive && this.state.miniActive,
        [classes.itemTextRTL]: rtlActive
      });
    const collapseItemText =
      classes.collapseItemText +
      " " +
      cx({
        [classes.collapseItemTextMini]:
          this.props.miniActive && this.state.miniActive,
        [classes.collapseItemTextMiniRTL]:
          rtlActive && this.props.miniActive && this.state.miniActive,
        [classes.collapseItemTextRTL]: rtlActive
      });
    const userWrapperClass =
      classes.user +
      " " +
      cx({
        [classes.whiteAfter]: bgColor === "white"
      });
    const caret =
      classes.caret +
      " " +
      cx({
        [classes.caretRTL]: rtlActive
      });
    const collapseItemMini =
      classes.collapseItemMini +
      " " +
      cx({
        [classes.collapseItemMiniRTL]: rtlActive
      });
    const photo =
      classes.photo +
      " " +
      cx({
        [classes.photoRTL]: rtlActive
      });
    var user = (
      <div className={userWrapperClass}>
        <List className={classes.list}>
          <ListItem className={classes.item + " " + classes.userItem}>
            <NavLink
              to={"#"}
              className={classes.itemLink + " " + classes.userCollapseButton}
              onClick={() => this.openCollapse("openAvatar")}
            >
              
            </NavLink>
            <Collapse in={this.state.openAvatar} unmountOnExit>
              <List className={classes.list + " " + classes.collapseList}>
                <ListItem className={classes.collapseItem}>
                  <NavLink
                    to="#"
                    className={
                      classes.itemLink + " " + classes.userCollapseLinks
                    }
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
                    className={
                      classes.itemLink + " " + classes.userCollapseLinks
                    }
                  >
                    <span className={collapseItemMini}>
                      {rtlActive ? "هوع" : "EP"}
                    </span>
                    <ListItemText
                      primary={
                        rtlActive ? "تعديل الملف الشخصي" : "Edit Profile"
                      }
                      disableTypography={true}
                      className={collapseItemText}
                    />
                  </NavLink>
                </ListItem>
                <ListItem className={classes.collapseItem}>
                  <NavLink
                    to="#"
                    className={
                      classes.itemLink + " " + classes.userCollapseLinks
                    }
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
    var links = (
      <List className={classes.list}>{this.createLinks(routes)}</List>
    );

    const logoNormal =
      classes.logoNormal +
      " " +
      cx({
        [classes.logoNormalSidebarMini]:
          this.props.miniActive && this.state.miniActive,
        [classes.logoNormalSidebarMiniRTL]:
          rtlActive && this.props.miniActive && this.state.miniActive,
        [classes.logoNormalRTL]: rtlActive
      });
    const logoMini =
      classes.logoMini +
      " " +
      cx({
        [classes.logoMiniRTL]: rtlActive
      });
    const logoClasses =
      classes.logo +
      " " +
      cx({
        [classes.whiteAfter]: bgColor === "white"
      });
    var brand = (
      // <div>
        <div style={{ cursor: 'pointer', marginTop: '-2.5em', backgroundColor: '#fff' }}>
          <img src={profile_cover} alt="logo" className={classes.img} style={{
            width: "100%",
            position: 'relative',
            cursor: 'pointer',
            height: 'auto',

          }} />
          <div style={{ padding: '4.5%', marginLeft: '1em', position: 'absolute', fontSize: 24, backgroundColor: '#c4c4c4', borderRadius: '50%', width: '65px', height: '65px' }}>
            <span style={{ fontSize: 24, paddingTop: '2em' }}>K C</span>
          </div>
          <br />
          <div style={{ marginTop: '8em', marginLeft: '2em' }}>
            <h4 style={{ fontSize: '16px', fontWeight: 500, color: 'black' }}>Kleber C2apital</h4>
            <h6 style={{ fontSize: '14px', color: 'grey', textTransform: 'capitalize' }}>@kleberCapital</h6>
          </div>
          {/* <br/> */}

          <div style={{ display: 'flex', marginLeft: '2em' }}>
            <div>
              <h5 style={{ fontSize: '14px', color: 'grey', textTransform: 'capitalize', fontWeight: 600, }}>Updates</h5><br />
              <h6 style={{ fontSize: '15px', color: 'grey', textTransform: 'capitalize', fontWeight: 600, marginTop: '-2em', color: 'blue' }}>6</h6>
            </div>
            <div style={{ marginLeft: '2em' }}>
              <h5 style={{ fontSize: '14px', color: 'grey', textTransform: 'capitalize', fontWeight: 600, }}>Following Investors</h5><br />
              <h6 style={{ fontSize: '15px', color: 'grey', textTransform: 'capitalize', fontWeight: 600, marginTop: '-2em', color: 'blue' }}>6</h6>
            </div>
          </div>
        </div>
      // </div>
    );
    const drawerPaper =
      classes.drawerPaper +
      " " +
      cx({
        [classes.drawerPaperMini]:
          this.props.miniActive && this.state.miniActive,
        [classes.drawerPaperRTL]: rtlActive
      });
    const sidebarWrapper =
      classes.sidebarWrapper +
      " " +
      cx({
        [classes.drawerPaperMini]:
          this.props.miniActive && this.state.miniActive,
        [classes.sidebarWrapperWithPerfectScrollbar]:
          navigator.platform.indexOf("Win") > -1
      });
    return (
      <div ref={this.mainPanel}>
        <Hidden mdUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={rtlActive ? "left" : "right"}
            open={this.props.open}
            classes={{
              paper: drawerPaper + " " + classes[bgColor + "Background"]
            }}
            onClose={this.props.handleDrawerToggle}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
           
           <div style={{fontSize:16, color:"black", backgroundColor:"white", padding:"16px"}}>
             {/* <p></p> */}
           <p class="side1" > Current Investors </p>
           <p class="side1"> Prospective Investors </p>
           <p class="side1">  Requests </p>
           <hr/>
           <Chip
        variant="outlined"
        size="small"
        label="Invite"
        clickable
        color="primary"
          />
           <p style={{color:"blue", fontSize:14}}>..or import connections</p>
            </div>
            {/* <SidebarWrapper
              className={sidebarWrapper}
              user={user}
              headerLinks={<AdminNavbarLinks rtlActive={rtlActive} />}
              links={links}
            /> */}
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
            onMouseOver={() => this.setState({ miniActive: false })}
            onMouseOut={() => this.setState({ miniActive: true })}
            anchor={rtlActive ? "right" : "left"}
            variant="permanent"
            open
            classes={{
              paper: drawerPaper + " " + classes[bgColor + "Background"]
            }}
          >
           
           <div style={{fontSize:16, color:"black", backgroundColor:"white" , padding:"16px"}}>
             {/* <p></p> */}
           <p class="side1" > Current Investors </p>
           <p class="side1"> Prospective Investors </p>
           <p class="side1">  Requests </p>
           <hr/>
           <Chip
        variant="outlined"
        size="small"
        label="Invite"
        clickable
        color="primary"
          />
           <p style={{color:"blue", fontSize:14}}>..or import connections</p>
            </div>
          
            {/* <SidebarWrapper
              className={sidebarWrapper}
              user={user}
              links={links}
            /> */}
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
}

Sidebar.defaultProps = {
  bgColor: "blue"
};

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired,
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
