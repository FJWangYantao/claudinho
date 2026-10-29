// Smoke test of the Claude Code bridge outside the window: one short turn,
// printing the kinds of messages that arrive.
// Usage: node tools/teste-sdk.mjs
import { query } from "@anthropic-ai/claude-agent-sdk";

const tipos = {};
let texto = "";
for await (const msg of query({
  prompt: "Responda apenas com a palavra: funcionando",
  options: { cwd: process.cwd(), permissionMode: "plan", includePartialMessages: true, maxTurns: 1 },
})) {
  const k = msg.type + (msg.subtype ? ":" + msg.subtype : "");
  tipos[k] = (tipos[k] || 0) + 1;
  if (msg.type === "stream_event" && msg.event.type === "content_block_delta" && msg.event.delta.type === "text_delta") texto += msg.event.delta.text;
  if (msg.type === "system" && msg.subtype === "init") console.log("modelo:", msg.model, "| sessão:", msg.session_id);
  if (msg.type === "result") console.log("resultado:", msg.subtype, msg.is_error ? "(erro)" : "", "|", msg.result);
}
console.log("texto em streaming:", JSON.stringify(texto));
console.log("mensagens:", tipos);
