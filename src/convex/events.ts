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

    let events = [];

    if (search) {
      events = await ctx.db
        .query("events")
        .withSearchIndex("search_title", (q) => q.search("title", search))
        .collect();
    } else {
      events = await ctx.db.query("events").collect();
    }

    events = events.filter((event) => {
      if (category && event.category !== category) return false;
      if (type) {
        return type === "both" ? true : event.eventType === type;
      }
      return true;
    });

    return events;
  },
});
