/* 
https://www.iconfinder.com/icons/1243689/call_phone_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/Makoto_msk */

export const storeProducts = [
  {
    id: 1,
    title: "Ahorn",
    //maximum 12 images for each product
    img: ["img/Produkte/Ahorn/Ahorn1_1080_720.jpg",
          "img/Produkte/Ahorn/Ahorn2_1080_720.jpg",
    ],
    selectedImageIndex:0,
    variant: [
      { id: 1, price:50, size:"Groß", inCart:false, count:0, total:0, available:true},
      { id: 2, price:44, size:"Mini", inCart:false, count:0, total:0, available:false},
    ],
    
    selectedSize:"Groß", //Groß, Mini
    
    company: "Wombat",
    info:
      "Diese Tasche besteht vollstäding aus Samt-Stoff",
    
  },
  {
    id: 2,
    title: "Anemone",
    //maximum 10 images for each product
    img: ["img/Produkte/Anemone/Anemone1_1080_720.jpg",
          "img/Produkte/Anemone/Anemone2_1080_720.jpg",
    ],
    selectedImageIndex:0,
    variant: [
      { id: 1, price:50, size:"Groß", inCart:false, count:0, total:0, available:false},
      { id: 2, price:44, size:"Mini", inCart:false, count:0, total:0, available:false},
    ],
    selectedSize:"Groß", //Groß, Mini
    company: "Wombat",
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
    
  },
  {
    id: 3,
    title: "Azalee",
    //maximum 10 images for each product
    img: ["img/Produkte/Azalee/Azalee1_1080_720.jpg",
          "img/Produkte/Azalee/Azalee2_1080_720.jpg",
    ],
    selectedImageIndex:0,
    variant: [
      { id: 1, price:50, size:"Groß", inCart:false, count:0, total:0, available:true},
      { id: 2, price:44, size:"Mini", inCart:false, count:0, total:0, available:true},
      { id: 3, price:30, size:"Sehr klein", inCart:false, count:0, total:0, available:true},
    ],
    selectedSize:"Groß", //Groß, Mini
    company: "Wombat",
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",

  },
  {
    id: 4,
    title: "Black Panther",
    //maximum 1 images for each product
    img: ["img/Produkte/Black_Panther/Black_Panther1_1080_720.jpg",
          "img/Produkte/Black_Panther/Black_Panther2_1080_720.jpg",
          "img/Produkte/Black_Panther/Black_Panther3_1080_720.jpg",
          "img/Produkte/Black_Panther/Black_Panther4_1080_720.jpg",
          "img/Produkte/Black_Panther/Black_Panther5_1080_720.jpg",
          "img/Produkte/Black_Panther/Black_Panther6_1080_720.jpg",
          "img/Produkte/Black_Panther/Black_Panther7_1080_720.jpg",
          "img/Produkte/Black_Panther/Black_Panther8_1080_720.jpg",
    ],
    selectedImageIndex:0,
    variant: [
      { id: 1, price:50, size:"Groß", inCart:false, count:0, total:0, available:true},
      { id: 2, price:44, size:"Mini", inCart:false, count:0, total:0, available:true},
    ],
    selectedSize:"Groß", //Groß, Mini
    company: "Wombat",
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",

  },
  {
    id: 5,
    title: "Blätterwald",
    img: ["img/Produkte/Blätterwald/Blätterwald1_1080_720.jpg",
          "img/Produkte/Blätterwald/Blätterwald2_1080_720.jpg",
          "img/Produkte/Blätterwald/Blätterwald3_1080_720.jpg",
    ],
    selectedImageIndex:0,
    variant: [
      { id: 1, price:50, size:"Groß", inCart:false, count:0, total:0, available:true},
      { id: 2, price:44, size:"Mini", inCart:false, count:0, total:0, available:true},
    ],
    selectedSize:"Groß", //Groß, Mini
    company: "Wombat",
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",

  },
  {
    id: 6,
    title: "Eibe",
    img: ["img/Produkte/Eibe/Eibe1_1080_720.jpg",
          "img/Produkte/Eibe/Eibe2_1080_720.jpg",
    ],
    selectedImageIndex:0,
    variant: [
      { id: 1, price:50, size:"Groß", inCart:false, count:0, total:0, available:true},
      { id: 2, price:44, size:"Mini", inCart:false, count:0, total:0, available:true},
    ],
    selectedSize:"Groß", //Groß, Mini
    company: "Wombat",
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",

  },
  {
    id: 7,
    title: "Eisrose",
    img: ["img/Produkte/Eisrose/Eisrose1_1080_720.jpg",
          "img/Produkte/Eisrose/Eisrose2_1080_720.jpg",
    ],
    selectedImageIndex:0,
    variant: [
      { id: 1, price:50, size:"Groß", inCart:false, count:0, total:0, available:true},
      { id: 2, price:44, size:"Mini", inCart:false, count:0, total:0, available:true},
    ],
    selectedSize:"Groß", //Groß, Mini
    company: "Wombat",
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",

  },
  {
    id: 8,
    title: "Erle",
    img: ["img/Produkte/Erle/Erle1_1080_720.jpg",
          "img/Produkte/Erle/Erle2_1080_720.jpg",
    ],
    selectedImageIndex:0,
    variant: [
      { id: 1, price:50, size:"Groß", inCart:false, count:0, total:0, available:true},
      { id: 2, price:44, size:"Mini", inCart:false, count:0, total:0, available:true},
    ],
    selectedSize:"Groß", //Groß, Mini
    company: "Wombat",
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",

  },
  {
    id: 9,
    title: "Graue Maus",
    img: ["img/Produkte/Graue_Maus/Graue_Maus1_1080_720.jpg",
    ],
    selectedImageIndex:0,
    variant: [
      { id: 1, price:50, size:"Groß", inCart:false, count:0, total:0, available:true},
      { id: 2, price:44, size:"Mini", inCart:false, count:0, total:0, available:true},
    ],
    selectedSize:"Groß", //Groß, Mini
    company: "Wombat",
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",

  },
  {
    id: 10,
    title: "Holunderbeere",
    img: ["img/Produkte/Holunderbeere/Holunderbeere1_1080_720.jpg",
    ],
    selectedImageIndex:0,
    variant: [
      { id: 1, price:50, size:"Groß", inCart:false, count:0, total:0, available:true},
      { id: 2, price:44, size:"Mini", inCart:false, count:0, total:0, available:true},
    ],
    selectedSize:"Groß", //Groß, Mini
    company: "Wombat",
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",

  },
  {
    id: 11,
    title: "Kirschblüte",
    img: ["img/Produkte/Kirschblüte/Kirschblüte1_1080-720.jpg",
    ],
    selectedImageIndex:0,
    variant: [
      { id: 1, price:50, size:"Groß", inCart:false, count:0, total:0, available:true},
      { id: 2, price:44, size:"Mini", inCart:false, count:0, total:0, available:true},
    ],
    selectedSize:"Groß", //Groß, Mini
    company: "Wombat",
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",

  },
  {
    id: 12,
    title: "Linde",
    img: ["img/Produkte/Linde/Linde1_1080-720.jpg",
    ],
    selectedImageIndex:0,
    variant: [
      { id: 1, price:50, size:"Groß", inCart:false, count:0, total:0, available:true},
      { id: 2, price:44, size:"Mini", inCart:false, count:0, total:0, available:true},
    ],
    selectedSize:"Groß", //Groß, Mini
    company: "Wombat",
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",

  },
  {
    id: 13,
    title: "Mystic Lynx",
    img: ["img/Produkte/Mystic_Lynx/MysticLynx1_1080_720.jpg",
    ],
    selectedImageIndex:0,
    variant: [
      { id: 1, price:50, size:"Groß", inCart:false, count:0, total:0, available:true},
      { id: 2, price:44, size:"Mini", inCart:false, count:0, total:0, available:true},
    ],
    selectedSize:"Groß", //Groß, Mini
    company: "Wombat",
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",

  },
  {
    id: 14,
    title: "Nordmanntanne",
    img: ["img/Produkte/Nordmanntanne/Nordmanntanne1_1080_720.jpg",
    ],
    selectedImageIndex:0,
    variant: [
      { id: 1, price:50, size:"Groß", inCart:false, count:0, total:0, available:true},
      { id: 2, price:44, size:"Mini", inCart:false, count:0, total:0, available:true},
    ],
    selectedSize:"Groß", //Groß, Mini
    company: "Wombat",
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",

  },
  {
    id: 15,
    title: "Orchidee",
    img: ["img/Produkte/Orchidee/Orchidee1_1080_720.jpg",
    ],
    selectedImageIndex:0,
    variant: [
      { id: 1, price:50, size:"Groß", inCart:false, count:0, total:0, available:true},
      { id: 2, price:44, size:"Mini", inCart:false, count:0, total:0, available:true},
    ],
    selectedSize:"Groß", //Groß, Mini
    company: "Wombat",
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",

  },
  {
    id: 16,
    title: "Robinie",
    img: ["img/Produkte/Robinie/Robinie1_1080_720.jpg",
    ],
    selectedImageIndex:0,
    variant: [
      { id: 1, price:50, size:"Groß", inCart:false, count:0, total:0, available:false},
      { id: 2, price:44, size:"Mini", inCart:false, count:0, total:0, available:false},
    ],
    selectedSize:"Groß", //Groß, Mini
    company: "Wombat",
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",

  },
  {
    id: 17,
    title: "Schneeglöckchen",
    img: ["img/Produkte/Schneeglöckchen/Schneeglöckchen1_1080_720.jpg",
    ],
    selectedImageIndex:0,
    variant: [
      { id: 1, price:50, size:"Groß", inCart:false, count:0, total:0, available:true},
      { id: 2, price:44, size:"Mini", inCart:false, count:0, total:0, available:true},
    ],
    selectedSize:"Groß", //Groß, Mini
    company: "Wombat",
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",

  },
  {
    id: 18,
    title: "Schwarzwald",
    img: ["img/Produkte/Schwarzwald/Schwarzwald1_1080_720.jpg",
    ],
    selectedImageIndex:0,
    variant: [
      { id: 1, price:50, size:"Groß", inCart:false, count:0, total:0, available:true},
      { id: 2, price:44, size:"Mini", inCart:false, count:0, total:0, available:true},
    ],
    selectedSize:"Groß", //Groß, Mini
    company: "Wombat",
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",

  },
  {
    id: 19,
    title: "Sonnenblume",
    img: ["img/Produkte/Sonnenblume/Sonnenblume1_1080_720.jpg",
    ],
    selectedImageIndex:0,
    variant: [
      { id: 1, price:50, size:"Groß", inCart:false, count:0, total:0, available:true},
      { id: 2, price:44, size:"Mini", inCart:false, count:0, total:0, available:true},
    ],
    selectedSize:"Groß", //Groß, Mini
    company: "Wombat",
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",

  },
  {
    id: 20,
    title: "Ulme",
    img: ["img/Produkte/Ulme/Ulme1_1080_720.jpg",
    ],
    selectedImageIndex:0,
    variant: [
      { id: 1, price:50, size:"Groß", inCart:false, count:0, total:0, available:true},
      { id: 2, price:44, size:"Mini", inCart:false, count:0, total:0, available:true},
    ],
    selectedSize:"Groß", //Groß, Mini
    company: "Wombat",
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",

  },
  {
    id: 21,
    title: "Wacholder",
    img: ["img/Produkte/Wacholder/Wachholder1_1080_720.jpg",
    ],
    selectedImageIndex:0,
    variant: [
      { id: 1, price:50, size:"Groß", inCart:false, count:0, total:0, available:true},
      { id: 2, price:44, size:"Mini", inCart:false, count:0, total:0, available:true},
    ],
    selectedSize:"Groß", //Groß, Mini
    company: "Wombat",
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",

  },
  {
    id: 22,
    title: "Weide",
    img: ["img/Produkte/Weide/Weide1_1080_720.jpg",
    ],
    selectedImageIndex:0,
    variant: [
      { id: 1, price:50, size:"Groß", inCart:false, count:0, total:0, available:true},
      { id: 2, price:44, size:"Mini", inCart:false, count:0, total:0, available:true},
    ],
    selectedSize:"Groß", //Groß, Mini
    company: "Wombat",
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",

  },
  {
    id: 23,
    title: "Wild Leo",
    img: ["img/Produkte/Wild_Leo/WildLeo1_1080_720.jpg",
    ],
    selectedImageIndex:0,
    variant: [
      { id: 1, price:50, size:"Groß", inCart:false, count:0, total:0, available:true},
      { id: 2, price:44, size:"Mini", inCart:false, count:0, total:0, available:true},
    ],
    selectedSize:"Groß", //Groß, Mini
    company: "Wombat",
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",

  },
  {
    id: 24,
    title: "Gutschein",
    img: ["img/Produkte/Gutschein/Gutschein1.jpg",
    ],
    selectedImageIndex:0,
    variant: [
      { id: 1, price:50, size:"Groß", inCart:false, count:0, total:0, available:true},
      { id: 2, price:44, size:"Mini", inCart:false, count:0, total:0, available:true},
    ],
    selectedSize:"Groß", //Groß, Mini
    company: "Wombat",
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",

  }

];

export const detailProduct = {
  id: 1,
  title: "Ahorn",
  img: ["img/Produkte/Ahorn/Ahorn1_1080_720.jpg",
  ],
  selectedImageIndex:0,
  variant: [
    { id: 1, price:50, size:"Groß", inCart:false, count:0, total:0, available:true},
    { id: 2, price:44, size:"Mini", inCart:false, count:0, total:0, available:true},
  ],
  selectedSize:"Groß", //Groß, Mini
  company: "Wombat",
  info:
      "Diese Tasche besteht vollstäding aus Samt-Stoff",

};
