const config = {
    development: "http://localhost:8000/api-v1/",
    production: "https://job-board-x771.onrender.com/api-v1/",
  };
  
  export const BASE_URL = config[process.env.NODE_ENV] || config.development;