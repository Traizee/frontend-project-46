install:
		npm ci

gendiff:
		node/gendiff.js -h

publish:
		npm publish --dry-run

lint:
		npx eslint .

test-coverage:
		npm test -- --coverage