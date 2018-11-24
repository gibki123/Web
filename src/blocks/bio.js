import React from 'react';
import { Container } from 'semantic-ui-react';

const Bio = ({name,children}) => (

    <div>
        

    <Container textAlign='left'><br></br> <h1>Siemano jestem,{name}{children}</h1></Container>
        <br/>
        <br/>
    <Container textAlign='justified' >
      <p>
        Jestem fajnym gosciem i elo
      </p>
    </Container>
        
    </div>
);

export default Bio;
