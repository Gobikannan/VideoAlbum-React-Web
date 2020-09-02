import React, { useState, useEffect } from "react";
import { ShimmeredDetailsList } from "office-ui-fabric-react/lib/ShimmeredDetailsList";
import { IColumn, SelectionMode } from "office-ui-fabric-react/lib/index";
import { Stack } from "office-ui-fabric-react";
import { listAllAlbums, AlbumResponse } from "./album.service";
import "./album-list.component.scss";
import DeleteAlbumDialog from "../album-delete-dialog/album-delete-dialog.component";
import PrimaryRoutingButton from "../primary-routing-button/primary-routing-button.component";

const stackTokens = { childrenGap: 5 };

const columns: IColumn[] = [
  {
    name: "Name",
    key: "name",
    fieldName: "name",
    minWidth: 125,
    isResizable: true,
  },
  {
    name: "Artist",
    key: "artist",
    fieldName: "artist",
    minWidth: 125,
    isResizable: true,
  },
  {
    name: "Label",
    key: "label",
    fieldName: "label",
    minWidth: 125,
    isResizable: true,
  },
  {
    name: "Type",
    key: "type",
    fieldName: "type",
    minWidth: 125,
    isResizable: true,
  },
  {
    name: "Stock",
    key: "stock",
    fieldName: "stock",
    minWidth: 125,
    isResizable: true,
  },
  {
    name: "Action",
    key: "action",
    fieldName: "action",
    minWidth: 200,
    isResizable: true,
    onRender: (item: AlbumResponse) => {
      const editUrl = "/album/" + item.id + "/edit";
      return (
        <div>
          <PrimaryRoutingButton path={editUrl} label="Edit" />
          <DeleteAlbumDialog album={item} />
        </div>
      );
    },
  },
];

const AlbumListComponent = () => {
  const [loading, setLoading] = useState(false);
  const emptyAlbums: AlbumResponse[] = [];
  const [albums, setAlbums] = useState(emptyAlbums);

  const loadAlbums = () => {
    setLoading(true);
    listAllAlbums()
      .then((result) => {
        setAlbums(result.data);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    loadAlbums();
  }, []);

  return (
    <Stack tokens={stackTokens}>
      <div className="album-list-container">
        <h2>Albums</h2>
        <PrimaryRoutingButton path="/album/new" label="Create New Album" />
      </div>
      <ShimmeredDetailsList
        setKey="items"
        items={albums}
        columns={columns}
        selectionMode={SelectionMode.none}
        enableShimmer={loading}
        ariaLabelForShimmer="Albums is being fetched"
        ariaLabelForGrid="Albums"
        listProps={{ renderedWindowsAhead: 0, renderedWindowsBehind: 0 }}
      />
    </Stack>
  );
};

export default AlbumListComponent;
