import React, { useState } from "react";
import { PrimaryButton, DefaultButton } from "office-ui-fabric-react";
import { AlbumResponse } from "./../album-list/album.service";
import {
  Dialog,
  DialogType,
  DialogFooter,
} from "office-ui-fabric-react/lib/Dialog";
import { deleteAlbum } from "./album-delete.service";

const dialogContent = (albumName: string) => {
  return {
    type: DialogType.normal,
    title: "Confirm?",
    closeButtonAriaLabel: "Close",
    subText: "Are you sure, you want to delete this album (" + albumName + ")?",
  };
};

type albumProps = {
  album: AlbumResponse;
};

const DeleteAlbumDialog = (props: albumProps) => {
  const [hideDialog, setHideDialog] = useState(true);
  const dialogContentProps = dialogContent(props.album.name);
  const handleDeleteAlbum = (albumId: number) => {
    deleteAlbum(albumId)
      .then((x) => {
        console.log(x);
      })
      .catch((error) => {
        alert("Am error occurred.");
      })
      .finally(() => {
        setHideDialog(true);
      });
  };

  return (
    <>
      <DefaultButton
        onClick={() => {
          setHideDialog(false);
        }}
        className="delete-button"
      >
        Delete
      </DefaultButton>
      <Dialog
        hidden={hideDialog}
        onDismiss={() => {
          setHideDialog(true);
        }}
        dialogContentProps={dialogContentProps}
      >
        <DialogFooter>
          <PrimaryButton
            text="Yes"
            onClick={() => {
              handleDeleteAlbum(props.album.id);
            }}
          />
          <DefaultButton
            text="No"
            onClick={() => {
              setHideDialog(true);
            }}
          />
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default DeleteAlbumDialog;
