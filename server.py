from flask import Flask
from flask import jsonify

server = Flask(__name__)


@server.route("/", methods=["GET"])
def index():
    return jsonify(
        {"message": "Hello World"}
    )


if __name__=='__main__':
    server.run(host='0.0.0.0', port=5000, debug=False)