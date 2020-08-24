import client from './client';

const addTravel = async (newTravel) => {
  try {
    const insertRes = await client.db('travel').collection('travel').insertOne(newTravel);
    return insertRes;
  } catch (err) {
    console.error(err);
  }
};

export default addTravel;
