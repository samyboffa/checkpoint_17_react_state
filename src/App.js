import "./App.css";
import React, { Component } from "react";
import Profile from "./Profile";
import SnakePhoto from "./SnakePhoto.jpg";

class App extends Component {
    state = {
        fullName: "Solid Snake",
        bio:
            "Solid Snake, real name David, also known as Old Snake, and briefly known as Iroquois Pliskin, or simply Snake, was a former spy, special operations soldier, and mercenary.",
        imgSrc: SnakePhoto,
        profession: "Spy",
        show: false,
    };
    render() {
        return (
            <div id="comp">
                <h1>React State </h1>
                {this.state.show ? (
                    <Profile
                        fullName={this.state.fullName}
                        bio={this.state.bio}
                        profession={this.state.profession}
                        photo={this.state.imgSrc}
                    />
                ) : null}
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
