import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { Navbar } from '@/components/Navbar'
import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar'
import { ExcersizeCard } from '@/components/Player'
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

export const chest = [
  {
    id: 1,
    name: 'Bench Press',
    description: 'Description of exercise 1 goes here.',
    src: 'excercises/bench_press.gif',
  },
  {
    id: 2,
    name: 'Push Up',
    description: 'Description of exercise 2 goes here.',
    src: 'excercises/push_up.gif',
  },
  {
    id: 3,
    name: 'Incline Dumbbell Bench Press',
    description: 'Description of exercise 2 goes here.',
    src: 'excercises/incline_dumbell_bench_press.gif',
  },
  {
    id: 4,
    name: 'Cable Crossover',
    description: 'Description of exercise 2 goes here.',
    src: 'excercises/cable_crossover.gif',
  },
  {
    id: 5,
    name: 'Incline Dumbbell Bench Press',
    description: 'Description of exercise 2 goes here.',
    src: 'excercises/incline_dumbell_bench_press.gif',
  },
  {
    id: 6,
    name: 'Dumbbell Flys',
    description: 'Description of exercise 2 goes here.',
    src: 'excercises/dumbell_flys.gif',
  },
  {
    id: 7,
    name: 'Decline Barbell Bench Press',
    description: 'An exercise that works the chest muscles, particularly the lower portion, by performing a bench press on a decline bench.',
    src: null,
  },
  {
    id: 8,
    name: 'Decline Hammer Strength Chest Press',
    description: 'A machine-based exercise that targets the chest muscles, particularly the lower portion, by pressing weight on a decline angle.',
    src: null,
  },
  {
    id: 9,
    name: 'Flat Barbell Bench Press',
    description: 'A classic chest exercise that involves lying on a flat bench and pressing a barbell up and down, targeting the pectorals and other chest muscles.',
    src: null,
  },
  {
    id: 10,
    name: 'Flat Dumbbell Bench Press',
    description: 'A variation of the bench press that uses dumbbells instead of a barbell, allowing for a greater range of motion and increased stabilization.',
    src: null,
  },
  {
    id: 11,
    name: 'Flat Dumbbell Fly',
    description: 'An exercise that targets the chest muscles, particularly the outer portion, by moving the arms in a fly motion with dumbbells while lying on a flat bench.',
    src: null,
  },
  {
    id: 12,
    name: 'Incline Barbell Bench Press',
    description: 'A variation of the bench press that targets the upper portion of the chest muscles by performing the exercise on an incline bench.',
    src: null,
  },
  {
    id: 13,
    name: 'Incline Dumbbell Fly',
    description: 'An exercise that targets the upper portion of the chest muscles by moving the arms in a fly motion with dumbbells while lying on an incline bench.',
    src: null,
  },
  {
    id: 14,
    name: 'Incline Hammer Strength Chest Press',
    description: 'A machine-based exercise that targets the upper portion of the chest muscles by pressing weight on an incline angle.',
    src: null,
  },
  {
    id: 15,
    name: 'Seated Machine Fly',
    description: 'An exercise that works the chest muscles, particularly the outer portion, by performing a fly motion on a seated machine.',
    src: null,
  },
];

export const biceps = [
  {
    id: 1,
    name: 'Barbell Curl',
    description: 'Description of exercise 1 goes here.',
    src: 'excercises/barbell\_curl.gif',
  },
  {
    id: 2,
    name: 'Cable Curl',
    description: 'Description of exercise 2 goes here.',
    src: 'excercises/cable\_curl.gif',
  },
  {
    id: 3,
    name: 'Hammer Curl',
    description: 'Description of exercise 2 goes here.',
    src: 'excercises/hammer\_curl.gif',
  },
  {
    id: 4,
    name: 'Preacher Curl',
    description: 'Description of exercise 2 goes here.',
    src: 'excercises/preacher\_curl.gif',
  },
  {
    id: 5,
    name: 'Dumbbell Concentration Curl',
    description: 'An exercise that targets the biceps by curling a dumbbell while sitting with an arm resting on the inner thigh.',
    src: null,
  },
  {
    id: 6,
    name: 'Dumbbell Curl',
    description: 'A biceps exercise that involves curling a dumbbell in each hand towards the shoulders.',
    src: null,
  },
  {
    id: 7,
    name: 'Dumbbell Hammer Curl',
    description: 'A variation of the dumbbell curl that targets the biceps by keeping the palms facing inwards throughout the movement.',
    src: null,
  },
  {
    id: 8,
    name: 'Dumbbell Preacher Curl',
    description: 'An exercise that isolates the biceps by curling dumbbells on a preacher bench with the arms supported.',
    src: null,
  },
  {
    id: 9,
    name: 'EZ-Bar Curl',
    description: 'A biceps exercise that uses an EZ-bar to allow for a more comfortable and neutral grip during the curl motion.',
    src: null,
  },
  {
    id: 10,
    name: 'EZ-Bar Preacher Curl',
    description: 'An exercise that isolates the biceps by curling an EZ-bar on a preacher bench with the arms supported.',
    src: null,
  },
  {
    id: 11,
    name: 'Seated Incline Dumbbell Curl',
    description: 'A variation of the dumbbell curl performed while seated on an incline bench, targeting the biceps from a different angle.',
    src: null,
  },
  {
    id: 12,
    name: 'Seated Machine Curl',
    description: 'A machine-based exercise that isolates the biceps by curling a weight stack with the arms supported.',
    src: null,
  },
];

export const triceps = [
  {
    id: 1,
    name: 'Triceps Pushdown',
    description: 'Description of exercise 1 goes here.',
    src: 'excercises/triceps_pushdown.gif',
  },
  {
    id: 2,
    name: 'Skull Crusher',
    description: 'Description of exercise 2 goes here.',
    src: 'excercises/skull_crusher.gif',
  },
  {
    id: 3,
    name: 'Tricep Press',
    description: 'Description of exercise 2 goes here.',
    src: 'excercises/tricep_press.gif',
  },
  {
    id: 4,
    name: 'Dumbbell Kickbacks',
    description: 'Description of exercise 2 goes here.',
    src: 'excercises/dumbell_kickbacks.gif',
  },
  {
    id: 5,
    name: 'Cable Overhead Triceps Extension',
    description: 'An exercise that targets the triceps by extending the arms overhead using a cable pulley system.',
    src: null,
  },
  {
    id: 6,
    name: 'Close Grip Barbell Bench Press',
    description: 'A variation of the bench press that emphasizes the triceps by using a narrower grip on the barbell.',
    src: null,
  },
  {
    id: 7,
    name: 'Dumbbell Overhead Triceps Extension',
    description: 'An exercise that targets the triceps by extending the arms overhead using dumbbells.',
    src: null,
  },
  {
    id: 8,
    name: 'EZ-Bar Skullcrusher',
    description: 'A variation of the skullcrusher exercise that involves using an EZ-bar for a more comfortable grip position.',
    src: null,
  },
  {
    id: 9,
    name: 'Lying Triceps Extension',
    description: 'An exercise that targets the triceps by extending the arms overhead while lying on a bench, using either a barbell or EZ-bar.',
    src: null,
  },
  {
    id: 10,
    name: 'Parallel Bar Triceps Dip',
    description: 'A bodyweight exercise that targets the triceps by performing dips on parallel bars.',
    src: null,
  },
  {
    id: 11,
    name: 'Ring Dip',
    description: 'A variation of the dip exercise that uses gymnastic rings for increased instability and range of motion, targeting the triceps.',
    src: null,
  },
  {
    id: 12,
    name: 'Rope Push Down',
    description: 'A variation of the triceps pushdown exercise that uses a rope attachment for a different grip and resistance curve.',
    src: null,
  },
  {
    id: 13,
    name: 'Smith Machine Close Grip Bench Press',
    description: 'A variation of the close grip bench press performed on a Smith machine, which provides a fixed bar path and can target the triceps more effectively.',
    src: null,
  },
  {
    id: 14,
    name: 'V-Bar Push Down',
    description: 'A variation of the triceps pushdown exercise that uses a V-shaped bar attachment for a different grip and resistance curve.',
    src: null,
  },
];
export const shoulders = [
  {
    id: 1,
    name: 'Behind The Neck Barbell Press',
    description: 'A shoulder press exercise where the barbell is positioned behind the neck.',
    src: null
  },
  {
    id: 2,
    name: 'Cable Face Pull',
    description: 'A cable exercise that targets the rear deltoids and upper back muscles.',
    src: null
  },
  {
    id: 3,
    name: 'Front Dumbbell Raise',
    description: 'A shoulder exercise that targets the front deltoids by raising dumbbells in front of the body.',
    src: null
  },
  {
    id: 4,
    name: 'Hammer Strength Shoulder Press',
    description: 'A machine-based shoulder press exercise that mimics the movement of a traditional overhead press.',
    src: null
  },
  {
    id: 5,
    name: 'Lateral Dumbbell Raise',
    description: 'A shoulder exercise that targets the lateral deltoids by raising dumbbells out to the sides.',
    src: null
  },
  {
    id: 6,
    name: 'Lateral Machine Raise',
    description: 'A machine-based variation of the lateral raise that targets the lateral deltoids.',
    src: null
  },
  {
    id: 7,
    name: 'Log Press',
    description: 'A shoulder press exercise using a thick, log-shaped barbell to emphasize grip strength.',
    src: null
  },
  {
    id: 8,
    name: 'One-Arm Standing Dumbbell Press',
    description: 'A unilateral shoulder press exercise performed while standing with a dumbbell in one hand.',
    src: null
  },
  {
    id: 9,
    name: 'Overhead Press',
    description: 'A compound exercise that works the shoulders, triceps, and core by pressing weight overhead.',
    src: null
  },
  {
    id: 10,
    name: 'Push Press',
    description: 'A variation of the overhead press that incorporates leg drive to help move the weight overhead.',
    src: null
  },
  {
    id: 11,
    name: 'Rear Delt Dumbbell Raise',
    description: 'A shoulder exercise that targets the rear deltoids by raising dumbbells to the rear.',
    src: null
  },
  {
    id: 12,
    name: 'Rear Delt Machine Fly',
    description: 'A machine-based exercise that targets the rear deltoids by mimicking a reverse fly motion.',
    src: null
  },
  {
    id: 13,
    name: 'Seated Dumbbell Lateral Raise',
    description: 'A variation of the lateral raise performed while seated to isolate the lateral deltoids.',
    src: null
  },
  {
    id: 14,
    name: 'Seated Dumbbell Press',
    description: 'A shoulder press exercise performed while seated with dumbbells to emphasize shoulder stability.',
    src: null
  },
  {
    id: 15,
    name: 'Smith Machine Overhead Press',
    description: 'An overhead press variation performed on a Smith machine, which allows for a fixed vertical path.',
    src: null
  }
]; export const legs = [
  {
    id: 1,
    name: 'Barbell Calf Raise',
    description: 'A calf exercise performed by raising up on the toes with a barbell across the shoulders.',
    src: null
  },
  {
    id: 2,
    name: 'Barbell Front Squat',
    description: 'A squat variation where the barbell is held across the front of the shoulders.',
    src: null
  },
  {
    id: 3,
    name: 'Barbell Glute Bridge',
    description: 'A glute and hamstring exercise performed by raising the hips off the floor with a barbell across the hips.',
    src: null
  },
  {
    id: 4,
    name: 'Barbell Squat',
    description: 'A compound leg exercise that works the quadriceps, hamstrings, and glutes by squatting with a barbell across the upper back.',
    src: null
  },
  {
    id: 5,
    name: 'Donkey Calf Raise',
    description: 'A calf exercise performed by raising up on the toes with the body bent over and supported by a platform or bench.',
    src: null
  },
  {
    id: 6,
    name: 'Glute-Ham Raise',
    description: 'A challenging exercise that works the hamstrings and glutes by raising the body from a kneeling position.',
    src: null
  },
  {
    id: 7,
    name: 'Leg Extension Machine',
    description: 'A machine that isolates and works the quadriceps by extending the legs against resistance.',
    src: null
  },
  {
    id: 8,
    name: 'Leg Press',
    description: 'A machine-based exercise that works the entire lower body by pressing weight away with the legs.',
    src: null
  },
  {
    id: 9,
    name: 'Lying Leg Curl Machine',
    description: 'A machine that works the hamstrings by curling the legs while lying face down.',
    src: null
  },
  {
    id: 10,
    name: 'Romanian Deadlift',
    description: 'A deadlift variation that emphasizes the hamstrings by keeping the legs straight and hinging at the hips.',
    src: null
  },
  {
    id: 11,
    name: 'Seated Calf Raise Machine',
    description: 'A machine that allows for isolated calf raises while seated with a weight pad across the knees.',
    src: null
  },
  {
    id: 12,
    name: 'Seated Leg Curl Machine',
    description: 'A machine that works the hamstrings by curling the legs while seated with a weight pad across the thighs.',
    src: null
  },
  {
    id: 13,
    name: 'Standing Calf Raise Machine',
    description: 'A machine that allows for standing calf raises with weight plates or a weight stack.',
    src: null
  },
  {
    id: 14,
    name: 'Stiff-Legged Deadlift',
    description: 'A deadlift variation that emphasizes the hamstrings by keeping the legs straight and hinging at the hips.',
    src: null
  },
  {
    id: 15,
    name: 'Sumo Deadlift',
    description: 'A deadlift variation with a wider stance that emphasizes the inner thighs and glutes.',
    src: null
  }
];
export const back = [
  {
    id: 1,
    name: 'Barbell Row',
    description: 'A compound exercise that works the back muscles by rowing a barbell toward the body.',
    src: null
  },
  {
    id: 2,
    name: 'Barbell Shrug',
    description: 'An exercise that targets the trapezius muscles by shrugging the shoulders with a barbell.',
    src: null
  },
  {
    id: 3,
    name: 'Chin Up',
    description: 'A pull-up variation where the palms face inward, emphasizing the biceps and back muscles.',
    src: null
  },
  {
    id: 4,
    name: 'Deadlift',
    description: 'A compound exercise that works the back, legs, and core by lifting a weight off the floor.',
    src: null
  },
  {
    id: 5,
    name: 'Dumbbell Row',
    description: 'A unilateral exercise that works the back muscles by rowing a dumbbell toward the body.',
    src: null
  },
  {
    id: 6,
    name: 'Good Morning',
    description: 'A hamstring and lower back exercise performed by bending at the hips while keeping the legs straight.',
    src: null
  },
  {
    id: 7,
    name: 'Hammer Strength Row',
    description: 'A machine-based rowing exercise that mimics the movement of a barbell or dumbbell row.',
    src: null
  },
  {
    id: 8,
    name: 'Lat Pulldown',
    description: 'An exercise that works the lats and back muscles by pulling a bar down behind the neck.',
    src: null
  },
  {
    id: 9,
    name: 'Machine Shrug',
    description: 'A machine-based exercise that targets the trapezius muscles by shrugging against resistance.',
    src: null
  },
  {
    id: 10,
    name: 'Neutral Chin Up',
    description: 'A chin-up variation where the palms face each other, emphasizing the back muscles.',
    src: null
  },
  {
    id: 11,
    name: 'Pendlay Row',
    description: 'A barbell row variation that involves keeping the back flat and lifting the weight explosively.',
    src: null
  },
  {
    id: 12,
    name: 'Pull Up',
    description: 'A compound exercise that works the back and arm muscles by pulling the body up to a bar.',
    src: null
  },
  {
    id: 13,
    name: 'Rack Pull',
    description: 'A deadlift variation where the barbell is elevated on racks, emphasizing the back muscles.',
    src: null
  },
  {
    id: 14,
    name: 'Seated Cable Row',
    description: 'A cable rowing exercise performed while seated that targets the back muscles.',
    src: null
  },
  {
    id: 15,
    name: 'Straight-Arm Cable Pushdown',
    description: 'A cable exercise that works the lats by pushing a bar or rope straight down with straight arms.',
    src: null
  }
];
export const abs = [
  {
    id: 1,
    name: 'Ab-Wheel Rollout',
    description: 'An exercise that works the abs by rolling out on an ab wheel from a plank position.',
    src: null
  },
  {
    id: 2,
    name: 'Cable Crunch',
    description: 'A cable exercise that targets the abs by crunching against resistance from a cable machine.',
    src: null
  },
  {
    id: 3,
    name: 'Crunch',
    description: 'A classic exercise that works the abs by curling the torso off the floor.',
    src: null
  },
  {
    id: 4,
    name: 'Crunch Machine',
    description: 'A machine-based exercise that allows for isolated crunches to target the abs.',
    src: null
  },
  {
    id: 5,
    name: 'Decline Crunch',
    description: 'A crunch variation performed on a decline bench, increasing the emphasis on the lower abs.',
    src: null
  },
  {
    id: 6,
    name: 'Dragon Flag',
    description: 'An advanced exercise that works the entire core by raising and lowering the body from a bench.',
    src: null
  },
  {
    id: 7,
    name: 'Hanging Knee Raise',
    description: 'An exercise that targets the abs and hip flexors by raising the knees toward the chest while hanging.',
    src: null
  },
  {
    id: 8,
    name: 'Hanging Leg Raise',
    description: 'A challenging exercise that works the abs by raising the straight legs while hanging from a bar.',
    src: null
  },
  {
    id: 9,
    name: 'Plank',
    description: 'A static exercise that works the core by holding a push-up position on the forearms and toes.',
    src: null
  },
  {
    id: 10,
    name: 'Side Plank',
    description: 'A variation of the plank that targets the obliques by holding a side-lying position on one elbow.',
    src: null
  }
];
export const cardio = [];

export const excerciseMap = { chest, biceps, back, triceps, shoulders, legs, abs, cardio };

export const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className='p-7'>
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">Chest Exercises</span>
        </h2>
        <Slider {...sliderSettings}>
          {chest.map((exercise) => (

            <ExcersizeCard
              src={exercise.src}
              name={exercise.name}
              description={exercise.description}
            />
          ))}
        </Slider>
      </div>
      <div className='p-7'>
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">Bicep Exercises</span>
        </h2>
        <Slider {...sliderSettings}>
          {biceps.map((exercise) => (

            <ExcersizeCard
              src={exercise.src}
              name={exercise.name}
              description={exercise.description}
            />
          ))}
        </Slider>
      </div>
      <div className='p-7'>
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">Tricep Exercises</span>
        </h2>
        <Slider {...sliderSettings}>
          {triceps.map((exercise) => (

            <ExcersizeCard
              src={exercise.src}
              name={exercise.name}
              description={exercise.description}
            />
          ))}
        </Slider>
      </div>


      {/* <ExcersizeCard src={'test.mp4'} name={"Test Excersize"} description={"This is just a testing excersize for core"} /> */}
    </>
  )
}
