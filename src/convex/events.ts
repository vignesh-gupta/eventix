import { v } from "convex/values";
import { query } from "./_generated/server";

export const getEvents = query({
  args: {
    category: v.optional(v.string()),
    type: v.optional(v.string()),
    search: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) throw new Error("Unauthenticated User");

    // TODO: Add title filtering logic based on the search filter passed

    const { category, search, type } = args;
    console.log(args);

    const events = await ctx.db
      .query("events")
      .filter((q) => (type ? q.eq(q.field("eventType"), type) : true))
      .filter((q) =>
        category
          ? q.eq(
              q.field("category"),
              category.charAt(0).toUpperCase() + category.slice(1)
            )
          : true
      )
      .collect();

    return events;
  },
});
