const googleClientID = "211473616789-9ellij59qktnvgaae3tk4tebhjq03ke1.apps.googleusercontent.com"
const googleClientSecret = "KNPJ6a_q6dO9FcoRgZRiQWjW"
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
        done(null, user);
    });
});

passport.use(
    new GoogleStrategy(
        {
            clientID: googleClientID,
            clientSecret: googleClientSecret,
            callbackURL: '/auth/google/callback',
            proxy: true
        },
        (accessToken, refreshToken, profile, done) => {
            // console.log(`access token: ${accessToken}`);
            // console.log(`refresh token: `, refreshToken);
            // console.log(`profile: `, profile);
            User.findOne({ googleId: profile.id }).then(existingUser => {
                if (existingUser) {
                    done(null, existingUser);
                } else {
                    var newUser = new User({ googleId: profile.id });
                    newUser.save().then(user => done(null, user));
                }
            });
        }
    )
);