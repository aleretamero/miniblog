import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBleYN26LbYiNL9Ye0Iz2hDAPG2ZUloltM',
  authDomain: 'miniblog-d8213.firebaseapp.com',
  projectId: 'miniblog-d8213',
  storageBucket: 'miniblog-d8213.appspot.com',
  messagingSenderId: '511977692566',
  appId: '1:511977692566:web:7a56edbd28039c8f0dd1b7',
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
