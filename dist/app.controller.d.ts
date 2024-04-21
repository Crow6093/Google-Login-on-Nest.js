import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    googleAuth(req: any): Promise<void>;
    googleAuthRedirect(req: any): "Failed to login With Google" | {
        message: string;
        user: any;
    };
}
