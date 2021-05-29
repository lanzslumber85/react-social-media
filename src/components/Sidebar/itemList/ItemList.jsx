import React from "react";
import DashboardIcon from "@material-ui/icons/Dashboard";
import WebIcon from "@material-ui/icons/Web";
// import GroupIcon from "@material-ui/icons/Group";
// import PermMediaIcon from "@material-ui/icons/PermMedia";
import SettingsIcon from "@material-ui/icons/Settings";
import EditIcon from "@material-ui/icons/Edit";
import VisibilityIcon from "@material-ui/icons/Visibility";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
// import PhotoAlbumIcon from "@material-ui/icons/PhotoAlbum";
// import VideocamIcon from "@material-ui/icons/Videocam";

export const ItemList = [
    {
        title: "Dashboard",
        icon: <DashboardIcon fontSize="small" />,
        pathname: "/poyo/dashboard",
        subNav: [],
    },
    {
        title: "Browse",
        icon: <WebIcon fontSize="small" />,
        pathname: "/poyo/browse",
        subNav: [],
    },
    {
        title: "Settings",
        icon: <SettingsIcon fontSize="small" />,
        iconClosed: <ArrowDropDownIcon fontSize="small" />,
        iconOpened: <ArrowDropUpIcon fontSize="small" />,
        subNav: [
            {
                title: "Edit Profile",
                icon: <EditIcon fontSize="small" />,
                pathname: "/poyo/settings/editProfile",
            },
            {
                title: "Change Password",
                icon: <VisibilityIcon fontSize="small" />,
                pathname: "/poyo/settings/changePassword",
            },
        ],
    },

    // {
    //     title: "Friends",
    //     icon: <GroupIcon fontSize="small" />,
    //     pathname: "/poyo/friends",
    //     subNav: [],
    // },
    // {
    //     title: "Media",
    //     icon: <PermMediaIcon fontSize="small" />,
    //     iconClosed: <ArrowDropDownIcon fontSize="small" />,
    //     iconOpened: <ArrowDropUpIcon fontSize="small" />,
    //     subNav: [
    //         {
    //             title: "Albums",
    //             icon: <PhotoAlbumIcon fontSize="small" />,
    //             pathname: "/poyo/media/albums",
    //         },
    //         {
    //             title: "Videos",
    //             icon: <VideocamIcon fontSize="small" />,
    //             pathname: "/poyo/media/videos",
    //         },
    //     ],
    // },
];
