const initState = {
  products: [
    {
      id: "p1",
      name: "Basic Wide Leg Jumpsuit",
      category: {
        id: "c2",
        name: "Women"
      },
      price: 17.9,
      rating: 5,
      description:
        "Floral print sleeveless wide leg jumpsuit with waist tie detail",
      images: [
        {
          url:
            "http://zalora-media-live-sg.s3.amazonaws.com/product/33/3339/1.jpg",
          alt: "alt"
        },
        {
          url:
            "http://zalora-media-live-sg.s3.amazonaws.com/product/33/3339/2.jpg",
          alt: "alt"
        },
        {
          url:
            "http://zalora-media-live-sg.s3.amazonaws.com/product/33/3339/3.jpg",
          alt: "alt"
        }
      ],
      sizes: ["XS", "S"]
    },
    {
      id: "p2",
      name: "Strap Back Daisy Jumpsuit - Yellow",
      category: {
        id: "c2",
        name: "Women"
      },
      price: 59,
      rating: 5,
      description:
        "Polyester jumpsuit with classic, regular fit, featuring an open back with strappy details",
      images: [
        {
          url:
            "http://zalora-media-live-sg.s3.amazonaws.com/product/92/8969/1.jpg",
          alt: "alt"
        },
        {
          url:
            "http://zalora-media-live-sg.s3.amazonaws.com/product/92/8969/2.jpg",
          alt: "alt"
        },
        {
          url:
            "http://zalora-media-live-sg.s3.amazonaws.com/product/92/8969/3.jpg",
          alt: "alt"
        }
      ],
      sizes: ["S", "M", "L"]
    },
    {
      id: "p3",
      name: "Diana Dress",
      category: {
        id: "c2",
        name: "Women"
      },
      price: 160.9,
      rating: 5,
      description:
        "Mesh top panel bodycon denim dress with round neckline - Slim fit",
      images: [
        {
          url:
            "http://zalora-media-live-sg.s3.amazonaws.com/product/30/9169/1.jpg",
          alt: "alt"
        },
        {
          url:
            "http://zalora-media-live-sg.s3.amazonaws.com/product/30/9169/2.jpg",
          alt: "alt"
        },
        {
          url:
            "http://zalora-media-live-sg.s3.amazonaws.com/product/30/9169/3.jpg",
          alt: "alt"
        }
      ],
      sizes: ["M", "L", "XL"]
    },
    {
      id: "p4",
      name: "Helle BL Crew Neck Singlet Top",
      category: {
        id: "c2",
        name: "Women"
      },
      price: 29.4,
      rating: 4.5,
      description: "Graphic sleeveless tee with round neckline - Relaxed fit",
      images: [
        {
          url:
            "http://zalora-media-live-sg.s3.amazonaws.com/product/65/4678/1.jpg",
          alt: "alt"
        },
        {
          url:
            "http://zalora-media-live-sg.s3.amazonaws.com/product/65/4678/2.jpg",
          alt: "alt"
        },
        {
          url:
            "http://zalora-media-live-sg.s3.amazonaws.com/product/65/4678/3.jpg",
          alt: "alt"
        }
      ],
      sizes: ["XS", "S", "M", "L", "XL"]
    },
    {
      id: "p5",
      name: "Buttoned A-Line Skirt",
      category: {
        id: "c2",
        name: "Women"
      },
      price: 22.9,
      rating: 4.5,
      description:
        "Decorative button front skirt- Mid rise, unlined, regular fit",
      images: [
        {
          url:
            "http://zalora-media-live-sg.s3.amazonaws.com/product/25/2159/1.jpg",
          alt: "alt"
        },
        {
          url:
            "http://zalora-media-live-sg.s3.amazonaws.com/product/25/2159/2.jpg",
          alt: "alt"
        },
        {
          url:
            "http://zalora-media-live-sg.s3.amazonaws.com/product/25/2159/4.jpg",
          alt: "alt"
        }
      ],
      sizes: ["S"]
    },
    {
      id: "p6",
      name: "Flare Sleeves Bodysuit",
      category: {
        id: "c2",
        name: "Women"
      },
      price: 20.9,
      rating: 4.5,
      description:
        "Solid hue crepe wrap bodysuit - V-neckline and front & hem button fastening",
      images: [
        {
          url:
            "http://zalora-media-live-sg.s3.amazonaws.com/product/57/6459/1.jpg",
          alt: "alt"
        },
        {
          url:
            "http://zalora-media-live-sg.s3.amazonaws.com/product/57/6459/2.jpg",
          alt: "alt"
        },
        {
          url:
            "http://zalora-media-live-sg.s3.amazonaws.com/product/57/6459/4.jpg",
          alt: "alt"
        }
      ],
      sizes: ["M", "L"]
    },
    {
      id: "p7",
      name: "Openwork Long Cardigan",
      category: {
        id: "c2",
        name: "Women"
      },
      price: 29.9,
      rating: 4.5,
      description: "Solid shade openwork longline knitted cardigan",
      images: [
        {
          url:
            "http://zalora-media-live-sg.s3.amazonaws.com/product/95/4389/1.jpg",
          alt: "alt"
        },
        {
          url:
            "http://zalora-media-live-sg.s3.amazonaws.com/product/95/4389/2.jpg",
          alt: "alt"
        },
        {
          url:
            "http://zalora-media-live-sg.s3.amazonaws.com/product/95/4389/4.jpg",
          alt: "alt"
        }
      ],
      sizes: ["XL"]
    },
    {
      id: "p8",
      name: "Ruffle Sleeves Top",
      category: {
        id: "c2",
        name: "Women"
      },
      price: 25.9,
      rating: 5,
      description:
        "Textured ruffle short sleeve top- Round neckline with cutout detail",
      images: [
        {
          url:
            "http://zalora-media-live-sg.s3.amazonaws.com/product/54/1159/1.jpg",
          alt: "alt"
        },
        {
          url:
            "http://zalora-media-live-sg.s3.amazonaws.com/product/54/1159/2.jpg",
          alt: "alt"
        },
        {
          url:
            "http://zalora-media-live-sg.s3.amazonaws.com/product/54/1159/3.jpg",
          alt: "alt"
        }
      ],
      sizes: ["S", "M", "L", "XL"]
    },
    {
      id: "p9",
      name: "Wrap Skirt",
      category: {
        id: "c2",
        name: "Women"
      },
      price: 29.9,
      rating: 4.5,
      description: "Solid toned wrap skirt - Unlined, mid rise, regular fit",
      images: [
        {
          url:
            "http://zalora-media-live-sg.s3.amazonaws.com/product/91/0159/1.jpg",
          alt: "alt"
        },
        {
          url:
            "http://zalora-media-live-sg.s3.amazonaws.com/product/91/0159/2.jpg",
          alt: "alt"
        },
        {
          url:
            "http://zalora-media-live-sg.s3.amazonaws.com/product/91/0159/4.jpg",
          alt: "alt"
        }
      ],
      sizes: ["XS", "S", "M"]
    },
    {
      id: "p10",
      name: "Amaris Cropped Cape Blazer",
      category: {
        id: "c2",
        name: "Women"
      },
      price: 90.9,
      rating: 4.5,
      description: "Cape sleeves blazer- Open front, lined, regular fit",
      images: [
        {
          url:
            "http://zalora-media-live-sg.s3.amazonaws.com/product/55/6179/1.jpg",
          alt: "alt"
        },
        {
          url:
            "http://zalora-media-live-sg.s3.amazonaws.com/product/55/6179/2.jpg",
          alt: "alt"
        },
        {
          url:
            "http://zalora-media-live-sg.s3.amazonaws.com/product/55/6179/4.jpg",
          alt: "alt"
        }
      ],
      sizes: ["XS", "S", "M", "L"]
    },
    {
      id: "p11",
      name: "Bardot Midi Dress",
      category: {
        id: "c2",
        name: "Women"
      },
      price: 73.9,
      rating: 4,
      description: "Textured bodycon dress - Bardot neckline with notch detail",
      images: [
        {
          url:
            "http://zalora-media-live-sg.s3.amazonaws.com/product/71/5199/1.jpg",
          alt: "alt"
        },
        {
          url:
            "http://zalora-media-live-sg.s3.amazonaws.com/product/71/5199/2.jpg",
          alt: "alt"
        },
        {
          url:
            "http://zalora-media-live-sg.s3.amazonaws.com/product/71/5199/4.jpg",
          alt: "alt"
        }
      ],
      sizes: ["M", "L", "XL"]
    },
    {
      id: "p12",
      name: "Smocked Waist Chambray Skater Dress",
      category: {
        id: "c2",
        name: "Women"
      },
      price: 66.9,
      rating: 4.5,
      description: "Solid shade smocked skater dress - Lined, scoop neckline",
      images: [
        {
          url:
            "http://zalora-media-live-sg.s3.amazonaws.com/product/76/1759/1.jpg",
          alt: "alt"
        },
        {
          url:
            "http://zalora-media-live-sg.s3.amazonaws.com/product/76/1759/2.jpg",
          alt: "alt"
        },
        {
          url:
            "http://zalora-media-live-sg.s3.amazonaws.com/product/76/1759/4.jpg",
          alt: "alt"
        }
      ],
      sizes: ["XS", "S"]
    },
    {
      id: "p13",
      name: "Short Sleeve Logo Slim Tee",
      category: {
        id: "c1",
        name: "Men"
      },
      price: 110.9,
      rating: 4.5,
      description: "Casual tee with brand logo - Round neckline, slim fit",
      images: [
        {
          url:
            "http://zalora-media-live-sg.s3.amazonaws.com/product/67/7739/1.jpg",
          alt: "alt"
        },
        {
          url:
            "http://zalora-media-live-sg.s3.amazonaws.com/product/67/7739/2.jpg",
          alt: "alt"
        },
        {
          url:
            "http://zalora-media-live-sg.s3.amazonaws.com/product/67/7739/4.jpg",
          alt: "alt"
        }
      ],
      sizes: ["S", "M", "L"]
    },
    {
      id: "p14",
      name: "Threadborne Short Sleeve Top",
      category: {
        id: "c1",
        name: "Men"
      },
      price: 15.6,
      rating: 4.5,
      description:
        "Training T-shirt with anti-odor technology and distraction-free comfort",
      images: [
        {
          url:
            "http://zalora-media-live-sg.s3.amazonaws.com/product/95/9429/1.jpg",
          alt: "alt"
        },
        {
          url:
            "http://zalora-media-live-sg.s3.amazonaws.com/product/95/9429/2.jpg",
          alt: "alt"
        },
        {
          url:
            "http://zalora-media-live-sg.s3.amazonaws.com/product/95/9429/3.jpg",
          alt: "alt"
        }
      ],
      sizes: ["XS"]
    },
    {
      id: "p15",
      name: "Skinny-Fit Jeans With Buttons",
      category: {
        id: "c1",
        name: "Men"
      },
      price: 26.9,
      rating: 4.5,
      description: "Faded denim jeans - Mid rise, unlined, slim fit",
      images: [
        {
          url:
            "http://zalora-media-live-sg.s3.amazonaws.com/product/18/7339/1.jpg",
          alt: "alt"
        },
        {
          url:
            "http://zalora-media-live-sg.s3.amazonaws.com/product/18/7339/2.jpg",
          alt: "alt"
        },
        {
          url:
            "http://zalora-media-live-sg.s3.amazonaws.com/product/18/7339/4.jpg",
          alt: "alt"
        }
      ],
      sizes: ["L", "XL"]
    },
    {
      id: "p16",
      name: "Ua Tech Ss Tee",
      category: {
        id: "c1",
        name: "Men"
      },
      price: 36.9,
      rating: 4.5,
      description:
        "Insanely comfortable, this t-shirt is a definite must have for training junkies out there",
      images: [
        {
          url:
            "http://zalora-media-live-sg.s3.amazonaws.com/product/09/0529/1.jpg",
          alt: "alt"
        },
        {
          url:
            "http://zalora-media-live-sg.s3.amazonaws.com/product/09/0529/2.jpg",
          alt: "alt"
        },
        {
          url:
            "http://zalora-media-live-sg.s3.amazonaws.com/product/09/0529/3.jpg",
          alt: "alt"
        }
      ],
      sizes: ["M", "L"]
    },
    {
      id: "p17",
      name: "Loopback Crest Hoodie",
      category: {
        id: "c1",
        name: "Men"
      },
      price: 107.9,
      rating: 4.5,
      description:
        "Contrast panel hoodie with brand patch detail- Hooded neckline, unlined, regular fit",
      images: [
        {
          url:
            "http://zalora-media-live-sg.s3.amazonaws.com/product/40/6758/1.jpg",
          alt: "alt"
        },
        {
          url:
            "http://zalora-media-live-sg.s3.amazonaws.com/product/40/6758/2.jpg",
          alt: "alt"
        },
        {
          url:
            "http://zalora-media-live-sg.s3.amazonaws.com/product/40/6758/3.jpg",
          alt: "alt"
        }
      ],
      sizes: ["XS", "S", "M", "L"]
    },
    {
      id: "p18",
      name: "Sport Shorts",
      category: {
        id: "c1",
        name: "Men"
      },
      price: 54,
      rating: 4.5,
      description:
        "Solid toned shorts with embroidered details - Mid rise, regular fit",
      images: [
        {
          url:
            "http://zalora-media-live-sg.s3.amazonaws.com/product/90/3089/1.jpg",
          alt: "alt"
        },
        {
          url:
            "http://zalora-media-live-sg.s3.amazonaws.com/product/90/3089/2.jpg",
          alt: "alt"
        },
        {
          url:
            "http://zalora-media-live-sg.s3.amazonaws.com/product/90/3089/4.jpg",
          alt: "alt"
        }
      ],
      sizes: ["S", "M"]
    },
    {
      id: "p19",
      name: "Summer Oxford Pique Polo",
      category: {
        id: "c1",
        name: "Men"
      },
      price: 63.9,
      rating: 4,
      description:
        "Melange polo shirt with tipping detail - Collared neckline, unlined, regular fit",
      images: [
        {
          url:
            "http://zalora-media-live-sg.s3.amazonaws.com/product/64/9339/1.jpg",
          alt: "alt"
        },
        {
          url:
            "http://zalora-media-live-sg.s3.amazonaws.com/product/64/9339/2.jpg",
          alt: "alt"
        },
        {
          url:
            "http://zalora-media-live-sg.s3.amazonaws.com/product/64/9339/4.jpg",
          alt: "alt"
        }
      ],
      sizes: ["L"]
    },
    {
      id: "p20",
      name: "Preppy Shirt - Boss Casual",
      category: {
        id: "c1",
        name: "Men"
      },
      price: 142.9,
      rating: 4.5,
      description:
        "Monochrome button-up shirt - Collared neckline, regular fit",
      images: [
        {
          url:
            "http://zalora-media-live-sg.s3.amazonaws.com/product/07/7728/1.jpg",
          alt: "alt"
        },
        {
          url:
            "http://zalora-media-live-sg.s3.amazonaws.com/product/07/7728/2.jpg",
          alt: "alt"
        },
        {
          url:
            "http://zalora-media-live-sg.s3.amazonaws.com/product/07/7728/4.jpg",
          alt: "alt"
        }
      ],
      sizes: ["L", "XL"]
    }
  ]
};
const productReducer = (state = initState, action) => {
  return state;
};

export default productReducer;
