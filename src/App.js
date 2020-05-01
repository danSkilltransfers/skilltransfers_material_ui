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
          <Route
            exact
            path="/"
            component={() => <div style={{ minHeight: "100vh" }}>Home</div>}
          />
          <Route
            exact
            path="/landing"
            component={() => <div style={{ minHeight: "100vh" }}>Landing</div>}
          />
          <Route
            exact
            path="/about-us"
            component={() => <div style={{ minHeight: "100vh" }}>About Us</div>}
          />
          <Route
            exact
            path="/courses"
            component={() => <div style={{ minHeight: "100vh" }}>Courses</div>}
          />
          <Route
            exact
            path="/tester"
            component={() => <div style={{ minHeight: "100vh" }}>Tester</div>}
          />
          <Route
            exact
            path="/developer"
            component={() => (
              <div style={{ minHeight: "100vh" }}>Developer</div>
            )}
          />
          <Route
            exact
            path="/our-teachers"
            component={() => (
              <div style={{ minHeight: "100vh" }}>Our Teachers</div>
            )}
          />
          <Route
            exact
            path="/our-students"
            component={() => (
              <div style={{ minHeight: "100vh" }}>Our Students</div>
            )}
          />
          <Route
            exact
            path="/contact"
            component={() => <div style={{ minHeight: "100vh" }}>Contact</div>}
          />
          <Route
            exact
            path="/teaching-method"
            component={() => (
              <div style={{ minHeight: "100vh" }}>Teaching method</div>
            )}
          />
          <Route
            exact
            path="/privacy-policy"
            component={() => (
              <div style={{ minHeight: "100vh" }}>Privacy Policy</div>
            )}
          />
          <Route
            exact
            path="/pricing"
            component={() => <div style={{ minHeight: "100vh" }}>Pricing</div>}
          />
          <Route
            exact
            path="/enterprise-solutions"
            component={() => (
              <div style={{ minHeight: "100vh" }}>Enterprise solutions</div>
            )}
          />
          <Route
            exact
            path="/opportunities"
            component={() => (
              <div style={{ minHeight: "100vh" }}>Opportunities</div>
            )}
          />
          <Route
            exact
            path="/events"
            component={() => <div style={{ minHeight: "100vh" }}>Events</div>}
          />
          <Route
            exact
            path="/faq"
            component={() => <div style={{ minHeight: "100vh" }}>FAQ</div>}
          />
          <Route
            exact
            path="/blog"
            component={() => <div style={{ minHeight: "100vh" }}>Blog</div>}
          />
          <Route
            exact
            path="/whatsapp-group"
            component={() => (
              <div style={{ minHeight: "100vh" }}>Whatsapp Group</div>
            )}
          />
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
