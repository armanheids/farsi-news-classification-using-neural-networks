import joblib
from sklearn.feature_extraction.text import TfidfVectorizer
import pandas as pd
import sys
import train

rf = joblib.load('../model/rf.pkl')
tfidf = joblib.load('../model/tfidf.pkl')

labels = [
    "cultural-art",
    "athletic",
    "economic",
    "other",
    "social",
    "politics",
    "tourism",
    "technology",
    "natural environment",
]

def get_str(pred):
    for i in range(len(pred)):
        if pred[i]:
            return labels[i]
    return labels[3]
    

def run(test_data):
    test_data = train.remove_prepositions(test_data)
    print(test_data)
    X_train_string = tfidf.transform([test_data])
    res = get_str(rf.predict(X_train_string)[0])
    return f'{res}'

    