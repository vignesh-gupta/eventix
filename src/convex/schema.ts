import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  events: defineTable({
    category: v.string(),
    createdBy: v.string(),
    description: v.string(),
    eventType: v.string(),
    from: v.string(),
    location: v.string(),
    till: v.string(),
    title: v.string(),
  }),
});