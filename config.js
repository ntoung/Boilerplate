var config = { };

// should end in /
config.rootUrl  = process.env.ROOT_URL                  || 'http://localhost:3000/';

config.facebook = {
    appId:          process.env.FACEBOOK_APPID          || '486420108124872',
    appSecret:      process.env.FACEBOOK_APPSECRET      || 'fce235e721821be21e9c9189beb90442',
    appNamespace:   process.env.FACEBOOK_APPNAMESPACE   || 'Tessellate',
    redirectUri:    process.env.FACEBOOK_REDIRECTURI    ||  config.rootUrl + 'tessellate/'
};

module.exports = config;