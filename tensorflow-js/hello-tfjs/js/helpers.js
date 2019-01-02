// function create_vector(length, upper_limit) {
//     const values = [];
    
//     for (let i = 0; i < length; i++) {
//         values[i] = Math.random() * upper_limit + 1;
//     }

//     return values;
// }

const create_vector = (len, upper_limit) => Array
    .apply(null, Array(len))
    .map(n => Math.random() * upper_limit);
    