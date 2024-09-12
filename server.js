// @ts-nocheck
// Import the Strapi factory function
const strapi = require("@strapi/strapi");

// Asynchronously initialize and start Strapi
async function startStrapi() {
  try {
    const app = await strapi().load();
    app.listen(1337);
    console.log("Strapi is running on port 1337");
  } catch (error) {
    console.error("Failed to start Strapi:", error);
  }
}

startStrapi();
