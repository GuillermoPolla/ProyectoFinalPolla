import app from './firebase';
import { getFirestore, collection, getDocs, doc, getDoc } from 'firebase/firestore';

const db = getFirestore(app);

export const getProducts = async () => {
  const productsCollection = collection(db, 'Items'); // Obtén la colección 'Items' de Firebase
  const productsSnapshot = await getDocs(productsCollection);
  const productsList = productsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return productsList;
};

export const getProductById = async (productId) => {
  const productDoc = doc(db, 'Items', productId); // Corrige 'products' por 'Items'
  const productSnapshot = await getDoc(productDoc);
  if (productSnapshot.exists()) {
    return { id: productSnapshot.id, ...productSnapshot.data() };
  }
  return null;
};
