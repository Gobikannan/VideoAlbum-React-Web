import { ErrorState } from "../../store/state";

export interface AlbumType {
    id: number;
    name: string;
}

export interface AlbumsState {
    loading: boolean,
    albumTypes: AlbumType[],
    error: ErrorState | null,
    albums: AlbumResponse[]
}

export const initialAlbumsState: AlbumsState = {
    loading: false,
    error: null,
    albumTypes: [],
    albums: []
}

export interface AlbumResponse {
    id?: number;
    name: string;
    stock: number;
    label: string;
    artist: string;
    type?: string;
    typeId: number;
}
