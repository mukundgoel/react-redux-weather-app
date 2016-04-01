
// remember reducers are always functions
// first argument is the state for this state this reducer is responsible for
// section argument is the action
export default function(state = null, action) {
  console.log('Action received:', action);
  console.log('State is: ', state);

  return state;
}