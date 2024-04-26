import { Box, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} color={'white'}
    minH={20}
    px={16}
    py={['16', '9']}
    >
         <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>All right reserved @2024</Text>
          
        </VStack>

      </Stack>
    </Box>
  )
}

export default Footer