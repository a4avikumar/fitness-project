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

const chest = [
    {
        id: 1,
        name: 'Exercise 1',
        description: 'Description of exercise 1 goes here.',
        src: 'excercises/bench_press.gif',
    },
    {
        id: 2,
        name: 'Exercise 2',
        description: 'Description of exercise 2 goes here.',
        src: 'excercises/push_up.gif',
    },
    {
        id: 2,
        name: 'Exercise 2',
        description: 'Description of exercise 2 goes here.',
        src: 'excercises/incline_dumbell_bench_press.gif',
    },
    {
        id: 2,
        name: 'Exercise 2',
        description: 'Description of exercise 2 goes here.',
        src: 'excercises/cable_crossover.gif',
    },
    {
        id: 2,
        name: 'Exercise 2',
        description: 'Description of exercise 2 goes here.',
        src: 'excercises/incline_dumbell_bench_press.gif',
    },
    {
        id: 2,
        name: 'Exercise 2',
        description: 'Description of exercise 2 goes here.',
        src: 'excercises/dumbell_flys.gif',
    },
];
const biceps = [
    {
        id: 1,
        name: 'Exercise 1',
        description: 'Description of exercise 1 goes here.',
        src: 'excercises/barbell_curl.gif',
    },
    {
        id: 2,
        name: 'Exercise 2',
        description: 'Description of exercise 2 goes here.',
        src: 'excercises/cable_curl.gif',
    },
    {
        id: 2,
        name: 'Exercise 2',
        description: 'Description of exercise 2 goes here.',
        src: 'excercises/hammer_curl.gif',
    },
    {
        id: 2,
        name: 'Exercise 2',
        description: 'Description of exercise 2 goes here.',
        src: 'excercises/preacher_curl.gif',
    },
];
const triceps = [
    {
        id: 1,
        name: 'Exercise 1',
        description: 'Description of exercise 1 goes here.',
        src: 'excercises/triceps_pushdown.gif',
    },
    {
        id: 2,
        name: 'Exercise 2',
        description: 'Description of exercise 2 goes here.',
        src: 'excercises/skull_crusher.gif',
    },
    {
        id: 2,
        name: 'Exercise 2',
        description: 'Description of exercise 2 goes here.',
        src: 'excercises/tricep_press.gif',
    },
    {
        id: 2,
        name: 'Exercise 2',
        description: 'Description of exercise 2 goes here.',
        src: 'excercises/dumbell_kickbacks.gif',
    },
];
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
