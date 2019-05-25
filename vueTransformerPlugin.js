var upstreamTransformer = require("metro/src/transformer");

var vueNaiveScripts = require("vue-native-scripts");
var vueExtensions = ["vue"]; // <-- Add other extensions if needed.

module.exports.transform = function({ src, filename, options }) {
  if (vueExtensions.some(ext => filename.endsWith("." + ext))) {
    return vueNaiveScripts.transform({ src, filename, options });
  }
  return upstreamTransformer.transform({ src, filename, options });
};
