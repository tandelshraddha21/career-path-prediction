import sqlite3

# Connect to the database
conn = sqlite3.connect('questions_database.db')  # Replace with your database name

# Create a cursor object
cursor = conn.cursor()

# SQL query to be executed
sql = '''CREATE TABLE  writing_questions 
(
    "ID"	INT,
    Questions	VARCHAR(512),
    A	VARCHAR(512),
    B	VARCHAR(512),
    C	VARCHAR(512),
    D	VARCHAR(512),
    ANS	VARCHAR(512)
);

INSERT INTO writing_questions ("ID", Questions, A, B, C, D, ANS) VALUES ('1', 'You speak so ….. that I can’t understand properly', 'fast', 'fastly', 'slow', 'nice', 'fast');
INSERT INTO writing_questions ("ID", Questions, A, B, C, D, ANS) VALUES ('2', 'He has taken my ….. car.', 'a', 'an', 'the', 'no article', 'no article');
INSERT INTO writing_questions ("ID", Questions, A, B, C, D, ANS) VALUES ('3', 'Shraddha is a singer. She sings ….. .', 'beautiful', 'beautifully', 'beauty', 'beautifulness', 'beautifully');
INSERT INTO writing_questions ("ID", Questions, A, B, C, D, ANS) VALUES ('4', '“What are you going to do with these old papers?”', 'I am going to recycle them.', 'I am going to reuse they.', 'I am going to burn themself.', 'I am going to throw it.', 'I am going to recycle them.');
INSERT INTO writing_questions ("ID", Questions, A, B, C, D, ANS) VALUES ('5', 'We ….. already ….. our lunch when the guests arrived.', 'had-took', 'have-taken', 'had taken', 'did-take', 'had taken');
INSERT INTO writing_questions ("ID", Questions, A, B, C, D, ANS) VALUES ('6', '….. Salman had married in time, his kids would have been adult till now.', 'If', 'Unless', 'When', 'Hardly', 'If');
INSERT INTO writing_questions ("ID", Questions, A, B, C, D, ANS) VALUES ('7', '….. she ….. away yesterday?', 'Why ran', 'Did run', 'Where running', 'Was run', 'Did run');
INSERT INTO writing_questions ("ID", Questions, A, B, C, D, ANS) VALUES ('8', '….. sir asks a question, even we won’t answer.', 'Hardly', 'If', 'Unless', 'When', 'Unless');
INSERT INTO writing_questions ("ID", Questions, A, B, C, D, ANS) VALUES ('9', '….. water was in a jug so a crow survived.', 'a little', 'a few', 'many', 'little', 'a little');
INSERT INTO writing_questions ("ID", Questions, A, B, C, D, ANS) VALUES ('10', '….. we …. without water?', 'Can living', 'Can live', 'Can be', 'Can be lived', 'Can live');
INSERT INTO writing_questions ("ID", Questions, A, B, C, D, ANS) VALUES ('11', 'Kites ….. last year also.', 'did fly', 'were flown', 'flew', 'flying', 'were flown');
INSERT INTO writing_questions ("ID", Questions, A, B, C, D, ANS) VALUES ('12', 'Listen, a nice song ….. .', 'is singing', 'has sung', 'was being sung', 'is being sung', 'is being sung');
INSERT INTO writing_questions ("ID", Questions, A, B, C, D, ANS) VALUES ('13', 'Listen, an announcement ... to cancel all the flights due to heavy ice-fall.', 'making', 'is making', 'is made', 'is being made', 'is being made');
INSERT INTO writing_questions ("ID", Questions, A, B, C, D, ANS) VALUES ('14', 'Listen, she is talking .......... you.', 'for', 'in', 'about', 'at', 'about');
INSERT INTO writing_questions ("ID", Questions, A, B, C, D, ANS) VALUES ('15', 'Look, a new missile …. .', 'is launched', 'is launch', 'is being launch', 'is being launched', 'is being launched');
INSERT INTO writing_questions ("ID", Questions, A, B, C, D, ANS) VALUES ('16', 'prerequisite', 'necessary', 'course', 'difficult', 'tar', 'necessary');
INSERT INTO writing_questions ("ID", Questions, A, B, C, D, ANS) VALUES ('17', 'supplant', 'grow', 'replace', 'undo', 'question', 'replace');
INSERT INTO writing_questions ("ID", Questions, A, B, C, D, ANS) VALUES ('18', 'pretty', 'plain', 'confusing', 'ugly', 'terrible', 'terrible');
INSERT INTO writing_questions ("ID", Questions, A, B, C, D, ANS) VALUES ('19', 'civil is most similar to', 'unkind', 'trite', 'public', 'questionable', 'public');
INSERT INTO writing_questions ("ID", Questions, A, B, C, D, ANS) VALUES ('20', 'candid is most opposite to', 'unkind', 'blunt', 'valid', 'dishonest', 'dishonest');
INSERT INTO writing_questions ("ID", Questions, A, B, C, D, ANS) VALUES ('21', 'flaunt is most opposite to', 'regard', 'sink', 'hide', 'propose', 'hide');
INSERT INTO writing_questions ("ID", Questions, A, B, C, D, ANS) VALUES ('22', 'assure is most opposite to', 'alarm', 'reassure', 'quiet', 'unsure', 'alarm');
INSERT INTO writing_questions ("ID", Questions, A, B, C, D, ANS) VALUES ('23', 'obsequious is most opposite to', 'clear', 'clever', 'domineering', 'dandified', 'domineering');
INSERT INTO writing_questions ("ID", Questions, A, B, C, D, ANS) VALUES ('24', 'banal is most opposite to', 'sincere', 'wealthy', 'extraordinary', 'trustworthy', 'extraordinary');
INSERT INTO writing_questions ("ID", Questions, A, B, C, D, ANS) VALUES ('25', 'parsimony is most opposite to', 'generosity', 'sinfulness', 'verbosity', 'tenderness', 'generosity');
INSERT INTO writing_questions ("ID", Questions, A, B, C, D, ANS) VALUES ('26', 'truculent is most opposite to', 'faltering', 'gentle', 'facile', 'submissive', 'gentle');
INSERT INTO writing_questions ("ID", Questions, A, B, C, D, ANS) VALUES ('27', 'gracious is most opposite to', 'cordial', 'tactile', 'furious', 'tactile', 'tactile');
INSERT INTO writing_questions ("ID", Questions, A, B, C, D, ANS) VALUES ('28', 'valor is most opposite to', 'cowardice', 'false ', 'drop', 'heavy', 'cowardice');
INSERT INTO writing_questions ("ID", Questions, A, B, C, D, ANS) VALUES ('29', 'severe is most opposite to', 'lenient', 'cautious', 'join', 'one', 'lenient');
INSERT INTO writing_questions ("ID", Questions, A, B, C, D, ANS) VALUES ('30', 'exact is most opposite to', 'join', 'sympathetic', 'whole', 'whole', 'whole');
'''
# Execute the query
cursor.execute(sql)

# Fetch the results
results = cursor.fetchall()

# Print the results
for row in results:
    print(row)

# Close the cursor and connection
cursor.close()
conn.close()
