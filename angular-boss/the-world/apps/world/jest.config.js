module.exports = {
  name: 'world',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/world',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
