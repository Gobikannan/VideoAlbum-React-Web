import React from "react";
import "./app.component.scss";
import { Switch, Route, Redirect } from "react-router-dom";
import AlbumListComponent from "./../components/album-list/album-list.component";
import HeaderNavBar from "./header/header.component";
import AlbumEditComponent from "../components/album-edit/album-edit.component";

const HomePageComponent = () => {
  return (
    <div className="App">
      <div className="header ms-bgColor-themePrimary">
        <HeaderNavBar />
      </div>
      <div className="body">
        <div className="content ms-bgColor-neutralLighter">
          <Switch>
            <Route path="/albums" component={AlbumListComponent} />
            <Route path="/album/new" component={AlbumEditComponent} />
            <Route path="/album/:id/edit" component={AlbumEditComponent} />
            <Redirect exact from="/" to="/albums" />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default HomePageComponent;
