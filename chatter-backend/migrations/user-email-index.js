/** @type {import('migrate-mongo').Migration} */
export const up = async (db) => {
  console.log('Creating unique index on users.email...');
  await db.collection('users').createIndex({ email: 1 }, { unique: true });
};

// export const down = async (db) => {
//   console.log('Dropping unique index on users.email...');
//   await db.collection('users').dropIndex('email_1');
// };
