from flask import Flask, jsonify, request
from main import create_csv_file
from main import call_service
import json

app = Flask(__name__)

@app.route('/')
def home():
    return "Welcome to CIE Carrier Service"

@app.route('/api/service/suggest', methods=['POST'])
def post_data():
    data = request.get_json()  # Lấy dữ liệu JSON từ request

    user_id = data.get("information", [{}])[0].get("user_id", "default_user_id")

    # Lấy soft skills từ dữ liệu JSON
    # Extract soft skills from "softSkills" in the JSON data
    soft_skills = data.get("softSkills", [])

    # Extract hard skills from "hardSkills" in the JSON data
    hard_skills = data.get("hardSkills", [])

    candidate_field = ''

    for experience in data.get("experiences", []):
        candidate_field = experience.get("expertise", "test")


    # Tạo biến data từ dữ liệu JSON nhận được
    data = [{
        'hard_skill': hard_skills,
        'soft_skill': soft_skills,
        'candidate_field': candidate_field,  # candidate_field mặc định là 'it jobs'
        'label': 0  # label mặc định là 1
    }]
    create_csv_file(user_id, data)
    result = call_service(f"{user_id}.csv")
    # Chuẩn bị response JSON chứa dữ liệu đã nhận được
    print(result)
    response = {
        'result': result,
        'user_id': user_id
    }
    return jsonify(response), 200  # Trả về response JSON và status code 200

if __name__ == '__main__':
    app.run(debug=True)