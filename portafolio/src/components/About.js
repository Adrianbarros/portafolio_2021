import React from "react";
import Intro_img from '../img/Intro_img.JPG'

const AboutSection = () => {
    return (
        <div>
            <div className="description">
                <div className="title">
                    <div className="hide">
                        <h2>Hello There!</h2>
                    </div>
                    <div className="hide">
                        <h2>My name is Adrian Barros</h2>
                    </div>
                    <p>I am a reacent graduate of Computer Science looking for a job</p>
                    <button>contact me</button>
                </div>
                <img src={Intro_img} alt="picture of me" />
            </div>

        </div>

    )
}

export default AboutSection;