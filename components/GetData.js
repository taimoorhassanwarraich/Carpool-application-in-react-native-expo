import { View, Text, Alert } from 'react-native'
import { authentication, db,} from '../firebase';
import { getDoc, doc, getDocs } from "firebase/firestore";
import AsyncStorage from '@react-native-async-storage/async-storage';




//   getDoc(doc(db, "users", id))
//     .then(documentSnapshot => {
//       if (documentSnapshot.exists) {
//         const userData = documentSnapshot.data()
//        const name = userData.name
//         Alert.alert(name)
//          const age = userData.age
//         console.log(age)
//       }
//     })
// };

export default GetData;
