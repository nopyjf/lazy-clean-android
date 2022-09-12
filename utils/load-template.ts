import { MyRequest } from "../models/my-request";
import { getClassType } from "./class-type-manager";
import { ObjectItem } from "./data-class-manager";
import { getTemplateDir, readSomeFile } from "./file-manager";

export class TemplateData {
  request: string = "";
  requestField: string = "";
  requestClass: string = "";
  entity: string = "";
  entityField: string = "";
  entityClass: string = "";
  model: string = "";
  modelField: string = "";
  modelClass: string = "";
  display: string = "";
  displayField: string = "";
  displayClass: string = "";
}

export async function loadTemplate(): Promise<TemplateData> {
  let data: TemplateData = new TemplateData();
  data.request = await readSomeFile(getTemplateDir(), "request.txt");
  data.requestField = await readSomeFile(getTemplateDir(), "request-field.txt");
  data.requestClass = await readSomeFile(getTemplateDir(), "request-class.txt");
  data.entity = await readSomeFile(getTemplateDir(), "entity.txt");
  data.entityField = await readSomeFile(getTemplateDir(), "entity-field.txt");
  data.entityClass = await readSomeFile(getTemplateDir(), "entity-class.txt");
  data.model = await readSomeFile(getTemplateDir(), "model.txt");
  data.modelField = await readSomeFile(getTemplateDir(), "model-field.txt");
  data.modelClass = await readSomeFile(getTemplateDir(), "model-class.txt");
  data.display = await readSomeFile(getTemplateDir(), "display.txt");
  data.displayField = await readSomeFile(getTemplateDir(), "display-field.txt");
  data.displayClass = await readSomeFile(getTemplateDir(), "display-class.txt");
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
    .replaceAll("${classes}", getClasses());
}

export function getEntityTemplate(
  data: TemplateData,
  request: MyRequest,
  objects: [ObjectItem?]
): string {
  const getFields = (obj: any): string => {
    var fieldsContent = "";

    for (let key in obj.value) {
      let classType: string = getClassType(key, obj.value[key], "Entity");
      let content = data.entityField
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
      classContent += data.entityClass
        .replaceAll("${fields}", fields)
        .replaceAll("${className}", request.class);
    }
    return classContent;
  };

  return data.entity
    .replaceAll("${feature}", request.feature)
    .replaceAll("${className}", request.class.toLowerCase())
    .replaceAll("${classes}", getClasses());
}

export function getModelTemplate(
  data: TemplateData,
  request: MyRequest,
  objects: [ObjectItem?]
): string {
  const getFields = (obj: any): string => {
    var fieldsContent = "";

    for (let key in obj.value) {
      let classType: string = getClassType(key, obj.value[key]);
      let content = data.modelField
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
      classContent += data.modelClass
        .replaceAll("${fields}", fields)
        .replaceAll("${className}", request.class);
    }
    return classContent;
  };

  return data.model
    .replaceAll("${feature}", request.feature)
    .replaceAll("${classes}", getClasses())
    .replaceAll("${className}", request.class.toLowerCase());
}

export function getDisplayTemplate(
  data: TemplateData,
  request: MyRequest,
  objects: [ObjectItem?]
): string {
  const getFields = (obj: any): string => {
    var fieldsContent = "";

    for (let key in obj.value) {
      let classType: string = getClassType(key, obj.value[key]);
      let content = data.displayField
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
      classContent += data.displayClass
        .replaceAll("${fields}", fields)
        .replaceAll("${className}", request.class);
    }
    return classContent;
  };

  return data.display
    .replaceAll("${feature}", request.feature)
    .replaceAll("${classes}", getClasses())
    .replaceAll("${className}", request.class.toLowerCase());
}