// Use this file only as a guide for first steps using routes. Delete it when you have added your own route files.
// For a detailed explanation regarding each routes property, visit:
// https://mocks-server.org/docs/usage/routes

// users data
const products = [
  {
      image: "chocomousse-fondente.jpg",
      name: "Chocomousse Fondente",
      price: "2 €",
      categories: ["chocomousse"],
      flavours: ["fondente"]
  },
  {
      image: "chocoviar-arancia.jpg",
      name: "Chocoviar Arancia",
      price: "4 €",
      categories: ["chocoviar"],
      flavours: ["arancia"]
  },
  {
      image: "chocoviar-cacao.jpg",
      name: "Chocoviar Cacao",
      price: "4 €",
      categories: ["chocoviar"],
      flavours: ["cacao"]
  },
  {
      image: "chocoviar-pistacchio.jpg",
      name: "Chocoviar Pistacchio",
      price: "3.5 €",
      categories: ["chocoviar"],
      flavours: ["pistacchio"]
  },
  {
      image: "cremino-fondente.jpg",
      name: "Cremino Fondente",
      price: "2.5€",
      categories: ["cremino"],
      flavours: ["fondente"]
  },
  {
      image: "cremino-pistacchio.jpg",
      name: "Cremino Pistacchio",
      price: "2.5€",
      categories: ["cremino"],
      flavours: ["pistacchio"]
  },
  {
      image: "gianduiotto-fondente.jpg",
      name: "Gianduiotto Fondente",
      price: "3 €",
      categories: ["gianduiotto"],
      flavours: ["fondente"]
  },
  {
      image: "gianduiotto-pistacchio.jpg",
      name: "Gianduiotto Pistacchio",
      price: "3 €",
      categories: ["gianduiotto"],
      flavours: ["pistacchio"]
  },
  {
      image: "perla-fondente.jpg",
      name: "Perla Fondente",
      price: "2.5 €",
      categories: ["perla"],
      flavours: ["fondente"]
  },
  {
      image: "perla-pistacchio.jpg",
      name: "Perla Pistacchio",
      price: "2.5 €",
      categories: ["perla"],
      flavours: ["pistacchio"]
  }
];

module.exports = [
  {
    id: "get-products", // route id
    url: "/api/products", // url in express format
    method: "GET", // HTTP method
    variants: [
      {
        id: "all", // variant id
        type: "json", // variant handler id
        options: {
          status: 200, // status to send
          body: products, // body to send
        },
      },
      {
        id: "error", // variant id
        type: "json", // variant handler id
        options: {
          status: 400, // status to send
          // body to send
          body: {
            message: "Error",
          },
        },
      },
    ],
  },
];
