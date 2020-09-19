"use strict";
const Homepage = require("../models").homepage;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const homepage1 = await Homepage.findOne({
      where: { title: "Michael's page" },
    });
    const homepage2 = await Homepage.findOne({
      where: { title: "Simons super page" },
    });
    const homepage3 = await Homepage.findOne({
      where: { title: "Kim online" },
    });

    return queryInterface.bulkInsert(
      "stories",
      [
        {
          name: "Eating with chopsticks",
          imageUrl:
            "https://img.travelinsurance.com.au/images/default-source/default-album/eating-and-drinking-in-japan.jpg",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse purus felis, interdum a consequat sit amet, lacinia id enim. Suspendisse non massa quis nulla aliquet finibus at sit amet mauris. Integer pretium dictum felis, tincidunt viverra lacus maximus ac. Etiam eleifend commodo sapien, non facilisis leo. Cras commodo ex ut venenatis blandit. Vivamus sed auctor nunc. Suspendisse a erat eget erat tempor elementum a at tortor. Proin dignissim, massa vitae mattis tempor, arcu enim pellentesque lectus, sed rutrum quam ex quis odio. In libero velit, tristique ut tristique aliquam, scelerisque eu nunc. Fusce id ligula volutpat justo tempus pulvinar. Etiam non cursus ante. Nam rhoncus at orci in tempor. Etiam accumsan a lacus sit amet commodo. Duis viverra nunc eget ex fermentum scelerisque. Nulla fringilla velit et mauris mattis fermentum. Praesent a leo et orci tincidunt consectetur vitae vitae risus.",
          homepageId: homepage1.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Visiting Nara",
          imageUrl:
            "https://www.arcgis.com/sharing/rest/content/items/ebc51caa316a4b18bb3f7ef2f8daaf15/resources/1566764387190.jpeg?w=1600",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse purus felis, interdum a consequat sit amet, lacinia id enim. Suspendisse non massa quis nulla aliquet finibus at sit amet mauris. Integer pretium dictum felis, tincidunt viverra lacus maximus ac. Etiam eleifend commodo sapien, non facilisis leo. Cras commodo ex ut venenatis blandit. Vivamus sed auctor nunc. Suspendisse a erat eget erat tempor elementum a at tortor.",
          homepageId: homepage1.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Surfing in Straya",
          imageUrl:
            "https://cms.hostelworld.com/hwblog/wp-content/uploads/sites/2/2017/12/surf-beaches-in-Australia-@hana_seas.jpg",
          content:
            "Proin dignissim, massa vitae mattis tempor, arcu enim pellentesque lectus, sed rutrum quam ex quis odio. In libero velit, tristique ut tristique aliquam, scelerisque eu nunc. Fusce id ligula volutpat justo tempus pulvinar. Etiam non cursus ante. Nam rhoncus at orci in tempor. Etiam accumsan a lacus sit amet commodo. Duis viverra nunc eget ex fermentum scelerisque. Nulla fringilla velit et mauris mattis fermentum. Praesent a leo et orci tincidunt consectetur vitae vitae risus. Donec ex magna, varius et luctus et, suscipit eu lacus. Donec consequat sapien id quam rhoncus finibus. Integer rutrum, arcu eu congue vestibulum, lectus nunc dignissim odio, vitae facilisis metus risus a nunc. Cras molestie quam quis metus ornare pretium a in orci. Phasellus sed blandit lacus, vitae faucibus nulla. Nullam non fermentum eros. Interdum et malesuada fames ac ante.",
          homepageId: homepage2.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Diving at the Great Barrier Reef",
          imageUrl:
            "https://happytravels.com.au/wp-content/uploads/st_uploadfont/sunkist.jpeg",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a metus et ante venenatis varius ac id lorem. Vivamus dapibus convallis lacus in semper. Cras finibus mi at libero placerat laoreet. Nam quis tristique ante, quis dignissim velit. Sed consectetur magna quam, ut posuere est porta quis. Nam venenatis at dolor ut rutrum. Aenean accumsan convallis ex at pellentesque. Nam vitae felis cursus odio condimentum tincidunt. Aliquam tristique consequat odio id placerat. Suspendisse varius, felis quis rutrum sollicitudin, felis turpis convallis urna, vitae posuere augue leo luctus nisl. Etiam interdum neque sit amet neque mollis, eget mollis turpis lacinia. Quisque porta, neque et sodales luctus, sapien nulla hendrerit elit, at imperdiet nisi mauris id elit. Mauris dignissim tortor diam, sed accumsan neque gravida quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fringilla pretium augue eget sodales. In quis condimentum elit. Nullam in auctor tortor, eu gravida augue. Suspendisse.",
          homepageId: homepage2.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Carnaval in SambaDrome",
          imageUrl:
            "https://magazine.zarpo.com.br/wp-content/uploads/2019/01/carnaval_zarpo.jpg",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a metus et ante venenatis varius ac id lorem. Vivamus dapibus convallis lacus in semper. Cras finibus mi at libero placerat laoreet. Nam quis tristique ante, quis dignissim velit. Sed consectetur magna quam, ut posuere est porta quis. Nam venenatis at dolor ut rutrum. Aenean accumsan convallis ex at pellentesque. Nam vitae felis cursus odio condimentum tincidunt. Aliquam tristique consequat odio id placerat. Suspendisse varius, felis quis rutrum sollicitudin, felis turpis convallis urna, vitae posuere augue leo luctus nisl. Etiam interdum neque sit amet neque mollis, eget mollis turpis lacinia. Quisque porta, neque et sodales luctus, sapien nulla hendrerit elit, at imperdiet nisi mauris id elit. Mauris dignissim tortor diam, sed accumsan neque gravida quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fringilla pretium augue eget sodales. In quis condimentum elit. Nullam in auctor tortor, eu gravida augue. Suspendisse.",
          homepageId: homepage3.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("stories", null, {});
  },
};
