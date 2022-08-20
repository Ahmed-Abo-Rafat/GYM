import React from 'react'
import { useState, useEffect, useRef } from 'react'
import Pagination from '@mui/material/Pagination'
import { Box, Stack, Typography } from '@mui/material'

import { exerciseOptions, fetchData } from '../utils/fetchData'
import ExerciseCard from './ExerciseCard'


const Exercises = ({exercises, setExercises, bodyPart}) => {
  
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(6);

  const fun = useRef();

  const fetchExercisesData = async () => {
    let exercisesData = [];

    if(bodyPart === 'all') {
      exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      
    }
    else {
      exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
    }
    //console.log(exercisesData);
    setExercises(exercisesData);
  }

  fun.current = fetchExercisesData;

  const myFun = bodyPart;
 
  //change Exercise dependeing badypart
  useEffect(() => {
    
    fun.current();
  }, [myFun])

 


  const indexLastOfExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexLastOfExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexLastOfExercise);
  
  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({top: 1800, behavior: 'smooth'})
  }
  
  return (
    <Box id="exercises"
      sx={{mt: {lg: '110px'}}}
      mt="50px"
      p="20px"
    >
      <Typography variant="h3" mb="46px">Showing Result</Typography>
      <Stack direction="row" sx={{gap: {lg: '70px', sx: '50px'}}}
      flexWrap="wrap" justifyContent="space-around">
        {currentExercises.map((exercise, indx) => (
          <ExerciseCard key={indx} exercise={exercise}/>
        ))}
      </Stack>
      
      <Stack mt="100px" alignItems="center">
        {exercises.length > 9 && (
          <Pagination
          color="standard"
          shape="rounded"
          defaultPage={1}
          count={Math.ceil(exercises.length / exercisesPerPage)}
          page={currentPage}
          onChange={paginate}
          size="large"
          />
        )} 
      </Stack>
    </Box>
  )
}

export default Exercises