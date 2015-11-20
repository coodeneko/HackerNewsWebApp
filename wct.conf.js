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
      },
      {
        browserName: "chrome",
        platform: "46",
        version: "windows 10",
      },
      {
        browserName: "firefox",
        platform: "42",
        version: "windows 10",
      }
    ]
    }
  },
};
