import { ApiUrlConstants } from '../../shared/api-url.constants';
import { myAxios } from '../../shared/http-interceptor';
import { CustomHttpResponseData } from '../../shared/custom-http-response-data';

export interface AlbumResponse {
    id: number,
    name: string,
    stock: number,
    label: string,
    artist: string,
    type: string
}

export async function listAllAlbums(): Promise<CustomHttpResponseData<AlbumResponse[]>> {
    return await myAxios.get(ApiUrlConstants.albumList);
}
