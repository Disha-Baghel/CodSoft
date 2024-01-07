import nltk
from nltk.stem import WordNetLemmatizer
import json
import random
import re
import requests

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

def get_weather(city):
    api_key = "966de72d12694c5731f0e17917868be7"
    base_url = "http://api.weatherstack.com/"

    complete_url = base_url + "current" + "?access_key=" + api_key + "&query=" + city
    
    try:
        response = requests.get(complete_url)
        data = response.json()

        if response.status_code == 200:
            return(f"The weather in " + city + " is " + str(data['current']['temperature']) + " degrees.")
        else:
            return("unable to fetch weather at the moment")
    except Exception as e:
        return (f"An error occurred: {str(e)}")


if __name__ == "__main__":
    
    while True:
        user = input("User: ").lower()

        if user == "quit" or user == "exit":
            print("Friendly: See you again!")
            break

        lemmatized_tokens = lemmatize(user)

        matched_intent = match_intent(lemmatized_tokens)
        if(matched_intent):
            if matched_intent["tag"] == 'weather':
                city_match = re.search(r'\b(?:weather|in)\s+(\w+)\b', user, re.IGNORECASE)
                if city_match:
                    city = city_match.group(1)
                    weather_response = get_weather(city)
                    print("Friendly: ", weather_response)
                
                else:
                    print("Friendly: Please specify a city.")
            else:
                print("Friendly: ", matched_intent['responses'][random.randint(0, len(matched_intent['responses']) - 1)])

        else:
            print("Friendly: I do not understand...")

