import styled from '@emotion/styled'
 import { Formik, Form, Field, ErrorMessage } from 'formik';


export const InputField = styled(Field)`
font-size: 30px;
`

export const ErrorMessageHandler = styled(ErrorMessage)`
color: red;
`

export const Main = styled.main` 
background-color: #F7FAFC;
`


export const ContainerStyle = styled.div`
  max-width: 1170px;
  padding: 80px 0;

  margin-left: auto;
  margin-right: auto;
//   padding-left: 15px;
//   padding-right: 15px;
  text-align: center; 
 
  `
