const API_BASE_URL = 'http://localhost:3000/api';

export const registerUser = async (user) => {
    const response = await fetch(`${API_BASE_URL}/user/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    });
    return response.json();
};

export const loginUser = async (credentials) => {
    const response = await fetch(`${API_BASE_URL}/user/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
    });
    return response.json();
};

export const addWorkout = async (workout) => {
    const response = await fetch(`${API_BASE_URL}/workout`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(workout),
    });
    return response.json();
};

export const getWorkouts = async (userId) => {
    const response = await fetch(`${API_BASE_URL}/workouts/${userId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return response.json();
};
