export interface IOptions {
    key: string;
    libraries: string | string;
    initMap: void;
}

export class Options implements IOptions {
    key: string;
    initMap: void;
    libraries: string | string;
    /**
     *
     */
    constructor() {
        this.key = 'AIzaSyC1EmEqp8MUFKQRV5wptn87P3mvcbEa-yQ';
        if (typeof (this.libraries) !== 'string' && this.libraries !== undefined)
            this.libraries = (this.libraries as string[]).join(',');
        else
            this.libraries = 'places';
    }
}