import { MyRequest } from "../models/my-request";
import { getClassType } from "./class-type-manager";
import { ObjectItem } from "./data-class-manager";
import { getDir, readSomeFile } from "./file-manager";

export class TemplateData {
  request: string = "";
  requestField: string = "";
  requestClass: string = "";
}

export async function loadTemplate(): Promise<TemplateData> {
  let data: TemplateData = new TemplateData();
  data.request = await readSomeFile(getDir(), "request.txt");
  data.requestField = await readSomeFile(getDir(), "request-field.txt");
  data.requestClass = await readSomeFile(getDir(), "request-class.txt");
  return data;
}

export function getRequestTemplate(
  data: TemplateData,
  request: MyRequest,
  objects: [ObjectItem?]
): string {
  const getFields = (obj: any): string => {
    var fieldsContent = "";

    for (let key in obj.value) {
      let classType: string = getClassType(key, obj.value[key], "Request");
      let content = data.requestField
        .replaceAll("${field}", key)
        .replaceAll("${type}", classType);
      fieldsContent += `${content}\n`;
    }

    return fieldsContent;
  }

  const getClasses = () => {
    var classContent = "";
    for (let i in objects) {
      let fields = getFields(objects[i]);
      classContent += data.requestClass
        .replaceAll("${fields}", fields)
        .replaceAll("${className}", request.class);
    }
    return classContent;
  };

  return data.request
    .replaceAll("${feature}", request.feature)
    .replaceAll("${className}", request.class)
    .replaceAll("${classes}", getClasses());
}
