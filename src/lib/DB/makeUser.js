// import { getDB, saveDB } from "./initDB"

// export const signupUser = (username, fullname, password) => {
//     const DB = getDB()

//     DB[username] = {
//         password,
//         fullname
//     }

//     DB.currentUser = username

//     saveDB(DB)
// }

// export const loginUser = (username, password) => {

//     const DB = getDB()

//     if (!DB[username]) return;

//     if (DB[username].password === password) {
//         DB.currentUser = username
//     } else {
//         DB.currentUser = undefined
//     }

//     saveDB(DB)
// }

// export const logoutUser = () => {
//     const DB = getDB()
//     DB.currentUser = undefined
//     saveDB(DB)
// }

// // addSet(name, {reps: 0, weight: 0})

// export const addSet = (excersize, sub, {reps, weight}) => {
//     const DB = getDB()

//     if (!DB.currentUser) return

//     DB[DB.currentUser][excersize][sub].push({reps, weight})

//     saveDB(DB)
// }

// // editSet(name, index, {reps: 49i498, weight: 0})
// export const editSet = (excersize, index, set) => {
//     const DB = getDB()

//     if (!DB.currentUser) return;
    
    
//     if (!DB.currentUser[excersize][index]) return;
    
//     DB.currentUser.excersize[index] = set
    
//     saveDB(DB)
// }

// export const getSets = (excersize, sub) => {
//     const DB = getDB()
    
//     if (!DB.currentUser) return [];
    
//     if (!DB[DB.currentUser][excersize]) {
//         DB[DB.currentUser][excersize] = {}
//     }

//     if (!DB[DB.currentUser][excersize][sub]) {
//         DB[DB.currentUser][excersize][sub] = []
//     }

//     saveDB(DB)

//     return DB[DB.currentUser][excersize][sub]
// }
import { getDB, saveDB } from "./initDB";
import { Link, useNavigate } from "react-router-dom";


export const signupUser = (username, fullname, password) => {
    const DB = getDB();

    if (DB[username]) {
        DB.currentUser = username;
        return { success: false, message: "Username already exists" };
    }

    DB[username] = {
        password,
        fullname
    };

    DB.currentUser = username;

    saveDB(DB);

    return { success: true, message: "Signup successful" };
};

export const loginUser = (username, password) => {
    const DB = getDB();

    if (!DB[username]) {
        return { success: false, message: "User not found" };
    }

    if (DB[username].password === password) {
        DB.currentUser = username;
        saveDB(DB);
        return { success: true, message: "Login successful" };
    } else {
        DB.currentUser = undefined;
        saveDB(DB);
        return { success: false, message: "Incorrect password" };
    }
};

export const logoutUser = () => {
    const DB = getDB();
    DB.currentUser = undefined;
    saveDB(DB);

};

// addSet(name, {reps: 0, weight: 0})
export const addSet = (exercise, sub, { reps, weight }) => {
    const DB = getDB();

    if (!DB.currentUser) return;

    DB[DB.currentUser][exercise][sub].push({ reps, weight });

    saveDB(DB);
};

// editSet(name, index, {reps: 49i498, weight: 0})
export const editSet = (exercise, index, set) => {
    const DB = getDB();

    if (!DB.currentUser) return;

    if (!DB[DB.currentUser][exercise][index]) return;

    DB[DB.currentUser][exercise][index] = set;

    saveDB(DB);
};

export const getSets = (exercise, sub) => {
    const DB = getDB();

    if (!DB.currentUser) return [];

    if (!DB[DB.currentUser][exercise]) {
        DB[DB.currentUser][exercise] = {};
    }

    if (!DB[DB.currentUser][exercise][sub]) {
        DB[DB.currentUser][exercise][sub] = [];
    }

    saveDB(DB);

    return DB[DB.currentUser][exercise][sub];
};
