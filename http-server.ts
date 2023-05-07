import { type Serve } from "bun";

globalThis.count = globalThis.count ?? 0;
globalThis.count++;

export default {
  fetch(req: Request) {
    return new Response(`Reloaded ${globalThis.count} times`);
  },
  port: 3000,
} satisfies Serve;
