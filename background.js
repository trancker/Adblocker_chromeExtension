const toBeBlocked = [
	"*://*.doubleclick.net/*",
	"*://partner.googleadservices.com/*",
	"*://*.googlesyndication.com/*",
	"*://*.google-analytics.com/*",
	"*://creative.ak.fbcdn.net/*",
	"*://*.adbrite.com/*",
	"*://*.exponential.com/*",
	"*://*.quantserve.com/*",
	"*://*.scorecardresearch.com/*",
    "*://*.zedo.com/*",
    "*://*.nbc.com/*",
    "*://*.imarticus.org/*",
    "*://*.hostinger.in/*",
	"*://*.godaddy.com/*",
	"*://*.godaddy.in/*",
	"*://in.godaddy.in/*",
	"*://*.codota.com/*",
]

chrome.webRequest.onBeforeRequest.addListener(
    function(details) { return { cancel: true }},
    { urls: toBeBlocked },
    ["blocking"]
)

//you can do your research and add some more advertising services to 'toBeBlocked'
//note: to access these web sites(if you ever want to) you need to disable the extension as the requests are blocked by our extension
