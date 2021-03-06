import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';
import { withRouter } from "react-router-dom";

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'Sign In',
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
        login: (user) => dispatch(login(user))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionForm));
