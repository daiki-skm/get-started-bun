import type { Serve, Server } from "bun";

// make TypeScript happy
declare global {
  var count: number;
  var server: Server;
}

globalThis.count = globalThis.count ?? 0;
globalThis.count++;

// define server parameters
const serverOptions: Serve = {
  port: 3000,
  fetch(req) {
    return new Response(`Reloaded ${globalThis.count} times`);
  },
};

if (!globalThis.server) {
  globalThis.server = Bun.serve(serverOptions);
} else {
  // reload server
  globalThis.server.reload(serverOptions);
}
