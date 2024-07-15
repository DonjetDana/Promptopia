Promptopia is an open-source AI prompting tool for modern world to discover, create and share creative prompts

![Capture](https://github.com/user-attachments/assets/ee5bf719-7eef-4cdd-b7da-aa0b17f794c8)
<br />
<br />
You can create a post for AI prompts
<br />
<br />
![create-post](https://github.com/user-attachments/assets/17fcc85f-6563-4f80-87a7-555b4093dfb2)
<br />
<br />
Filter the prompts based on the username, the tag or the words that are contained
<br />
<br />
![filter](https://github.com/user-attachments/assets/68260226-a5cc-44d0-8d38-20d41d3966f5)
<br />
<br />
You can View your  profile or others  
<br />
<br />
![profile](https://github.com/user-attachments/assets/84efb501-7902-4666-b7b7-5cc691b83c8d)
<br />
<br />
You can Edit and Delete the prompts
<br />
<br />
![edit-prompt](https://github.com/user-attachments/assets/0a7c7792-231b-4a90-9b05-7d9591c9ec28)
<br />
<br />
🔋 Features
<br />
👉 Modern Design with Glassmorphism Trend Style: A modern and visually appealing design, incorporating the glassmorphism trend style for a sleek and contemporary appearance.

👉 Discover and Share AI Prompts: Allow users to discover AI prompts shared by the community and create their own prompts to share with the world.

👉 Edit and Delete Created Prompts: Users have the ability to edit their created prompts at any time and delete them when needed.

👉 Profile Page: Each user gets a dedicated profile page showcasing all the prompts they've created, providing an overview of their contributions.

👉 View Other People's Profiles: Users can explore the profiles of other creators to view the prompts they've shared, fostering a sense of community.

👉 Copy to Clipboard: Implement a convenient "Copy to Clipboard" functionality for users to easily copy the AI prompts for their use.

👉 Search Prompts by Specific Tag: Allow users to search for prompts based on specific tags, making it easier to find prompts related to specific topics.

👉 Google Authentication using NextAuth: Enable secure Google authentication using NextAuth, ensuring a streamlined and trustworthy login experience.

👉 Responsive Website: Develop a fully responsive website to ensure optimal user experience across various devices, from desktops to smartphones

and many more, including code architecture and reusability
<br />
🤸 Quick Start
Follow these steps to set up the project locally on your machine.

Prerequisites

Make sure you have the following installed on your machine:

Git
<Br />
Node.js
<Br />
npm (Node Package Manager)
<Br />
Cloning the Repository
<Br />

git clone https://github.com/DonjetDana/Promptopia
<Br />
cd promtopia
<Br />
Installation

Install the project dependencies using npm:
<Br />
npm install
<Br />
Set Up Environment Variables

Create a new file named .env in the root of your project and add the following content:

NEXTAUTH_URL=http://localhost:3000
<br />
NEXTAUTH_URL_INTERNAL=http://localhost:3000
<br />
NEXTAUTH_SECRET=
<br />
GOOGLE_ID=
<br />
GOOGLE_CLIENT_SECRET=
<br />
MONGODB_URI=
<br />
Replace the placeholder values with your actual credentials. You can obtain these credentials by signing up on these corresponding websites from Google Cloud Console, Cryptpool (for random Auth Secret), and MongoDB.

Running the Project

npm run dev
<Br />
Open http://localhost:3000 in your browser to view the project.

