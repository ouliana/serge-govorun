import sequelize from './config';

const dbInit = async () => {
  await sequelize.sync();
};
export default dbInit;
