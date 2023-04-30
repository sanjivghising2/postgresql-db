CREATE DATABASE todo;


CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
    user_name VARCHAR(20) NOT NULL,
    user_email VARCHAR(20) NOT NULL,
    user_password VARCHAR(20)NOT NULL,
    phone_number int NOT NULL
);
CREATE TABLE posts(
    img_url VARCHAR(40) NOT NULL,
    caption VARCHAR(20) NOT NULL,
    user_id SERIAL PRIMARY KEY
);
CREATE TABLE comments(
    comment_text VARCHAR(40) NOT NULL,
    user_id SERIAL PRIMARY KEY
);

INSERT INTO users (user_name, user_email, user_password, phone_number) VALUES ('henry','asdf@gmail.com','12345','100');



CREATE TABLE hotel(
    hotel_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
)
CREATE TABLE todos(
    room_id SERIAL PRIMARY KEY,
    task VARCHAR(20),
    description VARCHAR(255)
);