
import twitter from "../assets/svg/twitter.svg";
import linkedIn from "../assets/svg/linkedIn.svg";
import youtube from "../assets/svg/youtube.svg";
import github from "../assets/svg/github.svg";
import github2 from "../assets/svg/github2.svg";
import coffee from "../assets/svg/coffee.svg";
import medium from "../assets/svg/medium.svg";
import medium2 from "../assets/svg/medium2.svg";
import instagram from "../assets/svg/instagram.svg";
import myjobglasses from "../assets/img/myjobglasses.png";

export function getSocialMediaIcons(dark){
    const githubIcon = dark ? github2 : github;
    const mediumIcon = dark ? medium2 : medium;
    return ([
        {
        name: "LinkedIn",
        icon: linkedIn,
        link: process.env.REACT_APP_SM_LINKEDIN,
        },
        { name: "Twitter", icon: twitter, link: process.env.REACT_APP_SM_TWITTER },
        { name: "Github", icon: githubIcon, link: process.env.REACT_APP_SM_GITHUB },
        { name: "Youtube", icon: youtube, link: process.env.REACT_APP_SM_YOUTUBE },
        { name: "Medium", icon: mediumIcon, link: process.env.REACT_APP_SM_MEDIUM },
        {
        name: "MyJobGlasses",
        icon: myjobglasses,
        link: process.env.REACT_APP_SM_MYJOBGLASSES,
        },
        {
        name: "Instagram",
        icon: instagram,
        link: process.env.REACT_APP_SM_INSTAGRAM,
        },
        { name: "Coffee", icon: coffee, link: process.env.REACT_APP_SM_BUYMECOFFEE },
    ]);
}