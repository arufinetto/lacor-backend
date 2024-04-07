module.exports = {
    port: process.env.PORT || 5000,
    mongodb_uri: process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/laboratorios",
    protocol_seq_start: 8000,

    // Add other configuration options here
  };