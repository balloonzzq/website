module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    {
      name      : 'Website',
      script    : 'app.js',
      cwd: "./",
      env: {
        COMMON_VARIABLE: 'true'
      },
      env_production : {
        NODE_ENV: 'production'
      }
    },
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
    production : {
      user : 'root',
      host : '39.108.217.94',
      ref  : 'origin/master',
      repo : 'https://github.com/balloonzzq/website.git',
      path : '/www/website/production'
    }
  }
};
