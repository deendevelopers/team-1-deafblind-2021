import { getFirestore } from "firebase-admin/firestore";

const db = getFirestore();
const docRef = db.collection('users').doc('alovelace');


const updateUser = async () => {
    await docRef.set({
        first: 'Ada',
        last: 'Lovelace',
        born: 1815
      });
}

export default updateUser