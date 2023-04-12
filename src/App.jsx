import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import AboutUs from "./pages/AboutUs";
import Products from "./pages/Products";
import Header from "./components/Header";
import AddProduct from "./pages/AddProduct";
import PrivateRoute from "./components/PrivateRoute";
import useAuth from "./hooks/useAuth";

export const THEMES = {
  light: "light",
  dark: "dark"
};

export const ThemeContext = React.createContext(THEMES.light);

function App() {
  const [theme, setTheme] = useState(THEMES.light);

  const { isAuth } = useAuth();

  return (
    <ThemeContext.Provider value={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact>
            <PrivateRoute
              condition={isAuth}
              redirectPath="/sign-in"
              component={<Home />}
            />
          </Route>
          <Route path="/sign-up">
            <SignUp />
          </Route>
          <Route path="/sign-in">
            <SignIn />
          </Route>
          <Route path="/about-us" exact>
            <PrivateRoute
              condition={isAuth}
              redirectPath="/sign-in"
              component={<AboutUs />}
            />
          </Route>
          <Route path="/about-us/:id">
            <PrivateRoute
              condition={isAuth}
              redirectPath="/sign-in"
              component={<AboutUs />}
            />
          </Route>
          <Route path="/add-product">
            <PrivateRoute
              condition={isAuth}
              redirectPath="/sign-in"
              component={<AddProduct />}
            />
          </Route>
          <Route path="/products">
            <PrivateRoute
              condition={isAuth}
              redirectPath="/sign-in"
              component={<Products />}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
