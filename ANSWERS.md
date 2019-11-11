- [ ] Why would you use class component over function components (removing hooks from the question)?
You would you use class components over function components because functions (without hooks) are vanilla JS, you can’t use state or life cycle hooks (rendering) without  parent prop passing.  Class components give us a lot more features compared to functional components.  


- [ ] Name three lifecycle methods and their purposes.
The Birth/Mounting Phase
This is the phase when the component is being built out from ground up.
Whatever initial data you’ll have access to will be defined on the constructor of this phase
Your render method is invoked.
componentDidMount gets called as well.
Growth/Updating Phase
setState can be used to change the component’s state data, forcing a call to render.
shouldComponentUpdate is a method one could use here to stop a component from calling render if necessary.
Death/Un-mounting Phase
Component is removed from the screen.
componentWillUnmount is called and can be used for any clean up you may need to do.


- [ ] What is the purpose of a custom hook?
Custom Hooks, so-called because you are building the hook yourself, allow you to apply non-visual behavior and stateful logic throughout your components by reusing the same hook over and over again. They follow the same patterns of naming that you’ve already learned (i.e. prefacing the function name with use, as in useState). You can build a reusable custom hook for uses as varied as handling controlled inputs, managing event listeners, and watching for key presses.

- [ ] Why is it important to test our apps?
Automated testing minimizes the risk of bugs finding their way into production code. Testing is NOT optional, it should be a part of every developer’s workflow. The feature is not done until it’s fully tested!