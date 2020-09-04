import { CustomHttpResponseData } from "../../../shared/custom-http-response-data";
import { ApiUrlConstants } from "../../../shared/api-url.constants";
import { myAxios } from "../../../shared/http-interceptor";
import { AlbumResponse } from "../albums-model";

export async function listAllAlbums(): Promise<CustomHttpResponseData<AlbumResponse[]>> {
    return await myAxios.get(ApiUrlConstants.albumList);
}
