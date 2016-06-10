import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('restaurants');
  this.route('register');
  this.route('restaurant', {path: '/restaurant/:restaurantId'});
  this.route('completereservation');
  this.route('reservations');
  this.route('termsofuse');
  this.route('privacypolicy');
  this.route('resetpassword');
  this.route('resetpassword', {path: '/resetpassword/:userCode'});
  this.route('forgotpassword');
  this.route('admin', function() {
    this.route('restaurants', function() {
      this.route('add');
    });
    this.route('locations');
    this.route('users');
  });
});

export default Router;
