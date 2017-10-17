import { BaseService } from "./base.service";

export interface IMapCoreService {
    initMap(): void;
}

export class MapCoreService extends BaseService implements IMapCoreService {
    initMap() {
        this.axios.get('js', { params: this.options })
            .then(response => {
                console.log(response)
            })
    }
}
