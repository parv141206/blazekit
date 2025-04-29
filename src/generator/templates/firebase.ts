import { BlazeModel } from "../../types";

/**
 * Generates a complete Firebase (client SDK) Firestore controller with full CRUD.
 * @remarks Uses Firebase client SDK (not Admin). Assumes `db` is your Firestore instance.
 */
export function generateFirebaseClientController(
  model: BlazeModel,
  firestoreImportPath = "../lib/firebase",
): string {
  const modelName = model.name;
  const varName = modelName.toLowerCase();
  const collectionName = `${varName}s`;

  return `
// ------------------------------
// Firebase Firestore Setup (auto-generated)
// ------------------------------
import { db } from "${firestoreImportPath}";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { ${modelName} } from "../types/${modelName}";


// ------------------------------
// CRUD Operations for ${modelName}
// ------------------------------

export async function create${modelName}(data: ${modelName}) {
  const colRef = collection(db, "${collectionName}");
  const docRef = await addDoc(colRef, data);
  const snapshot = await getDoc(docRef);
  return { id: docRef.id, ...snapshot.data() } as ${modelName};
}

export async function getAll${modelName}s() {
  const colRef = collection(db, "${collectionName}");
  const snapshot = await getDocs(colRef);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as ${modelName}[];
}

export async function get${modelName}ById(id: string) {
  const docRef = doc(db, "${collectionName}", id);
  const snapshot = await getDoc(docRef);
  if (!snapshot.exists()) return null;
  return { id: snapshot.id, ...snapshot.data() } as ${modelName};
}

export async function update${modelName}(id: string, data: Partial<${modelName}>) {
  const docRef = doc(db, "${collectionName}", id);
  await updateDoc(docRef, data);
  return get${modelName}ById(id);
}

export async function delete${modelName}(id: string) {
  const docRef = doc(db, "${collectionName}", id);
  await deleteDoc(docRef);
  return { id };
}
`;
}
