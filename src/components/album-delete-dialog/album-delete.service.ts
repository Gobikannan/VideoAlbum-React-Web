import { ApiUrlConstants } from '../../shared/api-url.constants';
import { myAxios } from '../../shared/http-interceptor';
import { CustomHttpResponseData } from '../../shared/custom-http-response-data';

export async function deleteAlbum(id: number): Promise<CustomHttpResponseData<void>> {
    return await myAxios.delete(ApiUrlConstants.albumById + id);
}
