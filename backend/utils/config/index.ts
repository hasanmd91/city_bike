import 'dotenv/config';

const port = process.env.PORT as string;
const MONGODB_URI = process.env.MONGODB_URI as string;

export default { port, MONGODB_URI };
