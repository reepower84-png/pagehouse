import Database from 'better-sqlite3';
import path from 'path';

const dbPath = path.join(process.cwd(), 'inquiries.db');
const db = new Database(dbPath);

// 테이블 생성
db.exec(`
  CREATE TABLE IF NOT EXISTS inquiries (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    phone TEXT NOT NULL,
    message TEXT NOT NULL,
    status TEXT DEFAULT '대기중',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

export interface Inquiry {
  id: number;
  name: string;
  phone: string;
  message: string;
  status: '대기중' | '연락완료' | '상담완료';
  created_at: string;
}

export function createInquiry(name: string, phone: string, message: string): Inquiry {
  const stmt = db.prepare('INSERT INTO inquiries (name, phone, message) VALUES (?, ?, ?)');
  const result = stmt.run(name, phone, message);
  return getInquiryById(result.lastInsertRowid as number)!;
}

export function getInquiryById(id: number): Inquiry | undefined {
  const stmt = db.prepare('SELECT * FROM inquiries WHERE id = ?');
  return stmt.get(id) as Inquiry | undefined;
}

export function getAllInquiries(): Inquiry[] {
  const stmt = db.prepare('SELECT * FROM inquiries ORDER BY created_at DESC');
  return stmt.all() as Inquiry[];
}

export function updateInquiryStatus(id: number, status: string): boolean {
  const stmt = db.prepare('UPDATE inquiries SET status = ? WHERE id = ?');
  const result = stmt.run(status, id);
  return result.changes > 0;
}

export function deleteInquiry(id: number): boolean {
  const stmt = db.prepare('DELETE FROM inquiries WHERE id = ?');
  const result = stmt.run(id);
  return result.changes > 0;
}

export default db;
