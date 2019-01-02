class Color {
    constructor(){
        this.red = Math.floor(get_random(255));
        this.green = Math.floor(get_random(255));
        this.blue = Math.floor(get_random(255));
    }

    show(){
        console.log(`R: ${this.red}, G: ${this.green}, B: ${this.blue}`)
    }
}
window.onload = function() {
    let colors = [];
    
    for(let i = 0; i < 100; i++){
        colors.push(new Color())
    }
    let formatted_colors = colors.map(c => {
        let x = [];
        x.push(c.red);
        x.push(c.green);
        x.push(c.blue);
        return x;
    })
    
    // 100 vectors of rgb [[255, 255, 255] ..... [0, 0, 0]]
    let small_brain = new perceptron(formatted_colors);

    colors.map(color => {
        color.show()

    });

    colors.map(color => {
        brain.train(color.inputs)
    })
    console.log(`rgb(${inputs[0]}, ${inputs[1]}, ${inputs[2]}) | BGC: ${small_brain.guess() === 1 ? "W" : "B"}`);
}