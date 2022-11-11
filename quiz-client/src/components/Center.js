import React from 'react'
import {Grid, Paper} from '@mui/material';

export default function Center(props) {
  return (
      <Paper>
          <Grid
              container
              spacing={3}
              direction={'column'}
              justify={'center'}
              alignItems={'center'}
          >
              <Grid item sx={1}>
                  { props.children}
              </Grid>
          </Grid>
      </Paper>
  )
}

        
