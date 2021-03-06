import EmailVerification from '../models/emailVerification.model';
import User from '../models/user.model';

export default class EmailVerificationSeeding {
    public static default(): EmailVerification {
        const emailVerification = new EmailVerification();
        emailVerification.token = 'secret';

        return emailVerification;
    }

    public static withUser(user: User): EmailVerification {
        const emailVerification = this.default();

        emailVerification.user = user;

        return emailVerification;
    }
}
