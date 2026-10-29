# Pesquisa de melhorias (29/10/2026)

Pedidos de usuários do Claude (app, claude.ai e Claude Code) e conceitos de design, usados para decidir o que o Claudinho ganha. Os votos (👍) são das issues de `anthropics/claude-code`.

## Feito nesta rodada

| Pedido | Sinal | Fonte |
|---|---|---|
| Fixar conversas no topo | vários duplicados | [#35185](https://claudeissues.com/issue/35185-claude-desktop-add-right-click-rename-and-favorites-for-sidebar-conversations), [#70104](https://github.com/anthropics/claude-code/issues/70104) |
| Buscar dentro das mensagens | muitas extensões só pra isso | [dev.to](https://dev.to/codedcitadel/claude-has-no-way-to-search-your-conversations-so-i-built-one-free-1ccl) |
| Exportar conversa | #13714 e outras | [#13714](https://claudeissues.com/issue/13714-feature-request-support-multiple-conversation-export-formats-md-html-json) |
| Hora em cada mensagem | 96 👍 + 15 duplicados | [#44763](https://github.com/anthropics/claude-code/issues/44763) |
| Pular entre os próprios prompts | 8+ issues | [#70678](https://claudeissues.com/issue/70678-keyboard-navigation-between-user-messages-in-chat-conversation-jump-to-previous) |
| Botão "ir para o fim" | #66272 e outras | [#66272](https://claudeissues.com/issue/66272-bug-reopening-a-long-chat-tab-session-scrolls-to-the-first-message-no-jump-to-la) |
| Fila de mensagens enquanto ele trabalha | 215 👍 | [#50246](https://github.com/anthropics/claude-code/issues/50246) |
| Plano (lista de tarefas) sempre visível | 182 👍 | [#6654](https://github.com/anthropics/claude-code/issues/6654) |
| Medidor de contexto | 149 👍 | [#18456](https://github.com/anthropics/claude-code/issues/18456) |
| Ramificar a conversa ("fork daqui") e duplicar | 45 👍 + extensões | [#32631](https://github.com/anthropics/claude-code/issues/32631), [#16236](https://github.com/anthropics/claude-code/issues/16236) |
| Notificação ao terminar / pedir aprovação | 56 👍 | [#57230](https://github.com/anthropics/claude-code/issues/57230) |
| Ler resposta em voz alta | #58429 | [#58429](https://claudeissues.com/issue/58429-a11y-feature-request-built-in-option-to-speak-claudes-responses-aloud) |
| Atalho global e lista de atalhos | #40690, #48482 | [#40690](https://claudeissues.com/issue/40690-feature-keep-quick-entry-responses-in-overlay-on-current-screen) |
| Seletor de esforço e modelo explicados | composer com chips de estado (conceito Clui) | [Clui](https://github.com/Youssef2430/clui) |

## Feito na segunda rodada

Raciocínio recolhível (#8477), texto colado como anexo editável (#3412), diffs nas edições + desfazer por mensagem com prévia (#33932, `enableFileCheckpointing` + `rewindFiles`), perguntas do Claude como formulário (#73125), limite do plano com "continuar sozinho" (#13354, `rate_limit_event`), título automático (#2112), Enter/Ctrl+Enter (#2054), papel de parede e Clawd reagindo ao agente (Pixel Agents, clawd-pet), trilho de atividade (agent-flow), transição em dither (Maxime Heckel), títulos que se decifram (Text Scramble).

## Feito na terceira rodada

Várias janelas (#30154), grupos e cores na barra lateral (#36866), respostas longas em camadas (Billi Aspinwall), linha do tempo rebobinável (trilho + desfazer), revisão de todas as alterações (#33932), janelas flutuantes "Claudinho OS" (Poolsuite), menu radial (ray-menu), modo terminal com `!` (Warp), saídas com cara de CRT (cool-retro-term), rótulos em fonte pixel (Silkscreen) e o Clawd em todo o app (clawd-pet, ClawdMoji).

## Candidatos (histórico)

| Pedido | Sinal | Como fazer |
|---|---|---|
| Mostrar o raciocínio (thinking) recolhível | 337 👍 | [#8477](https://github.com/anthropics/claude-code/issues/8477): blocos `thinking` do stream |
| Ver/editar texto colado antes de enviar | 292 👍 | [#3412](https://github.com/anthropics/claude-code/issues/3412): chip expansível no campo |
| Revisar diffs por arquivo/trecho, com desfazer | 220 👍 | [#33932](https://github.com/anthropics/claude-code/issues/33932): diff dos Edit/Write + `enableFileCheckpointing`/`rewindFiles` |
| Continuar sozinho quando o limite resetar / cota visível | 211 👍, 129 👍 | [#13354](https://github.com/anthropics/claude-code/issues/13354), [#13585](https://github.com/anthropics/claude-code/issues/13585): evento `rate_limit_event` |
| Título automático da conversa | 170 👍 | [#2112](https://github.com/anthropics/claude-code/issues/2112) |
| Várias janelas / destacar conversa | 255 👍 | [#30154](https://github.com/anthropics/claude-code/issues/30154) |
| Tamanho de fonte e largura do chat | 134 👍 | [#48237](https://github.com/anthropics/claude-code/issues/48237) |
| Enter = nova linha, Ctrl+Enter = enviar (opção) | 161 👍 | [#2054](https://github.com/anthropics/claude-code/issues/2054) |
| Responder AskUserQuestion como formulário | 388 👍 (bug) | [#73125](https://github.com/anthropics/claude-code/issues/73125) |
| Pastas/cores na barra lateral | muitos duplicados | [#36866](https://github.com/anthropics/claude-code/issues/36866) |
| Papel de parede que reage ao agente (pensando, editando, esperando) | conceito | [Pixel Agents](https://github.com/pablodelucca/pixel-agents) |
| Linha do tempo das ferramentas, rebobinável | conceito | [Agent Flow](https://github.com/patoles/agent-flow), [crystl](https://crystl.dev/blog/what-a-claude-code-gui-should-do/) |
| Respostas longas em camadas (resumo → detalhes) | conceito | [Billi Aspinwall](https://contra.com/p/PBgvcWeM-claude-redesigning-ai-for-clarity) |

## Referências de design

- Redesign oficial do Claude Code desktop: https://claude.com/blog/claude-code-desktop-redesign
- "What a Claude Code GUI should do" (crystl): https://crystl.dev/blog/what-a-claude-code-gui-should-do/
- Nodea, conversa em árvore: https://nodea.ai/what-is-nodea
- Zed, painel do agente (seguir o agente, aceitar por trecho): https://zed.dev/docs/ai/agent-panel
- Layout de chat em duas colunas (Luke Wroblewski): https://www.goodreads.com/author_blog_posts/26179329-an-alternative-chat-ui-layout
- Warp, modelo de blocos: https://www.warp.dev/blog/block-model-behind-warps-agentic-development-environment
