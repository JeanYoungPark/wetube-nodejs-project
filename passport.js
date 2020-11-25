import passport from 'passport';
import User from './models/User';

passport.use(User.createStategy());

passport.serialiseUser(User.serialiseUser());
passport.deserializeUser(User.deserializeUser());
