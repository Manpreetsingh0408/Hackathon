import React from 'react';
import {
  Card,
  Text,
  Heading,
  Stack,
  CardBody,
  Image,
  CardFooter,
} from "@chakra-ui/react";

const Blog = () => {
  return (
    <div>
      <Card
        direction={{ base: 'column', md: 'row' }}
        overflow='hidden'
        variant='outline'
        maxW={{ base: '90%', md: '60vw' }} 
        marginTop={{ base: '20px', md: '13vmax' }}
        marginLeft={{ base: '20px', md: '3vmax' }}
      >
        <Image
          objectFit='cover'
          maxW={{ base: '100%', md: '300px' }}
          src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
          alt='Caffe Latte'
        />

        <Stack>
          <CardBody>
            <Heading size='lg'>Blog title</Heading>

            <Text py='10'>
              Blog Description
            </Text>
          </CardBody>

          <CardFooter>
          </CardFooter>
        </Stack>
      </Card>
    </div>
  )
}

export default Blog;
