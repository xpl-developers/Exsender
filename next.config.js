const withSass = require('@zeit/next-sass');
module.exports = withSass({
	target: 'serverless',
	/*exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/token-distributor': { page: '/token-distributor' },
      '/eth-distributor': { page: '/eth-distributor' },
      '/lift-wallet': { page: '/lift-wallet' },
      '/faq': { page: '/faq' }
    };
  }*/
});
