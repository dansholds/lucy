import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.linear.app/sse",
  description:
    "Linear workspace: issues, projects, milestones (cycles), comments, teams, and members. Use for all Linear reads and writes.",
  auth: connect(process.env.LINEAR_CONNECTOR ?? "linear/purple-grass"),
});
