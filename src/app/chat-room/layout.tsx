import UserInfoBar from '../ui/user/user-info-bar';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <UserInfoBar />
            {children}
        </>
    );
}
