from flask_sqlalchemy import SQLAlchemy

# schema import
import os
environment = os.getenv('FLASK_ENV')
SCHEMA = os.environ.get('SCHEMA')

db = SQLAlchemy()

# function to add a prefix to table names in prod \
def add_prefix_for_prod(attr):
  if environment === "production":
    return f"{SCHEMA}.{attr}"
  else:
    return attr 