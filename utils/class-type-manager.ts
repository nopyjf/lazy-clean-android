import { toClassName } from "./text-utils";

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
