import { MyRequest } from "../models/my-request";
import { isArray, isObject } from "./class-type-manager";
import { toJson } from "./json-manager";
import {
  getApiTemplate,
  getControllerTemplate,
  getDisplayMapperTemplate,
  getDisplayTemplate,
  getEntityMapperTemplate,
  getEntityTemplate,
  getModelTemplate,
  getRepositoryContractorTemplate,
  getRepositoryTemplate,
  getRequestTemplate,
  getServiceTemplate,
  getUseCaseTemplate,
  TemplateData,
} from "./load-template";
import { toClassName } from "./text-utils";

export declare type ObjectItem = {
  key: string;
  value: any;
  isObjList: boolean;
};

export class DataClassManager {
  requestString: string = "";
  entityString: string = "";
  modelString: string = "";
  displayString: string = "";
  serviceString: string = "";
  apiString: string = "";
  repositoryString: string = "";
  repositoryContractorString: string = "";
  usecaseString: string = "";
  controllerString: string = "";
  entityMapperString: string = "";
  displayMapperString: string = "";
  requestObjects: [ObjectItem?] = [];
  responseObjects: [ObjectItem?] = [];
  template: TemplateData;
  body: MyRequest;

  constructor(template: TemplateData, body: MyRequest) {
    this.template = template;
    this.body = body;
  }
}

export function addFirstRequestJson(data: DataClassManager) {
  console.info(`info: [addFirstRequestJson]`);
  console.info(`info: data:${data.body.class}`);
  console.info(`info: data:${data.body.requestJson}`);

  data.requestObjects.push({
    key: toClassName(data.body.class),
    value: toJson(data.body.requestJson),
    isObjList: false,
  });
}

export function addFirstResponseJson(data: DataClassManager) {
  console.info(`info: [addFirstResponseJson]`);
  console.info(`info: data:${data.body.class}`);
  console.info(`info: data:${data.body.responseJson}`);

  data.responseObjects.push({
    key: toClassName(data.body.class),
    value: toJson(data.body.responseJson),
    isObjList: false,
  });
}

export function mapRequestDataClass(data: DataClassManager, json: any) {
  console.info(`info: [mapRequestDataClass]`);
  console.info(`info: data:${data}`);
  console.info(`info: json:${json}`);

  console.log("info : List element in object.");
  const childObjects = getChildObjects(json);

  console.log("info : Push object list into main list.");
  data.requestObjects.push(...childObjects);

  if (childObjects.length > 0) {
    console.log("info : Child Object appeared.");
    childObjects.forEach((obj) => {
      mapRequestDataClass(data, obj?.value);
    });
  }
}

export function mapResponseDataClass(data: DataClassManager, json: any) {
  console.info(`info: [mapResponseDataClass]`);
  console.info(`info: data:${data}`);
  console.info(`info: json:${json}`);

  console.log("info : List element in object.");
  const childObjects = getChildObjects(json);

  console.log("info : Push object list into main list.");
  data.responseObjects.push(...childObjects);

  if (childObjects.length > 0) {
    console.log("info : Child Object appeared.");
    childObjects.forEach((obj) => {
      mapResponseDataClass(data, obj?.value);
    });
  }
}

export function mapJsonString(data: DataClassManager) {
  data.requestString = getRequestTemplate(
    data.template,
    data.body,
    data.requestObjects
  );
  data.entityString = getEntityTemplate(
    data.template,
    data.body,
    data.responseObjects
  );
  data.modelString = getModelTemplate(
    data.template,
    data.body,
    data.responseObjects
  );
  data.displayString = getDisplayTemplate(
    data.template,
    data.body,
    data.responseObjects
  );
  data.serviceString = getServiceTemplate(data.template, data.body);
  data.apiString = getApiTemplate(data.template, data.body);
  data.repositoryContractorString = getRepositoryContractorTemplate(
    data.template,
    data.body
  );
  data.repositoryString = getRepositoryTemplate(data.template, data.body);
  data.usecaseString = getUseCaseTemplate(data.template, data.body);
  data.controllerString = getControllerTemplate(data.template, data.body);
  data.entityMapperString = getEntityMapperTemplate(
    data.template,
    data.body,
    data.responseObjects
  );
  data.displayMapperString = getDisplayMapperTemplate(
    data.template,
    data.body,
    data.responseObjects
  );
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
        value: json[key][0],
        isObjList: true,
      });
    }
  }

  console.info(`info: return value:${objects}`);
  return objects;
}
