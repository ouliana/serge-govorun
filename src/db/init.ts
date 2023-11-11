import Brand from './models/Brand';

const isDev = process.env.NODE_ENV === 'development';

const dbInit = () => {
  Brand.sync({ alter: isDev });
};
export default dbInit;
