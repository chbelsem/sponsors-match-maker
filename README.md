
# Sponsors Match Maker

## Project Overview
Sponsors Match Maker is a platform designed to help small business owners connect with suitable sponsors. By leveraging AI, the platform recommends ideal sponsorship opportunities based on the business type, location, and other relevant criteria. Our goal is to empower small businesses by making sponsorship acquisition more accessible and efficient.

## Features
- **AI-Driven Recommendations:** Utilize AI to match businesses with the most relevant sponsors .
- **Business and Sponsor Profiles:** Businesses and sponsors can create profiles to specify their preferences, interests, and requirements.
- **Efficient Search and Matchmaking:** Quick and accurate pairing between sponsors and businesses.

## Technologies Used
- **Frontend:** html , css , javascript
- **Backend:** Express.js for server-side development
- **Database:** MongoDB for storing user and sponsor data
- **AI Integration:** gemini API

## Installation and Setup
Follow these steps to get the project up and running on your local machine:

### Prerequisites
- Node.js and npm installed on your system
- MongoDB installed and running locally or a cloud MongoDB instance
- API keys for the AI service 

### Steps
1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/sponsors-match-maker.git
   cd sponsors-match-maker
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Set Up Environment Variables:**
   Create a `.env` file in the root directory and configure the following variables:
   ```env
   PORT=5000
   MONGO_URI=your_mongo_connection_string
   AI_API_KEY=your_ai_api_key
   MAP_API_KEY=your_map_api_key
   ```

4. **Start the Server:**
   ```bash
   npm start
   ```

5. **Run the Frontend (if applicable):**
   Navigate to the frontend directory and start the development server:
   ```bash
   cd client
   npm install
   npm start
   ```

6. **Access the Application:**
   Open your browser and go to `http://localhost:5000` to access the application.

## Folder Structure
```
project-root
├── public               # Frontend code
├── app               # Backend code
│   ├── models           # Database schemas
│   ├── routes           # API routes
│   └── app.js           # Main server file
├── config               # Configuration files
├── utils                # Helper functions
└── README.md            # Project documentation
```

## How It Works
1. **User Registration:**
   - Businesses and sponsors register and create profiles.
   
2. **AI-Powered Matching:**
   - Businesses enter details about their project or sponsorship needs.
   - AI processes the data and suggests relevant sponsors.

3. **Connecting:**
   - Businesses can reach out to sponsors directly through the platform.

## Contribution Guidelines
We welcome contributions to improve Sponsors Match Maker! Follow these steps to contribute:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push the branch:
   ```bash
   git push origin feature-name
   ```
5. Submit a pull request.

## Contact
For inquiries, suggestions, or issues, please contact:
- **Email:** chaghibelsem@gmail.com
- **GitHub Issues:** [Issues Page](https://github.com/chbelsem/sponsors-match-maker/issues)

---

Thank you for using Sponsors Match Maker! Together, we can empower small businesses to achieve their goals.

