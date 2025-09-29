import pandas as pd
import csv
import string
from string import punctuation
import nltk
nltk.download('punkt')

df = pd.read_csv('../model/train.csv')

file_path = "../model/short.txt"
with open(file_path, "r", encoding="utf-8") as file:
    text = file.readlines()
    prepositions = []
    for i in text :
        prepositions.append(i.replace('\n',""))


prepositions.extend([".","،",":","؟","!","0","1","2","3","4","5","6","7","8","9","\u200c","؛"])
prepositions.extend(punctuation)

def remove_prepositions(text):
    tokens = nltk.word_tokenize(text) 
    useable_words = [token for token in tokens if token not in prepositions]
    new_text = " ".join(useable_words)
    return new_text