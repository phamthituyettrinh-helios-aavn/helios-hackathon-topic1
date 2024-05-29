'use client';

import { useRouter } from 'next/navigation';
import { actionUserLogout } from '@/app/lib/user-action';

export default function UserInfoBar() {
    const router = useRouter();

    const handleLogout = async () => {
        await actionUserLogout();
        router.replace('/login');
    };

    return (
        <>
            <div>User name: </div>
            <div onClick={handleLogout}>Leave room</div>
        </>
    );
}