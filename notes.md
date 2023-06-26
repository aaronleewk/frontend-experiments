Notes

1. Destructuring, then computed property, method
  - Also 'event.target' returns element

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevProps) => ({
      ...prevProps,
      [name]: value
    }));
  };

   <input
            type="password"
            name="password"
            value={state.password}
            onChange={handleInputChange}
          />

2. spread operator is so react-hook-form will spread out all the required event handlers like onChange, onBlur, and other props for that input field.

e.g. <input type="password" {...register("password")} />

NOTE we don’t have to add the value and onChange handler for each input field and there is no need to manage the application state ourselves.

3.  ES11 optional chaining operator:

    e.g. const nestedProp = obj.first?.second;
By using the ?. operator instead of just ., JavaScript knows to implicitly check to be sure obj.first is not null or undefined before attempting to access obj.first.second

4. CSS class names with an hyphen(-) dont work in CSS Modules: While a hyphen (-) is a valid character in a CSS class name, it's not a valid character to use in the middle of a Javascript variable.

In your example, your JS code is being evaluated as an expression with a minus. You need to access the property via bracket notation instead:

<div className={styles["Event-Entries"]}></div>

You can also combine styles:

const buttonClasses = styles.myBtn+ " " + styles.extra_classes;

5. Functions in JavaScript are ‘first class’, which means they are treated like any other variable — including being passed to or returned from other functions.

When they’re passed as an argument to another function, they’re known as a ‘callback’ — to be called when the other function is ready for them.
( From https://cmorinan.medium.com/passing-functions-as-arguments-in-javascript-tips-and-pitfalls-d29bbd4522a9)

6. Callbackks vs promises
- We can achieve async code using two methods: callbacks and promises. With callback we pass a callback into a function that would then get called upon completion. With promises, you attach callbacks on the returned promise object.
- Promises solve callback hell!
- Example: https://dev.to/neisha1618/callbacks-vs-promises-4mi1

7. Best practices: https://dev.to/sathishskdev/part-4-writing-clean-and-efficient-react-code-best-practices-and-optimization-techniques-423d

Avoid default imports:

  No: export default Todo;  
  Yes: export { Todo };

  Using named exports provides better clarity when importing components, making the codebase more organized and easier to navigate.

  Named imports work well with tree shaking. Tree shaking is a term commonly used within a JavaScript context to describe the removal of dead code. It relies on the import and export statements to detect if code modules are exported and imported for use between JavaScript files.

Prefer passing objects instead of multiple props

  const todo = {
    id: 1,
    name: "Morning Task",
    completed: false
  }

  
  const updateTodo = ({...todo}) => {
  //...
  }

  Function becomes more self-descriptive and easier to understand.

  Reducing the chances of errors caused by incorrect argument order.

  Easy to add or modify properties without changing the function signature.

Use shorthand for boolean props
  // ❌
  <Dropdown multiSelect={true} />
  // ✅ Use shorthand
  <Dropdown multiSelect />