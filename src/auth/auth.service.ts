import { Injectable } from '@nestjs/common';

export interface AuthenticatedRequest extends Request {
  user: any;
}

@Injectable()
export class AuthService {
  googleLogin(req: AuthenticatedRequest) {
    if (!req.user) {
      return 'No use from google';
    }

    //implement saving the data in google

    return {
      message: 'User info from google',
      user: req.user,
    };
  }
}
