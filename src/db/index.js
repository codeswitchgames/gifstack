import db from './db';

export const getAllGifs = (data) => getData('gifs', data);

export const addGif = (data) => addData('gifs', data);

export const checkForGifs = () => {
  db.collection("gifs")
    .onSnapshot(function(snapshot) {
        snapshot.docChanges().forEach(function(change) {
            return true;
        });
    });
  }

export const addData = async (type, data) => {
  let collection = db.collection(type);
  try {
    await collection.add(data).then(docRef => console.log(`Gif added: ${docRef.id}`));
  } catch (e) {
    console.error('Error adding Gif');
  }
};

export const getData = async (type) => {
  let data = [];
  try {
    let collection = db.collection(type).orderBy("time", "desc");
    return await collection.get().then((querySnapshot => {
      querySnapshot.forEach(doc => {
        let temp = doc.data();
        temp.id = doc.id;
        data.push(temp);
      });
    })).then(() => data);
  } catch (e) {
    console.error(`Error getting ${type}s from db`, e);
    return data;
  };
};
