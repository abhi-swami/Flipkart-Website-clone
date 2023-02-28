import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} mb={2} color={"gray"} fontSize={"12px"}>
      {children}
    </Text>
  );
};
const NewFooter = () => {
  return (
    <Box
      fontFamily={"Roboto,Arial, sans-serif"}
      fontSize="12px"
      lineHeight={"16.9px"}
      width="100%"
      margin={"auto"}
    >
      <Box width={"95%"} margin={"auto"}>
        <Text marginTop={"5px"}>
          <span
            style={{
              textTransform: "uppercase",
              fontWeight: "700",
              color: "gray",
              fontSize: "14px",
              lineHeight: "19.6px",
            }}
          >
            Top Stories:{" "}
          </span>{" "}
          Brand Directory
        </Text>
        <Text marginTop={"5px"} cursor="pointer">
          <span
            style={{
              textTransform: "uppercase",
              fontWeight: "700",
              color: "gray",
              fontSize: "13px",
              lineHeight: "19.6px",
              cursor: "none",
            }}
          >
            MOST SEARCHED FOR ON FLIPKART:{" "}
          </span>{" "}
          Flipkart Axis Bank Super Elite Credit card | Primebook Laptops |
          Bounce Infinity E1Buy Laptop on EMI | Infinix Zero Book Ultra | OPPO
          Reno8 5G | OPPO Reno8 Pro 5G | Fresh Flower Bouquet | Holi Hampers |
          Holi Gifts | Bouquet | Oneplus Monitors | Sell Old Mobile Phones |
          Premium Laptops | Electronics StorePhone cover | Infinix IN | Book Y1
          Plus | Okaya Electric Vehiclesbgauss electric scooter | OPPO Reno7 Pro
          5G | iPhone 13 | iPhone 13 Pro | iPhone 13 Pro Maxi | Phone 13 Mini |
          Google Pixel 6a covers | Flipkart Quick | Ampere Magnus | Flipkart
          Help Centre | Online Boat Store | Covers from Rs 99 | Flipkart Track
          Orders | Flipkart Manage Orders | Flipkart Return Orders | Flipkart
          Gift Cards Store | Flipkart Axis Bank Credit Card | Flipkart Pay Later
        </Text>
        <Text marginTop={"5px"} cursor="pointer">
          <span
            style={{
              textTransform: "uppercase",
              fontWeight: "700",
              color: "gray",
              fontSize: "13px",
              lineHeight: "19.6px",
              cursor: "none",
            }}
          >
            MOBILES:
          </span>
          iPhone 12 64GB | iPhone 12 Pro 512GB | iPhone 12 128GB | Vivo Y91i |
          Vivo Y11 | Vivo Y15 | Vivo Y50 | Vivo Y12 | Reno2 F | Oppo A12 | Oppo
          F15 | Oppo A31 | Samsung A71 | Samsung A51 | Samsung A31 | Realme X2 |
          iPhone 11 | iPhone 11 Pro | Mobile Cover | Mobile Offers | iphone x4G
          Mobile | Nokia Mobile | Samsung Mobile | iphone | Oppo Mobile | Vivo
          Mobile
        </Text>
        <Text marginTop={"5px"} cursor="pointer">
          <span
            style={{
              textTransform: "uppercase",
              fontWeight: "700",
              color: "gray",
              fontSize: "13px",
              lineHeight: "19.6px",
              cursor: "none",
            }}
          >
            CAMERA:
          </span>
          Go | Pro Action Camera | Nikon Camera | Canon Camera | Sony Camera |
          Canon DSLR | Nikon DSLR
        </Text>
        <Text marginTop={"5px"} cursor="pointer">
          <span
            style={{
              textTransform: "uppercase",
              fontWeight: "700",
              color: "gray",
              fontSize: "13px",
              lineHeight: "19.6px",
              cursor: "none",
            }}
          >
            LAPTOPS:
          </span>
          MacBook Pro M2 | Premium Laptop | acer Ryzen 3 Dual Core 3250U - (8
          GB/256 GB SSD/Windows 11 Home) Z2-493 Thin and Light Laptop | ASUS
          Vivobook S14 OLED (2022)ASUS Zenbook 14 OLED (2022)Realme Book Prime
          Core i5 11th Gen | Microsoft Surface Go Pentium 128GB | Branded
          Laptops | Apple Laptops | Acer Laptops | Lenovo Laptops | Dell Laptops
          | Asus Laptops | HP Laptops | Gaming Laptops | 2 in 1 Laptops |
          LaptopsDell latest laptops 2022HP latest laptops 2022 | Infinix IN |
          Book Y1 Plus | Microsoft Laptops | 12th Gen Intel Core Laptops
        </Text>
        <Text marginTop={"5px"} cursor="pointer">
          <span
            style={{
              textTransform: "uppercase",
              fontWeight: "700",
              color: "gray",
              fontSize: "13px",
              lineHeight: "19.6px",
              cursor: "none",
            }}
          >
            TVS:
          </span>
          Nokia TV | Panasonic TV | Thomson TV | Vu TV | Realme TV | Motorola TV
          | OnePlus TVs | LG TV | TV | Sony TV | Samsung TV | Android Television
          | Iffalcon Tv | Mi TV
        </Text>
        <Text marginTop={"5px"} cursor="pointer">
          <span
            style={{
              textTransform: "uppercase",
              fontWeight: "700",
              color: "gray",
              fontSize: "13px",
              lineHeight: "19.6px",
              cursor: "none",
            }}
          >
            LARGE APPLIANCES:
          </span>
          TV & Appliances End of Season Sale | Television | Washing Machines |
          Refrigerators | Air Conditioners | Electric Cookers | Electric
          Jug(Heater) / Travel Kettles | Induction Cooktops | Inverters /
          stabilizerIrons / Iron Box | Mixer Grinder Juicer | Wet Grinders |
          Chimneys | Microwave Ovens | Vacuum Cleaners | Water Purifier |
          FanMarQ Customer Care
        </Text>
        <Text marginTop={"5px"} cursor="pointer">
          <span
            style={{
              textTransform: "uppercase",
              fontWeight: "700",
              color: "gray",
              fontSize: "13px",
              lineHeight: "19.6px",
              cursor: "none",
            }}
          >
            CLOTHING:
          </span>
          Men Shirts | Kurta Pajama | KurtasMen T-Shirts | JeansSaree | Dresses
          | Kids Dresses | Designer Salwar Suits | BraDesigner Kurtis | Track
          Pant | Men Kurtas | Gym Wear | Party Dresses | Palazzo Suits | Boys
          Clothing | Gloves | Nighty | Maxi Dresses | Anarkali | Gowns |
          Culottes | Salwar Suits | Kurtis | Designer Sarees | Leggings | Shorts
          | Georgette Sarees | Ethnic Wear | Briefs & Trunks | Nike Watches |
          Ascot Tie | Corset Tops Tunics | Leather PU Skirts | Corset tops
          camisoles | Women magenta earringsNo collar jackets | Green dress
          material | Black patiala kurta setMen camel shoes casual | Black
          pathani | Tassel Sarees | Khaki dresses | Kids formal dresses | Mauve
          shirts | Women henleyuppada pattu sarees | Leopard dresses |
          Sleeveless shrugs
        </Text>
        <Text marginTop={"5px"} cursor="pointer">
          <span
            style={{
              textTransform: "uppercase",
              fontWeight: "700",
              color: "gray",
              fontSize: "13px",
              lineHeight: "19.6px",
              cursor: "none",
            }}
          >
            FOOTWEAR:
          </span>
          Shoes | Adidas Shoes | Reebok Shoes | Nike Shoes | Puma Shoes | Boots
          | Bata Shoes | Woodland Shoes | Skechers Shoes | Sneakers | Womens
          Boots | Sports Shoes | Loafers | Sandals | Lotto Sports Shoes | Casual
          Shoes | Womens Skechers Shoes | Asics Sports Shoes | Formal Shoes |
          School Shoes
        </Text>
        <Text marginTop={"5px"} cursor="pointer">
          <span
            style={{
              textTransform: "uppercase",
              fontWeight: "700",
              color: "gray",
              fontSize: "13px",
              lineHeight: "19.6px",
              cursor: "none",
            }}
          >
            GROCERIES:
          </span>
          Phone | Pe Grocery Voucher | Hand Wash | Soap | Cashew Nuts |
          Sunflower Oil | Eggs | Toilet Cleaner | Harpic Toilet Cleaner | Dettol
          Soap | Mustard Oil | Biscuits | Cheese | Patanjali Atta | Fortune Oil
          | Aashirvaad Atta | Tea
        </Text>
        <Text marginTop={"5px"} cursor="pointer">
          <span
            style={{
              textTransform: "uppercase",
              fontWeight: "700",
              color: "gray",
              fontSize: "13px",
              lineHeight: "19.6px",
              cursor: "none",
            }}
          >
            BEST{" "}
          </span>
          SELLING ON FLIPKART:Fire-Boltt Ninja Calling Pro Bluetooth Calling
          Smartwatch 1.69 inch HD Display Smartwatch | Best Gas Geyser | Kitchen
          Geyser | Nutri Blenders | Portable Air Cooler | Best Air Cooler | Bags
          | Hitachi Refrigerator 3 DoorBooks | Toys | Candles | Helmets | Wall
          Clocks | Baby Food | Chocolates | Cycles | Calculators | Lipsticks |
          Mask | Vertiv UPS | Fastrack Watches | Wallets | Earrings | Gold Coins
          | Realme Pad Mini | Handbagsconekt SW2 Smartwatch | Mivi Duo | Pods
          a350 | Speaker Cleaner
        </Text>
        <Text marginTop={"5px"} cursor="pointer">
          <span
            style={{
              textTransform: "uppercase",
              fontWeight: "700",
              color: "gray",
              fontSize: "13px",
              lineHeight: "19.6px",
              cursor: "none",
            }}
          >
            FURNITURE:
          </span>
          Furniture | Sofas | Beds | Dining sets | Wardrobes | Mattresses | TV
          Units | Tables | Chairs | Shelves | Bean Bags | Office Chairs |
          Computer Table | Office Tables | Red Sofa | Wakefit BedsWhite Sofa |
          Wakefit Mattress | Green Sofa | Black Sofa | Brown Sofa
        </Text>
        <Text marginTop={"5px"} cursor="pointer">
          <span
            style={{
              textTransform: "uppercase",
              fontWeight: "700",
              color: "gray",
              fontSize: "13px",
              lineHeight: "19.6px",
              cursor: "none",
            }}
          >
            BGMH:
          </span>
          Whey Protein | Homeopathy | Bounce Infinity | Valentine Gift for
          Boyfriend | Valentine Gift for Girlfriend | Valentines Day Gifts |
          Christmas Gifts | Calendar 2023 | Online Guitar | Books Store |
          Musical Instrument Store | Dabur Chyawanprash | Baidyanath
          Chyawanprash | Energy Drinks | ToysMilk Drink Mixes | Rakhi |
          Chyawanprash | Indian Flag | Protein Supplements
        </Text>

        <Box marginTop={"40px"}>
          <Heading fontSize={"15px"} color={"blackAlpha.800"}>
            Flipkart: The One-stop Shopping Destination
          </Heading>
          <Text>
            E-commerce is revolutionizing the way we all shop in India. Why do
            you want to hop from one store to another in search of the latest
            phone when you can find it on the Internet in a single click? Not
            only mobiles. Flipkart houses everything you can possibly imagine,
            from trending electronics like laptops, tablets, smartphones, and
            mobile accessories to in-vogue fashion staples like shoes, clothing
            and lifestyle accessories; from modern furniture like sofa sets,
            dining tables, and wardrobes to appliances that make your life easy
            like washing machines, TVs, ACs, mixer grinder juicers and other
            time-saving kitchen and small appliances; from home furnishings like
            cushion covers, mattresses and bedsheets to toys and musical
            instruments, we got them all covered. You name it, and you can stay
            assured about finding them all here. For those of you with erratic
            working hours, Flipkart is your best bet. Shop in your PJs, at night
            or in the wee hours of the morning. This e-commerce never shuts
            down.
          </Text>
          <Text marginTop={"20px"}>
            What's more, with our year-round shopping festivals and events, our
            prices are irresistible. We're sure you'll find yourself picking up
            more than what you had in mind. If you are wondering why you should
            shop from Flipkart when there are multiple options available to you,
            well, the below will answer your question.
          </Text>
          <Heading fontSize={"15px"} color={"blackAlpha.800"} marginTop="5">
            Flipkart Plus
          </Heading>
          <Text>
            A world of limitless possibilities awaits you - Flipkart Plus was
            kickstarted as a loyalty reward programme for all its regular
            customers at zero subscription fee. All you need is 500 supercoins
            to be a part of this service. For every 100 rupees spent on Flipkart
            order, Plus members earns 4 supercoins & non-plus members earn 2
            supercoins. Free delivery, early access during sales and shopping
            festivals, exchange offers and priority customer service are the top
            benefits to a Flipkart Plus member. In short, earn more when you
            shop more!
          </Text>
          <Text marginTop={"20px"}>
            What's more, you can even use the Flipkart supercoins for a number
            of exciting services, like:
          </Text>
          <Text>An annual Zomato Gold membership</Text>
          <Text>An annual Hotstar Premium membership</Text>
          <Text>6 months Gaana plus subscription</Text>
          <Text>Rupees 550 instant discount on flights on ixigo</Text>
          <Text>
            Check out https://www.flipkart.com/plus/all-offers for the entire
            list. Terms and conditions apply.
          </Text>
          <Heading fontSize={"15px"} color={"blackAlpha.800"} marginTop="5">
            No Cost EMI
          </Heading>
          <Text>
            In an attempt to make high-end products accessible to all, our No
            Cost EMI plan enables you to shop with us under EMI, without
            shelling out any processing fee. Applicable on select mobiles,
            laptops, large and small appliances, furniture, electronics and
            watches, you can now shop without burning a hole in your pocket. If
            you've been eyeing a product for a long time, chances are it may be
            up for a no cost EMI. Take a look ASAP! Terms and conditions apply.
          </Text>
          <Heading fontSize={"15px"} color={"blackAlpha.800"} marginTop="5">
            EMI on Debit Cards
          </Heading>
          <Text>
            Did you know debit card holders account for 79.38 crore in the
            country, while there are only 3.14 crore credit card holders? After
            enabling EMI on Credit Cards, in another attempt to make online
            shopping accessible to everyone, Flipkart introduces EMI on Debit
            Cards, empowering you to shop confidently with us without having to
            worry about pauses in monthly cash flow. At present, we have
            partnered with Axis Bank, HDFC Bank, State Bank of India and ICICI
            Bank for this facility. More power to all our shoppers! Terms and
            conditions apply.
          </Text>
          <Heading fontSize={"15px"} color={"blackAlpha.800"} marginTop="5">
            Mobile Exchange Offers
          </Heading>
          <Text>
            Get an instant discount on the phone that you have been eyeing on.
            Exchange your old mobile for a new one after the Flipkart experts
            calculate the value of your old phone, provided it is in a working
            condition without damage to the screen. If a phone is applicable for
            an exchange offer, you will see the 'Buy with Exchange' option on
            the product description of the phone. So, be smart, always opt for
            an exchange wherever possible. Terms and conditions apply.
          </Text>
          <Heading fontSize={"15px"} color={"blackAlpha.800"} marginTop="5">
            What Can You Buy From Flipkart?
          </Heading>
          <Heading fontSize={"15px"} color={"blackAlpha.800"} marginTop="2">
            Mobile Phones
          </Heading>
          <Text>
            From budget phones to state-of-the-art smartphones, we have a mobile
            for everybody out there. Whether you're looking for larger, fuller
            screens, power-packed batteries, blazing-fast processors,
            beautification apps, high-tech selfie cameras or just large internal
            space, we take care of all the essentials. Shop from top brands in
            the country like Samsung, Apple, Oppo, Xiaomi, Realme, Vivo, and
            Honor to name a few. Rest assured, you're buying from only the most
            reliable names in the market. What's more, with Flipkart's Complete
            Mobile Protection Plan, you will never again find the need to run
            around service centres. This plan entails you to a number of
            post-purchase solutions, starting at as low as Rupees 99 only!
            Broken screens, liquid damage to phone, hardware and software
            glitches, and replacements - the Flipkart Complete Mobile Protection
            covers a comprehensive range of post-purchase problems, with
            door-to-door services.
          </Text>
          <Heading fontSize={"15px"} color={"blackAlpha.800"} marginTop="5">
            Electronic Devices and Accessories
          </Heading>
          <Text>
            When it comes to laptops, we are not far behind. Filter among dozens
            of super-fast operating systems, hard disk capacity, RAM, lifestyle,
            screen size and many other criterias for personalized results in a
            flash. All you students out there, confused about what laptop to
            get? Our Back To College Store segregates laptops purpose wise
            (gaming, browsing and research, project work, entertainment, design,
            multitasking) with recommendations from top brands and industry
            experts, facilitating a shopping experience that is quicker and
            simpler.
          </Text>
          <Text marginTop={"10px"}>
            Photography lovers, you couldn't land at a better page than ours.
            Cutting-edge DSLR cameras, ever reliable point-and-shoot cameras,
            millennial favourite instant cameras or action cameras for adventure
            junkies: our range of cameras is as much for beginners as it is for
            professionals. Canon, Nikon, GoPro, Sony, and Fujifilm are some big
            names you'll find in our store. Photography lovers, you couldn't
            land at a better page than ours. Cutting-edge DSLR cameras, ever
            reliable point-and-shoot cameras, millennial favourite instant
            cameras or action cameras for adventure junkies: our range of
            cameras is as much for beginners as it is for professionals. Canon,
            Nikon, GoPro, Sony, and Fujifilm are some big names you'll find in
            our store.
          </Text>
          <Text marginTop={"10px"}>
            Turn your home into a theatre with a stunning surround sound system.
            Choose from our elaborate range of Sony home theatres, JBL soundbars
            and Philips tower speakers for an experience to remember.
          </Text>
          <Text marginTop={"10px"}>
            How about jazzing up your phone with our quirky designer cases and
            covers? Our wide-ranging mobile accessories starting from
            headphones, power banks, memory cards, mobile chargers, to selfie
            sticks can prove to be ideal travel companions for you and your
            phone; never again worry about running out of charge or memory on
            your next vacation.
          </Text>
          <Heading fontSize={"15px"} color={"blackAlpha.800"} marginTop="5">
            Large Appliances
          </Heading>
          <Text>
            Sleek TVs, power-saving refrigerators, rapid-cooling ACs,
            resourceful washing machines - discover everything you need to run a
            house under one roof. Our Dependable TV and Appliance Store ensures
            zero transit damage, with a replacement guarantee if anything goes
            wrong; delivery and installation as per your convenience and a
            double warranty (Official Brand Warranty along with an extended
            Flipkart Warranty) - rest assured, value for money is what is
            promised and delivered. Shop from market leaders in the country like
            Samsung, LG, Whirlpool, Midea, Mi, Vu, Panasonic, Godrej, Sony,
            Daikin, and Hitachi among many others.
          </Text>
          <Heading fontSize={"15px"} color={"blackAlpha.800"} marginTop="5">
            Small Home Appliances
          </Heading>
          <Text>
            Find handy and practical home appliances designed to make your life
            simpler: electric kettles, OTGs, microwave ovens, sandwich makers,
            hand blenders, coffee makers, and many more other time-saving
            appliances that are truly crafted for a quicker lifestyle. Live life
            king size with these appliances at home.
          </Text>
          <Heading fontSize={"15px"} color={"blackAlpha.800"} marginTop="5">
            Lifestyle
          </Heading>
          <Text>
            Flipkart, 'India ka Fashion Capital', is your one-stop fashion
            destination for anything and everything you need to look good. Our
            exhaustive range of Western and Indian wear, summer and winter
            clothing, formal and casual footwear, bridal and artificial
            jewellery, long-lasting make-up, grooming tools and accessories are
            sure to sweep you off your feet. Shop from crowd favourites like
            Vero Moda, Forever 21, Only, Arrow, Woodland, Nike, Puma, Revlon,
            Mac, and Sephora among dozens of other top-of-the-ladder names. From
            summer staple maxi dresses, no-nonsense cigarette pants, traditional
            Bandhani kurtis to street-smart biker jackets, you can rely on us
            for a wardrobe that is up to date. Explore our in-house brands like
            Metronaut, Anmi, and Denizen, to name a few, for carefully curated
            designs that are the talk of the town. Get ready to be spoiled for
            choice.Festivals, office get-togethers, weddings, brunches, or
            nightwear - Flipkart will have your back each time.
          </Text>
          <Heading fontSize={"15px"} color={"blackAlpha.800"} marginTop="5">
            Home and Furniture
          </Heading>
          <Text>
            Moving to a new place is never easy, especially if you're buying new
            furniture. Beds, sofa sets, dining tables, wardrobes, and TV units -
            it's not easy to set up everything again. With the hundreds of
            options thrown at you, the ride could be overwhelming. What place is
            reliable, what furniture will stand the test of time? These are
            questions you must ask before you choose a store. Well, our
            Durability Certified Furniture Store has not only curated a range of
            furniture keeping in mind the modern Indian consumer but furniture
            that comes with a lab certification, ensuring they last you for up
            to 10 years. Yes, all our furniture has gone through 35 stability
            and load tests so that you receive only the best-quality furniture.
            Be FurniSure, always. Names to look out for are Nilkamal, Godrej
            Interio, Urban Ladder, HomeTown, Durian and Perfect Homes.
          </Text>
          <Text marginTop={"10px"}>
            You may have your furniture all set up, but they could end up
            looking flat and incomplete without complementary decor. Curtains,
            cushion covers, bed sheets, wall shelves, paintings, floor lamps -
            find everything that turns a house to an inviting home under one
            roof at Flipkart.
          </Text>
          <Heading fontSize={"15px"} color={"blackAlpha.800"} marginTop="5">
            Baby and Kids
          </Heading>
          <Text>
            Your kids deserve only the best. From bodysuits, booties, diapers to
            strollers, if you're an expecting mother or a new mother, you will
            find everything you need to set sail on a smooth parenting journey
            with the help of our baby care collection. When it comes to safety,
            hygiene and comfort, you can rely on us without a second thought.
            Huggies, Pampers, MamyPoko, and Johnson & Johnson: we host only the
            most-trusted names in the business for your baby.
          </Text>
          <Heading fontSize={"15px"} color={"blackAlpha.800"} marginTop="5">
            Books, Sports and Games
          </Heading>
          <Text>
            Work hard and no play? We don't believe in that. Get access to
            best-selling fiction and non-fiction books by your favourite
            authors, thrilling English and Indian blockbusters, most-wanted
            gaming consoles, and a tempting range of fitness and sports gadgets
            and equipment bound to inspire you to get moving.
          </Text>
          <Heading fontSize={"15px"} color={"blackAlpha.800"} marginTop="5">
            Grocery/Supermart
          </Heading>
          <Text>
            Launching into the grocery vertical, Flipkart introduces Supermart
            that is out to bring everyday essentials close to you. From pulses,
            spices, dairy, personal and sanitary care, breakfast essentials,
            health drinks, spreads, ready to cook, grooming to cleaning agents,
            we are happy to present everything you need to run a house. Now buy
            Grocery products for as low as 1 Rupee only - our 1 Rupee Store
            presents new products every day for a nominal price of 1 Rupee only.
            Terms and conditions apply.
          </Text>
        </Box>
      </Box>

      <Box
        bg={"#172337"}
        width={""}
        color={"white"}
        fontSize={"12px"}
        mt={"50px"}
      >
        <Container as={Stack} maxW={"7xl"} py={10}>
          <SimpleGrid
            templateColumns={{ sm: "1fr 1fr", md: "1fr 1fr 1fr 1fr 2fr 2fr" }}
            spacing={10}
          >
            <Stack align={"flex-start"}>
              <ListHeader>ABOUT</ListHeader>
              <Link href={"#"}>Contact Us</Link>
              <Link href={"#"}>About Us</Link>
              <Link href={"#"}>Careers</Link>
              <Link href={"#"}>Flipkart Stories</Link>
              <Link href={"#"}>Press</Link>
              <Link href={"#"}>Flipkart</Link>
              <Link href={"#"}>Wholesale</Link>
              <Link href={"#"}>Corporate</Link>
              <Link href={"#"}>Information</Link>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader color={useColorModeValue("gray.700", "gray.200")}>
                HELP
              </ListHeader>
              <Link href={"#"}>Payments</Link>
              <Link href={"#"}>Shipping</Link>
              <Link href={"#"}>Cancellation &</Link>
              <Link href={"#"}>FAQ</Link>
              <Link href={"#"}>Report</Link>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader color={useColorModeValue("gray.700", "gray.200")}>
                POLICY
              </ListHeader>
              <Link href={"#"}>Return Policy</Link>
              <Link href={"#"}>Terms Of Use</Link>
              <Link href={"#"}>Security</Link>
              <Link href={"#"}>Privacy</Link>
              <Link href={"#"}>Sitamap</Link>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader color={useColorModeValue("gray.700", "gray.200")}>
                SOCIAL
              </ListHeader>
              <Link href={"#"}>Facebook</Link>
              <Link href={"#"}>Twitter</Link>
              <Link href={"#"}>Youtube</Link>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader color={useColorModeValue("gray.700", "gray.200")}>
                Mail Us:
              </ListHeader>
              <Link href={"#"}>Flipkart Internet Private Limited,</Link>
              <Link href={"#"}>Buildings Alyssa, Begonia &</Link>
              <Link href={"#"}>Clove Embassy Tech Village,</Link>
              <Link href={"#"}>
                Outer Ring Road, Devarabeesanahalli Village,
              </Link>
              <Link href={"#"}>Bengaluru, 560103,</Link>
              <Link href={"#"}>Karnataka, India</Link>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader color={useColorModeValue("gray.700", "gray.200")}>
                Registered Office Address:
              </ListHeader>
              <Link href={"#"}>Flipkart Internet Private Limited,</Link>
              <Link href={"#"}>Buildings Alyssa, Begonia &</Link>
              <Link href={"#"}>Clove Embassy Tech Village,</Link>
              <Link href={"#"}>
                Outer Ring Road, Devarabeesanahalli Village,
              </Link>
              <Link href={"#"}>Bengaluru, 560103,</Link>
              <Link href={"#"}>Karnataka, India</Link>
              <Link href={"#"}>CIN : U51109KA2012PTC066107</Link>
              <Link href={"#"}>Telephone: 044-45614700</Link>
            </Stack>
          </SimpleGrid>
        </Container>
        <Box py={10}>
          <Flex
            align={"center"}
            _before={{
              content: '""',
              borderBottom: "1px solid",
              borderColor: useColorModeValue("gray.200", "gray.700"),
              flexGrow: 1,
              mr: 8,
            }}
            _after={{
              content: '""',
              borderBottom: "1px solid",
              borderColor: useColorModeValue("gray.200", "gray.700"),
              flexGrow: 1,
              ml: 8,
            }}
          ></Flex>
          <Container
            as={Stack}
            maxW={"7xl"}
            py={4}
            direction={{ base: "column", md: "row" }}
            spacing={4}
            textAlign="center"
            justify={{ base: "center", md: "center" }}
            align={{ base: "center", md: "center" }}
          >
            <Stack direction={"row"} spacing={4}>
              <Image
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDE2IDE1Ij4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9IjAlIiB4Mj0iODYuODc2JSIgeTE9IjAlIiB5Mj0iODAuMjAyJSI+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGRkQ4MDAiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRkZBRjAwIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTS0yLTJoMjB2MjBILTJ6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0idXJsKCNhKSIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMTUuOTMgNS42MTRoLTIuOTQ4VjQuMTRjMC0uODE4LS42NTUtMS40NzMtMS40NzMtMS40NzNIOC41NmMtLjgxNyAwLTEuNDczLjY1NS0xLjQ3MyAxLjQ3M3YxLjQ3NEg0LjE0Yy0uODE4IDAtMS40NjYuNjU2LTEuNDY2IDEuNDc0bC0uMDA3IDguMTA1YzAgLjgxOC42NTUgMS40NzQgMS40NzMgMS40NzRoMTEuNzljLjgxOCAwIDEuNDc0LS42NTYgMS40NzQtMS40NzRWNy4wODhjMC0uODE4LS42NTYtMS40NzQtMS40NzQtMS40NzR6bS00LjQyMSAwSDguNTZWNC4xNGgyLjk0OHYxLjQ3NHoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yIC0yKSIvPgogICAgPC9nPgo8L3N2Zz4K"
                alt="img"
              />
              <Link href={"#"}>Become a Seller</Link>
              <Image
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNSIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDE1IDE1Ij4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9IjAlIiB4Mj0iODYuODc2JSIgeTE9IjAlIiB5Mj0iODAuMjAyJSI+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGRkQ4MDAiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRkZBRjAwIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTS0zLTNoMjB2MjBILTN6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0idXJsKCNhKSIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMTAuNDkyIDNDNi4zNTMgMyAzIDYuMzYgMyAxMC41YzAgNC4xNCAzLjM1MyA3LjUgNy40OTIgNy41QzE0LjY0IDE4IDE4IDE0LjY0IDE4IDEwLjUgMTggNi4zNiAxNC42NCAzIDEwLjQ5MiAzem0zLjE4IDEyTDEwLjUgMTMuMDg4IDcuMzI3IDE1bC44NC0zLjYwN0w1LjM3IDguOTdsMy42OS0uMzE1TDEwLjUgNS4yNWwxLjQ0IDMuMzk4IDMuNjkuMzE1LTIuNzk4IDIuNDIyLjg0IDMuNjE1eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMgLTMpIi8+CiAgICA8L2c+Cjwvc3ZnPgo="
                alt="img"
              />
              <Link href={"#"}>Advertise</Link>
              <Image
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxNyIgdmlld0JveD0iMCAwIDE4IDE3Ij4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9IjAlIiB4Mj0iODYuODc2JSIgeTE9IjAlIiB5Mj0iODAuMjAyJSI+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGRkQ4MDAiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRkZBRjAwIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTS0xLTFoMjB2MjBILTF6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0idXJsKCNhKSIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMTYuNjY3IDVIMTQuODVjLjA5Mi0uMjU4LjE1LS41NDIuMTUtLjgzM2EyLjQ5NyAyLjQ5NyAwIDAgMC00LjU4My0xLjM3NUwxMCAzLjM1bC0uNDE3LS41NjdBMi41MSAyLjUxIDAgMCAwIDcuNSAxLjY2N2EyLjQ5NyAyLjQ5NyAwIDAgMC0yLjUgMi41YzAgLjI5MS4wNTguNTc1LjE1LjgzM0gzLjMzM2MtLjkyNSAwLTEuNjU4Ljc0Mi0xLjY1OCAxLjY2N2wtLjAwOCA5LjE2NkExLjY2IDEuNjYgMCAwIDAgMy4zMzMgMTcuNWgxMy4zMzRhMS42NiAxLjY2IDAgMCAwIDEuNjY2LTEuNjY3VjYuNjY3QTEuNjYgMS42NiAwIDAgMCAxNi42NjcgNXptMCA2LjY2N0gzLjMzM3YtNWg0LjIzNEw1LjgzMyA5LjAyNWwxLjM1Ljk3NSAxLjk4NC0yLjdMMTAgNi4xNjdsLjgzMyAxLjEzMyAxLjk4NCAyLjcgMS4zNS0uOTc1LTEuNzM0LTIuMzU4aDQuMjM0djV6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMSAtMSkiLz4KICAgIDwvZz4KPC9zdmc+Cg=="
                alt="img"
              />
              <Link href={"#"}>Gift Cards</Link>
              <Image
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNSIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDE1IDE1Ij4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9IjAlIiB4Mj0iODYuODc2JSIgeTE9IjAlIiB5Mj0iODAuMjAyJSI+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGRkQ4MDAiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRkZBRjAwIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTS0yLTNoMjB2MjBILTJ6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0idXJsKCNhKSIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNOS41IDNDNS4zNiAzIDIgNi4zNiAyIDEwLjUgMiAxNC42NCA1LjM2IDE4IDkuNSAxOGM0LjE0IDAgNy41LTMuMzYgNy41LTcuNUMxNyA2LjM2IDEzLjY0IDMgOS41IDN6bS43NSAxMi43NWgtMS41di0xLjVoMS41djEuNXptMS41NTMtNS44MTNsLS42NzYuNjljLS41NC41NDgtLjg3Ny45OTgtLjg3NyAyLjEyM2gtMS41di0uMzc1YzAtLjgyNS4zMzgtMS41NzUuODc3LTIuMTIzbC45My0uOTQ1Yy4yNzgtLjI3LjQ0My0uNjQ1LjQ0My0xLjA1NyAwLS44MjUtLjY3NS0xLjUtMS41LTEuNVM4IDcuNDI1IDggOC4yNUg2LjVhMyAzIDAgMSAxIDYgMGMwIC42Ni0uMjcgMS4yNi0uNjk3IDEuNjg4eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIgLTMpIi8+CiAgICA8L2c+Cjwvc3ZnPgo="
                alt="img"
              />
              <Link href={"#"}>Help Center</Link>
              <Text>© 2007-2023 Flipkart.com</Text>
            </Stack>
          </Container>
        </Box>
      </Box>
    </Box>
  );
};

export default NewFooter;
