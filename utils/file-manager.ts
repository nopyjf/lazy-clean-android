import path from "path";
import { promises as fs } from "fs";
import { MyRequest } from "../models/my-request";

export function getTemplateDir() {
  return path.join(process.cwd(), "shared/template");
}

export function getExampleDir(request: MyRequest) {
  return path.join(process.cwd(), `shared/example`);
}

export async function readSomeFile(dir: string, file: string): Promise<string> {
  try {
    return await fs.readFile(`${dir}/${file}`, "utf8");
  } catch (err: any) {
    console.log(err);
  }
  return "";
}

export async function saveSomeFile(
  dir: string,
  file: string,
  content: string
): Promise<void> {
  try {
    await fs.writeFile(`${dir}/${file}`, content);
  } catch (err: any) {
    console.log(err);
  }
}
