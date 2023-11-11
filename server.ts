import app from './src/app';
import { config } from './src/utils/config';
import { logger } from './src/utils/logger';

app.listen(config.PORT, () => {
  logger.info(
    `Server running in ${config.NODE_ENV} mode on port ${config.PORT}`
  );
});
