import { ReadRequest, ReadResponse, UpdateRequest } from "../../../model/article";
import RequestVerify from "../../../packages/requests/auth/Verify";
import QueryFirestoreDB from "../../../packages/requests/firebase";


export default async function handler(req: any, res: any) {
  const db = QueryFirestoreDB();
  const query = req.query;
  
  try {
    switch(req.method){
      case "GET":
        const doc = await db.collection("articles").doc((query as ReadRequest).id).get();
        if (doc.exists) {
          res.status(200).json(doc.data() as ReadResponse);
        } else {
          res.status(404).end();
        }
        break;
      case "PUT":{
        await RequestVerify(req.headers.authorization).then(async () => {
          const body = req.body as UpdateRequest;
          await db.collection("articles").doc(query.id).update(body);
          res.status(200).end();
        }).catch((err) => {
          res.status(401).json({ message:err });
        });
        break;
      }
      case "DELETE":
        await RequestVerify(req.headers.authorization).then(async () => {
          await db.collection("articles").doc(query.id).delete();
          res.status(200).end();
        }).catch((err) => {
          res.status(401).json({ message:err });
        });
        break;
    }
  } catch(err) {
    res.status(400).json({ message:err });
  }
};