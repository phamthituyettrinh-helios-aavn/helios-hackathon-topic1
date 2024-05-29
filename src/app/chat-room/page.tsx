// pages/page.tsx
import React from 'react';
import { getUserMessage } from '../lib/message-lib';
import ChatRoomStyle from '@/app/ui/chat-room.module.scss';

export default async function ChatRoom() {
    const messages: any[] = await getUserMessage(); // Fetch data inside the component
    console.log(messages);

    return (
        <div>
            <div className="bg-gray-100">
                <div className="flex flex-col h-screen">
                    <div className="bg-blue-500 text-white p-4">
                        <h1 className="text-lg font-bold">Chat Room</h1>
                    </div>

                    <div className="flex-1 p-4 overflow-y-auto">

                        <div className={ChatRoomStyle.privateMessageContainer}>
                            <span className={ChatRoomStyle.privateMessageName}>Hieu</span>
                            <div className={ChatRoomStyle.privateMessageArray}>
                                <span> Hi there!</span>
                                <span> I am Hieu</span>
                                <span> Nice to meet you</span>
                            </div>
                        </div>
                        <div className={ChatRoomStyle.privateMessageContainer}>
                            <span className={ChatRoomStyle.privateMessageName}>Trinh</span>
                            <div className={ChatRoomStyle.privateMessageArray}>
                                <span> Hello Hieu</span>
                                <span> Please pay salary for me</span>
                                <span> Hehehehhehehheheeh</span>
                            </div>
                        </div>
                        <div className={ChatRoomStyle.privateMessageContainerOfMe}>
                            <span className={ChatRoomStyle.privateMessageName}>Me</span>
                            <div className={ChatRoomStyle.privateMessageArray}>
                                <span> Hello both</span>
                                <span> Stop it</span>
                                <span> And give me money</span>
                            </div>
                        </div>
                        <div className={ChatRoomStyle.privateMessageContainer}>
                            <span className={ChatRoomStyle.privateMessageName}>Phuoc</span>
                            <div className={ChatRoomStyle.privateMessageArray}>
                                <span> Hello I am Phuoc</span>
                                <span> I am Trum of Helios</span>
                                <span> Hehehehhehehheheeh</span>
                            </div>
                        </div>
                    </div>


                    <div className="bg-white p-4 flex">
                        <input type="text" className={`${ChatRoomStyle.privateMessageInput} border p-2 rounded flex-1`} placeholder="Type a message..." />
                        <button className="bg-blue-500 text-white rounded p-2 ml-2">Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
