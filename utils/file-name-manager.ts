import { MyRequest } from "../models/my-request";
import { toClassName } from "./text-utils";

export function getRequestFileName(request: MyRequest) {
  return `${toClassName(request.feature)}Request.kt`;
}

export function getEntityFileName(request: MyRequest) {
  return `${toClassName(request.feature)}Entity.kt`;
}

export function getModelFileName(request: MyRequest) {
  return `${toClassName(request.feature)}.kt`;
}

export function getDisplayFileName(request: MyRequest) {
  return `${toClassName(request.feature)}Display.kt`;
}