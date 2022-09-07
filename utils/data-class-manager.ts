import { MyRequest } from "../models/my-request";
import { isArray, isObject } from "./class-type-manager";
import { toJson } from "./json-manager";
import { getRequestTemplate, TemplateData } from "./load-template";
import { toClassName } from "./text-utils";

export declare type ObjectItem = {
  key: string;
  value: any;
  isObjList: boolean;
};

export class DataClassManager {
  jsonString: string = "";
  objects: [ObjectItem?] = [];
  template: TemplateData;
  body: MyRequest;

  constructor(template: TemplateData, body: MyRequest) {
    this.template = template;
    this.body = body;
  }
}

export function addFirstJson(data: DataClassManager) {
  console.info(`info: [addFirstJson]`);
  console.info(`info: data:${data.body.class}`);
  console.info(`info: data:${data.body.requestJson}`);

  data.objects.push({
    key: toClassName(data.body.class),
    value: toJson(data.body.requestJson),
    isObjList: false,
  });
}

export function mapDataClass(data: DataClassManager, json: any) {
  console.info(`info: [mapDataClass]`);
  console.info(`info: data:${data}`);
  console.info(`info: json:${json}`);

  console.log("info : List element in object.");
  const childObjects = getChildObjects(json);

  console.log("info : Push object list into main list.");
  data.objects.push(...childObjects);

  if (childObjects.length > 0) {
    console.log("info : Child Object appeared.");
    childObjects.forEach((obj) => {
      mapDataClass(data, obj?.value);
    });
  }
}

export function mapJsonString(data: DataClassManager) {
  data.jsonString = getRequestTemplate(data.template, data.body, data.objects);
}

function getChildObjects(json: any): [ObjectItem?] {
  console.info(`info: [getChildObjects]`);
  console.info(`info: json:${json}`);

  var objects: [ObjectItem?] = [];

  for (const [key, value] of Object.entries(json)) {
    if (isObject(value)) {
      console.log("info : Push Object to List");
      objects.push({
        key: toClassName(key),
        value: value,
        isObjList: false,
      });
    } else if (isArray(value) && isObject(json[key][0])) {
      console.log("info : Push List Object to List");
      objects.push({
        key: toClassName(key),
        value: value,
        isObjList: true,
      });
    }
    return objects;
  }

  console.info(`info: return value:${objects}`);
  return objects;
}
