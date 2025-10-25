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
      image: `${apiUrl}/images/1.jpeg`,
      description:
        "Adventure-loving photographer who loves hiking and capturing beautiful moments.",
    },
    {
      name: "Sophia",
      image: `${apiUrl}/images/2.jpeg`,
      description:
        "Art enthusiast and yoga instructor with a passion for wellness and mindfulness.",
    },
    {
      name: "Isabella",
      image: `${apiUrl}/images/3.jpeg`,
      description:
        "Chef and food blogger who loves experimenting with new recipes and cuisines.",
    },
  ];

  const silverGirls: GirlData[] = [
    {
      name: "Olivia",
      image: `${apiUrl}/images/4.jpeg`,
      description:
        "Music producer and DJ who loves electronic music and underground scenes.",
    },
    {
      name: "Ava",
      image: `${apiUrl}/images/5.jpeg`,
      description:
        "Fashion designer and vintage collector with an eye for unique style.",
    },
    {
      name: "Charlotte",
      image: `${apiUrl}/images/6.jpeg`,
      description:
        "Tech entrepreneur and coffee enthusiast who loves solving complex problems.",
    },
  ];

  return site === "gold" ? goldGirls : silverGirls;
});
