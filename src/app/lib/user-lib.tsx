'use server';

import { sql } from '@vercel/postgres';
import { IUserModel } from '../model/user.model';

export async function userLibCreateUser(user: IUserModel): Promise<IUserModel> {
    try {
        if (!user?.userName || !user?.nickName) {
            throw new Error('missing data'), { status: 400 };
        }
        await sql`INSERT INTO USERS(userName, nickName) 
                    SELECT ${user.userName}, ${user.nickName}
                        WHERE NOT EXISTS(
                            SELECT 1 FROM USERS WHERE userName = ${user.userName}
                        );`;
        return userLibGetUser(user.userName);
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error(`failed create user ${user.userName}`);
    }
}

export async function userLibGetUser(username: string): Promise<IUserModel> {
    try {
        const data = await sql`SELECT * FROM USERS WHERE userName=${username};`;
        return data.rows[0] as IUserModel;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error(`can not get user ${username}`);
    }
}