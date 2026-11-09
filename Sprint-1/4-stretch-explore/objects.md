## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?
// ƒ log() { [native code] }

Now enter just `console` in the Console, what output do you get back?
// console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}
Try also entering `typeof console`

Answer the following questions:

What does `console` store?
// console is an object that contains methods for displaying messages, warnings, errors, and debugging information. 
What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
// They access the log and assert methods of the console object.
// The dot . is used to access a property or method of an object.
