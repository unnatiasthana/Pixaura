# Pixaura
### Spread Kindness, Share Moments

## 📖 Overview

**Pixaura** is a modern, responsive social media interface designed to foster connection and positivity. It provides a clean and intuitive platform for users to share updates, explore content, and interact with their community.

Unlike traditional social platforms that can feel cluttered, Pixaura focuses on a streamlined user experience with features like "Kind Words" to encourage positive interactions. This project serves as a comprehensive frontend template for a social networking application.

## ✨ Features

Pixaura comes packed with essential social media features:

*   **📸 Stories Section**: A horizontal scrollable area to view user stories.
*   **📰 Interactive Feed**: A dynamic main feed showcasing user posts with images and text.
*   **✍️ Post Composer**: An intuitive interface to create new posts instantly.
*   **🔍 Smart Search**: A search bar with live, real-time user suggestions as you type.
*   **🔔 Notifications System**: A popup panel to view recent interactions (likes, follows).
*   **💬 Messaging Interface**: A dedicated popup and page for user conversations.
*   **💛 Kind Words Generator**: A unique feature allowing users to share and view positive affirmations.
*   **📅 Events Section**: A sidebar widget displaying upcoming local events.
*   **👥 User Suggestions**: Recommendations for new people to follow.
*   **👤 Profile Page**: A detailed user profile with a cover photo, bio, stats, and a masonry grid of posts.
*   **📱 Fully Responsive**: Optimized for desktops, tablets, and mobile devices.

## 🛠️ Tech Stack

This project is built using pure, vanilla web technologies to ensure performance and ease of understanding:

*   **HTML5**: Semantic markup for accessibility and structure.
*   **CSS3**: Custom styling with Flexbox and Grid layouts. No external frameworks used.
*   **JavaScript (ES6+)**: Modular logic for interactivity (DOM manipulation, event handling).

## 📂 Folder Structure

```text
Pixaura/
├── css/
│   ├── common.css        # Global styles (layout, typography, components)
│   ├── explore.css       # Styles for the Explore page
│   ├── index.css         # Styles for the Home page
│   ├── login.css         # Styles for the Login/Signup page
│   ├── messages.css      # Styles for the Messages page
│   ├── notifications.css # Styles for the Notifications page
│   └── profile.css       # Styles for the Profile page
├── images/               # All static assets (user avatars, post images, icons)
├── js/
│   └── app.js            # Main JavaScript logic (Search, Post, Kind Words)
├── explore.html          # Explore page template
├── index.html            # Main landing page (Feed)
├── login.html            # Authentication page
├── messages.html         # Direct messaging page
├── notifications.html    # Activity feed page
├── profile.html          # User profile page
└── README.md             # Project documentation
```

## 🚀 Installation & Setup

You can run this project locally without any complex build tools or servers.

1.  **Clone or Download**
    *   Clone the repository:
        ```bash
        git clone https://github.com/yourusername/pixaura.git
        ```
    *   Or download the ZIP file and extract it.

2.  **Open the Project**
    *   Navigate to the project folder.
    *   Open `index.html` in your preferred web browser (Chrome, Firefox, Safari, etc.).

3.  **Optional: Local Server**
    *   For the best experience (especially with some browser security restrictions), you can use a simple local server like Live Server (VS Code extension) or Python:
        ```bash
        # Python 3.x
        python -m http.server 8000
        ```

## 📖 Usage Guide

*   **Creating a Post**: On the home page, type in the "What's on your mind?" box and click "Post". Your new post will appear in the feed immediately.
*   **Searching**: Type a name (e.g., "Aarav", "Zara") in the search bar on the right to see live suggestions.
*   **Kind Words**: In the right sidebar, type a kind word and click the pencil icon to update the display.
*   **Navigation**: Use the left sidebar to navigate between Home, Explore, Notifications, Messages, and Profile.
*   **Interactions**: Click on the heart or chat icons in the top header to toggle the respective popups.

##  Future Improvements

This project is currently a frontend prototype. Future planned enhancements include:

*   [ ] **Backend Integration**: Connecting to a Node.js/Express server.
*   [ ] **Database**: Storing user data and posts in MongoDB or SQL.
*   [ ] **Authentication**: Real user login and signup functionality.
*   [ ] **Real-time Chat**: Implementing WebSockets for instant messaging.
*   [ ] **Image Uploads**: Allowing users to upload actual image files.
*   [ ] **Dark/Light Mode**: A toggle for visual themes.

## ✍️ Author

**Unnati Asthana**
*   Creator & Lead Developer

---
*Built with ❤️ for the community.*
