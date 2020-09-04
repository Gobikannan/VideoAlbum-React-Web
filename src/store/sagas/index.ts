import { all } from "redux-saga/effects";
import { actionAlbumsWatcher } from "../../containers/albums/list-all/list-all-albums.sagas";

export default function* rootSaga() {
    yield all([
        actionAlbumsWatcher()
    ]);
}
