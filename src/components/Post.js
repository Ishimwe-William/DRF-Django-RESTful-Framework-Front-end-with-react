import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const Posts = (props) => {
  const { posts } = props;

  if (!posts || posts.length === 0) return <p>Can not find any posts, sorry</p>;

  return (
    <React.Fragment>
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {posts.map((post) => (
            <Grid item key={post.id} xs={12} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://source.unsplash.com/random"
                  alt="Random"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="h2"
                    style={{ fontSize: '16px', textAlign: 'left' }}
                  >
                    {post.title.substr(0, 50)}...
                  </Typography>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'left',
                      alignItems: 'baseline',
                      fontSize: '12px',
                      textAlign: 'left',
                      marginBottom: '16px', // Adjust margin as needed
                    }}
                  >
                    <Typography color="textSecondary">
                      {post.excerpt.substr(0, 60)}...
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Posts;
