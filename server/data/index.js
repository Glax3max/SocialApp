import mongoose from 'mongoose';

const userIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];

export const users = [
  {
    _id: userIds[0],
    firstName: "test",
    lastName: "me",
    email: "aaaaaaa@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p11.jpeg",
    friends: [userIds[1], userIds[2]], // Add friends using ObjectId references
    location: "San Fran, CA",
    occupation: "Software Engineer",
    viewedProfile: 14561,
    impressions: 888822,
    createdAt: new Date(1115211422000), // Ensure it's a valid Date object or timestamp
    updatedAt: new Date(1115211422000), // Same as above
    __v: 0,
  },
  {
    _id: userIds[1],
    firstName: "Steve",
    lastName: "Ralph",
    email: "thataaa@gmail.com",
    password: "$!FEAS@!O)_IDJda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p3.jpeg",
    friends: [userIds[0], userIds[2]], // Correct friend references
    location: "New York, CA",
    occupation: "Degenerate",
    viewedProfile: 12351,
    impressions: 55555,
    createdAt: new Date(1595589072000), // Valid timestamp
    updatedAt: new Date(1595589072000),
    __v: 0,
  },
  {
    _id: userIds[2],
    firstName: "Some",
    lastName: "Guy",
    email: "someguy@gmail.com",
    password: "da39a3ee5e6b4b0d3255bfef95601890afd80709",
    picturePath: "p4.jpeg",
    friends: [userIds[0], userIds[1]], // Friend references
    location: "Canada, CA",
    occupation: "Data Scientist Hacker",
    viewedProfile: 45468,
    impressions: 19986,
    createdAt: new Date(1288090662000),
    updatedAt: new Date(1288090662000),
    __v: 0,
  },
  // More user objects...
];

export const posts = [
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[0],
    firstName: "Steven",
    lastName: "Ralph",
    location: "New York, CA",
    description: "Some really long random description",
    picturePath: "post1.jpeg",
    userPicturePath: "p3.jpeg",
    likes: { [userIds[1]]: true, [userIds[2]]: true, [userIds[3]]: true, [userIds[4]]: true }, // Correct likes object
    comments: [
      "random comment",
      "another random comment",
      "yet another random comment",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[1],
    firstName: "Steve",
    lastName: "Ralph",
    location: "New York, CA",
    description: "Some really long random description",
    picturePath: "post1.jpeg",
    userPicturePath: "p3.jpeg",
    likes: { [userIds[0]]: true, [userIds[2]]: true, [userIds[3]]: true, [userIds[4]]: true }, // Correct likes object
    comments: [
      "random comment",
      "another random comment",
      "yet another random comment",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[2],
    firstName: "Jonas",
    lastName: "Doe",
    location: "Utah, CA",
    description: "This is the last really long random description. This one is longer than the previous one.",
    picturePath: "post3.jpeg",
    userPicturePath: "p5.jpeg",
    likes: { [userIds[1]]: true, [userIds[6]]: true, [userIds[3]]: true, [userIds[5]]: true }, // Correct likes object
    comments: [
      "one more random comment",
      "I lied, one more random comment",
      "I lied again, one more random comment",
      "Why am I doing this?",
      "I'm bored",
    ],
  },
  // More post objects...
];
