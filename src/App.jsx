import { Button, Flex, Heading } from '@chakra-ui/react'
import labImage from './img/lab.jpeg';

function App() {

  const bgImage = `url(${labImage})`;

  return (
    <>
      <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex direction="column" bgImage={bgImage} bgSize="cover" bgPosition="center" p={200} rounded={6}>
        <Heading mb={6} marginTop={-150} color="white" fontWeight="normal" fontFamily="arial">DOMINA EL TERRENO</Heading>
        <Flex justifyContent="space-between" width="100%">
        <Button 
              variant="outline" 
              color="white" 
              fontFamily="arial" 
              marginBottom="20px" // Agrega un margen inferior para bajar los botones
              _hover={{ color: 'black', bg: 'white' }} // Cambia el color del texto al pasar el cursor
            >
              VER DETALLES
            </Button>
            <Button 
              variant="outline" 
              color="white" 
              fontFamily="arial" 
              marginBottom="20px" // Agrega un margen inferior para bajar los botones
              _hover={{ color: 'black', bg: 'white' }} // Cambia el color del texto al pasar el cursor
            >
              VER VIDEO
            </Button>
        </Flex>
      </Flex>
    </Flex>
    </>
  )
}

export default App
