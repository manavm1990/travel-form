import client from './client';

export const addTravel = async (newTravel) => {
  try {
    const insertRes = await client
      .db('travel')
      .collection('travel')
      .insertOne(newTravel);
    return insertRes;
  } catch (err) {
    throw new Error(err);
  }
};

export const deleteAllTravels = async () => {
  try {
    const delRes = await client
      .db('travel')
      .collection('travel')
      .deleteMany({ firstName: 'man' });
    return delRes;
  } catch (err) {
    console.error(err);
  }
};

export const showTravels = async (email) => {
  try {
    const showRes = await client
      .db('travel')
      .collection('travel')
      .find({ email })
      // 'Mongo find' returns a 'cursor' that we must turn to an Array
      .toArray();
    return showRes;
  } catch (err) {
    console.error(err);
  }
};
