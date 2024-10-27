export default {
  async fetch(request, env, ctx) {
    return handleEvent({ request, env, ctx });
  },
};
