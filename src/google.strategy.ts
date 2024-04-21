import { PassportStrategy } from "@nestjs/passport";
import { Strategy, VerifyCallback } from "passport-google-oauth20";
import { Injectable } from "@nestjs/common";

@Injectable()

export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
    constructor() {
        super({
            clientID: 'ClientIdFromGoogle', //credenciales sacados de google creando un proyecto ,  https://developers.google.com/identity/oauth2/web/guides/get-google-api-clientid 
            clientSecret: 'ClientSecretFromGoogle',
            callbackURL: 'http://localhost:3000/auth/google/callback',
            scope: ['email', 'profile']
        });
    }
    
    async validate(accessToken: string, refreshToken: string, profile: any, done: VerifyCallback): Promise<any> {
        const { name, emails, photos } = profile;
        const user = {
            email: emails[0].value,
            firstName: name.givenName,
            lastName: name.familyName,
            picture: photos[0].value,
            accessToken
        };
        done(null, user);
    }

}
