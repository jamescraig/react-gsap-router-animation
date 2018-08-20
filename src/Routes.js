import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import { TransitionGroup, Transition } from "react-transition-group";
import matchPath from "react-router-dom/matchPath";
import Nav from "./components/Nav/Nav";
import Home from "./containers/Home/Home";
import About from "./containers/About/About";
import Products from "./containers/Products/Products";
import Contact from "./containers/Contact/Contact";
import NotFound from "./containers/NotFound/NotFound";
import { handleEnterAnimation, handleExitAnimation } from "./route_animations";
import "./components/Nav/Nav.css";

// Declare the routes again, this time more serious
const routes = [
  {
    component: Home,
    showInMenu: false,
    key: "home",
    path: "/",
    id: "home",
    title: "Welcome and YOLO | Site",
    description:
      "If you are using react-helmet, you can read this description.",
    exact: true
  },
  {
    component: About,
    showInMenu: true,
    key: "about",
    path: "/about",
    id: "about",
    title: "Learn about stuff | Site",
    description: "This is all about Lorem Ipsum",
    exact: true
  },
  {
    component: Products,
    showInMenu: true,
    key: "products",
    path: "/products",
    id: "contact",
    title: "Check out our wares | Site",
    description: "This is all about my products",
    exact: true
  },
  {
    component: Contact,
    showInMenu: true,
    key: "contact",
    path: "/contact",
    id: "contact",
    title: "Let us know your negative feedback | Site",
    description: "Contact info",
    exact: false
  }
];
/**
 * filterRoutes returns true or false and compares
 * location.pathname with the path key
 * in each Object declared above in the routes Array.
 */
const filterRoutes = location => {
  return routes.filter(({ path, strict, exact }) => {
    return !!matchPath(location.pathname, {
      path,
      strict,
      exact
    });
  });
};
// I set this up as a Class Component
// You may find yourself adding Class Methods for the transition stages, etc.
class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    // First, generate a Menu Link only if showInMenu === true
    // showInMenu comes from the routes Array, above.
    return (
      <div style={{ position: "relative", width: "100%", height: "100%" }}>
        <Nav>
          {routes.map(({ showInMenu, path, key }) => {
            return (
              showInMenu && (
                <NavLink
                  key={`link-${key}`}
                  to={path}
                  className="Nav_link"
                  activeClassName="activeRoute"
                  activeStyle={{ color: "#FF5043" }}
                  style={{}}
                >
                  {key}
                </NavLink>
              )
            );
          })}
        </Nav>
        <Route
          render={({ location }) => {
            // Handle 404 with custom animations
            if (!filterRoutes(location).length) {
              return (
                <TransitionGroup appear>
                  <Transition
                    key="404"
                    timeout={500}
                    onEnter={() => console.log("notFound enter")}
                    onEntering={() => console.log("notFound entering")}
                    onEntered={() => console.log("notFound entered")}
                    onExit={() => console.log("notFound exit")}
                    onExiting={() => console.log("notFound exiting")}
                    onExited={() => console.log("notFound exited")}
                  >
                    <NotFound location={location} />
                  </Transition>
                </TransitionGroup>
              );
            }
            // Otherwise, observe root level path to find correct Component
            const path = `/${location.pathname.split("/")[1]}`;
            return (
              <TransitionGroup appear>
                {filterRoutes(location).map(({ key, ...props }) => (
                  <Transition
                    key={"child-" + key}
                    timeout={500}
                    onEnter={handleEnterAnimation}
                    onEntering={() => console.log(`${key} entering`)}
                    onEntered={() => console.log(`${key} entered`)}
                    onExit={handleExitAnimation}
                    onExiting={() => console.log(`${key} exiting`)}
                    onExited={() => console.log(`${key} exited`)}
                  >
                    {React.createElement(
                      routes.find(r => r.path === path).component,
                      {
                        ...props,
                        location
                      },
                      null
                    )}
                  </Transition>
                ))}
              </TransitionGroup>
            );
          }}
        />
      </div>
    );
  }
}
export default Routes;
