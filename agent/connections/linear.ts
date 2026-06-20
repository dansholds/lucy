import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.linear.app/mcp",
  description:
    "Linear workspace: issues, projects, milestones (cycles), comments, teams, and members. Use for all Linear reads and writes.",
  auth: {
    getToken: async () => ({ token: process.env.LINEAR_AGENT_ACCESS_TOKEN! }),
  },
});
