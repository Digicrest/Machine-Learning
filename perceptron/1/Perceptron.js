class Perceptron {
    constructor(training_data, labels, epochs = 10, learn_rate = .1) {
       this.training_data = training_data
       this.labels = labels
       this.epochs = epochs
       this.learn_rate = learn_rate

       // if classification is correct increase, else decrease
       this.accuracy = 0

       // divide by samples to determine overall accuracy for the model
       this.samples = 0

       // this is the value added to the weighted sum
       // will change relative to how model is performing
       this.bias = 0

       // 1 weight per input
       this.weights = new Array(training_data[0].length);

       // intialize weights randomly
       for( let i = 0; i < this.weights.length; i++){
           this.weights[i] = this.random();
       }
    }


    // returns random float value between -1 and 1
    random() {
        return Math.random() * 2 - 1
    };

    // returns average accuracy of model
    current_accuracy() {
        return this.accuracy / this.samples
    }

    // if sum is to low dont activate
    activation(n) {
        return n < 0 ? 0 : 1
    }

    // go over samples and predict
    predict(input) {
        // let total = this.bias;
        // for (let i = 0; i < this.weights.length; i++) {
        //     // console.log(`input[${i}]: ${input[i]} & weights[${i}]: ${this.weights[i]}`)
        //     total += input[i] * this.weights[i];
        // }

        let weighted_sum = this.weights.reduce((product, w, idx) => product + input[idx] * w, this.bias)
        return this.activation(weighted_sum);
    }

    // go over data set for given number of epochs and perform calculations ot make better predictions
    fit() {
        for (let e = 0; e < this.epochs; e++) {
            for (let i = 0; i < this.training_data.length; i++) {

                let prediction = this.predict(this.training_data[i])
                console.log(`Expected: ${this.labels[i]}, Model Output: ${prediction}`);

                // update accuracy
                this.labels[i] == prediction ? this.accuracy+=1 : this.accuracy-=1
                this.samples++;

                // calculate loss, how much did we miss by, what was the difference
                let loss = this.labels[i] - prediction

                // update weights
                for (let w = 0; w < this.weights.length; w++) {
                    this.weights[w] += loss * this.training_data[i][w] * this.learn_rate;
                }

                // update bias
                this.bias += loss * this.learn_rate
            }
            console.log(`Accuracy: ${this.current_accuracy()}`);
        }
    }
}

training_data = [
    [1, 1, 1], [0, 0, 0], [0, 0, 1], 
    [1, 1, 0], [0, 0, 1], [0, 1, 1], 
    [1, 0, 0]
];

labels = [1, 0, 0, 1, 0, 0, 1];

let p = new Perceptron(training_data, labels, epochs=100);

p.fit();
console.log(`Prediction: ` + p.predict([0, 1, 0]));