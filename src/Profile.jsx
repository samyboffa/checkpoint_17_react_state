import React, { Component } from "react";
let d = new Date();
let time = "";
const jour = (x) => {
    switch (x) {
        case 0:
            return "sunday";
            break;
        case 1:
            return "monday";
            break;
        case 0:
            return "tuesday";
            break;
        case 0:
            return "wedenesday";
            break;
        case 0:
            return "thursday";
            break;
        case 0:
            return "friday";
            break;
        case 0:
            return "saturday";
            break;
    }
};
var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
export default class Profile extends React.Component {
    getData() {
        setTimeout(() => {
            time = `component rendered in ${jour(d.getDay())}, ${
                months[d.getMonth()]
            }, ${d.getDate()} ${d.getFullYear()} at ${d.getHours()}h ${d.getMinutes()}mn ${d.getSeconds()}s`;
            this.setState({
                data: time,
            });
        }, 1000);
    }
    componentDidMount() {
        this.getData();
    }

    render() {
        return (
            <div id="profile">
                <h3>Name : {this.props.fullName}</h3>
                <p>{this.props.bio}</p>
                <p>{this.props.profession}</p>
                <p>
                    <img src={this.props.photo}></img>
                </p>
                <p>{time}</p>
            </div>
        );
    }
}
export { time };
