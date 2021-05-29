import React from "react";
import { ItemList } from "./itemList/ItemList";
import "./Sidebar.css";
import SubMenu from "./subMenu/SubMenu";
import { connect } from "react-redux";
import { Card, CardImg, CardText, CardTitle } from "reactstrap";

const mapStateToProps = reduxState => {
    return {
        userProfile: reduxState.userProfile,
    };
};

const Sidebar = props => {
    return (
        <div className="container-fluid">
            <Card>
                <CardTitle tag="h3">
                    Hello, {props.userProfile.displayName}
                </CardTitle>
                <CardImg
                    top
                    width="100%"
                    src={props.userProfile.photoURL}
                    alt="Bootstrap Media Preview"
                />
                <CardText>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quia quidem pariatur est rem cupiditate possimus excepturi,
                    assumenda explicabo laborum, veniam et porro? Modi, nulla
                    rerum. Ipsam excepturi veniam assumenda voluptates.
                </CardText>
            </Card>

            <div className="Sidebar">
                <ul className="nav flex-column nav-pills SidebarList">
                    {ItemList.map((item, index) => {
                        return (
                            <li className="nav-item" key={index}>
                                <SubMenu item={item} key={index} />
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default connect(mapStateToProps, null)(Sidebar);
