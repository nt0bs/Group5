class Config:
    """Base configuration."""
    SQLALCHEMY_DATABASE_URI = 'sqlite:///app.db'  # Default database
    SQLALCHEMY_TRACK_MODIFICATIONS = False  # To avoid warning

class TestConfig(Config):
    """Testing configuration with in-memory SQLite."""
    TESTING = True
    SQLALCHEMY_DATABASE_URI = 'sqlite:///:memory:'