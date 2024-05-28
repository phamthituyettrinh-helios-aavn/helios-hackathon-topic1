const { db } = require('@vercel/postgres');

async function seedUsers(client) {
  try {
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(255) NOT NULL
      );
    `;

    console.log(`Created "users" table`);

    return {
      createTable
    };
  } catch (error) {
    console.error('Error seeding users:', error);
    throw error;
  }
}

async function seedUserMessages(client) {
  try {
    // Create the "user message" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS user_messages (
        id SERIAL PRIMARY KEY,
        userId VARCHAR(255) NOT NULL,
        message VARCHAR(255) NOT NULL,
        createdTime TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;

    console.log(`Created "user message" table`);

    return {
      createTable
    };
  } catch (error) {
    console.error('Error seeding user message:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedUsers(client);
  await seedUserMessages(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
