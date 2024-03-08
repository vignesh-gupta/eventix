import { NO_EVENT_FOUND_ERROR, UNAUTHORIZED_ERROR } from "@/lib/constants";
import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const get = query({
  args: {
    id: v.id("events"),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) throw new Error(UNAUTHORIZED_ERROR);

    const event = await ctx.db.get(args.id);

    if (!event) throw new Error(NO_EVENT_FOUND_ERROR);

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

    console.log({ identity });

    const event = ctx.db.insert("events", {
      title: title,
      description: description,
      category: category,
      eventType: eventType,
      from: from,
      till: till,
      location: location,
      createdBy: identity.name || `Clerk User<${identity.email}>`,
      creatorId: identity.subject,
    });

    console.log({ event, identity });

    return event;
  },
});

export const remove = mutation({
  args: {
    id: v.id("events"),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) throw new Error(UNAUTHORIZED_ERROR);

    const event = await ctx.db.get(args.id);

    if (!event) throw new Error(NO_EVENT_FOUND_ERROR);

    if (event.creatorId !== identity.subject) {
      throw new Error(UNAUTHORIZED_ERROR);
    }

    await ctx.db.delete(args.id);

    return true;
  },
});

export const update = mutation({
  args: {
    id: v.id("events"),
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

    if (!identity) throw new Error(UNAUTHORIZED_ERROR);

    const event = await ctx.db.get(args.id);

    if (!event) throw new Error(NO_EVENT_FOUND_ERROR);

    if (event.creatorId !== identity.subject) {
      throw new Error(UNAUTHORIZED_ERROR);
    }

    const { id , title, description, category, eventType, from, till, location } =
      args;

    const updatedEvent = ctx.db.patch(id, {
      title: title,
      description: description,
      category: category,
      eventType: eventType,
      from: from,
      till: till,
      location: location,
    });

    return updatedEvent;
  },
});
