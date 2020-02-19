class Color {
    constructor(){
        this.red = Math.floor(get_random(255));
        this.green = Math.floor(get_random(255));
        this.blue = Math.floor(get_random(255));
    }

    show(){
      
    }
}

window.onload = function() {
    // 100 vectors of rgb [[255, 255, 255] ..... [0, 0, 0]]
    let inputs = new Array(100).fill((() => new Color())()).map(c => [c.red, c.green, c.blue])
    let small_brain = new perceptron(inputs)

    inputs.map(color => { 
        console.log(color)
        small_brain.train(color.inputs)
    })

    console.log(`rgb(${inputs[0]}, ${inputs[1]}, ${inputs[2]}) | BGC: ${small_brain.guess() === 1 ? "W" : "B"}`);
}