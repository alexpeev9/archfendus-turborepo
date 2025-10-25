import type { GirlData } from "shared-types";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const site = query.site as string;

  // Get runtime config for API URL
  const config = useRuntimeConfig();
  const apiUrl = config.public.apiUrl;

  // Validate site parameter
  if (!site || (site !== "gold" && site !== "silver")) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid site parameter. Must be "gold" or "silver"',
    });
  }

  // Different girls for each site
  const goldGirls: GirlData[] = [
    {
      name: "Emma",
      image: `${apiUrl}/images/server/1.jpeg`,
      age: 24,
      location: "New York",
      message: "Message Now",
      status: "online",
    },
    {
      name: "Sophia",
      image: `${apiUrl}/images/server/2.jpeg`,
      age: 26,
      location: "Los Angeles",
      message: "Start Chat",
      status: "verified",
    },
    {
      name: "Isabella",
      image: `${apiUrl}/images/server/3.jpeg`,
      age: 23,
      location: "Miami",
      message: "Send Message",
      status: "premium",
    },
    {
      name: "Olivia",
      image: `${apiUrl}/images/server/4.jpeg`,
      age: 25,
      location: "Chicago",
      message: "Chat Now",
      status: "active",
    },
  ];

  const silverGirls: GirlData[] = [
    {
      name: "Olivia",
      image: `${apiUrl}/images/server/4.jpeg`,
      age: 25,
      location: "Chicago",
      message: "Chat Now",
      status: "active",
    },
    {
      name: "Ava",
      image: `${apiUrl}/images/server/5.jpeg`,
      age: 22,
      location: "Seattle",
      message: "Say Hi",
      status: "new",
    },
    {
      name: "Charlotte",
      image: `${apiUrl}/images/server/6.jpeg`,
      age: 27,
      location: "Boston",
      message: "Message",
      status: "verified",
    },
    {
      name: "Isabella",
      image: `${apiUrl}/images/server/3.jpeg`,
      age: 23,
      location: "Miami",
      message: "Send Message",
      status: "premium",
    },
  ];

  return site === "gold" ? goldGirls : silverGirls;
});
