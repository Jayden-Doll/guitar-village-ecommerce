const guitarData = [
  {
    searchName: "Taylor GS Mini Mahogany",
    name: "GS Mini Mahogany",
    brand: "Taylor",
    price: "600",
    bodysize: "Grand Symphony Mini",
    description:
      "There's something undeniably inviting about the Taylor GS Mini's scaled-down size, yet a single strum reveals the impressive voice of a full-size guitar. That mix of portability and musicality has proven to be a winning combination that fits into so many scenarios in life, from the couch to the campfire to the concert hall. It's not too big. It's not too precious. It's not too expensive.",
    materials: {
      topwood: "Mahogany",
      sidewood: "Laminate sapele",
    },
    img: "https://www.taylorguitars.com/sites/default/files/images/2022-02/Taylor-GS-Mini-Mah-fr-2022.png",
  },
  {
    searchName: "Taylor 314ce",
    name: "314ce",
    brand: "Taylor",
    price: "2,000",
    bodysize: "Grand Auditorium",
    description:
      "Taylor's 300 Series has introduced countless players to the pleasures of the all-solid-wood acoustic experience; it's the entry point to Taylor's USA-made instrument line. Players who step up to a 300 Series instrument, like this 314ce V-Class Grand Auditorium acoustic-electric guitar, will be rewarded with a guitar-for-a-lifetime that will only sound better with age. It doesn't take but a few strums to learn how the mix of tonewoods, construction and appointments combine to make Taylor's famous playability, intonation and tone.",
    description2:
      "The 300 Series has everything you need and nothing you don't need in an instrument that sounds fantastic and plays fantastic as well. The 314ce V-Class Grand Auditorium acoustic-electric ships in a deluxe hardshell case made by Taylor for optimal fit and protection.",
    materials: {
      topwood: "Sitka spruce",
      sidewood: "Sapele",
    },
    img: "https://www.taylorguitars.com/sites/default/files/images/2022-02/Taylor-314ce-00887766089162-FrontLeft-2021.png",
  },
  {
    searchName: "Taylor 224ceK DLX",
    name: "224ce-K DLX",
    brand: "Taylor",
    price: "1,800",
    bodysize: "Grand Auditorium",
    description:
      "Taylor's 200 Deluxe Series, which includes this 224ce-K DLX Grand Auditorium acoustic-electric delivers all the essentials of a great guitar - exquisite playability, full and articulate voice, impeccable intonation up the neck, and Taylor's top-of-the-line, professional-grade pickup - at a price that's within reach of many.",
    description2:
      "Like all the guitars in the 200 Series, it strikes a sweet balance between tasteful design constraint and aesthetic variety, bringing Taylor's signature tonal clarity and playability into a stage-worthy mix of guitar options.The 224ce-K DLX Grand Auditorium acoustic-electric guitar ships in a deluxe hardshell case made by Taylor for optimal fit and protection.",
    materials: {
      topwood: "Hawaiian koa",
      sidewood: "Hawaiian koa",
    },
    img: "https://www.taylorguitars.com/sites/default/files/2022-02-08/224ceK%20DLX-Front.png",
  },
  {
    searchName: "Martin D28",
    name: "D-28",
    brand: "Martin",
    price: "3,000",
    bodysize: "D-14 Fret",
    description:
      "Sometimes innovation is in the details. This is certainly true with Martin’s reimagined 2017 D-28. After nearly a century at the helm, and as the quintessential workhorse of music legends like Hank Williams, The Beatles, Johnny Cash, Neil Young, Bob Dylan and so many more, Martin's legendary D-28 has been lovingly and artfully enhanced.",
    description2:
      "The 2017 D-28 blends the rich history of the guitar with Martin’s newest and most heralded innovations. The 184-year-old guitar maker has combined vintage appointments, including open-gear tuners, an aged toner top, antique white accents, and a faux tortoise pickguard with a special neck profile to give D-28 enthusiasts a modern feel and comfortable playing experience. Martin has also added forward-shifted bracing to allow greater vibration of the top.",
    materials: {
      topwood: "Sitka spruce",
      sidewood: "East Indian rosewood",
    },
    img: "https://www.martinguitar.com/dw/image/v2/BGJT_PRD/on/demandware.static/-/Sites-martin-master-catalog/default/dw77e28aa4/images/D-28/D-28_f.jpg?sw=600&sh=600&sm=fit",
  },
  {
    searchName: "Martin DX1E",
    name: "D-X1E",
    brand: "Martin",
    price: "500",
    bodysize: "D-14 Fret",
    description:
      "New Style 28 mother-of-pearl pattern fingerboard inlay steps up the D-X1E, lending a bit of classic Martin style to this affordably priced model. It is equipped with Fishman® MX electronics and strung with Martin’s Authentic Acoustic Lifespan® 2.0 strings.",
    description2:
      "With a new, soft gig bag featuring headstock, bridge, and endpin protectors, a durable water-repellent exterior, and foam padding, this model is ready to go anywhere.",
    materials: {
      topwood: "HPL",
      sidewood: "HPL",
    },
    img: "https://www.martinguitar.com/dw/image/v2/BGJT_PRD/on/demandware.static/-/Sites-martin-master-catalog/default/dwd653b8f4/images/D-X1E/D-X1E_f_mahogany-hpl.jpg?sw=600&sh=600&sm=fit",
  },
  {
    searchName: "Martin 00015M",
    name: "000-15M",
    brand: "Martin",
    price: "500",
    bodysize: "000-14 Fret",
    description:
      "The 000-15M model continues the Martin tradition with a 000-14 fret body size, solid mahogany construction and a rich satin finish. Satisfy your desire with an affordable solid wood guitar that is visually distinctive and innovative.",
    materials: {
      topwood: "Mahogany",
      sidewood: "Mahogany",
    },
    img: "https://www.martinguitar.com/dw/image/v2/BGJT_PRD/on/demandware.static/-/Sites-martin-master-catalog/default/dw0c0f5e76/images/000-15M/000-15M_f.jpg?sw=600&sh=600&sm=fit",
  },
  {
    searchName: "Gibson J45 Standard",
    name: "J-45 Standard",
    brand: "Gibson",
    price: "2,850",
    bodysize: "J-45 Dreadnought",
    description:
      "The J-45 is Gibson's best-selling acoustic of all time. Nicknamed 'The Workhorse' and first introduced in 1942, this iconic acoustic has become the cornerstone of its round-shoulder, dreadnought line.",
    description2:
      "World renowned for its full, balanced expression, warm bass and excellent projection, the J-45 has been refined to carry this legacy to new heights. The Gibson J-45 Standard delivers a sound with incredible dynamic range, warm mids, and a tight punchy bass.",
    materials: {
      topwood: "Sitka spruce",
      sidewood: "Mahogany",
    },
    img: "https://static.gibson.com/product-images/Acoustic/ACCBTI649/Vintage%20Sunburst/front-banner-1600_900.png",
  },
  {
    searchName: "Gibson Hummingbird Original",
    name: "Hummingbird Original",
    brand: "Gibson",
    price: "4,000",
    bodysize: "Hummingbird Dreadnought",
    description:
      "The unmistakable Gibson Hummingbird is followed by the masses as one of the most remarkable acoustic guitars ever built.",
    description2:
      "The new Hummingbird Original blends vintage appointments and today's modern, high-quality build construction. Outfitted with gold Gotoh Keystone tuners, double antiqued binding, a traditional Hummingbird truss rod cover, and a bone nut and saddle, it's available in Antique Natural or Heritage Cherry Sunburst finish.",
    materials: {
      topwood: "Sitka spruce",
      sidewood: "Mahogany",
    },
    img: "https://static.gibson.com/product-images/Acoustic/ACCFR6729/Antique%20Natural/front-banner-1600_900.png",
  },
  {
    searchName: "Gibson L-00 Studio Walnut",
    name: "L-00 Studio Walnut",
    brand: "Gibson",
    price: "1,850",
    bodysize: "L-00",
    description:
      "The new L-00 Studio offers one of our most famous icon guitars built with walnut back and sides. Available in both Antique Natural and our hand sprayed Walnut Burst finish. Finished with an active under-saddle piezo pickup for easy studio quality plug and play anywhere!",
    materials: {
      topwood: "Sitka spruce",
      sidewood: "Walnut",
    },
    img: "https://static.gibson.com/product-images/Acoustic/ACCX5Q355/Antique%20Natural/front-banner-1600_900.png",
  },
  {
    searchName: "Orangewood Echo Live",
    name: "Echo Live",
    brand: "Orangewood",
    price: "445",
    bodysize: "Dreadnought",
    description:
      "Echo creates an aura of luxury for the more sophisticated player with the solid sitka spruce top and the layered pau ferro back and sides. The warm and dulcet tones created by the Echo are as much of a pleasure to play as it is to hear. Comes equipped with a Fishman Flex Plus-T EQ.",
    materials: {
      topwood: "Sitka spruce",
      sidewood: "Layered pau ferro",
    },
    img: "https://cdn.shopify.com/s/files/1/0550/6737/products/ECHO-LIVE-FRONT-FULL_2048x.jpg?v=1643823167",
  },
  {
    searchName: "Orangewood Morgan Mahogany Live",
    name: "Morgan Mahogany Live",
    brand: "Orangewood",
    price: "295",
    bodysize: "Grand Auditorium",
    description:
      "The Morgan features a beautiful solid Mahogany top with a Pau Ferro rosette and black binding to create beautiful natural tones which are amplified by a Fishman EQ to take your onstage performance to the next level.",
    materials: {
      topwood: "Mahogany",
      sidewood: "Layered mahogany",
    },
    img: "https://cdn.shopify.com/s/files/1/0550/6737/products/MORGAN-MAHOGANY-LIVE-FRONT-FULL_600x.jpg?v=1645732916",
  },
  {
    searchName: "Orangewood Brooklyn Jr. Live",
    name: "Brooklyn Jr. Live",
    brand: "Orangewood",
    price: "445",
    bodysize: "Mini Grand Concert",
    description:
      "Smaller body, same big sound. The Brooklyn Jr. Live is a scaled-down version of our grand concert model, featuring a solid sitka spruce top, gold hardware, and an abalone rosette. Comes equipped with a Fishman Flex Plus-T EQ for well-balanced projection.",
    materials: {
      topwood: "Sitka spruce",
      sidewood: "Layered pau ferro",
    },
    img: "https://cdn.shopify.com/s/files/1/0550/6737/products/BROOKLYN-JR-LIVE-FRONT-FULL_600x.jpg?v=1643824823",
  },
  {
    searchName: "Taylor 724ce",
    name: "724ce",
    brand: "Taylor",
    price: "3500",
    bodysize: "Grand Auditorium",
    description:
      "The Taylor 724ce koa Grand Auditorium acoustic-electric guitar highlights the natural look, feel and sound of the wood, in a popular body shape that responds well to a variety of playstyles. The select-grade Hawaiian koa features rich color variegation and straight grain structure for stunning aesthetics.",
    description2:
      " Enjoy optimized response with Taylor’s innovative V-Class bracing system, which boosts volume and sustain, creates purer and more orderly notes, is easier to tune and has more solid pitch. The ultra-thin matte finish helps coax a livelier, punchier response, as well as produces a warm and inviting tactile sensation.",
    materials: {
      topwood: "Koa",
      sidewood: "Koa",
    },
    img: "https://www.taylorguitars.com/sites/default/files/images/2022-05/Taylor-724ce-1201272186-FrontLeft-2022_0.png",
  },
  {
    searchName: "Taylor Academy 10",
    name: "Academy 10",
    brand: "Taylor",
    price: "600",
    bodysize: "Dreadnought",
    description:
      "As a company that’s passionate about exposing more players to the pleasures of making music, Taylor isn’t content to see people throw in the towel before they have a chance to get their groove on. The Academy Series, which includes this Academy 10 Dreadnought acoustic guitar, represents Taylor’s effort to support the development of the entry-level guitar player.",
    materials: {
      topwood: "Sitka spruce",
      sidewood: "Layered sapele",
    },
    img: "https://www.taylorguitars.com/sites/default/files/2022-02-08/Academy%2010-Front.png",
  },
  {
    searchName: "Taylor Baby Taylor",
    name: "Baby Taylor",
    brand: "Taylor",
    price: "400",
    bodysize: "Baby",
    description:
      "Conceived as a starter guitar for kids, the lovable Baby Taylor has maintained its enduring appeal by being a legitimate musical instrument that anyone can enjoy. ",
    description2:
      "The three-quarter-size Dreadnought helped touring musicians like Taylor Swift sketch new musical ideas on the road, and it's been a reliable musical accomplice for travelers seeking inspiration while trekking the world. All Baby Taylor models ship with a durable travel-worthy gig bag made by Taylor for optimal fit and protection.",
    materials: {
      topwood: "Sitka spruce",
      sidewood: "Layered walnut",
    },
    img: "https://www.taylorguitars.com/sites/default/files/2022-02-08/Baby%20Taylor%20BT1-Front.png",
  },
  {
    searchName: "Taylor Big Baby Taylor",
    name: "Big Baby Taylor",
    brand: "Taylor",
    price: "600",
    bodysize: "Big Baby",
    description:
      "The Baby Taylor's scaled-up sibling, the Big Baby (15/16th-size), makes a sleek yet full-sounding travel companion with its svelte four-inch body depth, which is about a half-inch shallower than the depth of a standard Dreadnought. Slightly bigger than a Baby Taylor and just shy of a full-size guitar, the Big Baby Taylor is ideal for easy-playing, great-sounding guitar fun.",
    description2:
      "The overall size keeps you in the 'portable' category, yet with an extra dose of volume and fullness. Like the Baby, the Big Baby has an arched back that provides strength and contributes to its big tonal output. All Big Baby Taylor models ship with a durable travel-worthy gig bag for optimal fit and protection.",
    materials: {
      topwood: "Sitka spruce",
      sidewood: "Layered walnut",
    },
    img: "https://www.taylorguitars.com/sites/default/files/2022-02-08/Big%20Baby%20Taylor%20BBTe-Front.png",
  },
  {
    searchName: "Taylor 110e",
    name: "110e",
    brand: "Taylor",
    price: "800",
    bodysize: "Dreadnought",
    description:
      "Taylor's 100 Series guitars, like this 110e Dreadnought acoustic-electric guitar, makes a great guitar-playing experience accessible to everyone with these real wood instruments. For people taking the first or next step in their musical journey, these instruments promise to accelerate players' growth and enhance their enjoyment.",
    description2:
      "Taylor's famous neck profile combined with a 1-11/16' nut width make it easy for developing players to form barre chords. AThe 110e Dreadnought acoustic-electric guitar includes a durable, 600-denier nylon gig bag with double-stitched seams and reinforced stress points, built by Taylor for an optimal fit.",
    materials: {
      topwood: "Sitka spruce",
      sidewood: "Layered walnut",
    },
    img: "https://www.taylorguitars.com/sites/default/files/2022-02-08/110e-Front.png",
  },
  {
    searchName: "Orangewood Hudson Torrefied Spruce",
    name: "Hudson Torrefied Spruce",
    brand: "Orangewood",
    price: "745",
    bodysize: "Dreadnought",
    description:
      "An all solid dreadnought with a torrefied spruce top, Hudson evokes a bold and crisp sound that is perfect for performing (whether it’s on stage, at home, or in the woods) - making it a versatile companion for the rising singer-songwriter.",
    description2:
      "Torrefaction is a unique baking process. Every guitar is one of a kind, and the finish may slightly vary in color.",
    materials: {
      topwood: "Torrified stika spruce",
      sidewood: "Solid mahogany",
    },
    img: "https://cdn.shopify.com/s/files/1/0550/6737/products/HUDSON-TORREFIED-SPRUCE-FRONT-FULL_2000x.jpg?v=1643824051",
  },
  {
    searchName: "Orangewood Austen",
    name: "Austen",
    brand: "Orangewood",
    price: "225",
    bodysize: "Dreadnought",
    description:
      "With its stunning solid spruce top and the bold sound, Austen is surely a show-stealer. The smooth tone from the dreadnought body style makes it all more impressive.",
    materials: {
      topwood: "Spruce",
      sidewood: "Layered mahogany",
    },
    img: "https://cdn.shopify.com/s/files/1/0550/6737/products/AUSTEN-FRONT-FULL_2000x.jpg?v=1643823990",
  },
  {
    searchName: "Orangewood Manhattan",
    name: "Manhattan",
    brand: "Orangewood",
    price: "135",
    bodysize: "Dreadnought",
    description:
      "Manhattan delivers a bold tone that makes a perfect first impression. The dreadnought look and the full-tone is a timeless classic.",
    materials: {
      topwood: "Layered spruce",
      sidewood: "Layered mahogany",
    },
    img: "https://cdn.shopify.com/s/files/1/0550/6737/products/MANHATTAN-FRONT-FULL_2000x.jpg?v=1643824493",
  },
  {
    searchName: "Orangewood Berkeley",
    name: "Berkeley",
    brand: "Orangewood",
    price: "895",
    bodysize: "Dreadnought",
    description:
      "With the iconic dreadnought acoustic shape, Berkeley’s resonant, full-range voice fills a room with energy.",
    description2:
      "We topped Berkeley with torrefied solid Sitka spruce matched with solid pau ferro back and sides for a rich, aged tone. Gold hardware, abalone detailing, and Grover open gear tuners round out the vintage-inspired design. ",
    materials: {
      topwood: "Torrified sitka spruce",
      sidewood: "Pau ferro",
    },
    img: "https://cdn.shopify.com/s/files/1/0550/6737/products/BERKELEY-FRONT-FULL_2000x.jpg?v=1643824582",
  },
  {
    searchName: "Orangewood Sage Torrefied Spruce",
    name: "Sage Torrefied Spruce",
    brand: "Orangewood",
    price: "635",
    bodysize: "Grand Auditorium",
    description:
      "A stylish and versatile all solid cutaway guitar, Sage was made for the seasoned player searching for easier high fret access. With a warm, inviting tone and a sleek cutaway body shape, your best solos are yet to come.",
    materials: {
      topwood: "Torrified spruce",
      sidewood: "Mahogany",
    },
    img: "https://cdn.shopify.com/s/files/1/0550/6737/products/SAGE-TORREFIED-SPRUCE-FRONT-FULL_2000x.jpg?v=1643824547",
  },
  {
    searchName: "Orangewood Rey Mahogany",
    name: "Rey Mahogany",
    brand: "Orangewood",
    price: "145",
    bodysize: "Grand Auditorium",
    description:
      "The cutaway body style delivers a smooth playing experience for the players who are reaching for the higher notes.",
    materials: {
      topwood: "Layered mahogany",
      sidewood: "Layered mahogany",
    },
    img: "https://cdn.shopify.com/s/files/1/0550/6737/products/REY-MAHOGANY-FRONT-FULL_2000x.jpg?v=1643824165",
  },
  {
    searchName: "Orangewood Rey Spruce",
    name: "Rey Spruce",
    brand: "Orangewood",
    price: "145",
    bodysize: "Grand Auditorium",
    description:
      "Rey’s cutaway body shape allows easy fretboard accessibility to open your playing to new heights. When your creativity is unlimited, it’s time you have a guitar to match.",
    materials: {
      topwood: "Layered spruce",
      sidewood: "Layered mahogany",
    },
    img: "https://cdn.shopify.com/s/files/1/0550/6737/products/REY-SPRUCE-FRONT-FULL_2000x.jpg?v=1643825203",
  },
  {
    searchName: "Orangewood Mason Nylon Cedar Live",
    name: "Mason Nylon Cedar Live",
    brand: "Orangewood",
    price: "545",
    bodysize: "Grand Auditorium",
    description:
      "Classic meets modern. Modeled after the original Mason Live, our first-ever nylon string guitar features a solid cedar top, comfortable cutaway shape, and Savarez strings – for ease of playability and a warm, full tone.",
    description2:
      "Elegance is guaranteed with Mason’s gold hardware, white knob tuners, and abalone rosette. Comes equipped with a Fishman Flex Plus-T EQ.",
    materials: {
      topwood: "Cedar",
      sidewood: "Layered pau ferro",
    },
    img: "https://cdn.shopify.com/s/files/1/0550/6737/products/MASON-NYLON-CEDAR-LIVE-FRONT-FULL_2000x.jpg?v=1643824606",
  },
  {
    searchName: "Orangewood Cleo",
    name: "Cleo",
    brand: "Orangewood",
    price: "895",
    bodysize: "Grand Auditorium",
    description:
      "Open your playing to a wider sonic palette with Cleo’s timeless cutaway shape. We topped Cleo with torrefied solid Sitka spruce matched with solid pau ferro back and sides for a rich, aged tone.",
    description2:
      "Gold hardware, abalone detailing, and Grover open gear tuners round out the vintage-inspired design.",
    materials: {
      topwood: "Torrified sitka spruce",
      sidewood: "Pau ferro",
    },
    img: "https://cdn.shopify.com/s/files/1/0550/6737/products/CLEO-FRONT-FULL_2000x.jpg?v=1643825087",
  },
  {
    searchName: "Orangewood Ava Torrefied Spruce",
    name: "Ava Torrefied Spruce",
    brand: "Orangewood",
    price: "745",
    bodysize: "Grand Concert",
    description:
      "A gorgeous all solid grand concert with a torrefied spruce top, Ava was designed for bright and balanced tones to perfectly complement your favorite song.",
    materials: {
      topwood: "Torrified sitka Spruce",
      sidewood: "Solid mahogany",
    },
    img: "https://cdn.shopify.com/s/files/1/0550/6737/products/AVA-TORREFIED-SPRUCE-FRONT-FULL_2000x.jpg?v=1643824467",
  },
  {
    searchName: "Orangewood Brooklyn",
    name: "Brooklyn",
    brand: "Orangewood",
    price: "345",
    bodysize: "Grand Concert",
    description:
      "The solid sitka spruce top, gold hardware, and abalone rosette make the Brooklyn as pleasing to the eye as its vibrant tones are to the ear. You’ll be a hard act to follow when stepping offstage with this beauty.",
    materials: {
      topwood: "Sitka spruce",
      sidewood: "Pau ferro",
    },
    img: "https://cdn.shopify.com/s/files/1/0550/6737/products/BROOKLYN-FRONT-FULL_2000x.jpg?v=1643824720",
  },
  {
    searchName: "Orangewood Victoria",
    name: "Victoria",
    brand: "Orangewood",
    price: "135",
    bodysize: "Grand Concert",
    description:
      "For those who like clarity and brightness in their guitar tone, Victoria is the perfect musical companion featuring the grand concert body and a hybrid wood fingerboard.",
    materials: {
      topwood: "Layered spruce",
      sidewood: "Layered mahogany",
    },
    img: "https://cdn.shopify.com/s/files/1/0550/6737/products/VICTORIA-FRONT-FULL_2000x.jpg?v=1643824845",
  },
];

module.exports = guitarData;
