const MongoClient = require("mongodb").MongoClient;

const MONGODB_URI = process.env.MONGODB_URI;
const DB_NAME = 'dayview'


const connectToDatabase = async (uri) => {
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  await client.connect();
  return await client
    .db(DB_NAME)
}

const persistDayView = async (db, dayView) => {
  const date = (new Date()).toISOString().split('T')[0]
  const query = { _id: date }
  const update = { $set: { _id: date, dayView: dayView } }

  try {
    await db.collection("days").updateOne(query, update, { upsert: true });
    return { statusCode: 201 }
  } catch {
    return { statusCode: 500 }
  }
}

const getDayView = async (db) => {
  const date = (new Date()).toISOString().split('T')[0]
  const query = { _id: date }
  try {
    const dayView = await db.collection('days').findOne(query, {})
    return {
      statusCode: 200,
      body: JSON.stringify(dayView.dayView)
    }
  } catch {
    return { statusCode: 404 }
  }
}

// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const handler = async (event, context) => {
  const db = await connectToDatabase(MONGODB_URI);

  switch (event.httpMethod) {
    case 'GET':
      return getDayView(db);
    case 'POST':
      const dayView = JSON.parse(event.body)
      return persistDayView(db, dayView)
    default:
      return { statusCode: 400 };
  }


}

module.exports = { handler }
