from flask import Flask, jsonify, render_template

server = Flask(__name__)


@server.route("/", methods=["GET"])
def map():
    return render_template("map.html")


@server.route("/map_old")
def map_old_page():
    return render_template("map_old.html")


if __name__=='__main__':
    server.run(host='0.0.0.0', port=5000, debug=False)