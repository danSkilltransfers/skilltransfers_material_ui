import React, { useState } from "react";
import Header from "./ui/Header";
import Footer from "./ui/Footer";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./ui/Theme";
import { BrowserRouter, Route, Switch } from "react-router-dom";






function App() {
  const [value, setValue] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <Switch>
          <Route exact path="/" component={() => <div style={{ minHeight: "100vh" }}>Home</div>} />
          <Route exact path="/training" component={() => <div style={{ minHeight: "100vh" }}>Training</div>} />
          <Route exact path="/skills" component={() => <div style={{ minHeight: "100vh" }}>Skills</div>} />
          <Route exact path="/projects" component={() => <div style={{ minHeight: "100vh" }}>Projects</div>} />
          <Route
            exact
            path="/project1"
            component={() => <div style={{ minHeight: "100vh" }}>Project 1</div>}
          />
          <Route
            exact
            path="/project2"
            component={() => <div style={{ minHeight: "100vh" }}>Project 2</div>}
          />
          <Route
            exact
            path="/project3"
            component={() => <div style={{ minHeight: "100vh" }}>Project 3</div>}
          />
          <Route exact path="/contact" component={() => <div style={{ minHeight: "100vh" }}>Contact</div>} />
        </Switch>
        <Footer
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
      </BrowserRouter>
      {/* {[...new Array(2222)].map(() => `In vino veritas `)} */}
      {/* Welcome to SkillTransfers learning! */}
    </ThemeProvider>
  );
}

export default App;
