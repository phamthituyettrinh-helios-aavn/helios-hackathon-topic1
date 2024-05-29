

import { userLibCreateUser } from '@/app/lib/user-lib';
import { IUserModel } from '@/app/model/user.model';
import { cookies } from 'next/headers';


export async function actionUserFormSubmit({ userName }: { userName: string }) {
    return userLibCreateUser({ id: 0, userName: userName, nickName: userName });
}
