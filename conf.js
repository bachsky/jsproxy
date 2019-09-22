jsproxy_config({
  ver: '110',

  static_boost: {
    enable: true,
    ver: 62
  },

  node_map: {
    'mysite': {
      label: 'Current site',
      lines: {
        [location.host]: 1,
      }
    },
    'cfworker': {
      label: '',
      hidden: true,
      lines: {
        'b.jsproxy.workers.dev': 1,
      }
    }
  },

  node_default: 'mysite',


  node_acc: 'cfworker',


  // assets_cdn: 'https://cdn.jsdelivr.net/gh/zjcqoo/zjcqoo.github.io@master/assets/',

  assets_cdn: 'assets/',

  index_path: 'index_v3.html',

  direct_host_list: 'cors_v1.txt',

  /**
   */
  inject_html: '<!-- custom html -->',

  /**
   */
  url_handler: {
  }
})
