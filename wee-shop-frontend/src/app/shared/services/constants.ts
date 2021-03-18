import { Injectable } from "@angular/core";

@Injectable()
export class Constants{
    public api = {
        home: 'api',
        services: {
            root: 'api/services',
            serviceTypes: 'api/serviceTypes',
            comments: 'api/services/GetServiceComments/'
        },
        servicesProviders: {
            root: 'api/providers',
            getById: 'api/providers/get'
        },
        users: {
          root: 'api/users/'
        }
    }
}
