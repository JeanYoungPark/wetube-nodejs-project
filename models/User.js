import mongoose from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  acatarUrl: String,
  facebookId: Number,
  fithubId: Number,
});

UserSchema.plugin(passportLocalMongoose, { usernameField: 'email' });

const model = mongoose.Model('User', UserSchema);

export default model;
