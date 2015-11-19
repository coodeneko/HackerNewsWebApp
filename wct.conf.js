module.exports = {
  plugins: {
    local: {
      browsers: ['chrome']
    },
    sauce: {
      browsers: [
      {
        browserName: "iphone",
        platform: "OS X 10.9",
        version: "8.1",
        deviceName: "iPhone Simulator",
        "device-orientation": "portrait"
      }]
    }
  },
};
