/**
 * Pixaura - Main Application Script
 * Handles global functionality like Kind Words, Search, and Post Composition.
 */

document.addEventListener("DOMContentLoaded", () => {
    initKindWords();
    initSearch();
    initPostComposer();
});

/**
 * Initializes the "Kind Words" feature.
 * Allows users to type a kind word and update the display.
 */
function initKindWords() {
    const input = document.querySelector(".kw-input");
    const button = document.querySelector(".kw-actions button");
    const wordText = document.querySelector(".kind-word-text");
    const wordDesc = document.querySelector(".kind-word-desc");

    if (!input || !button || !wordText || !wordDesc) return;

    button.addEventListener("click", () => {
        const newWord = input.value.trim();

        if (newWord === "") {
            alert("Please enter a kind word!");
            return;
        }

        wordText.textContent = newWord;
        wordDesc.textContent = "A wonderful word shared by you 💛";
        input.value = "";
    });
}

/**
 * Initializes the Search feature with live suggestions.
 */
function initSearch() {
    const input = document.querySelector(".search-input");
    const suggestionsBox = document.querySelector(".live-suggestions");

    if (!input || !suggestionsBox) return;

    // Mock data for search suggestions
    const allNames = [
        "Aarav", "Aditi", "Ananya", "Aryan", "Aisha", "Aayushi", "Alina", "Anika",
        "Bhavya", "Bhuvan", "Barkha", "Binal",
        "Chirag", "Chaya", "Chetna", "Chiranjiv",
        "Dev", "Diksha", "Dhairya", "Disha",
        "Ekta", "Esha", "Eshan",
        "Farhan", "Falak", "Fiza",
        "Gaurav", "Gauri", "Gitanjali",
        "Harsh", "Himani", "Harini",
        "Ishaan", "Isha", "Ivana",
        "Jatin", "Jiya", "Jaspreet",
        "Kabir", "Karan", "Kavya", "Krisha", "Kiaan", "Kritika",
        "Laksh", "Lavanya", "Lara",
        "Manya", "Myra", "Mohan", "Mira",
        "Neha", "Nakul", "Nisha", "Navya",
        "Ojas", "Om", "Oviya",
        "Pari", "Prisha", "Pranav",
        "Quinn", "Queen", "Quasar",
        "Riya", "Rishita", "Rishi", "Ridhima", "Reyansh",
        "Shaurya", "Saanvi", "Simran", "Sarthak",
        "Tanvi", "Tarun", "Tanya",
        "Uma", "Upasana", "Udai",
        "Vihaan", "Vanya", "Vivaan", "Vedika",
        "Wasim", "Waniya",
        "Xavier", "Xaria",
        "Yash", "Yamini", "Yuvraj",
        "Zara", "Zoya", "Zaid"
    ];

    input.addEventListener("keyup", () => {
        const text = input.value.toLowerCase();
        suggestionsBox.innerHTML = "";

        if (!text) return;

        const matches = allNames
            .filter(name => name.toLowerCase().startsWith(text))
            .slice(0, 4);

        matches.forEach(name => {
            const p = document.createElement("p");
            p.textContent = name;
            suggestionsBox.appendChild(p);
        });
    });
}

/**
 * Initializes the Post Composer feature.
 * Allows users to create new posts and add them to the feed.
 */
function initPostComposer() {
    const textarea = document.querySelector(".post-composer textarea");
    const cancelButton = document.querySelector(".post-composer .btn--outline");
    const postButton = document.querySelector(".post-composer .btn--primary");
    const feed = document.querySelector(".main-feed");
    const composer = document.querySelector(".post-composer");

    if (!textarea || !cancelButton || !postButton || !feed || !composer) return;

    cancelButton.onclick = () => {
        textarea.value = "";
    };

    postButton.onclick = () => {
        const content = textarea.value.trim();

        if (content === "") {
            alert("Please enter the post!");
            return;
        }

        const post = document.createElement("article");
        post.className = "post";
        post.innerHTML = `
            <div class="post-header">
                 <img src="images/profile.jpg" alt="You" class="post-avatar">
                 <div class="post-info">
                     <h3 class="post-author">@unnatea</h3>
                     <p class="post-time">Just now</p>
                 </div>
            </div>
            <p class="post-text">${content}</p>
        `;

        // Insert after the composer
        feed.insertBefore(post, composer.nextElementSibling);
        textarea.value = "";
    };
}
