// Rich travel database of Indian destinations
const DESTINATIONS = {
  "agra": {
    name: "Agra",
    region: "North",
    state: "Uttar Pradesh",
    tagline: "The City of the Taj Mahal",
    description: "Home to the world's most famous monument of love, Agra is a historical marvel situated on the banks of the Yamuna River. It offers a glimpse into the architectural legacy of the Mughal empire.",
    bestSeason: "October to March (Pleasant and cool)",
    lat: 27.1767,
    lng: 78.0081,
    packing: [
      "Light cotton clothes (summer) or warm jacket/shawl (winter)",
      "Comfortable walking shoes for heritage sites",
      "Sunglasses, sun hat, and sunscreen",
      "Umbrella (monsoon season)",
      "Hand sanitizer and tissues"
    ],
    cuisine: [
      { name: "Petha", desc: "A translucent soft candy made from ash gourd, available in flavors like Angoori, Kesar, and Paan." },
      { name: "Bedai & Jalebi", desc: "A typical Agra breakfast featuring a puffy fried bread served with spicy potato gravy, paired with sweet jalebis." },
      { name: "Mughlai Curry", desc: "Rich, creamy curries flavored with whole spices, nuts, and dried fruits, reflecting royal Mughal kitchens." }
    ],
    tips: [
      "Visit the Taj Mahal at sunrise for the best light, fewer crowds, and cooler temperatures.",
      "The Taj Mahal is closed on Fridays. Plan your travel days accordingly.",
      "Beware of overly persistent local guides and touts; hire only official, licensed guides inside monument gates.",
      "Electric rickshaws (e-rickshaws) are the main mode of transit around the Taj Mahal area to keep pollution low."
    ],
    attractions: [
      {
        name: "Taj Mahal",
        description: "The magnificent white marble mausoleum built by Shah Jahan in memory of his favorite wife, Mumtaz Mahal. A UNESCO World Heritage Site.",
        lat: 27.1751,
        lng: 78.0421,
        timeToVisit: "morning",
        duration: 3,
        entryFee: { budget: 50, mid: 50, luxury: 1100 }, // Budget is Indian price, luxury is Foreign price
        type: "heritage"
      },
      {
        name: "Agra Fort",
        description: "A massive 16th-century red sandstone fortress that served as the primary residence of the emperors of the Mughal Dynasty.",
        lat: 27.1795,
        lng: 78.0211,
        timeToVisit: "afternoon",
        duration: 2,
        entryFee: { budget: 50, mid: 50, luxury: 650 },
        type: "heritage"
      },
      {
        name: "Mehtab Bagh",
        description: "A charbagh garden complex located across the Yamuna River, offering a stunning, unobstructed sunset view of the Taj Mahal.",
        lat: 27.1903,
        lng: 78.0423,
        timeToVisit: "evening",
        duration: 1.5,
        entryFee: { budget: 25, mid: 25, luxury: 300 },
        type: "nature"
      },
      {
        name: "Sadar Bazar",
        description: "A bustling traditional marketplace famous for local crafts, leather goods, marble replica items, and delicious street food stalls.",
        lat: 27.1632,
        lng: 78.0097,
        timeToVisit: "night",
        duration: 2,
        entryFee: { budget: 0, mid: 0, luxury: 0 },
        type: "shopping"
      },
      {
        name: "Fatehpur Sikri",
        description: "The short-lived capital of the Mughal Empire built by Akbar. Features the grand Buland Darwaza and Jama Masjid.",
        lat: 27.0945,
        lng: 77.6685,
        timeToVisit: "morning",
        duration: 3,
        entryFee: { budget: 50, mid: 50, luxury: 610 },
        type: "heritage"
      },
      {
        name: "Tomb of Itimad-ud-Daulah",
        description: "Often described as the 'Draft of the Taj Mahal' or 'Baby Taj', this is an exquisite tomb built entirely of white marble with detailed Pietra Dura inlays.",
        lat: 27.1929,
        lng: 78.0322,
        timeToVisit: "morning",
        duration: 1.5,
        entryFee: { budget: 30, mid: 30, luxury: 310 },
        type: "heritage"
      }
    ],
    budgetEstimates: {
      budget: { accommodation: 1200, transport: 500, dining: 600, misc: 300 },
      mid: { accommodation: 3500, transport: 1500, dining: 1500, misc: 800 },
      luxury: { accommodation: 12000, transport: 4000, dining: 4000, misc: 2000 }
    }
  },
  "ladakh": {
    name: "Leh-Ladakh",
    region: "North",
    state: "Ladakh",
    tagline: "The Land of High Passes",
    description: "A high-altitude desert kingdom boasting dramatic mountain passes, deep blue lakes, ancient monasteries, and vibrant Tibetan-Buddhist culture.",
    bestSeason: "May to September (Warm days and clear passes)",
    lat: 34.1526,
    lng: 77.5771,
    packing: [
      "Thermal innerwear and heavy woolens or down jacket",
      "Sturdy, broken-in trekking boots or walking shoes",
      "High SPF sunscreen, lip balm, and polarized sunglasses",
      "Hydration tablets and personal medicines (Diamox for altitude sickness)",
      "Windproof jacket and warm gloves"
    ],
    cuisine: [
      { name: "Thukpa", desc: "A heartwarming noodle soup made with vegetables, meat, and spiced broth, perfect for cold mountain evenings." },
      { name: "Momos & Chutney", desc: "Steamed or fried dumplings filled with local meats or vegetables, served with spicy sesame-chili sauce." },
      { name: "Butter Tea (Gur Gur)", desc: "A traditional salty Himalayan drink made with tea leaves, yak butter, and salt, which keeps body heat up." }
    ],
    tips: [
      "Acclimatization is crucial. Spend your first 36-48 hours resting in Leh to prevent Acute Mountain Sickness (AMS).",
      "Carry sufficient cash, as ATMs outside Leh town are non-existent and mobile networks are limited.",
      "Obtain an Inner Line Permit (ILP) beforehand or in Leh town to visit restricted areas like Pangong, Nubra, and Tso Moriri.",
      "Eco-sensitivity is highly important. Minimize plastic usage and carry your non-degradable waste back."
    ],
    attractions: [
      {
        name: "Pangong Tso Lake",
        description: "A mesmerizing high-altitude endorheic lake famous for changing its color from deep blue to turquoise and green throughout the day.",
        lat: 33.7595,
        lng: 78.6674,
        timeToVisit: "morning",
        duration: 4,
        entryFee: { budget: 20, mid: 20, luxury: 20 },
        type: "nature"
      },
      {
        name: "Nubra Valley & Hunder",
        description: "A stunning tri-armed valley where you can ride double-humped Bactrian camels amidst cold desert sand dunes, framed by snow-covered peaks.",
        lat: 34.5901,
        lng: 77.4194,
        timeToVisit: "afternoon",
        duration: 4,
        entryFee: { budget: 50, mid: 50, luxury: 50 },
        type: "adventure"
      },
      {
        name: "Khardung La Pass",
        description: "One of the highest motorable passes in the world, standing at 17,582 feet, connecting Leh to the Nubra and Shyok valleys.",
        lat: 34.2787,
        lng: 77.6047,
        timeToVisit: "morning",
        duration: 1,
        entryFee: { budget: 0, mid: 0, luxury: 0 },
        type: "adventure"
      },
      {
        name: "Thiksey Monastery",
        description: "A prominent twelve-story Tibetan Buddhist monastery resembling the Potala Palace of Tibet, featuring a spectacular 49-foot statue of Maitreya Buddha.",
        lat: 34.0561,
        lng: 77.6667,
        timeToVisit: "morning",
        duration: 2,
        entryFee: { budget: 50, mid: 50, luxury: 50 },
        type: "spiritual"
      },
      {
        name: "Shanti Stupa",
        description: "A white-domed Buddhist stupa on a hilltop in Chanspa, offering panoramic sunset views of Leh town and surrounding mountains.",
        lat: 34.1681,
        lng: 77.5684,
        timeToVisit: "evening",
        duration: 1.5,
        entryFee: { budget: 0, mid: 0, luxury: 0 },
        type: "spiritual"
      },
      {
        name: "Magnetic Hill",
        description: "A gravity hill where the layout of the surrounding land creates the optical illusion that stationary vehicles roll upwards against gravity.",
        lat: 34.1706,
        lng: 77.3528,
        timeToVisit: "afternoon",
        duration: 1,
        entryFee: { budget: 0, mid: 0, luxury: 0 },
        type: "nature"
      }
    ],
    budgetEstimates: {
      budget: { accommodation: 1500, transport: 2000, dining: 700, misc: 500 },
      mid: { accommodation: 4500, transport: 4500, dining: 1600, misc: 1000 },
      luxury: { accommodation: 15000, transport: 8000, dining: 3500, misc: 2500 }
    }
  },
  "varanasi": {
    name: "Varanasi",
    region: "North",
    state: "Uttar Pradesh",
    tagline: "The Eternal Spiritual Heart",
    description: "One of the oldest continuously inhabited cities in the world. Varanasi is the spiritual core of India, featuring riverfront ghats, mystical rituals, and deep cultural heritage.",
    bestSeason: "October to March (Cool river breeze and festive mood)",
    lat: 25.3176,
    lng: 83.0062,
    packing: [
      "Modest, conservative clothing covering shoulders and knees",
      "Slip-on shoes or sandals for visiting ghats and temples easily",
      "Comfortable breathable fabrics",
      "Hand sanitizer, wet wipes, and mosquito repellent",
      "A light scarf to cover your head if required in temples"
    ],
    cuisine: [
      { name: "Banarasi Tamatar Chaat", desc: "A fiery street-food snack made from mashed potatoes and tomatoes, spiked with local spices and sweet sugar syrup." },
      { name: "Kachori Sabzi & Jalebi", desc: "Crisp, lentil-stuffed kachoris served with spicy potato curry, topped with fresh, hot jalebis. The staple breakfast." },
      { name: "Banarasi Lassi & Paan", desc: "Thick sweet yogurt served in earthen clay cups (kulhads), followed by the legendary betel leaf digestive (Paan)." }
    ],
    tips: [
      "Attend the evening Ganga Aarti at Dashashwamedh Ghat. Arrive by 5:30 PM for a good spot, or rent a boat to watch it from the river.",
      "Respect local customs. Do not take photos of cremations at Manikarnika Ghat out of respect for the grieving families.",
      "Explore the narrow alleyways (Galis) on foot to discover ancient shrines, silk weavers, and authentic street food spots.",
      "Be prepared for crowds, sensory overload, and cows in the narrow streets. Keep calm and take it slow."
    ],
    attractions: [
      {
        name: "Dashashwamedh Ghat",
        description: "The main and oldest ghat on the Ganges River, home to the spectacular daily evening Ganga Aarti performed by young priests.",
        lat: 25.3079,
        lng: 83.0104,
        timeToVisit: "evening",
        duration: 2,
        entryFee: { budget: 0, mid: 200, luxury: 2000 }, // Budget is standing, mid is shared boat, luxury is private classic boat
        type: "spiritual"
      },
      {
        name: "Kashi Vishwanath Temple",
        description: "The highly revered temple dedicated to Lord Shiva, featuring a gold-plated dome and tight security in the heart of the old town.",
        lat: 25.3108,
        lng: 83.0101,
        timeToVisit: "morning",
        duration: 3,
        entryFee: { budget: 0, mid: 300, luxury: 500 }, // Mid/luxury prices for VIP Sugam Darshan tickets
        type: "spiritual"
      },
      {
        name: "Sarnath",
        description: "A peaceful Buddhist pilgrimage center just outside the city, where Lord Buddha gave his first sermon. Features the Dhamek Stupa and museum.",
        lat: 25.3762,
        lng: 83.0227,
        timeToVisit: "morning",
        duration: 3,
        entryFee: { budget: 20, mid: 20, luxury: 300 },
        type: "heritage"
      },
      {
        name: "Assi Ghat",
        description: "Located at the south end of Varanasi, famous for Subah-e-Banaras (morning music and yoga at sunrise) and a laidback student vibe.",
        lat: 25.2894,
        lng: 83.0071,
        timeToVisit: "morning",
        duration: 2,
        entryFee: { budget: 0, mid: 0, luxury: 0 },
        type: "spiritual"
      },
      {
        name: "Manikarnika Ghat",
        description: "The primary cremation ghat in Varanasi, where the funeral pyres burn continuously. A profound place of life and death reflections.",
        lat: 25.3117,
        lng: 83.0135,
        timeToVisit: "afternoon",
        duration: 1,
        entryFee: { budget: 0, mid: 0, luxury: 0 },
        type: "spiritual"
      },
      {
        name: "Banaras Hindu University (BHU)",
        description: "A massive green university campus, home to the New Vishwanath Temple (Birla Temple) and Bharat Kala Bhavan museum.",
        lat: 25.2677,
        lng: 82.9913,
        timeToVisit: "afternoon",
        duration: 2,
        entryFee: { budget: 0, mid: 0, luxury: 0 },
        type: "leisure"
      }
    ],
    budgetEstimates: {
      budget: { accommodation: 800, transport: 400, dining: 500, misc: 300 },
      mid: { accommodation: 2800, transport: 1200, dining: 1200, misc: 700 },
      luxury: { accommodation: 9500, transport: 3500, dining: 3000, misc: 1500 }
    }
  },
  "kerala": {
    name: "Kerala Backwaters & Hills",
    region: "South",
    state: "Kerala",
    tagline: "God's Own Country",
    description: "An idyllic tropical paradise of palm-fringed backwaters, rolling green tea gardens, spice plantations, and pristine beaches.",
    bestSeason: "September to March (Pleasant weather; avoid monsoon unless for Ayurveda)",
    lat: 9.4981,
    lng: 76.3388,
    packing: [
      "Light, airy cotton clothing",
      "Comfortable sandals and hiking shoes for tea garden walks",
      "Raincoat or umbrella (rains are frequent and sudden)",
      "Mosquito repellent is essential, especially for backwaters",
      "Swimwear for beaches"
    ],
    cuisine: [
      { name: "Kerala Sadya", desc: "A grand vegetarian feast served on a banana leaf, featuring over 20 dishes including Avial, Thoran, and Payasam." },
      { name: "Karimeen Pollichathu", desc: "Pearl spot fish marinated in spicy local masala, wrapped in a banana leaf, and slow-grilled to perfection." },
      { name: "Appam & Stew", desc: "Lacy, fermented rice pancakes with soft, spongy centers, served with a mild, aromatic coconut milk stew." }
    ],
    tips: [
      "Book houseboats in Alleppey in advance. Opt for an overnight cruise to experience the tranquil village life along canals.",
      "Try an authentic Ayurvedic oil massage at a certified center (look for Green Leaf or Olive Leaf certification).",
      "Be respectful at temples. Some traditional temples in Kerala require men to wear a Mundu (dhoti) and remove shirts.",
      "Hire a local driver for hill station transfers (like Cochin to Munnar), as roads are winding and steep."
    ],
    attractions: [
      {
        name: "Alleppey Houseboat Canal Cruise",
        description: "Gliding through the serene network of canals, rivers, and lagoons on a traditional Kettuvallam (houseboat) made of bamboo and thatch.",
        lat: 9.4981,
        lng: 76.3388,
        timeToVisit: "morning",
        duration: 6,
        entryFee: { budget: 1500, mid: 6000, luxury: 15000 }, // Budget is day boat ride, mid is shared stay, luxury is private luxury boat
        type: "leisure"
      },
      {
        name: "Munnar Tea Gardens",
        description: "Lush green undulating hills carpeted with tea leaves, offering panoramic views, fresh air, and tea testing rooms.",
        lat: 10.0889,
        lng: 77.0595,
        timeToVisit: "morning",
        duration: 3,
        entryFee: { budget: 20, mid: 20, luxury: 20 },
        type: "nature"
      },
      {
        name: "Fort Kochi & Chinese Fishing Nets",
        description: "A historic seaside neighborhood blending Portuguese, Dutch, and British architecture, famous for the giant cantilevered fishing nets.",
        lat: 9.9658,
        lng: 76.2421,
        timeToVisit: "evening",
        duration: 3,
        entryFee: { budget: 0, mid: 0, luxury: 0 },
        type: "heritage"
      },
      {
        name: "Periyar Wildlife Sanctuary",
        description: "A protected forest area in Thekkady, where you can take a boat safari on an artificial lake to spot wild elephants, deer, and exotic birds.",
        lat: 9.4679,
        lng: 77.1394,
        timeToVisit: "afternoon",
        duration: 3,
        entryFee: { budget: 150, mid: 500, luxury: 1000 },
        type: "adventure"
      },
      {
        name: "Eravikulam National Park",
        description: "Located near Munnar, home to the endangered Nilgiri Tahr (mountain goat) and the Anamudi peak, the highest point in South India.",
        lat: 10.1501,
        lng: 77.0601,
        timeToVisit: "morning",
        duration: 3,
        entryFee: { budget: 125, mid: 125, luxury: 420 },
        type: "nature"
      },
      {
        name: "Varkala Beach & Cliff",
        description: "A dramatic coastal cliff directly overlooking the Arabian Sea, featuring natural springs, hippie cafés, and surfing waves.",
        lat: 8.7329,
        lng: 76.7061,
        timeToVisit: "evening",
        duration: 3,
        entryFee: { budget: 0, mid: 0, luxury: 0 },
        type: "leisure"
      }
    ],
    budgetEstimates: {
      budget: { accommodation: 1500, transport: 1000, dining: 600, misc: 400 },
      mid: { accommodation: 4000, transport: 2200, dining: 1500, misc: 1000 },
      luxury: { accommodation: 14000, transport: 4500, dining: 3500, misc: 2000 }
    }
  },
  "goa": {
    name: "Goa",
    region: "West",
    state: "Goa",
    tagline: "The Coastal Sunshine State",
    description: "A blend of Indo-Portuguese history, golden-sand beaches, laidback shacks, bustling night markets, and thrilling water sports.",
    bestSeason: "November to February (Cool, dry, and festive vibe)",
    lat: 15.4909,
    lng: 73.8278,
    packing: [
      "Beachwear, light shorts, cotton t-shirts, and sundresses",
      "Flip-flops and sandals",
      "Sunscreen, sunglasses, and sun hat",
      "Waterproof bag for boat cruises and beaches",
      "Mosquito repellent"
    ],
    cuisine: [
      { name: "Goan Fish Curry Rice", desc: "Fresh fish cooked in a tangy, spicy red coconut curry, served hot with white rice. The ultimate Goan comfort food." },
      { name: "Pork Vindaloo", desc: "A fiery, tangy dish heavily spiced with garlic, vinegar, and red chilies, showcasing Portuguese culinary influence." },
      { name: "Bebinca", desc: "A rich, multi-layered traditional dessert made of coconut milk, eggs, ghee, and sugar, served warm with ice cream." }
    ],
    tips: [
      "Rent a scooter or self-drive car for the most flexible and economical way to travel around Goa.",
      "Explore South Goa (Palolem, Patnem) for a quiet, scenic, and relaxing vibe, and North Goa (Baga, Anjuna) for parties and water sports.",
      "Always negotiate taxi fares beforehand as ride-hailing apps like Uber/Ola do not operate in Goa (local app 'Goamiles' is available).",
      "Be responsible on beaches: do not litter, do not swim near red flag areas, and respect other beachgoers."
    ],
    attractions: [
      {
        name: "Baga & Calangute Beach",
        description: "The heart of North Goa tourism, packed with beach shacks, water sports (jet skiing, parasailing), and bustling nightlife spots.",
        lat: 15.5539,
        lng: 73.7553,
        timeToVisit: "evening",
        duration: 4,
        entryFee: { budget: 0, mid: 1000, luxury: 3000 }, // Mid/luxury prices represent water sports activities
        type: "adventure"
      },
      {
        name: "Basilica of Bom Jesus",
        description: "A UNESCO World Heritage site housing the preserved mortal remains of St. Francis Xavier, featuring beautiful baroque architecture.",
        lat: 15.5009,
        lng: 73.9116,
        timeToVisit: "morning",
        duration: 1.5,
        entryFee: { budget: 0, mid: 0, luxury: 0 },
        type: "heritage"
      },
      {
        name: "Fontainhas (Latin Quarter)",
        description: "A charming neighborhood in Panaji with narrow streets lined with brightly colored 19th-century Portuguese houses and cozy cafes.",
        lat: 15.4908,
        lng: 73.8447,
        timeToVisit: "afternoon",
        duration: 2,
        entryFee: { budget: 0, mid: 0, luxury: 0 },
        type: "leisure"
      },
      {
        name: "Dudhsagar Waterfalls",
        description: "A majestic four-tiered waterfall on the Mandovi River, resembling a sea of milk cascading down a steep mountain slope inside a forest.",
        lat: 15.3179,
        lng: 74.3149,
        timeToVisit: "morning",
        duration: 5,
        entryFee: { budget: 400, mid: 400, luxury: 1000 }, // Cost of forest entry and jeep safari
        type: "nature"
      },
      {
        name: "Anjuna Flea Market / Arpora Night Market",
        description: "Vibrant weekly markets offering everything from bohemian apparel and jewelry to live music, street food, and artisanal products.",
        lat: 15.5727,
        lng: 73.7441,
        timeToVisit: "night",
        duration: 3,
        entryFee: { budget: 0, mid: 0, luxury: 0 },
        type: "shopping"
      },
      {
        name: "Palolem Beach",
        description: "A stunning crescent-shaped beach in South Goa enclosed by a thick forest of coconut palms, famous for its calm waters and silent discos.",
        lat: 15.0101,
        lng: 74.0232,
        timeToVisit: "morning",
        duration: 4,
        entryFee: { budget: 0, mid: 0, luxury: 0 },
        type: "leisure"
      }
    ],
    budgetEstimates: {
      budget: { accommodation: 1000, transport: 400, dining: 700, misc: 500 },
      mid: { accommodation: 3500, transport: 1200, dining: 1600, misc: 1000 },
      luxury: { accommodation: 11000, transport: 3500, dining: 3500, misc: 2000 }
    }
  },
  "udaipur": {
    name: "Udaipur",
    region: "West",
    state: "Rajasthan",
    tagline: "The Venice of the East",
    description: "Widely regarded as the most romantic city in India, Udaipur is surrounded by beautiful lakes, historic palaces, and rugged green hills.",
    bestSeason: "September to March (Pleasant weather, ideal for boating)",
    lat: 24.5854,
    lng: 73.7125,
    packing: [
      "Ethnic wear / smart casuals for palaces",
      "Comfortable shoes for walking inside palace complexes",
      "Sunglasses and sunscreen",
      "Light jacket (winter evenings get cool)"
    ],
    cuisine: [
      { name: "Dal Baati Churma", desc: "An authentic Rajasthani dish consisting of hard wheat rolls (baatis) cooked in clay ovens, dipped in melted ghee, served with spicy lentil curry (dal) and sweet crumbled wheat (churma)." },
      { name: "Laal Maas", desc: "A fiery mutton curry slow-cooked with a special paste of Mathania red chilies and smoked garlic." },
      { name: "Kachori & Mirchi Vada", desc: "Deep-fried, spicy onion/potato-stuffed snack pastries popular at roadside tea stalls." }
    ],
    tips: [
      "Take a boat ride on Lake Pichola around sunset for majestic views of the lake palaces glowing under golden lights.",
      "Book a lakeside dining experience. Reserve tables in advance as waterfront seating is highly popular.",
      "Stay in a traditional Haveli (converted boutique hotel) in the old city area to experience authentic Mewar architecture.",
      "Shopping: Look for miniature paintings, silver jewelry, and Bandhani textiles in the local bazaars."
    ],
    attractions: [
      {
        name: "City Palace Complex",
        description: "A monumental palace complex overlooking Lake Pichola, showcasing an elegant blend of Rajasthani, Mughal, and European design.",
        lat: 24.5764,
        lng: 73.6835,
        timeToVisit: "morning",
        duration: 3,
        entryFee: { budget: 250, mid: 250, luxury: 250 },
        type: "heritage"
      },
      {
        name: "Lake Pichola & Jag Mandir",
        description: "An iconic artificial freshwater lake. Take a boat ride to visit Jag Mandir, a beautiful palace built on an island in the lake.",
        lat: 24.5684,
        lng: 73.6791,
        timeToVisit: "evening",
        duration: 2,
        entryFee: { budget: 400, mid: 400, luxury: 800 }, // Boat ride ticket prices
        type: "leisure"
      },
      {
        name: "Sajjangarh Monsoon Palace",
        description: "A hilltop palatial residence offering breathtaking, panoramic bird's-eye views of the city lakes and the surrounding Aravalli mountain range, especially at sunset.",
        lat: 24.5901,
        lng: 73.6372,
        timeToVisit: "evening",
        duration: 2,
        entryFee: { budget: 155, mid: 155, luxury: 300 },
        type: "nature"
      },
      {
        name: "Saheliyon-ki-Bari",
        description: "A historic, beautiful garden decorated with marble fountains, lotus pools, and pavilions, built for the royal ladies of the court.",
        lat: 24.6009,
        lng: 73.6917,
        timeToVisit: "afternoon",
        duration: 1.5,
        entryFee: { budget: 50, mid: 50, luxury: 100 },
        type: "nature"
      },
      {
        name: "Bagore Ki Haveli",
        description: "An ancient mansion situated right on Gangaur Ghat, housing a museum and hosting Dharohar, a legendary evening folk dance show.",
        lat: 24.5794,
        lng: 73.6826,
        timeToVisit: "night",
        duration: 2,
        entryFee: { budget: 150, mid: 150, luxury: 250 },
        type: "heritage"
      },
      {
        name: "Jagdish Temple",
        description: "A large, double-story Indo-Aryan temple dedicated to Lord Vishnu, featuring elaborate stone carvings and pillars near the City Palace gate.",
        lat: 24.5798,
        lng: 73.6841,
        timeToVisit: "morning",
        duration: 1,
        entryFee: { budget: 0, mid: 0, luxury: 0 },
        type: "spiritual"
      }
    ],
    budgetEstimates: {
      budget: { accommodation: 1200, transport: 500, dining: 600, misc: 400 },
      mid: { accommodation: 3500, transport: 1500, dining: 1500, misc: 800 },
      luxury: { accommodation: 14000, transport: 4000, dining: 4000, misc: 2000 }
    }
  },
  "hampi": {
    name: "Hampi",
    region: "South",
    state: "Karnataka",
    tagline: "The Ruined Empire of Vijayanagara",
    description: "A UNESCO World Heritage site that transports visitors to the ruins of a once-glorious 14th-century Hindu kingdom, surrounded by a surreal landscape of giant boulders and banana plantations.",
    bestSeason: "October to February (Pleasant weather, ideal for walking amidst monuments)",
    lat: 15.3350,
    lng: 76.4600,
    packing: [
      "Comfortable walking shoes (essential; you will walk miles over rocks)",
      "Sun hat, sunglasses, and high-quality sunscreen",
      "Breathable cotton clothes",
      "Refillable water bottle",
      "Backpack"
    ],
    cuisine: [
      { name: "South Indian Thali", desc: "A wholesome meal of rice, sambar, rasam, dry vegetable curries, and curd, served on a plate or banana leaf." },
      { name: "Filter Coffee", desc: "Frothed chicory-blended milk coffee brewed in a traditional metal tumbler and dabarah set." },
      { name: "Neer Dosa", desc: "Paper-thin, light, and lacy crepes made from fermented rice batter, served with coconut chutney." }
    ],
    tips: [
      "Hampi is divided into the Sacred Ruins Center and the Hippie Island across the Tungabhadra River. Cross the river using local motorboats or coracles.",
      "Explore the vast site by renting a bicycle or hiring a motorized moped/scooter.",
      "Hampi is a holy site: alcohol and non-vegetarian food are strictly prohibited in the main temple ruins area.",
      "Carry ample cash; ATMs in Hampi village are frequently out of service."
    ],
    attractions: [
      {
        name: "Virupaksha Temple",
        description: "The oldest active temple in Hampi, dedicated to Lord Shiva, featuring an impressive 160-foot entrance tower (gopuram) and a temple elephant named Lakshmi.",
        lat: 15.3352,
        lng: 76.4590,
        timeToVisit: "morning",
        duration: 2,
        entryFee: { budget: 25, mid: 25, luxury: 25 },
        type: "spiritual"
      },
      {
        name: "Vittala Temple & Stone Chariot",
        description: "A spectacular temple ruins complex famous for its iconic, intricately carved Stone Chariot and musical pillars that emit musical tones when tapped.",
        lat: 15.3429,
        lng: 76.4772,
        timeToVisit: "morning",
        duration: 3,
        entryFee: { budget: 40, mid: 40, luxury: 600 },
        type: "heritage"
      },
      {
        name: "Matanga Hill",
        description: "The highest point in Hampi, offering a challenging climb up stone steps to watch an unparalleled, breathtaking sunrise or sunset over the boulder-strewn landscape.",
        lat: 15.3319,
        lng: 76.4642,
        timeToVisit: "evening",
        duration: 2,
        entryFee: { budget: 0, mid: 0, luxury: 0 },
        type: "nature"
      },
      {
        name: "Lotus Mahal & Elephant Stables",
        description: "A beautiful two-story pavilion built in Indo-Islamic style, alongside a grand, domed stable structure that housed the royal elephants.",
        lat: 15.3195,
        lng: 76.4678,
        timeToVisit: "afternoon",
        duration: 2,
        entryFee: { budget: 40, mid: 40, luxury: 600 }, // Ticket is combined with Vittala Temple
        type: "heritage"
      },
      {
        name: "Coracle Ride on Tungabhadra River",
        description: "Floating in a round, traditional bowl-shaped boat woven of bamboo, steering past river ruins, rock carvings, and boulders.",
        lat: 15.3394,
        lng: 76.4611,
        timeToVisit: "evening",
        duration: 1,
        entryFee: { budget: 100, mid: 300, luxury: 600 },
        type: "adventure"
      },
      {
        name: "Sanapur Lake",
        description: "A serene lake on the Hippie Island side, ideal for cliff jumping, sitting on boulders, and relaxing away from the temple ruins.",
        lat: 15.3567,
        lng: 76.4449,
        timeToVisit: "afternoon",
        duration: 2,
        entryFee: { budget: 0, mid: 0, luxury: 0 },
        type: "nature"
      }
    ],
    budgetEstimates: {
      budget: { accommodation: 800, transport: 500, dining: 400, misc: 300 },
      mid: { accommodation: 2500, transport: 1200, dining: 1000, misc: 600 },
      luxury: { accommodation: 8000, transport: 3000, dining: 2500, misc: 1500 }
    }
  },
  "manali": {
    name: "Manali",
    region: "North",
    state: "Himachal Pradesh",
    tagline: "Valley of the Gods",
    description: "A popular, high-altitude mountain resort town tucked away in the Beas River Valley, surrounded by pine forests, orchards, and snow-capped peaks.",
    bestSeason: "March to June (Pleasant weather) or December to February (For snow and skiing)",
    lat: 32.2396,
    lng: 77.1887,
    packing: [
      "Thermal layer, warm fleece, and windproof heavy jacket",
      "Gloves, woolen caps, and thick socks",
      "Sturdy walking shoes with good grip",
      "Cold cream and lip balm",
      "Motion sickness medicine for winding mountain roads"
    ],
    cuisine: [
      { name: "Siddu", desc: "A traditional Himachali wheat flour bread stuffed with a rich filling of poppy seeds, walnuts, and spices, steamed and served hot with melted ghee." },
      { name: "Trout Fish", desc: "Fresh river trout marinated in local spices and pan-fried or grilled, served with boiled vegetables." },
      { name: "Babru", desc: "A sweet or savory deep-fried black gram flatbread, similar to a kachori but with a distinct Himachali flavor." }
    ],
    tips: [
      "To visit Rohtang Pass, you must obtain a permit online in advance, as the daily number of vehicles is strictly regulated.",
      "Check weather and road condition reports before planning travel to high passes, as sudden snowfalls can cause blockages.",
      "Explore Old Manali on foot to experience rustic wooden houses, vibrant cafes, and a laid-back alternative vibe.",
      "Always hire adventure activity gear (like skiing suits or boots) from government-approved rental shops along the highway."
    ],
    attractions: [
      {
        name: "Solang Valley",
        description: "A scenic valley known for adventure activities like paragliding, zorbing, Quad biking, and cable car rides in summer, and skiing/snowboarding in winter.",
        lat: 32.3167,
        lng: 77.1594,
        timeToVisit: "morning",
        duration: 4,
        entryFee: { budget: 0, mid: 1000, luxury: 3000 }, // Represents adventure activities
        type: "adventure"
      },
      {
        name: "Rohtang Pass",
        description: "A high mountain pass at 13,058 feet offering magnificent, close-up panoramic views of glaciers, snowfields, and peaks.",
        lat: 32.3716,
        lng: 77.2435,
        timeToVisit: "morning",
        duration: 5,
        entryFee: { budget: 550, mid: 550, luxury: 550 }, // Permit vehicle fee
        type: "nature"
      },
      {
        name: "Hadimba Temple",
        description: "An ancient, unique wooden pagoda-style temple constructed around a cave in the middle of a dense cedar (deodar) forest.",
        lat: 32.2483,
        lng: 77.1798,
        timeToVisit: "afternoon",
        duration: 1.5,
        entryFee: { budget: 0, mid: 0, luxury: 0 },
        type: "spiritual"
      },
      {
        name: "Old Manali Cafe Walk",
        description: "Strolling through the orchard-lined streets of Old Manali, sampling local pastries, international dishes, and live acoustic music.",
        lat: 32.2548,
        lng: 77.1822,
        timeToVisit: "night",
        duration: 3,
        entryFee: { budget: 200, mid: 600, luxury: 1500 },
        type: "food"
      },
      {
        name: "Jogini Waterfall Trek",
        description: "A short, scenic pine-forest trek leading from Vashisht village to a towering, beautiful waterfall cascading down rock faces.",
        lat: 32.2679,
        lng: 77.1994,
        timeToVisit: "morning",
        duration: 3,
        entryFee: { budget: 0, mid: 0, luxury: 0 },
        type: "adventure"
      },
      {
        name: "Vashisht Hot Water Springs",
        description: "Natural, therapeutic sulfur hot springs located inside an ancient stone temple complex, with separate bathing areas for men and women.",
        lat: 32.2601,
        lng: 77.1956,
        timeToVisit: "afternoon",
        duration: 1,
        entryFee: { budget: 0, mid: 0, luxury: 0 },
        type: "spiritual"
      }
    ],
    budgetEstimates: {
      budget: { accommodation: 1000, transport: 800, dining: 600, misc: 400 },
      mid: { accommodation: 3200, transport: 2200, dining: 1500, misc: 900 },
      luxury: { accommodation: 11000, transport: 4500, dining: 3500, misc: 2000 }
    }
  },
  "ooty": {
    name: "Ooty",
    region: "South",
    state: "Tamil Nadu",
    tagline: "Queen of Hill Stations",
    description: "Nestled in the Nilgiri Hills, Ooty is famous for its cool climate, misty tea estates, colonial-era architecture, and the heritage Nilgiri Mountain Railway.",
    bestSeason: "March to June (Cool and sunny) or October to November (Lush post-monsoon green)",
    lat: 11.4102,
    lng: 76.6950,
    packing: [
      "Light sweater or cardigan (all seasons) plus woolen jacket (winter nights)",
      "Umbrella or light rain jacket",
      "Comfortable shoes for walking and hiking",
      "Camera for scenic landscapes"
    ],
    cuisine: [
      { name: "Ooty Homemade Chocolates", desc: "Creamy, rich fudge, truffles, and nut-filled chocolates crafted locally by boutique confectioners." },
      { name: "Ooty Varkey", desc: "A crispy, flaky baked tea biscuit made from wheat flour and ghee, perfect for dipping in hot local tea." },
      { name: "Fresh Nilgiri Tea", desc: "Aromatic, light-bodied black tea harvested directly from the surrounding high-altitude tea plantations." }
    ],
    tips: [
      "Book tickets for the Nilgiri Mountain Railway (Toy Train) online on IRCTC months in advance; seats sell out instantly.",
      "Prepare for winding roads (36 hairpin bends from Mettupalayam/Masinagudi). Use motion sickness remedies if needed.",
      "Visit the government chocolate factory and tea museum to see the production processes and buy authentic products.",
      "Pack light layers, as the daytime weather can change quickly from sunny to foggy or rainy."
    ],
    attractions: [
      {
        name: "Nilgiri Mountain Railway (Toy Train)",
        description: "A steam-powered heritage train ride cruising slowly through tunnels, deep valleys, lush green tea fields, and steep forest cliffs.",
        lat: 11.4079,
        lng: 76.7032,
        timeToVisit: "morning",
        duration: 3,
        entryFee: { budget: 15, mid: 100, luxury: 300 }, // Ticket classes
        type: "heritage"
      },
      {
        name: "Ooty Botanical Gardens",
        description: "Spread over 55 acres, a beautifully landscaped garden boasting a fossilized tree trunk estimated to be 20 million years old.",
        lat: 11.4191,
        lng: 76.7122,
        timeToVisit: "afternoon",
        duration: 2,
        entryFee: { budget: 30, mid: 30, luxury: 30 },
        type: "nature"
      },
      {
        name: "Doddabetta Peak",
        description: "The highest mountain peak in the Nilgiri Hills, standing at 8,650 feet, offering a telescope house and spectacular forest views.",
        lat: 11.4011,
        lng: 76.7367,
        timeToVisit: "morning",
        duration: 2,
        entryFee: { budget: 10, mid: 10, luxury: 10 },
        type: "nature"
      },
      {
        name: "Ooty Lake & Boating",
        description: "An artificial L-shaped lake where you can rent paddleboats, motorboats, or rowboats, surrounded by scenic groves of eucalyptus trees.",
        lat: 11.4069,
        lng: 76.6853,
        timeToVisit: "evening",
        duration: 2,
        entryFee: { budget: 100, mid: 300, luxury: 500 }, // Boating rental cost
        type: "leisure"
      },
      {
        name: "Pykara Waterfalls & Lake",
        description: "A clean, peaceful lake and cascading waterfalls located inside a dense forest, featuring speedboating docks.",
        lat: 11.5302,
        lng: 76.6022,
        timeToVisit: "morning",
        duration: 3,
        entryFee: { budget: 50, mid: 200, luxury: 800 },
        type: "nature"
      },
      {
        name: "Emerald Lake",
        description: "A serene, quiet lake away from the crowded city center, famous for tea plantation backdrops, birdwatching, and sunrises.",
        lat: 11.3326,
        lng: 76.6214,
        timeToVisit: "afternoon",
        duration: 1.5,
        entryFee: { budget: 0, mid: 0, luxury: 0 },
        type: "nature"
      }
    ],
    budgetEstimates: {
      budget: { accommodation: 1000, transport: 600, dining: 500, misc: 300 },
      mid: { accommodation: 3000, transport: 1800, dining: 1300, misc: 800 },
      luxury: { accommodation: 10000, transport: 3500, dining: 3000, misc: 1800 }
    }
  },
  "darjeeling": {
    name: "Darjeeling",
    region: "East",
    state: "West Bengal",
    tagline: "The Land of the Cosmic Tea Bolt",
    description: "Famous worldwide for its premium tea, Darjeeling stands majestically against the backdrop of Mount Kanchenjunga, the third highest mountain in the world.",
    bestSeason: "October to December (Clear skies for peak views) or March to May",
    lat: 27.0410,
    lng: 88.2627,
    packing: [
      "Windcheater, sweaters, and light thermals (summer/autumn) or heavy coat (winter)",
      "Umbrella or folding poncho",
      "Sturdy walking shoes for steep, hilly roads",
      "Moisturizer and lip balm"
    ],
    cuisine: [
      { name: "Darjeeling Tea", desc: "The highly-prized 'Champagne of Teas', featuring a delicate Muscatel flavor, served black in local tea salons." },
      { name: "Momos", desc: "Steamed flour dumplings packed with spiced vegetables, cheese, or meat, served with hot clear soup and fire-red chili chutney." },
      { name: "Thukpa & Shaphaley", desc: "Hearty Tibetan noodle soup paired with deep-fried bread turnovers stuffed with spiced minced fillings." }
    ],
    tips: [
      "Wake up by 3:30 AM to visit Tiger Hill for sunrise. It gets extremely cold and crowded, but seeing Kanchenjunga glow in gold is worth it.",
      "Ride the Darjeeling Himalayan Railway (Toy Train) steam engine 'Joy Ride'. Book tickets weeks in advance through IRCTC.",
      "Explore Mall Road (Chowrasta) in the evening. It is a vehicle-free pedestrian square ideal for strolling, tea sipping, and shopping.",
      "Keep a buffer day in monsoon/late summer, as heavy rainfall can trigger occasional mudslides in the hills."
    ],
    attractions: [
      {
        name: "Tiger Hill Sunrise Point",
        description: "The famous hilltop viewpoint offering a majestic sunrise panorama over Mount Everest and Mount Kanchenjunga.",
        lat: 26.9944,
        lng: 88.2504,
        timeToVisit: "morning",
        duration: 3,
        entryFee: { budget: 80, mid: 80, luxury: 80 },
        type: "nature"
      },
      {
        name: "Ghoom Monastery",
        description: "One of the oldest Tibetan Buddhist monasteries in the region, housing a 15-foot high clay statue of Maitreya Buddha (Future Buddha).",
        lat: 27.0161,
        lng: 88.2478,
        timeToVisit: "morning",
        duration: 1.5,
        entryFee: { budget: 0, mid: 0, luxury: 0 },
        type: "spiritual"
      },
      {
        name: "Batasia Loop & War Memorial",
        description: "A spiraling railway loop built to negotiate steep mountain slopes, featuring beautifully manicured gardens and a memorial for Gorkha soldiers.",
        lat: 27.0221,
        lng: 88.2471,
        timeToVisit: "morning",
        duration: 1.5,
        entryFee: { budget: 20, mid: 20, luxury: 20 },
        type: "heritage"
      },
      {
        name: "Himalayan Mountaineering Institute & Zoo",
        description: "A complex featuring an informative mountaineering museum (with Tenzing Norgay's gear) and a zoo housing rare high-altitude species like Red Pandas and Snow Leopards.",
        lat: 27.0581,
        lng: 88.2687,
        timeToVisit: "afternoon",
        duration: 3,
        entryFee: { budget: 60, mid: 60, luxury: 60 },
        type: "nature"
      },
      {
        name: "Happy Valley Tea Estate",
        description: "One of Darjeeling's oldest organic tea gardens, where you can walk through tea fields and see the traditional processing of tea leaves.",
        lat: 27.0538,
        lng: 88.2526,
        timeToVisit: "afternoon",
        duration: 2,
        entryFee: { budget: 100, mid: 100, luxury: 100 }, // Guided factory tour fee
        type: "nature"
      },
      {
        name: "Darjeeling Ropeway",
        description: "A spectacular cable car ride soaring high above rolling green tea valleys, forest slopes, and mountain streams.",
        lat: 27.0622,
        lng: 88.2599,
        timeToVisit: "morning",
        duration: 2,
        entryFee: { budget: 200, mid: 200, luxury: 200 },
        type: "adventure"
      }
    ],
    budgetEstimates: {
      budget: { accommodation: 1200, transport: 800, dining: 550, misc: 400 },
      mid: { accommodation: 3200, transport: 2000, dining: 1400, misc: 800 },
      luxury: { accommodation: 11000, transport: 4500, dining: 3500, misc: 2000 }
    }
  },
  "jaipur": {
    name: "Jaipur",
    region: "West",
    state: "Rajasthan",
    tagline: "The Pink City",
    description: "The historical capital of Rajasthan, famous for its grand pink terracotta palaces, massive forts, scientific observatories, and vibrant colorful textiles.",
    bestSeason: "October to March (Cool, pleasant, and perfect for sightseeing)",
    lat: 26.9124,
    lng: 75.7873,
    packing: [
      "Comfortable light clothing (cotton) and sunscreen",
      "Good walking shoes for scaling forts",
      "Sunglasses and sun hat",
      "Breezy, modest ethnic wear for photo sessions at palaces"
    ],
    cuisine: [
      { name: "Pyaaz Kachori", desc: "Flaky, deep-fried pastry loaded with a spicy onion paste, served with tangy tamarind chutney." },
      { name: "Ghevar", desc: "A disc-shaped Rajasthani sweet cake made of flour, ghee, and milk, soaked in cardamom syrup and topped with rabri/nuts." },
      { name: "Rajasthani Thali", desc: "A massive feast of Dal Baati, Gatte ki Sabzi, Ker Sangri, and Bajra Roti, dripping with pure ghee." }
    ],
    tips: [
      "Consider buying a composite ticket (available at major monument gates) to save money on entry fees across 5-6 major attractions.",
      "Watch the sound and light show at Amber Fort in the evening to learn about the royal history of Jaipur.",
      "Explore Johari Bazar for authentic gemstone jewelry and Bapu Bazar for Mojaris (leather shoes) and block-printed linens.",
      "Watch out for gem scams. Do not buy expensive jewelry based on recommendations from casual tour guides or drivers."
    ],
    attractions: [
      {
        name: "Hawa Mahal",
        description: "The iconic 'Palace of Winds', a five-story pink sandstone pyramid structured with 953 small windows designed for royal ladies to observe street life.",
        lat: 26.9239,
        lng: 75.8267,
        timeToVisit: "morning",
        duration: 1.5,
        entryFee: { budget: 50, mid: 50, luxury: 200 },
        type: "heritage"
      },
      {
        name: "Amer Fort & Palace",
        description: "A monumental fort complex situated on a hill in Amer, featuring artistic Hindu style elements and the breathtaking Sheesh Mahal (Mirror Palace).",
        lat: 26.9855,
        lng: 75.8513,
        timeToVisit: "morning",
        duration: 3,
        entryFee: { budget: 100, mid: 100, luxury: 500 },
        type: "heritage"
      },
      {
        name: "City Palace",
        description: "A majestic palace complex including the Chandra Mahal and Mubarak Mahal museum. Still the official residence of the royal family.",
        lat: 26.9258,
        lng: 75.8236,
        timeToVisit: "afternoon",
        duration: 2.5,
        entryFee: { budget: 200, mid: 300, luxury: 700 }, // Standard vs museum tickets
        type: "heritage"
      },
      {
        name: "Jantar Mantar",
        description: "A collection of nineteen architectural astronomical instruments built by King Sawai Jai Singh II, featuring the world's largest stone sundial.",
        lat: 26.9248,
        lng: 75.8245,
        timeToVisit: "afternoon",
        duration: 1.5,
        entryFee: { budget: 50, mid: 50, luxury: 200 },
        type: "heritage"
      },
      {
        name: "Nahargarh Fort Sunset View",
        description: "Perched on the edge of the Aravalli hills, offering an incredible, sweeping sunset view of the entire lit-up Pink City below.",
        lat: 26.9373,
        lng: 75.8156,
        timeToVisit: "evening",
        duration: 2,
        entryFee: { budget: 50, mid: 50, luxury: 200 },
        type: "nature"
      },
      {
        name: "Chokhi Dhani Ethnic Resort",
        description: "A mock Rajasthani village resort showcasing traditional folk dances, camel rides, puppetry shows, and an authentic sit-down dinner.",
        lat: 26.7668,
        lng: 75.8361,
        timeToVisit: "night",
        duration: 4,
        entryFee: { budget: 900, mid: 900, luxury: 1200 }, // Dinner ticket cost
        type: "food"
      }
    ],
    budgetEstimates: {
      budget: { accommodation: 1200, transport: 600, dining: 600, misc: 400 },
      mid: { accommodation: 3500, transport: 1500, dining: 1500, misc: 800 },
      luxury: { accommodation: 13000, transport: 4000, dining: 4000, misc: 2000 }
    }
  },
  "mumbai": {
    name: "Mumbai",
    region: "West",
    state: "Maharashtra",
    tagline: "The City of Dreams",
    description: "A bustling coastal megacity, financial capital of India, home of Bollywood, and a vibrant melting pot of cultures, heritage, and coastal life.",
    bestSeason: "October to March (Low humidity, pleasant breeze)",
    lat: 18.9220,
    lng: 72.8347,
    packing: [
      "Light, casual cotton wear (all year is warm and humid)",
      "Good walking sneakers/sandals",
      "Foldable umbrella (highly essential from June to September)",
      "Hand sanitizer and power bank"
    ],
    cuisine: [
      { name: "Vada Pav", desc: "The iconic street-food burger: a spicy deep-fried potato patty inside a soft bun, loaded with garlic-chili chutneys." },
      { name: "Pav Bhaji", desc: "A thick vegetable curry slow-cooked on flat griddles, topped with butter, served hot with toasted soft buns." },
      { name: "Bhel Puri & Sev Puri", desc: "Savory puffed rice, potato, and onion salads tossed with sweet tamarind and spicy mint chutneys." }
    ],
    tips: [
      "To beat the traffic jams, travel during non-peak hours or use the local train network (avoid peak hours: 8-11 AM and 5-8:30 PM).",
      "Take a taxi or auto-rickshaw (which run strictly by the meter in Mumbai, unlike many other Indian cities).",
      "Take a evening stroll along Marine Drive to watch the sunset over the Arabian Sea and the 'Queen's Necklace' lights turn on.",
      "Stay in Colaba/Fort area if you want easy access to historical heritage sites, galleries, and cafes."
    ],
    attractions: [
      {
        name: "Gateway of India",
        description: "The iconic 26m-high stone arch monument built during the British Raj to commemorate the landing of King George V.",
        lat: 18.9220,
        lng: 72.8347,
        timeToVisit: "morning",
        duration: 1,
        entryFee: { budget: 0, mid: 0, luxury: 0 },
        type: "heritage"
      },
      {
        name: "Marine Drive (Queen's Necklace)",
        description: "A 3.6-kilometer-long C-shaped concrete road running along the Arabian Sea coast, famous for sea breezes and sunset hangouts.",
        lat: 18.9431,
        lng: 72.8231,
        timeToVisit: "evening",
        duration: 2,
        entryFee: { budget: 0, mid: 0, luxury: 0 },
        type: "leisure"
      },
      {
        name: "Chhatrapati Shivaji Maharaj Terminus (CSMT)",
        description: "A UNESCO World Heritage railway station featuring magnificent Victorian Gothic Revival architecture, still serving millions of commuters daily.",
        lat: 18.9402,
        lng: 72.8354,
        timeToVisit: "afternoon",
        duration: 1,
        entryFee: { budget: 0, mid: 0, luxury: 0 },
        type: "heritage"
      },
      {
        name: "Colaba Causeway Market Walk",
        description: "A vibrant commercial street filled with cafes (like Cafe Leopold), antique shops, clothing stalls, and book sellers.",
        lat: 18.9138,
        lng: 72.8286,
        timeToVisit: "night",
        duration: 2.5,
        entryFee: { budget: 0, mid: 0, luxury: 0 },
        type: "shopping"
      },
      {
        name: "Elephanta Caves",
        description: "A collection of ancient, rock-cut cave temples dedicated to Shiva, located on Elephanta Island. Accessible via a 1-hour ferry ride from the Gateway of India.",
        lat: 18.9633,
        lng: 72.9315,
        timeToVisit: "morning",
        duration: 4,
        entryFee: { budget: 40, mid: 250, luxury: 600 }, // Ticket + ferry charges
        type: "heritage"
      },
      {
        name: "Haji Ali Dargah",
        description: "An iconic mosque and tomb located on an islet off the coast of Lala Lajpatrai Marg, accessible only during low tide via a narrow causeway path.",
        lat: 18.9827,
        lng: 72.8089,
        timeToVisit: "afternoon",
        duration: 1.5,
        entryFee: { budget: 0, mid: 0, luxury: 0 },
        type: "spiritual"
      }
    ],
    budgetEstimates: {
      budget: { accommodation: 1500, transport: 600, dining: 700, misc: 500 },
      mid: { accommodation: 4500, transport: 1800, dining: 1800, misc: 1000 },
      luxury: { accommodation: 15000, transport: 4500, dining: 4000, misc: 2500 }
    }
  },
  "himalayas_sikkim": {
    name: "Sikkim & Gangtok",
    region: "East",
    state: "Sikkim",
    tagline: "The Realm of monasteries and peaks",
    description: "Tucked in the Eastern Himalayas, Sikkim offers towering mountain scenery, Tibetan monasteries, and views of Mount Kanchenjunga.",
    bestSeason: "March to May (Spring blooms) or October to mid-December (Clear views)",
    lat: 27.3314,
    lng: 88.6138,
    packing: [
      "Thermal base layer, fleece jacket, and warm windbreaker",
      "Sturdy hiking boots or sports shoes with good traction",
      "Sunscreen and moisturizing lotion",
      "Identity documents (voter ID/passport) for special area permits"
    ],
    cuisine: [
      { name: "Phagshapa", desc: "A strip of pork fat stewed with radishes and dry red chilies, popular in Sikkimese household kitchens." },
      { name: "Sel Roti & Aludum", desc: "Ring-shaped, sweet fried rice-bread served with a highly spiced, dry potato gravy." },
      { name: "Gundruk", desc: "A fermented leafy green dish, usually cooked as soup, offering a unique tangy and earthy flavor." }
    ],
    tips: [
      "Many areas (Nathula Pass, Tsomgo Lake, Yumthang) require protected area permits (PAP). Arrange these through registered travel agencies.",
      "Carry passport-size photographs and government ID photocopies for permit processes.",
      "Plastic water bottles are strictly banned in Sikkim (particularly Lachen/Lachung). Carry reusable flasks.",
      "Cleanliness is legally enforced in Gangtok town. Avoid littering or spitting, or you will face hefty fines."
    ],
    attractions: [
      {
        name: "Tsomgo Lake",
        description: "A glacier-fed, oval-shaped lake situated at 12,400 feet, which freezes over in winter and displays scenic reflections of surrounding peaks.",
        lat: 27.3756,
        lng: 88.7619,
        timeToVisit: "morning",
        duration: 4,
        entryFee: { budget: 150, mid: 150, luxury: 150 }, // Shared permit/taxi cost
        type: "nature"
      },
      {
        name: "Rumtek Monastery",
        description: "A grand, three-story Buddhist monastery complex serving as the seat of the Kagyu sect, displaying rare scriptures and murals.",
        lat: 27.2783,
        lng: 88.6019,
        timeToVisit: "afternoon",
        duration: 2,
        entryFee: { budget: 10, mid: 10, luxury: 10 },
        type: "spiritual"
      },
      {
        name: "MG Marg, Gangtok",
        description: "A beautiful, litter-free pedestrian promenade in the center of Gangtok, lined with clean shopping fronts, cafes, and benches.",
        lat: 27.3308,
        lng: 88.6122,
        timeToVisit: "evening",
        duration: 2.5,
        entryFee: { budget: 0, mid: 0, luxury: 0 },
        type: "leisure"
      },
      {
        name: "Namgyal Institute of Tibetology",
        description: "A prestigious research institute and museum dedicated to Tibetan history, art, language, and culture, housing golden relics and tapestries.",
        lat: 27.3155,
        lng: 88.6049,
        timeToVisit: "morning",
        duration: 2,
        entryFee: { budget: 20, mid: 20, luxury: 20 },
        type: "heritage"
      },
      {
        name: "Ganesh Tok & Hanuman Tok",
        description: "High hilltop temples dedicated to Lord Ganesh and Lord Hanuman, offering panoramic viewpoints of Gangtok and Kanchenjunga.",
        lat: 27.3481,
        lng: 88.6235,
        timeToVisit: "morning",
        duration: 2,
        entryFee: { budget: 0, mid: 0, luxury: 0 },
        type: "spiritual"
      },
      {
        name: "Ban Jhakri Waterfalls",
        description: "A natural 100-foot waterfall inside a landscaped forest park, decorated with statues celebrating shamanic folk culture.",
        lat: 27.3274,
        lng: 88.5836,
        timeToVisit: "afternoon",
        duration: 1.5,
        entryFee: { budget: 50, mid: 50, luxury: 50 },
        type: "nature"
      }
    ],
    budgetEstimates: {
      budget: { accommodation: 1200, transport: 1500, dining: 600, misc: 400 },
      mid: { accommodation: 3200, transport: 3500, dining: 1500, misc: 900 },
      luxury: { accommodation: 11000, transport: 7000, dining: 3500, misc: 2000 }
    }
  },
  "hampi_backup_replace_varanasi_or_munnar": {
    name: "Wayanad",
    region: "South",
    state: "Kerala",
    tagline: "The Land of Paddy Fields",
    description: "A quiet hill district in Kerala dotted with waterfalls, ancient caves, tea plantations, and dense wildlife sanctuaries.",
    bestSeason: "September to May (Cool and misty)",
    lat: 11.6854,
    lng: 76.1320,
    packing: [
      "Comfortable light shirts and cargo pants",
      "Sturdy walking/trekking shoes",
      "Umbrella or poncho",
      "Leech socks (if trekking during monsoons)"
    ],
    cuisine: [
      { name: "Malabar Biryani", desc: "A spiced rice and meat preparation made using aromatic Kaima rice, ghee, and cashew nuts." },
      { name: "Pathiri", desc: "Pancake-like flatbread made of rice flour, served with mutton curry or chicken stew." },
      { name: "Toddy shop snacks", desc: "Very spicy fish curries, cassava (tapioca) dishes, and traditional local sides." }
    ],
    tips: [
      "Stay in a treehouse resort to experience the wildlife and forest canopy from up high.",
      "Carry sports shoes with reliable grip, as trails around waterfalls and caves are damp and slippery.",
      "Check operational hours for Edakkal Caves, as they are closed on Mondays."
    ],
    attractions: [
      {
        name: "Edakkal Caves",
        description: "Two natural caves containing prehistoric stone age petroglyphs (rock carvings) dating back to 6,000 BC. Requires a steep hike.",
        lat: 11.6281,
        lng: 76.2354,
        timeToVisit: "morning",
        duration: 3,
        entryFee: { budget: 50, mid: 50, luxury: 50 },
        type: "heritage"
      },
      {
        name: "Banasura Sagar Dam",
        description: "The largest earth dam in India and the second largest in Asia, offering speedboating and views of green reservoir islands.",
        lat: 11.6687,
        lng: 75.9583,
        timeToVisit: "afternoon",
        duration: 2,
        entryFee: { budget: 40, mid: 200, luxury: 500 }, // Ticket + speed boat charges
        type: "nature"
      },
      {
        name: "Soochipara Waterfalls",
        description: "A three-tiered waterfall falling into a large pool, surrounded by dense forests. Ideal for dipping and sightseeing.",
        lat: 11.5122,
        lng: 76.1611,
        timeToVisit: "afternoon",
        duration: 2,
        entryFee: { budget: 80, mid: 80, luxury: 80 },
        type: "nature"
      },
      {
        name: "Kuruva Island",
        description: "A large, uninhabited cluster of dense forest delta islands on the Kabini River, featuring bamboo rafting and canopy trails.",
        lat: 11.8219,
        lng: 76.0911,
        timeToVisit: "morning",
        duration: 3.5,
        entryFee: { budget: 110, mid: 110, luxury: 110 },
        type: "nature"
      },
      {
        name: "Chembra Peak & Heart Lake",
        description: "A challenging mountain trek passing through tea fields to reach a naturally heart-shaped lake that never dries up, near the summit.",
        lat: 11.5381,
        lng: 76.0894,
        timeToVisit: "morning",
        duration: 5,
        entryFee: { budget: 1500, mid: 1500, luxury: 1500 }, // Trek permit fee per group
        type: "adventure"
      },
      {
        name: "Muthanga Wildlife Sanctuary",
        description: "A rain forest reserve where you can take a jeep safari to spot herds of wild elephants, gaurs, deer, and peacocks.",
        lat: 11.6702,
        lng: 76.3811,
        timeToVisit: "evening",
        duration: 2.5,
        entryFee: { budget: 300, mid: 1500, luxury: 1500 }, // Jeep rental fee
        type: "adventure"
      }
    ],
    budgetEstimates: {
      budget: { accommodation: 1200, transport: 1000, dining: 500, misc: 300 },
      mid: { accommodation: 3500, transport: 2200, dining: 1400, misc: 800 },
      luxury: { accommodation: 11000, transport: 4500, dining: 3500, misc: 1800 }
    }
  }
};
