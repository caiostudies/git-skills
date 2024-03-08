
from typing import Optional, List
from pydantic import BaseModel as SchemaBaseModel
from sqlalchemy import LargeBinary

class TrailSchema(SchemaBaseModel):
    id: Optional[int] = None
    nome: str
    desc: str
    focal_point: str
    criador_trilha: int
    carga_horaria: int
    conteudo: List[str]
    image_trail: Optional [str]

