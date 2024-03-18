from flask import Flask, request, jsonify
import sqlite3
import pandas as pd
import pickle 

app = Flask(__name__)
pickleFile=open("weights.pkl","rb")
regressor=pickle.load(pickleFile)
DATABASE = "questions_database.db"



@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()  

    df = pd.DataFrame(data, index=[0])
    
    input_data = df.replace({True: 1, False: 0}).loc[0].tolist()

    print(len(data))

    print("Input Data",input_data)
    prediction = regressor.predict([input_data])
    print("Prediction:",prediction)
    return jsonify({"prediction":"","data":input_data})

if __name__ == '__main__':
    app.run(debug=True)