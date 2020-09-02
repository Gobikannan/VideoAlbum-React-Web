import React, { useState, useEffect } from "react";
import { PrimaryButton } from "office-ui-fabric-react";
import { match, useHistory } from "react-router-dom";
import "./album-edit.component.scss";
import {
  fetchAlbumDetail,
  fetchAlbumTypes,
  submitAlbum,
} from "./album-edit.service";
import { TextField } from "office-ui-fabric-react/lib/TextField";
import { AlbumType } from "../../models/album-type";
import {
  Dropdown,
  IDropdown,
  IDropdownOption,
} from "office-ui-fabric-react/lib/Dropdown";
import PrimaryRoutingButton from "../primary-routing-button/primary-routing-button.component";
import DefaultRoutingButton from "../default-routing-button/default-routing-button.component";
import { Spinner, SpinnerSize } from "office-ui-fabric-react/lib/Spinner";

const dropdownStyles = { dropdown: { width: 300 } };

interface DetailParams {
  id: string;
}

interface DetailsProps {
  match?: match<DetailParams>;
}

const AlbumEditComponent = (mathedRoute: DetailsProps) => {
  const dropdownRef = React.createRef<IDropdown>();
  const id = mathedRoute.match?.params?.id;
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [artist, setArtist] = useState("");
  const [label, setLabel] = useState("");
  const [stock, setStock] = useState(0);
  const [typeId, setTypeId] = useState(0);
  const emptyAlbumTypes: AlbumType[] = [];
  const [albumTypes, setAlbumTypes] = useState(emptyAlbumTypes);

  const history = useHistory();

  const routeChange = (path: string) => {
    history.push(path);
  };

  const loadAlbumDetails = () => {
    setLoading(true);
    if (!id) {
      return;
    }
    fetchAlbumDetail(+id)
      .then((result) => {
        setName(result.data.name);
        setArtist(result.data.artist);
        setLabel(result.data.label);
        setStock(result.data.stock);
        setTypeId(result.data.typeId);
      })
      .catch((error) => {
        // use notification service to show error message
        alert("An error occurred while loading Album Details");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const loadAlbumTypes = () => {
    setLoading(true);
    fetchAlbumTypes()
      .then((result) => {
        setAlbumTypes(result.data);
        loadAlbumDetails();
      })
      .catch((error) => {
        // use notification service to show error message
        alert("An error occurred while loading Album Types");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleSubmit = () => {
    const album = {
      name,
      artist,
      label,
      stock,
      typeId,
      id: id ? +id : 0,
      type: "",
    };
    submitAlbum(album)
      .then((x) => {
        routeChange("/albums");
      })
      .catch((error) => {
        // use notification service to show error message
        alert("An error occurred while saving data");
      });
  };

  useEffect(() => {
    loadAlbumTypes();
  }, []);
  return (
    <div>
      <div className="album-header-container">
        <h2>
          {id && "Edit"} {!id && "Create"} Album {name && "(" + name + ")"}
        </h2>
        <PrimaryRoutingButton path="/albums" label="Back to Albums" />
      </div>
      <div className="form-container">
        <TextField
          label="Name"
          value={name}
          required
          placeholder="Enter a name"
          onChange={(e, newValue) => {
            setName(newValue ? newValue : "");
          }}
        />
        <TextField
          label="Artist"
          value={artist}
          required
          placeholder="Enter a artist"
          onChange={(e, newValue) => {
            setArtist(newValue ? newValue : "");
          }}
        />
        <TextField
          label="Label"
          value={label}
          required
          placeholder="Enter a label"
          onChange={(e, newValue) => {
            setLabel(newValue ? newValue : "");
          }}
        />
        <Dropdown
          componentRef={dropdownRef}
          placeholder="Select a type"
          label="Type"
          options={albumTypes.map((x) => {
            return { key: x.id, text: x.name };
          })}
          required
          selectedKey={typeId}
          onChange={(
            event: React.FormEvent<HTMLDivElement>,
            option: IDropdownOption | undefined
          ) => setTypeId(option ? +option.key : 0)}
          styles={dropdownStyles}
        />
        <TextField
          label="Stock"
          type="number"
          value={stock.toString()}
          placeholder="Enter a stock"
          onChange={(e, newValue) => {
            setStock(newValue ? +newValue : 0);
          }}
        />
        <div className="action-container">
          <PrimaryButton
            onClick={handleSubmit}
            disabled={!name || !artist || !label || !typeId}
          >
            Submit
          </PrimaryButton>
          <DefaultRoutingButton
            path="/albums"
            label="Cancel"
            className="cancel-button-container"
          />
          {loading && <Spinner size={SpinnerSize.small} />}
        </div>
      </div>
    </div>
  );
};

export default AlbumEditComponent;
