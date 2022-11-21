const getDefaultCORSConfig = () => {
  const allowlist = ["http://localhost:3000"];

  return {
    origin: function (origin, callback) {
      if (allowlist.indexOf(origin) !== -1 || !origin) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  };
};

module.exports = {
  getDefaultCORSConfig,
};
