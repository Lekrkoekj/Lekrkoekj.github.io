function allowFlashGames(flashResourceIdentifier, enabled) {
	chrome.contentSettings.plugins.set({
		'primaryPattern': '*://lekrkoekj.github.io:*/*',
		'setting': 'allow',
		'scope': 'regular',
		'resourceIdentifier': flashResourceIdentifier
	});
    chrome.contentSettings.plugins.set({
		'primaryPattern': '*://lekrkoekj.simpsite.nl:*/*',
		'setting': 'allow',
		'scope': 'regular',
		'resourceIdentifier': flashResourceIdentifier
	});
}

function isIncognito(callback) {
	var fs = window.RequestFileSystem || window.webkitRequestFileSystem;
	if (!fs) {
		return;
	}
	fs(window.TEMPORARY, 100, function(fs) {
		callback(false);
	}, function(err) {
		callback(true);
	});
}

function toggleFlash(options) {
	chrome.contentSettings.plugins.getResourceIdentifiers(function (resourceIdentifiers) {
		for (var resourceIdentifier of resourceIdentifiers) {
			if (resourceIdentifier.id === "adobe-flash-player") {
				flashResourceIdentifier = resourceIdentifier;
				allowFlashGames(resourceIdentifier, true);
				return;
			}
		}
	});
}

function init(details) {
	toggleFlash();
}

chrome.runtime.onInstalled.addListener(function(details) {
	isIncognito(function(result) {
		if (!result) {
			init();
		}
	});
	
	if ((details.reason === 'install') || (details.reason === 'update')) {
		chrome.windows.create({
			url: "https://lekrkoekj.github.io/"
		})
	}
});