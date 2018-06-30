'use strict';

import express from 'express';
const authRouter = express.Router();

import User from './model.js';
import auth from './middleware.js';

// Generally, these will send a Token Cookie and do a redirect.
// For now, just spew out the token to prove we're ok.

authRouter.post('/signup', (req, res) => {
  if(Object.keys(req.body).length === 0){
    res.status(400);
    res.send('Bad Request: Request body not received');
    return;
  }
  let user = new User(req.body);
  user.save()
    .then( user => res.send(user.generateToken()) )
    .catch(error=>{
      res.status(400);
      res.send(error);
    });
});

authRouter.get('/signin',auth, (req, res) => {
  res.cookie('Token', req.token);
  res.send('Welcome');
});

export default authRouter;
