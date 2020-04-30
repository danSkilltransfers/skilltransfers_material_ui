import React, { useState } from "react";
import Header from "./components/Layouts/Header";
import Footer from "./components/Layouts/Footer";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./components/Theme";
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
          <Route exact path="/landing" component={() => <div style={{ minHeight: "100vh" }}><p>Landing</p></div>} />
          <Route exact path="/about-us" component={() => <div style={{ minHeight: "100vh" }}><p>About Us</p></div>} />
          <Route exact path="/courses" component={() => <div style={{ minHeight: "100vh" }}><p>Courses</p></div>} />
          <Route exact path="/tester" component={() => <div style={{ minHeight: "100vh" }}>Tester</div>} />
          <Route exact path="/developer" component={() => <div style={{ minHeight: "100vh" }}>Developer</div>} />
          <Route exact path="/our-teachers" component={() => <div style={{ minHeight: "100vh" }}>Our Teachers</div>} />
          <Route exact path="/our-students" component={() => <div style={{ minHeight: "100vh" }}>Our Students</div>} />
          <Route exact path="/contact" component={() => <div style={{ minHeight: "100vh" }}>Contact</div>} />
        </Switch>
  
        <Footer
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
