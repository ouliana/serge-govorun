import app from './app';
import { config } from './config';
import { Sequelize, QueryTypes } from 'sequelize';

app.get('/', (_req, res) => res.send('Server running'));

app.listen(config.PORT, () => {
  console.log(
    `Server running in ${config.NODE_ENV} mode on port ${config.PORT}`
  );
});

const sequelize = new Sequelize(config.PG_DATABASE_URL as string);

const main = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    const brands = await sequelize.query('SELECT * FROM brands', {
      type: QueryTypes.SELECT,
    });
    console.table(brands);
    sequelize.close();
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

main();
