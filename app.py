from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from openai import OpenAI

app = Flask(__name__)
CORS(app)

client = OpenAI()


@app.route("/")
def home():
    return send_from_directory(".", "index.html")


@app.route("/style.css")
def style():
    return send_from_directory(".", "style.css")


@app.route("/script.js")
def script():
    return send_from_directory(".", "script.js")


@app.route("/calculate", methods=["POST"])
def calculate():
    data = request.json

    number1 = data["number1"]
    number2 = data["number2"]
    operator = data["operator"]

    if operator == "+":
        result = number1 + number2

    elif operator == "-":
        result = number1 - number2

    elif operator == "*":
        result = number1 * number2

    elif operator == "/":
        if number2 == 0:
            result = 0
        else:
            result = number1 / number2

    return jsonify({"result": result})


@app.route("/ask-ai", methods=["POST"])
def ask_ai():
    data = request.json
    question = data["question"]

    response = client.responses.create(
        model="gpt-5.5",
        input=question
    )

    return jsonify({"answer": response.output_text})


if __name__ == "__main__":
    app.run(debug=True)