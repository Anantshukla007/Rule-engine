
CREATE DATABASE IF NOT EXISTS rule_engine;

USE rule_engine;

CREATE TABLE IF NOT EXISTS rules (
    id INT AUTO_INCREMENT PRIMARY KEY,
    rule_string VARCHAR(255),
    ast_json TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
