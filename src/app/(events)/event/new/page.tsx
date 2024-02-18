"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { EVENT_CATEGORIES } from "@/lib/constants/mappingConstants";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

const CreateEventPage = () => {

  const createEvent = useMutation(api.event.create)

  const createEventSchema = z.object({
    title: z.string().min(5).max(100),
    eventType: z.enum(["virtual", "physical", "both"]),
    category: z.string().refine((val) => EVENT_CATEGORIES.includes(val), {
      message: "Selected category is not valid",
    }),
    // maxPersonAllow: z.number(),
    location: z.string(),
    from: z.string(),
    till: z.string(),
    description: z
      .string()
      .min(10, {
        message: "Description is too short",
      })
      .max(1000, {
        message: "Description is too long",
      }),
    // eventImage: z.string(),
    // eventTags: z.array(z.string()),
    // termsAndConditions: z.optional(z.string()),
    // socialMediaLinks: z.array(z.string()),
  });

  const form = useForm<z.infer<typeof createEventSchema>>({
    resolver: zodResolver(createEventSchema),
  });

  function onSubmit(values: z.infer<typeof createEventSchema>) {
    console.log(values);
    createEvent(values);
  }

  return (
    <div className="h-full max-w-screen-md mx-auto rounded-lg">
      <h1 className="mb-4 text-lg text-center sm:text-xl md:text-2xl lg:text-3xl">
        Create a new Event
      </h1>
      <Form {...form}>
        <form
          className="grid max-w-lg gap-3 mx-auto my-3 md:grid-cols-2"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className="mb-2 space-y-0 md:md:col-span-2">
                <Input placeholder="Event Title" className="mt-0" {...field} />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="eventType"
            render={({ field }) => (
              <FormItem className="mb-2 space-y-0">
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Type of event" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="physical">Physical</SelectItem>
                    <SelectItem value="virtual">Virtual</SelectItem>
                    <SelectItem value="both">Both</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem className="mb-2 space-y-0">
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {EVENT_CATEGORIES.map((category) => (
                      <SelectItem
                        key={`category-${category.toLowerCase()}`}
                        value={category}
                      >
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="from"
            render={({ field }) => (
              <FormItem className="mb-2 space-y-0">
                <FormLabel>Event Start</FormLabel>
                <Input
                  type="datetime-local"
                  placeholder="Event Title"
                  className="mt-0"
                  {...field}
                />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="till"
            render={({ field }) => (
              <FormItem className="mb-2 space-y-0">
                <FormLabel>Event End</FormLabel>
                <Input
                  type="datetime-local"
                  placeholder="Event Title"
                  className="mt-0"
                  {...field}
                />
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="mb-2 space-y-0 md:md:col-span-2">
                <Textarea
                  placeholder="Event Description"
                  className="mt-0"
                  {...field}
                />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem className="mb-2 space-y-0 md:col-span-2">
                <Textarea
                  placeholder="Meet link or Venue"
                  className="mt-0"
                  {...field}
                />
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="md:col-span-2">
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default CreateEventPage;
