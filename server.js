const http = require('http');
const express = require('express');
const ShareDB = require('sharedb');
const richText = require('rich-text');
const WebSocket = require('ws');
const WebSocketJSONStream = require('@teamwork/websocket-json-stream');

const db = require('sharedb-mongo')('mongodb://127.0.0.1:27017/sharedb',{});

// registers the rich-text type with ShareDB
ShareDB.types.register(richText.type);
const backend = new ShareDB({
  presence: true, // allows tracking of active users in the collaborative session
  doNotForwardSendPresenceErrorsToClient: true,
  db
});

// Create initial document then fire callback
const createDoc = (callback) => {
  const connection = backend.connect();
  const doc = connection.get('examples', 'richtext');
  doc.fetch(function(err) {
    if (err) throw err;
    if (doc.type === null) {
      doc.create([], 'rich-text', callback);
      return;
    }
    callback();
  });
}

const startServer = () => {
  // Create a web server to serve files and listen to WebSocket connections
  const app = express();
  app.use(express.static('static'));
  app.use(express.static('node_modules/quill/dist'));
  const server = http.createServer(app);

  // Connect any incoming WebSocket connection to ShareDB
  const wss = new WebSocket.Server({server: server});
  wss.on('connection', function(ws) {
    const stream = new WebSocketJSONStream(ws); // sending and receiving JSON data over the WebSocket connection
    backend.listen(stream);
  });

  server.listen(8080);
  console.log('Listening on http://localhost:8080');
}

createDoc(startServer);
