import React from "react";

import { Box, Image } from "@chakra-ui/react";

import Carousel from "react-multi-carousel";

import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const content = [
  {
    src: "https://www.reliancedigital.in/medias/Apple-iPhone-14-Plus-Mobile-Phone-493177772-i-1-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wxNjk1OHxpbWFnZS9qcGVnfGltYWdlcy9oODEvaDUxLzk4OTA1NDc3Mjg0MTQuanBnfDI5Yjk0MjEyNDc5YmNmMzA2NzMzZWUzYTI0YTkxN2NiZWNiYTFjNDY2YzcyZjJmYzBkYTE3OThiNGZjZTNhYTA",
  },
  {
    src: "https://www.reliancedigital.in/medias/Apple-iPhone-14-Plus-Mobile-Phone-493177772-i-2-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wxNjc2OHxpbWFnZS9qcGVnfGltYWdlcy9oOGEvaDM1Lzk4OTA1NDgwNTYwOTQuanBnfDQ0OWVjYmVhYTMyNTg4NTE2OTRhNmEyZDhlN2FjY2E2ZjY1NTRkYmUzYzQ5YzUwMDc1ZDE4MDhlMGY4ZDUzMDI",
  },
  {
    src: "https://www.reliancedigital.in/medias/Apple-iPhone-14-Plus-Mobile-Phone-493177772-i-3-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wyMjM3OHxpbWFnZS9qcGVnfGltYWdlcy9oYmEvaDkzLzk4OTA1NDgzODM3NzQuanBnfDU5ZjdjNDkxNjg0Mzk4NDdiNGI0NmNkYTM3N2I4NjU4MTI4NzY1YTQ2YmQ2MzVhZDVhMWNmNDRmY2QzODk1ZTU",
  },
  {
    src: "https://www.reliancedigital.in/medias/Apple-iPhone-14-Plus-Mobile-Phone-493177772-i-4-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wzNjgxNHxpbWFnZS9qcGVnfGltYWdlcy9oMTUvaDBmLzk4OTA1NDg3MTE0NTQuanBnfDE2NmYzMTg3OWZmZmJlYmY3MzhjMGRkY2VlNzU2NTVlMTg2YzZhNjcwYzBkNzJmZmM4N2VkYjVmNzQyNDlmNjA",
  },
  {
    src: "https://www.reliancedigital.in/medias/Apple-iPhone-14-Plus-Mobile-Phone-493177772-i-5-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wyNTc0NHxpbWFnZS9qcGVnfGltYWdlcy9oN2YvaGVlLzk4OTA1NDk2OTQ0OTQuanBnfGQ2MzhkODFkYTE4MGMwYzY0YmVlMmNlOWYxNmQyNGMwMTEwMDViMjViZTJiZDdkMDRkMGJjZjY1M2Q5NWEzMjQ",
  },
  {
    src: "https://www.reliancedigital.in/medias/Apple-iPhone-14-Plus-Mobile-Phone-493177772-i-6-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wzMjU2NnxpbWFnZS9qcGVnfGltYWdlcy9oYTgvaGUzLzk4OTA1NTA2Nzc1MzQuanBnfDY2ZGE0NjYwOTI0MTYwYWYxMGYwNzFkNmY4MGUwN2M3MWM4M2Q1NDg1NmNjNTVhMWE0NTIxMjA4YzI0YzQxMGI",
  },
  {
    src: "https://www.reliancedigital.in/medias/Apple-iPhone-14-Plus-Mobile-Phone-493177772-i-7-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wzNDQ0OHxpbWFnZS9qcGVnfGltYWdlcy9oMTEvaDgzLzk4OTA1NTE2NjA1NzQuanBnfDZiMmNhMzFjMmZmNmIxODgxYzY1ZDNiMDMxZmMyNzQwZGJjYmJhZGYyM2JmOGU1OTJjODk4OGM3M2RlNDUwMzM",
  },
  {
    src: "https://www.reliancedigital.in/medias/Apple-iPhone-14-Plus-Mobile-Phone-493177772-i-9-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wyMDY2NnxpbWFnZS9qcGVnfGltYWdlcy9oN2EvaGJmLzk4OTA1NTM5NTQzMzQuanBnfDRmY2Q3YWYyMzgzMzk3Y2E2MjExZDQwYzZjOWY3NmY1MzJhNDlkMmUzYzIwMzkwM2FhYmUwNGNjZDU1YzQzOTA",
  },
];

const ImageCaraosel = () => {
  return (
    <Box w="100%">
      <Carousel responsive={responsive}>
        {content &&
          content.map((el, i) => (
            <Box key={i} h="110px" w={"100%"} pl="20%" pr="20%">
              <Image src={el.src} alt="error" h={"110px"} />
            </Box>
          ))}
      </Carousel>
    </Box>
  );
};

export default ImageCaraosel;
