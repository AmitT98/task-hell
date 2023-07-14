# task-hell
Manage your tasks like never before with this productivity hack.

## How to install?
* Clone the repository using
```
git clone https://github.com/AmitT98/task-hell
```
* Browse to the folder and install the necessary modules using
```
npm install
```
* Run the server using
```
npm run dev
```
## How to use?
1. Open the app in a new browser window
2. Type the task id and short description
3. Click add task.
4. To clear all tasks click clear all task button. \
**Note: Tasks will persist even when you close the session.**

## Project Roadmap
- [x] Create a basic task tracking webpage to add tasks with two fields, id and short description.
- [x] Tasks should not get deleted when session is closed.
- [x] Create a method to clear all the tasks in one go.
- [ ] Add functionality to set deadline for each task, post which they become dead unless cleared.
- [ ] Indicate the health of each task by red and green spectrum, $red = 1 - green = timeLeftBeforeDeadline/totalTimeAlloted$
- [ ] Add the ability to add dead task to current set of task.
- [ ] Show a small dashboard that tells user's productivity by calculating, $100*(1 - deadTasks/totalTasks)$
- [ ] Add the ability to sign off each task with a note.
