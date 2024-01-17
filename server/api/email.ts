import { useCompiler } from '#vue-email';

export default defineEventHandler(async () => {
  setResponseHeaders(event, {
    'Access-Control-Allow-Methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Expose-Headers': '*',
  })
  if (event.method === 'OPTIONS') {
    event.node.res.statusCode = 204
    event.node.res.statusMessage = 'No Content.'
    return 'OK'
  }

  const { username } = await readBody(event)

  setTimeout(async () => {
    try {
      const template = await useCompiler('test.vue', {
        props: {
          username: username,
        },
      });
  s
      if (!template) {
        throw createError({
          statusCode: 404,
          statusMessage: 'Not Found',
        });
      }
  
      return template.html;
    } catch (error) {
      console.log(error);
      throw createError({
        statusCode: 500,
        statusMessage: 'Internal error',
      });
    }
  }, 5000)
});
