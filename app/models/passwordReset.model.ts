import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import BaseModel from './base.model';
import User from './user.model';

@Entity('password_reset')
export default class PasswordReset extends BaseModel {
    @Column()
    public expiresAt: Date;

    @Column()
    public token: string;

    // ------------------------------------------------------------
    // Relations
    @OneToOne(() => User)
    @JoinColumn()
    public user: User;

    /**
     * Creates a new instance of the password reset model.
     * @param user The user of the password reset process.
     * @param token The associated verification token of the reset process.
     * @param expiresAt When the password reset process will expire.
     */
    constructor(user?: User, token?: string, expiresAt?: Date) {
        super();

        this.user = user;
        this.token = token;
        this.expiresAt = expiresAt;
    }
}
