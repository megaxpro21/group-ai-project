\# AI Calculator



\## Overview



AI Calculator is a web-based calculator application with an AI Math Assistant. The project combines a traditional calculator with an AI-powered feature that can answer math questions and provide explanations.



This project was created as a class project to demonstrate frontend development, backend development, API communication, and AI integration.



\## Features



\* Basic calculator operations

\* Addition, subtraction, multiplication, and division

\* Decimal number support

\* Clear button

\* AI Math Assistant

\* User-friendly calculator interface

\* Frontend-to-backend communication using HTTP requests

\* AI responses through the OpenAI API



\## Technologies Used



\### Frontend



\* HTML

\* CSS

\* JavaScript



\### Backend



\* Python

\* Flask

\* Flask-CORS



\### AI



\* OpenAI API

\* OpenAI Python SDK

\* OpenAI Responses API



\### Development Tools



\* Visual Studio Code

\* Git

\* GitHub



\## Project Structure



```text

group-ai-project/

├── index.html

├── style.css

├── script.js

├── script-backup.js

├── app.py

├── requirements.txt

├── README.md

└── .gitignore

```



\## How It Works



The calculator uses JavaScript for the user interface and calculator interactions.



When a calculation is performed, the frontend sends the numbers and selected operator to the Flask backend using a JSON POST request.



The Flask backend processes the calculation and sends the result back to the frontend.



The AI Math Assistant uses a similar process. The user's question is sent from the frontend to the Flask backend. The backend sends the question to the OpenAI API and returns the AI response to the webpage.



\### Basic Architecture



```text

User

&#x20; ↓

HTML / CSS / JavaScript

&#x20; ↓

Flask Backend

&#x20; ↓

OpenAI API

&#x20; ↓

AI Response

&#x20; ↓

Webpage

```



\## Installation



\### 1. Install Python



Install Python on your computer and make sure Python can be run from the terminal.



\### 2. Clone the repository



```bash

git clone https://github.com/megaxpro21/group-ai-project.git

cd group-ai-project

```



\### 3. Install the required Python packages



```bash

pip install -r requirements.txt

```



\### 4. Set up the OpenAI API key



The application uses the `OPENAI\_API\_KEY` environment variable.



The API key should NOT be placed directly inside the source code or committed to GitHub.



On Windows, set the environment variable using your own API key:



```text

setx OPENAI\_API\_KEY "YOUR\_API\_KEY"

```



After setting the variable, open a new terminal window before running the application.



\### 5. Run the Flask backend



```bash

python app.py

```



The backend should run at:



```text

http://127.0.0.1:5000

```



\## Running the Project



Start the Flask backend first:



```bash

python app.py

```



Then open the calculator webpage and use the calculator or AI Math Assistant.



\## AI Integration



The AI Math Assistant sends the user's math question to the Flask backend.



The Flask backend uses the OpenAI Python SDK to send the question to the OpenAI Responses API. The response is then returned to the frontend and displayed to the user.



API credentials are stored as environment variables rather than being included in the source code.



\## Current Status



The calculator functionality and frontend-to-backend communication are working.



The AI Assistant integration is implemented, but access to the OpenAI API currently depends on having available API credits for the project account.



\## Future Improvements



Possible future improvements include:



\* More advanced scientific calculator functions

\* Calculation history

\* Improved AI math explanations

\* Better error handling

\* Responsive design for different screen sizes

\* Deployment to a public web URL



\## Team



This project was created as a group class project.



Nasir, Obi, Shaun, 



\## Project Repository



GitHub repository:



https://github.com/megaxpro21/group-ai-project



