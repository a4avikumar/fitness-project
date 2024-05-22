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
    name: 'Incline Dumbbell Flys',
    description: 'Description of exercise 2 goes here.',
    src: 'excercises/dumbell_flys.gif',
  },
  {
    id: 7,
    name: 'Decline Barbell Bench Press',
    description: 'An exercise that works the chest muscles, particularly the lower portion, by performing a bench press on a decline bench.',
    src: 'excercises/dmbp.gif',
  },
  {
    id: 10,
    name: 'Flat Dumbbell Bench Press',
    description: 'A variation of the bench press that uses dumbbells instead of a barbell, allowing for a greater range of motion and increased stabilization.',
    src: 'excercises/Dumbbell-Press.gif',
  },
  {
    id: 11,
    name: 'Flat Dumbbell Fly',
    description: 'An exercise that targets the chest muscles, particularly the outer portion, by moving the arms in a fly motion with dumbbells while lying on a flat bench.',
    src: 'excercises/fdf.gif',
  },
  {
    id: 12,
    name: 'Incline Barbell Bench Press',
    description: 'A variation of the bench press that targets the upper portion of the chest muscles by performing the exercise on an incline bench.',
    src: 'excercises/ibbp.gif',
  },
  {
    id: 15,
    name: 'Seated Machine Fly',
    description: 'An exercise that works the chest muscles, particularly the outer portion, by performing a fly motion on a seated machine.',
    src: 'excercises/mf.gif',
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
    src: 'excercises/cc.gif',
  },
  {
    id: 6,
    name: 'Dumbbell Curl',
    description: 'A biceps exercise that involves curling a dumbbell in each hand towards the shoulders.',
    src: 'excercises/dc.gif',
  },
  {
    id: 10,
    name: 'EZ-Bar Preacher Curl',
    description: 'An exercise that isolates the biceps by curling an EZ-bar on a preacher bench with the arms supported.',
    src: 'excercises/ezpc.gif',
  },
  {
    id: 11,
    name: 'Seated Incline Dumbbell Curl',
    description: 'A variation of the dumbbell curl performed while seated on an incline bench, targeting the biceps from a different angle.',
    src: 'excercises/sibc.gif',

  },
  {
    id: 12,
    name: 'Seated Machine Curl',
    description: 'A machine-based exercise that isolates the biceps by curling a weight stack with the arms supported.',
    src: 'excercises/lpc.gif',
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
    id: 4,
    name: 'Dumbbell Kickbacks',
    description: 'Description of exercise 2 goes here.',
    src: 'excercises/dumbell_kickbacks.gif',
  },
  {
    id: 5,
    name: 'Cable Overhead Triceps Extension',
    description: 'An exercise that targets the triceps by extending the arms overhead using a cable pulley system.',
    src: 'excercises/cote.gif',
  },
  {
    id: 6,
    name: 'Close Grip Barbell Bench Press',
    description: 'A variation of the bench press that emphasizes the triceps by using a narrower grip on the barbell.',
    src: 'excercises/cgbp.gif',
  },
  {
    id: 7,
    name: 'Dumbbell Overhead Triceps Extension',
    description: 'An exercise that targets the triceps by extending the arms overhead using dumbbells.',
    src: 'excercises/dote.gif',
  },
  {
    id: 8,
    name: 'EZ-Bar Skullcrusher',
    description: 'A variation of the skullcrusher exercise that involves using an EZ-bar for a more comfortable grip position.',
    src: 'excercises/ete.gif',
  },
  {
    id: 9,
    name: 'Lying Triceps Extension',
    description: 'An exercise that targets the triceps by extending the arms overhead while lying on a bench, using either a barbell or EZ-bar.',
    src: 'excercises/lte.gif',
  },
  {
    id: 10,
    name: 'Parallel Bar Triceps Dip',
    description: 'A bodyweight exercise that targets the triceps by performing dips on parallel bars.',
    src: 'excercises/pdp.gif',
  },
  {
    id: 11,
    name: 'Ring Dip',
    description: 'A variation of the dip exercise that uses gymnastic rings for increased instability and range of motion, targeting the triceps.',
    src: 'excercises/rd.gif',
  },
  {
    id: 12,
    name: 'Rope Push Down',
    description: 'A variation of the triceps pushdown exercise that uses a rope attachment for a different grip and resistance curve.',
    src: 'excercises/rpd.gif',
  },
  {
    id: 14,
    name: 'V-Bar Push Down',
    description: 'A variation of the triceps pushdown exercise that uses a V-shaped bar attachment for a different grip and resistance curve.',
    src: 'excercises/vpd.gif',
  },
];
export const shoulders = [
  {
    id: 2,
    name: 'Cable Face Pull',
    description: 'A cable exercise that targets the rear deltoids and upper back muscles.',
    src: 'excercises/cfp.gif',
  },
  {
    id: 3,
    name: 'Front Dumbbell Raise',
    description: 'A shoulder exercise that targets the front deltoids by raising dumbbells in front of the body.',
    src: 'excercises/fdr.gif',
  },
  {
    id: 5,
    name: 'Lateral Dumbbell Raise',
    description: 'A shoulder exercise that targets the lateral deltoids by raising dumbbells out to the sides.',
    src: 'excercises/ldp.gif',
  },
  {
    id: 6,
    name: 'Lateral Machine Raise',
    description: 'A machine-based variation of the lateral raise that targets the lateral deltoids.',
    src: 'excercises/mlr.gif',
  },
  {
    id: 8,
    name: 'One-Arm Standing Dumbbell Press',
    description: 'A unilateral shoulder press exercise performed while standing with a dumbbell in one hand.',
    src: 'excercises/osp.gif',
  },
  {
    id: 9,
    name: 'Overhead Press',
    description: 'A compound exercise that works the shoulders, triceps, and core by pressing weight overhead.',
    src: 'excercises/op.gif',
  },
  {
    id: 10,
    name: 'Push Press',
    description: 'A variation of the overhead press that incorporates leg drive to help move the weight overhead.',
    src: 'excercises/pp.gif',
  },
  {
    id: 11,
    name: 'Rear Delt Dumbbell Raise',
    description: 'A shoulder exercise that targets the rear deltoids by raising dumbbells to the rear.',
    src: 'excercises/rdp.gif',
  },
  {
    id: 12,
    name: 'Rear Delt Machine Fly',
    description: 'A machine-based exercise that targets the rear deltoids by mimicking a reverse fly motion.',
    src: 'excercises/rdf.gif',
  },
  {
    id: 13,
    name: 'Seated Dumbbell Lateral Raise',
    description: 'A variation of the lateral raise performed while seated to isolate the lateral deltoids.',
    src: 'excercises/slr.gif',
  },
]; export const legs = [
  {
    id: 1,
    name: 'Barbell Calf Raise',
    description: 'A calf exercise performed by raising up on the toes with a barbell across the shoulders.',
    src: 'excercises/bcr.gif',
  },
  {
    id: 2,
    name: 'Barbell Front Squat',
    description: 'A squat variation where the barbell is held across the front of the shoulders.',
    src: 'excercises/bfs.gif',
  },
  {
    id: 3,
    name: 'Barbell Glute Bridge',
    description: 'A glute and hamstring exercise performed by raising the hips off the floor with a barbell across the hips.',
    src: 'excercises/bcb.gif',
  },
  {
    id: 4,
    name: 'Barbell Squat',
    description: 'A compound leg exercise that works the quadriceps, hamstrings, and glutes by squatting with a barbell across the upper back.',
    src: 'excercises/bs.gif',
  },
  {
    id: 5,
    name: 'Donkey Calf Raise',
    description: 'A calf exercise performed by raising up on the toes with the body bent over and supported by a platform or bench.',
    src: 'excercises/dcf.gif',
  },
  {
    id: 6,
    name: 'Glute-Ham Raise',
    description: 'A challenging exercise that works the hamstrings and glutes by raising the body from a kneeling position.',
    src: 'excercises/ghm.gif',
  },
  {
    id: 7,
    name: 'Leg Extension Machine',
    description: 'A machine that isolates and works the quadriceps by extending the legs against resistance.',
    src: 'excercises/le.gif',
  },
  {
    id: 8,
    name: 'Leg Press',
    description: 'A machine-based exercise that works the entire lower body by pressing weight away with the legs.',
    src: 'excercises/lp.gif',
  },
  {
    id: 9,
    name: 'Lying Leg Curl Machine',
    description: 'A machine that works the hamstrings by curling the legs while lying face down.',
    src: 'excercises/llc.gif',
  },
  {
    id: 10,
    name: 'Romanian Deadlift',
    description: 'A deadlift variation that emphasizes the hamstrings by keeping the legs straight and hinging at the hips.',
    src: 'excercises/rde.gif',
  },
  {
    id: 12,
    name: 'Seated Leg Curl Machine',
    description: 'A machine that works the hamstrings by curling the legs while seated with a weight pad across the thighs.',
    src: 'excercises/slc.gif',
  },
  {
    id: 13,
    name: 'Standing Calf Raise Machine',
    description: 'A machine that allows for standing calf raises with weight plates or a weight stack.',
    src: 'excercises/crm.gif',
  },
  {
    id: 15,
    name: 'Sumo Deadlift',
    description: 'A deadlift variation with a wider stance that emphasizes the inner thighs and glutes.',
    src: 'excercises/sd.gif',
  }
];
export const back = [
  {
    id: 1,
    name: 'Barbell Row',
    description: 'A compound exercise that works the back muscles by rowing a barbell toward the body.',
    src: 'excercises/br.gif',
  },
  {
    id: 2,
    name: 'Barbell Shrug',
    description: 'An exercise that targets the trapezius muscles by shrugging the shoulders with a barbell.',
    src: 'excercises/bshrug.gif',
  },
  {
    id: 3,
    name: 'Chin Up',
    description: 'A pull-up variation where the palms face inward, emphasizing the biceps and back muscles.',
    src: 'excercises/cu.gif',
  },
  {
    id: 4,
    name: 'Deadlift',
    description: 'A compound exercise that works the back, legs, and core by lifting a weight off the floor.',
    src: 'excercises/d.gif',
  },
  {
    id: 5,
    name: 'Dumbbell Row',
    description: 'A unilateral exercise that works the back muscles by rowing a dumbbell toward the body.',
    src: 'excercises/dr.gif',
  },
  {
    id: 8,
    name: 'Lat Pulldown',
    description: 'An exercise that works the lats and back muscles by pulling a bar down behind the neck.',
    src: 'excercises/lpull.gif',
  },
  {
    id: 9,
    name: 'Machine Shrug',
    description: 'A machine-based exercise that targets the trapezius muscles by shrugging against resistance.',
    src: 'excercises/ms.gif',
  },
  {
    id: 11,
    name: 'Pendlay Row',
    description: 'A barbell row variation that involves keeping the back flat and lifting the weight explosively.',
    src: 'excercises/pr.gif',
  },
  {
    id: 12,
    name: 'Pull Up',
    description: 'A compound exercise that works the back and arm muscles by pulling the body up to a bar.',
    src: 'excercises/pu.gif',
  },
  {
    id: 14,
    name: 'Seated Cable Row',
    description: 'A cable rowing exercise performed while seated that targets the back muscles.',
    src: 'excercises/scr.gif',
  },
];
export const abs = [
  {
    id: 1,
    name: 'Ab-Wheel Rollout',
    description: 'An exercise that works the abs by rolling out on an ab wheel from a plank position.',
    src: 'excercises/wr.gif',
  },
  {
    id: 2,
    name: 'Cable Crunch',
    description: 'A cable exercise that targets the abs by crunching against resistance from a cable machine.',
    src: 'excercises/ccru.gif',
  },
  {
    id: 3,
    name: 'Crunch',
    description: 'A classic exercise that works the abs by curling the torso off the floor.',
    src: 'excercises/c.gif',
  },
  {
    id: 4,
    name: 'Crunch Machine',
    description: 'A machine-based exercise that allows for isolated crunches to target the abs.',
    src: 'excercises/fcm.gif',
  },
  {
    id: 6,
    name: 'Dragon Flag',
    description: 'An advanced exercise that works the entire core by raising and lowering the body from a bench.',
    src: 'excercises/df.gif',
  },
  {
    id: 7,
    name: 'Hanging Knee Raise',
    description: 'An exercise that targets the abs and hip flexors by raising the knees toward the chest while hanging.',
    src: 'excercises/hkr.gif',
  },
  {
    id: 8,
    name: 'Hanging Leg Raise',
    description: 'A challenging exercise that works the abs by raising the straight legs while hanging from a bar.',
    src: 'excercises/hlr.gif',
  },
  {
    id: 9,
    name: 'Plank',
    description: 'A static exercise that works the core by holding a push-up position on the forearms and toes.',
    src: 'excercises/p.gif',
  },
//   {
//     id: 10,
//     name: 'Side Plank',
//     description: 'A variation of the plank that targets the obliques by holding a side-lying position on one elbow.',
//     src: 'excercises/sp.',
//   }
];
export const cardio = [];

export const excerciseMap = { chest, biceps, back, triceps, shoulders, legs, abs, cardio };

export const FormCheck = () => {
  return (
    <>
      <Navbar></Navbar>
      <div>
      <div className='p-7'>
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">Chest Exercises</span>
        </h2>
        <Slider {...sliderSettings}>
          {chest.map((exercise) => (

            <ExcersizeCard
              src={exercise.src}
              name={exercise.name}
              link={`/excercises/chest/${exercise.name}/sets`}
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
              link={`/excercises/biceps/${exercise.name}/sets`}
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
              link={`/excercises/triceps/${exercise.name}/sets`}
              description={exercise.description}
            />
          ))}
        </Slider>
      </div>
      <div className='p-7'>
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">Back Exercises</span>
        </h2>
        <Slider {...sliderSettings}>
          {back.map((exercise) => (
            <ExcersizeCard
              src={exercise.src}
              name={exercise.name}
              link={`/excercises/back/${exercise.name}/sets`}
              description={exercise.description}
            />
          ))}
        </Slider>
      </div>
      <div className='p-7'>
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">Legs Exercises</span>
        </h2>
        <Slider {...sliderSettings}>
          {legs.map((exercise) => (
            <ExcersizeCard
              src={exercise.src}
              name={exercise.name}
              link={`/excercises/back/${exercise.name}/sets`}
              description={exercise.description}
            />
          ))}
        </Slider>
      </div>
      <div className='p-7'>
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">abs Exercises</span>
        </h2>
        <Slider {...sliderSettings}>
          {abs.map((exercise) => (
            <ExcersizeCard
              src={exercise.src}
              name={exercise.name}
              link={`/excercises/back/${exercise.name}/sets`}
              description={exercise.description}
            />
          ))}
        </Slider>
      </div>
      <div className='p-7'>
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">Shoulders Exercises</span>
        </h2>
        <Slider {...sliderSettings}>
          {shoulders.map((exercise) => (
            <ExcersizeCard
              src={exercise.src}
              name={exercise.name}
              link={`/excercises/back/${exercise.name}/sets`}
              description={exercise.description}
            />
          ))}
        </Slider>
      </div>
      </div>
      


      {/* <ExcersizeCard src={'test.mp4'} name={"Test Excersize"} description={"This is just a testing excersize for core"} /> */}
    </>
  )
}
