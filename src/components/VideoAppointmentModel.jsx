import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import { useRef } from 'react';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import { Link} from 'react-router-dom'


const Image = styled.img`
height: 80px;
width: 80px;
border-radius: 50%;
`

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function VideoAppointmentModal({ src, name }) {
    const [open, setOpen] = React.useState(false);
    const [patientName, setPatientName] =  React.useState("");
    const [patientNumber, setPatientNumber] =  React.useState("");
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const form = useRef();
    function handleSubmit(){

    }

    return (
        <div>
        <Button
            variant="contained"
            sx={{width: '100%', mt: 2, color: "white", backgroundColor: "danger.main" }}
            onClick={handleOpen}
          >
            Video Consultation
          </Button>
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={open}>
                <Box sx={style}>
                  <Grid container item sx={{width: '100%', height: '100%'}}>
                  <Grid item sx={{ width: '30%', ml: 2 }} >
                  <Image src={src} />
                  </Grid>
                  <Grid item direction='column' sx={{ width: '60%', ml: 2 }}>
                  <Typography
                  fontSize = '1rem'
                  sx={{color: 'primary.main'}}
                  >
                   {name}
                  </Typography>
                  <Typography
                  fontSize = '0.8rem'
                  sx={{color: 'black'}}
                  >
                   Video Consultation
                  </Typography>
                  <Grid container item sx={{width: '80%'}} >
                    <Grid container item>
                      <TimerOutlinedIcon sx={{color: 'gray', fontSize: '0.8rem'}}/>
                      <Typography
                      sx={{color: 'gray'}}
                      fontSize = '0.8rem'
                      fontFamily = 'Consolas'
                      >
                        11:00 am
                      </Typography>
                    </Grid>
                    <Grid container item >
                      <EventAvailableOutlinedIcon sx={{color: 'gray', fontSize: '0.8rem', pt: 0.5}}/>
                      <Typography
                      sx={{color: 'gray'}}
                      fontSize = '0.8rem'
                      fontFamily = 'Consolas'
                      >
                        Tue Fri
                      </Typography>
                    </Grid>
                  </Grid>
                  </Grid>
                  </Grid>
                  <Box component="form" ref={form} onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Patient Name"
            name= {name}
            autoComplete="Name"
            focused
            autoFocus
            onChange={(e) => {
            setPatientName(e.target.value)
            }
            }
          >
          </TextField>
          <TextField
            margin="normal"
            required
            fullWidth
            name="number"
            label="Patient Phone"
            type="text"
            id="number"
            autoComplete="+923459567543"
            onChange={(e) => setPatientNumber(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Book Video Consultation
          </Button>
          <Link to='/signup' >Book Video Consultation</Link>
        </Box>
                </Box>
            </Fade>
        </Modal>
    </div>
    );
}
