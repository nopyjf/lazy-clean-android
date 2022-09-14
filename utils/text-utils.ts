import camelcase from "camelcase";

export function toClassName(className: string) {
  return camelcase(className, { pascalCase: true });
}

export function toFieldName(className: string) {
  return camelcase(className);
}