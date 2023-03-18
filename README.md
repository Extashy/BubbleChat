# BubbleChat

What is it?
-----------
<strong>BubbleChat</strong> is a small project that is a regular section with comments.

Structure
-----------
The <strong>BubbleChat</strong> consists of a <strong>form for sending a comment</strong> and a <strong>section, where the sent comments are displayed.</strong><br>
By filling out the comment form, you can specify your name, date and write the text of the comment.<br>
The comment section shows an author of comment, date and time of comment creation, its text and delete/like buttons for each comment.

Features
-----------
<li>There is a validation in the comment form: user has to enter the name and text. Data entry is optional, but the date can be selected.</li>
<li>If the user has not entered his name and/or the text of the comment, an error will appear when submitting the form.</li>
<li>If user has not specified a date, the comment will be created by the current date.</li>
<li>If the date of the comment is "yesterday" or "today", there will be 'today' or 'yesterday' string instead of the date next to the comment.</li>
<li>In any case, the actual time of comment creation will always be indicated.</li>
