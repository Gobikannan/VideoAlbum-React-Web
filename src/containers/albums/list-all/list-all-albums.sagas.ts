import { Action } from 'redux';
import { put, call, takeLatest } from 'redux-saga/effects';
import { ErrorState } from '../../../store/state';
import { listAllAlbums } from './list-all-albums.services';
import { AlbumResponse, initialAlbumsState, AlbumsState } from '../albums-model';

// actions - start
export enum AlbumsActions {
    AlbumsRequest = '[ALBUMS] requesting',
    AlbumsRequestSuccess = '[ALBUMS] request success',
    AlbumsRequestError = '[ALBUMS] request error'
}

export interface AlbumsRequestAction {
    type: typeof AlbumsActions.AlbumsRequest;
}

export class AlbumsRequestSuccessAction implements Action {
    readonly type = AlbumsActions.AlbumsRequestSuccess;
    constructor(readonly data: AlbumResponse[]) { }
}

export class AlbumsRequestErrorAction implements Action {
    readonly type = AlbumsActions.AlbumsRequestError;
    constructor(readonly error: ErrorState) { }
}

export type AlbumsActionTypes = AlbumsRequestAction | AlbumsRequestSuccessAction | AlbumsRequestErrorAction;
// actions - end

// reducers - start
const fetchAlbumsReducer = (state = initialAlbumsState, action: AlbumsActionTypes): AlbumsState => {
    switch (action.type) {
        case AlbumsActions.AlbumsRequest:
            return { ...state, loading: true, error: null, albums: [] };
        case AlbumsActions.AlbumsRequestSuccess:
            return { ...state, loading: false, error: null, albums: action.data };
        case AlbumsActions.AlbumsRequestError:
            return { ...state, loading: false, error: action.error };
        default:
            return state;
    }
};
export default fetchAlbumsReducer;
// reducers - end

// sagas - start
function* fetchAlbums({ }: AlbumsRequestAction) {
    try {
        const { data } = yield call(listAllAlbums);
        yield put({ type: AlbumsActions.AlbumsRequestSuccess, data });
    } catch (error) {
        yield put({ type: AlbumsActions.AlbumsRequestError, error });
    }
}

export function* actionAlbumsWatcher() {
    yield takeLatest(AlbumsActions.AlbumsRequest, fetchAlbums)
}
// sagas - end
