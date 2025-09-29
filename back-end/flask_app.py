from flask import *
from flask_cors import CORS, cross_origin
import sys

sys.path.append("../model")

import main

app = Flask(__name__)

cors = CORS(app)
app.config["CORS_HEADERS"] = "Content-Type"


@app.route("/", methods=["POST"])
def run_model():
    test_data = request.get_json()["text"]
    predict_label = main.run(test_data)
    print(predict_label)
    return predict_label


if __name__ == "__main__":
    app.run(debug=True)
