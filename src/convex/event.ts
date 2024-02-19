import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const get = query({
  args: {
    id: v.id("events"),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) throw new Error("Unauthenticated identity");

    const event = await ctx.db.get(args.id);

    if (!event) throw new Error("No event found");

    return event;
  },
});

export const create = mutation({
  args: {
    title: v.string(),
    description: v.string(),
    category: v.string(),
    eventType: v.string(),
    from: v.string(),
    till: v.string(),
    location: v.string(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) throw new Error("Unauthenticated identity");

    const { title, description, category, eventType, from, till, location } =
      args;

    const event = ctx.db.insert("events", {
      title: title,
      description: description,
      category: category,
      eventType: eventType,
      from: from,
      till: till,
      location: location,
      createdBy: identity.name || `Clerk User<${identity.email}>`,
    });

    console.log({ event, identity });

    return event;
  },
});
