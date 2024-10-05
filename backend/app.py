from flask import Flask
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

def create_app(config_class=None):
    app = Flask(__name__)
    if config_class:
        app.config.from_object(config_class)  # Load the specified config (including TestConfig)
    else:
        app.config.from_object('config.Config')  # Default config
    
    db.init_app(app)
    return app