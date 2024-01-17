import { useCompiler } from '#vue-email';

export default defineEventHandler(async (event) => {
  const { username } = await readBody(event)

  setTimeout(async () => {
    try {
      const template = await useCompiler('test.vue', {
        props: {
          username,
        },
      });
      if (!template) {
        throw createError({
          statusCode: 404,
          statusMessage: 'Not Found',
        });
      }
  
      return template.html;
    } catch (error) {
      throw createError({
        statusCode: 500,
        statusMessage: 'Internal error',
      });
    }
  }, 5000)
});
