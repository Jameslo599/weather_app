Weather Application Created as part of The Odin Project curriculum.

Live page (https://jameslo599.github.io/weather_app/)

Functionality

This weather app was made to display my understanding and ability of utilizing promises via async/await, and the 'fetch' method to interact with OpenWeather API. This application allows the user to obtain forecast data in hourly and daily intervals by making two API calls. The first API call obtains geographical coordinates of the user-submitted city and the second API call utilizes those coordinates to retrieve a large sum of data through OpenWeather's 'One Call' API. This data can pulled in both imperial and metric formats to encompass a larger user base. The temperature values can also be dynamically changed through clicking the conversion button in the top right corner.

I focused a lot on the design aspects of this app to ensure information was being displayed effectively to the user. Most notably, I implemented a side-scrollable div that holds 48 hours worth of hourly forecast data. The app is also fully responsive, but I had to remove the 'Chance of Rain' and 'Humidity' sections of the weekly forecast to have enough space on mobile devices. I also learned how to implement a loading screen to improve the user experience while obtaining API information.

Overall, the project was straightforward and the most difficult part was writing the logic to convert between metric and imperial units. Nevertheless, this was a very good learning experience and I look forward to using these newly-obtained skills in future projects!

-- James Lo
