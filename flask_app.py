from flask import Flask, send_from_directory

app = Flask(__name__, static_folder='img', static_url_path='/img')

@app.route('/')
def index():
    return send_from_directory('.', 'index.html')
