/**

	This code is generated.
	For more information see generation/README.md.
*/


const log = require('../../utils/logger').child({ __filename });
const util = require('util');


class UiAutomator {
  static uiDevice() {
    return {
      target: {
        type: "Class",
        value: "com.wix.detox.uiautomator.UiAutomator"
      },
      method: "uiDevice",
      args: []
    };
  }

}

module.exports = UiAutomator;