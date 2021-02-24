import 'dotenv/config';
// @keystone-next may have changed to @keystone or @keystonejs
import { config, createSchema } from '@keystone-next/keystone/schema';
import { createAuth } from '@keystone-next/auth';
import { withItemData, statelessSessions } from '@keystone-next/keystone/session';
import { User } from './schemas/User';
import { Role } from './schemas/Role';
import { Product } from './schemas/Product';
import { OrderItem } from './schemas/OrderItem';
import { Order } from './schemas/Order';
import { CartItem } from './schemas/CartItem';
import { ProductImage } from './schemas/ProductImage';
import { insertSeedData } from './seed-data';
import { sendPasswordResetEmail } from './lib/mail';
import { extendGraphqlSchema } from './mutations';
import { permissionsList } from './schemas/fields';

const databaseUrl = process.env.DATABASE_URL;

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 365,
  secret: process.env.COOKIE_SECRET,
}

const { withAuth } = createAuth({
  listKey: 'User',
  identityField: 'email',
  secretField: 'password',
  initFirstItem: {
    fields: ['name', 'email', 'password'],
    // add roles
  },
  passwordResetLink: {
    async sendToken(args) {
      await sendPasswordResetEmail(args.token, args.identity);
    }
  }
});

export default withAuth(config({
  server: {
    cors: {
      origin: [process.env.FRONTEND_URL],
      credentials: true,
    }
  },
  db: {
    adapter: 'mongoose',
    url: databaseUrl,
    async onConnect(keystone) {
      if(process.argv.includes('--seed-data')) {
        await insertSeedData(keystone);
      }
    },
  },
  lists: createSchema({
    User,
    Product,
    ProductImage,
    CartItem,
    OrderItem,
    Order,
    Role,
  }),
  extendGraphqlSchema,
  ui: {
    // show ui for people who pass test
    isAccessAllowed: ({ session }) => session,
  },
  session: withItemData(statelessSessions(sessionConfig), {
    User: `id name email role { ${permissionsList.join(' ')} }`
  }),
}));
