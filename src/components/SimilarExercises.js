import React from 'react'
import {Box, Stack, Typography } from '@mui/material'

import HorizontalScrollbar from './HorizontalScrollbar'

const SimilarExercises = ({targetMuscleExercises, equipmentExercises}) => {
  return (
    <Box sx={{mt: {lg:'100px', xs:'0px'}}}>
      <Typography 
          sx={{fontSize: {lg:'44px', xs:'25px'}, ml:'20px'}}
          fontWeight={700}
          color="#000"
          mb="33px"
        >
        Similar <span style={{ color:'#FF2625', textTransform:'capitalize'}}>Target Muscle</span> exercises
      </Typography>

      <Stack direction="row" sx={{p:'2px', position:'relative'}}>
        <HorizontalScrollbar data={targetMuscleExercises}/>
      </Stack>

      <Typography 
          sx={{fontSize: {lg:'44px', xs:'25px'}, ml:'20px'}}
          fontWeight={700}
          color="#000"
          mb="33px"
        >
        Similar <span style={{ color:'#FF2625', textTransform:'capitalize'}}>Equipment</span> exercises
      </Typography>
      <Stack direction="row" sx={{p:'2px', position:'relative'}}>
        <HorizontalScrollbar data={equipmentExercises}/>
      </Stack>

    </Box>
  )
}

export default SimilarExercises