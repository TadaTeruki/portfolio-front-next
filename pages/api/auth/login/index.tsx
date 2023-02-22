import jwt from 'jsonwebtoken';
import QueryFirestoreDB from '../../../../packages/requests/firebase';

export type LoginRequest = {
  owner_id: string;
  passwd: string;
};

export type LoginResponse = {
  token: string;
};
  
const handler = async (req: any, res: any) => {
  const body: LoginRequest = req.body;

  try {
    switch(req.method){
      case "POST":
        const db = QueryFirestoreDB();

        const doc = await db.collection("owners").doc(body.owner_id).get();
        
        if (doc.exists) {
          if (doc.data().passwd == body.passwd) {
              const token_ = jwt.sign(
                { owner_id: doc.data().owner_id, },
                process.env.NEXT_PUBLIC_SECRET_KEY as string,
              )
              res.status(200).json({ token: token_ } as LoginResponse);
          } else {
              res.status(401).end();
          }
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