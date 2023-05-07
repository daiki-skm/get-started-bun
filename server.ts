// make TypeScript happy
declare global {
  var count: number;
}

globalThis.count = globalThis.count ?? 0;
console.log(`Reloaded ${globalThis.count} times`);
globalThis.count++;

// prevent `bun run` from exiting
setInterval(function () {}, 1000000);
