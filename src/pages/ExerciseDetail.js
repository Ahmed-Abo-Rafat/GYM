import React from 'react';
import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';

import { exerciseOptions, youtubeOptions, fetchData } from '../utils/fetchData';

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({}); // state to catch exercise Deatails
  const [exerciseVideos, setExerciseVideos] = useState([]); // state to catch video
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]); // state to catch exercise muscle
  const [equipmentExercises, setEquipmentExercises] = useState([]); // state to catch exercise equipment
  
  const {id} = useParams();

  const res = useRef();

  const fetchExercisesData = async () => {
    const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
    const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';
    
    //fetch exercise data
    const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions); 
    setExerciseDetail(exerciseDetailData);
    
    //fetch youtube data
    const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions)
    setExerciseVideos(exerciseVideosData.contents)

    //fetch target muscle data and equipment muscle data
    const targetMuscleExerciseData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions); 
    setTargetMuscleExercises(targetMuscleExerciseData);

    const equipmentExerciseData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions); 
    setEquipmentExercises(equipmentExerciseData);
  }

  res.current = fetchExercisesData;
  const myRes = id;

  useEffect(() => {
    res.current();
  }, [myRes])
  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail}/>
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
    </Box>
  )
}

export default ExerciseDetail