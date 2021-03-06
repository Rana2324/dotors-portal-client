import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import Service from "../Home/Service/Service";
import fluoride from "../../../images/fluoride.png";
import cavity from "../../../images/cavity.png";
import whitening from "../../../images/whitening.png";

const services = [
  {
    name: "Fluoride Treatment",
    description:
      "the main body of a book or other piece of writing as distinct from other material such as notes appendices and illustrations",
    img: fluoride,
  },
  {
    name: "Cavity Filling",
    description:
      "the main body of a book or other piece of writing as distinct from other material such as notes appendices and illustrations",
    img: cavity,
  },
  {
    name: "Teeth Whitening",
    description:
      "the main body of a book or other piece of writing as distinct from other material such as notes appendices and illustrations",
    img: whitening,
  },
];
const Services = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container>
            <Typography sx ={{color: 'success.main', fontWeight: '500', m: 2}} variant="h6" component="div">
                 OUR SERVICES
            </Typography>
            <Typography sx ={{fontWeight: '500', m: 5}} variant="h4" component="div">
                Services We Provide
            </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {services.map((service) => (
            <Service>
              key = {service.name}
              service = {service}
            </Service>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
