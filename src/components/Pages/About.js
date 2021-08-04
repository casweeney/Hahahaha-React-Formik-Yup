import React, { Component } from 'react';
import Header from '../Common/Header';
import image from '../assets/img/about.jpeg';
import TimeLine from '../Common/TimeLine';

class About extends Component {
    render() {
        return (
            <div>
                <Header 
                    title="About Us"
                    subtitle="It's really a great story"
                    showButton={false}
                    image={image}
                />

                <TimeLine />
            </div>
        );
    }
}

export default About;