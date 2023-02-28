import {
  Text,
  Box,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useRef } from "react";

export default function Success({ isSuccess, handleOpen, handleClose }) {
  const finalRef = useRef(null);

  return (
    <Modal finalFocusRef={finalRef} isOpen={isSuccess} zIndex={1}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton zIndex={2} onClick={() => handleClose()} />
        <ModalBody bgColor={"rgb(198,246,213)"}>
          <Alert
            status="success"
            variant="subtle"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            height="220px"
            width="100%"
            onClick={handleClose}
          >
            <AlertIcon boxSize="40px" mr={0} />
            <Box>
              <AlertTitle mt={4} mb={1} fontSize="lg">
                Order Placed !
              </AlertTitle>
              <AlertDescription maxWidth="sm">
                Thanks for shopping with us. Your Order will be delivered in{" "}
                <Text as="span" color={"lightcoral"}>
                  2-3 days
                </Text>
              </AlertDescription>
            </Box>
          </Alert>
        </ModalBody>
      </ModalContent>
    </Modal>

    // <Alert
    //   status="success"
    //   variant="subtle"
    //   flexDirection="column"
    //   alignItems="center"
    //   justifyContent="center"
    //   textAlign="center"
    //   height="200px"
    //   zIndex={9}
    // >
    //   <CloseButton
    //     alignSelf="flex-end"
    //     position="relative"
    //     right={0}
    //     top={-1}
    //     onClick={onClose}
    //   />
    //   <AlertIcon boxSize="40px" mr={0} />
    //   <Box>
    //     <AlertTitle mt={4} mb={1} fontSize="lg">
    //       Application submitted!
    //     </AlertTitle>
    //     <AlertDescription maxWidth="sm">
    //       Thanks for submitting your application. Our team will get back to you
    //       soon.
    //     </AlertDescription>
    //   </Box>
    // </Alert>
  );
}
// function ReturnFocus() {
//     const { isOpen, onOpen, onClose } = useDisclosure()
//     const finalRef = React.useRef(null)

//     return (
//       <>
//         <Box ref={finalRef} tabIndex={-1} aria-label='Focus moved to this box'>
//           Some other content that'll receive focus on close.
//         </Box>

//         <Button mt={4} onClick={onOpen}>
//           Open Modal
//         </Button>
//     <Modal  finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
//       <ModalOverlay />
//       <ModalContent>

//         <ModalCloseButton zIndex={3} />
//         <ModalBody  bgColor={"rgb(198,246,213)"}>
//             <Alert
//     status="success"
//     variant="subtle"
//     flexDirection="column"
//     alignItems="center"
//     justifyContent="center"
//     textAlign="center"
//     height="220px"
//     width="100%"

//   >

//     <AlertIcon boxSize="40px" mr={0} />
//     <Box>
//       <AlertTitle mt={4} mb={1} fontSize="lg">
//         Application submitted!
//       </AlertTitle>
//       <AlertDescription maxWidth="sm">
//         Thanks for submitting your application. Our team will get back to you
//         soon.
//       </AlertDescription>
//     </Box>
//   </Alert>
//         </ModalBody>

//       </ModalContent>
//     </Modal>
//       </>
//     )
//   }
