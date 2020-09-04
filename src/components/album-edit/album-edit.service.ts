import { ApiUrlConstants } from '../../shared/api-url.constants';
import { myAxios } from '../../shared/http-interceptor';
import { CustomHttpResponseData } from '../../shared/custom-http-response-data';
import { AlbumType, AlbumResponse } from '../../containers/albums/albums-model';

export async function fetchAlbumDetail(albumId: number): Promise<CustomHttpResponseData<AlbumResponse>> {
    return await myAxios.get(ApiUrlConstants.albumById + albumId);
}

export async function fetchAlbumTypes(): Promise<CustomHttpResponseData<AlbumType[]>> {
    return await myAxios.get(ApiUrlConstants.albumTypes);
}

export async function submitAlbum(album: AlbumResponse): Promise<CustomHttpResponseData<void>> {
    return await myAxios.put(ApiUrlConstants.albums, album);
}
