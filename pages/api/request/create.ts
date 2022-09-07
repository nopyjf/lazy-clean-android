import { NextApiRequest, NextApiResponse } from "next/types";
import { MyResponse } from "../../../models/my-response";
import { addFirstJson, DataClassManager, mapDataClass, mapJsonString } from "../../../utils/data-class-manager";
import { toJson } from "../../../utils/json-manager";
import { loadTemplate, TemplateData } from "../../../utils/load-template";

const post = async (req: NextApiRequest) => {
  let template: TemplateData = await loadTemplate();
  let dataClassManager = new DataClassManager(template, req.body);
  addFirstJson(dataClassManager);
  mapDataClass(dataClassManager, toJson(req.body.requestJson));
  mapJsonString(dataClassManager)
  console.log(dataClassManager.jsonString);
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<MyResponse>
) {
  console.info('info: [/api/request/create]');

  try {
    if (req.method == 'POST') {
      post(req);
      res.status(200).json({ status: 200, description: 'Success' });
    } else {
      console.error('error: /api/request/create : handler no method');
      res.status(400).json({ status: 400, description: 'No method' });
    }
  } catch (err: any) {
    console.error(`error: /api/request/create : ${err}`);
    res.status(400).json({ status: 400, description: 'Error from server' });
  }
}