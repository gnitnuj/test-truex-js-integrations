// Setup "DOM" since this is running in the context of Node
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM("<!doctype html><html><body></body></html>");
// Save these two objects in the global space as client.js expects them
global.document = window.document;
global.window = window;
global.truex = {};

// Require npm installed module
const TruexAdClient = require("@truex/js-ad-client");
// Initialize module
TruexAdClient(global.truex);

// Some simple tests and output
console.log('global.truex:');
console.log(global.truex);
console.log(`xdm exists: ${typeof global.truex.xdm === 'object' && global.truex.xdm !== null}`);
console.log(`client exists: ${typeof global.truex.client === 'function'}`);