
import React from 'react';
import './App.css';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';



function App() {

  const home = React.createRef();
  const about = React.createRef();
  const projects = React.createRef();
  const pPlant = React.createRef();
  const pArcade = React.createRef();
  const pLongboard = React.createRef();
  const work = React.createRef();
  const contact = React.createRef();
  


  return (

    <div>

      <SideNav style={{ position: "fixed", background:"#8B4000" }}
    
      onSelect={(selected) => {

        console.log( selected )
          
        switch( selected ){
          case "home":
            home.current.scrollIntoView({ behavior: "smooth", block: "start" });
            break;

          case "about":
            about.current.scrollIntoView({ behavior: "smooth", block: "start" });
            break;

          case "projects":
            projects.current.scrollIntoView({ behavior: "smooth", block: "start" });
            break;

          case "projects/plant":
            pPlant.current.scrollIntoView({ behavior: "smooth", block: "start" });
            break;

          case "projects/arcade":
            pArcade.current.scrollIntoView({ behavior: "smooth", block: "start" });
            break;

          case "projects/longboard":
            pLongboard.current.scrollIntoView({ behavior: "smooth", block: "start" });
            break;

          case "work":
            work.current.scrollIntoView({ behavior: "smooth", block: "start" });
            break;

          case "contact":
            contact.current.scrollIntoView({ behavior: "smooth", block: "start" });
            break;
        }

      }}
    >
    <SideNav.Toggle />
      <SideNav.Nav defaultSelected="home">

          <NavItem eventKey="home">
              <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
              </NavIcon>
              <NavText> Home </NavText>
          </NavItem>

          <NavItem eventKey="about">
              <NavIcon>
                  <i className="fas fa-user-astronaut" style={{ fontSize: '1.75em' }} />
              </NavIcon>
              <NavText> About Me </NavText>
          </NavItem>

          <NavItem eventKey="projects">
              <NavIcon>
                  <i className="fas fa-code-branch" style={{ fontSize: '1.75em' }} />
              </NavIcon>
              <NavText> Projects + Hobbies </NavText>

              <NavItem eventKey="projects/plant">
                  <NavText> Plant Waterer </NavText>
              </NavItem>

              <NavItem eventKey="projects/arcade">
                  <NavText> Arcade Machine </NavText>
              </NavItem>

              <NavItem eventKey="projects/longboard">
                  <NavText> Electric Longboard </NavText>
              </NavItem>
          </NavItem>

          <NavItem eventKey="work">
              <NavIcon>
                  <i className="fas fa-briefcase" style={{ fontSize: '1.75em' }} />
              </NavIcon>
              <NavText> Recent Work </NavText>
          </NavItem>

          <NavItem eventKey="contact">
              <NavIcon>
                  <i className="fas fa-envelope" style={{ fontSize: '1.75em' }} />
              </NavIcon>
              <NavText> Contact </NavText>
          </NavItem>

        </SideNav.Nav>
    </SideNav>

    <div className="App">

      <header className="App-header" ref={home}>
        <h1> I'm Liam </h1>
        <h2> Developer + Math Enthusiast </h2>
      </header>

      <div className="App-about" id="about" ref={about}>
        <h1 className="Title">About Me</h1>
        <p> blah, blah, blah </p>
        <p> blah, blah, blah </p>
        <p> blah, blah, blah </p>
        <p> blah, blah, blah </p>
        <p> blah, blah, blah </p>
        <p> blah, blah, blah </p>
        <p> blah, blah, blah </p>
        <p> blah, blah, blah </p>
        <p> blah, blah, blah </p>
      </div>

      <div className="App-projects" id="projects" ref={projects}>
        <h1 className="Title">Projects + Hobbies</h1>
        <p> blah, blah, blah </p>
        <p> blah, blah, blah </p>
        <p> blah, blah, blah </p>
        <p> blah, blah, blah </p>
        <p> blah, blah, blah </p>
        <p> blah, blah, blah </p>
        <p> blah, blah, blah </p>
        <p> blah, blah, blah </p>
        <p> blah, blah, blah </p>
      </div>

      <div className="App-work" id="work" ref={work}>
        <h1 className="Title">Recent Work</h1>
        <p> blah, blah, blah </p>
        <p> blah, blah, blah </p>
        <p> blah, blah, blah </p>
        <p> blah, blah, blah </p>
        <p> blah, blah, blah </p>
        <p> blah, blah, blah </p>
        <p> blah, blah, blah </p>
        <p> blah, blah, blah </p>
        <p> blah, blah, blah </p>
      </div>

      <div className="App-contact" id="contact" ref={contact} >
        <h1 className="Title">Contact</h1>
        <p> blah, blah, blah </p>
        <p> blah, blah, blah </p>
        <p> blah, blah, blah </p>
        <p> blah, blah, blah </p>
        <p> blah, blah, blah </p>
        <p> blah, blah, blah </p>
        <p> blah, blah, blah </p>
        <p> blah, blah, blah </p>
        <p> blah, blah, blah </p>
      </div>
    </div>
  </div>
  );
}

export default App;
