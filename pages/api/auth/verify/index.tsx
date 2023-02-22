import jwt, { JwtPayload } from 'jsonwebtoken';
import QueryFirestoreDB from '../../../../packages/requests/firebase';

export type VerifyResponse = {
  owner_id: string | null;
};

const handler = async (req: any, res: any) => {
  try {
    switch(req.method){
      case "GET":
        var token = req.headers.authorization;

        if (!token) {
          return res.status(401).end();
        }

        if (token.startsWith("Bearer ")) {
          token = token.slice("Bearer ".length).trim();
        }

        const payload = jwt.verify(token, process.env.NEXT_PUBLIC_SECRET_KEY as string) as JwtPayload;

        const db = QueryFirestoreDB();
        const doc = await db.collection("owners").doc(payload.owner_id).get();
        if (doc.exists) {
          res.status(200).json({ owner_id: doc.data().owner_id } as VerifyResponse);
        } else {
          res.status(404).end();
        }
        break;
    }
  } catch(err) {
    res.status(400).json({ message:err });
  }
};

export default handler;