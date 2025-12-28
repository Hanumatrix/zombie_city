import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  gameStats: defineTable({
    username: v.string(),
    ipAddress: v.string(),
    kills: v.number(),
    time: v.number(),
    waves: v.number(),
    timestamp: v.number(),
  })
    .index("by_username", ["username"])
    .index("by_kills", ["kills"]),
});
