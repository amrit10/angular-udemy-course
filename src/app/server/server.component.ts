import { Component } from "@angular/core";

@Component({
    // the HTML tag using which we can use this component in main - should be unique
    selector: 'app-server',
    
    // template of the html code
    templateUrl: './server.component.html',
    styles: [`
        .online {
            color: white;
        }
    `]
})
export class ServerComponent {
    serverId: number = 10;
    serverStatus: string = 'offline';

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getColor() {
        return this.serverStatus === 'online' ? 'green' : 'red';
    }

    getServerStatus() {
        return this.serverStatus;
    }
}