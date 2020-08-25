import client from './client';

export const addTravel = async (newTravel) => {
  try {
    const insertRes = await client
      .db('travel')
      .collection('travel')
      .insertOne(newTravel);
    return insertRes;
  } catch (err) {
    console.error(err);
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
    console.log('email', email);
    const showRes = await client
      .db('travel')
      .collection('travel')
      .find({ email })
      .toArray();
    return showRes;
  } catch (err) {
    console.error(err);
  }
};
