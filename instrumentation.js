// instrumentation.ts
import appInsights from "applicationinsights";

// Prevent multiple initializations during hot reload in dev
if (!appInsights.defaultClient) {
  appInsights
    .setup(
      "InstrumentationKey=ba756091-5a8b-499a-b9b6-111cd37069ba;IngestionEndpoint=https://centralindia-0.in.applicationinsights.azure.com/;LiveEndpoint=https://centralindia.livediagnostics.monitor.azure.com/;ApplicationId=bebcd3ce-31ab-47eb-ac07-d41d8169eb4b"
    )
    .setAutoCollectRequests(true) // Track API & page requests
    .setAutoCollectDependencies(true) // Track outgoing HTTP calls
    .setAutoCollectPerformance(true, true) // Collect CPU, memory, etc.
    .setAutoCollectExceptions(true) // Catch unhandled errors
    .setSendLiveMetrics(true) // Enable Live Metrics Stream
    .start();

  console.log("✅ Azure Application Insights (Node.js) initialized");
}

export default appInsights;
