import React from "react";
import {
  Box,
  Button,
  HStack,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
const Header = () => {
  const TopOffers = [
    {
      image:
        "https://rukminim1.flixcart.com/image/312/312/kqidx8w0/television/m/1/v/32ha0a00-oneplus-original-imag4gy8yezxdhen.jpeg?q=70",
      text: "LED Smart Android TV ",
      text2: "Extra Rs. 1000 Off",
      text3: "Grab Now",
    },
    {
      image:
        "https://rukminim1.flixcart.com/image/200/200/kx50gi80/projector/r/9/p/zeb-pixa-play-12-5-6-dobly-audio-led-projector-zebronics-original-imag9z3yujqmzqt4.jpeg?q=70",
      text: "Projectors",
      text2: "Shop Now",
      text3: "ZEBRONICS",
    },
    {
      image:
        "https://rukminim1.flixcart.com/image/200/200/kynb6vk0/monitor/1/n/s/lf22t354fhwxxl-full-hd-22-lf22t354fhwxxl-samsung-original-imagats2rjbg9uhv.jpeg?q=70",
      text: "Monitors",
      text2: "From 9999",
      text3: "SAMSUNG",
    },
    {
      image:
        "https://rukminim1.flixcart.com/image/200/200/printer/j/j/y/hp-laserjet-m1005-multifunction-original-imadxhzpeb9qbrfg.jpeg?q=70",
      text: "Printers",
      text2: "From 3999",
      text3: "HP",
    },
    {
      image:
        "https://rukminim1.flixcart.com/image/416/416/kyag87k0/microwave-new/d/x/3/-original-imagak6gxhykfkjy.jpeg?q=70",
      text: "Microwave Oven",
      text2: "From 5999",
      text3: "Don't Miss!",
    },
    // {
    //   image:
    //     "https://rukminim1.flixcart.com/image/200/200/xif0q/monitor/r/5/v/-original-imaggd38vfwc6h7v.jpeg?q=70",
    //   text: "Monitors",
    //   text2: "From 699",
    //   text3: "Acer",
    // },
  ];
  const first = [
    {
      image:
        "https://rukminim1.flixcart.com/flap/1000/1000/image/bf9c7eb4dfe3e778.jpg?q=50",
    },
    {
      image:
        "https://rukminim1.flixcart.com/flap/1000/1000/image/9123cc58a752f8f3.jpg?q=50",
    },
    {
      image:
        "https://rukminim1.flixcart.com/flap/1000/1000/image/89d5eee1f8f1e530.jpeg?q=50",
    },
  ];

  const Topdeals = [
    {
      image:
        "https://rukminim1.flixcart.com/image/200/200/kx50gi80/projector/r/9/p/zeb-pixa-play-12-5-6-dobly-audio-led-projector-zebronics-original-imag9z3yujqmzqt4.jpeg?q=70",
      text: "Projectors",
      text2: "Shop Now",
      text3: "ZEBRONICS",
    },
    {
      image:
        "https://rukminim1.flixcart.com/image/612/612/kpr8k280/smartwatch/k/a/s/bsw004-android-ios-fire-boltt-original-imag3wwbrtpdpg6g.jpeg?q=70",
      text: "Fire-Boltt Talk Bluetooth  Smartwatch ",
      text2: "Special Price",
      text3: "New",
    },
    {
      image:
        "https://rukminim1.flixcart.com/image/416/416/ktaeqvk0/sofa-sectional/3/7/r/right-facing-58-42-orange-198-12-polycotton-70-article02-eltop-original-imag6z6hwbpn9say.jpeg?q=70",
      text: "ELTOP Lifestyle L-Shape Fabric 6 Seater Sofa (Finish Color - Orange, DIY(Do-It-Yourself))",
      text2: "Extra 2250 Off",
      text3: "Best Seller",
    },

    {
      image:
        "https://rukminim1.flixcart.com/image/200/200/kynb6vk0/monitor/1/n/s/lf22t354fhwxxl-full-hd-22-lf22t354fhwxxl-samsung-original-imagats2rjbg9uhv.jpeg?q=70",
      text: "Monitors",
      text2: "From 9999",
      text3: "SAMSUNG",
    },

    {
      image:
        "https://rukminim1.flixcart.com/image/612/612/khp664w0-0/headphone/j/q/i/one-wireless-noise-original-imafxnq4yqp9qtzf.jpeg?q=70",
      text: "Noise One Wireless Bluetooth Headset ",
      text2: "Extra 100 Off",
      text3: "Special Price",
    },

    // {
    //   image:
    //     "https://rukminim1.flixcart.com/image/200/200/printer/j/j/y/hp-laserjet-m1005-multifunction-original-imadxhzpeb9qbrfg.jpeg?q=70",
    //   text: "Printers",
    //   text2: "From 3999",
    //   text3: "HP",
    // },
  ];

  const secccond = [
    {
      image:
        "https://rukminim1.flixcart.com/flap/1000/1000/image/5175bb37d0a7b179.jpg?q=50",
    },
    {
      image:
        "https://rukminim1.flixcart.com/flap/1000/1000/image/e776ee5c8ad1a40b.jpg?q=50",
    },
    {
      image:
        "https://rukminim1.flixcart.com/flap/1000/1000/image/c4c5331fefc5675e.jpg?q=50",
    },
  ];

  const Mobiles = [
    {
      image:
        "https://rukminim1.flixcart.com/image/312/312/kq18n0w0/mobile/u/w/b/narzo-30-rmx2156-realme-original-imag45ymfpry9ecq.jpeg?q=70",
      text: "realme Narzo 30 (Racing Silver, 64 GB) (6 GB RAM)",
      text2: "Extra 1500 Off",
      text3: "Best Seller!",
    },
    {
      image:
        "https://rukminim1.flixcart.com/image/312/312/k7assy80/mobile/5/y/n/iqoo-3-5g-i1928-original-imafpkhufxg7vzdj.jpeg?q=70",
      text: "IQOO 3 (5G) (Tornado Black, 256 GB)",
      text2: "Extra 1500 Off ",
      text3: "Grab Now!",
    },
    {
      image:
        "https://rukminim1.flixcart.com/image/312/312/ktketu80/mobile/z/r/x/iphone-13-mlph3hn-a-apple-original-imag6vzz4rt8t7gk.jpeg?q=70",
      text: "APPLE iPhone 13 (Pink, 128 GB)",
      text2: "Best Bank Offer",
      text3: "New Product",
    },
    {
      image:
        "https://rukminim1.flixcart.com/image/312/312/ktketu80/mobile/c/g/4/iphone-13-pro-max-mlll3hn-a-apple-original-imag6vpg3r7dyvhm.jpeg?q=70",
      text: "APPLE iPhone 13 Pro Max (Silver, 512 GB)",
      text2: "Extra 2000 Off ",
      text3: "Grab Now!",
    },

    //       { image:"https://rukminim1.flixcart.com/image/312/312/ku4ezrk0/mobile/u/z/i/x70-pro-v2105-vivo-original-imag7bq4eumqhgka.jpeg?q=70",
    //     text:"vivo X70 Pro (Cosmic Black, 256 GB) (12 GB RAM)",
    // text2:"Extra Rs. 1500 Off",
    // text3:"Grab Now!"}
  ];

  const thirrrd = [
    {
      image:
        "https://rukminim1.flixcart.com/flap/1000/1000/image/f40f2aeeeaffb5c8.jpeg?q=50",
    },
    {
      image:
        "https://rukminim1.flixcart.com/flap/1000/1000/image/8ad9432b231a6ff2.jpeg?q=50",
    },
    {
      image:
        "https://rukminim1.flixcart.com/flap/1000/1000/image/e44a19df21425913.jpeg?q=50",
    },
  ];

  const featureone = [
    {
      image:
        "https://rukminim1.flixcart.com/flap/1000/1000/image/41f775cacaf178cd.jpeg?q=50",
    },
    {
      image:
        "https://rukminim1.flixcart.com/flap/1000/1000/image/6436a0e43e0113c5.jpeg?q=50",
    },
    {
      image:
        "https://rukminim1.flixcart.com/flap/1000/1000/image/3de3f47fa1a24923.jpeg?q=50",
    },
    {
      image:
        "https://rukminim1.flixcart.com/flap/1000/1000/image/41f775cacaf178cd.jpeg?q=50",
    },
    {
      image:
        "https://rukminim1.flixcart.com/flap/1000/1000/image/84696bdfa542c3ac.jpeg?q=50",
    },
    {
      image:
        "https://rukminim1.flixcart.com/flap/1000/1000/image/7b68ba8d190bac14.jpeg?q=50",
    },
  ];

  const Electronics = [
    {
      image:
        "https://rukminim1.flixcart.com/image/312/312/kbs9k7k0/television/c/j/3/samsung-ua32t4340akxxl-original-imaft25qdysfsq7k.jpeg?q=70",
      text: "SAMSUNG 80 cm (32 inch)  LED Smart TV ",
      text2: "Extra 1000 off",
      text3: "Grab Now!",
    },
    {
      image:
        "https://rukminim1.flixcart.com/image/612/612/kpr8k280/smartwatch/k/a/s/bsw004-android-ios-fire-boltt-original-imag3wwbrtpdpg6g.jpeg?q=70",
      text: "Fire-Boltt Talk Bluetooth  Smartwatch ",
      text2: "Special Price",
      text3: "New",
    },
    {
      image:
        "https://rukminim1.flixcart.com/image/612/612/khp664w0-0/headphone/j/q/i/one-wireless-noise-original-imafxnq4yqp9qtzf.jpeg?q=70",
      text: "Noise One Wireless Bluetooth Headset ",
      text2: "Extra 100 Off",
      text3: "Special Price",
    },
    {
      image:
        "https://rukminim1.flixcart.com/image/312/312/kp5sya80/screen-guard/tempered-glass/o/v/n/apple-macbook-air-m1-13-3-inch-lightwings-original-imag3gh5xftgbpg3.jpeg?q=70",
      text: "APPLE MacBook Air M1 - 8 GB/256 GB SSD/Mac ",
      text2: "Extra 2000 Off",
      text3: "Best Seller",
    },
    {
      image:
        "https://rukminim1.flixcart.com/image/312/312/kqidx8w0/television/m/1/v/32ha0a00-oneplus-original-imag4gy8yezxdhen.jpeg?q=70",
      text: "OnePlus Y Series 80 cm (32 inch) LED Smart Android TV ",
      text2: "Extra 1000 Off",
      text3: "Grab Now",
    },
    //  {
    //    image:
    //      "https://rukminim1.flixcart.com/image/312/312/ku4ezrk0/computer/f/n/g/na-thin-and-light-laptop-asus-original-imag7bh6qmjxyqyt.jpeg?q=70",
    //    text: "ASUS VivoBook Ultra 14 Core i5 10th Gen",
    //    text2: "Extra 4000 Off",
    //    text3: "Best Seller",
    //  },
  ];

  const fourthhh = [
    {
      image:
        "https://rukminim1.flixcart.com/flap/1000/1000/image/2a7f67fc8476bec7.jpeg?q=50",
    },
    {
      image:
        "https://rukminim1.flixcart.com/flap/1000/1000/image/02f31191fe477de3.jpg?q=50",
    },
    {
      image:
        "https://rukminim1.flixcart.com/flap/1000/1000/image/5d7822bf05bdce34.jpg?q=50",
    },
  ];

  const Apliances = [
    {
      image:
        "https://rukminim1.flixcart.com/image/416/416/ku2zjww0/washing-machine-new/g/w/r/serena-aqua-sx-ldt-7-0-kg-ifb-original-imag7agaqkzg6f4g.jpeg?q=70",
      text: "IFB 7 kg Aqua Energie, Self Diagnosis Fully Automatic Front Load with In-built Heater Silver (Serena Aqua Sx LDT 7.0 KG)",
      text2: "Best Bank Offers",
      text3: "Best Seller",
    },
    {
      image:
        "https://rukminim1.flixcart.com/image/312/312/k4ss2a80/refrigerator-new/j/w/v/rr21t2h2wcu-hl-5-samsung-original-imafnmkbyzev8szv.jpeg?q=70",
      text: "SAMSUNG 198 L Direct Cool Single Door 5 Star Refrigerator",
      text2: "Extra 1500 Off",
      text3: "Best Seller",
    },
    {
      image:
        "https://rukminim1.flixcart.com/image/416/416/kyag87k0/microwave-new/d/x/3/-original-imagak6gxhykfkjy.jpeg?q=70",
      text: "IFB 23 L Convection Microwave Oven (23SC3, Silver)",
      text2: "Best Bank Offers",
      text3: "Best Seller",
    },
    {
      image:
        "https://rukminim1.flixcart.com/image/416/416/kksmikw0/air-conditioner-new/0/m/e/1-5t-magicool-pro-5s-copr-inv-split-inverter-whirlpool-original-imagy25utwj6jgg7.jpeg?q=70",
      text: "Whirlpool 1.5 Ton 5 Star Split Inverter AC ",
      text2: "Extra 1000 Off",
      text3: "Treading",
    },
    {
      image:
        "https://rukminim1.flixcart.com/image/416/416/kx9as280/water-geyser/e/2/a/-original-imag9qwbpd7zhhkd.jpeg?q=70",
      text: "Hindware 15 L Storage Water Geyser (ACERO NEO, White)",
      text2: "Extra 600 Off",
      text3: "Best Seller",
    },
    // {
    //   image:
    //     "https://rukminim1.flixcart.com/image/312/312/ko8xtow0/refrigerator-new/u/1/y/gl-s292rdsx-3-2021-lg-original-imag2r627atse8ph.jpeg?q=70",
    //   text: "LG 260 L Frost Free Double Door Top Mount 3 Star Convertible Refrigerator ",
    //   text2: "Extra 3000 Off",
    //   text3: "Treading",
    // },
  ];

  const fifthhh = [
    {
      image:
        "https://rukminim1.flixcart.com/flap/1000/1000/image/fda0d9fac84f44b2.jpg?q=50",
    },
    {
      image:
        "https://rukminim1.flixcart.com/flap/1000/1000/image/f54b25685a57e491.jpg?q=50",
    },
    {
      image:
        "https://rukminim1.flixcart.com/flap/1000/1000/image/4a362bb3cdbee37d.jpeg?q=50",
    },
  ];

  const featuretwo = [
    {
      image:
        "https://rukminim1.flixcart.com/flap/1000/1000/image/a37bf7df0fcacc94.jpeg?q=50",
    },
    {
      image:
        "https://rukminim1.flixcart.com/flap/1000/1000/image/b267da4dbf95da06.jpeg?q=50",
    },
    {
      image:
        "https://rukminim1.flixcart.com/flap/1000/1000/image/1e1178e8146d1cde.jpeg?q=50",
    },
    {
      image:
        "https://rukminim1.flixcart.com/flap/1000/1000/image/acc80e60602c6542.jpeg?q=50",
    },
    {
      image:
        "https://rukminim1.flixcart.com/flap/1000/1000/image/e72b16f6508a1444.jpeg?q=50",
    },
    {
      image:
        "https://rukminim1.flixcart.com/flap/1000/1000/image/18f398d652bdb15c.jpeg?q=50",
    },
  ];

  const Furniture = [
    {
      image:
        "https://rukminim1.flixcart.com/image/416/416/kvifekw0/bed/e/j/r/king-221-5-na-no-particle-board-192-yes-135-mrivakbwnt-nilkamal-original-imag8e9pz4bczrht.jpeg?q=70",
      text: "Nilkamal RIVA Engineered Wood King Box Bed",
      text2: "Extra 2520 Off",
      text3: "Best Seller",
    },
    {
      image:
        "https://rukminim1.flixcart.com/image/416/416/kqzj7gw0/bed/b/n/y/single-na-wrought-iron-no-folding-bed-with-6inches-mattress-original-imag4uwfkggxmtay.jpeg?q=70",
      text: "Springtek Folding Rollaway Bed with 6 inches Mattress Metal Single Bed",
      text2: "Extra 1280 Off ",
      text3: "Treading",
    },
    {
      image:
        "https://rukminim1.flixcart.com/image/416/416/kdkkdjk0/recliner/j/b/k/brown-leatherette-costello-dk-brown-flipkart-perfect-homes-original-imafug5djmguadgm.jpeg?q=70",
      text: "Flipkart Perfect Homes Costello Leatherette Manual Recliner ",
      text2: "Bank Offers",
      text3: "Treading",
    },
    {
      image:
        "https://rukminim1.flixcart.com/image/416/416/k6pd7680/wardrobe-closet/z/k/w/particle-board-fk6007-flipkart-perfect-homes-espresso-original-imafp3pkghaf82tn.jpeg?q=70",
      text: "Flipkart Perfect Homes Julian Engineered Wood 4 Door Wardrobe ",
      text2: "Extra 1100 Off ",
      text3: "Best Seller",
    },

    //   { image:"https://rukminim1.flixcart.com/image/416/416/ktaeqvk0/sofa-sectional/3/7/r/right-facing-58-42-orange-198-12-polycotton-70-article02-eltop-original-imag6z6hwbpn9say.jpeg?q=70",
    //     text:"ELTOP Lifestyle L-Shape Fabric 6 Seater Sofa ",
    //  text2:"Extra 2250 Off",
    //   text3:"Best Seller"}
  ];

  return (
    <>
      {/* <Box mt={12}>
        <Image
          w={"100%"}
          src="https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2022/09/fk-iphones.jpg?ssl=1"
          alt="err"
        />
      </Box> */}
      <HStack mt={5}>
        <Image
          src="https://rukminim1.flixcart.com/flap/4000/576/image/e69d03a985bed59b.jpg"
          alt="err"
        />
      </HStack>

      <SimpleGrid
        w="full"
        columns={{ base: 2, sm: 4, md: 5, lg: 6 }}
        spacing={5}
      >
        <VStack justifyContent="center" alignItems={"center"}>
          <Text as={"b"}>Top Offers</Text>
          <Button backgroundColor={"#2874f0"} color="white" px="6">
            View All
          </Button>
        </VStack>
        {TopOffers?.map((el, i) => (
          <VStack mt={12} w={"full"} key={i}>
            <Image w="100%" src={el.image} alt="err" />
            <Text fontSize={"sm"} fontWeight="bold">
              {el.text}
            </Text>
            <Text color={"green.400"} fontWeight="semibold" fontSize={"md"}>
              {el.text2}
            </Text>
            <Text color={"gray.500"} fontSize={"sm"}>
              {el.text3}
            </Text>
          </VStack>
        ))}
      </SimpleGrid>

      <SimpleGrid w="full" columns={3} spacing={5}>
        {first?.map((el, i) => (
          <VStack mt={12} w={"full"} key={i}>
            <Image w="100%" src={el.image} alt="err" />
          </VStack>
        ))}
      </SimpleGrid>

      <SimpleGrid w="full" columns={6} spacing={5}>
        <VStack justifyContent="center" alignItems={"center"}>
          <Text as={"b"}>Top Deals</Text>
          <Button backgroundColor={"#2874f0"} color="white" px="6">
            View All
          </Button>
        </VStack>
        {Topdeals?.map((el, i) => (
          <VStack mt={12} w={"full"} key={i}>
            <Image w="150" h="150" src={el.image} alt="err" />
            <Text fontSize={"sm"} fontWeight="bold">
              {el.text}
            </Text>
            <Text color={"green.400"} fontWeight="semibold" fontSize={"md"}>
              {el.text2}
            </Text>
            <Text color={"gray.500"} fontSize={"sm"}>
              {el.text3}
            </Text>
          </VStack>
        ))}
      </SimpleGrid>

      <SimpleGrid w="full" columns={3} spacing={5}>
        {secccond?.map((el, i) => (
          <VStack mt={12} w={"full"} key={i}>
            <Image w="100%" src={el.image} alt="err" />
          </VStack>
        ))}
      </SimpleGrid>

      <SimpleGrid w="full" columns={5} spacing={5}>
        <VStack justifyContent="center" alignItems={"center"}>
          <Text as={"b"}>Mobiles</Text>
          {/* <Button backgroundColor={'#2874f0'} color='white' px='6' onClick={()=>navigate("/products/phones")} >View All</Button> */}
        </VStack>
        {Mobiles?.map((el, i) => (
          <VStack mt={12} w={"full"} key={i}>
            <Image w="100px" height={"180px"} src={el.image} alt="err" />
            <Text fontSize={"sm"} fontWeight="bold">
              {el.text}
            </Text>
            <Text color={"green.400"} fontWeight="semibold" fontSize={"md"}>
              {el.text2}
            </Text>
            <Text color={"gray.500"} fontSize={"sm"}>
              {el.text3}
            </Text>
          </VStack>
        ))}
      </SimpleGrid>

      <SimpleGrid w="full" columns={3} spacing={5}>
        {thirrrd?.map((el, i) => (
          <VStack mt={12} w={"full"} key={i}>
            <Image w="100%" src={el.image} alt="err" />
          </VStack>
        ))}
      </SimpleGrid>

      <SimpleGrid w="full" columns={6} spacing={5}>
        {featureone?.map((el, i) => (
          <VStack mt={12} w={"full"} key={i}>
            <Image w="100%" src={el.image} alt="err" />
          </VStack>
        ))}
      </SimpleGrid>

      <SimpleGrid w="full" columns={6} spacing={5}>
        <VStack justifyContent="center" alignItems={"center"}>
          <Text as={"b"}>Electronics</Text>
          {/* <Button backgroundColor={'#2874f0'} color='white' px='6' onClick={()=>navigate("/products/laptops")} >View All</Button> */}
        </VStack>
        {Electronics?.map((el, i) => (
          <VStack mt={12} w={"full"} key={i}>
            <Image w="150" h="150" src={el.image} alt="err" />
            <Text fontSize={"sm"} fontWeight="bold">
              {el.text}
            </Text>
            <Text color={"green.400"} fontWeight="semibold" fontSize={"md"}>
              {el.text2}
            </Text>
            <Text color={"gray.500"} fontSize={"sm"}>
              {el.text3}
            </Text>
          </VStack>
        ))}
      </SimpleGrid>

      <SimpleGrid w="full" columns={3} spacing={5}>
        {fourthhh?.map((el, i) => (
          <VStack mt={12} w={"full"} key={i}>
            <Image w="100%" src={el.image} alt="err" />
          </VStack>
        ))}
      </SimpleGrid>

      <SimpleGrid w="full" columns={6} spacing={5}>
        <VStack justifyContent="center" alignItems={"center"}>
          <Text as={"b"}>Apliances</Text>
          <Button backgroundColor={"#2874f0"} color="white" px="6">
            View All
          </Button>
        </VStack>
        {Apliances?.map((el, i) => (
          <VStack mt={12} w={"full"} key={i}>
            <Image w="150" h="150" src={el.image} alt="err" />
            <Text fontSize={"sm"} fontWeight="bold">
              {el.text}
            </Text>
            <Text color={"green.400"} fontWeight="semibold" fontSize={"md"}>
              {el.text2}
            </Text>
            <Text color={"gray.500"} fontSize={"sm"}>
              {el.text3}
            </Text>
          </VStack>
        ))}
      </SimpleGrid>

      <SimpleGrid w="full" columns={3} spacing={5}>
        {fifthhh?.map((el, i) => (
          <VStack mt={12} w={"full"} key={i}>
            <Image w="100%" src={el.image} alt="err" />
          </VStack>
        ))}
      </SimpleGrid>

      <SimpleGrid w="full" columns={6} spacing={5}>
        {featuretwo?.map((el, i) => (
          <VStack mt={12} w={"full"} key={i}>
            <Image w="100%" src={el.image} alt="err" />
          </VStack>
        ))}
      </SimpleGrid>

      <SimpleGrid w="full" columns={5} spacing={10}>
        <VStack justifyContent="center" alignItems={"center"}>
          <Text as={"b"}>Furniture</Text>
          <Button backgroundColor={"#2874f0"} color="white" px="6">
            View All
          </Button>
        </VStack>

        {Furniture?.map((el, i) => (
          <VStack mt={12} w={"full"} key={i}>
            <Image w="150" h="150" src={el.image} alt="err" />
            <Text fontSize={"sm"} fontWeight="bold">
              {el.text}
            </Text>
            <Text color={"green.400"} fontWeight="semibold" fontSize={"md"}>
              {el.text2}
            </Text>
            <Text color={"gray.500"} fontSize={"sm"}>
              {el.text3}
            </Text>
          </VStack>
        ))}
      </SimpleGrid>
    </>
  );
};

export default Header;
