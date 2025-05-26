// Define the opening and closing application dates, as well as FullyHacks end date
export const openDateTs = "2025-02-14T12:00:00.000-08:00";
export const closeDateTs = "2025-03-31T23:59:59.999-07:00";
export const endDateTs = "2025-04-13T23:59:59.999-07:00";

export const tsOptions = { timeZone: "America/Los_Angeles" };

export const openDate = new Date(openDateTs).toLocaleString("en-US", tsOptions);
export const closeDate = new Date(closeDateTs).toLocaleString(
  "en-US",
  tsOptions
);
export const endDate = new Date(endDateTs).toLocaleString("en-US", tsOptions);
