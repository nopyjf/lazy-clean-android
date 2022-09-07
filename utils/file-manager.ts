import path from "path";
import { promises as fs } from 'fs';

export function getDir() {
  return path.join(process.cwd(), 'shared/template');
}

export async function readSomeFile(dir: string, file: string): Promise<string> {
  return await fs.readFile(`${dir}/${file}`, 'utf8');
}