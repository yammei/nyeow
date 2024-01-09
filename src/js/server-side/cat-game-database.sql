CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    hashed_password VARCHAR(255) NOT NULL,
    salt VARCHAR(255) NOT NULL,
    cat_data VARCHAR(255)
);

CREATE TABLE cats (
    userId INT,
    id INT,
    name VARCHAR(255) NOT NULL,
    color INT,
    model VARCHAR(255),
    ageMonths INT,
    ageYears INT,
    health INT,
    happiness INT,
    energy INT,
    xPosition INT,
    yPosition INT,
    liveYPos INT
);
