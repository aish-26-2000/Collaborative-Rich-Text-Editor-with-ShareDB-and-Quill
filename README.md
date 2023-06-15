# Collaborative Rich Text Editor with ShareDB and Quill

This is a collaborative rich text editor built using ShareDB and Quill. It allows multiple users to simultaneously edit a document in real-time, with changes being synchronized across all connected clients. The editor offers the following features:

## Features

- **Real-time collaboration:** Multiple users can edit the same document simultaneously, enabling seamless collaboration and reducing conflicts.

- **Concurrent editing:** The editor supports concurrent editing, allowing multiple users to make changes to the document simultaneously. Each user's edits are instantly reflected in real-time across all connected clients.

- **Conflict resolution:** In the event of conflicting edits made by different users, ShareDB employs conflict resolution mechanisms to ensure smooth merging of changes and maintain data integrity.

- **Rich text editing:** The editor is based on Quill, a powerful WYSIWYG (What You See Is What You Get) editor. It provides a user-friendly interface for formatting text, adding images, creating lists, and more.

- **Cursor sync/personal tracking:** The editor displays the cursors of other connected users, allowing you to see where they are currently editing. This feature promotes better collaboration and reduces the chances of overlapping edits.

- **Offline support:** The editor is designed to work offline as well. Users can continue editing the document even when they are not connected to the internet. The changes will be automatically synchronized once the connection is restored.

- **Data persistence with MongoDB:** The editor leverages MongoDB for data persistence. All document changes and user data are stored in a MongoDB database, ensuring that the information is preserved even if the server goes offline or restarts.

## Prerequisites

To run this collaborative rich text editor locally, you will need the following prerequisites:

- Node.js: Make sure you have Node.js installed on your machine. You can download it from the official website: https://nodejs.org/

## Getting Started

Follow these steps to get the collaborative rich text editor up and running:

1. Clone the repository:

   ```
   git clone https://github.com/aish-26-2000/Collaborative-Rich-Text-Editor-with-ShareDB-and-Quill.git
   ```

2. Navigate to the project directory:

   ```
   cd Collaborative-Rich-Text-Editor-with-ShareDB-and-Quill
   ```

3. Install the dependencies:

   ```
   npm install
   ```

4. Start the server:

   ```
   npm start
   ```

5. Open your web browser and visit `http://localhost:8080` to access the collaborative rich text editor.
