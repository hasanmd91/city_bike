import 'dotenv/config';

const port = process.env.PORT as string;
const MONGODB_URI =
  process.env.NODE_ENV === 'test'
    ? (process.env.TEST_MONGODB_URI as string)
    : (process.env.MONGODB_URI as string);

export default { port, MONGODB_URI };
