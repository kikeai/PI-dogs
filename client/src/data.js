const breeds = [
    {
      id: 1,
      name: "Affenpinscher",
      height: [
        "23",
        "29"
      ],
      weight: [
        "3",
        "6"
      ],
      temperaments: [
        "Stubborn",
        "Curious",
        "Playful",
        "Adventurous",
        "Active",
        "Fun-loving"
      ],
      life_span: "10 - 12 years",
      image: "https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg"
    },
    {
      id: 2,
      name: "Afghan Hound",
      height: [
        "64",
        "69"
      ],
      weight: [
        "23",
        "27"
      ],
      temperaments: [
        "Aloof",
        "Clownish",
        "Dignified",
        "Independent",
        "Happy"
      ],
      life_span: "10 - 13 years",
      image: "https://cdn2.thedogapi.com/images/hMyT4CDXR.jpg"
    },
    {
      id: 3,
      name: "African Hunting Dog",
      height: [
        "76"
      ],
      weight: [
        "20",
        "30"
      ],
      temperaments: [
        "Wild",
        "Hardworking",
        "Dutiful"
      ],
      life_span: "11 years",
      image: "https://cdn2.thedogapi.com/images/rkiByec47.jpg"
    },
    {
      id: 4,
      name: "Airedale Terrier",
      height: [
        "53",
        "58"
      ],
      weight: [
        "18",
        "29"
      ],
      temperaments: [
        "Outgoing",
        "Friendly",
        "Alert",
        "Confident",
        "Intelligent",
        "Courageous"
      ],
      life_span: "10 - 13 years",
      image: "https://cdn2.thedogapi.com/images/1-7cgoZSh.jpg"
    },
    {
      id: 5,
      name: "Akbash Dog",
      height: [
        "71",
        "86"
      ],
      weight: [
        "41",
        "54"
      ],
      temperaments: [
        "Loyal",
        "Independent",
        "Intelligent",
        "Brave"
      ],
      life_span: "10 - 12 years",
      image: "https://cdn2.thedogapi.com/images/26pHT3Qk7.jpg"
    },
    {
      id: 6,
      name: "Akita",
      height: [
        "61",
        "71"
      ],
      weight: [
        "29",
        "52"
      ],
      temperaments: [
        "Docile",
        "Alert",
        "Responsive",
        "Dignified",
        "Composed",
        "Friendly",
        "Receptive",
        "Faithful",
        "Courageous"
      ],
      life_span: "10 - 14 years",
      image: "https://cdn2.thedogapi.com/images/BFRYBufpm.jpg"
    },
    {
      id: 7,
      name: "Alapaha Blue Blood Bulldog",
      height: [
        "46",
        "61"
      ],
      weight: [
        "25",
        "41"
      ],
      temperaments: [
        "Loving",
        "Protective",
        "Trainable",
        "Dutiful",
        "Responsible"
      ],
      life_span: "12 - 13 years",
      image: "https://cdn2.thedogapi.com/images/33mJ-V3RX.jpg"
    },
    {
      id: 8,
      name: "Alaskan Husky",
      height: [
        "58",
        "66"
      ],
      weight: [
        "17",
        "23"
      ],
      temperaments: [
        "Friendly",
        "Energetic",
        "Loyal",
        "Gentle",
        "Confident"
      ],
      life_span: "10 - 13 years",
      image: "https://cdn2.thedogapi.com/images/-HgpNnGXl.jpg"
    },
    {
      id: 9,
      name: "Alaskan Malamute",
      height: [
        "58",
        "64"
      ],
      weight: [
        "29",
        "45"
      ],
      temperaments: [
        "Friendly",
        "Affectionate",
        "Devoted",
        "Loyal",
        "Dignified",
        "Playful"
      ],
      life_span: "12 - 15 years",
      image: "https://cdn2.thedogapi.com/images/dW5UucTIW.jpg"
    },
    {
      id: 10,
      name: "American Bulldog",
      height: [
        "56",
        "69"
      ],
      weight: [
        "27",
        "54"
      ],
      temperaments: [
        "Friendly",
        "Assertive",
        "Energetic",
        "Loyal",
        "Gentle",
        "Confident",
        "Dominant"
      ],
      life_span: "10 - 12 years",
      image: "https://cdn2.thedogapi.com/images/pk1AAdloG.jpg"
    },
    {
      id: 11,
      name: "American Bully",
      height: [
        "36",
        "43"
      ],
      weight: [
        "14",
        "68"
      ],
      temperaments: [
        "Strong Willed",
        "Stubborn",
        "Friendly",
        "Clownish",
        "Affectionate",
        "Loyal",
        "Obedient",
        "Intelligent",
        "Courageous"
      ],
      life_span: "8 – 15 years",
      image: "https://cdn2.thedogapi.com/images/sqQJDtbpY.jpg"
    },
    {
      id: 12,
      name: "American Eskimo Dog",
      height: [
        "38",
        "48"
      ],
      weight: [
        "9",
        "18"
      ],
      temperaments: [
        "Friendly",
        "Alert",
        "Reserved",
        "Intelligent",
        "Protective"
      ],
      life_span: "12 - 15 years",
      image: "https://cdn2.thedogapi.com/images/Bymjyec4m.jpg"
    },
    {
      id: 13,
      name: "American Eskimo Dog (Miniature)",
      height: [
        "23",
        "30"
      ],
      weight: [
        "3",
        "5"
      ],
      temperaments: [
        "Friendly",
        "Alert",
        "Reserved",
        "Intelligent",
        "Protective"
      ],
      life_span: "13 – 15 years",
      image: "https://cdn2.thedogapi.com/images/_gn8GLrE6.jpg"
    },
    {
      id: 14,
      name: "American Foxhound",
      height: [
        "53",
        "71"
      ],
      weight: [
        "29",
        "34"
      ],
      temperaments: [
        "Kind",
        "Sweet-Tempered",
        "Loyal",
        "Independent",
        "Intelligent",
        "Loving"
      ],
      life_span: "8 - 15 years",
      image: "https://cdn2.thedogapi.com/images/S14n1x9NQ.jpg"
    },
    {
      id: 15,
      name: "American Pit Bull Terrier",
      height: [
        "43",
        "53"
      ],
      weight: [
        "14",
        "27"
      ],
      temperaments: [
        "Strong Willed",
        "Stubborn",
        "Friendly",
        "Clownish",
        "Affectionate",
        "Loyal",
        "Obedient",
        "Intelligent",
        "Courageous"
      ],
      life_span: "10 - 15 years",
      image: "https://cdn2.thedogapi.com/images/HkC31gcNm.png"
    },
    {
      id: 16,
      name: "American Staffordshire Terrier",
      height: [
        "43",
        "48"
      ],
      weight: [
        "23",
        "27"
      ],
      temperaments: [
        "Tenacious",
        "Friendly",
        "Devoted",
        "Loyal",
        "Attentive",
        "Courageous"
      ],
      life_span: "12 - 15 years",
      image: "https://cdn2.thedogapi.com/images/rJIakgc4m.jpg"
    },
    {
      id: 17,
      name: "American Water Spaniel",
      height: [
        "38",
        "46"
      ],
      weight: [
        "11",
        "20"
      ],
      temperaments: [
        "Friendly",
        "Energetic",
        "Obedient",
        "Intelligent",
        "Protective",
        "Trainable"
      ],
      life_span: "10 - 12 years",
      image: "https://cdn2.thedogapi.com/images/SkmRJl9VQ.jpg"
    },
    {
      id: 18,
      name: "Anatolian Shepherd Dog",
      height: [
        "69",
        "74"
      ],
      weight: [
        "36",
        "68"
      ],
      temperaments: [
        "Steady",
        "Bold",
        "Independent",
        "Confident",
        "Intelligent",
        "Proud"
      ],
      life_span: "11 - 13 years",
      image: "https://cdn2.thedogapi.com/images/BJT0Jx5Nm.jpg"
    },
    {
      id: 19,
      name: "Appenzeller Sennenhund",
      height: [
        "51",
        "56"
      ],
      weight: [
        "22",
        "25"
      ],
      temperaments: [
        "Reliable",
        "Fearless",
        "Energetic",
        "Lively",
        "Self-assured"
      ],
      life_span: "12 – 14 years",
      image: "https://cdn2.thedogapi.com/images/HkNkxlqEX.jpg"
    },
    {
      id: 21,
      name: "Australian Cattle Dog",
      height: [
        "43",
        "51"
      ],
      weight: [
        "20",
        "28"
      ],
      temperaments: [
        "Cautious",
        "Energetic",
        "Loyal",
        "Obedient",
        "Protective",
        "Brave"
      ],
      life_span: "12 - 14 years",
      image: "https://cdn2.thedogapi.com/images/IBkYVm4v1.jpg"
    },
    {
      id: 22,
      name: "Australian Kelpie",
      height: [
        "43",
        "51"
      ],
      weight: [
        "14",
        "21"
      ],
      temperaments: [
        "Friendly",
        "Energetic",
        "Alert",
        "Loyal",
        "Intelligent",
        "Eager"
      ],
      life_span: "10 - 13 years",
      image: "https://cdn2.thedogapi.com/images/Hyq1ge9VQ.jpg"
    },
    {
      id: 23,
      name: "Australian Shepherd",
      height: [
        "46",
        "58"
      ],
      weight: [
        "16",
        "29"
      ],
      temperaments: [
        "Good-natured",
        "Affectionate",
        "Intelligent",
        "Active",
        "Protective"
      ],
      life_span: "12 - 16 years",
      image: "https://cdn2.thedogapi.com/images/B1-llgq4m.jpg"
    },
    {
      id: 24,
      name: "Australian Terrier",
      height: [
        "25",
        "28"
      ],
      weight: [
        "6",
        "7"
      ],
      temperaments: [
        "Spirited",
        "Alert",
        "Loyal",
        "Companionable",
        "Even Tempered",
        "Courageous"
      ],
      life_span: "15 years",
      image: "https://cdn2.thedogapi.com/images/r1Ylge5Vm.jpg"
    },
    {
      id: 25,
      name: "Azawakh",
      height: [
        "58",
        "74"
      ],
      weight: [
        "15",
        "25"
      ],
      temperaments: [
        "Aloof",
        "Affectionate",
        "Attentive",
        "Rugged",
        "Fierce",
        "Refined"
      ],
      life_span: "10 - 13 years",
      image: "https://cdn2.thedogapi.com/images/SkvZgx94m.jpg"
    },
    {
      id: 26,
      name: "Barbet",
      height: [
        "51",
        "66"
      ],
      weight: [
        "18",
        "29"
      ],
      temperaments: [
        "Obedient",
        "Companionable",
        "Intelligent",
        "Joyful"
      ],
      life_span: "13 – 15 years",
      image: "https://cdn2.thedogapi.com/images/HyWGexcVQ.jpg"
    },
    {
      id: 28,
      name: "Basenji",
      height: [
        "41",
        "43"
      ],
      weight: [
        "10",
        "11"
      ],
      temperaments: [
        "Affectionate",
        "Energetic",
        "Alert",
        "Curious",
        "Playful",
        "Intelligent"
      ],
      life_span: "10 - 12 years",
      image: "https://cdn2.thedogapi.com/images/H1dGlxqNQ.jpg"
    },
    {
      id: 29,
      name: "Basset Bleu de Gascogne",
      height: [
        "33",
        "38"
      ],
      weight: [
        "16",
        "18"
      ],
      temperaments: [
        "Affectionate",
        "Lively",
        "Agile",
        "Curious",
        "Happy",
        "Active"
      ],
      life_span: "10 - 14 years",
      image: "https://cdn2.thedogapi.com/images/BkMQll94X.jpg"
    },
    {
      id: 30,
      name: "Basset Hound",
      height: [
        "36"
      ],
      weight: [
        "23",
        "29"
      ],
      temperaments: [
        "Tenacious",
        "Friendly",
        "Affectionate",
        "Devoted",
        "Sweet-Tempered",
        "Gentle"
      ],
      life_span: "12 - 15 years",
      image: "https://cdn2.thedogapi.com/images/Sy57xx9EX.jpg"
    },
    {
      id: 31,
      name: "Beagle",
      height: [
        "33",
        "38"
      ],
      weight: [
        "9",
        "16"
      ],
      temperaments: [
        "Amiable",
        "Even Tempered",
        "Excitable",
        "Determined",
        "Gentle",
        "Intelligent"
      ],
      life_span: "13 - 16 years",
      image: "https://cdn2.thedogapi.com/images/Syd4xxqEm.jpg"
    },
    {
      id: 32,
      name: "Bearded Collie",
      height: [
        "51",
        "56"
      ],
      weight: [
        "20",
        "25"
      ],
      temperaments: [
        "Self-confidence",
        "Hardy",
        "Lively",
        "Alert",
        "Intelligent",
        "Active"
      ],
      life_span: "12 - 14 years",
      image: "https://cdn2.thedogapi.com/images/A09F4c1qP.jpg"
    },
    {
      id: 33,
      name: "Beauceron",
      height: [
        "61",
        "70"
      ],
      weight: [
        "36",
        "50"
      ],
      temperaments: [
        "Fearless",
        "Friendly",
        "Intelligent",
        "Protective",
        "Calm"
      ],
      life_span: "10 - 12 years",
      image: "https://cdn2.thedogapi.com/images/HJQ8ge5V7.jpg"
    },
    {
      id: 34,
      name: "Bedlington Terrier",
      height: [
        "38",
        "41"
      ],
      weight: [
        "8",
        "10"
      ],
      temperaments: [
        "Affectionate",
        "Spirited",
        "Intelligent",
        "Good-tempered"
      ],
      life_span: "14 - 16 years",
      image: "https://cdn2.thedogapi.com/images/ByK8gx947.jpg"
    },
    {
      id: 36,
      name: "Belgian Malinois",
      height: [
        "56",
        "66"
      ],
      weight: [
        "18",
        "36"
      ],
      temperaments: [
        "Watchful",
        "Alert",
        "Stubborn",
        "Friendly",
        "Confident",
        "Hard-working",
        "Active",
        "Protective"
      ],
      life_span: "12 - 14 years",
      image: "https://cdn2.thedogapi.com/images/r1f_ll5VX.jpg"
    },
    {
      id: 38,
      name: "Belgian Tervuren",
      height: [
        "56",
        "66"
      ],
      weight: [
        "18",
        "29"
      ],
      temperaments: [
        "Energetic",
        "Alert",
        "Loyal",
        "Intelligent",
        "Attentive",
        "Protective"
      ],
      life_span: "10 - 12 years",
      image: "https://cdn2.thedogapi.com/images/B1KdxlcNX.jpg"
    },
    {
      id: 41,
      name: "Bernese Mountain Dog",
      height: [
        "58",
        "70"
      ],
      weight: [
        "29",
        "54"
      ],
      temperaments: [
        "Affectionate",
        "Loyal",
        "Intelligent",
        "Faithful"
      ],
      life_span: "7 - 10 years",
      image: "https://cdn2.thedogapi.com/images/S1fFlx5Em.jpg"
    },
    {
      id: 42,
      name: "Bichon Frise",
      height: [
        "24",
        "29"
      ],
      weight: [
        "5",
        "8"
      ],
      temperaments: [
        "Feisty",
        "Affectionate",
        "Cheerful",
        "Playful",
        "Gentle",
        "Sensitive"
      ],
      life_span: "15 years",
      image: "https://cdn2.thedogapi.com/images/HkuYlxqEQ.jpg"
    },
    {
      id: 43,
      name: "Black and Tan Coonhound",
      height: [
        "58",
        "69"
      ],
      weight: [
        "29",
        "45"
      ],
      temperaments: [
        "Easygoing",
        "Gentle",
        "Adaptable",
        "Trusting",
        "Even Tempered",
        "Lovable"
      ],
      life_span: "10 - 12 years",
      image: "https://cdn2.thedogapi.com/images/HJAFgxcNQ.jpg"
    },
    {
      id: 45,
      name: "Bloodhound",
      height: [
        "58",
        "69"
      ],
      weight: [
        "36",
        "50"
      ],
      temperaments: [
        "Stubborn",
        "Affectionate",
        "Gentle",
        "Even Tempered"
      ],
      life_span: "8 - 10 years",
      image: "https://cdn2.thedogapi.com/images/Skdcgx9VX.jpg"
    },
    {
      id: 47,
      name: "Bluetick Coonhound",
      height: [
        "53",
        "69"
      ],
      weight: [
        "20",
        "36"
      ],
      temperaments: [
        "Friendly",
        "Intelligent",
        "Active"
      ],
      life_span: "12 - 14 years",
      image: "https://cdn2.thedogapi.com/images/rJxieg9VQ.jpg"
    },
    {
      id: 48,
      name: "Boerboel",
      height: [
        "56",
        "69"
      ],
      weight: [
        "50",
        "91"
      ],
      temperaments: [
        "Obedient",
        "Confident",
        "Intelligent",
        "Dominant",
        "Territorial"
      ],
      life_span: "10 - 12 years",
      image: "https://cdn2.thedogapi.com/images/HyOjge5Vm.jpg"
    },
    {
      id: 50,
      name: "Border Collie",
      height: [
        "46",
        "56"
      ],
      weight: [
        "14",
        "20"
      ],
      temperaments: [
        "Tenacious",
        "Keen",
        "Energetic",
        "Responsive",
        "Alert",
        "Intelligent"
      ],
      life_span: "12 - 16 years",
      image: "https://cdn2.thedogapi.com/images/sGQvQUpsp.jpg"
    },
    {
      id: 51,
      name: "Border Terrier",
      height: [
        "28",
        "41"
      ],
      weight: [
        "5",
        "7"
      ],
      temperaments: [
        "Fearless",
        "Affectionate",
        "Alert",
        "Obedient",
        "Intelligent",
        "Even Tempered"
      ],
      life_span: "12 - 14 years",
      image: "https://cdn2.thedogapi.com/images/HJOpge9Em.jpg"
    },
    {
      id: 53,
      name: "Boston Terrier",
      height: [
        "41",
        "43"
      ],
      weight: [
        "5",
        "11"
      ],
      temperaments: [
        "Friendly",
        "Lively",
        "Intelligent"
      ],
      life_span: "11 - 13 years",
      image: "https://cdn2.thedogapi.com/images/rkZRggqVX.jpg"
    },
    {
      id: 54,
      name: "Bouvier des Flandres",
      height: [
        "60",
        "70"
      ],
      weight: [
        "32",
        "50"
      ],
      temperaments: [
        "Protective",
        "Loyal",
        "Gentle",
        "Intelligent",
        "Familial",
        "Rational"
      ],
      life_span: "10 - 15 years",
      image: "https://cdn2.thedogapi.com/images/Byd0xl5VX.jpg"
    },
    {
      id: 55,
      name: "Boxer",
      height: [
        "55",
        "64"
      ],
      weight: [
        "23",
        "32"
      ],
      temperaments: [
        "Devoted",
        "Fearless",
        "Friendly",
        "Cheerful",
        "Energetic",
        "Loyal",
        "Playful",
        "Confident",
        "Intelligent",
        "Bright",
        "Brave",
        "Calm"
      ],
      life_span: "8 - 10 years",
      image: "https://cdn2.thedogapi.com/images/ry1kWe5VQ.jpg"
    },
    {
      id: 56,
      name: "Boykin Spaniel",
      height: [
        "36",
        "46"
      ],
      weight: [
        "11",
        "18"
      ],
      temperaments: [
        "Friendly",
        "Energetic",
        "Companionable",
        "Intelligent",
        "Eager",
        "Trainable"
      ],
      life_span: "10 - 14 years",
      image: "https://cdn2.thedogapi.com/images/ryHJZlcNX.jpg"
    },
    {
      id: 57,
      name: "Bracco Italiano",
      height: [
        "55",
        "67"
      ],
      weight: [
        "25",
        "40"
      ],
      temperaments: [
        "Stubborn",
        "Affectionate",
        "Loyal",
        "Playful",
        "Companionable",
        "Trainable"
      ],
      life_span: "10 - 12 years",
      image: "https://cdn2.thedogapi.com/images/S13yZg5VQ.jpg"
    },
    {
      id: 58,
      name: "Briard",
      height: [
        "56",
        "69"
      ],
      weight: [
        "32",
        "41"
      ],
      temperaments: [
        "Fearless",
        "Loyal",
        "Obedient",
        "Intelligent",
        "Faithful",
        "Protective"
      ],
      life_span: "10 - 12 years",
      image: "https://cdn2.thedogapi.com/images/rkVlblcEQ.jpg"
    },
    {
      id: 59,
      name: "Brittany",
      height: [
        "44",
        "52"
      ],
      weight: [
        "14",
        "20"
      ],
      temperaments: [
        "Agile",
        "Adaptable",
        "Quick",
        "Intelligent",
        "Attentive",
        "Happy"
      ],
      life_span: "12 - 14 years",
      image: "https://cdn2.thedogapi.com/images/HJWZZxc4X.jpg"
    },
    {
      id: 61,
      name: "Bull Terrier",
      height: [
        "53",
        "56"
      ],
      weight: [
        "23",
        "32"
      ],
      temperaments: [
        "Trainable",
        "Protective",
        "Sweet-Tempered",
        "Keen",
        "Active"
      ],
      life_span: "10 - 12 years",
      image: "https://cdn2.thedogapi.com/images/VSraIEQGd.jpg"
    },
    {
      id: 62,
      name: "Bull Terrier (Miniature)",
      height: [
        "25",
        "36"
      ],
      weight: [
        "11",
        "15"
      ],
      temperaments: [
        "Trainable",
        "Protective",
        "Sweet-Tempered",
        "Keen",
        "Active",
        "Territorial"
      ],
      life_span: "11 – 14 years",
      image: "https://cdn2.thedogapi.com/images/BkKZWlcVX.jpg"
    },
    {
      id: 64,
      name: "Bullmastiff",
      height: [
        "61",
        "69"
      ],
      weight: [
        "45",
        "59"
      ],
      temperaments: [
        "Docile",
        "Reliable",
        "Devoted",
        "Alert",
        "Loyal",
        "Reserved",
        "Loving",
        "Protective",
        "Powerful",
        "Calm",
        "Courageous"
      ],
      life_span: "8 - 12 years",
      image: "https://cdn2.thedogapi.com/images/r1ifZl5E7.jpg"
    },
    {
      id: 65,
      name: "Cairn Terrier",
      height: [
        "23",
        "25"
      ],
      weight: [
        "6",
        "6"
      ],
      temperaments: [
        "Hardy",
        "Fearless",
        "Assertive",
        "Gay",
        "Intelligent",
        "Active"
      ],
      life_span: "14 - 15 years",
      image: "https://cdn2.thedogapi.com/images/Sk7Qbg9E7.jpg"
    },
    {
      id: 67,
      name: "Cane Corso",
      height: [
        "60",
        "70"
      ],
      weight: [
        "40",
        "54"
      ],
      temperaments: [
        "Trainable",
        "Reserved",
        "Stable",
        "Quiet",
        "Even Tempered",
        "Calm"
      ],
      life_span: "10 - 11 years",
      image: "https://cdn2.thedogapi.com/images/r15m-lc4m.jpg"
    },
    {
      id: 68,
      name: "Cardigan Welsh Corgi",
      height: [
        "27",
        "32"
      ],
      weight: [
        "11",
        "17"
      ],
      temperaments: [
        "Affectionate",
        "Devoted",
        "Alert",
        "Companionable",
        "Intelligent",
        "Active"
      ],
      life_span: "12 - 14 years",
      image: "https://cdn2.thedogapi.com/images/SyXN-e9NX.jpg"
    },
    {
      id: 69,
      name: "Catahoula Leopard Dog",
      height: [
        "51",
        "66"
      ],
      weight: [
        "23",
        "43"
      ],
      temperaments: [
        "Energetic",
        "Inquisitive",
        "Independent",
        "Gentle",
        "Intelligent",
        "Loving"
      ],
      life_span: "10 - 12 years",
      image: "https://cdn2.thedogapi.com/images/BJcNbec4X.jpg"
    },
    {
      id: 70,
      name: "Caucasian Shepherd (Ovcharka)",
      height: [
        "61",
        "85"
      ],
      weight: [
        "36",
        "45"
      ],
      temperaments: [
        "Alert",
        "Quick",
        "Dominant",
        "Powerful",
        "Calm",
        "Strong"
      ],
      life_span: "10 - 12 years",
      image: "https://cdn2.thedogapi.com/images/r1rrWe5Em.jpg"
    },
    {
      id: 71,
      name: "Cavalier King Charles Spaniel",
      height: [
        "30",
        "33"
      ],
      weight: [
        "6",
        "8"
      ],
      temperaments: [
        "Fearless",
        "Affectionate",
        "Sociable",
        "Patient",
        "Playful",
        "Adaptable"
      ],
      life_span: "10 - 14 years",
      image: "https://cdn2.thedogapi.com/images/HJRBbe94Q.jpg"
    },
    {
      id: 76,
      name: "Chesapeake Bay Retriever",
      height: [
        "53",
        "66"
      ],
      weight: [
        "25",
        "36"
      ],
      temperaments: [
        "Affectionate",
        "Intelligent",
        "Quiet",
        "Dominant",
        "Happy",
        "Protective"
      ],
      life_span: "10 - 13 years",
      image: "https://cdn2.thedogapi.com/images/9BXwUeCc2.jpg"
    },
    {
      id: 78,
      name: "Chinese Crested",
      height: [
        "28",
        "33"
      ],
      weight: [
        "5",
        "6"
      ],
      temperaments: [
        "Affectionate",
        "Sweet-Tempered",
        "Lively",
        "Alert",
        "Playful",
        "Happy"
      ],
      life_span: "10 - 14 years",
      image: "https://cdn2.thedogapi.com/images/B1pDZx9Nm.jpg"
    },
    {
      id: 79,
      name: "Chinese Shar-Pei",
      height: [
        "46",
        "51"
      ],
      weight: [
        "20",
        "27"
      ],
      temperaments: [
        "Suspicious",
        "Affectionate",
        "Devoted",
        "Reserved",
        "Independent",
        "Loving"
      ],
      life_span: "10 years",
      image: "https://cdn2.thedogapi.com/images/B1ruWl94Q.jpg"
    },
    {
      id: 80,
      name: "Chinook",
      height: [
        "56",
        "66"
      ],
      weight: [
        "23",
        "41"
      ],
      temperaments: [
        "Friendly",
        "Alert",
        "Dignified",
        "Intelligent",
        "Calm"
      ],
      life_span: "12 - 15 years",
      image: "https://cdn2.thedogapi.com/images/Sypubg54Q.jpg"
    },
    {
      id: 81,
      name: "Chow Chow",
      height: [
        "43",
        "51"
      ],
      weight: [
        "18",
        "32"
      ],
      temperaments: [
        "Aloof",
        "Loyal",
        "Independent",
        "Quiet"
      ],
      life_span: "12 - 15 years",
      image: "https://cdn2.thedogapi.com/images/ry8KWgqEQ.jpg"
    },
    {
      id: 84,
      name: "Clumber Spaniel",
      height: [
        "43",
        "51"
      ],
      weight: [
        "25",
        "39"
      ],
      temperaments: [
        "Affectionate",
        "Loyal",
        "Dignified",
        "Gentle",
        "Calm",
        "Great-hearted"
      ],
      life_span: "10 - 12 years",
      image: "https://cdn2.thedogapi.com/images/rkeqWgq4Q.jpg"
    },
    {
      id: 86,
      name: "Cocker Spaniel",
      height: [
        "36",
        "38"
      ],
      weight: [
        "9",
        "14"
      ],
      temperaments: [
        "Trainable",
        "Friendly",
        "Affectionate",
        "Playful",
        "Quiet",
        "Faithful"
      ],
      life_span: "12 - 15 years",
      image: "https://cdn2.thedogapi.com/images/1lFmrzECl.jpg"
    },
    {
      id: 87,
      name: "Cocker Spaniel (American)",
      height: [
        "36",
        "38"
      ],
      weight: [
        "9",
        "14"
      ],
      temperaments: [
        "Outgoing",
        "Sociable",
        "Trusting",
        "Joyful",
        "Even Tempered",
        "Merry"
      ],
      life_span: "12 - 15 years",
      image: "https://cdn2.thedogapi.com/images/HkRcZe547.jpg"
    },
    {
      id: 89,
      name: "Coton de Tulear",
      height: [
        "23",
        "28"
      ],
      weight: [
        "4",
        "7"
      ],
      temperaments: [
        "Affectionate",
        "Lively",
        "Playful",
        "Intelligent",
        "Trainable",
        "Vocal"
      ],
      life_span: "13 - 16 years",
      image: "https://cdn2.thedogapi.com/images/SyviZlqNm.jpg"
    },
    {
      id: 92,
      name: "Dalmatian",
      height: [
        "48",
        "58"
      ],
      weight: [
        "23",
        "25"
      ],
      temperaments: [
        "Outgoing",
        "Friendly",
        "Energetic",
        "Playful",
        "Sensitive",
        "Intelligent",
        "Active"
      ],
      life_span: "10 - 13 years",
      image: "https://cdn2.thedogapi.com/images/SkJ3blcN7.jpg"
    },
    {
      id: 94,
      name: "Doberman Pinscher",
      height: [
        "61",
        "71"
      ],
      weight: [
        "30",
        "40"
      ],
      temperaments: [
        "Fearless",
        "Energetic",
        "Alert",
        "Loyal",
        "Obedient",
        "Confident",
        "Intelligent"
      ],
      life_span: "10 years",
      image: "https://cdn2.thedogapi.com/images/HyL3bl94Q.jpg"
    },
    {
      id: 95,
      name: "Dogo Argentino",
      height: [
        "60",
        "69"
      ],
      weight: [
        "36",
        "45"
      ],
      temperaments: [
        "Friendly",
        "Affectionate",
        "Cheerful",
        "Loyal",
        "Tolerant",
        "Protective"
      ],
      life_span: "10 - 12 years",
      image: "https://cdn2.thedogapi.com/images/S1nhWx94Q.jpg"
    },
    {
      id: 98,
      name: "Dutch Shepherd",
      height: [
        "56",
        "62"
      ],
      weight: [
        "23",
        "32"
      ],
      temperaments: [
        "Reliable",
        "Affectionate",
        "Alert",
        "Loyal",
        "Obedient",
        "Trainable"
      ],
      life_span: "15 years",
      image: "https://cdn2.thedogapi.com/images/BkE6Wg5E7.jpg"
    },
    {
      id: 101,
      name: "English Setter",
      height: [
        "61",
        "64"
      ],
      weight: [
        "20",
        "36"
      ],
      temperaments: [
        "Strong Willed",
        "Mischievous",
        "Affectionate",
        "Energetic",
        "Playful",
        "Companionable",
        "Gentle",
        "Hard-working",
        "Intelligent",
        "Eager",
        "People-Oriented"
      ],
      life_span: "12 years",
      image: "https://cdn2.thedogapi.com/images/By4A-eqVX.jpg"
    },
    {
      id: 102,
      name: "English Shepherd",
      height: [
        "46",
        "58"
      ],
      weight: [
        "20",
        "30"
      ],
      temperaments: [
        "Kind",
        "Energetic",
        "Independent",
        "Adaptable",
        "Intelligent",
        "Bossy"
      ],
      life_span: "10 - 13 years",
      image: "https://cdn2.thedogapi.com/images/H1QyMe5EQ.jpg"
    },
    {
      id: 103,
      name: "English Springer Spaniel",
      height: [
        "48",
        "51"
      ],
      weight: [
        "16",
        "23"
      ],
      temperaments: [
        "Affectionate",
        "Cheerful",
        "Alert",
        "Intelligent",
        "Attentive",
        "Active"
      ],
      life_span: "12 - 14 years",
      image: "https://cdn2.thedogapi.com/images/Hk0Jfe5VQ.jpg"
    },
    {
      id: 104,
      name: "English Toy Spaniel",
      height: [
        "25"
      ],
      weight: [
        "4",
        "6"
      ],
      temperaments: [
        "Affectionate",
        "Reserved",
        "Playful",
        "Gentle",
        "Happy",
        "Loving"
      ],
      life_span: "10 - 12 years",
      image: "https://cdn2.thedogapi.com/images/SkIgzxqNQ.jpg"
    },
    {
      id: 105,
      name: "English Toy Terrier",
      height: [
        "25",
        "30"
      ],
      weight: [
        "3",
        "4"
      ],
      temperaments: [
        "Stubborn",
        "Alert",
        "Companionable",
        "Intelligent",
        "Cunning",
        "Trainable"
      ],
      life_span: "12 - 13 years",
      image: "https://cdn2.thedogapi.com/images/SJ6eMxqEQ.jpg"
    },
    {
      id: 107,
      name: "Eurasier",
      height: [
        "52",
        "60"
      ],
      weight: [
        "18",
        "32"
      ],
      temperaments: [
        "Alert",
        "Reserved",
        "Intelligent",
        "Even Tempered",
        "Watchful",
        "Calm"
      ],
      life_span: "12 - 14 years",
      image: "https://cdn2.thedogapi.com/images/S1VWGx9Nm.jpg"
    },
    {
      id: 108,
      name: "Field Spaniel",
      height: [
        "43",
        "46"
      ],
      weight: [
        "16",
        "23"
      ],
      temperaments: [
        "Docile",
        "Cautious",
        "Sociable",
        "Sensitive",
        "Adaptable",
        "Familial"
      ],
      life_span: "11 - 15 years",
      image: "https://cdn2.thedogapi.com/images/SkJfGecE7.jpg"
    },
    {
      id: 110,
      name: "Finnish Lapphund",
      height: [
        "41",
        "53"
      ],
      weight: [
        "15",
        "24"
      ],
      temperaments: [
        "Friendly",
        "Keen",
        "Faithful",
        "Calm",
        "Courageous"
      ],
      life_span: "12 - 15 years",
      image: "https://cdn2.thedogapi.com/images/S1KMGg5Vm.jpg"
    },
    {
      id: 111,
      name: "Finnish Spitz",
      height: [
        "39",
        "51"
      ],
      weight: [
        "10",
        "13"
      ],
      temperaments: [
        "Playful",
        "Loyal",
        "Independent",
        "Intelligent",
        "Happy",
        "Vocal"
      ],
      life_span: "12 - 15 years",
      image: "https://cdn2.thedogapi.com/images/3PjHlQbkV.jpg"
    },
    {
      id: 113,
      name: "French Bulldog",
      height: [
        "28",
        "30"
      ],
      weight: [
        "13"
      ],
      temperaments: [
        "Playful",
        "Affectionate",
        "Keen",
        "Sociable",
        "Lively",
        "Alert",
        "Easygoing",
        "Patient",
        "Athletic",
        "Bright"
      ],
      life_span: "9 - 11 years",
      image: "https://cdn2.thedogapi.com/images/HyWNfxc47.jpg"
    },
    {
      id: 114,
      name: "German Pinscher",
      height: [
        "43",
        "51"
      ],
      weight: [
        "11",
        "20"
      ],
      temperaments: [
        "Spirited",
        "Lively",
        "Intelligent",
        "Loving",
        "Even Tempered",
        "Familial"
      ],
      life_span: "12 - 14 years",
      image: "https://cdn2.thedogapi.com/images/B1u4zgqE7.jpg"
    },
    {
      id: 115,
      name: "German Shepherd Dog",
      height: [
        "56",
        "66"
      ],
      weight: [
        "23",
        "41"
      ],
      temperaments: [
        "Alert",
        "Loyal",
        "Obedient",
        "Curious",
        "Confident",
        "Intelligent",
        "Watchful",
        "Courageous"
      ],
      life_span: "10 - 13 years",
      image: "https://cdn2.thedogapi.com/images/SJyBfg5NX.jpg"
    },
    {
      id: 116,
      name: "German Shorthaired Pointer",
      height: [
        "53",
        "64"
      ],
      weight: [
        "20",
        "32"
      ],
      temperaments: [
        "Boisterous",
        "Bold",
        "Affectionate",
        "Intelligent",
        "Cooperative",
        "Trainable"
      ],
      life_span: "12 - 14 years",
      image: "https://cdn2.thedogapi.com/images/SJqBMg5Nm.jpg"
    },
    {
      id: 119,
      name: "Giant Schnauzer",
      height: [
        "60",
        "70"
      ],
      weight: [
        "29",
        "41"
      ],
      temperaments: [
        "Strong Willed",
        "Kind",
        "Loyal",
        "Intelligent",
        "Dominant",
        "Powerful"
      ],
      life_span: "10 - 12 years",
      image: "https://cdn2.thedogapi.com/images/H1NIzlcV7.jpg"
    },
    {
      id: 120,
      name: "Glen of Imaal Terrier",
      height: [
        "32",
        "36"
      ],
      weight: [
        "15",
        "18"
      ],
      temperaments: [
        "Spirited",
        "Agile",
        "Loyal",
        "Gentle",
        "Active",
        "Courageous"
      ],
      life_span: "12 - 15 years",
      image: "https://cdn2.thedogapi.com/images/H1oLMe94m.jpg"
    },
    {
      id: 121,
      name: "Golden Retriever",
      height: [
        "55",
        "61"
      ],
      weight: [
        "25",
        "34"
      ],
      temperaments: [
        "Intelligent",
        "Kind",
        "Reliable",
        "Friendly",
        "Trustworthy",
        "Confident"
      ],
      life_span: "10 - 12 years",
      image: "https://cdn2.thedogapi.com/images/HJ7Pzg5EQ.jpg"
    },
    {
      id: 123,
      name: "Gordon Setter",
      height: [
        "58",
        "69"
      ],
      weight: [
        "20",
        "36"
      ],
      temperaments: [
        "Fearless",
        "Alert",
        "Loyal",
        "Confident",
        "Gay",
        "Eager"
      ],
      life_span: "10 - 12 years",
      image: "https://cdn2.thedogapi.com/images/SJ5vzx5NX.jpg"
    },
    {
      id: 124,
      name: "Great Dane",
      height: [
        "71",
        "81"
      ],
      weight: [
        "50",
        "86"
      ],
      temperaments: [
        "Friendly",
        "Devoted",
        "Reserved",
        "Gentle",
        "Confident",
        "Loving"
      ],
      life_span: "7 - 10 years",
      image: "https://cdn2.thedogapi.com/images/B1Edfl9NX.jpg"
    },
    {
      id: 125,
      name: "Great Pyrenees",
      height: [
        "64",
        "81"
      ],
      weight: [
        "39",
        "52"
      ],
      temperaments: [
        "Strong Willed",
        "Fearless",
        "Affectionate",
        "Patient",
        "Gentle",
        "Confident"
      ],
      life_span: "10 - 12 years",
      image: "https://cdn2.thedogapi.com/images/B12uzg9V7.png"
    },
    {
      id: 127,
      name: "Greyhound",
      height: [
        "69",
        "76"
      ],
      weight: [
        "23",
        "32"
      ],
      temperaments: [
        "Affectionate",
        "Athletic",
        "Gentle",
        "Intelligent",
        "Quiet",
        "Even Tempered"
      ],
      life_span: "10 - 13 years",
      image: "https://cdn2.thedogapi.com/images/ryNYMx94X.jpg"
    },
    {
      id: 128,
      name: "Griffon Bruxellois",
      height: [
        "23",
        "28"
      ],
      weight: [
        "5"
      ],
      temperaments: [
        "Self-important",
        "Inquisitive",
        "Alert",
        "Companionable",
        "Sensitive",
        "Watchful"
      ],
      life_span: "10 – 15 years",
      image: "https://cdn2.thedogapi.com/images/ryoYGec4Q.jpg"
    },
    {
      id: 129,
      name: "Harrier",
      height: [
        "46",
        "56"
      ],
      weight: [
        "18",
        "27"
      ],
      temperaments: [
        "Outgoing",
        "Friendly",
        "Cheerful",
        "Sweet-Tempered",
        "Tolerant",
        "Active"
      ],
      life_span: "12 - 15 years",
      image: "https://cdn2.thedogapi.com/images/B1IcfgqE7.jpg"
    },
    {
      id: 130,
      name: "Havanese",
      height: [
        "22",
        "29"
      ],
      weight: [
        "3",
        "6"
      ],
      temperaments: [
        "Affectionate",
        "Responsive",
        "Playful",
        "Companionable",
        "Gentle",
        "Intelligent"
      ],
      life_span: "14 - 15 years",
      image: "https://cdn2.thedogapi.com/images/rkXiGl9V7.jpg"
    },
    {
      id: 134,
      name: "Irish Setter",
      height: [
        "61",
        "69"
      ],
      weight: [
        "16",
        "32"
      ],
      temperaments: [
        "Affectionate",
        "Energetic",
        "Lively",
        "Independent",
        "Playful",
        "Companionable"
      ],
      life_span: "10 - 11 years",
      image: "https://cdn2.thedogapi.com/images/S1osGeqVm.jpg"
    },
    {
      id: 135,
      name: "Irish Terrier",
      height: [
        "46"
      ],
      weight: [
        "11",
        "12"
      ],
      temperaments: [
        "Respectful",
        "Lively",
        "Intelligent",
        "Dominant",
        "Protective",
        "Trainable"
      ],
      life_span: "12 - 16 years",
      image: "https://cdn2.thedogapi.com/images/By-hGecVX.jpg"
    },
    {
      id: 137,
      name: "Irish Wolfhound",
      height: [
        "76",
        "89"
      ],
      weight: [
        "48",
        "82"
      ],
      temperaments: [
        "Sweet-Tempered",
        "Loyal",
        "Dignified",
        "Patient",
        "Thoughtful",
        "Generous"
      ],
      life_span: "6 - 8 years",
      image: "https://cdn2.thedogapi.com/images/Hyd2zgcEX.jpg"
    },
    {
      id: 138,
      name: "Italian Greyhound",
      height: [
        "33",
        "38"
      ],
      weight: [
        "3",
        "7"
      ],
      temperaments: [
        "Mischievous",
        "Affectionate",
        "Agile",
        "Athletic",
        "Companionable",
        "Intelligent"
      ],
      life_span: "12 - 15 years",
      image: "https://cdn2.thedogapi.com/images/SJAnzg9NX.jpg"
    },
    {
      id: 140,
      name: "Japanese Chin",
      height: [
        "20",
        "28"
      ],
      weight: [
        "2",
        "4"
      ],
      temperaments: [
        "Alert",
        "Loyal",
        "Independent",
        "Intelligent",
        "Loving",
        "Cat-like"
      ],
      life_span: "12 - 14 years",
      image: "https://cdn2.thedogapi.com/images/r1H6feqEm.jpg"
    },
    {
      id: 141,
      name: "Japanese Spitz",
      height: [
        "30",
        "38"
      ],
      weight: [
        "7",
        "9"
      ],
      temperaments: [
        "Affectionate",
        "Obedient",
        "Playful",
        "Companionable",
        "Intelligent",
        "Proud"
      ],
      life_span: "10 – 16 years",
      image: "https://cdn2.thedogapi.com/images/HksaMxqNX.jpg"
    },
    {
      id: 142,
      name: "Keeshond",
      height: [
        "43",
        "46"
      ],
      weight: [
        "16",
        "20"
      ],
      temperaments: [
        "Agile",
        "Obedient",
        "Playful",
        "Quick",
        "Sturdy",
        "Bright"
      ],
      life_span: "12 - 15 years",
      image: "https://cdn2.thedogapi.com/images/S1GAGg9Vm.jpg"
    },
    {
      id: 144,
      name: "Komondor",
      height: [
        "65",
        "70"
      ],
      weight: [
        "36",
        "45"
      ],
      temperaments: [
        "Steady",
        "Fearless",
        "Affectionate",
        "Independent",
        "Gentle",
        "Calm"
      ],
      life_span: "10 - 12 years",
      image: "https://cdn2.thedogapi.com/images/Bko0fl547.jpg"
    },
    {
      id: 145,
      name: "Kooikerhondje",
      height: [
        "36",
        "41"
      ],
      weight: [
        "9",
        "14"
      ],
      temperaments: [
        "Benevolent",
        "Agile",
        "Alert",
        "Intelligent",
        "Active",
        "Territorial"
      ],
      life_span: "12 - 15 years",
      image: "https://cdn2.thedogapi.com/images/kOMy84GQE.jpg"
    },
    {
      id: 147,
      name: "Kuvasz",
      height: [
        "66",
        "76"
      ],
      weight: [
        "32",
        "52"
      ],
      temperaments: [
        "Clownish",
        "Loyal",
        "Patient",
        "Independent",
        "Intelligent",
        "Protective"
      ],
      life_span: "8 - 10 years",
      image: "https://cdn2.thedogapi.com/images/BykZ7ecVX.jpg"
    },
    {
      id: 149,
      name: "Labrador Retriever",
      height: [
        "55",
        "62"
      ],
      weight: [
        "25",
        "36"
      ],
      temperaments: [
        "Kind",
        "Outgoing",
        "Agile",
        "Gentle",
        "Intelligent",
        "Trusting",
        "Even Tempered"
      ],
      life_span: "10 - 13 years",
      image: "https://cdn2.thedogapi.com/images/B1uW7l5VX.jpg"
    },
    {
      id: 151,
      name: "Lagotto Romagnolo",
      height: [
        "41",
        "48"
      ],
      weight: [
        "11",
        "16"
      ],
      temperaments: [
        "Keen",
        "Loyal",
        "Companionable",
        "Loving",
        "Active",
        "Trainable"
      ],
      life_span: "14 - 16 years",
      image: "https://cdn2.thedogapi.com/images/ryzzmgqE7.jpg"
    },
    {
      id: 153,
      name: "Lancashire Heeler",
      height: [
        "25",
        "30"
      ],
      weight: [
        "3",
        "6"
      ],
      temperaments: [
        "Clever",
        "Friendly",
        "Alert",
        "Intelligent"
      ],
      life_span: "12 – 15 years",
      image: "https://cdn2.thedogapi.com/images/S1RGml5Em.jpg"
    },
    {
      id: 155,
      name: "Leonberger",
      height: [
        "65",
        "80"
      ],
      weight: [
        "54",
        "77"
      ],
      temperaments: [
        "Obedient",
        "Fearless",
        "Loyal",
        "Companionable",
        "Adaptable",
        "Loving"
      ],
      life_span: "6 - 8 years",
      image: "https://cdn2.thedogapi.com/images/ByrmQlqVm.jpg"
    },
    {
      id: 156,
      name: "Lhasa Apso",
      height: [
        "25",
        "28"
      ],
      weight: [
        "5",
        "8"
      ],
      temperaments: [
        "Steady",
        "Fearless",
        "Friendly",
        "Devoted",
        "Assertive",
        "Spirited",
        "Energetic",
        "Lively",
        "Alert",
        "Obedient",
        "Playful",
        "Intelligent"
      ],
      life_span: "12 - 15 years",
      image: "https://cdn2.thedogapi.com/images/SJp7Qe5EX.jpg"
    },
    {
      id: 161,
      name: "Maltese",
      height: [
        "20",
        "25"
      ],
      weight: [
        "2",
        "3"
      ],
      temperaments: [
        "Playful",
        "Docile",
        "Fearless",
        "Affectionate",
        "Sweet-Tempered",
        "Lively",
        "Responsive",
        "Easygoing",
        "Gentle",
        "Intelligent",
        "Active"
      ],
      life_span: "15 - 18 years",
      image: "https://cdn2.thedogapi.com/images/B1SV7gqN7.jpg"
    },
    {
      id: 165,
      name: "Miniature American Shepherd",
      height: [
        "33",
        "46"
      ],
      weight: [
        "9",
        "18"
      ],
      temperaments: [
        "Energetic",
        "Loyal",
        "Intelligent",
        "Trainable"
      ],
      life_span: "12 - 15 years",
      image: "https://cdn2.thedogapi.com/images/BkHHQgcN7.jpg"
    },
    {
      id: 167,
      name: "Miniature Pinscher",
      height: [
        "25",
        "32"
      ],
      weight: [
        "4",
        "5"
      ],
      temperaments: [
        "Clever",
        "Outgoing",
        "Friendly",
        "Energetic",
        "Responsive",
        "Playful"
      ],
      life_span: "15 years",
      image: "https://cdn2.thedogapi.com/images/Hy3H7g94X.jpg"
    },
    {
      id: 168,
      name: "Miniature Schnauzer",
      height: [
        "30",
        "36"
      ],
      weight: [
        "5",
        "9"
      ],
      temperaments: [
        "Fearless",
        "Friendly",
        "Spirited",
        "Alert",
        "Obedient",
        "Intelligent"
      ],
      life_span: "12 - 14 years",
      image: "https://cdn2.thedogapi.com/images/SJIUQl9NX.jpg"
    },
    {
      id: 171,
      name: "Newfoundland",
      height: [
        "66",
        "71"
      ],
      weight: [
        "45",
        "68"
      ],
      temperaments: [
        "Sweet-Tempered",
        "Gentle",
        "Trainable"
      ],
      life_span: "8 - 10 years",
      image: "https://cdn2.thedogapi.com/images/Sk4DXl54m.jpg"
    },
    {
      id: 172,
      name: "Norfolk Terrier",
      height: [
        "23",
        "25"
      ],
      weight: [
        "5",
        "5"
      ],
      temperaments: [
        "Self-confidence",
        "Fearless",
        "Spirited",
        "Companionable",
        "Happy",
        "Lovable"
      ],
      life_span: "12 - 15 years",
      image: "https://cdn2.thedogapi.com/images/B1ADQg94X.jpg"
    },
    {
      id: 176,
      name: "Norwich Terrier",
      height: [
        "25"
      ],
      weight: [
        "5",
        "5"
      ],
      temperaments: [
        "Hardy",
        "Affectionate",
        "Energetic",
        "Sensitive",
        "Intelligent"
      ],
      life_span: "12 - 15 years",
      image: "https://cdn2.thedogapi.com/images/BkgKXlqE7.jpg"
    },
    {
      id: 177,
      name: "Nova Scotia Duck Tolling Retriever",
      height: [
        "43",
        "53"
      ],
      weight: [
        "16",
        "23"
      ],
      temperaments: [
        "Outgoing",
        "Alert",
        "Patient",
        "Intelligent",
        "Loving"
      ],
      life_span: "12 - 14 years",
      image: "https://cdn2.thedogapi.com/images/SyYtQe5V7.jpg"
    },
    {
      id: 178,
      name: "Old English Sheepdog",
      height: [
        "53"
      ],
      weight: [
        "27",
        "45"
      ],
      temperaments: [
        "Sociable",
        "Bubbly",
        "Playful",
        "Adaptable",
        "Intelligent",
        "Loving"
      ],
      life_span: "10 - 12 years",
      image: "https://cdn2.thedogapi.com/images/HkZ57lq4m.jpg"
    },
    {
      id: 179,
      name: "Olde English Bulldogge",
      height: [
        "38",
        "48"
      ],
      weight: [
        "NaN"
      ],
      temperaments: [
        "Friendly",
        "Alert",
        "Confident",
        "Loving",
        "Courageous",
        "Strong"
      ],
      life_span: "9 – 14 years",
      image: "https://cdn2.thedogapi.com/images/B1d5me547.jpg"
    },
    {
      id: 181,
      name: "Papillon",
      height: [
        "20",
        "28"
      ],
      weight: [
        "1",
        "5"
      ],
      temperaments: [
        "Hardy",
        "Friendly",
        "Energetic",
        "Alert",
        "Intelligent",
        "Happy"
      ],
      life_span: "13 - 17 years",
      image: "https://cdn2.thedogapi.com/images/SkJj7e547.jpg"
    },
    {
      id: 183,
      name: "Pekingese",
      height: [
        "15",
        "23"
      ],
      weight: [
        "6"
      ],
      temperaments: [
        "Opinionated",
        "Good-natured",
        "Stubborn",
        "Affectionate",
        "Aggressive",
        "Intelligent"
      ],
      life_span: "14 - 18 years",
      image: "https://cdn2.thedogapi.com/images/ByIiml9Nm.jpg"
    },
    {
      id: 184,
      name: "Pembroke Welsh Corgi",
      height: [
        "25",
        "30"
      ],
      weight: [
        "11",
        "14"
      ],
      temperaments: [
        "Tenacious",
        "Outgoing",
        "Friendly",
        "Bold",
        "Playful",
        "Protective"
      ],
      life_span: "12 - 14 years",
      image: "https://cdn2.thedogapi.com/images/rJ6iQeqEm.jpg"
    },
    {
      id: 185,
      name: "Perro de Presa Canario",
      height: [
        "56",
        "65"
      ],
      weight: [
        "40",
        "50"
      ],
      temperaments: [
        "Strong Willed",
        "Suspicious",
        "Gentle",
        "Dominant",
        "Calm"
      ],
      life_span: "10 - 12 years",
      image: "https://cdn2.thedogapi.com/images/S1V3Qeq4X.jpg"
    },
    {
      id: 188,
      name: "Pharaoh Hound",
      height: [
        "53",
        "64"
      ],
      weight: [
        "18",
        "27"
      ],
      temperaments: [
        "Affectionate",
        "Sociable",
        "Playful",
        "Intelligent",
        "Active",
        "Trainable"
      ],
      life_span: "12 - 14 years",
      image: "https://cdn2.thedogapi.com/images/Byz6mgqEQ.jpg"
    },
    {
      id: 189,
      name: "Plott",
      height: [
        "51",
        "64"
      ],
      weight: [
        "18",
        "27"
      ],
      temperaments: [
        "Bold",
        "Alert",
        "Loyal",
        "Intelligent"
      ],
      life_span: "12 - 14 years",
      image: "https://cdn2.thedogapi.com/images/B1i67l5VQ.jpg"
    },
    {
      id: 193,
      name: "Pomeranian",
      height: [
        "20",
        "30"
      ],
      weight: [
        "1",
        "3"
      ],
      temperaments: [
        "Extroverted",
        "Friendly",
        "Sociable",
        "Playful",
        "Intelligent",
        "Active"
      ],
      life_span: "15 years",
      image: "https://cdn2.thedogapi.com/images/HJd0XecNX.jpg"
    },
    {
      id: 196,
      name: "Poodle (Miniature)",
      height: [
        "28",
        "38"
      ],
      weight: [
        "7",
        "8"
      ],
      temperaments: [],
      life_span: "12 – 15 years",
      image: "https://cdn2.thedogapi.com/images/Hkxk4ecVX.jpg"
    },
    {
      id: 197,
      name: "Poodle (Toy)",
      height: [
        "23",
        "28"
      ],
      weight: [
        "3",
        "4"
      ],
      temperaments: [],
      life_span: "18 years",
      image: "https://cdn2.thedogapi.com/images/rJFJVxc4m.jpg"
    },
    {
      id: 201,
      name: "Pug",
      height: [
        "25",
        "30"
      ],
      weight: [
        "6",
        "8"
      ],
      temperaments: [
        "Docile",
        "Clever",
        "Charming",
        "Stubborn",
        "Sociable",
        "Playful",
        "Quiet",
        "Attentive"
      ],
      life_span: "12 - 14 years",
      image: "https://cdn2.thedogapi.com/images/HyJvcl9N7.jpg"
    },
    {
      id: 204,
      name: "Puli",
      height: [
        "41",
        "43"
      ],
      weight: [
        "11",
        "16"
      ],
      temperaments: [
        "Energetic",
        "Agile",
        "Loyal",
        "Obedient",
        "Intelligent",
        "Faithful"
      ],
      life_span: "12 - 16 Years years",
      image: "https://cdn2.thedogapi.com/images/ryPgVl5N7.jpg"
    },
    {
      id: 205,
      name: "Pumi",
      height: [
        "38",
        "47"
      ],
      weight: [
        "8",
        "15"
      ],
      temperaments: [
        "Lively",
        "Reserved",
        "Intelligent",
        "Active",
        "Protective",
        "Vocal"
      ],
      life_span: "13 - 15 years",
      image: "https://cdn2.thedogapi.com/images/SyRe4xcN7.jpg"
    },
    {
      id: 207,
      name: "Rat Terrier",
      height: [
        "25",
        "33"
      ],
      weight: [
        "4",
        "11"
      ],
      temperaments: [
        "Affectionate",
        "Lively",
        "Inquisitive",
        "Alert",
        "Intelligent",
        "Loving"
      ],
      life_span: "12 - 18 years",
      image: "https://cdn2.thedogapi.com/images/HkXWNl9E7.jpg"
    },
    {
      id: 208,
      name: "Redbone Coonhound",
      height: [
        "53",
        "69"
      ],
      weight: [
        "20",
        "36"
      ],
      temperaments: [
        "Affectionate",
        "Energetic",
        "Independent",
        "Companionable",
        "Familial",
        "Unflappable"
      ],
      life_span: "10 - 12 years",
      image: "https://cdn2.thedogapi.com/images/HJMzEl5N7.jpg"
    },
    {
      id: 209,
      name: "Rhodesian Ridgeback",
      height: [
        "61",
        "69"
      ],
      weight: [
        "34",
        "36"
      ],
      temperaments: [
        "Strong Willed",
        "Mischievous",
        "Loyal",
        "Dignified",
        "Sensitive",
        "Intelligent"
      ],
      life_span: "10 - 12 years",
      image: "https://cdn2.thedogapi.com/images/By9zNgqE7.jpg"
    },
    {
      id: 210,
      name: "Rottweiler",
      height: [
        "56",
        "69"
      ],
      weight: [
        "34",
        "50"
      ],
      temperaments: [
        "Steady",
        "Good-natured",
        "Fearless",
        "Devoted",
        "Alert",
        "Obedient",
        "Confident",
        "Self-assured",
        "Calm",
        "Courageous"
      ],
      life_span: "8 - 10 years",
      image: "https://cdn2.thedogapi.com/images/r1xXEgcNX.jpg"
    },
    {
      id: 211,
      name: "Russian Toy",
      height: [
        "19",
        "27"
      ],
      weight: [
        "1",
        "3"
      ],
      temperaments: [],
      life_span: "10 - 12 years",
      image: "https://cdn2.thedogapi.com/images/HkP7Vxc4Q.jpg"
    },
    {
      id: 212,
      name: "Saint Bernard",
      height: [
        "65",
        "70"
      ],
      weight: [
        "59",
        "82"
      ],
      temperaments: [
        "Friendly",
        "Lively",
        "Gentle",
        "Watchful",
        "Calm"
      ],
      life_span: "7 - 10 years",
      image: "https://cdn2.thedogapi.com/images/_Qf9nfRzL.png"
    },
    {
      id: 213,
      name: "Saluki",
      height: [
        "58",
        "71"
      ],
      weight: [
        "16",
        "29"
      ],
      temperaments: [
        "Aloof",
        "Reserved",
        "Intelligent",
        "Quiet"
      ],
      life_span: "12 - 14 years",
      image: "https://cdn2.thedogapi.com/images/fjFIuehNo.jpg"
    },
    {
      id: 214,
      name: "Samoyed",
      height: [
        "48",
        "60"
      ],
      weight: [
        "23",
        "27"
      ],
      temperaments: [
        "Stubborn",
        "Friendly",
        "Sociable",
        "Lively",
        "Alert",
        "Playful"
      ],
      life_span: "12 - 14 years",
      image: "https://cdn2.thedogapi.com/images/S1T8Ee9Nm.jpg"
    },
    {
      id: 216,
      name: "Schipperke",
      height: [
        "25",
        "33"
      ],
      weight: [
        "5",
        "7"
      ],
      temperaments: [
        "Fearless",
        "Agile",
        "Curious",
        "Independent",
        "Confident",
        "Faithful"
      ],
      life_span: "13 - 15 years",
      image: "https://cdn2.thedogapi.com/images/SyBvVgc47.jpg"
    },
    {
      id: 218,
      name: "Scottish Deerhound",
      height: [
        "71",
        "81"
      ],
      weight: [
        "32",
        "59"
      ],
      temperaments: [
        "Docile",
        "Friendly",
        "Dignified",
        "Gentle"
      ],
      life_span: "8 - 10 years",
      image: "https://cdn2.thedogapi.com/images/SkNjqx9NQ.jpg"
    },
    {
      id: 219,
      name: "Scottish Terrier",
      height: [
        "25"
      ],
      weight: [
        "8",
        "10"
      ],
      temperaments: [
        "Feisty",
        "Alert",
        "Independent",
        "Playful",
        "Quick",
        "Self-assured"
      ],
      life_span: "11 - 13 years",
      image: "https://cdn2.thedogapi.com/images/Bklnce5NX.jpg"
    },
    {
      id: 221,
      name: "Shetland Sheepdog",
      height: [
        "33",
        "41"
      ],
      weight: [
        "14"
      ],
      temperaments: [
        "Affectionate",
        "Lively",
        "Responsive",
        "Alert",
        "Loyal",
        "Reserved",
        "Playful",
        "Gentle",
        "Intelligent",
        "Active",
        "Trainable",
        "Strong"
      ],
      life_span: "12 - 14 years",
      image: "https://cdn2.thedogapi.com/images/rJa29l9E7.jpg"
    },
    {
      id: 222,
      name: "Shiba Inu",
      height: [
        "34",
        "42"
      ],
      weight: [
        "8",
        "10"
      ],
      temperaments: [
        "Charming",
        "Fearless",
        "Keen",
        "Alert",
        "Confident",
        "Faithful"
      ],
      life_span: "12 - 16 years",
      image: "https://cdn2.thedogapi.com/images/Zn3IjPX3f.jpg"
    },
    {
      id: 223,
      name: "Shih Tzu",
      height: [
        "20",
        "28"
      ],
      weight: [
        "4",
        "7"
      ],
      temperaments: [
        "Clever",
        "Spunky",
        "Outgoing",
        "Friendly",
        "Affectionate",
        "Lively",
        "Alert",
        "Loyal",
        "Independent",
        "Playful",
        "Gentle",
        "Intelligent",
        "Happy",
        "Active",
        "Courageous"
      ],
      life_span: "10 - 18 years",
      image: "https://cdn2.thedogapi.com/images/BkrJjgcV7.jpg"
    },
    {
      id: 225,
      name: "Shiloh Shepherd",
      height: [
        "66",
        "76"
      ],
      weight: [
        "54",
        "64"
      ],
      temperaments: [
        "Outgoing",
        "Loyal",
        "Companionable",
        "Gentle",
        "Loving",
        "Trainable"
      ],
      life_span: "9 – 14 years",
      image: "https://cdn2.thedogapi.com/images/SJJxjecEX.jpg"
    },
    {
      id: 226,
      name: "Siberian Husky",
      height: [
        "51",
        "60"
      ],
      weight: [
        "16",
        "27"
      ],
      temperaments: [
        "Outgoing",
        "Friendly",
        "Alert",
        "Gentle",
        "Intelligent"
      ],
      life_span: "12 years",
      image: "https://cdn2.thedogapi.com/images/S17ZilqNm.jpg"
    },
    {
      id: 228,
      name: "Silky Terrier",
      height: [
        "23",
        "25"
      ],
      weight: [
        "4",
        "5"
      ],
      temperaments: [
        "Friendly",
        "Responsive",
        "Inquisitive",
        "Alert",
        "Quick",
        "Joyful"
      ],
      life_span: "12 - 15 years",
      image: "https://cdn2.thedogapi.com/images/ByzGsl5Nm.jpg"
    },
    {
      id: 232,
      name: "Smooth Fox Terrier",
      height: [
        "39"
      ],
      weight: [
        "NaN",
        "8"
      ],
      temperaments: [
        "Fearless",
        "Affectionate",
        "Alert",
        "Playful",
        "Intelligent",
        "Active"
      ],
      life_span: "12 - 14 years",
      image: "https://cdn2.thedogapi.com/images/Syszjx9Em.jpg"
    },
    {
      id: 233,
      name: "Soft Coated Wheaten Terrier",
      height: [
        "41",
        "46"
      ],
      weight: [
        "14",
        "18"
      ],
      temperaments: [
        "Affectionate",
        "Spirited",
        "Energetic",
        "Playful",
        "Intelligent",
        "Faithful"
      ],
      life_span: "12 - 15 years",
      image: "https://cdn2.thedogapi.com/images/HJHmix5NQ.jpg"
    },
    {
      id: 235,
      name: "Spanish Water Dog",
      height: [
        "41",
        "51"
      ],
      weight: [
        "14",
        "23"
      ],
      temperaments: [
        "Trainable",
        "Diligent",
        "Affectionate",
        "Loyal",
        "Athletic",
        "Intelligent"
      ],
      life_span: "12 - 15 years",
      image: "https://cdn2.thedogapi.com/images/HJf4jl9VX.jpg"
    },
    {
      id: 236,
      name: "Spinone Italiano",
      height: [
        "57",
        "70"
      ],
      weight: [
        "28",
        "39"
      ],
      temperaments: [
        "Docile",
        "Friendly",
        "Affectionate",
        "Loyal",
        "Patient",
        "Gentle"
      ],
      life_span: "10 - 12 years",
      image: "https://cdn2.thedogapi.com/images/rk5Eoe5Nm.jpg"
    },
    {
      id: 238,
      name: "Staffordshire Bull Terrier",
      height: [
        "36",
        "41"
      ],
      weight: [
        "11",
        "17"
      ],
      temperaments: [
        "Reliable",
        "Fearless",
        "Bold",
        "Affectionate",
        "Loyal",
        "Intelligent",
        "Courageous"
      ],
      life_span: "12 - 14 years",
      image: "https://cdn2.thedogapi.com/images/H1zSie9V7.jpg"
    },
    {
      id: 239,
      name: "Standard Schnauzer",
      height: [
        "44",
        "50"
      ],
      weight: [
        "14",
        "23"
      ],
      temperaments: [
        "Trainable",
        "Good-natured",
        "Devoted",
        "Lively",
        "Playful",
        "Intelligent"
      ],
      life_span: "13 - 15 years",
      image: "https://cdn2.thedogapi.com/images/tmzeu6ID_.jpg"
    },
    {
      id: 242,
      name: "Swedish Vallhund",
      height: [
        "29",
        "34"
      ],
      weight: [
        "9",
        "14"
      ],
      temperaments: [
        "Fearless",
        "Friendly",
        "Energetic",
        "Alert",
        "Intelligent",
        "Watchful"
      ],
      life_span: "12 - 14 years",
      image: "https://cdn2.thedogapi.com/images/HJ-Dix94Q.jpg"
    },
    {
      id: 243,
      name: "Thai Ridgeback",
      height: [
        "51",
        "61"
      ],
      weight: [
        "16",
        "25"
      ],
      temperaments: [
        "Protective",
        "Loyal",
        "Independent",
        "Intelligent",
        "Loving",
        "Familial"
      ],
      life_span: "10 - 12 years",
      image: "https://cdn2.thedogapi.com/images/zv89hR-O8.jpg"
    },
    {
      id: 244,
      name: "Tibetan Mastiff",
      height: [
        "61",
        "66"
      ],
      weight: [
        "39",
        "64"
      ],
      temperaments: [
        "Strong Willed",
        "Tenacious",
        "Aloof",
        "Stubborn",
        "Intelligent",
        "Protective"
      ],
      life_span: "10 - 14 years",
      image: "https://cdn2.thedogapi.com/images/SkM9sec47.jpg"
    },
    {
      id: 245,
      name: "Tibetan Spaniel",
      height: [
        "25"
      ],
      weight: [
        "4",
        "7"
      ],
      temperaments: [
        "Willful",
        "Aloof",
        "Assertive",
        "Independent",
        "Playful",
        "Intelligent",
        "Happy"
      ],
      life_span: "12 - 15 years",
      image: "https://cdn2.thedogapi.com/images/Hyjcol947.jpg"
    },
    {
      id: 246,
      name: "Tibetan Terrier",
      height: [
        "36",
        "43"
      ],
      weight: [
        "9",
        "11"
      ],
      temperaments: [
        "Affectionate",
        "Energetic",
        "Amiable",
        "Reserved",
        "Gentle",
        "Sensitive"
      ],
      life_span: "12 - 15 years",
      image: "https://cdn2.thedogapi.com/images/6f5n_42mB.jpg"
    },
    {
      id: 248,
      name: "Toy Fox Terrier",
      height: [
        "20",
        "28"
      ],
      weight: [
        "2",
        "4"
      ],
      temperaments: [
        "Friendly",
        "Spirited",
        "Alert",
        "Loyal",
        "Playful",
        "Intelligent"
      ],
      life_span: "12 - 15 years",
      image: "https://cdn2.thedogapi.com/images/B17ase9V7.jpg"
    },
    {
      id: 250,
      name: "Treeing Walker Coonhound",
      height: [
        "51",
        "69"
      ],
      weight: [
        "20",
        "36"
      ],
      temperaments: [
        "Clever",
        "Affectionate",
        "Confident",
        "Intelligent",
        "Loving",
        "Trainable"
      ],
      life_span: "10 - 13 years",
      image: "https://cdn2.thedogapi.com/images/SkRpsgc47.jpg"
    },
    {
      id: 251,
      name: "Vizsla",
      height: [
        "53",
        "61"
      ],
      weight: [
        "23",
        "29"
      ],
      temperaments: [
        "Affectionate",
        "Energetic",
        "Loyal",
        "Gentle",
        "Quiet"
      ],
      life_span: "10 - 14 years",
      image: "https://cdn2.thedogapi.com/images/r1o0jx9Em.jpg"
    },
    {
      id: 253,
      name: "Weimaraner",
      height: [
        "58",
        "69"
      ],
      weight: [
        "25",
        "41"
      ],
      temperaments: [
        "Steady",
        "Aloof",
        "Stubborn",
        "Energetic",
        "Alert",
        "Intelligent",
        "Powerful",
        "Fast"
      ],
      life_span: "12 - 15 years",
      image: "https://cdn2.thedogapi.com/images/SyU12l9V7.jpg"
    },
    {
      id: 254,
      name: "Welsh Springer Spaniel",
      height: [
        "43",
        "48"
      ],
      weight: [
        "16",
        "25"
      ],
      temperaments: [
        "Stubborn",
        "Friendly",
        "Affectionate",
        "Loyal",
        "Playful",
        "Active"
      ],
      life_span: "12 - 15 years",
      image: "https://cdn2.thedogapi.com/images/BJ1gnx5Vm.jpg"
    },
    {
      id: 256,
      name: "West Highland White Terrier",
      height: [
        "25",
        "28"
      ],
      weight: [
        "7",
        "10"
      ],
      temperaments: [
        "Hardy",
        "Friendly",
        "Alert",
        "Independent",
        "Gay",
        "Active",
        "Courageous"
      ],
      life_span: "15 - 20 years",
      image: "https://cdn2.thedogapi.com/images/Bkdx2g5Em.jpg"
    },
    {
      id: 257,
      name: "Whippet",
      height: [
        "46",
        "56"
      ],
      weight: [
        "11",
        "16"
      ],
      temperaments: [
        "Friendly",
        "Affectionate",
        "Lively",
        "Gentle",
        "Intelligent",
        "Quiet"
      ],
      life_span: "12 - 15 years",
      image: "https://cdn2.thedogapi.com/images/Hyv-ne94m.jpg"
    },
    {
      id: 258,
      name: "White Shepherd",
      height: [
        "56",
        "64"
      ],
      weight: [
        "27",
        "39"
      ],
      temperaments: [
        "Self-confidence",
        "Aloof",
        "Fearless",
        "Alert",
        "Companionable",
        "Eager"
      ],
      life_span: "12 – 14 years",
      image: "https://cdn2.thedogapi.com/images/r14M3e9E7.jpg"
    },
    {
      id: 259,
      name: "Wire Fox Terrier",
      height: [
        "33",
        "41"
      ],
      weight: [
        "7",
        "9"
      ],
      temperaments: [
        "Fearless",
        "Friendly",
        "Bold",
        "Keen",
        "Alert",
        "Quick"
      ],
      life_span: "13 – 14 years",
      image: "https://cdn2.thedogapi.com/images/SJ6f2g9EQ.jpg"
    },
    {
      id: 260,
      name: "Wirehaired Pointing Griffon",
      height: [
        "51",
        "61"
      ],
      weight: [
        "20",
        "32"
      ],
      temperaments: [
        "Loyal",
        "Gentle",
        "Vigilant",
        "Trainable",
        "Proud"
      ],
      life_span: "12 - 14 years",
      image: "https://cdn2.thedogapi.com/images/Bkam2l9Vm.jpg"
    },
    {
      id: 261,
      name: "Wirehaired Vizsla",
      height: [
        "55",
        "64"
      ],
      weight: [
        "20",
        "29"
      ],
      temperaments: [],
      life_span: "12 - 14 years",
      image: "https://cdn2.thedogapi.com/images/r1I4hl5Em.jpg"
    },
    {
      id: 262,
      name: "Xoloitzcuintli",
      height: [
        "25",
        "58"
      ],
      weight: [
        "4",
        "14"
      ],
      temperaments: [
        "Cheerful",
        "Alert",
        "Companionable",
        "Intelligent",
        "Protective",
        "Calm"
      ],
      life_span: "12 - 14 years",
      image: "https://cdn2.thedogapi.com/images/HkNS3gqEm.jpg"
    },
    {
      id: 264,
      name: "Yorkshire Terrier",
      height: [
        "20",
        "23"
      ],
      weight: [
        "2",
        "3"
      ],
      temperaments: [
        "Bold",
        "Independent",
        "Confident",
        "Intelligent",
        "Courageous"
      ],
      life_span: "12 - 16 years",
      image: "https://cdn2.thedogapi.com/images/B12BnxcVQ.jpg"
    }
];

export default breeds;