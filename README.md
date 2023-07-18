# task-ledger
Manage your tasks like never before with this productivity hack. Currently the app is deployed on netlify and can be used from there.(see [How to use?]("htu"))

## How to install?
* Clone the repository using
```
git clone https://github.com/AmitT98/task-ledger
```
* Browse to the folder and install the necessary modules using
```
npm install
```
* Run the server using
```
npm run dev
```
## <a name="htu"> How to use? </a>
1. Install locally or go to [https://task-ledger.netlify.app/](https://task-ledger.netlify.app/)
2. Type the task id, short description and duration of the task.
3. Click add task or press enter
4. Click the task to start timer individually.
5. The task for which the duration has expired appear on the left, and can be modified by clicking on them.
6. To clear all tasks click clear all task button. \
**Note: Tasks will persist even when you close the session.**

## Project Roadmap
- [x] Create a basic task tracking webpage to add tasks with three fields, id, short description and duration.
- [x] Tasks should not get deleted when session is closed.
- [x] Create a method to clear all the tasks in one go.
- [x] Add functionality to set duration for each task, post which they become expired unless cleared.
- [x] Indicate the health of each task by red and green spectrum, $red = 1 - green = timeLeft/duration$
- [x] Add the ability to add dead task to current set of task.
- [ ] Show a small dashboard that tells user's productivity by calculating, $100*(1 - expiredTasks/totalTasks)$
- [ ] Add the ability to sign off each task with a note.
