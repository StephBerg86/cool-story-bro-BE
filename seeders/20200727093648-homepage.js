"use strict";
const User = require("../models").user;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "homepages",
      [
        {
          title: "Michael's page",
          description: "Once upon a time I was in Japan and it was great",
          backgroundColor: "#FDFEFE",
          color: "#B71C1C",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
        },
        {
          title: "Simons super page",
          description:
            "Australia is the land of kangaroos, koalas and digeridoos.",
          backgroundColor: "#ff7733",
          color: "#ffffff",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
        },
        {
          title: "Kim online",
          description: "Carnaval and soccer at the Copa Cabana",
          backgroundColor: "#2d8659",
          color: "#ffffff",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 3,
        },
        {
          title: "My travel stories",
          description:
            "The Northern Lights are one of the most amazing things of nature",
          backgroundColor: "#0086b3",
          color: "#ffffff",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
        },
        {
          title: "Homepage Frank",
          description:
            "Swimming with pigs in the tropical blue waters of the Bahamas",
          backgroundColor: "#ccccff",
          color: "#000000",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
        },
        {
          title: "Best Homepage",
          description:
            "The eastcoast of Australia is the perfect spot for surfers",
          backgroundColor: "#ff9999",
          color: "#ffffff",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 3,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("homepages", null, {});
  },
};
