import { toClassName, toFieldName } from "./text-utils";

export function isDouble(object: any): boolean {
  return typeof object == "number" && object.toString().includes(".");
}

export function isInt(object: any): boolean {
  return typeof object == "number";
}

export function isString(object: any): boolean {
  return typeof object == "string";
}

export function isBoolean(object: any): boolean {
  return typeof object == "boolean";
}

export function isUndefined(object: any): boolean {
  return typeof object == "undefined";
}

export function isObject(object: any): boolean {
  return object?.constructor === {}.constructor;
}

export function isEmptyArray(object: any): boolean {
  return object?.constructor === [].constructor && object.length == 0;
}

export function isArray(object: any): boolean {
  return object?.constructor === [].constructor && object.length > 0;
}

export function getClassType(
  key: string,
  object: any,
  suffix: string = ""
): string {
  if (isDouble(object)) {
    return `Double`;
  } else if (isInt(object)) {
    return `Int`;
  } else if (isBoolean(object)) {
    return `Boolean`;
  } else if (isObject(object)) {
    return `${toClassName(key)}${suffix}`;
  } else if (isArray(object)) {
    return `List<${toClassName(key)}${suffix}>`;
  } else {
    return `String`;
  }
}

export function getEntityMapperField(key: string, object: any): string {
  if (isArray(object)) {
    return `transform${toClassName(key)}Entities(entity.${key})`;
  } else if (isObject(object)) {
    return `transform${toClassName(key)}Entity(entity.${key})`;
  } else {
    return `entity.${toFieldName(key)}`;
  }
}

export function getDisplayMapperField(key: string, object: any): string {
  if (isArray(object)) {
    return `transform${toClassName(key)}DisplayList(model.${key}) ?: listOf()`;
  } else if (isObject(object)) {
    return `transform${toClassName(key)}Display(model.${key})`;
  } else if (isBoolean(object)) {
    return `model.${toFieldName(key)}.orFalse()`;
  } else if (isString(object)) {
    return `model.${toFieldName(key)}.orEmpty()`;
  } else {
    return `model.${toFieldName(key)}.orZero()`;
  }
}
