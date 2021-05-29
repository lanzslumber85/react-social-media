import React from "react";
import Particles from "react-particles-js";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import "./Header.css";
import handleLogout from "../../utils/handleLogout/handleLogout";
import { connect } from "react-redux";
import _signOut from "./../../redux/action/signOut";

const mapDispatchToProps = dispatch => {
    return {
        signOut: () => dispatch(_signOut()),
    };
};

class Header extends React.Component {
    logout = () => {
        handleLogout();
        this.props.signOut();
    };

    render() {
        return (
            <>
                <section className="section home-5-bg" id="home">
                    <div id="particles-js">
                        <Particles width="100%" height="28vh" />
                    </div>
                    <div className="bg-overlay"></div>
                    <div className="home-center">
                        <div className="home-desc-center">
                            <div className="container">
                                <div className="justify-content-center row">
                                    <div className="col-lg-7">
                                        <div className="mt-40 text-center home-5-content">
                                            <div className="home-icon mb-4">
                                                <i className="mdi mdi-pinwheel mdi-spin text-white h1"></i>
                                            </div>
                                            <h1 className="text-white font-weight-normal home-5-title mb-0">
                                                La Poyos
                                            </h1>
                                            <p className="text-white-70 mt-4 f-15 mb-0">
                                                Untuk golongan remaja moden...
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="logout" onClick={this.logout}>
                                    <PowerSettingsNewIcon fontSize="large" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default connect(null, mapDispatchToProps)(Header);
