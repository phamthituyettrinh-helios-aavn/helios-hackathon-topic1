import { sql } from "@vercel/postgres";
import { getMessage } from "../lib/message-lib";

interface Message {
    id: number;
    message: string;
    senttime: Date;
}
export default async function Cart({
    params
}: {
    params: { user: string }
}): Promise<JSX.Element> {
    const messages = await getMessage();
    console.log(messages);

    return (
        <div>
            {messages.map((message) => (
                <div key={message.id}>
                    {message.id} - {message.message}
                </div>
            ))}
        </div>
    );
}