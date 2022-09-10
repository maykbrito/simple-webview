const electron = require('electron')
const Store = require('electron-store')
const chokidar = require('chokidar')
const { JSONSchemaType } = require('json-schema-typed')

/**
 * @type {Store.Schema}
 */
const userPreferencesSchema = {
  browserWindow: {
    type: JSONSchemaType.Object,
    properties: {
      width: { type: JSONSchemaType.Number },
      height: { type: JSONSchemaType.Number },
      transparent: { type: JSONSchemaType.Boolean },
      frame: { type: JSONSchemaType.Boolean },
      titleBarStyle: { type: JSONSchemaType.String },
      alwaysOnTop: { type: JSONSchemaType.Boolean }
    }
  },
  url: {
    type: JSONSchemaType.String
  }
}

const userPreferences = new Store({
  schema: userPreferencesSchema,
  watch: true,
  defaults: {
    browserWindow: {
      width: 600,
      height: 400,
      transparent: false,
      frame: true,
      titleBarStyle: 'customButtonsOnHover',
      alwaysOnTop: false
    },
    url: 'https://google.com'
  }
})

chokidar.watch(userPreferences.path).on('change', () => {
  electron.app.relaunch()
  electron.app.exit()
})

module.exports = { userPreferences }
