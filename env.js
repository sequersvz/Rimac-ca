module.exports = {
  development: {
    NODE_ENV: 'development',
    PORT: 3001,
    ASSETS_FOLDER: '/assets/',
    TOKEN:
      'https://leads.auth.us-east-2.amazoncognito.com/oauth2/token?grant_type=client_credentials&client_id=12tl8rseh92bvutem6rscfcdk6&client_secret=mq0bnjcqei1fuqp6du93j4qhrjs3delde5d37clojhngchc2c4i',
    REGISTRAR_DT:
      'https://tx93anyiad.execute-api.us-east-2.amazonaws.com/desa/referenciador/operacion/registrarDt',
    OBTENER_DT:
      'https://tx93anyiad.execute-api.us-east-2.amazonaws.com/desa/referenciador/operacion/obtenerDt',
    REGISTRAR_CONVOCADOS:
      'https://tx93anyiad.execute-api.us-east-2.amazonaws.com/desa/referenciador/operacion/registrarConvocados',
    LISTAR_CONVOCADOS:
      'https://tx93anyiad.execute-api.us-east-2.amazonaws.com/desa/referenciador/operacion/listarConvocados',
    LISTAR_RANKING:
      'https://tx93anyiad.execute-api.us-east-2.amazonaws.com/desa/referenciador/operacion/listarRanking',
    OBTENER_PERSONA:
      'https://tx93anyiad.execute-api.us-east-2.amazonaws.com/desa/referenciador/operacion/obtenerTercero'
  },
  production: {
    NODE_ENV: 'production',
    PORT: 8080,
    ASSETS_FOLDER: '/goleadores/assets/',
    TOKEN:
      'https://leads.auth.us-east-2.amazoncognito.com/oauth2/token?grant_type=client_credentials&client_id=12tl8rseh92bvutem6rscfcdk6&client_secret=mq0bnjcqei1fuqp6du93j4qhrjs3delde5d37clojhngchc2c4i',
    REGISTRAR_DT:
      'https://liwloif8wh.execute-api.us-east-2.amazonaws.com/prod/referenciador/operacion/registrarDt',
    OBTENER_DT:
      'https://liwloif8wh.execute-api.us-east-2.amazonaws.com/prod/referenciador/operacion/obtenerDt',
    REGISTRAR_CONVOCADOS:
      'https://liwloif8wh.execute-api.us-east-2.amazonaws.com/prod/referenciador/operacion/registrarConvocados',
    LISTAR_CONVOCADOS:
      'https://liwloif8wh.execute-api.us-east-2.amazonaws.com/prod/referenciador/operacion/listarConvocados',
    LISTAR_RANKING:
      'https://liwloif8wh.execute-api.us-east-2.amazonaws.com/prod/referenciador/operacion/listarRanking',
    OBTENER_PERSONA:
      'https://liwloif8wh.execute-api.us-east-2.amazonaws.com/prod/referenciador/operacion/obtenerTercero'
  }
}
