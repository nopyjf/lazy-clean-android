import { MyRequest } from "../models/my-request";
import { getClassType, getEntityMapperField, isArray, isObject } from "./class-type-manager";
import { ObjectItem } from "./data-class-manager";
import { getTemplateDir, readSomeFile } from "./file-manager";
import { toClassName, toFieldName } from "./text-utils";

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
  service: string = "";
  api: string = "";
  repository: string = "";
  repositoryContractor: string = "";
  usecase: string = "";
  controller: string = "";
  entityMapper: string = "";
  entityMapperField: string = "";
  entityMapperMethod: string = "";
  entityMapperListMethod: string = "";
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
  data.service = await readSomeFile(getTemplateDir(), "service.txt");
  data.api = await readSomeFile(getTemplateDir(), "api.txt");
  data.repository = await readSomeFile(getTemplateDir(), "repository.txt");
  data.repositoryContractor = await readSomeFile(getTemplateDir(), "repository-contractor.txt");
  data.usecase = await readSomeFile(getTemplateDir(), "usecase.txt");
  data.controller = await readSomeFile(getTemplateDir(), "controller.txt");
  data.entityMapper = await readSomeFile(getTemplateDir(), "entity-mapper.txt");
  data.entityMapperMethod = await readSomeFile(getTemplateDir(), "entity-mapper-method.txt");
  data.entityMapperListMethod = await readSomeFile(getTemplateDir(), "entity-mapper-list-method.txt");
  data.entityMapperField = await readSomeFile(getTemplateDir(), "entity-mapper-field.txt");
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
      let content = data.entityClass
        .replaceAll("${fields}", fields)
        .replaceAll("${className}", `${request.class}${objects[i]?.key}`);
      classContent += `${content}\n\n`;
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
      let content = data.modelClass
        .replaceAll("${fields}", fields)
        .replaceAll("${className}", `${request.class}${objects[i]?.key}`);
      classContent += `${content}\n\n`;
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
      let content = data.displayClass
        .replaceAll("${fields}", fields)
        .replaceAll("${className}", `${request.class}${objects[i]?.key}`);
      classContent += `${content}\n\n`;
    }
    return classContent;
  };

  return data.display
    .replaceAll("${feature}", request.feature)
    .replaceAll("${classes}", getClasses())
    .replaceAll("${className}", request.class.toLowerCase());
}

export function getServiceTemplate(
  data: TemplateData,
  request: MyRequest,
): string {
  return data.service
    .replaceAll("${feature}", request.feature)
    .replaceAll("${featureUpper}", toClassName(request.feature))
    .replaceAll("${method}", request.method)  
    .replaceAll("${className}", request.class)
    .replaceAll("${methodLower}", request.method.toLowerCase())
    .replaceAll("${api}", request.api)
    .replaceAll("${package}", request.package);
}

export function getApiTemplate(
  data: TemplateData,
  request: MyRequest,
): string {
  return data.api
    .replaceAll("${feature}", request.feature)
    .replaceAll("${featureUpper}", toClassName(request.feature))
    .replaceAll("${className}", request.class)
    .replaceAll("${methodLower}", request.method.toLowerCase())
    .replaceAll("${package}", request.package);
}

export function getRepositoryTemplate(
  data: TemplateData,
  request: MyRequest,
): string {
  return data.repository
    .replaceAll("${feature}", request.feature)
    .replaceAll("${featureUpper}", toClassName(request.feature)) 
    .replaceAll("${className}", request.class)
    .replaceAll("${methodLower}", request.method.toLowerCase())
    .replaceAll("${package}", request.package);
}

export function getRepositoryContractorTemplate(
  data: TemplateData,
  request: MyRequest,
): string {
  return data.repositoryContractor
    .replaceAll("${feature}", request.feature)
    .replaceAll("${featureUpper}", toClassName(request.feature))
    .replaceAll("${className}", request.class)
    .replaceAll("${methodLower}", request.method.toLowerCase())
    .replaceAll("${package}", request.package);
}

export function getUseCaseTemplate(
  data: TemplateData,
  request: MyRequest,
): string {
  return data.usecase
    .replaceAll("${feature}", request.feature)
    .replaceAll("${featureUpper}", toClassName(request.feature))
    .replaceAll("${className}", request.class)
    .replaceAll("${methodLower}", request.method.toLowerCase())
    .replaceAll("${methodCap}", toClassName(request.method))
    .replaceAll("${package}", request.package);
}

export function getControllerTemplate(
  data: TemplateData,
  request: MyRequest,
): string {
  return data.controller
    .replaceAll("${feature}", request.feature)
    .replaceAll("${featureUpper}", toClassName(request.feature))
    .replaceAll("${className}", request.class)
    .replaceAll("${classNameLower}", toFieldName(request.class))
    .replaceAll("${methodLower}", request.method.toLowerCase())
    .replaceAll("${methodCap}", toClassName(request.method))
    .replaceAll("${package}", request.package);
}

export function getEntityMapperTemplate(
  data: TemplateData,
  request: MyRequest,
  objects: [ObjectItem?]
): string {

  const getFields = (obj: any): string => {
    var fieldsContent = "";

    for (let key in obj.value) {
      let mapper: string = getEntityMapperField(key, obj.value[key]);
      let content: string = data.entityMapperField
        .replaceAll("${field}", key)
        .replaceAll("${mapper}", mapper)
      fieldsContent += `${content}\n`;
    }

    console.log(fieldsContent);

    return fieldsContent;
  }

  const getMethod = () => {

    var methodContent = "";
    
    for (let i in objects) {
      let fields = getFields(objects[i]);
      try {
        let template = getTemplate(objects[i], fields);
        methodContent += `${template}\n\n`;
      } catch (err: any) {
        continue;
      }
    }

    return methodContent;
  };

  const getTemplate = (obj: any, fields: string) => {

    if (isArray(obj)) {
      return data.entityMapperListMethod
        .replaceAll("${fields}", fields)
        .replaceAll("${className}", `${toClassName(`${request.class}${obj.key}`)}`);
    } else if (isObject(obj)) {
      return data.entityMapperMethod
        .replaceAll("${fields}", fields)
        .replaceAll("${className}", `${toClassName(`${request.class}${obj.key}`)}`);
    }
    
    throw Error('No class type');
  }

  return data.entityMapper
    .replaceAll("${feature}", request.feature)
    .replaceAll("${className}", request.class)
    .replaceAll("${method}", getMethod());
}