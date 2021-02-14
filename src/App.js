import "./App.css";
import React, { Component } from "react";
import SnakePhoto from "./SnakePhoto.jpg";
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
var d = new Date();
class App extends Component {
    state = {
        fullName: "Solid Snake",
        bio:
            "Solid Snake, real name David, also known as Old Snake, and briefly known as Iroquois Pliskin, or simply Snake, was a former spy, special operations soldier, and mercenary.",
        imgSrc: { SnakePhoto },
        profession: "Spy",
        show: false,
    };
    getData() {
        setTimeout(() => {
            let fullDate = `component rendered in ${jour(d.getDay())}, ${
                months[d.getMonth()]
            }, ${d.getDate()} ${d.getFullYear()} at ${d.getHours()}h ${d.getMinutes()}mn ${d.getSeconds()}s`;
            this.setState({
                data: fullDate,
            });
        }, 1000);
    }
    componentDidMount() {
        this.getData();
    }

    render() {
        return (
            <div id="comp">
                <h1>React State </h1>
                <div
                    id="profile"
                    style={{ display: this.state.show ? "block" : "none" }}
                >
                    <h3>Name : {this.state.fullName}</h3>
                    <p>{this.state.bio}</p>
                    <p>{this.state.profession}</p>
                    <p>
                        <img src={SnakePhoto}></img>
                    </p>
                    <p>{this.state.data}</p>
                </div>
                <button
                    onClick={() => {
                        {
                            //first function that show and hide the component
                            !this.state.show
                                ? this.setState({ show: true })
                                : this.setState({ show: false });
                        }
                        {
                            //second function that change the button innertext
                            !this.state.show
                                ? (document.querySelector(
                                      "button"
                                  ).textContent = "hide profile")
                                : (document.querySelector(
                                      "button"
                                  ).textContent = "show profile");
                        }
                    }}
                >
                    {" "}
                    Show Profile
                </button>
            </div>
        );
    }
}

export default App;
