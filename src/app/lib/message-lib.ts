'use server';

import { sql } from '@vercel/postgres';

export async function getUserMessage() {
    try {
        const data = await sql`SELECT * FROM user_messages`;
        return data.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch the user_messages.');
    }
}