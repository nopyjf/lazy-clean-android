import { NextApiRequest, NextApiResponse } from "next/types";
import { MyResponse } from "../../../models/my-response";
import {
  addFirstRequestJson,
  DataClassManager,
  mapRequestDataClass,
  mapJsonString,
  mapResponseDataClass,
  addFirstResponseJson,
} from "../../../utils/data-class-manager";
import { getExampleDir, saveSomeFile } from "../../../utils/file-manager";
import {
  getApiFileName,
  getControllerFileName,
  getDisplayFileName,
  getDisplayMapperFileName,
  getEntityFileName,
  getEntityMapperFileName,
  getModelFileName,
  getRepositoryContractorFileName,
  getRepositoryFileName,
  getRequestFileName,
  getServiceFileName,
  getUseCaseFileName,
} from "../../../utils/file-name-manager";
import { toJson } from "../../../utils/json-manager";
import { loadTemplate, TemplateData } from "../../../utils/load-template";

const post = async (req: NextApiRequest) => {
  let template: TemplateData = await loadTemplate();
  let dataClassManager = new DataClassManager(template, req.body);

  addFirstRequestJson(dataClassManager);
  mapRequestDataClass(dataClassManager, toJson(req.body.requestJson));

  addFirstResponseJson(dataClassManager);
  mapResponseDataClass(dataClassManager, toJson(req.body.responseJson));

  mapJsonString(dataClassManager);

  saveSomeFile(
    getExampleDir(dataClassManager.body),
    getRequestFileName(dataClassManager.body),
    dataClassManager.requestString
  );
  saveSomeFile(
    getExampleDir(dataClassManager.body),
    getEntityFileName(dataClassManager.body),
    dataClassManager.entityString
  );
  saveSomeFile(
    getExampleDir(dataClassManager.body),
    getModelFileName(dataClassManager.body),
    dataClassManager.modelString
  );
  saveSomeFile(
    getExampleDir(dataClassManager.body),
    getDisplayFileName(dataClassManager.body),
    dataClassManager.displayString
  );
  saveSomeFile(
    getExampleDir(dataClassManager.body),
    getServiceFileName(dataClassManager.body),
    dataClassManager.serviceString
  );
  saveSomeFile(
    getExampleDir(dataClassManager.body),
    getApiFileName(dataClassManager.body),
    dataClassManager.apiString
  );
  saveSomeFile(
    getExampleDir(dataClassManager.body),
    getRepositoryFileName(dataClassManager.body),
    dataClassManager.repositoryString
  );
  saveSomeFile(
    getExampleDir(dataClassManager.body),
    getRepositoryContractorFileName(dataClassManager.body),
    dataClassManager.repositoryContractorString
  );
  saveSomeFile(
    getExampleDir(dataClassManager.body),
    getUseCaseFileName(dataClassManager.body),
    dataClassManager.usecaseString
  );
  saveSomeFile(
    getExampleDir(dataClassManager.body),
    getControllerFileName(dataClassManager.body),
    dataClassManager.controllerString
  );
  saveSomeFile(
    getExampleDir(dataClassManager.body),
    getEntityMapperFileName(dataClassManager.body),
    dataClassManager.entityMapperString
  );
  saveSomeFile(
    getExampleDir(dataClassManager.body),
    getDisplayMapperFileName(dataClassManager.body),
    dataClassManager.displayMapperString
  );
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<MyResponse>
) {
  console.info("info: [/api/request/create]");

  try {
    if (req.method == "POST") {
      post(req);
      res.status(200).json({ status: 200, description: "Success" });
    } else {
      console.error("error: /api/request/create : handler no method");
      res.status(400).json({ status: 400, description: "No method" });
    }
  } catch (err: any) {
    console.error(`error: /api/request/create : ${err}`);
    res.status(400).json({ status: 400, description: "Error from server" });
  }
}
