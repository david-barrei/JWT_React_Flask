
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import String, ForeignKey
from sqlalchemy.orm import Mapped, mapped_column,relationship

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = "user"

    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str] = mapped_column(nullable=False)
    password: Mapped[str]= mapped_column()

    libro = db.relationship('book')


class Book(db.Model):
    __tablename__ = "book"

    id: Mapped[int] = mapped_column(primary_key=True)
    title: Mapped[str] = mapped_column(nullable=False)
    description:Mapped[str] = mapped_column()
    year: Mapped[int] = mapped_column()
    feedback: Mapped[str] = mapped_column()
    user: Mapped[int] = mapped_column(primary_key=True)
    







