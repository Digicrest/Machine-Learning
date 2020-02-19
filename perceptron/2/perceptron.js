// inputs into neuron, prcessing within neuron, outputs

class perceptron {
    constructor(inputs){
        this.inputs = inputs;
        this.weights = [];
        this.learningRate = .1;

        // initialize weights randomly
        this.inputs.forEach(() => this.weights.push(get_random()));
    }

    weighted_sum() {
        return this.weights.reduce((sum, w, i) => sum +=  (this.inputs[i] / 255) * w, 0)
    }

    activation(val) {
        return val > 0 ? 1 : -1;
    }

    guess(){
        // normalise weighted sum, and check activation
        return this.activation(this.weighted_sum());
    }

    train(label) {
        let guess = this.guess(this.inputs);
        let error = label - guess;

        // tune the weights
        for(let i = 0; i < this.weights.length; i++){
            this.weights[i] = error * this.inputs[i] * this.learningRate;
        }
    }
}