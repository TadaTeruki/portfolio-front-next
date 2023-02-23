function QueryFirestoreDB() {
  var FirebaseAdmin = require("firebase-admin");
  if(FirebaseAdmin.apps.length == 0) {
    var ServiceAccount = {
      "type": process.env.NEXT_PUBLIC_FIREBASE_TYPE,
      "project_id": process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      "private_key_id": process.env.NEXT_PUBLIC_FIREBASE_PRIVATE_KEY_ID,
      "private_key": process.env.NEXT_PUBLIC_FIREBASE_PRIVATE_KEY,
      "client_email": process.env.NEXT_PUBLIC_FIREBASE_CLIENT_EMAIL,
      "client_id": process.env.NEXT_PUBLIC_FIREBASE_CLIENT_ID,
      "auth_uri": process.env.NEXT_PUBLIC_FIREBASE_AUTH_URI,
      "token_uri": process.env.NEXT_PUBLIC_FIREBASE_TOKEN_URI,
      "auth_provider_x509_cert_url": process.env.NEXT_PUBLIC_FIREBASE_AUTH_PROVIDER_CERT_URL,
      "client_x509_cert_url": process.env.NEXT_PUBLIC_FIREBASE_CLIENT_CERT_URL,
    }
    FirebaseAdmin.initializeApp({
      credential: FirebaseAdmin.credential.cert(ServiceAccount)
    });
  }

  return FirebaseAdmin.firestore()
}

export default QueryFirestoreDB
