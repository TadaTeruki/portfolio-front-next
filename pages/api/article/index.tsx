import { Article, PostRequest, PostResponse } from "../../../model/article";
import RequestVerify from "../../../packages/requests/auth/Verify";
import QueryFirestoreDB from "../../../packages/requests/firebase";

export default async function handler(req: any, res: any) {
  const db = QueryFirestoreDB();
  const { v4: uuidv4 } = require("uuid");
  
  try {
    switch(req.method){
      case "POST":
        await RequestVerify(req.headers.authorization).then(async () => {
          const id_ = uuidv4();
          const body = req.body as PostRequest;
          await db.collection("articles").doc(id_).set(
            {
              id: id_,
              title: body.title,
              subtitle: body.subtitle,
              body: body.body,
              thumbnail: body.thumbnail,
              tags: body.tags,
              created_at: new Date().toISOString(),
              updated_at: new Date().toISOString(),
              is_public: body.is_public,
            } as Article
          );
          res.status(200).json({ id: id_ } as PostResponse);
        }).catch((err) => {
          res.status(401).json({ message:err });
        });
        break;
    }
  } catch(err) {
    res.status(400).json({ message:err });
  }
};