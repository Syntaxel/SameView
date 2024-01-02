import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth';
import {sign} from 'jsonwebtoken';
import 'dotenv/config';
import firebaseApp from '../pages/api/firebase.js';

const generateJWT = (uid) => {

    return sign({ uid }, `${process.env.SECRET_KEY}`, { expiresIn: '1d' });
  };

export const loginUser = async (email, password) => {
    const auth = getAuth(firebaseApp);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
  
      // Kullanıcının Firebase UID'siyle JWT oluştur
      const token = generateJWT(user.uid);
      
      return { user, token };
    } catch (error) {
      throw new Error('Authentication failed');
    }
  };

export const registerUser = async (email, password) => {
    console.log(process.env.JWT_SECRET)
    const auth = getAuth(firebaseApp);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log(userCredential);
      const user = userCredential.user;
  
      // Kullanıcının Firebase UID'siyle JWT oluştur
      const token = generateJWT(user.uid);
      console.log(token)
      return { user, token };
    } catch (error) {
        console.error('Firebase Authentication Error:', error.code, error.message);
        throw new Error('Registration failed');
      }
    
  };