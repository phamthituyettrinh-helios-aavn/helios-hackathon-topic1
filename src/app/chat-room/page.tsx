// pages/page.tsx
import React from 'react';
import { getUserMessage } from '../lib/message-lib';
export default async function ChatRoom() {
    const messages: any[] = await getUserMessage(); // Fetch data inside the component
    console.log(messages);

    return (
        <div>
            {
                messages && messages.map((message) => (
                    <div key={message.id}>{message.text}</div>
                ))
            }
        </div>
    );
}