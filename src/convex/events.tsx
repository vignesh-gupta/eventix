import { query } from "./_generated/server";

export const getEvents = query({
  args: {},
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) throw new Error("Unauthenticated User");

    // TODO: Add filtering logic based on the filters passed

    const events = await ctx.db.query("events").collect();

    return events;
  },
});
