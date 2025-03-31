
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import String, ForeignKey
from sqlalchemy.orm import Mapped, mapped_column,relationship



db = SQLAlchemy()

class User(db.Model):
    __tablename__ = "user"

    id: Mapped[int] = mapped_column(primary_key=True)
    email: Mapped[str] = mapped_column(nullable=False, unique=True)
    password: Mapped[str]= mapped_column(nullable=False)

    libro = db.relationship('Book', backref='user')

    def serializer(self):
        return{
            "id":self.id,
            "email":self.email,
            "password":self.password
            
        }


class Book(db.Model):
    __tablename__ = "book"

    id: Mapped[int] = mapped_column(primary_key=True)
    title: Mapped[str] = mapped_column(nullable=False)
    description:Mapped[str] = mapped_column()
    year: Mapped[int] = mapped_column()
    feedback: Mapped[str] = mapped_column()
    user_id: Mapped[int] = mapped_column(ForeignKey('user.id'))


    def serializer(self):
        return{
            "id":self.id,
            "title":self.title,
            "description":self.description,
            "year":self.year,
            "feedback":self.feedback,
            "user_id":self.user_id,
            
        }

  





