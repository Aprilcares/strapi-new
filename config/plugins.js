module.exports = ({ env }) => ({
    'users-permissions': {
      config: {
      jwtSecret: env('JWT_SECRET'),
      },
    },
    graphql: {
      config: {
        endpoint: '/graphql',
        shadowCRUD: true,
        playgroundAlways: true,
        depthLimit: 10,
        amountLimit: 100,
        apolloServer: {
          tracing: false,
          introspection: true,
        },
      },
    },
    upload: {
      config: {
        provider: 'strapi-provider-upload-supabase-storage',
        providerOptions: {
          apiUrl: env('SUPABASE_API_URL'),
          apiKey: env('SUPABASE_API_KEY'),
          bucket:env('SUPABASE_BUCKET'),
          directory: env('SUPABASE_BUCKET')
        },
        actionOptions: {
          upload: {},
          uploadStream: {},
        },
      },
    },
    // upload: {
    //   config: {
    //     provider: 'cloudinary',
    //     providerOptions: {
    //       cloud_name: env('CLOUDINARY_NAME'),
    //       api_key: env('CLOUDINARY_KEY'),
    //       api_secret: env('CLOUDINARY_SECRET'),
    //     },
    //     actionOptions: {
    //       upload: {},
    //       delete: {},
    //     },
    //   },
    // },
  });
