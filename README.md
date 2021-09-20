# simple-redux-project
This is a simple redux project for explaining how redux actually works! 


explanation:

ok we have 3 main things in redux 

1- Action = Action is the way you are actually saying what you want to do with your state.
2- Reducer = Reducer is actually your state and you declare your state in it ( you can have multiple reducers in your app)
3- Store = Store is your globalized state and all of your states are stored in that.

and the steps below shows how the redux works 

first you create your store and wrap your app with it 
then you make some reducers and set them a value
and then you can not directly use them in your components 
you should combine your reducers in a single file 
and then you import that single file which you combined your reducers in to your component
and with useSelector() you can access that globalized state and put them in a variable
and use it in your component.
and if you want to update your states 
you should create some actions and give them a type in an object 
and in your reducers you will check them with if else or switch case 
if they match the types 
if they did, then you apply your changes to the state by returning the state and the changes you want 
and you can use it in your component by using useDispatch() and give the function you had in your actions as the argument to useDispatch() .

i know it's a little bit confusing reading it but believe me it would be lot easier if you take look at the codes

and yep i think thats pretty much it :D 


