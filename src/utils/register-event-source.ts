// register-event-source.ts
import { EventLogger } from "node-windows";

const APP_NAME = "MahityContactForm";

console.log(`Registering "${APP_NAME}" as Windows Event Source...`);

const eventLogger = new EventLogger({
  source: APP_NAME,
  eventLog: "Application",
});

eventLogger.info("Test info message - Application registered successfully");
eventLogger.warn(
  "Test warning message - This is just to confirm logging works"
);
eventLogger.error("Test error message - This is not a real error, just a test");

console.log("Event source registered successfully!");
console.log("Test events have been written to the Event Viewer");
console.log(
  "You can now view logs in Event Viewer > Windows Logs > Application"
);
console.log(`Look for events with source: "${APP_NAME}"`);

setTimeout(() => {
  console.log("Script completed successfully");
  process.exit(0);
}, 1000);
