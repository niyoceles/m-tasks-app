import mongoose from 'mongoose';
const Schema = mongoose.Schema;

let TaskSchema = new Schema({
    name: {type: String, required: true, max: 100},
    price: {type: Number, required: true},
});

const task = mongoose.model('Task', TaskSchema);

// Export the model
export default task