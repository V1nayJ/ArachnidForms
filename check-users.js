const { Client } = require('pg');

async function main() {
  const client = new Client({
    connectionString: "postgresql://postgres.cyeitjejkqvgcojtxyrk:pUWKkLpWUrHMHfjJ@aws-1-ap-southeast-1.pooler.supabase.com:5432/postgres"
  });
  await client.connect();
  
  const res = await client.query('SELECT id, name, email, "isTestAccount" FROM "User"');
  console.log(res.rows);
  await client.end();
}

main().catch(console.error);
