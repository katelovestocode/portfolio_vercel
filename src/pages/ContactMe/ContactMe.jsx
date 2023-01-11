import React from 'react';
import {ContainerStyle} from "./ContactMe.styled"
import { Formik, Form, Field} from 'formik';
import {ErrorMessageHandler, Main } from "./ContactMe.styled"
import * as yup from 'yup';
import { Input, Button, Box, Flex, Textarea, Select, Text, VStack } from '@chakra-ui/react'
import {HiOutlineMail} from "react-icons/hi"

// Input.defaultProps = { ...Input.defaultProps, focusBorderColor: "BlackAlpha.500 "};
// Select.defaultProps = { ...Select.defaultProps, focusBorderColor: '#ff6b08' };
// Textarea.defaultProps = { ...Select.defaultProps, focusBorderColor: '#ff6b08' };

const requestType = ["job offer", "collaboration", "feedback", "other"]

let schema = yup.object().shape({
  name: yup.string().min(3, 'Too Short').max(50, 'Too Long!').required('Required'),
  email: yup.string().email('Invalid email').required('Required'),
  selection: yup.string().required("Please select type of request").oneOf(requestType),
  message: yup.string().min(30, 'Short Message').required('Required'),
 
});

const initialValues = {
    name: "",
    email: "",
    selection: "",
    message: ""
}
 
const ContactMe = () => {

    const handleSubmit = (values, {resetForm}) => {
        resetForm();
}
    return (<Main>
        <ContainerStyle> 

        <Flex align="center" justify="center" > 
    
    
        <Formik initialValues={initialValues} validationSchema={schema} onSubmit={handleSubmit}> 
               
        <Form autoComplete="off" > 

        
        <Box bg="white"  boxShadow='2xl' rounded="md" w={450} p={4}  align="center" >

        <Box mb={4}>                  
        <Text fontSize='3xl' as='b' color='brand.accentColor'> Contact Me </Text>
        </Box> 
        <VStack spacing={4} align="flex-start">
        <Field as={Input}  type="text" name="name" placeholder="Enter your name" /> 
            <ErrorMessageHandler name="name" component="div"  />
        <Field as={Input} type="text" name="email" placeholder="Enter your email" /> 
            <ErrorMessageHandler name="email" component="div" />
                
        <Field as={Select} type="select" name="selection"> <option value=""> Select type of request </option>
                    {requestType.map((type, index) => (<option value={type} key={index}> {type}</option>))}
                </Field>
        <ErrorMessageHandler name="selection" component="div" />
                
        <Field name="message" as={Textarea} placeholder="Enter your message"/> 
            <ErrorMessageHandler name="message" component="div"/> 
      </VStack>
                             
<Button leftIcon={<HiOutlineMail />} colorScheme='teal' variant='solid' type="submit" spacing={4}  m={6} p={6} align='center'> Submit </Button>
                         

                        
    </Box>
  
        
    </Form>
            
    </Formik>



            </Flex>
            
            </ContainerStyle>
    </Main>)
}


export default ContactMe;

