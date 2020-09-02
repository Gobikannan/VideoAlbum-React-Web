import { ApiUrlConstants } from '../../shared/api-url.constants';
import { myAxios } from '../../shared/http-interceptor';
import { CustomHttpResponseData } from '../../shared/custom-http-response-data';
import { AlbumDetail } from '../../models/album-detail';
import { AlbumType } from '../../models/album-type';

export async function fetchAlbumDetail(albumId: number): Promise<CustomHttpResponseData<AlbumDetail>> {
    return await myAxios.get(ApiUrlConstants.albumById + albumId);
}

export async function fetchAlbumTypes(): Promise<CustomHttpResponseData<AlbumType[]>> {
    return await myAxios.get(ApiUrlConstants.albumTypes);
}

export async function submitAlbum(album: AlbumDetail): Promise<CustomHttpResponseData<void>> {
    return await myAxios.put(ApiUrlConstants.albums, album);
}
