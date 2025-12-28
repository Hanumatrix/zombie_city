import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const saveGameStats = mutation({
  args: {
    username: v.string(),
    ipAddress: v.string(),
    kills: v.number(),
    time: v.number(),
    waves: v.number(),
  },
  handler: async (ctx, args) => {
    console.log("Mutation called with:", args);

    const result = await ctx.db.insert("gameStats", {
      username: args.username,
      ipAddress: args.ipAddress,
      kills: args.kills,
      time: args.time,
      waves: args.waves,
      timestamp: Date.now(),
    });

    console.log("Successfully saved with ID:", result);
    return { success: true, id: result };
  },
});

export const getTopScores = query({
  args: {},
  handler: async (ctx) => {
    const scores = await ctx.db.query("gameStats").order("desc").collect();

    return scores.sort((a, b) => b.kills - a.kills).slice(0, 50);
  },
});
