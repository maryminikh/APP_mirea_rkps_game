 # todo Путь к исполняемому файлу Node.js
 NODE = node

 # Путь к файлам исходного кода
 JS_FILES := $(shell find . -name './main.js')

 # Цель по умолчанию
 all: build

 # Сборка проекта через webpack
build:
	webpack --mode production

# для виндоус в exe, для линукс какой удобно


start:
	electron .


#node_modules:
#    npm install

# # Запуск линтера
# lint:
#   $(NODE) node_modules/.bin/eslint $(JS_FILES)

 # Запуск тестов
# test:
#   $(NODE) node_modules/.bin/mocha test/*.js

# # Очистка проекта
# clean:
#     rm -rf build/

# .PHONY: all build lint test clean
