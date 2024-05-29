

'use server';

import { userLibCreateUser } from '@/app/lib/user-lib';
import { IUserModel } from '@/app/model/user.model';
import { cookies } from 'next/headers';

export async function actionUserLogin({ userName }: { userName: string }) {
    const currentUser = await userLibCreateUser({ id: 0, userName: userName, nickName: userName });
    await saveCurrentUser(currentUser);
}

export async function actionUserLogout() {
    await removeCurrentUser();
}

export async function getCurrentUser() {
    return cookies().get('currentUser')?.value;
}

async function saveCurrentUser(user: IUserModel) {
    return cookies().set('currentUser', JSON.stringify(user));
}

async function removeCurrentUser() {
    return cookies().delete('currentUser');
}