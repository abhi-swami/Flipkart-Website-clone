import { Box, Flex,Text, Grid, Image } from "@chakra-ui/react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const ProductsCard = ({ something, prodVal = 4 }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: prodVal,
      slidesToSlide: 1, 
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 2, 
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, 
    },
  };

  return (
    <Grid border="1px" borderColor='blue' bg="white" p="1rem" templateColumns={'33% 60%'} mt={12} w='3000'   alignItems={'left'} overflow='hidden'>
      {/* <Box border={'1px solid black'}>

      </Box> */}
      
      

      <Carousel 
        responsive={responsive}
        infinite={true}
        transitionDuration={300}
        itemClass="carousel-item-padding-40-px"
      
      >
        {something.map(({ id, image, alt,text,text2,text3 }) => (
          <Box border='1px' borderColor='red' key={id} p={1} ml={"1rem"} >
            <Image _hover={{ cursor: "pointer" }} src={image} alt={alt} h='200px'  />
            <h3>{text}</h3>
            <Text color='green.300'>{text2}</Text>
            <h5>{text3}</h5>
          </Box>
        ))}
      </Carousel>
   
    </Grid>
  );
};


const Slider = ({something}) => {
  return (
    <Box>
      <Box>
        {/* <Box border='10px' borderColor='blue'
          display="flex"
          justifyContent="space-between"
          px="2rem"
          mb="0.5rem"
        ></Box> */}
        <ProductsCard something={something} />
      </Box>
    </Box>
  );
};

export default Slider;
