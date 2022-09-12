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
  getDisplayFileName,
  getEntityFileName,
  getModelFileName,
  getRequestFileName,
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
    getExampleDir(),
    getRequestFileName(dataClassManager.body),
    dataClassManager.requestString
  );
  saveSomeFile(
    getExampleDir(),
    getEntityFileName(dataClassManager.body),
    dataClassManager.entityString
  );
  saveSomeFile(
    getExampleDir(),
    getModelFileName(dataClassManager.body),
    dataClassManager.modelString
  );
  saveSomeFile(
    getExampleDir(),
    getDisplayFileName(dataClassManager.body),
    dataClassManager.displayString
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