// TENSORS
    // 0D | Scalar   - 3                            | tf.tensor
    // 1D | Vector   - [1, 2, 3]                    | tf.tensor1d
    // 2D | Matrix   - [[1], [2]]                   | tf.tensor2d
    // 3D | Cube     - [[[1], [2]], [[3], [4]]]     | tf.tensor3d

    // up to N dimensions, defined in shape.

window.onload = () => {
    const data_count = 30;
    const shape = [2, 5, 3]
    const type = 'int32';

    const values = [];
    for (let i = 0; i < data_count; i++) {
        values.push(Math.random() * 100 + 1);
    }

    //values, shape, datatype
    const tense = tf.tensor3d(values, shape, 'int32');

    // dataSync instead of using then on promise 
    //resoluition will return the 1dimensional array containing all numbers
    tense.data().then(r => console.log(r));
    console.log(tense.get(10));
    console.log(tense.dataSync());
    tense.print();
    console.log(tense);

    // once a tensor is created its immutable and cannot be changed
    // not immutable in the traditional sense, but more like final/constant
    const vtense = tf.variable(tense);
    console.log(vtense);


    // clean up tensors after usage, prevent memory leak
    tf.tidy(myStuff);
}

function myStuff() {
    const shapeA = [5, 3];
    const shapeB = [3, 5];

    for(let i = 0; i < 100; i++) {
        const a = tf.tensor2d(create_vector(15, 10), shapeA, 'int32');
        const b = tf.tensor2d(create_vector(15, 20), shapeB, 'int32');
        const b_t = b.transpose();
        const c = a.matMul(b);
    
        // work with tensors
        // a.print();
        // b.print();
        c.print();
    }
}