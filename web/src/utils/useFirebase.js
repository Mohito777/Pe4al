import { useEffect, useState } from "react";
import getFirebase from "../utils/firebase"; // Импортируйте функцию getFirebase из файла firebase.js

export default function useFirebase() {
  const [instance, setInstance] = useState(null);

  useEffect(() => {
    const initializeFirebase = async () => {
      const firebaseInstance = await getFirebase();
      setInstance(firebaseInstance);
    };

    initializeFirebase();
  }, []);

  return instance;
}
