import nltk
from nltk.stem import WordNetLemmatizer
import json
import random
import re

# intents = json.loads(open('intents.json').read())
with open('intents.json') as file:
    intents_data = json.load(file)

intents = intents_data['intents']

lemmatizer = WordNetLemmatizer()

# tokens = nltk.word_tokenize(sentence)
# print(tokens)

# tagged = nltk.pos_tag(tokens)
# print(tagged)

# words = []
# classes = []
# documents = []
# ignore_letters = ['?', '!', '.', ',']

# for intent in intents['intents']:
#     for pattern in intent['patterns']:
#         word_list = nltk.word_tokenize(pattern)
#         print(word_list)

# print(intents)

def match_intent(lemmatized_tokens):
    for intent in intents:
        for pattern in intent['patterns']:
            if all(re.search(fr'\b{lemmatized}\b',' '.join(lemmatized_tokens), re.IGNORECASE) for lemmatized in lemmatize(pattern)):
                # print("Friendly: " + random.choice(intent['responses']))
                return intent
    return None

def lemmatize(user):
    tokens = nltk.word_tokenize(user)
    lemmatized_tokens = [lemmatizer.lemmatize(token) for token in tokens]
    # print(lemmatized_tokens)
    return lemmatized_tokens

if __name__ == "__main__":
    
    while True:
        user = input("User: ").lower()

        if user == "quit" or user == "exit":
            print("Friendly: See you again!")
            break

        lemmatized_tokens = lemmatize(user)

        matched_intent = match_intent(lemmatized_tokens)
        if(matched_intent):
            print("Friendly: ", matched_intent['responses'][0])

        else:
            print("Friendly: I do not understand...")