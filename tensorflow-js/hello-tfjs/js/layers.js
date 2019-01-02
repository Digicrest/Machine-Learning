window.onload = () => {
    const data_count = 30;
    const shape = [2, 5, 2]
    const type = 'int32';

    const values = create_vector(20, 10);

    //values, shape, datatype
    const tense = tf.tensor3d(values, shape, 'int32');
    console.log(tense);
}