import { Meteor } from 'meteor/meteor';
import '../lib/collection.js';

Meteor.startup(() => {
  // code to run on server at startup
});

<<<<<<< HEAD
Meteor.publish("name",()=>{
  return socialdb.find ();
})

=======
Meteor.publish('name', () => {
  return socialdb.find({}, {
    // fields: { picPath: 0 }
  });
});
>>>>>>> 0c2761fa851f83ac2ff8de05485699d3d5e4d482
