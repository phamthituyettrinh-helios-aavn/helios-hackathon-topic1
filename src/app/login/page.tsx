'use client';

import React, { useState } from 'react';
import UserForm from '../ui/user/user-form';
import { IUserModel } from '../model/user.model';
import { actionUserLogin } from '@/app/lib/user-action';
import { LoadingPinner } from '../ui/common/loading-spinner';
import { useRouter } from 'next/navigation';

export default function Page() {
    const router = useRouter();
    const [isLoading, setLoading] = useState(false);
    const handleLogin = async (user: IUserModel) => {
        try {
            setLoading(true);
            await actionUserLogin(user);
            console.log('Hieu khung');
            router.push(`/chat-room`);
        } catch (error) {
            alert(error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <main>
            <UserForm actionLogin={handleLogin}></UserForm>
            {isLoading && <LoadingPinner />}
        </main>
    );
}
