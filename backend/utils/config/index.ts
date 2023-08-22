import 'dotenv/config';

const port = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;

export default { port, MONGODB_URI };
