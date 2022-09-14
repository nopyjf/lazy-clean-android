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

export function getServiceFileName(request: MyRequest) {
  return `${toClassName(request.feature)}Service.kt`;
}

export function getApiFileName(request: MyRequest) {
  return `${toClassName(request.feature)}Api.kt`;
}

export function getRepositoryFileName(request: MyRequest) {
  return `${toClassName(request.feature)}Repository.kt`;
}

export function getRepositoryContractorFileName(request: MyRequest) {
  return `${toClassName(request.feature)}RepositoryContractor.kt`;
}

export function getUseCaseFileName(request: MyRequest) {
  return `${toClassName(request.method)}${toClassName(request.class)}UseCase.kt`;
}

export function getControllerFileName(request: MyRequest) {
  return `${toClassName(request.feature)}Controller.kt`;
}

export function getEntityMapperFileName(request: MyRequest) {
  return `${toClassName(request.feature)}EntityMapper.kt`;
}