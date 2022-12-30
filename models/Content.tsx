const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ContentSchema = new Schema({
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    class: { type: Number, required: true },
    video: { type: String },
    watchtime: { type: String },
    downloads: { type: String },
    comments: { type: String },
    playlist: { type: Schema.Types.ObjectId, ref: 'Playlist' },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    availableQty: { type: Number, required: true },
}, { timestamps: true });

mongoose.models = {}
export default mongoose.model('Content', ContentSchema);
//# sourceMappingURL=Content.js.map

// get example of playlist data from the database result
// const playlist = [
//     {
//         _id: '5e9b1b9b9c9d440000a1b0f5',
//         title: 'Video 1',
//         slug: 'video-1',
//         description: 'Video 1 description',
//         image: 'https://i.ytimg.com/vi/1Q8fG0TtVAY/maxresdefault.jpg',
//         video: 'https://www.youtube.com/watch?v=1Q8fG0TtVAY',
//         watchtime: '1:00',
//         downloads: '100',
//         comments: '10',
//         playlist: '5e9b1b9b9c9d440000a1b0f5',
//         price: 0,
//         category: '5e9b1b9b9c9d440000a1b0f5',
//         availableQty: 100,
//         createdAt: '2020-04-20T18:30:19.000Z',
//         updatedAt: '2020-04-20T18:30:19.000Z',
//     },
//     {
//         _id: '5e9b1b9b9c9d440000a1b0f5',
//         title: 'Video 2',
//         slug: 'video-2',
//         description: 'Video 2 description',
//         image: 'https://i.ytimg.com/vi/1Q8fG0TtVAY/maxresdefault.jpg',
//         video: 'https://www.youtube.com/watch?v=1Q8fG0TtVAY',
//         watchtime: '1:00',
//         downloads: '100',
//         comments: '10',
//         playlist: '5e9b1b9b9c9d440000a1b0f5',
//         price: 0,
//         category: '5e9b1b9b9c9d440000a1b0f5',
//         availableQty: 100,
//         createdAt: '2020-04-20T18:30:19.000Z',
//         updatedAt: '2020-04-20T18:30:19.000Z',
//     },



