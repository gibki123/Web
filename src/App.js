import React, { Component } from 'react';
import { Sticky } from "semantic-ui-react";

import DynamicHeader from "./headers/DynamicHeader";

import './App.scss';
import Bio from './blocks/bio';
import SocialMedia from './blocks/SocialMedia';
import PersonalData from './blocks/PersonalData';
import Experience from './blocks/Experience';

const myDetails = {
  experience: [
    {
      title: "Future Processing sp z o.o.",
      description: "Inżynier Oprogramowania",
      from: "06.2012",
      to: "present"
    },
    {
      title: "De Ygrek s.c.",
      description: "Kierownik działu IT",
      from: "09.2006",
      to: "05.2012"
    }
  ],
  education: [
    {
      title: "Future Processing sp z o.o.",
      description: "Inżynier Oprogramowania",
      from: "06.2012",
      to: "present"
    },
    {
      title: "De Ygrek s.c.",
      description: "Kierownik działu IT",
      from: "09.2006",
      to: "05.2012"
    }
  ]
}

class App extends Component {
  state = {};

  handleContextRef = contextRef => {
    this.setState({ contextRef });
  }

  render() {
    const { contextRef } = this.state;

    return (
      <div className="app-container">
        <DynamicHeader />
        <div className="cv-container">
          <aside>
            <div>
              <Sticky context={contextRef} pushing offset={150} >
                {
                  <PersonalData name="Maciej Król" address="Gliwice ul.Strzody" 
                  email="maciej.krol16@interia.pl" linkedin="do dodania"></PersonalData>
                }
              </Sticky>
            </div>
          </aside>
          <section ref={this.handleContextRef} >
            <div>
                <Bio name="Maciej">Cos</Bio>
                <br/>
                <br/>
                <br/>
                <SocialMedia></SocialMedia>
                <Experience items={myDetails}></Experience>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
