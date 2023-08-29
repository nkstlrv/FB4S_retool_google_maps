from flask import Flask, jsonify, render_template

server = Flask(__name__)


@server.route("/", methods=["GET"])
def map():
    return render_template("main_map.html")


@server.route("/map_test", methods=["GET"])
def map_old_page():
    return render_template("map_test.html")


if __name__=='__main__':
    server.run(host='0.0.0.0', port=5000, debug=False)