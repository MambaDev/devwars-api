import User from '../models/user.model';
import { VerificationService } from './verification.service';

export class ResetService {
    public static async resetEmail(user: User, email: string) {
        user.email = email;
        await user.save();

        await VerificationService.reset(user);
    }
}
