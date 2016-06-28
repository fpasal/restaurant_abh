import Ember from 'ember';
import Restaurant from '../models/restaurant';
import RestaurantMenu from '../models/restaurantmenu';
import Comment from '../models/comment';

export default Ember.Route.extend({
  restaurantId: null,
  restaurant: Restaurant.create(),
  currentUser: Ember.inject.service(),
  restaurantDetails: null, //This is in return
  restaurantsStatsStyle: null,
  restaurantMenu: RestaurantMenu.create(),
  currentReservation: Ember.inject.service(),
  comment: Comment.create(),

  setupController: function(controller, model){
    this._super(controller, model);

    controller.set('tablesAvailable', null);
  },
  actions: {
    vote: function(mark, comment){
      //Insert data in comment object
      this.set('comment.mark', mark);
      this.set('comment.idUser', this.get('currentUser.userId'));
      this.set('comment.idRestaurant', this.get('restaurantId'));
      this.set('comment.comment', comment);

      //Get menu for restaurant
      $.ajax({ //No return here
        url: "/api/v1/insertComment",
        type: "POST",
        data: JSON.stringify(this.get('comment')),
        processData: false,
        async:false, //Need to wait
        contentType: "application/json; charset=UTF-8",
      }).fail(function(data) {
        console.log(data);
      }).then(function(data) {
        console.log('USPJESNO');
      });

      //Change values in restaurantDetails
      this.set('restaurantDetails.mark', this.get('restaurantDetails.mark') + mark);
      this.set('restaurantDetails.votes', this.get('restaurantDetails.votes') + 1);
    }
  },
  model: function(param){
    var self = this;

    //If logged set style that enable hover on stars for vote
    if(this.get('currentUser.userLoggedIn') == true){
      this.set('restaurantsStatsStyle', 'statslogged')
    } else {
      this.set('restaurantsStatsStyle', 'stats')
    }

    //Put url id into restaurant object
    this.set('restaurantId', param.restaurantId)
    this.set('restaurant.id', param.restaurantId);

    //Convert object in JSON
    var data = JSON.stringify(this.get('restaurant'));

    //Ajax call to get restaurant details
    $.ajax({ //No return here
      url: "/api/v1/getRestaurantDetails",
      type: "POST",
      data: data,
      processData: false,
      async:false, //Need to wait
      contentType: "application/json; charset=UTF-8",
    }).fail(function(data) {
      console.log(data);
    }).then(function(data) {
      self.set('restaurantDetails', data);

      //Get menu for restaurant
      $.ajax({ //No return here
        url: "/api/v1/getRestaurantMenu",
        type: "POST",
        data: '{"idRestaurant":"'+param.restaurantId+'", "type":"Breakfast"}',
        processData: false,
        async:false, //Need to wait
        contentType: "application/json; charset=UTF-8",
      }).fail(function(data) {
        console.log(data);
      }).then(function(data) {
        self.set('restaurantMenu', data);
      });

      //Animate to top of the page
      $("html, body").animate({ scrollTop: 0 }, 500);

    });
    //Return model to template
    return Ember.RSVP.hash({
      restaurantDetails: self.get('restaurantDetails'),
      restaurantsStatsStyle: self.get('restaurantsStatsStyle'),
      restaurantMenu: self.get('restaurantMenu'),
    });

  }
});
