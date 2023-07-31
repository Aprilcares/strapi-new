module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'e4350524b0689fc3f46e2407dae950e2'),
    },
  },
  app: {
    keys: env.array('APP_KEYS'),
  },
  url:env.array('NEXT_PUBLIC_API_URL'),
});
