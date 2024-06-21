window.ITInjectSetupWebViewJavascriptBridge(function(bridge) {
	
  bridge.registerHandler('JS Echo', function(data, responseCallback) {
		console.log("JS Echo called with:", data);
		responseCallback(data);
	});

	bridge.callHandler('ObjC Echo', {'key':'value'}, function responseCallback(responseData) {
		console.log("JS received response:", responseData);
	});

  bridge.callHandler('getInfo', { 
    'cfg': ['version', 'atIntervals', 'atDurations', 'hehehe'], 
    'ua': ['version', 'timestamp', 'userAgent', 'lilili'], 
    'base': ['deviceID', 'appBundleID', 'appVersion', 'batteryLevel', 'carrier', 'lalala'] 
  }, function(responseData) {
    setTimeout(() => {
      console.log(responseData);
    }, 5000);
  });
  
});