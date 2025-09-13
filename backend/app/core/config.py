from pydantic_settings import BaseSettings
from pydantic import ConfigDict

class Settings(BaseSettings):
    API_V1_STR: str = "/api/v1"
    PROJECT_NAME: str = "Python Playbook"
    
    model_config = ConfigDict(
        case_sensitive=True,
        env_file=".env"
    )

settings = Settings()