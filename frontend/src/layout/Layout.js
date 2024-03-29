import React, { useContext, Suspense, useEffect } from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";

import Main from "./Main";
import routes from "../routes";
import HeaderClient from "../mainLayout/Header/Header";
import FooterClient from "../mainLayout/Footer/Footer";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import { SidebarContext } from "../context/SidebarContext";
import ThemeSuspense from "../components/theme/ThemeSuspense";

//const Page404 = lazy(() => import("../pages/404"));
const Layout = () => {
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext);
  let location = useLocation();
  const params = window.location.href.split("/");
  useEffect(() => {
    closeSidebar();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);
  return (
    <>
      {params[3] === "user" && (
        <>
          {(params[4] !== "login") & (params[4] !== "signup") && (
            <HeaderClient />
          )}
          <Suspense fallback={<ThemeSuspense />}>
            <Switch>
              {routes.map((route, i) => {
                return route.component ? (
                  <Route
                    key={i}
                    exact={true}
                    path={`${route.path}`}
                    render={(props) => <route.component {...props} />}
                  />
                ) : null;
              })}
              <Redirect exact from="/" to="/user/login" />
              {/*<Route component={Page404} />*/}
            </Switch>
          </Suspense>
          {(params[4] !== "login") & (params[4] !== "signup") && (
            <FooterClient />
          )}
        </>
      )}
      {params[3] === "" && (
        <>
          <div
            className={`flex h-screen bg-gray-50 dark:bg-gray-900 ${
              isSidebarOpen && "overflow-hidden"
            }`}
          >
            <Sidebar />
            <div className="flex flex-col flex-1 w-full">
              <Header />

              <Main>
                <Suspense fallback={<ThemeSuspense />}>
                  <Switch>
                    {routes.map((route, i) => {
                      return route.component ? (
                        <Route
                          key={i}
                          exact={true}
                          path={`${route.path}`}
                          render={(props) => <route.component {...props} />}
                        />
                      ) : null;
                    })}
                    <Redirect exact from="/" to="/user/login" />
                    {/*<Route component={Page404} />*/}
                  </Switch>
                </Suspense>
              </Main>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Layout;
