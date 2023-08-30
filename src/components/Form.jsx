import React, { useState } from 'react';
import Axios from 'axios';
import { TextField, Button, Container, Typography } from '@mui/material';
import { Send as SendIcon } from '@mui/icons-material';
import Image from '../media/backg.jpeg'
const Form = () => {
  const apiUrl = 'https://abootdrex.onrender.com'
  const [title, setTitle] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [blog, setBlog] = useState('')
  const [about, setAbout] = useState('')
  const [reflinks, setRefLink] = useState('')
  const [image, setImage] = useState('')
 
  const [formData, setFormData] = useState({

  })
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));


  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post(`${apiUrl}/registrations`, {
      Name: name,
      Email: email,
      Blog: blog,
      Image: image,
      Title:title,   
      About:about,
      RefLinks:reflinks,
       }
    );
    console.log(formData);
    setFormData({
      name: '',
      email: '',
      image: '',
      blog: '',
      title: '',
      about:'',
      reflinks:'',
    });

  };
  const styles = {
      container: {
      backgroundImage: `url('${Image}')`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: '130vh', // Set a suitable height
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
     },
  };

  return (<>
    <Container maxWidth="xl" style={styles.container} >        
      <Container fixed maxWidth="md" sx={{color: 'orange', borderRadius: '20px', backgroundColor: 'white', padding: '17px', marginTop: '9%', }}>
        <Typography variant="h4" align="center"sx={{padding:'5px',fontFamily:'cursive'}}>
          Write Your Blog 
        </Typography>
        <form onSubmit={handleSubmit}>
        <TextField
            label="Title"
            name="title"            
            margin="normal"
            variant="outlined"
            value={formData.title}
            onChange={(e) => {
              setTitle(e.target.value);
              handleChange(e);
            }}
          />&nbsp; &nbsp;
          <TextField
            label="Name"
            name="name"            
            margin="normal"
            variant="outlined"
            value={formData.name}
            onChange={(e) => {
              setName(e.target.value);
              handleChange(e);
            }}
          />&nbsp; &nbsp;
          <TextField
            label="Email"
            name="email"          
            margin="normal"
            variant="outlined"
            value={formData.email}
            onChange={(e) => {
              setEmail(e.target.value);
              handleChange(e);
            }}
          />
          <TextField
            label="Image url"
            name="image"         
            fullWidth
            margin="normal"
            variant="outlined"
            value={formData.image}
            onChange={(e) => {
              setImage(e.target.value);
              handleChange(e);
            }}
          />
           <TextField
            label="About"
            name="about"         
            fullWidth
            margin="normal"
            variant="outlined"
            value={formData.about}
            onChange={(e) => {
              setAbout(e.target.value);
              handleChange(e);
            }}
          />
           
          <TextField
            label="Blog"
            name="blog"
            fullWidth
            multiline
            rows={8}
            margin="normal"
            variant="outlined"
            value={formData.blog}
            onChange={(e) => {
              setBlog(e.target.value);
              handleChange(e);
            }}
          /> <TextField
          label="Reference"
          name=" reflinks"         
          fullWidth
          margin="normal"
          variant="outlined"
          value={formData.reflinks}
          onChange={(e) => {
            setRefLink(e.target.value);
            handleChange(e);
          }}
        />
          &nbsp;
          <Button
            type="submit"
            variant="contained"
            color="primary"
            endIcon={<SendIcon/>}
          >
            Post
          </Button>
        </form>
        
      </Container>        
    </Container>
    
  </>);
};

export default Form;
