// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage, ref, uploadBytes, getDownloadURL} from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZnPEpfET0lYLQiwFlaeshVwh6DYsgzGA",
  authDomain: "dating-app-c7804.firebaseapp.com",
  projectId: "dating-app-c7804",
  storageBucket: "dating-app-c7804.appspot.com",
  messagingSenderId: "126043418343",
  appId: "1:126043418343:web:97252556189fbcf0e03c42",
  measurementId: "G-BMRP57GL8K"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export async function uploadFileToStorage(file: File, folderName: string){
    if(!file){
        return false;
    }
    const fileRef = ref(storage, `${folderName}/` + file.name);

    let url = await uploadBytes(fileRef, file).then(async res => {
        return await getDownloadURL(res.ref)
        .then(url => url)
        .catch(er => false)
    })

    return url
}