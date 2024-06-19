import csv
import os
import json
import numpy as np
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from flask import Flask, jsonify

# Mock data creation
def create_mock_data(csv_file):
    users_data = "C:/Users/5540/Desktop/CIE-Carrier/service/data/SmallTrain.csv"
    applicants = pd.read_csv(users_data)

    jobs_data = "C:/Users/5540/Desktop/CIE-Carrier/service/data/jobs_data.csv"
    companies = pd.read_csv(jobs_data)

    train_applicants = applicants
    test_applicants = pd.read_csv("C:/Users/5540/Desktop/CIE-Carrier/service/data/" + csv_file)

    return train_applicants, test_applicants, companies

# Feature Engineering
def feature_engineering(applicants, companies):
    # Vectorize skills and majors
    tfidf_vectorizer_skills = TfidfVectorizer()
    tfidf_vectorizer_majors = TfidfVectorizer()

    all_skills = pd.concat([applicants['final_hard_skill'], applicants['final_soft_skill'],
                            companies['final_hard_skill'], companies['final_soft_skill']])
    all_majors = pd.concat([applicants['candidate_field'], companies['Major']])

    all_skills_vectorized = tfidf_vectorizer_skills.fit_transform(all_skills)
    all_majors_vectorized = tfidf_vectorizer_majors.fit_transform(all_majors)

    num_applicants = len(applicants)
    num_companies = len(companies)

    # Split the TF-IDF vectors back into applicants and companies
    applicants_skills_vectorized = all_skills_vectorized[:num_applicants*2]  # because each applicant has 2 skill entries
    companies_skills_vectorized = all_skills_vectorized[num_applicants*2:]

    applicants_majors_vectorized = all_majors_vectorized[:num_applicants]
    companies_majors_vectorized = all_majors_vectorized[num_applicants:]

    return (applicants_skills_vectorized, applicants_majors_vectorized,
            companies_skills_vectorized, companies_majors_vectorized)

# Correcting the syntax error and completing the similarity computation
def compute_similarity(applicants_skills_vectorized, applicants_majors_vectorized,
                       companies_skills_vectorized, companies_majors_vectorized):
    # Assuming each vectorized set is in the form of [hard skills, soft skills] for both applicants and companies
    # and majors separately.

    # Calculate similarity based on skills (averaging hard and soft skills similarities)
    applicants_skills = (applicants_skills_vectorized[0::2] + applicants_skills_vectorized[1::2]) / 2
    companies_skills = (companies_skills_vectorized[0::2] + companies_skills_vectorized[1::2]) / 2

    skills_similarity = cosine_similarity(applicants_skills, companies_skills)

    # Calculate similarity based on majors
    majors_similarity = cosine_similarity(applicants_majors_vectorized, companies_majors_vectorized)

    # Combine these similarities (simple average for this example)
    combined_similarity = (skills_similarity + majors_similarity) / 2
    return combined_similarity

# Recommendation Function
def recommend_jobs(applicants, companies, similarity_scores):
    recommendations = {}
    applicants['User ID'] = np.arange(len(applicants))
    for i, applicant in enumerate(applicants['User ID']):
        # Get the index of the highest similarity scores for this applicant
        sorted_company_indices = np.argsort(-similarity_scores[i])  # Descending sort of scores
        recommended_companies = companies.iloc[sorted_company_indices]['Major'].values[:3]  # Top 3 recommendations
        recommendations[applicant] = recommended_companies
    return recommendations

# Testing and Evaluation Function
def print_recommendations(applicants, companies, recommendations):
    # Initialize a dictionary to store recommendations
    result = {}

    # This is a mock function since we don't have ground truth to compare to.
    # In a real scenario, we would compare against actual matches or use some form of feedback.
    for applicant in recommendations:
        result[applicant] = recommendations[applicant]

    # Convert result dictionary to JSON format
    json_result = json.dumps(result)
    print(json_result)
    return json_result


def create_ground_truth(csv_file_path):
    data = pd.read_csv(csv_file_path)

    # Tạo dictionary `ground_truth`
    ground_truth = {}
    for index, row in data.iterrows():
        user_id = row['User ID']
        actual_major = row['candidate_field']

        # Thêm vào dictionary, giả sử mỗi ứng viên chỉ chọn một công việc
        ground_truth[user_id] = [actual_major]

    return ground_truth

def precision_at_k(recommendations, ground_truth, k=3):
    """
    Calculate the precision at k for recommendation system.

    Parameters:
    - recommendations (dict): Dictionary where keys are user IDs and values are lists of recommended majors.
    - ground_truth (dict): Dictionary where keys are user IDs and values are lists of truly suitable majors.
    - k (int): The number of top recommendations to consider for calculating precision.

    Returns:
    - float: The average precision at k for all users.
    """
    precision_scores = []

    for user_id, recommended_majors in recommendations.items():
        if user_id in ground_truth:
            # Get top k recommendations
            top_k_recs = recommended_majors[:k]
            # Calculate the number of relevant recommendations
            relevant_recs = sum(1 for major in top_k_recs if major in ground_truth[user_id])
            # Precision at k for this user
            precision = relevant_recs / k
            precision_scores.append(precision)

    # Average precision at k over all users
    average_precision = np.mean(precision_scores) if precision_scores else 0
    return average_precision


def recall_at_k(recommendations, ground_truth, k=3):
    """
    Calculate the recall at k for a recommendation system.

    Parameters:
    - recommendations (dict): Dictionary where keys are user IDs and values are lists of recommended majors.
    - ground_truth (dict): Dictionary where keys are user IDs and values are lists of truly suitable majors.
    - k (int): The number of top recommendations to consider for calculating recall.

    Returns:
    - float: The average recall at k for all users.
    """
    recall_scores = []

    for user_id, recommended_majors in recommendations.items():
        if user_id in ground_truth:
            # Get top k recommendations
            top_k_recs = recommended_majors[:k]
            # Calculate the number of relevant recommendations
            relevant_recs = sum(1 for major in top_k_recs if major in ground_truth[user_id])
            # Calculate the total number of relevant items
            total_relevant = len(ground_truth[user_id])
            # Recall at k for this user
            recall = relevant_recs / total_relevant if total_relevant else 0
            recall_scores.append(recall)

    # Average recall at k over all users
    average_recall = sum(recall_scores) / len(recall_scores) if recall_scores else 0
    return average_recall


def call_service(csv_file):
    train_user, test_user, jobs = create_mock_data(csv_file)
    jobs.head(3)

    list_hard_skill = [test_user["hard_skill"].iloc[i].replace("[", "").replace("]", "").replace("'", "") for i in range(len(test_user))]
    list_soft_skill = [test_user["soft_skill"].iloc[i].replace("[", "").replace("]", "").replace("'", "") for i in range(len(test_user))]

    test_user["final_hard_skill"] = pd.DataFrame(list_hard_skill)
    test_user["final_soft_skill"] = pd.DataFrame(list_soft_skill)
    test_user.head(3)

    list_hard_skill = [train_user["hard_skill"].iloc[i].replace("[", "").replace("]", "").replace("'", "") for i in range(len(train_user))]
    list_soft_skill = [train_user["soft_skill"].iloc[i].replace("[", "").replace("]", "").replace("'", "") for i in range(len(train_user))]

    train_user["final_hard_skill"] = pd.DataFrame(list_hard_skill)
    train_user["final_soft_skill"] = pd.DataFrame(list_soft_skill)
    train_user.head(3)

    list_hard_skill = [jobs["Hard Skills"].iloc[i].replace("[", "").replace("]", "").replace("'", "") for i in range(len(jobs))]
    list_soft_skill = [jobs["Soft Skills"].iloc[i].replace("[", "").replace("]", "").replace("'", "") for i in range(len(jobs))]

    jobs["final_hard_skill"] = pd.DataFrame(list_hard_skill)
    jobs["final_soft_skill"] = pd.DataFrame(list_soft_skill)
    jobs.head(3)
    # Let's create and process the data, and compute recommendations
    # train_applicants, test_applicants, companies = create_mock_data()
    applicants_skills_vec, applicants_majors_vec, companies_skills_vec, companies_majors_vec = feature_engineering(train_user, jobs)
    similarity_scores = compute_similarity(applicants_skills_vec, applicants_majors_vec, companies_skills_vec, companies_majors_vec)
    recommendations = recommend_jobs(test_user, jobs, similarity_scores)

    # Output the recommendations to observe the results
    

    # Sử dụng hàm trên để tạo `ground_truth`
    csv_file_path = 'C:/Users/5540/Desktop/CIE-Carrier/service/data/SmallTrain.csv'
    ground_truth = create_ground_truth(csv_file_path)

    avg_precision = precision_at_k(recommendations, ground_truth)
    print("Average Precision@3 with small train (300):", avg_precision)
    # Example usage:
    avg_recall = recall_at_k(recommendations, ground_truth)
    print("Average Recall@3:", avg_recall)

    data = []

    # Convert each recommendation to a Python list
    for applicant in recommendations:
        data.append({
            "place": applicant,
            "recommend": recommendations[applicant].tolist()  # Convert numpy array to list
        })

    return data

def create_csv_file(user_id, data):
    # Tên file CSV và đường dẫn tới thư mục data
    csv_filename = f"{user_id}.csv"
    data_dir = "service/data"
    csv_file_path = os.path.join(data_dir, csv_filename)

    # Tạo thư mục nếu chưa tồn tại
    if not os.path.exists(data_dir):
        os.makedirs(data_dir)

    # Tên các cột
    fields = ['hard_skill', 'soft_skill', 'candidate_field', 'label']

    # Ghi dữ liệu vào file CSV
    with open(csv_file_path, mode='w', newline='') as file:
        writer = csv.DictWriter(file, fieldnames=fields)
        
        writer.writeheader()  # Viết tiêu đề cột
        
        for row in data:
            # Thêm dấu ngoặc kép cho các giá trị hard_skill và soft_skill
            row['hard_skill'] = f'{row["hard_skill"]}'
            row['soft_skill'] = f'{row["soft_skill"]}'
            # Bỏ ngoặc kép cho candidate_field
            row['candidate_field'] = row['candidate_field'].replace('"', '')
            
            writer.writerow(row)
            
    print(f"Đã tạo file CSV thành công: {csv_file_path}")

datas = [
    {
        'hard_skill': ['agriculture', 'big data', 'business', 'cloud computing', 'computer engineering', 'computing', 'custom software', 'data', 'iot', 'java', 'jira', 'mobile', 'mobility', 'perspective', 'professional services', 'project management', 'python', 'scrum', 'software development', 'software engineering', 'system', 'systems integration', 'telematics', 'transportation', 'web development'],
        'soft_skill': ['consulting', 'innovation', 'integration', 'management', 'operations', 'organizational skills', 'problem solving', 'teamwork'],
        'candidate_field': 'it jobs',
        'label': 1
    },
    {
        'hard_skill': ['analytics', 'application', 'application development', 'asp', 'css', 'data', 'html', 'java', 'javascript', 'medical', 'security', 'security administration', 'server', 'service', 'social security', 'sql', 'web application', 'web application development', 'web development', 'windows', 'xml', 'excel'],
        'soft_skill': ['customer service', 'infrastructure', 'leadership', 'management', 'microsoft office', 'microsoft windows', 'operations', 'teamwork'],
        'candidate_field': 'it jobs',
        'label': 1
    },
    {
        'hard_skill': ['application', 'business', 'error messages', 'functional specification', 'java', 'mule', 'mulesoft', 'standard'],
        'soft_skill': ['information technology'],
        'candidate_field': 'it jobs',
        'label': 1
    }
]
