# ionic2-online-offline
Projeto para verificar se a aplicação está online ou offline

1)Instalar
    ionic plugin add cordova-plugin-network-information
2)
    ionic g provider ConnectivityService
3)
    Incluir o provider ConnectivityService
4)Inluir no app.module.ts
    import { ConnectivityService } from '../providers/connectivity-service';
    providers: [ConnectivityService]
5)Na classe que for usar, Incluir
    import { ConnectivityService } from '../providers/connectivity-service';
    incluir no construtor
    public connectivityService: ConnectivityService
6)Poderá usar
        if (this.connectivityService.isOnline())
        {
        }

        if (this.connectivityService.isOffline())
        {
        }
