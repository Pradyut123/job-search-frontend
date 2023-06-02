import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import NavMenu from "../../../components/Admin/NavMenu/NavMenu";

const Dashboard = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <NavMenu />
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        ml={{ xs: 2, sm: 10, md: 20, lg: 8 }}
        // ml={35}
        spacing={2}
      >
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card sx={{ maxWidth: 300, mt: 5, boxShadow: 6 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://d2c11ioono0v2m.cloudfront.net/public/onboarding-new-job-article-min.jpg"
                alt="Candidate Details"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Student Details
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button variant="outlined" onClick={handleClickOpen}>
                <Link
                  to="/students"
                  variant="body2"
                  style={{ textDecoration: "none" }}
                >
                  Candidate Details
                </Link>
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card sx={{ maxWidth: 300, mt: 5, boxShadow: 6 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://d2c11ioono0v2m.cloudfront.net/public/onboarding-new-job-article-min.jpg"
                alt="Add Job"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Add Job
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button variant="outlined" onClick={handleClickOpen}>
                <Link
                  to="/addjob"
                  variant="body2"
                  style={{ textDecoration: "none" }}
                >
                  Add Job
                </Link>
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card sx={{ maxWidth: 300, mt: 5, boxShadow: 6 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://d2c11ioono0v2m.cloudfront.net/public/onboarding-new-job-article-min.jpg"
                alt="View Job"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  View Jobs
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button variant="outlined" onClick={handleClickOpen}>
                <Link
                  to="/admin/viewJobs"
                  variant="body2"
                  style={{ textDecoration: "none" }}
                >
                  View Jobs
                </Link>
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
