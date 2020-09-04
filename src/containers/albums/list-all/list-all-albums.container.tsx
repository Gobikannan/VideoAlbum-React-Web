import { connect } from "react-redux";
import { Dispatch } from "redux";
import AlbumListComponent from "../../../components/album-list/album-list.component";
import { AppState } from "../../../store/state";
import { AlbumsActionTypes, AlbumsActions } from "./list-all-albums.sagas";

const mapStateToProps = (state: AppState) => {
  return {
    albums: state.albumsList.albums,
    error: state.albumsList.error,
    loading: state.albumsList.loading,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<AlbumsActionTypes>) => ({
  fetchAlbums: () => {
    dispatch({ type: AlbumsActions.AlbumsRequest });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AlbumListComponent);
