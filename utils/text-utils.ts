import camelcase from "camelcase";

export function toClassName(className: string) {
  console.log(className);
  return camelcase(className, { pascalCase: true });
}

export function toFieldName(className: string) {
  console.log(className);
  return camelcase(className);
}