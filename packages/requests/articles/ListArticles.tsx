import QueryFirestoreDB from "../firebase";

type ListResponse = {
  id: string;
  title: string;
  subtitle: string;
  body: string;
  tags: string[];
  created_at: string;
  updated_at: string;
  is_public: boolean;
};

// TODO: axios経由にする
const RequestListArticles = async (verified: boolean): Promise<ListResponse[]> => {
  const db = QueryFirestoreDB()
  const docRef = await db.collection("articles").get();

  var responses: ListResponse[] = [];
  docRef.forEach((doc: any) => {
    const data = doc.data();
    if (verified || data.is_public == true) {
      responses.push(doc.data())
    }
  }) 
    
  responses.sort((a, b) => {
    if(a.created_at < b.created_at) {
      return 1;
    } else if(a.created_at > b.created_at) {
      return -1;
    } else {
      return 0;
    }
  })

  return responses;
};

export default RequestListArticles;