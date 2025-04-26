import Database from 'better-sqlite3';
import { dbFile } from '../constants';

const db = new Database(dbFile, { fileMustExist: false });
db.exec(`
    CREATE TABLE IF NOT EXISTS posts(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        subtitle TEXT NOT NULL,
        slug TEXT NOT NULL,
        date INTEGER NOT NULL
    );
`);
db.close();
