import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { authUser } from '../stores/userStore/actions';

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  },
  errorMessage: {
    color: theme.palette.secondary.main,
    marginTop: theme.spacing.unit * 3
  }
});

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.classes = props.classes;
  }

  setEmail(e) {
    this.setState({ email: e.target.value });
  }
  setPassword(e) {
    this.setState({ password: e.target.value });
  }
  login() {
    // エラーが起きたらエラーメッセージを出す
    // リクエストを送って情報を取得できたらタイムラインへ移動する。
    this.props.authUser({
      email: this.state.email,
      password: this.state.password
    });
  }

  render() {
    return (
      <main className={this.classes.main}>
        <CssBaseline />
        <Paper className={this.classes.paper}>
          {/* <Avatar className={this.classes.avatar} /> */}
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={this.classes.form}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Email Address</InputLabel>
              <Input
                id="email"
                name="email"
                autoFocus
                value={this.state.email}
                onChange={e => this.setEmail(e)}
              />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                name="password"
                type="password"
                id="password"
                value={this.state.password}
                onChange={e => this.setPassword(e)}
              />
            </FormControl>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={this.classes.submit}
              onClick={() => this.login()}>
              Sign in
            </Button>
          </form>
          <div className={this.classes.errorMessage}>
            {this.props.loginErrorMessage}
          </div>
        </Paper>
      </main>
    );
  }
}

SignIn.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    user: state.user.user,
    loginErrorMessage: state.user.loginErrorMessage
  };
};

const mapDiapatchToProps = dispatch => {
  return {
    authUser: async authRequestData => dispatch(authUser(authRequestData))
  };
};

export default connect(
  mapStateToProps,
  mapDiapatchToProps
)(withStyles(styles)(SignIn));
