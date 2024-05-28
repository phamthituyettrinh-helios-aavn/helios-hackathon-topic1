'use client';

import React from 'react';
import LoginStyle from '@/app/ui/login.module.scss';
import { useRouter } from 'next/navigation';
import UserForm from '../ui/user/user-form';

export default function Page() {
    const router = useRouter();

    const handleLogin = () => {
        router.push('/chat-room');
    };

    return (
        <main>
            {/* <div className={LoginStyle.container}>
                <div className={LoginStyle.logInBoxName}>
                    <span> Username:</span>
                    <input
                        className={LoginStyle.logInInput}
                        placeholder="username"
                    ></input>
                </div>
                <button className={LoginStyle.logInButton} onClick={handleLogin}>
                    Login
                </button>
            </div> */}

            <UserForm></UserForm>
        </main>
    );
}
