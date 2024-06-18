import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Grid, Card, CardContent, CardActionArea, CssBaseline } from '@mui/material';
import { FaTrophy, FaDice, FaFutbol, FaFish, FaGamepad, FaHome, FaUserCircle, FaWallet, FaTag } from 'react-icons/fa';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#1a1a2e',
    minHeight: '100vh',
    color: '#fff',
  },
  appBar: {
    backgroundColor: '#162447',
  },
  title: {
    flexGrow: 1,
    color: '#e43f5a',
  },
  heroSection: {
    backgroundColor: '#1f4068',
    padding: theme.spacing(8, 0),
    textAlign: 'center',
  },
  heroText: {
    marginBottom: theme.spacing(4),
  },
  heroButton: {
    backgroundColor: '#e43f5a',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#6a0572',
    },
  },
  categories: {
    padding: theme.spacing(8, 0),
  },
  card: {
    backgroundColor: '#162447',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#e43f5a',
    },
  },
  footer: {
    backgroundColor: '#162447',
    padding: theme.spacing(4, 0),
    textAlign: 'center',
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Tiranga
          </Typography>
          <Button color="inherit">Log in</Button>
          <Button color="inherit">Register</Button>
        </Toolbar>
      </AppBar>
      <section className={classes.heroSection}>
        <Container>
          <Typography variant="h3" className={classes.heroText}>
            Most Popular Game Site
          </Typography>
          <Typography variant="h5" className={classes.heroText}>
            Stable, Safe & Fast
          </Typography>
          <Button variant="contained" className={classes.heroButton}>
            Learn More
          </Button>
        </Container>
      </section>
      <Container className={classes.categories}>
        <Grid container spacing={4}>
          {[
            { title: 'Popular', icon: <FaTrophy size={40} /> },
            { title: 'Lottery', icon: <FaDice size={40} /> },
            { title: 'Casino', icon: <FaGamepad size={40} /> },
            { title: 'Slots', icon: <FaDice size={40} /> },
            { title: 'Sports', icon: <FaFutbol size={40} /> },
            { title: 'Rummy', icon: <FaGamepad size={40} /> },
            { title: 'Fishing', icon: <FaFish size={40} /> },
            { title: 'Original', icon: <FaTag size={40} /> },
          ].map((category) => (
            <Grid item xs={12} sm={6} md={3} key={category.title}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardContent>
                    <div style={{ textAlign: 'center' }}>{category.icon}</div>
                    <Typography variant="h6" align="center">
                      {category.title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <footer className={classes.footer}>
        <Typography variant="body1">&copy; 2023 Tiranga Games. All rights reserved.</Typography>
      </footer>
    </div>
  );
};

export default App;
