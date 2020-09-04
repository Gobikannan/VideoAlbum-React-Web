import React from "react";
import "./home-page.component.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import AlbumListPage from "../containers/albums/list-all/list-all-albums.container";
import HeaderNavBar from "./header/header.component";
import AlbumEditComponent from "../components/album-edit/album-edit.component";
import { Fabric } from "office-ui-fabric-react/lib/Fabric";

const HomePageComponent = () => {
  return (
    <Fabric>
      <Router>
        <div className="App">
          <div className="header ms-bgColor-themePrimary">
            <HeaderNavBar />
          </div>
          <div className="body">
            <div className="content ms-bgColor-neutralLighter">
              <Switch>
                <Route path="/albums" component={AlbumListPage} />
                <Route path="/album/new" component={AlbumEditComponent} />
                <Route path="/album/:id/edit" component={AlbumEditComponent} />
                <Redirect exact from="/" to="/albums" />
                <Route path="*">
                  <div>Page not found</div>
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </Fabric>
  );
};

export default HomePageComponent;
