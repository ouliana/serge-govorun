import { remultExpress } from 'remult/remult-express'
// import { createPostgresConnection } from 'remult/postgres'
import { Video } from '../shared/video'

export const api = remultExpress({
  entities: [Video],
  // dataProvider: createPostgresConnection({
  //   connectionString: ''
  // })
})
