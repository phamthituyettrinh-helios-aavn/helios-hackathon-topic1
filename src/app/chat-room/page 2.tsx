'use client';
import React, { useState, useEffect } from 'react';
import { Message } from '../model/message.model';
import { sql } from '@vercel/postgres';
const MessagesPage = () => {
    const [messages, setMessages] = useState<Message[]>([]);

    useEffect(() => {
        const fetchMessages = async () => {
            const messages = await sql<Message>`SELECT * FROM user_messages`;
            setMessages(messages.rows);
        };

        fetchMessages();
    }, []);

    return (
        <div>
            {messages && (
                <>
                    {messages.map((message, index) => (
                        <p key={index}>{message.message}</p>
                    ))}
                </>
            )}

        </div>
    );
};

export default MessagesPage;