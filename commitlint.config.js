const types = [
    'build',
	'ci',
	'docs',
	"chore",
	'feat',
	'fix',
	'perf',
	'refactor',
	'revert',
	'style',
	'test',
    'ui',
    'deps'
];
module.exports = {
    extends: ['@commitlint/config-angular'],
    rules: {
        'type-enum': [2, 'always', types],
		'header-max-length': [2, 'always', 100],
    }
};