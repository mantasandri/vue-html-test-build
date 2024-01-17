import { useCompiler } from '#vue-email';

export default defineEventHandler(async (event) => {
  const { username } = await readBody(event)

  try {
    console.log('before timeout')
    
    setTimeout(() => {
      console.log('timeout finished')
    }, 1000)

    console.log('after timeout')

    const template = await useCompiler('test.vue', {
      props: {
        username,
      },
    });

    console.log(template)
    
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
});
