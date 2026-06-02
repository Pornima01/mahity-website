// logger.ts
import os from "os";
interface LoggerImplementation {
  error(message: string, error?: unknown): void;
  info(message: string): void;
  warn(message: string): void;
  debug(message: string): void;
}

interface NodeWindowsEventLogger {
  info(message: string): void;
  warn(message: string): void;
  error(message: string): void;
}

interface NodeWindows {
  EventLogger: {
    new (options: { source: string; eventLog: string }): NodeWindowsEventLogger;
  };
}

interface NodeWindowsModule {
  EventLogger?: unknown;
}

class WindowsLogger implements LoggerImplementation {
  private eventLogger: NodeWindowsEventLogger | null = null;
  private initAttempted = false;
  private initializationError: Error | null = null;
  private appName: string;

  constructor(source: string = "NextJSApplication") {
    this.appName = source;

    this.initializeLogger();
  }

  private async initializeLogger(): Promise<void> {
    try {
      this.initAttempted = true;
      console.log("[LOGGER] Initializing Windows event logger...");

      if (os.platform() !== "win32") {
        throw new Error("Not running on Windows platform");
      }

      const nodeWindows = await import("node-windows").catch((err) => {
        console.error(
          "[LOGGER] Failed to dynamically import node-windows:",
          err
        );
        throw new Error("Failed to import node-windows module");
      });

      console.log("[LOGGER] Creating EventLogger instance...");

      if (!nodeWindows.EventLogger) {
        throw new Error("EventLogger not available from node-windows module");
      }

      const windowsModule = nodeWindows as unknown as NodeWindows;
      this.eventLogger = new windowsModule.EventLogger({
        source: this.appName,
        eventLog: "Application",
      });

      console.log("[LOGGER] Windows event logger initialized successfully");
    } catch (err) {
      this.initializationError =
        err instanceof Error ? err : new Error(String(err));
      console.error(
        "[LOGGER] Windows logger initialization error:",
        this.initializationError
      );
    }
  }

  error(message: string, error?: unknown): void {
    let errorDetails = message;
    if (error) {
      if (error instanceof Error) {
        errorDetails += `\nError: ${error.message}`;
        if (error.stack) {
          errorDetails += `\nStack: ${error.stack}`;
        }
      } else {
        try {
          errorDetails += `\nDetails: ${JSON.stringify(error)}`;
        } catch {
          errorDetails += `\nDetails: ${String(error)}`;
        }
      }
    }

    console.error("[ERROR]", errorDetails);

    if (!this.eventLogger) {
      console.error(
        "[LOGGER] Event logger not initialized. Init attempted:",
        this.initAttempted
      );
      if (this.initializationError) {
        console.error(
          "[LOGGER] Initialization error:",
          this.initializationError
        );
      }
      return;
    }

    try {
      this.eventLogger.error(errorDetails);
    } catch (logError) {
      console.error("[LOGGER] Failed to write to Windows event log:", logError);
    }
  }

  info(message: string): void {
    console.log(`[INFO] ${message}`);

    if (!this.eventLogger) {
      return;
    }

    try {
      this.eventLogger.info(message);
    } catch (logError) {
      console.error(
        "[LOGGER] Failed to write info to Windows event log:",
        logError
      );
    }
  }

  warn(message: string): void {
    console.warn(`[WARNING] ${message}`);

    if (!this.eventLogger) {
      return;
    }

    try {
      this.eventLogger.warn(message);
    } catch (logError) {
      console.error(
        "[LOGGER] Failed to write warning to Windows event log:",
        logError
      );
    }
  }

  debug(message: string): void {
    console.debug(`[DEBUG] ${message}`);
  }
}

class ConsoleLogger implements LoggerImplementation {
  constructor() {
    console.log("[LOGGER] Using console logger implementation");
  }

  error(message: string, error?: unknown): void {
    console.error("[ERROR]", message);
    if (error) {
      if (error instanceof Error) {
        console.error(error.stack || error.message);
      } else {
        try {
          console.error("Additional error details:", JSON.stringify(error));
        } catch {
          console.error("Additional error details:", String(error));
        }
      }
    }
  }

  info(message: string): void {
    console.log(`[INFO] ${message}`);
  }

  warn(message: string): void {
    console.warn(`[WARNING] ${message}`);
  }

  debug(message: string): void {
    console.debug(`[DEBUG] ${message}`);
  }
}

async function createDynamicLogger(
  appName: string
): Promise<LoggerImplementation> {
  const platform = os.platform();
  console.log(`[LOGGER] Initializing logger for platform: ${platform}`);

  console.log(
    `[LOGGER] Running in ${process.env.NODE_ENV || "unknown"} environment`
  );

  if (platform === "win32") {
    console.log("[LOGGER] Creating Windows logger implementation");
    try {
      let nodeWindows: NodeWindowsModule | null = null;
      try {
        nodeWindows = await import("node-windows").catch(() => {
          console.error("[LOGGER] Failed to dynamically import node-windows");
          return null;
        });
      } catch (err) {
        console.error(
          "[LOGGER] Failed to import node-windows, falling back to console logger:",
          err
        );
        return new ConsoleLogger();
      }

      if (nodeWindows && nodeWindows.EventLogger) {
        return new WindowsLogger(appName);
      } else {
        console.error(
          "[LOGGER] node-windows import successful but EventLogger not available"
        );
        return new ConsoleLogger();
      }
    } catch (err) {
      console.error(
        "[LOGGER] Failed to create Windows logger, falling back to console:",
        err
      );
      return new ConsoleLogger();
    }
  } else {
    console.log(
      "[LOGGER] Creating console logger implementation for non-Windows platform"
    );
    return new ConsoleLogger();
  }
}

class Logger {
  private static instance: Logger;
  private implementation: LoggerImplementation;
  private platform: string;

  private constructor(appName: string = "NextJSApplication") {
    this.platform = os.platform();
    console.log(`[LOGGER] Initializing logger for platform: ${this.platform}`);

    console.log(
      `[LOGGER] Running in ${process.env.NODE_ENV || "unknown"} environment`
    );

    this.implementation = new ConsoleLogger();

    if (this.platform === "win32") {
      this.tryInitializeWindowsLogger(appName);
    }
  }

  private async tryInitializeWindowsLogger(appName: string): Promise<void> {
    try {
      const dynamicImplementation = await createDynamicLogger(appName);
      this.implementation = dynamicImplementation;
      console.log("[LOGGER] Successfully initialized dynamic logger");
    } catch (err) {
      console.error(
        "[LOGGER] Failed to initialize dynamic logger, staying with console logger:",
        err
      );
    }
  }

  public static getInstance(appName: string = "NextJSApplication"): Logger {
    if (!Logger.instance) {
      console.log("[LOGGER] Creating new logger instance");
      Logger.instance = new Logger(appName);
    }
    return Logger.instance;
  }

  error(message: string, error?: unknown): void {
    this.implementation.error(message, error);
  }

  info(message: string): void {
    this.implementation.info(message);
  }

  warn(message: string): void {
    this.implementation.warn(message);
  }

  debug(message: string): void {
    this.implementation.debug(message);
  }

  getPlatform(): string {
    return this.platform;
  }
}

const logger = Logger.getInstance("MahityContactForm");
export default logger;
