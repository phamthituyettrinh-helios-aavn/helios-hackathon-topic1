'use client';

import React, { useState } from 'react';
import UserForm from '../ui/user/user-form';
import { IUserModel } from '../model/user.model';
import { actionUserFormSubmit } from '../ui/user/user-action';
import { LoadingPinner } from '../ui/common/loading-spinner';
import { useRouter } from 'next/navigation';

export default function Page() {
    const router = useRouter();
    const [isLoading, setLoading] = useState(false);
    const handleLogin = (user: IUserModel) => {
        console.log(user);
        setLoading(true);
        actionUserFormSubmit(user).then((newUser: IUserModel) => {
            console.log(newUser);
            router.push(`/chat-room`);
        }).catch(error => {
            alert(error.message);
        }).finally(() => {
            setLoading(false);
        });
    }

    return (
        <main>
            <UserForm actionLogin={handleLogin}></UserForm>
            {isLoading && <LoadingPinner />}
        </main>
    );
}
