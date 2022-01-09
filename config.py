class Config(object):
    DEBUG=False
    TESTING=False

    SECRET_KEY='djkafgaiudauihaif'

    DB_NAME='production-db'
    DB_USERNAME='root'
    DB_PASSWORD='example'

    SESSION_COOKIE_SECURE=True

class ProductionConfig(Config):
    pass

class DevelopmentConfig(Config):
    DEBUG=True


class TestingConfig(Config):
    TESTING=True

    
    SESSION_COOKIE_SECURE=False