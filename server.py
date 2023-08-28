from flask import Flask, jsonify, render_template

server = Flask(__name__)


@server.route("/", methods=["GET"])
def index():
    return jsonify(
        {"message": "Hello World"}
    )


@server.route("/map")
def map_page():
    return render_template("map.html")


if __name__=='__main__':
    server.run(host='0.0.0.0', port=5000, debug=False)