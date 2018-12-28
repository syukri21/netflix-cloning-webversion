import React from "react";
import {
  Paper,
  withStyles,
  Grid,
  TextField,
  Button,
  FormControlLabel,
  Checkbox
} from "@material-ui/core";
import { Face, Mail, Lock } from "@material-ui/icons";
import { Link, withRouter } from "react-router-dom";
import validator from "validator";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";

import { USER_REGISTER } from "../../../../redux/actions/user";
import { styles } from "./styles";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Divider from "@material-ui/core/Divider";

class LoginTab extends React.Component {
  state = {
    mail: null,
    username: null,
    password: null,
    confirmPassword: null,
    agreement: false,
    open: false,
    openAgreement: false,
    error: null
  };

  handleChangeText = target => e => {
    this.setState({
      [target]: e.target.value
    });
  };

  handleAgreement = () =>
    this.setState({
      agreement: !this.state.agreement
    });

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpenAgg = () => {
    this.setState({ openAgreement: true });
  };

  handleCloseAgg = () => {
    this.setState({ openAgreement: false });
  };

  handleSignUp = async () => {
    const { mail, password, confirmPassword, username, agreement } = this.state;
    if (password !== confirmPassword) {
      this.setState({
        error: "password not equal !"
      });
      this.handleOpen();
      return;
    }
    if (!validator.isEmail(mail || "gakvalid")) {
      this.setState({
        error: `${mail} is not a valid email.`
      });
      this.handleOpen();
      return;
    }
    if (!agreement) {
      this.setState({
        error: `check agreement first`
      });
      this.handleOpen();
      return;
    }

    if (!password) {
      this.setState({
        error: `isi password terlebih dahulu`
      });
      this.handleOpen();
      return;
    }

    if (!password) {
      this.setState({
        error: `isi username terlebih dahulu`
      });
      this.handleOpen();
      return;
    }
    await this.props.dispatch(
      USER_REGISTER(username, username, mail, password)
    );
    alert(this.props.user.regist && this.props.user.regist.message);
    this.props.user.regist &&
      this.props.user.regist &&
      this.props.history.push("/login");
  };

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.padding}>
        <div className={classes.margin}>
          <Grid container spacing={8} alignItems="flex-end">
            <Grid item>
              <Mail style={{ color: "#e84393" }} />
            </Grid>
            <Grid item md={true} sm={true} xs={true}>
              <TextField
                label="E-Mail"
                type="email"
                onChange={this.handleChangeText("mail")}
                fullWidth
                autoFocus
                required
                color="primary"
              />
            </Grid>
          </Grid>
          <Grid container spacing={8} alignItems="flex-end">
            <Grid item>
              <Face style={{ color: "#e84393" }} />
            </Grid>
            <Grid item md={true} sm={true} xs={true}>
              <TextField
                label="Username"
                type="text"
                onChange={this.handleChangeText("username")}
                fullWidth
                autoFocus
                required
                color="primary"
              />
            </Grid>
          </Grid>
          <Grid container spacing={8} alignItems="flex-end">
            <Grid item>
              <Lock style={{ color: "#e84393" }} />
            </Grid>
            <Grid item md={true} sm={true} xs={true}>
              <TextField
                label="Password"
                type="password"
                onChange={this.handleChangeText("password")}
                fullWidth
                required
                color="primary"
              />
            </Grid>
          </Grid>
          <Grid container spacing={8} alignItems="flex-end">
            <Grid item>
              <Lock style={{ color: "#e84393" }} />
            </Grid>
            <Grid item md={true} sm={true} xs={true}>
              <TextField
                label="Confirm Password"
                type="password"
                onChange={this.handleChangeText("confirmPassword")}
                fullWidth
                required
                color="primary"
              />
            </Grid>
          </Grid>
          <Grid
            container
            alignItems="flex-end"
            justify="space-between"
            style={{ minWidth: 400 }}
          >
            <Grid item>
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    checked={this.state.agreement}
                    onClick={this.handleAgreement}
                  />
                }
                label={
                  <Typography variant="subtitle2" style={{ color: "black" }} onClick={this.state.agreement?"":this.handleOpenAgg}>
                    agreement terms
                  </Typography>
                }
              />
            </Grid>
          </Grid>
          <Grid container justify="center" style={{ marginTop: "10px" }}>
            <Button
              variant="contained"
              color="secondary"
              style={{ textTransform: "none" }}
              onClick={this.handleSignUp}
            >
              Sign up
            </Button>
          </Grid>
          <Grid container justify="flex-end" style={{ marginTop: "10px" }}>
            <Link to="/login">
              <Button color="primary" style={{ textTransform: "none" }}>
			  		Already have an account? Login here
              </Button>
            </Link>
          </Grid>
        </div>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle
            id="alert-dialog-title"
            style={{ flexDirection: "column" }}
          >
            <p style={{ color: "#e84393" }}>
              INFO &nbsp;
              <span>
                <b>!</b>
              </span>
            </p>
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Something when wrong, Please try again.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="secondary" autoFocus>
              Close
            </Button>
          </DialogActions>
        </Dialog>

        <Dialog
          open={this.state.openAgreement}
          onClose={this.handleCloseAgg}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle
            id="alert-dialog-title"
            style={{ flexDirection: "column" }}
          >
            <h3 style={{ color: "#e84393" }}>
				animeflix.id
            </h3>
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <h1>Terms of Service ("Terms")</h1>

              <p>Last updated: December 28, 2018</p>

              <p>
                Please read these Terms of Service ("Terms", "Terms of Service")
                carefully before using the http://animeflix.id website (the
                "Service") operated by Animeflix.id ("us", "we", or "our").
              </p>

              <p>
                Your access to and use of the Service is conditioned on your
                acceptance of and compliance with these Terms. These Terms apply
                to all visitors, users and others who access or use the Service.
              </p>

              <p>
                By accessing or using the Service you agree to be bound by these
                Terms. If you disagree with any part of the terms then you may
                not access the Service. The Terms of Service agreement for
                Animeflix.id is based on the{" "}
                <a href="https://termsfeed.com/blog/sample-terms-of-service-template/">
                  TermsFeed's Terms of Service Template
                </a>
                .
              </p>

              <h2>Accounts</h2>

              <p>
                When you create an account with us, you must provide us
                information that is accurate, complete, and current at all
                times. Failure to do so constitutes a breach of the Terms, which
                may result in immediate termination of your account on our
                Service.
              </p>

              <p>
                You are responsible for safeguarding the password that you use
                to access the Service and for any activities or actions under
                your password, whether your password is with our Service or a
                third-party service.
              </p>

              <p>
                You agree not to disclose your password to any third party. You
                must notify us immediately upon becoming aware of any breach of
                security or unauthorized use of your account.
              </p>

              <h2>Links To Other Web Sites</h2>

              <p>
                Our Service may contain links to third-party web sites or
                services that are not owned or controlled by Animeflix.id.
              </p>

              <p>
                Animeflix.id has no control over, and assumes no responsibility
                for, the content, privacy policies, or practices of any third
                party web sites or services. You further acknowledge and agree
                that Animeflix.id shall not be responsible or liable, directly
                or indirectly, for any damage or loss caused or alleged to be
                caused by or in connection with use of or reliance on any such
                content, goods or services available on or through any such web
                sites or services.
              </p>

              <p>
                We strongly advise you to read the terms and conditions and
                privacy policies of any third-party web sites or services that
                you visit.
              </p>

              <h2>Termination</h2>

              <p>
                We may terminate or suspend access to our Service immediately,
                without prior notice or liability, for any reason whatsoever,
                including without limitation if you breach the Terms.
              </p>

              <p>
                All provisions of the Terms which by their nature should survive
                termination shall survive termination, including, without
                limitation, ownership provisions, warranty disclaimers,
                indemnity and limitations of liability.
              </p>

              <p>
                We may terminate or suspend your account immediately, without
                prior notice or liability, for any reason whatsoever, including
                without limitation if you breach the Terms.
              </p>

              <p>
                Upon termination, your right to use the Service will immediately
                cease. If you wish to terminate your account, you may simply
                discontinue using the Service.
              </p>

              <p>
                All provisions of the Terms which by their nature should survive
                termination shall survive termination, including, without
                limitation, ownership provisions, warranty disclaimers,
                indemnity and limitations of liability.
              </p>

              <h2>Governing Law</h2>

              <p>
                These Terms shall be governed and construed in accordance with
                the laws of Indonesia, without regard to its conflict of law
                provisions.
              </p>

              <p>
                Our failure to enforce any right or provision of these Terms
                will not be considered a waiver of those rights. If any
                provision of these Terms is held to be invalid or unenforceable
                by a court, the remaining provisions of these Terms will remain
                in effect. These Terms constitute the entire agreement between
                us regarding our Service, and supersede and replace any prior
                agreements we might have between us regarding the Service.
              </p>

              <h2>Changes</h2>

              <p>
                We reserve the right, at our sole discretion, to modify or
                replace these Terms at any time. If a revision is material we
                will try to provide at least 30 days notice prior to any new
                terms taking effect. What constitutes a material change will be
                determined at our sole discretion.
              </p>

              <p>
                By continuing to access or use our Service after those revisions
                become effective, you agree to be bound by the revised terms. If
                you do not agree to the new terms, please stop using the
                Service.
              </p>

              <h2>Contact Us</h2>

              <p>
                If you have any questions about these Terms, please contact us
              </p>
			  <a href="mailto:animeflix.id@gmail.com">animeflix.id@gmail.com</a> 
            </DialogContentText>
          </DialogContent>
          <DialogActions>
          </DialogActions>
        </Dialog>
      </Paper>
    );
  }
}

const mapStateToProps = state => ({
  user: state.userReducer
});

const withConnectLoginTab = connect(mapStateToProps)(LoginTab);
const withRouterLoginTab = withRouter(withConnectLoginTab);

export default withStyles(styles)(withRouterLoginTab);
