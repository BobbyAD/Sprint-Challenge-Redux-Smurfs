1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    The `store` is a giant object that holds all the data or state of your app. `Reducers` where new state is calculated based on the information received from `actions`. `Actions` are packets of information that the reducers receive to make changes to your state.

2. What is the difference between Application state and Component state? When would be a good time to use one over the other?

    Component state is when state is held in an individual component, whereas Application state is held outside the component tree and can be accessed by any component. Component state is great if you only need it inside your one component, since it keeps everything neatly inside one file. However, once you start passing that state down to more and more components to work on it, it becomes a nightmare, so it's better to abstract state out with something like Redux. 

3. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    `redux-thunk` is a middleware that lets us put logic in our action creators. This way, we can choose what action to dispatch to the reducer before actually sending it off. This allows us to perform async operations and have the reducer change state based on where we are in the operation.