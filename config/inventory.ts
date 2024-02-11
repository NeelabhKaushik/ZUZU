import { Image } from "sanity"

interface InventoryProduct {
  id: string
  name: string
  image: string
  images: string[]
  categories: string[]
  sizes: string[]
  colors: string[]
  price: number
  currency: string
  description: string
  sku: string
}

export interface SanityProduct extends Omit<InventoryProduct, "images"> {
  _id: string
  _createdAt: Date
  slug: string
  images: Image[]
}

export const inventory: InventoryProduct[] = [
  {
    id: "64da6006-a4bb-4555-af78-3467853eb75e",
    sku: "airforce_1_black",
    name: "Nuke Air Force 1 '07",
    description: `Ground your look in legendary style with this hoops original. Classic '80s construction pairs with durable leather and textiles for a sleek and sturdy look. Nike Air cushioning delivers lasting comfort, while pops of energetic colour contrast with dark neutrals for bold style that tracks whether you're on the court or on the go.`,
    price: 1189500, // price in smallest currency unit (e.g. cent for INR)
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/6b556566-2b37-406f-8cb9-acdb8f308906/air-force-1-07-shoes-8jXZH2.png",

    images: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/6b556566-2b37-406f-8cb9-acdb8f308906/air-force-1-07-shoes-8jXZH2.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/13a9679a-2741-402c-be8b-c23ac11b7f20/air-force-1-07-shoes-8jXZH2.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c96aa540-e0e6-42b8-84c9-419cf03f2d28/air-force-1-07-shoes-8jXZH2.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a9906dd6-a898-4041-89b4-c13884520bbe/air-force-1-07-shoes-8jXZH2.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/25980a11-8866-477b-8a17-b23ace47908e/air-force-1-07-shoes-8jXZH2.png",
    ],
    sizes: ["5", "6", "7", "8", "9", "10", "12"],
    categories: ["nuke"],
    colors: ["black"],
    currency: "INR",
  },
  {
    id: "8d1a33a5-5650-4bd7-bb70-ba4670090700",
    sku: "Air_max_90",
    name: "Nuke Air Max 90",
    description: `Lace up and feel the legacy. Produced at the intersection of art, music and culture, this champion running shoe helped define the '90s. Worn by presidents, revolutionised through collabs and celebrated through rare colourways, its striking visuals, Waffle sole and exposed Nike Air cushioning keep it alive and well.    `,
    price: 1189500,
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2369840e-f302-4a2a-a33b-daf10e8a818f/air-max-90-shoes-hkwJRC.png",
    images: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2369840e-f302-4a2a-a33b-daf10e8a818f/air-max-90-shoes-hkwJRC.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2d845c3d-dfd6-48ec-a377-0cc052676e55/air-max-90-shoes-hkwJRC.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8a7d8ac7-ba6c-4a03-b79f-7e9b334cc8e4/air-max-90-shoes-hkwJRC.png",
    ],
    sizes: ["8", "9", "10", "12"],
    categories: ["nuke"],
    colors: ["green"],
    currency: "INR",
  },
  {
    id: "e882fe48-253c-40fb-8155-51b47b063c1a",
    sku: "Jordan_Stay_Loyal_3",
    name: "Jordan Stay Loyal 3",
    description: `You gotta know where you've been to know where you're going. We took that to heart when creating the Stay Loyal 3, a modern shoe built on the Air Jordan legacy. Inside and out, they're made for versatility, with minimalist looks, cloud-like cushioning and design elements that echo the AJ4. In other words, style with proven lasting power.    `,
    price: 1029500,
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/33e498ce-94d3-4f01-8b0d-79e03ba6ab1b/jordan-stay-loyal-3-shoes-GNHN2X.png",
    images: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/33e498ce-94d3-4f01-8b0d-79e03ba6ab1b/jordan-stay-loyal-3-shoes-GNHN2X.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/7233b000-380f-41af-a232-e823f3e1db54/jordan-stay-loyal-3-shoes-GNHN2X.png",
      "https://static.nike.com/a/images/t_default/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/674e31ce-84f5-4d0a-95cd-45e2bf3274f9/jordan-stay-loyal-3-shoes-GNHN2X.png",
    ],
    sizes: ["6", "8", "9", "10", "12"],
    categories: ["nuke"],
    colors: ["White"],
    currency: "INR",
  },
  {
    id: "6853a582-fc95-44af-9dac-dffbc694b47d",
    sku: "PUNA_180_STAPLE_Unisex_Sneakers",
    name: "PUNA-180 STAPLE Unisex Sneakers",
    description: `This handsome belt will pull together any outfit. The strong materials will take on your wear patterns and look even better over time.`,
    price: 1350000,
    image:
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1050,h_1050/global/396309/03/sv01/fnd/IND/fmt/png/PUMA-180-STAPLE-Unisex-Sneakers",
    images: [
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1050,h_1050/global/396309/03/sv01/fnd/IND/fmt/png/PUMA-180-STAPLE-Unisex-Sneakers",
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1050,h_1050/global/396309/03/mod01/fnd/IND/fmt/png/PUMA-180-STAPLE-Unisex-Sneakers",
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1050,h_1050/global/396309/03/mod02/fnd/IND/fmt/png/PUMA-180-STAPLE-Unisex-Sneakers",
    ],
    sizes: ["7", "8"],
    categories: ["Puna"],
    colors: ["black"],
    currency: "INR",
  },
  {
    id: "b5980fb9-142b-4e0b-9683-daac07827e0a",
    sku: "adibas_R1",
    name: "NMD_R1 Shoes",
    description: `This shoe's carbon footprint has been reduced by 44%, compared to previous versions. Less greenhouse gas emissions, including CO2, for the full life cycle — from creation all the way to end-of-life.    `,
    price: 619900,
    image:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/cc685791576a4273ad5eaed701484af6_9366/NMD_R1_Shoes_Red_GX9888_01_standard.jpg",
    images: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/cc685791576a4273ad5eaed701484af6_9366/NMD_R1_Shoes_Red_GX9888_01_standard.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/27bf77e4f5894286bd41aed701485ac1_9366/NMD_R1_Shoes_Red_GX9888_02_standard_hover.jpg",
    ],
    sizes: ["4", "5", "6"],
    categories: ["Adibas"],
    colors: ["Red"],
    currency: "INR",
  },
  {
    id: "743b3855-6487-4d52-80fc-bcb8ca4fa74b",
    sku: "ULTRABOOST",
    name: "ULTRABOOST 1.0 SHOES",
    description: `Lightweight, stylish and ready for anything. These adidas Ultraboost 1.0 sneakers are built to elevate your everyday look while keeping your steps extra comfortable. Designed without a sockliner for the purest feel on the adidas BOOST midsole, these shoes give you soft, responsive cushioning wherever you take them, while the adidas PRIMEKNIT upper gives you a super snug fit. The Stretchweb outsole flexes with your foot for elevated comfort and offers superior traction on a variety of surfaces.    `,
    price: 1500000,
    image:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0eedce8cb602443ca723af1f016395fa_9366/Ultraboost_1.0_Shoes_White_HQ6441_01_standard.jpg",
    images: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0eedce8cb602443ca723af1f016395fa_9366/Ultraboost_1.0_Shoes_White_HQ6441_01_standard.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9a3c17f0964044059607af420143011f_9366/Ultraboost_1.0_Shoes_White_HQ6441_010_hover_standard.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/699ca5c6c87e4ede9170af1f01645777_9366/Ultraboost_1.0_Shoes_White_HQ6441_02_standard.jpg",
    ],
    sizes: ["5", "6", "7", "8", "9", "10"],
    categories: ["Adibas"],
    colors: ["White"],
    currency: "INR",
  },
  {
    id: "83ea928a-d834-4c6d-a588-4c93ec2de3c0",
    sku: "Old_Balance_550",
    name: "Old Balance 550",
    description: `The original 550 debuted in 1989 and made its mark on basketball courts from coast to coast. After its initial run, the 550 was filed away in the archives, before being reintroduced in limited-edition releases in late 2020, and returned to the full-time lineup in 2021, quickly becoming a global fashion favorite. The 550’s low top, streamlined silhouette offers a clean take on the heavy-duty designs of the late ‘80s, while the dependable leather upper construction is a classic look in any era.    `,
    price: 1399900,
    image:
      "https://nb.scene7.com/is/image/NB/bb550vga_nb_02_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880",
    images: [
      "https://nb.scene7.com/is/image/NB/bb550vga_nb_02_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880",
      "https://nb.scene7.com/is/image/NB/bb550vga_nb_05_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880",
    ],
    sizes: ["6", "7", "9", "10"],
    categories: ["Old Balance"],
    colors: ["Red"],
    currency: "INR",
  },
  {
    id: "c5ef468d-d49e-4aa5-be5b-41f34af40b19",
    sku: "Old-Balance_9060",
    name: "Old Balance 9060",
    description: `The 9060 is a new expression of the refined style and innovation-led design of the classic 99X series. The 9060 reinterprets familiar 99X elements with a warped sensibility inspired by the proudly futuristic, visible tech aesthetic of the Y2K era. Sway bars, taken from the 990, are expanded and utilized throughout the entire upper for a sense of visible motion, while wavy lines and scaled up proportions on a sculpted pod midsole place an exaggerated emphasis on the familiar cushioning platforms of ABZORB and SBS.    `,
    price: 420000,
    image:
      "https://nb.scene7.com/is/image/NB/u9060eeb_nb_02_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880",
    images: [
      "https://nb.scene7.com/is/image/NB/u9060eeb_nb_02_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880",
      "https://nb.scene7.com/is/image/NB/u9060eeb_nb_05_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880",
      "https://nb.scene7.com/is/image/NB/u9060eeb_nb_02_i?$pdpflexf2$&wid=440&hei=440",
    ],
    sizes: ["8", "9", "10"],
    categories: ["Old Balance"],
    colors: ["Creame"],
    currency: "INR",
  },
  {
    id: "dd27c79d-97c3-47bb-9172-4ea74b096f6f",
    sku: "CA_Pro_Sport",
    name: "CA Pro 'Sport",
    description: `Our CA Pro takes inspiration from the original California we released back in the ‘80s. It has a look that’s both classic and modern, featuring a perforated toe – just like the OG – statement panelling, and the famous PUMA Formstrip. For this special 'Sport for the Fanbase' version, we’ve decked out the silhouette with a hardwood theme and full-on authentic basketball details. The sneaker has a leather upper, webbing on the heel overlay, and deco stitching on the quarter panel.    `,
    price: 1099900,
    image:
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1050,h_1050/global/395768/01/sv01/fnd/IND/fmt/png/CA-Pro-'Sport-for-the-Fanbase'-Unisex-Sneakers",
    images: [
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1050,h_1050/global/395768/01/mod01/fnd/IND/fmt/png/CA-Pro-'Sport-for-the-Fanbase'-Unisex-Sneakers",
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1050,h_1050/global/395768/01/mod02/fnd/IND/fmt/png/CA-Pro-'Sport-for-the-Fanbase'-Unisex-Sneakers",
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1050,h_1050/global/395768/01/fnd/IND/fmt/png/CA-Pro-'Sport-for-the-Fanbase'-Unisex-Sneakers",
    ],
    sizes: ["4", "5", "6", "7"],
    categories: ["Puna"],
    colors: ["Creame"],
    currency: "INR",
  },
]
