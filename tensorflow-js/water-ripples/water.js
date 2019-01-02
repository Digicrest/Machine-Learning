let cols;
let rows;
let buffer2;
let buffer1;
let kernel;
let damping;
let canvas;

function setup(){
    canvas = createCanvas(600, 400);

    cols = width;
    rows = height;
    damping = tf.scalar(.9);

    buffer2 = tf.zeros([rows, cols, 1]);
    buffer1 = tf.zerosLike(buffer2);

    // apply as convolution
    kernel = tf.tensor([
        0, 0.5, 0,
        .5, 0, 0.5,
        0, 0.5, 0
    ]).as4D(3, 3, 1, 1);
}

function mouseDragged() {
    let buffer = buffer1.buffer();
    buffer.set(1, mouseY, mouseX, 0);
    buffer1 = buffer.toTensor();
}

function draw() {
    let temp2 = tf.tidy(() => {
        let temp1 = tf.conv2d(buffer1, kernel, 1, 'same');
        return temp1.sub(buffer2).mul(damping).clipByValue(0, 1);
    });
    
    // display the water ripples
    // memory leak
    tf.toPixels(temp2, canvas.elt);
    buffer2.dispose();

    //swapping
    buffer2 = buffer1;
    buffer1 = temp2;
}