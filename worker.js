export default {
  async fetch(request, env) {
    // With "assets" configured in wrangler.toml, env.ASSETS serves static files.
    return env.ASSETS.fetch(request);
  },
};

