const fs = require("fs");
const path = require("path");

const logsDirectory = path.join(__dirname, "..", "logs");
const logFilePath = path.join(logsDirectory, "audit_log.txt");

const auditLogger = (userId, email, name, action) => {
  // Create the logs directory if it doesn't exist
  if (!fs.existsSync(logsDirectory)) {
    fs.mkdirSync(logsDirectory);
  }

  const logEntry = `${new Date().toISOString()} - User ID: ${userId}, Email: ${email},  Action: ${action}\n`;

  fs.appendFile(logFilePath, logEntry, (err) => {
    if (err) {
      console.error("Error writing to audit log:", err);
    }
  });
};

module.exports = auditLogger;