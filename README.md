# react-native-app

Було реалізовано react native додаток без відображення original зображення і через проблемі з встановленням іконок не точності в дизайні.

Для запуско на присторї потрібно перейти в project_folder/android створити файл local.propreties і вставити sdk.dir=C:\\Users\\your_computer_name\\AppData\\Local\\Android\\Sdk.
Далі вводимо в консоль npx react-native run-android з основної папки проекту.

Для збірки apk переходимо project_folder/android і вводимо в консоль gradlew clean, а потім gradlew assembleRelease && react-native run-android --variant=release. Ми отримали apk файл в project_folder/android/app/build/outputs/apk/release/app-release.apk

Версія андроіда повина бути 6 і вище.

Приблизно було вітрачено 12 годин на це завдання.