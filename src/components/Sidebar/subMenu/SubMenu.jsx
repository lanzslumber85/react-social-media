import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./SubMenu.css";

class SubMenu extends Component {
    state = {
        subnav: false,
    };

    handleToggleSubNavigation = item => {
        if (item.subNav) {
            const subnav = !this.state.subnav;
            this.setState({
                subnav: subnav,
            });
        }
    };

    render() {
        const { subnav } = this.state;
        const { item } = this.props;
        const { handleToggleSubNavigation } = this;

        return (
            <>
                <Link to={item.pathname}>
                    <div
                        className="nav-link"
                        id={
                            window.location.pathname === item.pathname
                                ? "active"
                                : ""
                        }
                        onClick={() => handleToggleSubNavigation(item)}
                    >
                        <div id="icon">{item.icon}</div>
                        <div id="title">{item.title}</div>
                        <div id="dropdownArrow">
                            {subnav
                                ? item.iconOpened
                                : item.subNav
                                ? item.iconClosed
                                : null}
                        </div>
                    </div>
                </Link>

                {subnav &&
                    item.subNav.map((item, index) => {
                        return (
                            <Link to={item.pathname} key={index}>
                                <div
                                    className="nav-link"
                                    id={
                                        window.location.pathname ===
                                        item.pathname
                                            ? "active2"
                                            : ""
                                    }
                                >
                                    <div id="icon2">{item.icon}</div>
                                    <div id="title2">{item.title}</div>
                                </div>
                            </Link>
                        );
                    })}
            </>
        );
    }
}

export default SubMenu;
