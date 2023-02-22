function QueryFirestoreDB() {
  var FirebaseAdmin = require("firebase-admin");
  if(FirebaseAdmin.apps.length == 0) {
    var ServiceAccount = require("../../firebaseServiceAccountKey.json");
    FirebaseAdmin.initializeApp({
      credential: FirebaseAdmin.credential.cert(ServiceAccount)
    });
  }

  return FirebaseAdmin.firestore()
}

export default QueryFirestoreDB
