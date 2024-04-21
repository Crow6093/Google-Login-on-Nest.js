import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  googleLogin(req) {
    if (!req.user) {
      return 'Failed to login With Google';
    }
    return {
      message: 'User information from google',
      user: req.user,
    };
  }
}
