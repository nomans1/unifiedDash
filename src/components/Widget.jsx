import React,{ Component, Fragment } from 'react'
import {
    Alert,
    Spinner ,
  } from "reactstrap";
export default ({ children, error = false, loading = false, title = '' }) => {
    let content
  
    if (loading) {
      content = <div> <Spinner color="primary" /> </div>
    } else if (error) {
      content = <Alert danger />
    } else {
      content = <div>{children}</div>
    }
  
    return (
    //   <Container>
        // {title ? <Title>{title}</Title> : ''}
        <React.Fragment>
        {content}
        </React.Fragment>
    //   </Container>
    )
  }