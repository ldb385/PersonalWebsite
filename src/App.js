
import React from 'react';
import './App.css';
import './profile.css';
import './projects.css';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';


function App() {

  const home = React.createRef();
  const about = React.createRef();
  const projects = React.createRef();
  const pGame = React.createRef();
  const pPlant = React.createRef();
  const pArcade = React.createRef();
  const pLongboard = React.createRef();
  const work = React.createRef();
  const contact = React.createRef();
  


  return (

    <div>

      <SideNav style={{ position: "fixed", background:"#cc6600" }}
    
      

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
            // this doesnt actually function, for some reason package does not pass selection when drop down has children
            // work arrount is placing on click on hobbies page.
            projects.current.scrollIntoView({ behavior: "smooth", block: "start" });
            break;

          case "projects/game":
            pGame.current.scrollIntoView({ behavior: "smooth", block: "start" });
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

            <NavItem eventKey="projects" disabled={false} 
            onClick={(selected) => { 
              // this is a work around
              projects.current.scrollIntoView({ behavior: "smooth", block: "start" }); }
            }
            >
                <NavIcon>
                    <i className="fas fa-code-branch" style={{ fontSize: '1.75em' }} />
                </NavIcon>
                <NavText> Projects + Hobbies </NavText>

                <NavItem eventKey="projects/game">
                    <NavText> TicTacToe </NavText>
                </NavItem>

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
          <div className="App-about-info">
            <div className="profile">
              <img border="0" alt="Liam" src="https://avatars3.githubusercontent.com/u/55117132?s=460&u=e8c6eae8ece4f58cdd641f96ec60f28c8f280875&v=4" width="100%" height="100%" />
              <h1>Liam Bigelow</h1>
              <h3>University of Saskatechewan</h3>
              <p>Saskatoon, SK, 2017 - 2021</p>
              <p>Bachelor of Science in Computer Science</p>
              <p>Minor in Mathematics</p>
              <p><button onClick={(selected) => { 
                  contact.current.scrollIntoView({ behavior: "smooth", block: "start" }); }
                }>
                Contact
              </button></p>
            </div>
            <br/>
            <div className="App-about-info-text">
              <h2>
                Hi There, I'm Liam Bigelow
              </h2>
              <pre>
                I am a persueing a degree in Computer Science and Mathematics at the University of Saskatechewan. <br/>
                I enjoy problem solving and developing novel solutions. <br/>
                <br/>
                I firmly believe that any skill, subject, or excersize can be learned and eventually mastered. <br/>
                This belief has allowed me to comfortably explore new situations and explore many different <br/>
                hobbies such as: <br/>
                wood working, baking, cooking, Programming, and Mathematics <br/>
                <br/>
                My goal as a developer is too produce software that improves the quality of being when producing <br/>
                everyday tasks. This could be as simple as automating a forgetable task like watering the plant or <br/>
                turning off the lights when going to bed. It could also be as complicated as verifying a complex <br/>
                set of equations or automatically producing spreadsheets. Notably, my goal as developer is not create <br/>
                software that replaces workers but to create the software that betters the workers expierence. <br/>
                <br/>
                On my freetime, I enjoy playing games with my freinds. Snowboarding in the winter and camping as <br/>
                much as I can in the summer. <br/>
              </pre>
            </div>
          </div>
        </div>

        <div className="App-projects" id="projects" ref={projects}>
          <h1 className="Title">Projects + Hobbies</h1>
          <div className="App-project">

            <div className="project2" ref={pGame}>
              <div className="background" id="tictactoe"></div>
              <h2>Tic Tac Toe</h2>
            </div>

            <br/>

            <div style={{float: "left"}} className="project1" ref={pPlant}>
              <img alt="PlantWaterer" src="https://github.com/ldb385/Hobby-Projects/blob/master/PlantWaterer/Plant1.jpg?raw=true" />
              <h2>Plant Waterer</h2>
            </div>
            

            <div style={{float: "right"}} className="project1" ref={pArcade}>
              <img alt="ArcadeMachine" src="https://github.com/ldb385/Hobby-Projects/blob/master/RasPiArcade/RasPiArcade2.jpg?raw=true" />
              <h2>Arcade Machine</h2>
            </div>


            <div className="project1" ref={pLongboard} >
              <img alt="ElectricLongboard" src="https://github.com/ldb385/Hobby-Projects/blob/master/ElectricLongboard/ElectricBoard3.jpg?raw=true" />
              <h2>Electric Longboard</h2>
            </div>

            <br/>
          </div>
          
          <br/>
        </div>


        <div className="App-work" id="work" ref={work}>
          <h1 className="Title">Recent Work</h1>
  
        </div>

        <div className="App-contact" id="contact" ref={contact} >
          <h1 className="Title">Contact</h1>
          <br/>
          <pre style={{fontSize: '1.75em'}}>
            <i className="fas fa-male"/>  Liam Bigelow 
            <br></br><br></br>
            <i className="fas fa-envelope"/>  LiamDBigelow@gmail.com 
            <br></br><br></br>
            <i className="fas fa-map-marker-alt"/>  Saskatoon, SK
          </pre>
          <br/>
          <p>
            <a href="https://www.linkedin.com/in/liam-bigelow-684a6619a">
            <img className="avatar" border="0" alt="LinkedIn" src="data:image/png;base64,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" width="100" height="100" />
            </a>
            <a href="https://github.com/ldb385">
            <img className="avatar" border="0" alt="GitHub" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5DJA0fGvlEyOB9XGueTX1scSkcl8CFLYH3g&usqp=CAU" width="100" height="100" />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
