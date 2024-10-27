import client from 'postgres';
import { drizzle } from 'drizzle-orm/postgres-js';
import { sql } from 'drizzle-orm';
export default eventHandler(async () => {
    const pg = client(process.env.DB_CONNECTION_STRING!, {
        idle_timeout: 2,
        connect_timeout: 2,
    });
    const db = drizzle(pg);
    return db.transaction(async(tx) => {
        return tx.execute(sql`select 1`);
    });
})