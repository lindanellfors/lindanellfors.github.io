import { makeStyles, Box, Grid, Avatar, Typography } from '@material-ui/core';

import profileImage from './assets/linda.jpg';

const useStyles = makeStyles((theme) => ({
  startProfile: {
    width: theme.spacing(40),
    height: theme.spacing(40),
  },
}));

function App() {
  const classes = useStyles();

  return (
     <Grid container spacing={0}>
      <Grid item xs={12}>
        <Box
          minHeight={400}
          display="flex"
          justifyContent="center"
          alignItems="center"
          style={{ backgroundColor: "#f4d8e0" }}
          position="relative"
        >
          <Box>
            <Avatar alt="Linda Nellfors" src={profileImage} className={classes.startProfile} />
          </Box>
          <Box
            position="absolute"
            bottom={0}
            right="10%"
            style={{
              width: 0,
              height: 0,
              borderBottom: "100px solid #ECD5E3",
              borderLeft: "100px solid transparent"
            }}>
          </Box>
        </Box>
      </Grid>

      <Grid item xs={12}>
        <Box
          minHeight={400}
          display="flex"
          justifyContent="center"
          alignItems="center"
          style={{ backgroundColor: "#ECD5E3" }}
          position="relative"
        >
          <Box>
            <Typography variant="h2" component="h1">
              Linda Nellfors
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default App;
