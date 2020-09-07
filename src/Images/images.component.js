import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Button, Paper } from '@material-ui/core';
import { connect } from 'react-redux';
import { userActions } from '../_actions';
import { history } from '../_helpers';
import { withRouter } from 'react-router-dom';
import config from '../config/config';
import './images.component.css'


const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing.unit,
    },
    withoutLabel: {
        marginTop: theme.spacing.unit * 3,
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },

    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },

    button: {
        margin: theme.spacing.unit,
    },

    input: {
        display: 'none',
    },
});


class Images extends Component {

    constructor(props) {
        super(props);
        this.state = {
            files: this.props.authentication.images,
            show: false,
            images: []
        }
    }

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(userActions.saveError(""))
    }

    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
    };

    login = event => {
        this.setState({ submitted: true });
        const { username, password } = this.state;
        const { dispatch } = this.props;
        if (username && password) {
            dispatch(userActions.login(username, password));
        }
    }

    handleImageChange = (e) => {
        let files = e.target.files
        console.log(files)

        this.setState({
            files
        })
    }

    handleClick = () => {
        const { dispatch } = this.props;
        dispatch(userActions.saveError(""))
        var formData = new FormData();
        for (const key of Object.keys(this.state.files)) {
            formData.append('images', this.state.files[key])
        }
        dispatch(userActions.uploadImages(formData));
        console.log(this.props.authentication.images.length, this.props.authentication.images)
        this.setState({
            images: this.props.authentication.images
        }, () => {
            console.log(this.state.images)
            this.state.show = true
        })
    }

    render() {
        const { classes } = this.props;
        return (
            <div className="login-margin">
                <Grid className="">
                    <input className="text-center m-auto" type="file" multiple onChange={this.handleImageChange} ></input>< br />
                    <Button onClick={this.handleClick} className="btnSubmit">Submit</Button><br />
                    <span style={{ color: "red" }}>{this.props.authentication.errorMsg}</span>
                    <div style={{ display: 'flex', flexWrap: 'wrap', }}>
                        {
                            this.state.images.map((data, index) => (
                                <Paper class="col-md-3" elevation={2} >
                                    <img style={{ margin: "3%" }} src={config.baseUrl + "/images/" + data} width="200px" height="200px" alt="img" />
                                </Paper>
                            ))
                        }
                    </div>
                </Grid>
            </div>
        );
    }
}

Images.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
    return state
}

const connectedLoginPage = withRouter(connect(mapStateToProps, null, null, {
    pure: false
})(withStyles(styles)(Images)));

export { connectedLoginPage as Images };