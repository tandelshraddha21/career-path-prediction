from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin

import sqlite3
from random import sample
import pandas as pd
import pickle 


app = Flask(__name__)
cors = CORS(app)

DATABASE = "questions_database.db"
pickleFile=open("weights.pkl","rb")
regressor=pickle.load(pickleFile)
DATABASE = "questions_database.db"

@app.route('/predict', methods=['POST'])
@cross_origin()
def predict():
    data = request.get_json()  

    df = pd.DataFrame(data, index=[0])
    
    input_data = df.replace({True: 1, False: 0}).loc[0].tolist()

    print(len(data))

    print("Input Data",input_data)
    prediction = regressor.predict([input_data])
    print("Prediction:",prediction[0])
    return jsonify({"prediction":prediction[0]})

@app.route('/get_random_questions', methods=['POST'])
@cross_origin()
def get_random_questions():
    try:
        category = request.json.get('category')  
        num_questions = 10  
        conn = sqlite3.connect(DATABASE)
        cursor = conn.cursor()

        if category == 'coding':
            cursor.execute("SELECT ID, Questions, A, B, C, D FROM coding_questions ORDER BY RANDOM() LIMIT ?", (num_questions,))
        elif category == 'aptitude':
            cursor.execute("SELECT ID, Questions, A, B, C, D FROM aptitude_questions ORDER BY RANDOM() LIMIT ?", (num_questions,))
        elif category == "writing":
            cursor.execute("SELECT ID, Questions, A, B, C, D FROM writing_questions ORDER BY RANDOM() LIMIT ?", (num_questions,))
        else:
            return jsonify({"error": "Invalid category name"})

        questions = cursor.fetchall()
        conn.close()

        # Convert the list of tuples to a list of dictionaries
        questions_list = [{"question_id": q[0], "questions": q[1], "a": q[2], "b": q[3], "c": q[4], "d": q[5]} for q in questions]

        return jsonify(questions_list)
    except Exception as e:
        return jsonify({"error": str(e)})


# API endpoint to check if a specific answer is correct
@app.route('/check_answer', methods=['POST'])
@cross_origin()
def check_answer():
    try:
        question_id = request.json.get('question_id')  # Assuming the question ID is sent in the request JSON
        user_answer = request.json.get('user_answer')  # Assuming the user's answer is sent in the request JSON
        category = request.json.get('category')  # Assuming the category is sent in the request JSON
        conn = sqlite3.connect(DATABASE)
        cursor = conn.cursor()

        if category == 'coding':
            cursor.execute("SELECT Ans FROM coding_questions WHERE ID = ?", (question_id,))
        elif category == 'aptitude':
            cursor.execute("SELECT ANS FROM aptitude_questions WHERE ID = ?", (question_id,))
        elif category == 'writing':
            cursor.execute("SELECT ANS FROM writing_questions WHERE ID = ?", (question_id,))
        else:
            return jsonify({"error": "Invalid category name"})

        correct_answer = cursor.fetchone()

        if correct_answer is not None and user_answer == correct_answer[0]:
            return jsonify({"result": "correct"})
        else:
            print(correct_answer,user_answer)
            return jsonify({"result": "incorrect"})
    except Exception as e:
        return jsonify({"error": str(e)})
    
if __name__ == '__main__':
    app.run(debug=True)
