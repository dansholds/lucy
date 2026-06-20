import { connectSlackCredentials } from "@vercel/connect/eve";
import { defaultSlackAuth, loadThreadContextMessages, slackChannel } from "eve/channels/slack";

export default slackChannel({
  credentials: connectSlackCredentials(process.env.SLACK_CONNECTOR ?? "slack/lucy"),
  async onAppMention(ctx, message) {
    const auth = defaultSlackAuth(message, ctx);
    const prior = await loadThreadContextMessages(ctx.thread, message, {
      since: "last-agent-reply",
    });
    if (prior.length === 0) return { auth };
    const transcript = prior
      .map((m) => `${m.isMe ? "lucy" : (m.user ?? "user")}: ${m.markdown}`)
      .join("\n");
    return { auth, context: [`Thread context since last reply:\n\n${transcript}`] };
  },
});
