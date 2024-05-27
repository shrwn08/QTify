import React from 'react'
import {Box} from "@mui/material"
import Accordion, { AccordionSlots } from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fade from '@mui/material/Fade';
function Footer() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpansion = () => {
      setExpanded((prevExpanded) => !prevExpanded);
    };

  return (
    <Box sx={{
            backgroundColor:"#121212",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            
            height:"345px",
    }}>
                <Box sx={{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center"
    }} 
    >
        <Box color="white"
            fontSize="30px"
            fontWeight="600"
            >
            FAQs
        </Box>
        <Box>
        <Accordion
        expanded={expanded }
        onChange={handleExpansion}
       transitionComponent={Fade}
       transitionDuration={400}
        sx={{
          '& .MuiAccordion-region': { height: expanded ? 'auto' : 0 },
          '& .MuiAccordionDetails-root': { display: expanded ? 'block' : 'none' },
          width:"1135px",
        }}
      >
        <AccordionSummary
            sx={{
                backgroundColor:"#121212"
            }}
          expandIcon={<ExpandMoreIcon sx={{
            color:"#34c94b",
            fontWeight:"700"
          }}/>}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography 
          color="white">Is Qtify free to use?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography >
            Yes! It is 100% free, and has 0% ads!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
            sx={{
                backgroundColor:"#121212"
            }}
          expandIcon={<ExpandMoreIcon sx={{
            color:"#34c94b",
            fontWeight:"700"
          }}/>}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography backgroundColor="#121212"
          color="white">Can I download and listen to songs Office?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Sorry, unfortunately We don't provide the service to download any songs.
          </Typography>
        </AccordionDetails>
      </Accordion>

        </Box>
                    
    </Box>
    </Box>

  )
}

export default Footer