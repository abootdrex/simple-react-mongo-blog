import React, { useEffect, useState } from 'react';
import Scroll from './Scroll';
import axios from 'axios';
import { Container, Typography } from '@mui/material';
import { ImageList } from '@mui/material';


const Blog = () => {
  const styles = {
    container: {
     
      width: '100%',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      lineHeight:'1.7'
      

    },
  };
  const [data, setData] = useState([' '])

  useEffect(() => {
    axios.get('https://abootdrex.onrender.com/blogdata')
      .then(response => {
        setData(response.data);
        console.log(data)
      })

  });
  return (<>

    <Scroll />

    {data.map(item => (
      <Container maxWidth="xl" style={styles.container} >
        <Container fixed maxWidth="xl" sx={{ color: '#1a3a63', fontSize: '17px',  
          fontFamily: 'monospace', borderRadius: '20px', padding: '17px', marginTop: '10%', }}>
          <Typography variant='h4'>{item.title}</Typography>         
          <img src={item.image} alt="" style={{ width: '80px', height: '80px', borderRadius: '80px',border:'0.5px solid black'}} /> <br />
          {item.email} <br />
          <Typography variant='h2'>{item.name}</Typography> 
          <br />           
          <img src={item.image} alt="" style={{ width: '100%', height: '400px', borderRadius: '20px' }} />
          <ImageList style={{border :'1px solid #1a3a63',padding:'8px',borderRadius:'20px '}}>
            <pre>
              <code>
                {item.blog}
              </code>
            </pre></ImageList>
        </Container>
      </Container>))}
  </>);
};

export default Blog;