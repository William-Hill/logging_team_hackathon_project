// import * as tf from '@tensorflow/tfjs';
// // import '@tensorflow/tfjs-node';
const tf = require('@tensorflow/tfjs');
// require('@tensorflow/tfjs-node');
// import * as use from '@tensorflow-models/universal-sentence-encoder';
const use = require('@tensorflow-models/universal-sentence-encoder')

// import apache_logs from './apache_logs.json';
const apache_logs = require('./apache_logs.json')

// console.log("apache_logs:", apache_logs)

const encodeData = data => {
    const sentences = data.map(comment => comment.text.toLowerCase());
    // console.log("sentences:", sentences)
    const trainingData = use.load()
        .then(model => {
            return model.embed(sentences)
                .then(embeddings => {
                    return embeddings;
                });
        })
        .catch(err => console.error('Fit Error:', err));
    
    // console.log("trainingData:", trainingData)
    return trainingData
};

const encodedApacheLogs = encodeData(apache_logs).then((data) => {
    console.log("data:", data)
    return data})
// console.log("encodedApacheLogs:", encodedApacheLogs)