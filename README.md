# Code Along Progression Monitor

The **Code Along Progression Monitor** is designed to facilitate online and in-person coding sessions by allowing tutors to monitor students' progression in real-time. It enables students to anonymously register their progress, providing valuable insights for tutors to manage session pacing effectively.

## Features

- **Real-Time Monitoring:** Tutors can monitor students' progress during code-along sessions in real-time.
- **Anonymous Progress Reporting:** Students can anonymously report their understanding and progress, helping tutors gauge the session's pace.
- **Session Facilitation:** Helps tutors decide when to pause for questions or explanations based on students' reported progress.
- **User-Friendly Interface:** Intuitive interface for both tutors and students to easily navigate and use during sessions.

## Technologies Used

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express.js
- **Real-Time Communication:** Socket.IO
- **Database:** MongoDB
- **Deployment:** (Local)

## How It Works

The **Code Along Progression Monitor** utilizes a Node.js backend with Express for server-side logic and routing. Socket.IO enables real-time communication between the server and clients, allowing for instant updates on student progress. MongoDB serves as the database to store session data and anonymous progress reports.

## Usage

1. **Joining a Session:** Students can join a session using a unique session code provided by the tutor.
2. **Anonymous Progress Reporting:** During the session, students can use the provided interface to indicate their understanding and progress.
3. **Real-Time Updates:** Tutors can view aggregated progress updates in real-time to adjust the session pace accordingly.

## Privacy and Data Handling

- Student data is anonymized to ensure privacy.
- MongoDB stores session data securely, adhering to best practices for data handling.

## Contributing

Contributions to the **Code Along Progression Monitor** project are welcome! To contribute:

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/YourFeatureName`).
3. Commit your changes (`git commit -am 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeatureName`).
5. Open a pull request.

## License

[MIT License](LICENSE)
