# Lumen et Veritas International Academy Quiz System
This is the documentation for the Quiz System developed for the annual Friendship Quiz Competition at Lumen et Veritas International Academy. The system is designed to address issues related to late registrations, question and answer management, and efficient handling of the competition process.

Features
1. Registration
Schools interested in the competition can sign up and register their candidates.
Registration deadline is displayed on the page.
After the deadline, schools making late registrations are fined N5,000 before indicating interest.

2. Question Management
The system allows the creation of questions and stores correct answers.
Questions can be shuffled randomly when students answer them.

3. Quiz Flow
Students have 2 minutes to answer 10 questions.
The next question appears immediately after submitting the current one.

4. Results
Percentage results of each student are displayed.

5. Winner Announcement
The system saves the names of schools that win the quiz.
Winners' names and schools are displayed in an alert message with a congratulatory message.

Implementation Details:

Technologies Used:
HTML, CSS, JavaScript
LocalStorage for data storage
Timers for managing time limits
Functions for modular code
Arrays and objects for data management
Sound logic for user feedback

Testing:
Working with Timers: Verify that the timer accurately limits students to 2 minutes.
Working with LocalStorage: Check if data is properly stored and retrieved using LocalStorage.
Working with Functions: Ensure that functions are modular and perform their intended tasks.
Working with Objects and Arrays: Validate the correct handling of data using objects and arrays.
Working with Arithmetic Operations: Confirm accurate calculation of percentage results.

The system is designed with consideration for a scenario, as per the school's intent to use it on that specific date.
