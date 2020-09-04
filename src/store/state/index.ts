import { AlbumsState } from "../../containers/albums/albums-model";

export interface ErrorState {
    message: string;
    status: number;
}

export interface AppState {
    albumsList: AlbumsState,
    pageSize: number
}
